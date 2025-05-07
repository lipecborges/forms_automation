import { vmixDiggerPool } from '../../services/dbService';

export const buscaIdCliente = async (taxId: number): Promise<any> => {
    try {
        const pool = await vmixDiggerPool.connect();
        const result = await pool.request()
            .input('taxId', taxId)
            .query('SELECT CODIGO FROM CLIENTES WHERE CPF = @taxId');

        const row = result.recordset[0];
        console.log('BuscaIdcliente:', row);
        return row ? row.CODIGO : null;
    } catch (error: any) {
        console.error('Erro ao buscar ID do cliente:', error.message);
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
