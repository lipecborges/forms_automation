import dotenv from 'dotenv';
dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

export const ENV = process.env.NODE_ENV || 'development';

// Configuração de acordo com o ambiente
export const API_PORT = process.env.API_FORMS_PORT
export const API_HOST = process.env.API_FORMS_HOST
export const API_URL = `http://${API_HOST}:${API_PORT}`

// Variáveis de ambiente para a API CNPJA
export const cnpjaApiBaseUrl = process.env.CNPJA_API_BASE_URL;
export const cnpjaApiKey = process.env.CNPJA_API_KEY;
export const cnpjaCacheTime = process.env.CNPJA_CACHE_TIME;
export const cnpjaStrategy = process.env.CNPJA_STRATEGY;

export const errorStatuses = [400, 404, 422];

