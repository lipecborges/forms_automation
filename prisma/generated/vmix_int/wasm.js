
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.4.1
 * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
 */
Prisma.prismaVersion = {
  client: "6.4.1",
  engine: "a9055b89e58b4b5bfb59600785423b1db3d0e75d"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable',
  Snapshot: 'Snapshot'
});

exports.Prisma.CLIENTE_ESTADO_SAPScalarFieldEnum = {
  CODIGO: 'CODIGO',
  ESTADO: 'ESTADO',
  CODIGOINTEGRACAO: 'CODIGOINTEGRACAO',
  DATAALTERACAO: 'DATAALTERACAO'
};

exports.Prisma.CONTROLE_IMPPRODUTOSScalarFieldEnum = {
  DATA_IMPORTACAO: 'DATA_IMPORTACAO',
  DATA_CUSTO: 'DATA_CUSTO'
};

exports.Prisma.DEVOLUCAOScalarFieldEnum = {
  LOJA: 'LOJA',
  CODIGO: 'CODIGO',
  VALORDEVOLUCAO: 'VALORDEVOLUCAO',
  SITUACAO: 'SITUACAO',
  SITUACAO_DATA: 'SITUACAO_DATA',
  SITUACAO_LOJA: 'SITUACAO_LOJA',
  SITUACAO_PDV: 'SITUACAO_PDV',
  SITUACAO_COO: 'SITUACAO_COO',
  DATAINCLUSAO: 'DATAINCLUSAO'
};

exports.Prisma.EXPORTACAOScalarFieldEnum = {
  LOJA: 'LOJA',
  TIPO_CADASTRO: 'TIPO_CADASTRO',
  CHAVE: 'CHAVE',
  DATA_INCLUSAO: 'DATA_INCLUSAO',
  DATA_INIPROC: 'DATA_INIPROC',
  DATA_FIMPROC: 'DATA_FIMPROC',
  INTEGRADO: 'INTEGRADO',
  DESC_INTEGRADO: 'DESC_INTEGRADO',
  DATA1: 'DATA1',
  DATA2: 'DATA2',
  DATA3: 'DATA3',
  VALOR1: 'VALOR1',
  VALOR2: 'VALOR2',
  VALOR3: 'VALOR3',
  VALOR4: 'VALOR4',
  VALOR5: 'VALOR5',
  VALOR6: 'VALOR6',
  PROCESSO: 'PROCESSO',
  VALOR7: 'VALOR7'
};

exports.Prisma.FINALIZADORAS_SAPScalarFieldEnum = {
  COD_FINALIZ: 'COD_FINALIZ',
  DOMINIO: 'DOMINIO',
  TRANSACAO: 'TRANSACAO',
  TIPO: 'TIPO',
  DESCRICAO: 'DESCRICAO',
  OPERACAO_SAP: 'OPERACAO_SAP',
  OPERADORA_SAP: 'OPERADORA_SAP',
  REDE: 'REDE',
  BANDEIRA: 'BANDEIRA',
  MODALIDADE: 'MODALIDADE',
  BIN: 'BIN'
};

exports.Prisma.MONITORAMENTOScalarFieldEnum = {
  THREAD: 'THREAD',
  DATA_LOG: 'DATA_LOG',
  DESCRICAO: 'DESCRICAO',
  STATUS: 'STATUS'
};

exports.Prisma.PARAMETROS_SAPScalarFieldEnum = {
  ID_PARAMETRO: 'ID_PARAMETRO',
  DESCRICAO: 'DESCRICAO',
  PARAMETRO: 'PARAMETRO',
  TIPO: 'TIPO'
};

exports.Prisma.PEDIDO_CONTROLEScalarFieldEnum = {
  NUM_PEDIDO: 'NUM_PEDIDO',
  LOJA: 'LOJA',
  NUM_PDV: 'NUM_PDV',
  SITUACAO: 'SITUACAO'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  CLIENTE_ESTADO_SAP: 'CLIENTE_ESTADO_SAP',
  CONTROLE_IMPPRODUTOS: 'CONTROLE_IMPPRODUTOS',
  DEVOLUCAO: 'DEVOLUCAO',
  EXPORTACAO: 'EXPORTACAO',
  FINALIZADORAS_SAP: 'FINALIZADORAS_SAP',
  MONITORAMENTO: 'MONITORAMENTO',
  PARAMETROS_SAP: 'PARAMETROS_SAP',
  PEDIDO_CONTROLE: 'PEDIDO_CONTROLE'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
