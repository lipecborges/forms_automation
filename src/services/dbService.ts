const { PrismaClient: PrismaAppClient } = require('../../prisma/generated/app'); // Para GLPI (MySQL)
import sql from 'mssql';
import dbConfig from "../config/dbConfig";

// Inicializa Prisma Client para GLPI (MySQL)
export const appPrismaClient = new PrismaAppClient({
    datasources: {
        db: {
            url: dbConfig.app.url,
        },
    },
});

// Configuração para SQL Server (vmix_digger)
export const vmixDiggerPool = new sql.ConnectionPool({
    user: dbConfig.vmix_digger.user ?? '',
    password: dbConfig.vmix_digger.password ?? '',
    server: dbConfig.vmix_digger.host ?? '',
    port: dbConfig.vmix_digger.port ? parseInt(dbConfig.vmix_digger.port) : 1433,
    database: dbConfig.vmix_digger.database ?? '',
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }
});

// Configuração para SQL Server (vmix_integracao)
export const vmixIntegracaoPool = new sql.ConnectionPool({
    user: dbConfig.vmix_integracao.user ?? '',
    password: dbConfig.vmix_integracao.password ?? '',
    server: dbConfig.vmix_integracao.host ?? '',
    port: dbConfig.vmix_integracao.port ? parseInt(dbConfig.vmix_integracao.port) : 1433,
    database: dbConfig.vmix_integracao.database ?? '',
    options: {
        encrypt: false,
        trustServerCertificate: true,
    }
});

// Inicialize as conexões (pode ser feito no início da aplicação)
vmixDiggerPool.connect().then(() => {
    console.log('Conectado ao SQL Server vmix_digger');
}).catch(err => {
    console.error('Erro ao conectar vmix_digger:', err);
});

vmixIntegracaoPool.connect().then(() => {
    console.log('Conectado ao SQL Server vmix_integracao');
}).catch(err => {
    console.error('Erro ao conectar vmix_integracao:', err);
});