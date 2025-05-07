
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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




  const path = require('path')

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/opt/api/forms_automation/prisma/generated/vmix_int",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "rhel-openssl-1.0.x",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "rhel-openssl-1.0.x"
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "/opt/api/forms_automation/prisma/schema-vmix-int.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "6.4.1",
  "engineVersion": "a9055b89e58b4b5bfb59600785423b1db3d0e75d",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "sqlserver",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DEV_DB_VISUAL_MIX_INT_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider      = \"prisma-client-js\"\n  output        = \"./generated/vmix_int\"\n  binaryTargets = [\"native\", \"rhel-openssl-1.0.x\"]\n}\n\ndatasource db {\n  provider = \"sqlserver\"\n  url      = env(\"DEV_DB_VISUAL_MIX_INT_URL\")\n}\n\nmodel CLIENTE_ESTADO_SAP {\n  CODIGO           BigInt    @id(map: \"PK_CLIENTE_ESTADO_SAP\") @default(0, map: \"DF_CLIENTE_ESTADO_SAP_CODIGO\")\n  ESTADO           String?   @default(\" \", map: \"DF_CLIENTE_ESTADO_SAP_ESTADO\") @db.VarChar(2)\n  CODIGOINTEGRACAO String?   @default(\" \", map: \"DF_CLIENTE_ESTADO_SAP_CODIGOINTEGRACAO\") @db.VarChar(20)\n  DATAALTERACAO    DateTime? @default(dbgenerated(\"1980/01/01 00:00:00\"), map: \"DF_CLIENTE_ESTADO_SAP_DATAALTERACAO\") @db.DateTime\n}\n\nmodel CONTROLE_IMPPRODUTOS {\n  DATA_IMPORTACAO DateTime  @id(map: \"PK_CONTROLE_IMPPRODUTOS\") @default(dbgenerated(\"1980/01/01 00:00:00\"), map: \"DF_CONTROLE_IMPPRODUTOS_DATA_IMPORTACAO\") @db.DateTime\n  DATA_CUSTO      DateTime? @default(dbgenerated(\"1980/01/01 00:00:00\"), map: \"DF_CONTROLE_IMPPRODUTOS_DATA_CUSTO\") @db.DateTime\n}\n\nmodel DEVOLUCAO {\n  LOJA           Int?      @default(0, map: \"DF_DEVOLUCAO_LOJA\")\n  CODIGO         BigInt    @id(map: \"PK_DEVOLUCAO\") @default(0, map: \"DF_DEVOLUCAO_CODIGO\")\n  VALORDEVOLUCAO Float?    @default(0, map: \"DF_DEVOLUCAO_VALORDEVOLUCAO\") @db.Money\n  SITUACAO       Int?      @default(0, map: \"DF_DEVOLUCAO_SITUACAO\") @db.TinyInt\n  SITUACAO_DATA  DateTime? @default(dbgenerated(\"1980/01/01 00:00:00\"), map: \"DF_DEVOLUCAO_SITUACAO_DATA\") @db.DateTime\n  SITUACAO_LOJA  Int?      @default(0, map: \"DF_DEVOLUCAO_SITUACAO_LOJA\") @db.SmallInt\n  SITUACAO_PDV   Int?      @default(0, map: \"DF_DEVOLUCAO_SITUACAO_PDV\") @db.SmallInt\n  SITUACAO_COO   Int?      @default(0, map: \"DF_DEVOLUCAO_SITUACAO_COO\")\n  DATAINCLUSAO   DateTime? @default(dbgenerated(\"1980/01/01 00:00:00\"), map: \"DF_DEVOLUCAO_DATAINCLUSAO\") @db.DateTime\n}\n\nmodel EXPORTACAO {\n  LOJA           Int       @default(0, map: \"DF_EXPORTACAO_LOJA\") @db.SmallInt\n  TIPO_CADASTRO  Int       @default(0, map: \"DF_EXPORTACAO_TIPO_CADASTRO\") @db.TinyInt\n  CHAVE          String    @default(\"\", map: \"DF_EXPORTACAO_CHAVE\") @db.VarChar(40)\n  DATA_INCLUSAO  DateTime? @default(now(), map: \"DF_EXPORTACAO_DATA_INCLUSAO\") @db.DateTime\n  DATA_INIPROC   DateTime? @default(now(), map: \"DF_EXPORTACAO_DATA_INIPROC\") @db.DateTime\n  DATA_FIMPROC   DateTime? @default(now(), map: \"DF_EXPORTACAO_DATA_FIMPROC\") @db.DateTime\n  INTEGRADO      Int       @default(0, map: \"DF_EXPORTACAO_INTEGRADO\") @db.SmallInt\n  DESC_INTEGRADO String?   @default(\" \", map: \"DF_EXPORTACAO_DESC_INTEGRADO\") @db.VarChar(255)\n  DATA1          DateTime? @default(dbgenerated(\"1980/01/01 00:00:00\"), map: \"DF_EXPORTACAO_DATA1\") @db.DateTime\n  DATA2          DateTime? @default(dbgenerated(\"1980/01/01 00:00:00\"), map: \"DF_EXPORTACAO_DATA2\") @db.DateTime\n  DATA3          DateTime? @default(dbgenerated(\"1980/01/01 00:00:00\"), map: \"DF_EXPORTACAO_DATA3\") @db.DateTime\n  VALOR1         Float?    @default(0, map: \"DF_EXPORTACAO_VALOR1\")\n  VALOR2         Float?    @default(0, map: \"DF_EXPORTACAO_VALOR2\")\n  VALOR3         Float?    @default(0, map: \"DF_EXPORTACAO_VALOR3\")\n  VALOR4         Float?    @default(0, map: \"DF_EXPORTACAO_VALOR4\")\n  VALOR5         Float?    @default(0, map: \"DF_EXPORTACAO_VALOR5\")\n  VALOR6         Float?    @default(0, map: \"DF_EXPORTACAO_VALOR6\")\n  PROCESSO       String?   @default(\" \", map: \"DF_EXPORTACAO_PROCESSO\") @db.VarChar(20)\n  VALOR7         Float?    @default(0, map: \"DF_EXPORTACAO_VALOR7\")\n\n  @@id([LOJA, TIPO_CADASTRO, CHAVE], map: \"PK_EXPORTACAO\")\n  @@index([TIPO_CADASTRO, DATA_INCLUSAO, INTEGRADO], map: \"_dta_index_EXPORTACAO_11_2105058535__K2_K4_K7_1_3_5_6_8_9_10_11_12_13_14_15_16_17_18_19\")\n  @@index([INTEGRADO, LOJA, TIPO_CADASTRO, CHAVE, DATA_INCLUSAO, VALOR1, VALOR2, VALOR3, VALOR4, VALOR5, VALOR6], map: \"_dta_index_EXPORTACAO_11_2105058535__K7_K1_K2_K3_K4_K12_K13_K14_K15_K16_K17_5_6_8_9_10_11_18_19\")\n  @@index([INTEGRADO], map: \"IX_EXPORTACAO\")\n}\n\nmodel FINALIZADORAS_SAP {\n  COD_FINALIZ   Int     @default(0, map: \"DF_FINALIZADORAS_SAP_COD_FINALIZ\") @db.TinyInt\n  DOMINIO       Int     @default(0, map: \"DF_FINALIZADORAS_SAP_DOMINIO\") @db.SmallInt\n  TRANSACAO     Int     @default(0, map: \"DF_FINALIZADORAS_SAP_TRANSACAO\") @db.SmallInt\n  TIPO          Int?    @default(0, map: \"DF_FINALIZADORAS_SAP_TIPO\") @db.TinyInt\n  DESCRICAO     String? @default(\" \", map: \"DF_FINALIZADORAS_SAP_DESCRICAO\") @db.VarChar(30)\n  OPERACAO_SAP  String? @default(\" \", map: \"DF_FINALIZADORAS_SAP_OPERACAO_SAP\") @db.VarChar(2)\n  OPERADORA_SAP String? @default(\" \", map: \"DF_FINALIZADORAS_SAP_OPERADORA_SAP\") @db.VarChar(10)\n  REDE          Int     @default(0, map: \"DF_FINALIZADORAS_SAP_REDE\") @db.SmallInt\n  BANDEIRA      Int     @default(0, map: \"DF_FINALIZADORAS_SAP_BANDEIRA\") @db.SmallInt\n  MODALIDADE    Int     @default(0, map: \"DF_FINALIZADORAS_SAP_MODALIDADE\") @db.SmallInt\n  BIN           Int     @default(0, map: \"DF_FINALIZADORAS_SAP_BIN\") @db.SmallInt\n\n  @@id([COD_FINALIZ, DOMINIO, TRANSACAO, REDE, BANDEIRA, MODALIDADE, BIN], map: \"PK_FINALIZADORAS_SAP\")\n}\n\nmodel MONITORAMENTO {\n  THREAD    String    @id(map: \"PK_MONITORAMENTO\") @default(\"\", map: \"DF_MONITORAMENTO_THREAD\") @db.VarChar(20)\n  DATA_LOG  DateTime? @default(now(), map: \"DF_MONITORAMENTO_DATA_LOG\") @db.DateTime\n  DESCRICAO String?   @default(\" \", map: \"DF_MONITORAMENTO_DESCRICAO\") @db.VarChar(255)\n  STATUS    Int?      @default(0, map: \"DF_MONITORAMENTO_STATUS\") @db.TinyInt\n}\n\nmodel PARAMETROS_SAP {\n  ID_PARAMETRO Int     @id(map: \"PK_PARAMETROS_SAP\") @default(0, map: \"DF_PARAMETROS_SAP_ID_PARAMETRO\")\n  DESCRICAO    String? @default(\" \", map: \"DF_PARAMETROS_SAP_DESCRICAO\") @db.VarChar(50)\n  PARAMETRO    String? @default(\" \", map: \"DF_PARAMETROS_SAP_PARAMETRO\") @db.VarChar(255)\n  TIPO         Int?    @default(0, map: \"DF_PARAMETROS_SAP_TIPO\") @db.TinyInt\n}\n\nmodel PEDIDO_CONTROLE {\n  NUM_PEDIDO BigInt @id(map: \"PK_PEDIDO_CONTROLE\") @default(0, map: \"DF_PEDIDO_CONTROLE_NUM_PEDIDO\")\n  LOJA       Int?   @default(0, map: \"DF_PEDIDO_CONTROLE_LOJA\")\n  NUM_PDV    Int?   @default(0, map: \"DF_PEDIDO_CONTROLE_NUM_PDV\") @db.TinyInt\n  SITUACAO   Int?   @default(0, map: \"DF_PEDIDO_CONTROLE_SITUACAO\") @db.TinyInt\n}\n",
  "inlineSchemaHash": "b940055716a0c01ea69a94b91b3ee9706df6155056ddb23de8dbccf93975f6a5",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/vmix_int",
    "generated/vmix_int",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"CLIENTE_ESTADO_SAP\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"CODIGO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ESTADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"2\"]],\"default\":\" \",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CODIGOINTEGRACAO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"default\":\" \",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATAALTERACAO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"1980/01/01 00:00:00\"]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"CONTROLE_IMPPRODUTOS\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"DATA_IMPORTACAO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"1980/01/01 00:00:00\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA_CUSTO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"1980/01/01 00:00:00\"]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"DEVOLUCAO\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"LOJA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CODIGO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VALORDEVOLUCAO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":[\"Money\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SITUACAO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"TinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SITUACAO_DATA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"1980/01/01 00:00:00\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SITUACAO_LOJA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"SmallInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SITUACAO_PDV\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"SmallInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SITUACAO_COO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATAINCLUSAO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"1980/01/01 00:00:00\"]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"EXPORTACAO\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"LOJA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"SmallInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TIPO_CADASTRO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"TinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CHAVE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"40\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA_INCLUSAO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA_INIPROC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA_FIMPROC\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"INTEGRADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"SmallInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESC_INTEGRADO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\" \",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"1980/01/01 00:00:00\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"1980/01/01 00:00:00\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"1980/01/01 00:00:00\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VALOR1\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VALOR2\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VALOR3\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VALOR4\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VALOR5\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VALOR6\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PROCESSO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"default\":\" \",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"VALOR7\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Float\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"LOJA\",\"TIPO_CADASTRO\",\"CHAVE\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"FINALIZADORAS_SAP\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"COD_FINALIZ\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"TinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DOMINIO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"SmallInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TRANSACAO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"SmallInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TIPO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"TinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESCRICAO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"30\"]],\"default\":\" \",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERACAO_SAP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"2\"]],\"default\":\" \",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"OPERADORA_SAP\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"10\"]],\"default\":\" \",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"REDE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"SmallInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BANDEIRA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"SmallInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"MODALIDADE\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"SmallInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"BIN\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"SmallInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"COD_FINALIZ\",\"DOMINIO\",\"TRANSACAO\",\"REDE\",\"BANDEIRA\",\"MODALIDADE\",\"BIN\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"MONITORAMENTO\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"THREAD\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"20\"]],\"default\":\"\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DATA_LOG\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"DateTime\",[]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESCRICAO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\" \",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"STATUS\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"TinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PARAMETROS_SAP\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"ID_PARAMETRO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"DESCRICAO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"default\":\" \",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"PARAMETRO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"default\":\" \",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TIPO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"TinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"PEDIDO_CONTROLE\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"NUM_PEDIDO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"nativeType\":null,\"default\":\"0\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"LOJA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"NUM_PDV\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"TinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"SITUACAO\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"TinyInt\",[]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-rhel-openssl-1.0.x.so.node");
path.join(process.cwd(), "prisma/generated/vmix_int/libquery_engine-rhel-openssl-1.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/vmix_int/schema.prisma")
