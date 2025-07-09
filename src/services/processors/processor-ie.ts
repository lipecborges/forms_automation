import { TicketProcessor } from './processor.interface';
import { GroupedAnswers } from '../../schemas/glpi/answerSchema';
import { cnpjaApi } from '../cnpjaApi';
import { atualizarInscricao } from '../../controllers/vmix/updateController';
import { errorStatuses } from '../../utils/constants';
import { httpClient } from '../httpClient';
import { createTicketInfo } from '../../utils/functions/createTicketInfo'
import { CnpjaResponse, Formulario } from '../../types/interface/ieInterface';
import { SchemaResponse } from '../../schemas/generalSchema';
import { BuscaUf } from '../../controllers/vmix/searchController';
import trataRespostaCnpja from '../../utils/functions/trataRespostaCnpja';
import { validaCenariosFiscal } from '../../utils/functions/validacaoGrupo';
import { TicketSchema } from '../../schemas/glpi/ticketSchema';

export class ProcessorIe implements TicketProcessor {
    process(answer: GroupedAnswers, ticket: TicketSchema): GroupedAnswers {
        (async () => {
            // Constantes fixas
            const SIM = 'SIM';
            const ISENTO = 'ISENTO';
            const CONTRIBUINTE = 'CONTRIBUINTE';
            const PESSOA_FISICA = 'PESSOA FÍSICA';
            const PESSOA_JURIDICA = 'PESSOA JURÍDICA';
            const GRUPO_VALIDACAO = 'Fiscal';

            // Objeto com os status de inscrição estadual
            const STATUS_INSCRICAO = {
                1: 'Sem restrição.',
                2: 'Bloqueado como destinatário na UF.',
                3: 'Vedada operação como destinatário na UF.'
            }

            const STATUS_VALIDACAO = {
                1: 'Enviar para validação',
                2: 'Aguardando validação',
                3: 'Aprovado',
                4: 'Recusado'
            }

            // Dados brutos do formulário
            const cnpj = answer.questions['CNPJ'];
            const cpf = answer.questions['CPF'];
            const taxId = cnpj || cpf;
            const ticketId = answer.ticketId;
            const produtorRural = answer.questions['Produtor_Rural']?.trim().toUpperCase() || 'NÃO';

            console.log(`tipo de taxid: ${typeof taxId} e taxid: ${taxId}`);
            // Endpoints
            const solTicketEndpoint = `/solucionaTicket/${ticketId}`;
            const validacoesTicketEndpoint = `/validacoesTicket/${ticketId}?grupo=${GRUPO_VALIDACAO}`;
            const solicitaValidacaoEndpoint = `/solicitaValidacao/${ticketId}`;
            const addAcompanhamentoEndpoint = `/adicionaAcompanhamento/${ticketId}`;
            const endpointCnpja = '/ccc';
            const tipoForm = 'ie';

            // Objeto do formulário
            const formulario: Formulario = {
                taxId,
                uf: answer.questions['UF'],
                tipoCliente: answer.questions['Tipo']?.trim().toUpperCase() || null,
                produtorRural: answer.questions['Produtor_Rural']?.trim().toUpperCase() || null,
                tipoInscricao: answer.questions['Tipo_Inscrição']?.trim().toUpperCase() || null,
                inscricaoEstadual: answer.questions['Inscrição_Estadual']?.trim().toUpperCase().replace(/^0+/, '') || null,
            };

            let mensagemErro = '';
            let mensagemAlerta = '';
            let mensagemSucesso = '';
            let closeTicket = true;
            let solveTicket = true;
            let ticketInfo;

            const validacaoFiscal: { status: number } = await httpClient.get(validacoesTicketEndpoint);


            switch (validacaoFiscal.status) {
                case 2:
                    return {
                        status: 400,
                        message: 'Aguardando validação do grupo fiscal',
                    } as SchemaResponse;
                case 4:
                    mensagemErro = 'O processo passou por análise da equipe fiscal, mas foi recusado.';
                    mensagemAlerta = 'Necessário análise da situação cadastral do cliente';
                    solveTicket = true;
                    closeTicket = true;
                    ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);
                    return await httpClient.post(addAcompanhamentoEndpoint, ticketInfo);
                default:
                    break;
            }

            if (formulario.tipoCliente === PESSOA_FISICA) {
                const ufCadastro = await BuscaUf(taxId);


                if (ufCadastro !== formulario.uf) {
                    mensagemErro = 'UF da solicitação é diferente da UF do cadastro do cliente';
                    mensagemAlerta = 'Solicitar para o administrativo da Filial realizar o ajuste no endereço do cliente';
                    ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);
                    const addAcompanhamento = await httpClient.post(addAcompanhamentoEndpoint, ticketInfo);
                    return addAcompanhamento;
                }

                if (produtorRural === SIM) { // Tratamento para inscrição estadual
                    const cnpjaResposta = await cnpjaApi.get<CnpjaResponse>(endpointCnpja, {
                        taxId,
                        states: formulario.uf,
                    });

                    const trataResposta = await trataRespostaCnpja<SchemaResponse>(
                        cnpjaResposta,
                        httpClient,
                        solTicketEndpoint
                    );

                    // Verifica se trataResposta é um SchemaResponse.
                    if ('status' in trataResposta) {
                        return trataResposta as SchemaResponse;
                    }

                    const respostaTratada = trataResposta as CnpjaResponse;

                    const inscricoes = respostaTratada.registrations;

                    if (!inscricoes || inscricoes.length === 0) {
                        mensagemErro = 'Nenhuma inscrição estadual encontrada para o cliente na UF informada'
                        const ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);
                        const addAcompanhamento = await httpClient.post(addAcompanhamentoEndpoint, ticketInfo);
                        return addAcompanhamento;
                    }

                    const inscricao = inscricoes.find(i => i.number === formulario.inscricaoEstadual);

                    if (inscricao) { // Se encontrou a inscrição estadual faz os tratamentos
                        if (inscricao.enabled) {
                            const numeroInscricao = inscricao.number;
                            switch (inscricao.status.id) {
                                case 1:
                                    const atualizaInscricao = await atualizarInscricao(taxId, numeroInscricao, produtorRural);
                                    if (errorStatuses.includes(atualizaInscricao.status)) {
                                        return atualizaInscricao;
                                    }
                                    mensagemSucesso = numeroInscricao.toString();
                                    break;
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
                            ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);
                        } else { // Inscrição encontrada, mas não habilitada
                            mensagemErro = 'Inscrição Estadual não habilitada';
                            mensagemAlerta = 'Necessário análise da situação cadastral do cliente';
                            solveTicket = true;
                            closeTicket = true;
                            ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);
                        }
                    } else if (inscricoes) {
                        const inscricoesValidas = inscricoes.filter(ins => ins.enabled && ins.status.id === 1);
                        const numerosValidos = inscricoesValidas.map(ins => ins.number).join(', ') || 'nenhuma inscrição válida encontrada';
                        mensagemErro = `Inscrição Estadual informada é diferente das inscrições válidas encontradas no CCC. Inscrições válidas: ${numerosValidos}`;
                        mensagemAlerta = 'Necessário análise da situação cadastral do cliente';
                        ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);
                    }
                } else { // Tratamento para ISENTO
                    const atualizaInscricao = await atualizarInscricao(taxId, ISENTO, produtorRural);
                    if (errorStatuses.includes(atualizaInscricao.status)) {
                        mensagemErro = 'Não foi encontrado cliente com o CPF informado';
                        ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);
                    } else {
                        mensagemSucesso = ISENTO;
                        ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);
                    }
                }

            } else if (formulario.tipoCliente === PESSOA_JURIDICA) {

                try {
                    const cnpjaResposta = await cnpjaApi.get<CnpjaResponse>(endpointCnpja, {
                        taxId,
                        states: formulario.uf,
                    });
                    console.log('antes do tratarespsota')
                    const trataResposta = await trataRespostaCnpja<SchemaResponse>(
                        cnpjaResposta,
                        httpClient,
                        solTicketEndpoint
                    );

                    // Verifica se trataResposta é um SchemaResponse.
                    if ('status' in trataResposta) {
                        return trataResposta as SchemaResponse;
                    }

                    const respostaTratada = trataResposta as CnpjaResponse;

                    const inscricoes = respostaTratada.registrations;

                    if (formulario.tipoInscricao === CONTRIBUINTE) {
                        if (inscricoes.length === 0) {
                            mensagemErro = 'Nenhuma inscrição estadual encontrada para o cliente na UF informada'
                            ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);
                        } else if (inscricoes.length === 1) {
                            const result = await validaCenariosFiscal(
                                validacaoFiscal,
                                inscricoes,
                                formulario,
                                taxId,
                                tipoForm,
                                httpClient,
                                ticketId,
                                GRUPO_VALIDACAO,
                            );
                            return result;
                        } else if (inscricoes.length > 1) {
                            const result = await validaCenariosFiscal(
                                validacaoFiscal,
                                inscricoes,
                                formulario,
                                taxId,
                                tipoForm,
                                httpClient,
                                ticketId,
                                GRUPO_VALIDACAO,
                            );
                            return result;
                        }

                    } else if (formulario.tipoInscricao === ISENTO) {

                        if (inscricoes.length === 0) {
                            const atualizaInscricao = await atualizarInscricao(taxId, ISENTO, produtorRural);
                            if (errorStatuses.includes(atualizaInscricao.status)) {
                                mensagemErro = 'Não foi encontrado cliente com o CPF informado';
                                ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);
                            } else {
                                mensagemSucesso = ISENTO;
                                ticketInfo = createTicketInfo(mensagemSucesso, mensagemErro, tipoForm, mensagemAlerta, solveTicket, closeTicket);
                            }
                        } else {
                            console.log('chegou no else')
                            const result = await validaCenariosFiscal(
                                validacaoFiscal,
                                inscricoes,
                                formulario,
                                taxId,
                                tipoForm,
                                httpClient,
                                ticketId,
                                GRUPO_VALIDACAO,
                            );
                            return result;
                        }
                    }
                } catch (error: any) {
                    console.error('Erro capturado:', error);

                    // Verifica se o erro possui a estrutura esperada
                    const cnpjaErrorResponse = error?.response?.answer || {
                        code: error?.response?.status || 500,
                        message: error?.message || 'Erro desconhecido',
                    };

                    const trataResposta = await trataRespostaCnpja<SchemaResponse>(
                        cnpjaErrorResponse,
                        httpClient,
                        addAcompanhamentoEndpoint
                    );

                    console.log('Erro tratado com sucesso');
                    return trataResposta;
                }

            }


            const adicionaAcompanhamento = await httpClient.post(addAcompanhamentoEndpoint, ticketInfo)
            return adicionaAcompanhamento;

        })();

        return answer;
    }
}


