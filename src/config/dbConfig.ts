import * as dotenv from 'dotenv';
import * as dotenvExpand from 'dotenv-expand';

// Carrega o .env e expande as variáveis
const env = dotenv.config();
dotenvExpand.expand(env);

type DbConfig = {
    host: string | undefined;
    port: string | undefined;
    user: string | undefined;
    password: string | undefined;
    database: string | undefined;
    url: string | undefined;
};

type Config = {
    development: {
        glpi: DbConfig;
        vmix_digger: DbConfig;
        app: DbConfig;
        vmix_integracao: DbConfig;
    };
    production: {
        glpi: DbConfig;
        vmix_digger: DbConfig;
        app: DbConfig;
        vmix_integracao: DbConfig;
    };
};

const dbConfig: Config = {
    development: {
        glpi: {
            host: process.env.DEV_DB_GLPI_HOST,
            port: process.env.DEV_DB_GLPI_PORT,
            user: process.env.DEV_DB_GLPI_USER,
            password: process.env.DEV_DB_GLPI_PASSWORD,
            database: process.env.DEV_DB_GLPI_NAME,
            url: process.env.DEV_DB_GLPI_URL,
        },
        vmix_digger: {
            host: process.env.DEV_DB_VISUAL_MIX_HOST,
            port: process.env.DEV_DB_VISUAL_MIX_PORT,
            user: process.env.DEV_DB_VISUAL_MIX_USER,
            password: process.env.DEV_DB_VISUAL_MIX_PASSWORD,
            database: process.env.DB_VISUAL_MIX_DIGGER,
            url: process.env.DEV_DB_VISUAL_MIX_DIG_URL,
        },
        app: {
            host: process.env.PRD_DB_APP_HOST,
            port: process.env.PRD_DB_APP_PORT,
            user: process.env.PRD_DB_APP_USER,
            password: process.env.PRD_DB_APP_PASSWORD,
            database: process.env.PRD_DB_APP_NAME,
            url: process.env.PRD_DB_APP_URL,
        },
        vmix_integracao: {
            host: process.env.DEV_DB_VISUAL_MIX_HOST,
            port: process.env.DEV_DB_VISUAL_MIX_PORT,
            user: process.env.DEV_DB_VISUAL_MIX_USER,
            password: process.env.DEV_DB_VISUAL_MIX_PASSWORD,
            database: process.env.DB_VISUAL_MIX_INTEGRACAO,
            url: process.env.DEV_DB_VISUAL_MIX_INT_URL,
        },
    },
    production: {
        glpi: {
            host: process.env.PRD_DB_GLPI_HOST,
            port: process.env.PRD_DB_GLPI_PORT,
            user: process.env.PRD_DB_GLPI_USER,
            password: process.env.PRD_DB_GLPI_PASSWORD,
            database: process.env.PRD_DB_GLPI_NAME,
            url: process.env.PRD_DB_GLPI_URL,
        },
        vmix_digger: {
            host: process.env.PRD_DB_VISUAL_MIX_HOST,
            port: process.env.PRD_DB_VISUAL_MIX_PORT,
            user: process.env.PRD_DB_VISUAL_MIX_USER,
            password: process.env.PRD_DB_VISUAL_MIX_PASSWORD,
            database: process.env.DB_VISUAL_MIX_DIGGER,
            url: process.env.PRD_DB_VISUAL_MIX_DIG_URL,
        },
        app: {
            host: process.env.PRD_DB_APP_HOST,
            port: process.env.PRD_DB_APP_PORT,
            user: process.env.PRD_DB_APP_USER,
            password: process.env.PRD_DB_APP_PASSWORD,
            database: process.env.PRD_DB_APP_NAME,
            url: process.env.PRD_DB_APP_URL,
        },
        vmix_integracao: {
            host: process.env.PRD_DB_VISUAL_MIX_HOST,
            port: process.env.PRD_DB_VISUAL_MIX_PORT,
            user: process.env.PRD_DB_VISUAL_MIX_USER,
            password: process.env.PRD_DB_VISUAL_MIX_PASSWORD,
            database: process.env.DB_VISUAL_MIX_INTEGRACAO,
            url: process.env.PRD_DB_VISUAL_MIX_INT_URL,
        },
    },
};

console.log('dbConfig:', dbConfig);

const currentEnv: keyof Config = (process.env.NODE_ENV as keyof Config) || 'development';

if (!dbConfig[currentEnv]) {
    throw new Error(`Configuração para o ambiente '${currentEnv}' não encontrada.`);
}

export default dbConfig[currentEnv];