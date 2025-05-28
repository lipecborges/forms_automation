import { SchemaResponse } from '../../schemas/generalSchema';
import { AdicionaAcompanhamentoSchema, Type } from '../../schemas/glpi/ticketSchema';
import { createTicketInfo } from '../../utils/functions/createTicketInfo';
import { createValidateInfo } from '../../utils/functions/createValidateInfo';
import { textoInscricaoValidacaoIsento } from '../../utils/html/htmlInscricao';
import { atualizarInscricao } from '../../controllers/vmix/updateController';
import { Formulario } from '../../types/interface/ieInterface';
import { errorStatuses } from '../constants';
import { close } from 'fs';

export async function validaCenariosFiscal(
    validacaoFiscal: { status: number },
    inscricoes: any[],
    formulario: Formulario,
    taxId: string,
    tipoForm: Type,
    httpClient: any,
    ticketId: number,
    GRUPO_VALIDACAO: string,
): Promise<SchemaResponse | any> {
    let solveTicket = false;
    let closeTicket = false;
    let mensagemSucesso = '';
    let mensagemErro = '';
    let mensagemAlerta = '';
    const ISENTO = 'ISENTO';
    const CONTRIBUINTE = 'CONTRIBUINTE';
    let userValidateId: number | undefined;
    // Objeto com os status de inscrição estadual
    const STATUS_INSCRICAO = {
        1: 'Sem restrição.',
        2: 'Bloqueado como destinatário na UF.',
        3: 'Vedada operação como destinatário na UF.'
    }

    const addAcompanhamentoEndpoint = `/adicionaAcompanhamento/${ticketId}`;
    const solicitaValidacaoEndpoint = `/solicitaValidacao/${ticketId}`;

    let ticketInfo: AdicionaAcompanhamentoSchema;
    const inscricoesValidas = inscricoes.filter(ins => ins.enabled && ins.status.id === 1);

    switch (validacaoFiscal.status) {
        case 1:
            if (inscricoesValidas.length === 1 && formulario.tipoInscricao != ISENTO) {
                inscricoesValidas[0].number = inscricoesValidas[0].number.replace(/^0+/, ''); // Removendo zero a esquerda
                const inscricao = inscricoesValidas.find(i => i.number === formulario.inscricaoEstadual);
                if (!inscricao) {
                    mensagemErro = 'Inscrição Estadual informada no formulário não corresponde a nenhuma inscrição válida no cadastro.';
                    closeTicket = true;
                    solveTicket = true;
                    ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);
                    const adicionaAcompanhamento = await httpClient.post(addAcompanhamentoEndpoint, ticketInfo);
                    return adicionaAcompanhamento;
                }

                if (inscricao.number === formulario.inscricaoEstadual) {
                    if (inscricao.enabled) {
                        const numeroInscricao = inscricao.number;
                        switch (inscricao.status.id) {
                            case 1:
                                const atualizaInscricao = await atualizarInscricao(taxId, numeroInscricao);
                                if (errorStatuses.includes(atualizaInscricao.status)) {
                                    return atualizaInscricao;
                                }
                                mensagemSucesso = numeroInscricao.toString();
                                solveTicket = true;
                                closeTicket = true;
                                ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);
                                const adicionaAcompanhamento = await httpClient.post(addAcompanhamentoEndpoint, ticketInfo);
                                return adicionaAcompanhamento;
                            case 2:
                                mensagemErro = STATUS_INSCRICAO[2];
                                mensagemAlerta = 'Necessário análise da situação cadastral do cliente';
                                break;
                            case 3:
                                mensagemErro = STATUS_INSCRICAO[3];
                                mensagemAlerta = 'Necessário análise da situação cadastral do cliente';
                                break;
                            default:
                                break;
                        }
                    } else {
                        mensagemErro = 'Inscrição Estadual não habilitada';
                        mensagemAlerta = 'Necessário análise da situação cadastral do cliente';
                    }

                }
            } else {
                const numerosValidos = inscricoesValidas.map(ins => ins.number).join(', ') || 'nenhuma inscrição válida encontrada';
                mensagemAlerta = textoInscricaoValidacaoIsento(numerosValidos, formulario.uf);
                mensagemErro = 'Necessário Validação da Equipe Fiscal';
            }

            const mensagemValidacao = 'Por gentileza, valide as informações e aprove ou recuse a alteração.';

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
            if (formulario.tipoInscricao === ISENTO) {
                const atualizaInscricao = await atualizarInscricao(taxId, ISENTO);
                if (errorStatuses.includes(atualizaInscricao.status)) {
                    mensagemErro = 'Não foi encontrado cliente com o CPF informado';
                } else {
                    mensagemSucesso = ISENTO;
                    solveTicket = true;
                    closeTicket = true;
                }
            } else if (formulario.tipoInscricao === CONTRIBUINTE) {
                let numeroInscricao = formulario.inscricaoEstadual?.trim().toUpperCase() || '';
                const atualizaInscricao = await atualizarInscricao(taxId, numeroInscricao);
                if (errorStatuses.includes(atualizaInscricao.status)) {
                    mensagemErro = 'Não foi encontrado cliente com o CPF informado';
                } else {
                    mensagemSucesso = numeroInscricao;
                    solveTicket = true;
                    closeTicket = true;
                }
            }
            ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);
            return await httpClient.post(addAcompanhamentoEndpoint, ticketInfo);

        case 4:
            mensagemErro = 'O processo passou por análise da equipe fiscal, mas foi recusado.';
            mensagemAlerta = 'Necessário análise da situação cadastral do cliente';
            solveTicket = true;
            closeTicket = true;
            ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);
            return await httpClient.post(addAcompanhamentoEndpoint, ticketInfo);

        default:
            return { status: 200, message: 'Nenhum processamento necessário' } as SchemaResponse;
    }
}