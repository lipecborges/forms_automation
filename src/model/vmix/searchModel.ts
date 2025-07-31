import { vmixDiggerPool } from '../../services/dbService';
import { AlteraDataAvFormulario } from '../../types/interface/dtEntregaAvInterface';

export const buscaIdCliente = async (taxId: number): Promise<any> => {
    try {
        const pool = await vmixDiggerPool.connect();
        const result = await pool.request()
            .input('taxId', taxId)
            .query('SELECT CODIGO FROM CLIENTES WHERE CPF = @taxId');

        const row = result.recordset[0];
        return row ? row.CODIGO : null;
    } catch (error: any) {
        console.error('Erro ao buscar ID do cliente:', error.message);
        throw error;
    }
};

export const buscaTipoCliente = async (taxId: number): Promise<any> => {
    try {
        const pool = await vmixDiggerPool.connect();
        const result = await pool.request()
            .input('taxId', taxId)
            .query('SELECT IDCLIENTETIPO FROM CLIENTES WHERE CPF = @taxId');

        const row = result.recordset[0];
        return row ? row.TIPO : null;
    } catch (error: any) {
        console.error('Erro ao buscar tipo de cliente:', error.message);
        throw error;
    }
};

export const buscaUfCliente = async (taxId: number): Promise<any> => {
    try {
        const pool = await vmixDiggerPool.connect();
        const result = await pool.request()
            .input('taxId', taxId)
            .query('SELECT ESTADO FROM CLIENTES WHERE CPF = @taxId');

        const row = result.recordset[0];
        return row ? row.ESTADO : null;
    } catch (error: any) {
        console.error('Erro ao buscar UF do cliente', error.message);
        throw error;
    }
};

export const buscaDataEntregaAv = async (formulario: AlteraDataAvFormulario): Promise<any> => {
    try {
        const pool = await vmixDiggerPool.connect();
        const result = await pool.request()
            .input('dataProcesso', formulario.dataProcesso)
            .input('filial', formulario.filial)
            .query('SELECT DATAENTREGAMANUAL FROM AV_MONITORAENTREGA WHERE DATAPROCESSO = @dataProcesso AND ID_LOJA = @filial');

        const row = result.recordset[0];
        return row ? row.DATAENTREGAMANUAL : null;
    } catch (error: any) {
        console.error('Erro ao buscar data de entrega', error.message);
        throw error;
    }
}

export const buscaLojaVendedor = async (codigoIntegracao: string): Promise<any> => {
    try {
        const pool = await vmixDiggerPool.connect();
        const result = await pool.request()
            .input('codigoIntegracao', codigoIntegracao)
            .query('SELECT LOJA FROM ACESSO_OPERADORES WHERE CODIGOINTEGRACAO = @codigoIntegracao');

        const row = result.recordset[0];
        return row ? row.LOJA : null;
    } catch (error: any) {
        console.error('Erro ao buscar loja do vendedor:', error.message);
        throw error;
    }
}
