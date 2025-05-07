import { atualizaInscricaoVmix, setStatusPendIntegracao } from '../../model/vmix/updateModel';
import { buscaIdCliente } from '../../model/vmix/searchModel';
import { SchemaResponse } from '../../schemas/generalSchema';

export const atualizarInscricao = async (taxId: string, inscricaoEstadual: string): Promise<SchemaResponse> => {
    try {
        const taxIdFloat = parseFloat(taxId);
        const inscricaoEstadualStr = String(inscricaoEstadual);
        const response = await atualizaInscricaoVmix(taxIdFloat, inscricaoEstadualStr);

        if (response.count === 0) {
            return {
                status: 400,
                message: 'Não foi encontrado nenhum registro para o taxId informado',
            } as SchemaResponse;
        }

        const idCliente = await buscaIdCliente(taxIdFloat);
        if (!idCliente) {
            return {
                status: 400,
                message: 'Não foi encontrado nenhum registro para o taxId informado',
            } as SchemaResponse;
        }

        const setPendente = await setStatusPendIntegracao(idCliente);
        if (setPendente.count === 0) {
            return {
                status: 400,
                message: 'Não foi encontrado nenhum registro para o idCliente informado',
            } as SchemaResponse;
        }

        return {
            status: 200,
            message: 'Inscrição estadual atualizada com sucesso',
        } as SchemaResponse;

    } catch (error: any) {
        console.error(`Erro ao realizar alteração de inscrição estadual para o taxId ${taxId}:`, error.message);
        throw error;
    }
};