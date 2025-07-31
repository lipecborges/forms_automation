import { z } from 'zod';

export const dadosOvSchema = z.object({
    ordem: z.string(),
    centro: z.string(),
    dataCriacao: z.string(),
    dataEntrega: z.string(),
    criadoPor: z.string(),
    tipoDoc: z.string(),
    valorLiquido: z.string(),
    vendedor: z.string(),
    nomeVendedor: z.string(),
    pedido: z.string(),
    emissorOrdem: z.string(),
    nomeEmissor: z.string(),
});

export type DadosOV = z.infer<typeof dadosOvSchema>;