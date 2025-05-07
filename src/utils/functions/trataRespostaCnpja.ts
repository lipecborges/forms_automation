import { AxiosRequestConfig } from 'axios';
import { CnpjaResponse, HttpClient, ErrorConfig } from '../../types/interface/ieInterface';
import { AdicionaAcompanhamentoSchema, SolTicketSchema } from '../../schemas/glpi/ticketSchema';
import { createTicketInfo } from './createTicketInfo';

// ... (importações e código anterior)

async function trataRespostaCnpja<T>(
    cnpjaResponse: CnpjaResponse,
    httpClient: HttpClient,
    adicionaAcompanhamentoEndpoint: string,
    config?: AxiosRequestConfig
): Promise<T> {
    try {
        const errorMap: Record<number, ErrorConfig> = {
            429: {
                message: 'Créditos da API esgotados, contactar equipe de Sistemas',
                status: 'ie',
                result: 'Inscrição não foi alterada',
            },
            400: {
                message: 'CNPJ ou CPF informado invalido',
                status: 'ie',
                result: 'Verifique o CNPJ ou CPF informado',
            },
            401: {
                message: 'Autenticação falhou',
                status: 'ie',
                result: 'Credenciais inválidas',
            },
            500: {
                message: 'Erro interno no servidor',
                status: 'ie',
                result: 'Tente novamente mais tarde',
            },
        };

        // Config padrão para erros não mapeados
        const defaultError: ErrorConfig = {
            message: 'Erro desconhecido ao consultar a API',
            status: 'ie', // <-- sempre um valor permitido
            result: 'Tente novamente mais tarde ou contate o suporte',
        };

        // Se não existe code, assume sucesso
        if (cnpjaResponse.code === undefined || cnpjaResponse.code === 200) {
            return cnpjaResponse as T;
        }

        // Busca o erro mapeado ou usa o padrão
        const errorInfo = errorMap[cnpjaResponse.code] || defaultError;

        // Se o código não for 200 (ou outro código de sucesso), trata como erro
        if (cnpjaResponse.code !== 200) {
            console.log(`Código de erro: ${cnpjaResponse.code}, Mensagem: ${errorInfo.message}`);

            const ticketInfo: AdicionaAcompanhamentoSchema = createTicketInfo(
                '',
                errorInfo.message,
                errorInfo.status,
                '',
                true,
                true
            );

            const adicionaAcompanhamento = await httpClient.post<T, AdicionaAcompanhamentoSchema>(
                adicionaAcompanhamentoEndpoint,
                ticketInfo,
            );

            console.log('chegou antes do return');
            return adicionaAcompanhamento;
        }

        // Se não for erro, retorna normalmente
        return cnpjaResponse as T;
    } catch (error) {
        console.error('Erro ao tratar código de resposta:', error);
        throw error;
    }
}

export default trataRespostaCnpja;