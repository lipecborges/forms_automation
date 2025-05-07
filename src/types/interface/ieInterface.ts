import axios, { AxiosRequestConfig } from 'axios';
import { z } from 'zod';
import { SchemaResponse } from '../../schemas/generalSchema';
import { Type } from '../../schemas/glpi/ticketSchema';

// Esquema para Registration
const RegistrationSchema = z.object({
    number: z.string(),
    enabled: z.boolean(),
    status: z.object({
        id: z.number(),
    }),
});

// Esquema para CnpjaResponse
const CnpjaResponseSchema = z.object({
    code: z.number(),
    registrations: z.array(RegistrationSchema),
});

// Esquema para ErrorConfig
const ErrorConfigSchema = z.object({
    message: z.string(),
    status: z.enum(['op', 'ie']).optional(),
    result: z.string(),
});

// Inferindo tipos a partir dos esquemas Zod
type Registration = z.infer<typeof RegistrationSchema>;
type CnpjaResponse = z.infer<typeof CnpjaResponseSchema>;
// type ErrorConfig = z.infer<typeof ErrorConfigSchema>;

// Definindo o HttpClient como um tipo (não é possível usar Zod para interfaces de classes diretamente)
type HttpClient = {
    get<T>(endpoint: string): Promise<T>;
    post<T, D = SchemaResponse>(endpoint: string, data: D, config?: AxiosRequestConfig): Promise<T>;
    put<T, D = SchemaResponse>(endpoint: string, data: D, config?: AxiosRequestConfig): Promise<T>;
};

export const ticketStatusValidacaoSchema = z.object({
    id: z.number(),
});

export interface Formulario {
    taxId: string; // CNPJ ou CPF, sempre presente como string
    uf: string; // UF é uma string obrigatória vinda de data.questions['UF']
    tipoCliente: string | null; // Pode ser string ou null após o trim e toUpperCase
    produtorRural: string | null; // Pode ser string ou null após o trim e toUpperCase
    tipoInscricao: string | null; // Pode ser string ou null após o trim e toUpperCase
    inscricaoEstadual: string | null; // Pode ser string ou null após trim, toUpperCase e replace
}



export interface ValidacaoTicket {
    ticket_id: number;
    user_requester_id: number;
    user_validate: {
        id: number;
        groups: number[] | null;
    };
    comment_submission: string | null;
    comment_validation: string | null;
    status: number;
    submission_date: string;
    validate_date: string | null;
}

export interface ErrorConfig {
    message: string;
    status: Type;
    result: string;
}



// Interface para o tipo de grupoIdValidacao
export interface GrupoId {
    id: number;
}

// Exportando os esquemas e tipos
export { RegistrationSchema, CnpjaResponseSchema, ErrorConfigSchema };
export type { Registration, CnpjaResponse, HttpClient };

export type TicketStatusValidacaoSchema = z.infer<typeof ticketStatusValidacaoSchema>;