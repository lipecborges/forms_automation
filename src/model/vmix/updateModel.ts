import { vmixDiggerPool, vmixIntegracaoPool } from '../../services/dbService';
import { AlteraDataAvFormulario } from '../../types/interface/dtEntregaAvInterface';

// Obter a data atual
const now = new Date();
// Formatando a data para o formato do SQL Server (YYYY-MM-DD HH:mm:ss)
const pad = (n: number) => n.toString().padStart(2, '0');
const year = now.getFullYear();
const month = pad(now.getMonth() + 1);
const day = pad(now.getDate());
const hours = pad(now.getHours());
const minutes = pad(now.getMinutes());
const seconds = pad(now.getSeconds());
const dataFormatada = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

export const atualizaInscricaoVmix = async (taxId: number, inscricaoEstadual: string): Promise<any> => {
    try {
        const pool = await vmixDiggerPool.connect();
        const result = await pool.request()
            .input('inscricaoEstadual', inscricaoEstadual)
            .input('taxId', taxId)
            .query('UPDATE CLIENTES SET INSCESTADUAL = @inscricaoEstadual WHERE CPF = @taxId');

        // result.rowsAffected[0] indica quantas linhas foram atualizadas
        console.log('Update result:', result);
        return result.rowsAffected[0];
    } catch (error: any) {
        console.error('Error updating inscrição estadual:', error.message);
        throw error;
    }
};

export const setStatusPendIntegracao = async (idCliente: number): Promise<any> => {
    try {
        const statusPendente = 0;
        const loja = 998;
        const tipoCadastro = 2;

        const chave = `G${idCliente}${year}${month}${day}${hours}${minutes}${seconds}`;

        const pool = await vmixIntegracaoPool.connect();
        const result = await pool.request()
            .input('LOJA', loja)
            .input('TIPO_CADASTRO', tipoCadastro)
            .input('CHAVE', chave)
            .input('DATA_INCLUSAO', dataFormatada)
            .input('DATA_INIPROC', dataFormatada)
            .input('DATA_FIMPROC', dataFormatada)
            .input('INTEGRADO', statusPendente)
            .input('DATA1', dataFormatada)
            .input('DATA2', dataFormatada)
            .input('DATA3', dataFormatada)
            .input('VALOR1', idCliente)
            .query(`
                INSERT INTO EXPORTACAO 
                (LOJA, TIPO_CADASTRO, CHAVE, DATA_INCLUSAO, DATA_INIPROC, DATA_FIMPROC, INTEGRADO, DATA1, DATA2, DATA3, VALOR1)
                VALUES (@LOJA, @TIPO_CADASTRO, @CHAVE, @DATA_INCLUSAO, @DATA_INIPROC, @DATA_FIMPROC, @INTEGRADO, @DATA1, @DATA2, @DATA3, @VALOR1)
            `);

        console.log('Resultado da criação do registro de integração:', result);
        return result.rowsAffected[0]; // retorna o número de linhas inseridas
    } catch (error: any) {
        console.error('Error creating new record:', error.message);
        throw error;
    }
};

export const setDataEntregaAv = async (formulario: AlteraDataAvFormulario, dataDefault: Date): Promise<any> => {
    try {
        const pool = await vmixDiggerPool.connect();
        const result = await pool.request()
            .input('dataProcesso', formulario.dataProcesso)
            .input('dataEntrega', formulario.dataEntrega)
            .input('filial', formulario.filial)
            .input('nomeSolicitante', formulario.nomeSolicitante)
            .input('dataFormatada', dataFormatada)
            .input('dataDefault', dataDefault)
            .query(`
                INSERT INTO AV_MONITORAENTREGA (DATAPROCESSO, DATAENTREGAMANUAL, ID_LOJA, NOMEUSUINCLUSAO, DATAINCLUSAO, DATAENTREGADEFAULT)
                VALUES (@dataProcesso, @dataEntrega, @filial, @nomeSolicitante, @dataFormatada, @dataDefault)
            `);

        console.log('Resultado do insert da data de entrega:', result);
        return result.rowsAffected[0]; // retorna o número de linhas inseridas
    } catch (error: any) {
        console.error('Error inserting data de entrega:', error.message);
        throw error;
    }
}

export const updateDataEntregaAv = async (formulario: AlteraDataAvFormulario): Promise<any> => {
    try {
        const pool = await vmixDiggerPool.connect();
        const result = await pool.request()
            .input('dataProcesso', formulario.dataProcesso)
            .input('dataEntrega', formulario.dataEntrega)
            .input('filial', formulario.filial)
            .input('nomeSolicitante', formulario.nomeSolicitante)
            .input('dataFormatada', dataFormatada)
            .query('UPDATE AV_MONITORAENTREGA SET DATAENTREGAMANUAL = @dataEntrega, NOMEUSUALTERACAO = @nomeSolicitante, DATAALTERACAO = @dataFormatada WHERE DATAPROCESSO = @dataProcesso AND ID_LOJA = @filial');

        console.log('Resultado da atualização da data de entrega:', result);
        return result.rowsAffected[0]; // retorna o número de linhas atualizadas
    } catch (error: any) {
        console.error('Error updating data de entrega:', error.message);
        throw error;
    }
}