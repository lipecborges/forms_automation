import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { API_URL, } from '../utils/constants';
import { SchemaResponse } from '../schemas/generalSchema';

export class HttpClient {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: API_URL,
        });
    }

    async get<T>(endpoint: string): Promise<T> {
        console.log('api_base_url', API_URL);
        const response = await this.client.get(endpoint);
        return response.data;
    }

    async post<T, D = SchemaResponse>(endpoint: string, data: D, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.client.post(endpoint, data, config);
        return response.data;
    }

    async put<T, D = SchemaResponse>(endpoint: string, data: D, config?: AxiosRequestConfig): Promise<T> {
        const response = await this.client.put(endpoint, data, config);
        return response.data;
    }



}

export const httpClient = new HttpClient();