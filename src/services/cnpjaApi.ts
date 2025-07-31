import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { cnpjaApiBaseUrl, cnpjaApiKey, cnpjaCacheTime, cnpjaStrategy } from '../utils/constants';

export class CnpjaApi {
    private client: AxiosInstance;
    private defaultParams: Record<string, any>;

    constructor() {
        this.client = axios.create({
            baseURL: cnpjaApiBaseUrl,
            headers: {
                Authorization: cnpjaApiKey, // Token de autenticação
                Accept: 'application/json',
            },
        });

        // Definindo os parâmetros fixos
        this.defaultParams = {
            maxAge: cnpjaCacheTime,
            strategy: cnpjaStrategy,
        };
    }

    async get<T>(endpoint: string, params?: Record<string, any>, headers?: Record<string, string>): Promise<T> {
        const config: AxiosRequestConfig = {
            params: {
                ...this.defaultParams, // Parâmetros defaults, definidos acima
                ...params, // Parâmetros enviados na requisição, na chamada da classe 
            },
            headers: {
                ...this.client.defaults.headers.common, // Mantém headers padrão
                ...headers, // Adiciona headers customizados, se fornecidos
            },
        };

        try {
            const response = await this.client.get(endpoint, config);
            return response.data;
        } catch (error) {
            // Captura o erro e o retorna para ser tratado fora
            console.error('Erro na requisição:', error);
            throw error; // Repassa o erro para ser tratado fora
        }
    }
}

export const cnpjaApi = new CnpjaApi();