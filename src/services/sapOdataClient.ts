import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import {
  sapOdataBaseUrl,
  sapOdataUsername,
  sapOdataPassword,
  sapOdataClientId,
} from '../utils/constants';

export class SapOdataClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: sapOdataBaseUrl,
      auth: {
        username: sapOdataUsername,
        password: sapOdataPassword,
      },
      headers: {
        'sap-client': sapOdataClientId,
      },
    });
  }

  async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get(endpoint, config);
    return response.data;
  }

  async post<T, D = any>(endpoint: string, data: D, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post(endpoint, data, config);
    return response.data;
  }

  async put<T, D = any>(endpoint: string, data: D, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.put(endpoint, data, config);
    return response.data;
  }
}

export const sapOdataClient = new SapOdataClient();