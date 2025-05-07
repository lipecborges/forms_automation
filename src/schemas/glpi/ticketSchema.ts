import { error } from "console";
import { close } from "fs";
import { z } from "zod";


export const ticketSchema = z.array(
    z.object({
        id: z.number(),
        subject: z.string(),
        category: z.string(),
        date_creation: z.string(),
        approval_status: z.union([
            z.string(),           // Pode ser uma string
            z.array(z.string())   // Ou um array de strings
        ]).optional().nullable(), // Pode ser undefined ou null
        status: z.number(),
        requester: z.object({
            id: z.number(),
            name: z.string(),
            email: z.union([z.string(), z.array(z.string())]).optional().nullable(), // Já correto
            phone: z.string().nullable().optional(),
        }),
    })
);

export const validacoesTicketSchema = z.array(
    z.object({
        ticket_id: z.number(),
        user_requester_id: z.number(),
        user_validate: z.object({
            id: z.number(),
            groups: z.array(z.number()).optional().nullable(),
        }),
        comment_submission: z.string().optional().nullable(),
        comment_validation: z.string().optional().nullable(),
        status: z.number(),
        submission_date: z.string().nullable(),
        validate_date: z.string().optional().nullable(),
    })
);



// Define o esquema da tabela answer no banco de dados
export const solTicketSchema = z.object({
    conteudo: z.string(),
    error: z.string().optional(),
    type: z.enum(['criaOp', 'estornaOp', 'ie', 'regInfo']).optional(),
    alert: z.string().optional(),
});

export const solicitaValidacaoSchema = z.object({
    conteudo: z.string(),
    user_validate_id: z.number().optional(),
    group: z.string().optional(),
});

export const adicionaAcompanhamentoSchema = z.object({
    content: z.string(),
    error: z.string().optional(),
    type: z.enum(['criaOp', 'estornaOp', 'ie', 'regInfo']),
    alert: z.string().optional(),
    solve: z.boolean().optional(),
    close: z.boolean().optional(),
});


export type SolicitaValidacaoSchema = z.infer<typeof solicitaValidacaoSchema>;
export type SolTicketSchema = z.infer<typeof solTicketSchema>;
export type AdicionaAcompanhamentoSchema = z.infer<typeof adicionaAcompanhamentoSchema>;
export type TicketSchema = z.infer<typeof ticketSchema>[number];
export type TicketId = TicketSchema['id'];


export type SolTicketAlert = SolTicketSchema['alert'];
export type SolTicketError = SolTicketSchema['error'];
export type SolTicketType = SolTicketSchema['type'];
export type SolTicketConteudo = SolTicketSchema['conteudo'];


export type Alert = AdicionaAcompanhamentoSchema['alert'];
export type Error = AdicionaAcompanhamentoSchema['error'];
export type Type = AdicionaAcompanhamentoSchema['type'];
export type Content = AdicionaAcompanhamentoSchema['content'];
export type Solve = AdicionaAcompanhamentoSchema['solve'];
export type Close = AdicionaAcompanhamentoSchema['close'];
