import { GroupedAnswers } from '../../schemas/glpi/answerSchema';
import { TicketSchema } from '../../schemas/glpi/ticketSchema';
import { createTicketInfo } from '../../utils/functions/createTicketInfo';
import { httpClient } from '../httpClient';
import { mapSalesOrder } from '../../utils/functions/mapSalesOrder';
import { sapOdataClient } from '../sapOdataClient';
import { TicketProcessor } from './processor.interface';
import { DadosOV } from '../../schemas/sap/dadosOvSchema';
import { validacaoGerencial } from '../../utils/functions/validacaoGerencial';
import { SchemaResponse } from '../../schemas/generalSchema';
import { toSapOdataDate } from '../../utils/functions/toSapOdataDate';
import { errorStatuses } from '../../utils/constants';
import { buscaFilialVendedor } from '../../controllers/vmix/searchController';
import { parseDateISO } from '../../utils/functions/formatarDataBr';

export class ProcessorDtentregaOv implements TicketProcessor {
    async process(answer: GroupedAnswers, ticket: TicketSchema): Promise<any> {
        let aprovacaoFabrica = false;
        let mensagemErro = '';
        let mensagemAlerta = '';
        let mensagemSucesso = '';
        let closeTicket = true;
        let solveTicket = true;
        let ticketInfo;

        const ORDEM_VENDA = answer.questions['Ordem_de_Venda'];
        const DATA_ENTREGA_SOLICITADA = answer.questions['Data_de_Entrega'];
        const TICKET_ID = ticket.id;
        const TIPO_FORM = 'dtentregaov';
        const GRUPO_VALIDACAO_FABRICA = 'Fábrica > Alterar Data de Entrega da Venda';
        const FABRICA = ['0007', '0008', '0010', '0012'];
        const OV_ENDPOINT = '/ZOV_SRV'
        const OV_HEADER_ENDPOINT = '/SALES_ORDER_HEADERSet'
        const FORMAT = '?$format=json';
        const ADD_ACOMPANHAMENTO_ENDPOINT = `/adicionaAcompanhamento/${TICKET_ID}`;
        const ENDPOINT_GET = `${OV_ENDPOINT}${OV_HEADER_ENDPOINT}('${ORDEM_VENDA}')${FORMAT}`;

        const ENDPOINT_PUT = `${OV_ENDPOINT}${OV_HEADER_ENDPOINT}('${ORDEM_VENDA}')`;

        const VALIDACAO_ENDPOINT = `/validacoesTicket/${TICKET_ID}?grupo=`;

        let grupoValidacaoGerente

        try {
            console.log('ticketId:', TICKET_ID);
            console.log('Data de entrega solicitada:', DATA_ENTREGA_SOLICITADA);
            const dataEntrega = parseDateISO(DATA_ENTREGA_SOLICITADA);
            const hoje = new Date();
            const diaSemana = dataEntrega.getDay();

            const dataEntregaStr = dataEntrega.toISOString().slice(0, 10);
            const hojeStr = hoje.toISOString().slice(0, 10);


            console.log('Data de entrega formatada:', dataEntregaStr);
            console.log('Data de hoje formatada:', hojeStr);
            console.log('Dia da semana:', diaSemana);

            if (dataEntregaStr < hojeStr) {
                console.log('entrou aqui')
                mensagemErro = 'Data de entrega solicitada deve ser maior ou igual a hoje.';
                solveTicket = true;
                closeTicket = true;
                ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, TIPO_FORM, mensagemAlerta, solveTicket, closeTicket);
                const adicionaAcompanhamento: any = await httpClient.post(ADD_ACOMPANHAMENTO_ENDPOINT, ticketInfo);

                if (errorStatuses.includes(adicionaAcompanhamento.status)) {
                    return { status: 400, message: 'Erro ao adicionar acompanhamento no ticket' } as SchemaResponse;
                }

                return { status: 400, message: mensagemErro } as SchemaResponse;
            } else if (diaSemana === 0 || diaSemana === 6) {
                // 0 = domingo, 6 = sábado
                mensagemErro = 'Data de entrega solicitada só pode ser em dias úteis.';
                solveTicket = true;
                closeTicket = true;
                ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, TIPO_FORM, mensagemAlerta, solveTicket, closeTicket);
                const adicionaAcompanhamento: any = await httpClient.post(ADD_ACOMPANHAMENTO_ENDPOINT, ticketInfo);

                if (errorStatuses.includes(adicionaAcompanhamento.status)) {
                    return { status: 400, message: 'Erro ao adicionar acompanhamento no ticket' };
                }

                return { status: 400, message: mensagemErro };
            }

            const salesOrders = await sapOdataClient.get(ENDPOINT_GET);

            // Aqui você trata os dados
            const dadosOV: DadosOV = mapSalesOrder(salesOrders);

            console.log('centro', dadosOV.centro);
            if (FABRICA.includes(dadosOV.centro)) {
                aprovacaoFabrica = true;
            }

            // Busca a loja do vendedor
            const codigoIntegracao = dadosOV.vendedor;
            const filialVendedor = await buscaFilialVendedor(codigoIntegracao);

            let centroAprovacao
            if (aprovacaoFabrica) {
                centroAprovacao = filialVendedor
                if (dadosOV.tipoDoc === 'ZB2C') {
                    grupoValidacaoGerente = GRUPO_VALIDACAO_FABRICA;
                } else {
                    centroAprovacao = filialVendedor
                }
            } else {
                centroAprovacao = dadosOV.centro.replace(/^0+/, '');
            }

            grupoValidacaoGerente = `Filial 0${centroAprovacao} > Administrativo > Alterar Data de Entrega da Venda`;

            const validacaoGerenteStatus: { status: number } = await httpClient.get(`${VALIDACAO_ENDPOINT}${grupoValidacaoGerente}`);

            console.log('Validacao Gerente:', validacaoGerenteStatus);

            await validacaoGerencial(validacaoGerenteStatus, TIPO_FORM, TICKET_ID, grupoValidacaoGerente, dadosOV, filialVendedor, answer, ticket, ENDPOINT_PUT, aprovacaoFabrica);

            if (aprovacaoFabrica) {
                const validacao: { status: number } = await httpClient.get(`${VALIDACAO_ENDPOINT}${GRUPO_VALIDACAO_FABRICA}`);

                const validaCenarioFabrica = await validacaoGerencial(validacao, TIPO_FORM, TICKET_ID, GRUPO_VALIDACAO_FABRICA, dadosOV, filialVendedor, answer, ticket, ENDPOINT_PUT, aprovacaoFabrica);

                return validaCenarioFabrica;
            }
        } catch (error: any) {
            console.log('caiu aqui')
            if (error.response) {
                const data = error.response.data;
                console.error('Erro ao alterar data de entrega:', data);
                let mensagem = 'Erro ao alterar data de entrega';

                // Acessa a mensagem do erro SAP OData
                if (data?.error?.message?.value) {
                    mensagem = data.error.message.value;
                }

                mensagemErro = mensagem;
                closeTicket = true;
                solveTicket = true;
                ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, TIPO_FORM, mensagemAlerta, solveTicket, closeTicket);
                const encerraChamado = await httpClient.post(ADD_ACOMPANHAMENTO_ENDPOINT, ticketInfo);
                return { status: error.response.status || 400, message: mensagem } as SchemaResponse;
            } else {
                console.error('Erro desconhecido ao alterar data de entrega:', error);
                return { status: 500, message: 'Erro de comunicação com SAP' } as SchemaResponse;
            }
        }
    }
}