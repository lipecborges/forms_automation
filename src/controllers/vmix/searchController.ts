import { buscaDataEntregaAv, buscaLojaVendedor, buscaUfCliente } from '../../model/vmix/searchModel';
import { SchemaResponse } from '../../schemas/generalSchema';
import { AlteraDataAvFormulario } from '../../types/interface/dtEntregaAvInterface';

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

export const buscaDataProcessoAv = async (formulario: AlteraDataAvFormulario): Promise<any> => {
    try {
        const dataEntregaAv = await buscaDataEntregaAv(formulario);
        if (!dataEntregaAv || dataEntregaAv == null) {
            return {
                status: 400,
                message: 'Nâo foi encontrado a data de entrega do processo',
            } as SchemaResponse;
        }

        return dataEntregaAv

    } catch (error: any) {
        console.error(`Erro ao buscar data do atual no visual av:`, error.message);
        throw error;
    }
}

export const buscaFilialVendedor = async (codigoIntegracao: string): Promise<any> => {
    try {
        const filialVendedor = await buscaLojaVendedor(codigoIntegracao);
        if (!filialVendedor) {
            return {
                status: 400,
                message: 'Nâo foi encontrado a filial do vendedor',
            } as SchemaResponse;
        }

        return filialVendedor;

    } catch (error: any) {
        console.error(`Erro ao buscar filial do vendedor com código de integração ${codigoIntegracao}:`, error.message);
        throw error;
    }
};