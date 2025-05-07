import { buscaUfCliente } from '../../model/vmix/searchModel';
import { SchemaResponse } from '../../schemas/generalSchema';

export const BuscaUf = async (taxId: string): Promise<any> => {
    try {
        const taxIdFloat = parseFloat(taxId);

        const ufCliente = await buscaUfCliente(taxIdFloat);
        if (!ufCliente) {
            return {
                status: 400,
                message: 'Nâo foi encontrado a UF do cliente',
            } as SchemaResponse;
        }

        return ufCliente

    } catch (error: any) {
        console.error(`Erro ao realizar alteração de inscrição estadual para o taxId ${taxId}:`, error.message);
        throw error;
    }
};