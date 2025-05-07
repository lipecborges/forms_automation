import { SchemaResponse } from '../../schemas/generalSchema';
import { AdicionaAcompanhamentoSchema, Type } from '../../schemas/glpi/ticketSchema';
import { createTicketInfo } from '../../utils/functions/createTicketInfo';
import { createValidateInfo } from '../../utils/functions/createValidateInfo';
import { textoInscricaoValidacaoIsento } from '../../utils/html/htmlInscricao';
import { atualizarInscricao } from '../../controllers/vmix/updateController';
import { errorStatuses } from '../../utils/constants';

export async function validacaoFiscal(
    validacaoFiscal: { status: number },
    inscricoes: any[],
    formulario: { uf: string },
    taxId: string,
    tipoForm: Type,
    httpClient: any,
    ticketId: string,
    GRUPO_VALIDACAO: string,
    ISENTO: string,
    errorStatuses: number[]
): Promise<SchemaResponse | any> {
    let solveTicket = false;
    let closeTicket = false;
    let mensagemSucesso = '';
    let mensagemErro = '';
    let mensagemAlerta = '';

    const addAcompanhamentoEndpoint = `/adicionaAcompanhamento/${ticketId}`;
    const solicitaValidacaoEndpoint = `/solicitaValidacao/${ticketId}`;

    let ticketInfo: AdicionaAcompanhamentoSchema;

    switch (validacaoFiscal.status) {
        case 1:
            let userValidateId: number | undefined;
            const inscricoesValidas = inscricoes.filter(ins => ins.enabled && ins.status.id === 1);
            const numerosValidos = inscricoesValidas.map(ins => ins.number).join(', ') || 'nenhuma inscrição válida encontrada';
            const mensagemValidacao = 'Por gentileza, valide as informações e aprove ou recuse a alteração.';
            mensagemAlerta = textoInscricaoValidacaoIsento(numerosValidos, formulario.uf);
            mensagemErro = 'Necessário Validação da Equipe Fiscal';

            ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);
            const adicionaAcompanhamento = await httpClient.post(addAcompanhamentoEndpoint, ticketInfo);

            if (errorStatuses.includes(adicionaAcompanhamento.status)) {
                return { status: 400, message: 'Erro ao adicionar acompanhamento no ticket' } as SchemaResponse;
            }

            const validateInfo = createValidateInfo(mensagemValidacao, userValidateId, GRUPO_VALIDACAO);
            await new Promise(resolve => setTimeout(resolve, 2000)); // Delay de 2 segundos
            const solicitaValidacao = await httpClient.post(solicitaValidacaoEndpoint, validateInfo);

            return solicitaValidacao;

        case 2:
            return {
                status: 400,
                message: 'Aguardando validação do grupo fiscal',
            } as SchemaResponse;

        case 3:
            const atualizaInscricao = await atualizarInscricao(taxId, ISENTO);
            if (errorStatuses.includes(atualizaInscricao.status)) {
                mensagemErro = 'Não foi encontrado cliente com o CPF informado';
            } else {
                mensagemSucesso = ISENTO;
            }
            ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);
            return await httpClient.post(addAcompanhamentoEndpoint, ticketInfo);

        case 4:
            mensagemErro = 'O processo passou por análise da equipe fiscal, mas foi recusado.';
            mensagemAlerta = 'Necessário análise da situação cadastral do cliente';
            ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);
            return await httpClient.post(addAcompanhamentoEndpoint, ticketInfo);

        default:
            return { status: 200, message: 'Nenhum processamento necessário' } as SchemaResponse;
    }
}