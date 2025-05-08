import { atualizaInscricaoVmix, setDataEntregaAv, setStatusPendIntegracao, updateDataEntregaAv } from '../../model/vmix/updateModel';
import { buscaIdCliente } from '../../model/vmix/searchModel';
import { SchemaResponse } from '../../schemas/generalSchema';
import { Formulario } from '../../types/interface/ieInterface';
import { AlteraDataAvFormulario } from '../../types/interface/dtEntregaAvInterface';
import { buscaDataProcessoAv } from './searchController';

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

export const atualizaDataProcesso = async (formulario: AlteraDataAvFormulario): Promise<SchemaResponse> => {
    try {
        const dataAtualAv = await buscaDataProcessoAv(formulario);

        console.log('dataAtualAv:', dataAtualAv);

        const dataAtualAvDate = new Date(dataAtualAv);
        const dataEntregaDate = new Date(formulario.dataEntrega);

        const dataAtualMaisUm = new Date(dataAtualAvDate);
        dataAtualMaisUm.setDate(dataAtualMaisUm.getDate() + 1);

        const dataProcessoDateMaisUm = new Date(formulario.dataProcesso);
        dataProcessoDateMaisUm.setDate(dataProcessoDateMaisUm.getDate() + 1);

        console.log('dataAtualAvDate:', dataAtualAvDate);
        console.log('dataEntregaDate:', dataEntregaDate);
        if (+dataAtualAvDate == +dataEntregaDate) {
            console.log('entrou aqui')
            return {
                status: 400,
                message: 'A data de entrega informada é igual a data atual',
            } as SchemaResponse;
        }

        if (dataAtualAv instanceof Date) {
            console.log('caiu no if do update')
            const atualizaDataProcesso = await updateDataEntregaAv(formulario)
            if (atualizaDataProcesso.count === 0) {
                return {
                    status: 400,
                    message: 'Não foi encontrado nenhum registro para o idCliente informado',
                } as SchemaResponse;
            }
        } else {
            console.log('caiu no else do insert')
            if (dataEntregaDate < dataAtualAvDate) {
                return {
                    status: 400,
                    message: 'A data de entrega informada é menor que a data atual',
                } as SchemaResponse;
            }

            const insereDataProcesso = await setDataEntregaAv(formulario, dataProcessoDateMaisUm)
            if (insereDataProcesso.count === 0) {
                return {
                    status: 400,
                    message: 'Não foi encontrado nenhum registro para o idCliente informado',
                } as SchemaResponse;
            }
        }

        return {
            status: 200,
            message: 'Data de entrega atualizada com sucesso',
        } as SchemaResponse;

    } catch (error: any) {
        console.error(`Erro ao realizar alteração de data de entrega:`, error.message);
        throw error;
    }
}