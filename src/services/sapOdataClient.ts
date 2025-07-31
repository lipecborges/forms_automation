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
    const getResponse = await this.client.get(endpoint, {
      headers: {
        'x-csrf-token': 'Fetch',
      },
    });

    const csrfToken = getResponse.headers['x-csrf-token'];
    const setCookie = getResponse.headers['set-cookie'] || getResponse.headers['set-cookie2'];


    console.log('endpoint:', endpoint);
    const putHeaders = {
      ...config?.headers,
      'x-csrf-token': csrfToken,
      'Cookie': Array.isArray(setCookie) ? setCookie.join('; ') : setCookie,
    };


    const response = await this.client.put(endpoint, data, {
      ...config,
      headers: putHeaders,
    });

    return response.data;
  }
}

export const sapOdataClient = new SapOdataClient();