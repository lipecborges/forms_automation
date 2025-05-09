import { z } from 'zod';

export interface AlteraDataAvFormulario {
    nomeSolicitante: string;
    filial: number | null;
    dataProcesso: string;
    dataEntrega: string;
}