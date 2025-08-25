import { SchemaResponse } from '../../schemas/generalSchema';
import { AdicionaAcompanhamentoSchema, TicketSchema, Type } from '../../schemas/glpi/ticketSchema';
import { createTicketInfo } from '../../utils/functions/createTicketInfo';
import { createValidateInfo } from '../../utils/functions/createValidateInfo';
import { errorStatuses } from '../constants';
import { DadosOV } from '../../schemas/sap/dadosOvSchema';
import { GroupedAnswers } from '../../schemas/glpi/answerSchema';
import { httpClient } from '../../services/httpClient';
import { sapOdataClient } from '../../services/sapOdataClient';
import { textoValidacaoGerente, textoValidacaoLogistica, textoValidacaoUnicaGerente } from '../html/dtentregaov';
import { formatarDataBr, parseDataBr } from '../../utils/functions/formatarDataBr';
import { toSapOdataDate } from '../../utils/functions/toSapOdataDate';

export async function validacaoGerencial(
    validacao: { status: number },
    tipoForm: Type,
    ticketId: number,
    GRUPO_VALIDACAO: string,
    dadosOV: DadosOV,
    filialVendedor: string,
    answer: GroupedAnswers,
    ticket: TicketSchema,
    endpoint: string,
    validacaoFabrica: boolean
): Promise<SchemaResponse | any> {
    let solveTicket = false;
    let closeTicket = false;
    let mensagemSucesso = '';
    let mensagemErro = '';
    let mensagemAlerta = '';
    let userValidateId: number | undefined;
    let infoData = '';

    const dataEntrega = new Date(answer.questions['Data_de_Entrega']);
    console.log('chegou aqui depois do dataEntrega', dataEntrega);
    console.log('dataentrevaov', formatarDataBr(dadosOV.dataEntrega));
    const dataEntregaOld = parseDataBr(formatarDataBr(dadosOV.dataEntrega));

    const dataEntregaStr = dataEntrega.toISOString().slice(0, 10);
    const dataEntregaOldStr = dataEntregaOld.toISOString().slice(0, 10);

    let diffMs = dataEntrega.getTime() - dataEntregaOld.getTime();
    let diffData = Math.round(diffMs / (1000 * 60 * 60 * 24));

    const MOTIVO_ALTERACAO = ` > Motivo: ${answer.questions['Motivo']} - Ticket: ${ticketId}`
    const USUARIO_SOLICITACAO = ticket.requester.name;
    const dataEntregaSolicitada = formatarDataBr(answer.questions['Data_de_Entrega']);
    const dataEntregaAtual = formatarDataBr(dadosOV.dataEntrega);
    const GRUPO_VALIDACAO_GERENTE = `Filial 0${filialVendedor} > Administrativo > Alterar Data de Entrega da Venda`;
    const GRUPO_VALIDACAO_FABRICA = 'Fábrica > Alterar Data de Entrega da Venda';
    const tipo_ecommerce = 'ZB2C';

    const addAcompanhamentoEndpoint = `/adicionaAcompanhamento/${ticketId}`;
    const solicitaValidacaoEndpoint = `/solicitaValidacao/${ticketId}`;

    console.log('entrou na função validacaoGerencial');
    let ticketInfo: AdicionaAcompanhamentoSchema;
    console.log('tiicket', ticket)

    switch (validacao.status) {
        case 1: // Precisa de validação
            console.log('entrou no case 1, precisa de validação');
            mensagemErro = 'Necessário validação do Gerente da Filial'
            if (dataEntregaStr < dataEntregaOldStr) {
                infoData = `A data de entrega irá antecipar ${Math.abs(diffData)} dia(s).`;
            } else if (dataEntregaStr > dataEntregaOldStr) {
                infoData = `A data de entrega irá postergar ${diffData} dia(s).`;
            } else {
                infoData = `A data de entrega não foi alterada.`;
            }

            if (GRUPO_VALIDACAO === GRUPO_VALIDACAO_GERENTE && !validacaoFabrica) {
                mensagemAlerta = textoValidacaoUnicaGerente(dadosOV.ordem, dadosOV.centro, dataEntregaAtual, dataEntregaSolicitada, infoData);
            } else if (GRUPO_VALIDACAO === GRUPO_VALIDACAO_GERENTE && validacaoFabrica) {
                mensagemAlerta = textoValidacaoGerente(dadosOV.ordem, dadosOV.centro, dataEntregaAtual, dataEntregaSolicitada, infoData);
            } else {
                mensagemErro = 'Necessário validação do Gerente de Planejamento de Produção e Logística';
                mensagemAlerta = textoValidacaoLogistica(dadosOV.ordem, dadosOV.centro, dataEntregaAtual, dataEntregaSolicitada, infoData);
            }
            const mensagemValidacao = 'Por gentileza, valide as informações e aprove ou recuse a alteração.';
            ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);
            const adicionaAcompanhamento: any = await httpClient.post(addAcompanhamentoEndpoint, ticketInfo);

            if (errorStatuses.includes(adicionaAcompanhamento.status)) {
                return { status: 400, message: 'Erro ao adicionar acompanhamento no ticket' } as SchemaResponse;
            }

            // Ajuste relacionado quando o vendedor é de outra filial, excluindo fábrica.
            let centroOvSemZeros = dadosOV.centro.replace(/^0+/, '');
            if (!validacaoFabrica && (centroOvSemZeros !== filialVendedor)) {
                GRUPO_VALIDACAO = `Filial 0${centroOvSemZeros} > Administrativo > Alterar Data de Entrega da Venda`;
            }

            const validateInfo = createValidateInfo(mensagemValidacao, userValidateId, GRUPO_VALIDACAO);

            await new Promise(resolve => setTimeout(resolve, 2000)); // Delay de 2 segundos

            const solicitaValidacao = await httpClient.post(solicitaValidacaoEndpoint, validateInfo);

            return solicitaValidacao;
        case 2: // Aguardando validação
            console.log('entrou no case 2, aguardando validação');
            return {
                status: 400,
                message: 'Aguardando validação Gerencial',
            }
        case 3: // Validação aprovada
            console.log('entrou no case 3, validação aprovada');
            if (GRUPO_VALIDACAO === GRUPO_VALIDACAO_GERENTE && validacaoFabrica) {
                console.log('dadosOV:', dadosOV);
                return { status: 400, message: 'Aprovado pelo gerente, mas não é necessário validação da fábrica.' } as SchemaResponse;
            }

            console.log('dataEntregaSolicitada:', dataEntregaSolicitada);
            const payloadDtEntrega = {
                DATA_ENTREGA: toSapOdataDate(answer.questions['Data_de_Entrega']),
                MOTIVO_ALTERACAO: MOTIVO_ALTERACAO,
                USUARIO_SOLICITACAO: USUARIO_SOLICITACAO,
            };

            const alteraDtEntrega: any = await sapOdataClient.put(endpoint, payloadDtEntrega);

            if (errorStatuses.includes(alteraDtEntrega.status)) {
                return { status: 400, message: 'Erro ao alterar data de entrega' } as SchemaResponse;
            }

            mensagemSucesso = 'Data de entrega da venda alterada com sucesso.';
            solveTicket = true;
            closeTicket = true;

            ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);
            return await httpClient.post(addAcompanhamentoEndpoint, ticketInfo);

        case 4: // Validação recusada
            console.log('entrou no case 4, validação recusada');
            if (GRUPO_VALIDACAO === GRUPO_VALIDACAO_GERENTE) {
                mensagemErro = 'O processo passou por análise Gerencial, mas foi recusado.';
            } else {
                mensagemErro = 'O processo passou por análise do Gerente de Planejamento e Logística, mas foi recusado.';
            }
            mensagemAlerta = 'Data de entrega da venda não foi alterada.';
            solveTicket = true;
            closeTicket = true;
            ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);
            return await httpClient.post(addAcompanhamentoEndpoint, ticketInfo);
        default:
            return { status: 200, message: 'Nenhum processamento necessário' } as SchemaResponse;
    }

}
