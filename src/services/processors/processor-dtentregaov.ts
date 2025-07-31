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

        try {
            const salesOrders = await sapOdataClient.get(ENDPOINT_GET);

            // Aqui você trata os dados
            const dadosOV: DadosOV = mapSalesOrder(salesOrders);

            if (FABRICA.includes(dadosOV.centro)) {
                aprovacaoFabrica = true;
            }

            // Busca a loja do vendedor
            const codigoIntegracao = dadosOV.vendedor;
            const filialVendedor = await buscaFilialVendedor(codigoIntegracao);

            const GRUPO_VALIDACAO_GERENTE = `Filial 0${filialVendedor} > Administrativo > Gerência`;

            console.log('Filial do vendedor:', filialVendedor);
            console.log('ticket:', ticket);

            const validacaoGerenteStatus: { status: number } = await httpClient.get(`${VALIDACAO_ENDPOINT}${GRUPO_VALIDACAO_GERENTE}`);

            console.log('Validacao Gerente:', validacaoGerenteStatus);

            const validacaoGerente = await validacaoGerencial(validacaoGerenteStatus, TIPO_FORM, TICKET_ID, GRUPO_VALIDACAO_GERENTE, dadosOV, filialVendedor, answer, ENDPOINT_PUT, aprovacaoFabrica);


            if (aprovacaoFabrica) {
                const validacao: { status: number } = await httpClient.get(`${VALIDACAO_ENDPOINT}${GRUPO_VALIDACAO_FABRICA}`);

                const validaCenarioFabrica = await validacaoGerencial(validacao, TIPO_FORM, TICKET_ID, GRUPO_VALIDACAO_FABRICA, dadosOV, filialVendedor, answer, ENDPOINT_PUT, aprovacaoFabrica);

                return validaCenarioFabrica;
            } else {
                // const payloadDtEntrega = {
                //     DATA_ENTREGA: toSapOdataDate(answer.questions['Data_de_Entrega']),
                // };

                // const alteraDtEntregaLoja: any = await sapOdataClient.put(ENDPOINT_PUT, payloadDtEntrega);
                // if (errorStatuses.includes(alteraDtEntregaLoja.status)) {
                //     return { status: 400, message: 'Erro ao alterar data de entrega' } as SchemaResponse;
                // }

                // // Aqui você pode retornar um sucesso, se quiser
                // mensagemSucesso = 'Data de entrega da venda alterada com sucesso.';
                // solveTicket = true;
                // closeTicket = true;
                // ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, TIPO_FORM, mensagemAlerta, solveTicket, closeTicket);
                // return await httpClient.post(ADD_ACOMPANHAMENTO_ENDPOINT, ticketInfo);
            }
        } catch (error: any) {
            if (error.response) {
                const data = error.response.data;
                let mensagem = 'Erro ao alterar data de entrega';

                // Acessa a mensagem do erro SAP OData
                if (data?.error?.message?.value) {
                    mensagem = data.error.message.value;
                }

                // mensagemErro = mensagem;
                // closeTicket = true;
                // solveTicket = true;
                // ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);
                // const encerraChamado = await httpClient.post(addAcompanhamentoEndpoint, ticketInfo);

                return { status: error.response.status || 400, message: mensagem } as SchemaResponse;
            } else {
                return { status: 500, message: 'Erro de comunicação com SAP' } as SchemaResponse;
            }
        }
    }
}