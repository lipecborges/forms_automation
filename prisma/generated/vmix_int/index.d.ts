
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CLIENTE_ESTADO_SAP
 * 
 */
export type CLIENTE_ESTADO_SAP = $Result.DefaultSelection<Prisma.$CLIENTE_ESTADO_SAPPayload>
/**
 * Model CONTROLE_IMPPRODUTOS
 * 
 */
export type CONTROLE_IMPPRODUTOS = $Result.DefaultSelection<Prisma.$CONTROLE_IMPPRODUTOSPayload>
/**
 * Model DEVOLUCAO
 * 
 */
export type DEVOLUCAO = $Result.DefaultSelection<Prisma.$DEVOLUCAOPayload>
/**
 * Model EXPORTACAO
 * 
 */
export type EXPORTACAO = $Result.DefaultSelection<Prisma.$EXPORTACAOPayload>
/**
 * Model FINALIZADORAS_SAP
 * 
 */
export type FINALIZADORAS_SAP = $Result.DefaultSelection<Prisma.$FINALIZADORAS_SAPPayload>
/**
 * Model MONITORAMENTO
 * 
 */
export type MONITORAMENTO = $Result.DefaultSelection<Prisma.$MONITORAMENTOPayload>
/**
 * Model PARAMETROS_SAP
 * 
 */
export type PARAMETROS_SAP = $Result.DefaultSelection<Prisma.$PARAMETROS_SAPPayload>
/**
 * Model PEDIDO_CONTROLE
 * 
 */
export type PEDIDO_CONTROLE = $Result.DefaultSelection<Prisma.$PEDIDO_CONTROLEPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CLIENTE_ESTADO_SAPS
 * const cLIENTE_ESTADO_SAPS = await prisma.cLIENTE_ESTADO_SAP.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CLIENTE_ESTADO_SAPS
   * const cLIENTE_ESTADO_SAPS = await prisma.cLIENTE_ESTADO_SAP.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.cLIENTE_ESTADO_SAP`: Exposes CRUD operations for the **CLIENTE_ESTADO_SAP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CLIENTE_ESTADO_SAPS
    * const cLIENTE_ESTADO_SAPS = await prisma.cLIENTE_ESTADO_SAP.findMany()
    * ```
    */
  get cLIENTE_ESTADO_SAP(): Prisma.CLIENTE_ESTADO_SAPDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cONTROLE_IMPPRODUTOS`: Exposes CRUD operations for the **CONTROLE_IMPPRODUTOS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CONTROLE_IMPPRODUTOS
    * const cONTROLE_IMPPRODUTOS = await prisma.cONTROLE_IMPPRODUTOS.findMany()
    * ```
    */
  get cONTROLE_IMPPRODUTOS(): Prisma.CONTROLE_IMPPRODUTOSDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dEVOLUCAO`: Exposes CRUD operations for the **DEVOLUCAO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DEVOLUCAOS
    * const dEVOLUCAOS = await prisma.dEVOLUCAO.findMany()
    * ```
    */
  get dEVOLUCAO(): Prisma.DEVOLUCAODelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eXPORTACAO`: Exposes CRUD operations for the **EXPORTACAO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EXPORTACAOS
    * const eXPORTACAOS = await prisma.eXPORTACAO.findMany()
    * ```
    */
  get eXPORTACAO(): Prisma.EXPORTACAODelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fINALIZADORAS_SAP`: Exposes CRUD operations for the **FINALIZADORAS_SAP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FINALIZADORAS_SAPS
    * const fINALIZADORAS_SAPS = await prisma.fINALIZADORAS_SAP.findMany()
    * ```
    */
  get fINALIZADORAS_SAP(): Prisma.FINALIZADORAS_SAPDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mONITORAMENTO`: Exposes CRUD operations for the **MONITORAMENTO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MONITORAMENTOS
    * const mONITORAMENTOS = await prisma.mONITORAMENTO.findMany()
    * ```
    */
  get mONITORAMENTO(): Prisma.MONITORAMENTODelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pARAMETROS_SAP`: Exposes CRUD operations for the **PARAMETROS_SAP** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PARAMETROS_SAPS
    * const pARAMETROS_SAPS = await prisma.pARAMETROS_SAP.findMany()
    * ```
    */
  get pARAMETROS_SAP(): Prisma.PARAMETROS_SAPDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pEDIDO_CONTROLE`: Exposes CRUD operations for the **PEDIDO_CONTROLE** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PEDIDO_CONTROLES
    * const pEDIDO_CONTROLES = await prisma.pEDIDO_CONTROLE.findMany()
    * ```
    */
  get pEDIDO_CONTROLE(): Prisma.PEDIDO_CONTROLEDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.4.1
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CLIENTE_ESTADO_SAP: 'CLIENTE_ESTADO_SAP',
    CONTROLE_IMPPRODUTOS: 'CONTROLE_IMPPRODUTOS',
    DEVOLUCAO: 'DEVOLUCAO',
    EXPORTACAO: 'EXPORTACAO',
    FINALIZADORAS_SAP: 'FINALIZADORAS_SAP',
    MONITORAMENTO: 'MONITORAMENTO',
    PARAMETROS_SAP: 'PARAMETROS_SAP',
    PEDIDO_CONTROLE: 'PEDIDO_CONTROLE'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "cLIENTE_ESTADO_SAP" | "cONTROLE_IMPPRODUTOS" | "dEVOLUCAO" | "eXPORTACAO" | "fINALIZADORAS_SAP" | "mONITORAMENTO" | "pARAMETROS_SAP" | "pEDIDO_CONTROLE"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CLIENTE_ESTADO_SAP: {
        payload: Prisma.$CLIENTE_ESTADO_SAPPayload<ExtArgs>
        fields: Prisma.CLIENTE_ESTADO_SAPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CLIENTE_ESTADO_SAPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CLIENTE_ESTADO_SAPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CLIENTE_ESTADO_SAPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CLIENTE_ESTADO_SAPPayload>
          }
          findFirst: {
            args: Prisma.CLIENTE_ESTADO_SAPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CLIENTE_ESTADO_SAPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CLIENTE_ESTADO_SAPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CLIENTE_ESTADO_SAPPayload>
          }
          findMany: {
            args: Prisma.CLIENTE_ESTADO_SAPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CLIENTE_ESTADO_SAPPayload>[]
          }
          create: {
            args: Prisma.CLIENTE_ESTADO_SAPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CLIENTE_ESTADO_SAPPayload>
          }
          createMany: {
            args: Prisma.CLIENTE_ESTADO_SAPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CLIENTE_ESTADO_SAPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CLIENTE_ESTADO_SAPPayload>
          }
          update: {
            args: Prisma.CLIENTE_ESTADO_SAPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CLIENTE_ESTADO_SAPPayload>
          }
          deleteMany: {
            args: Prisma.CLIENTE_ESTADO_SAPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CLIENTE_ESTADO_SAPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CLIENTE_ESTADO_SAPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CLIENTE_ESTADO_SAPPayload>
          }
          aggregate: {
            args: Prisma.CLIENTE_ESTADO_SAPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCLIENTE_ESTADO_SAP>
          }
          groupBy: {
            args: Prisma.CLIENTE_ESTADO_SAPGroupByArgs<ExtArgs>
            result: $Utils.Optional<CLIENTE_ESTADO_SAPGroupByOutputType>[]
          }
          count: {
            args: Prisma.CLIENTE_ESTADO_SAPCountArgs<ExtArgs>
            result: $Utils.Optional<CLIENTE_ESTADO_SAPCountAggregateOutputType> | number
          }
        }
      }
      CONTROLE_IMPPRODUTOS: {
        payload: Prisma.$CONTROLE_IMPPRODUTOSPayload<ExtArgs>
        fields: Prisma.CONTROLE_IMPPRODUTOSFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CONTROLE_IMPPRODUTOSFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONTROLE_IMPPRODUTOSPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CONTROLE_IMPPRODUTOSFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONTROLE_IMPPRODUTOSPayload>
          }
          findFirst: {
            args: Prisma.CONTROLE_IMPPRODUTOSFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONTROLE_IMPPRODUTOSPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CONTROLE_IMPPRODUTOSFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONTROLE_IMPPRODUTOSPayload>
          }
          findMany: {
            args: Prisma.CONTROLE_IMPPRODUTOSFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONTROLE_IMPPRODUTOSPayload>[]
          }
          create: {
            args: Prisma.CONTROLE_IMPPRODUTOSCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONTROLE_IMPPRODUTOSPayload>
          }
          createMany: {
            args: Prisma.CONTROLE_IMPPRODUTOSCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CONTROLE_IMPPRODUTOSDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONTROLE_IMPPRODUTOSPayload>
          }
          update: {
            args: Prisma.CONTROLE_IMPPRODUTOSUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONTROLE_IMPPRODUTOSPayload>
          }
          deleteMany: {
            args: Prisma.CONTROLE_IMPPRODUTOSDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CONTROLE_IMPPRODUTOSUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CONTROLE_IMPPRODUTOSUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CONTROLE_IMPPRODUTOSPayload>
          }
          aggregate: {
            args: Prisma.CONTROLE_IMPPRODUTOSAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCONTROLE_IMPPRODUTOS>
          }
          groupBy: {
            args: Prisma.CONTROLE_IMPPRODUTOSGroupByArgs<ExtArgs>
            result: $Utils.Optional<CONTROLE_IMPPRODUTOSGroupByOutputType>[]
          }
          count: {
            args: Prisma.CONTROLE_IMPPRODUTOSCountArgs<ExtArgs>
            result: $Utils.Optional<CONTROLE_IMPPRODUTOSCountAggregateOutputType> | number
          }
        }
      }
      DEVOLUCAO: {
        payload: Prisma.$DEVOLUCAOPayload<ExtArgs>
        fields: Prisma.DEVOLUCAOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DEVOLUCAOFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DEVOLUCAOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DEVOLUCAOFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DEVOLUCAOPayload>
          }
          findFirst: {
            args: Prisma.DEVOLUCAOFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DEVOLUCAOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DEVOLUCAOFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DEVOLUCAOPayload>
          }
          findMany: {
            args: Prisma.DEVOLUCAOFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DEVOLUCAOPayload>[]
          }
          create: {
            args: Prisma.DEVOLUCAOCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DEVOLUCAOPayload>
          }
          createMany: {
            args: Prisma.DEVOLUCAOCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DEVOLUCAODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DEVOLUCAOPayload>
          }
          update: {
            args: Prisma.DEVOLUCAOUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DEVOLUCAOPayload>
          }
          deleteMany: {
            args: Prisma.DEVOLUCAODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DEVOLUCAOUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DEVOLUCAOUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DEVOLUCAOPayload>
          }
          aggregate: {
            args: Prisma.DEVOLUCAOAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDEVOLUCAO>
          }
          groupBy: {
            args: Prisma.DEVOLUCAOGroupByArgs<ExtArgs>
            result: $Utils.Optional<DEVOLUCAOGroupByOutputType>[]
          }
          count: {
            args: Prisma.DEVOLUCAOCountArgs<ExtArgs>
            result: $Utils.Optional<DEVOLUCAOCountAggregateOutputType> | number
          }
        }
      }
      EXPORTACAO: {
        payload: Prisma.$EXPORTACAOPayload<ExtArgs>
        fields: Prisma.EXPORTACAOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EXPORTACAOFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EXPORTACAOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EXPORTACAOFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EXPORTACAOPayload>
          }
          findFirst: {
            args: Prisma.EXPORTACAOFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EXPORTACAOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EXPORTACAOFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EXPORTACAOPayload>
          }
          findMany: {
            args: Prisma.EXPORTACAOFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EXPORTACAOPayload>[]
          }
          create: {
            args: Prisma.EXPORTACAOCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EXPORTACAOPayload>
          }
          createMany: {
            args: Prisma.EXPORTACAOCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EXPORTACAODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EXPORTACAOPayload>
          }
          update: {
            args: Prisma.EXPORTACAOUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EXPORTACAOPayload>
          }
          deleteMany: {
            args: Prisma.EXPORTACAODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EXPORTACAOUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EXPORTACAOUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EXPORTACAOPayload>
          }
          aggregate: {
            args: Prisma.EXPORTACAOAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEXPORTACAO>
          }
          groupBy: {
            args: Prisma.EXPORTACAOGroupByArgs<ExtArgs>
            result: $Utils.Optional<EXPORTACAOGroupByOutputType>[]
          }
          count: {
            args: Prisma.EXPORTACAOCountArgs<ExtArgs>
            result: $Utils.Optional<EXPORTACAOCountAggregateOutputType> | number
          }
        }
      }
      FINALIZADORAS_SAP: {
        payload: Prisma.$FINALIZADORAS_SAPPayload<ExtArgs>
        fields: Prisma.FINALIZADORAS_SAPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FINALIZADORAS_SAPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FINALIZADORAS_SAPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FINALIZADORAS_SAPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FINALIZADORAS_SAPPayload>
          }
          findFirst: {
            args: Prisma.FINALIZADORAS_SAPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FINALIZADORAS_SAPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FINALIZADORAS_SAPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FINALIZADORAS_SAPPayload>
          }
          findMany: {
            args: Prisma.FINALIZADORAS_SAPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FINALIZADORAS_SAPPayload>[]
          }
          create: {
            args: Prisma.FINALIZADORAS_SAPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FINALIZADORAS_SAPPayload>
          }
          createMany: {
            args: Prisma.FINALIZADORAS_SAPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FINALIZADORAS_SAPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FINALIZADORAS_SAPPayload>
          }
          update: {
            args: Prisma.FINALIZADORAS_SAPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FINALIZADORAS_SAPPayload>
          }
          deleteMany: {
            args: Prisma.FINALIZADORAS_SAPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FINALIZADORAS_SAPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FINALIZADORAS_SAPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FINALIZADORAS_SAPPayload>
          }
          aggregate: {
            args: Prisma.FINALIZADORAS_SAPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFINALIZADORAS_SAP>
          }
          groupBy: {
            args: Prisma.FINALIZADORAS_SAPGroupByArgs<ExtArgs>
            result: $Utils.Optional<FINALIZADORAS_SAPGroupByOutputType>[]
          }
          count: {
            args: Prisma.FINALIZADORAS_SAPCountArgs<ExtArgs>
            result: $Utils.Optional<FINALIZADORAS_SAPCountAggregateOutputType> | number
          }
        }
      }
      MONITORAMENTO: {
        payload: Prisma.$MONITORAMENTOPayload<ExtArgs>
        fields: Prisma.MONITORAMENTOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MONITORAMENTOFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MONITORAMENTOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MONITORAMENTOFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MONITORAMENTOPayload>
          }
          findFirst: {
            args: Prisma.MONITORAMENTOFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MONITORAMENTOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MONITORAMENTOFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MONITORAMENTOPayload>
          }
          findMany: {
            args: Prisma.MONITORAMENTOFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MONITORAMENTOPayload>[]
          }
          create: {
            args: Prisma.MONITORAMENTOCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MONITORAMENTOPayload>
          }
          createMany: {
            args: Prisma.MONITORAMENTOCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MONITORAMENTODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MONITORAMENTOPayload>
          }
          update: {
            args: Prisma.MONITORAMENTOUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MONITORAMENTOPayload>
          }
          deleteMany: {
            args: Prisma.MONITORAMENTODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MONITORAMENTOUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MONITORAMENTOUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MONITORAMENTOPayload>
          }
          aggregate: {
            args: Prisma.MONITORAMENTOAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMONITORAMENTO>
          }
          groupBy: {
            args: Prisma.MONITORAMENTOGroupByArgs<ExtArgs>
            result: $Utils.Optional<MONITORAMENTOGroupByOutputType>[]
          }
          count: {
            args: Prisma.MONITORAMENTOCountArgs<ExtArgs>
            result: $Utils.Optional<MONITORAMENTOCountAggregateOutputType> | number
          }
        }
      }
      PARAMETROS_SAP: {
        payload: Prisma.$PARAMETROS_SAPPayload<ExtArgs>
        fields: Prisma.PARAMETROS_SAPFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PARAMETROS_SAPFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PARAMETROS_SAPPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PARAMETROS_SAPFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PARAMETROS_SAPPayload>
          }
          findFirst: {
            args: Prisma.PARAMETROS_SAPFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PARAMETROS_SAPPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PARAMETROS_SAPFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PARAMETROS_SAPPayload>
          }
          findMany: {
            args: Prisma.PARAMETROS_SAPFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PARAMETROS_SAPPayload>[]
          }
          create: {
            args: Prisma.PARAMETROS_SAPCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PARAMETROS_SAPPayload>
          }
          createMany: {
            args: Prisma.PARAMETROS_SAPCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PARAMETROS_SAPDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PARAMETROS_SAPPayload>
          }
          update: {
            args: Prisma.PARAMETROS_SAPUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PARAMETROS_SAPPayload>
          }
          deleteMany: {
            args: Prisma.PARAMETROS_SAPDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PARAMETROS_SAPUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PARAMETROS_SAPUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PARAMETROS_SAPPayload>
          }
          aggregate: {
            args: Prisma.PARAMETROS_SAPAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePARAMETROS_SAP>
          }
          groupBy: {
            args: Prisma.PARAMETROS_SAPGroupByArgs<ExtArgs>
            result: $Utils.Optional<PARAMETROS_SAPGroupByOutputType>[]
          }
          count: {
            args: Prisma.PARAMETROS_SAPCountArgs<ExtArgs>
            result: $Utils.Optional<PARAMETROS_SAPCountAggregateOutputType> | number
          }
        }
      }
      PEDIDO_CONTROLE: {
        payload: Prisma.$PEDIDO_CONTROLEPayload<ExtArgs>
        fields: Prisma.PEDIDO_CONTROLEFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PEDIDO_CONTROLEFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PEDIDO_CONTROLEPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PEDIDO_CONTROLEFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PEDIDO_CONTROLEPayload>
          }
          findFirst: {
            args: Prisma.PEDIDO_CONTROLEFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PEDIDO_CONTROLEPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PEDIDO_CONTROLEFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PEDIDO_CONTROLEPayload>
          }
          findMany: {
            args: Prisma.PEDIDO_CONTROLEFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PEDIDO_CONTROLEPayload>[]
          }
          create: {
            args: Prisma.PEDIDO_CONTROLECreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PEDIDO_CONTROLEPayload>
          }
          createMany: {
            args: Prisma.PEDIDO_CONTROLECreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PEDIDO_CONTROLEDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PEDIDO_CONTROLEPayload>
          }
          update: {
            args: Prisma.PEDIDO_CONTROLEUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PEDIDO_CONTROLEPayload>
          }
          deleteMany: {
            args: Prisma.PEDIDO_CONTROLEDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PEDIDO_CONTROLEUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PEDIDO_CONTROLEUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PEDIDO_CONTROLEPayload>
          }
          aggregate: {
            args: Prisma.PEDIDO_CONTROLEAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePEDIDO_CONTROLE>
          }
          groupBy: {
            args: Prisma.PEDIDO_CONTROLEGroupByArgs<ExtArgs>
            result: $Utils.Optional<PEDIDO_CONTROLEGroupByOutputType>[]
          }
          count: {
            args: Prisma.PEDIDO_CONTROLECountArgs<ExtArgs>
            result: $Utils.Optional<PEDIDO_CONTROLECountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cLIENTE_ESTADO_SAP?: CLIENTE_ESTADO_SAPOmit
    cONTROLE_IMPPRODUTOS?: CONTROLE_IMPPRODUTOSOmit
    dEVOLUCAO?: DEVOLUCAOOmit
    eXPORTACAO?: EXPORTACAOOmit
    fINALIZADORAS_SAP?: FINALIZADORAS_SAPOmit
    mONITORAMENTO?: MONITORAMENTOOmit
    pARAMETROS_SAP?: PARAMETROS_SAPOmit
    pEDIDO_CONTROLE?: PEDIDO_CONTROLEOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model CLIENTE_ESTADO_SAP
   */

  export type AggregateCLIENTE_ESTADO_SAP = {
    _count: CLIENTE_ESTADO_SAPCountAggregateOutputType | null
    _avg: CLIENTE_ESTADO_SAPAvgAggregateOutputType | null
    _sum: CLIENTE_ESTADO_SAPSumAggregateOutputType | null
    _min: CLIENTE_ESTADO_SAPMinAggregateOutputType | null
    _max: CLIENTE_ESTADO_SAPMaxAggregateOutputType | null
  }

  export type CLIENTE_ESTADO_SAPAvgAggregateOutputType = {
    CODIGO: number | null
  }

  export type CLIENTE_ESTADO_SAPSumAggregateOutputType = {
    CODIGO: bigint | null
  }

  export type CLIENTE_ESTADO_SAPMinAggregateOutputType = {
    CODIGO: bigint | null
    ESTADO: string | null
    CODIGOINTEGRACAO: string | null
    DATAALTERACAO: Date | null
  }

  export type CLIENTE_ESTADO_SAPMaxAggregateOutputType = {
    CODIGO: bigint | null
    ESTADO: string | null
    CODIGOINTEGRACAO: string | null
    DATAALTERACAO: Date | null
  }

  export type CLIENTE_ESTADO_SAPCountAggregateOutputType = {
    CODIGO: number
    ESTADO: number
    CODIGOINTEGRACAO: number
    DATAALTERACAO: number
    _all: number
  }


  export type CLIENTE_ESTADO_SAPAvgAggregateInputType = {
    CODIGO?: true
  }

  export type CLIENTE_ESTADO_SAPSumAggregateInputType = {
    CODIGO?: true
  }

  export type CLIENTE_ESTADO_SAPMinAggregateInputType = {
    CODIGO?: true
    ESTADO?: true
    CODIGOINTEGRACAO?: true
    DATAALTERACAO?: true
  }

  export type CLIENTE_ESTADO_SAPMaxAggregateInputType = {
    CODIGO?: true
    ESTADO?: true
    CODIGOINTEGRACAO?: true
    DATAALTERACAO?: true
  }

  export type CLIENTE_ESTADO_SAPCountAggregateInputType = {
    CODIGO?: true
    ESTADO?: true
    CODIGOINTEGRACAO?: true
    DATAALTERACAO?: true
    _all?: true
  }

  export type CLIENTE_ESTADO_SAPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CLIENTE_ESTADO_SAP to aggregate.
     */
    where?: CLIENTE_ESTADO_SAPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CLIENTE_ESTADO_SAPS to fetch.
     */
    orderBy?: CLIENTE_ESTADO_SAPOrderByWithRelationInput | CLIENTE_ESTADO_SAPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CLIENTE_ESTADO_SAPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CLIENTE_ESTADO_SAPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CLIENTE_ESTADO_SAPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CLIENTE_ESTADO_SAPS
    **/
    _count?: true | CLIENTE_ESTADO_SAPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CLIENTE_ESTADO_SAPAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CLIENTE_ESTADO_SAPSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CLIENTE_ESTADO_SAPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CLIENTE_ESTADO_SAPMaxAggregateInputType
  }

  export type GetCLIENTE_ESTADO_SAPAggregateType<T extends CLIENTE_ESTADO_SAPAggregateArgs> = {
        [P in keyof T & keyof AggregateCLIENTE_ESTADO_SAP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCLIENTE_ESTADO_SAP[P]>
      : GetScalarType<T[P], AggregateCLIENTE_ESTADO_SAP[P]>
  }




  export type CLIENTE_ESTADO_SAPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CLIENTE_ESTADO_SAPWhereInput
    orderBy?: CLIENTE_ESTADO_SAPOrderByWithAggregationInput | CLIENTE_ESTADO_SAPOrderByWithAggregationInput[]
    by: CLIENTE_ESTADO_SAPScalarFieldEnum[] | CLIENTE_ESTADO_SAPScalarFieldEnum
    having?: CLIENTE_ESTADO_SAPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CLIENTE_ESTADO_SAPCountAggregateInputType | true
    _avg?: CLIENTE_ESTADO_SAPAvgAggregateInputType
    _sum?: CLIENTE_ESTADO_SAPSumAggregateInputType
    _min?: CLIENTE_ESTADO_SAPMinAggregateInputType
    _max?: CLIENTE_ESTADO_SAPMaxAggregateInputType
  }

  export type CLIENTE_ESTADO_SAPGroupByOutputType = {
    CODIGO: bigint
    ESTADO: string | null
    CODIGOINTEGRACAO: string | null
    DATAALTERACAO: Date | null
    _count: CLIENTE_ESTADO_SAPCountAggregateOutputType | null
    _avg: CLIENTE_ESTADO_SAPAvgAggregateOutputType | null
    _sum: CLIENTE_ESTADO_SAPSumAggregateOutputType | null
    _min: CLIENTE_ESTADO_SAPMinAggregateOutputType | null
    _max: CLIENTE_ESTADO_SAPMaxAggregateOutputType | null
  }

  type GetCLIENTE_ESTADO_SAPGroupByPayload<T extends CLIENTE_ESTADO_SAPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CLIENTE_ESTADO_SAPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CLIENTE_ESTADO_SAPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CLIENTE_ESTADO_SAPGroupByOutputType[P]>
            : GetScalarType<T[P], CLIENTE_ESTADO_SAPGroupByOutputType[P]>
        }
      >
    >


  export type CLIENTE_ESTADO_SAPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CODIGO?: boolean
    ESTADO?: boolean
    CODIGOINTEGRACAO?: boolean
    DATAALTERACAO?: boolean
  }, ExtArgs["result"]["cLIENTE_ESTADO_SAP"]>



  export type CLIENTE_ESTADO_SAPSelectScalar = {
    CODIGO?: boolean
    ESTADO?: boolean
    CODIGOINTEGRACAO?: boolean
    DATAALTERACAO?: boolean
  }

  export type CLIENTE_ESTADO_SAPOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"CODIGO" | "ESTADO" | "CODIGOINTEGRACAO" | "DATAALTERACAO", ExtArgs["result"]["cLIENTE_ESTADO_SAP"]>

  export type $CLIENTE_ESTADO_SAPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CLIENTE_ESTADO_SAP"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      CODIGO: bigint
      ESTADO: string | null
      CODIGOINTEGRACAO: string | null
      DATAALTERACAO: Date | null
    }, ExtArgs["result"]["cLIENTE_ESTADO_SAP"]>
    composites: {}
  }

  type CLIENTE_ESTADO_SAPGetPayload<S extends boolean | null | undefined | CLIENTE_ESTADO_SAPDefaultArgs> = $Result.GetResult<Prisma.$CLIENTE_ESTADO_SAPPayload, S>

  type CLIENTE_ESTADO_SAPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CLIENTE_ESTADO_SAPFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CLIENTE_ESTADO_SAPCountAggregateInputType | true
    }

  export interface CLIENTE_ESTADO_SAPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CLIENTE_ESTADO_SAP'], meta: { name: 'CLIENTE_ESTADO_SAP' } }
    /**
     * Find zero or one CLIENTE_ESTADO_SAP that matches the filter.
     * @param {CLIENTE_ESTADO_SAPFindUniqueArgs} args - Arguments to find a CLIENTE_ESTADO_SAP
     * @example
     * // Get one CLIENTE_ESTADO_SAP
     * const cLIENTE_ESTADO_SAP = await prisma.cLIENTE_ESTADO_SAP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CLIENTE_ESTADO_SAPFindUniqueArgs>(args: SelectSubset<T, CLIENTE_ESTADO_SAPFindUniqueArgs<ExtArgs>>): Prisma__CLIENTE_ESTADO_SAPClient<$Result.GetResult<Prisma.$CLIENTE_ESTADO_SAPPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one CLIENTE_ESTADO_SAP that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CLIENTE_ESTADO_SAPFindUniqueOrThrowArgs} args - Arguments to find a CLIENTE_ESTADO_SAP
     * @example
     * // Get one CLIENTE_ESTADO_SAP
     * const cLIENTE_ESTADO_SAP = await prisma.cLIENTE_ESTADO_SAP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CLIENTE_ESTADO_SAPFindUniqueOrThrowArgs>(args: SelectSubset<T, CLIENTE_ESTADO_SAPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CLIENTE_ESTADO_SAPClient<$Result.GetResult<Prisma.$CLIENTE_ESTADO_SAPPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first CLIENTE_ESTADO_SAP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CLIENTE_ESTADO_SAPFindFirstArgs} args - Arguments to find a CLIENTE_ESTADO_SAP
     * @example
     * // Get one CLIENTE_ESTADO_SAP
     * const cLIENTE_ESTADO_SAP = await prisma.cLIENTE_ESTADO_SAP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CLIENTE_ESTADO_SAPFindFirstArgs>(args?: SelectSubset<T, CLIENTE_ESTADO_SAPFindFirstArgs<ExtArgs>>): Prisma__CLIENTE_ESTADO_SAPClient<$Result.GetResult<Prisma.$CLIENTE_ESTADO_SAPPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first CLIENTE_ESTADO_SAP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CLIENTE_ESTADO_SAPFindFirstOrThrowArgs} args - Arguments to find a CLIENTE_ESTADO_SAP
     * @example
     * // Get one CLIENTE_ESTADO_SAP
     * const cLIENTE_ESTADO_SAP = await prisma.cLIENTE_ESTADO_SAP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CLIENTE_ESTADO_SAPFindFirstOrThrowArgs>(args?: SelectSubset<T, CLIENTE_ESTADO_SAPFindFirstOrThrowArgs<ExtArgs>>): Prisma__CLIENTE_ESTADO_SAPClient<$Result.GetResult<Prisma.$CLIENTE_ESTADO_SAPPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more CLIENTE_ESTADO_SAPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CLIENTE_ESTADO_SAPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CLIENTE_ESTADO_SAPS
     * const cLIENTE_ESTADO_SAPS = await prisma.cLIENTE_ESTADO_SAP.findMany()
     * 
     * // Get first 10 CLIENTE_ESTADO_SAPS
     * const cLIENTE_ESTADO_SAPS = await prisma.cLIENTE_ESTADO_SAP.findMany({ take: 10 })
     * 
     * // Only select the `CODIGO`
     * const cLIENTE_ESTADO_SAPWithCODIGOOnly = await prisma.cLIENTE_ESTADO_SAP.findMany({ select: { CODIGO: true } })
     * 
     */
    findMany<T extends CLIENTE_ESTADO_SAPFindManyArgs>(args?: SelectSubset<T, CLIENTE_ESTADO_SAPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CLIENTE_ESTADO_SAPPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a CLIENTE_ESTADO_SAP.
     * @param {CLIENTE_ESTADO_SAPCreateArgs} args - Arguments to create a CLIENTE_ESTADO_SAP.
     * @example
     * // Create one CLIENTE_ESTADO_SAP
     * const CLIENTE_ESTADO_SAP = await prisma.cLIENTE_ESTADO_SAP.create({
     *   data: {
     *     // ... data to create a CLIENTE_ESTADO_SAP
     *   }
     * })
     * 
     */
    create<T extends CLIENTE_ESTADO_SAPCreateArgs>(args: SelectSubset<T, CLIENTE_ESTADO_SAPCreateArgs<ExtArgs>>): Prisma__CLIENTE_ESTADO_SAPClient<$Result.GetResult<Prisma.$CLIENTE_ESTADO_SAPPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many CLIENTE_ESTADO_SAPS.
     * @param {CLIENTE_ESTADO_SAPCreateManyArgs} args - Arguments to create many CLIENTE_ESTADO_SAPS.
     * @example
     * // Create many CLIENTE_ESTADO_SAPS
     * const cLIENTE_ESTADO_SAP = await prisma.cLIENTE_ESTADO_SAP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CLIENTE_ESTADO_SAPCreateManyArgs>(args?: SelectSubset<T, CLIENTE_ESTADO_SAPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CLIENTE_ESTADO_SAP.
     * @param {CLIENTE_ESTADO_SAPDeleteArgs} args - Arguments to delete one CLIENTE_ESTADO_SAP.
     * @example
     * // Delete one CLIENTE_ESTADO_SAP
     * const CLIENTE_ESTADO_SAP = await prisma.cLIENTE_ESTADO_SAP.delete({
     *   where: {
     *     // ... filter to delete one CLIENTE_ESTADO_SAP
     *   }
     * })
     * 
     */
    delete<T extends CLIENTE_ESTADO_SAPDeleteArgs>(args: SelectSubset<T, CLIENTE_ESTADO_SAPDeleteArgs<ExtArgs>>): Prisma__CLIENTE_ESTADO_SAPClient<$Result.GetResult<Prisma.$CLIENTE_ESTADO_SAPPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one CLIENTE_ESTADO_SAP.
     * @param {CLIENTE_ESTADO_SAPUpdateArgs} args - Arguments to update one CLIENTE_ESTADO_SAP.
     * @example
     * // Update one CLIENTE_ESTADO_SAP
     * const cLIENTE_ESTADO_SAP = await prisma.cLIENTE_ESTADO_SAP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CLIENTE_ESTADO_SAPUpdateArgs>(args: SelectSubset<T, CLIENTE_ESTADO_SAPUpdateArgs<ExtArgs>>): Prisma__CLIENTE_ESTADO_SAPClient<$Result.GetResult<Prisma.$CLIENTE_ESTADO_SAPPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more CLIENTE_ESTADO_SAPS.
     * @param {CLIENTE_ESTADO_SAPDeleteManyArgs} args - Arguments to filter CLIENTE_ESTADO_SAPS to delete.
     * @example
     * // Delete a few CLIENTE_ESTADO_SAPS
     * const { count } = await prisma.cLIENTE_ESTADO_SAP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CLIENTE_ESTADO_SAPDeleteManyArgs>(args?: SelectSubset<T, CLIENTE_ESTADO_SAPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CLIENTE_ESTADO_SAPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CLIENTE_ESTADO_SAPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CLIENTE_ESTADO_SAPS
     * const cLIENTE_ESTADO_SAP = await prisma.cLIENTE_ESTADO_SAP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CLIENTE_ESTADO_SAPUpdateManyArgs>(args: SelectSubset<T, CLIENTE_ESTADO_SAPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CLIENTE_ESTADO_SAP.
     * @param {CLIENTE_ESTADO_SAPUpsertArgs} args - Arguments to update or create a CLIENTE_ESTADO_SAP.
     * @example
     * // Update or create a CLIENTE_ESTADO_SAP
     * const cLIENTE_ESTADO_SAP = await prisma.cLIENTE_ESTADO_SAP.upsert({
     *   create: {
     *     // ... data to create a CLIENTE_ESTADO_SAP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CLIENTE_ESTADO_SAP we want to update
     *   }
     * })
     */
    upsert<T extends CLIENTE_ESTADO_SAPUpsertArgs>(args: SelectSubset<T, CLIENTE_ESTADO_SAPUpsertArgs<ExtArgs>>): Prisma__CLIENTE_ESTADO_SAPClient<$Result.GetResult<Prisma.$CLIENTE_ESTADO_SAPPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of CLIENTE_ESTADO_SAPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CLIENTE_ESTADO_SAPCountArgs} args - Arguments to filter CLIENTE_ESTADO_SAPS to count.
     * @example
     * // Count the number of CLIENTE_ESTADO_SAPS
     * const count = await prisma.cLIENTE_ESTADO_SAP.count({
     *   where: {
     *     // ... the filter for the CLIENTE_ESTADO_SAPS we want to count
     *   }
     * })
    **/
    count<T extends CLIENTE_ESTADO_SAPCountArgs>(
      args?: Subset<T, CLIENTE_ESTADO_SAPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CLIENTE_ESTADO_SAPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CLIENTE_ESTADO_SAP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CLIENTE_ESTADO_SAPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CLIENTE_ESTADO_SAPAggregateArgs>(args: Subset<T, CLIENTE_ESTADO_SAPAggregateArgs>): Prisma.PrismaPromise<GetCLIENTE_ESTADO_SAPAggregateType<T>>

    /**
     * Group by CLIENTE_ESTADO_SAP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CLIENTE_ESTADO_SAPGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CLIENTE_ESTADO_SAPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CLIENTE_ESTADO_SAPGroupByArgs['orderBy'] }
        : { orderBy?: CLIENTE_ESTADO_SAPGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CLIENTE_ESTADO_SAPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCLIENTE_ESTADO_SAPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CLIENTE_ESTADO_SAP model
   */
  readonly fields: CLIENTE_ESTADO_SAPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CLIENTE_ESTADO_SAP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CLIENTE_ESTADO_SAPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CLIENTE_ESTADO_SAP model
   */ 
  interface CLIENTE_ESTADO_SAPFieldRefs {
    readonly CODIGO: FieldRef<"CLIENTE_ESTADO_SAP", 'BigInt'>
    readonly ESTADO: FieldRef<"CLIENTE_ESTADO_SAP", 'String'>
    readonly CODIGOINTEGRACAO: FieldRef<"CLIENTE_ESTADO_SAP", 'String'>
    readonly DATAALTERACAO: FieldRef<"CLIENTE_ESTADO_SAP", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CLIENTE_ESTADO_SAP findUnique
   */
  export type CLIENTE_ESTADO_SAPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CLIENTE_ESTADO_SAP
     */
    select?: CLIENTE_ESTADO_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CLIENTE_ESTADO_SAP
     */
    omit?: CLIENTE_ESTADO_SAPOmit<ExtArgs> | null
    /**
     * Filter, which CLIENTE_ESTADO_SAP to fetch.
     */
    where: CLIENTE_ESTADO_SAPWhereUniqueInput
  }

  /**
   * CLIENTE_ESTADO_SAP findUniqueOrThrow
   */
  export type CLIENTE_ESTADO_SAPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CLIENTE_ESTADO_SAP
     */
    select?: CLIENTE_ESTADO_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CLIENTE_ESTADO_SAP
     */
    omit?: CLIENTE_ESTADO_SAPOmit<ExtArgs> | null
    /**
     * Filter, which CLIENTE_ESTADO_SAP to fetch.
     */
    where: CLIENTE_ESTADO_SAPWhereUniqueInput
  }

  /**
   * CLIENTE_ESTADO_SAP findFirst
   */
  export type CLIENTE_ESTADO_SAPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CLIENTE_ESTADO_SAP
     */
    select?: CLIENTE_ESTADO_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CLIENTE_ESTADO_SAP
     */
    omit?: CLIENTE_ESTADO_SAPOmit<ExtArgs> | null
    /**
     * Filter, which CLIENTE_ESTADO_SAP to fetch.
     */
    where?: CLIENTE_ESTADO_SAPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CLIENTE_ESTADO_SAPS to fetch.
     */
    orderBy?: CLIENTE_ESTADO_SAPOrderByWithRelationInput | CLIENTE_ESTADO_SAPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CLIENTE_ESTADO_SAPS.
     */
    cursor?: CLIENTE_ESTADO_SAPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CLIENTE_ESTADO_SAPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CLIENTE_ESTADO_SAPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CLIENTE_ESTADO_SAPS.
     */
    distinct?: CLIENTE_ESTADO_SAPScalarFieldEnum | CLIENTE_ESTADO_SAPScalarFieldEnum[]
  }

  /**
   * CLIENTE_ESTADO_SAP findFirstOrThrow
   */
  export type CLIENTE_ESTADO_SAPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CLIENTE_ESTADO_SAP
     */
    select?: CLIENTE_ESTADO_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CLIENTE_ESTADO_SAP
     */
    omit?: CLIENTE_ESTADO_SAPOmit<ExtArgs> | null
    /**
     * Filter, which CLIENTE_ESTADO_SAP to fetch.
     */
    where?: CLIENTE_ESTADO_SAPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CLIENTE_ESTADO_SAPS to fetch.
     */
    orderBy?: CLIENTE_ESTADO_SAPOrderByWithRelationInput | CLIENTE_ESTADO_SAPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CLIENTE_ESTADO_SAPS.
     */
    cursor?: CLIENTE_ESTADO_SAPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CLIENTE_ESTADO_SAPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CLIENTE_ESTADO_SAPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CLIENTE_ESTADO_SAPS.
     */
    distinct?: CLIENTE_ESTADO_SAPScalarFieldEnum | CLIENTE_ESTADO_SAPScalarFieldEnum[]
  }

  /**
   * CLIENTE_ESTADO_SAP findMany
   */
  export type CLIENTE_ESTADO_SAPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CLIENTE_ESTADO_SAP
     */
    select?: CLIENTE_ESTADO_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CLIENTE_ESTADO_SAP
     */
    omit?: CLIENTE_ESTADO_SAPOmit<ExtArgs> | null
    /**
     * Filter, which CLIENTE_ESTADO_SAPS to fetch.
     */
    where?: CLIENTE_ESTADO_SAPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CLIENTE_ESTADO_SAPS to fetch.
     */
    orderBy?: CLIENTE_ESTADO_SAPOrderByWithRelationInput | CLIENTE_ESTADO_SAPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CLIENTE_ESTADO_SAPS.
     */
    cursor?: CLIENTE_ESTADO_SAPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CLIENTE_ESTADO_SAPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CLIENTE_ESTADO_SAPS.
     */
    skip?: number
    distinct?: CLIENTE_ESTADO_SAPScalarFieldEnum | CLIENTE_ESTADO_SAPScalarFieldEnum[]
  }

  /**
   * CLIENTE_ESTADO_SAP create
   */
  export type CLIENTE_ESTADO_SAPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CLIENTE_ESTADO_SAP
     */
    select?: CLIENTE_ESTADO_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CLIENTE_ESTADO_SAP
     */
    omit?: CLIENTE_ESTADO_SAPOmit<ExtArgs> | null
    /**
     * The data needed to create a CLIENTE_ESTADO_SAP.
     */
    data?: XOR<CLIENTE_ESTADO_SAPCreateInput, CLIENTE_ESTADO_SAPUncheckedCreateInput>
  }

  /**
   * CLIENTE_ESTADO_SAP createMany
   */
  export type CLIENTE_ESTADO_SAPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CLIENTE_ESTADO_SAPS.
     */
    data: CLIENTE_ESTADO_SAPCreateManyInput | CLIENTE_ESTADO_SAPCreateManyInput[]
  }

  /**
   * CLIENTE_ESTADO_SAP update
   */
  export type CLIENTE_ESTADO_SAPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CLIENTE_ESTADO_SAP
     */
    select?: CLIENTE_ESTADO_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CLIENTE_ESTADO_SAP
     */
    omit?: CLIENTE_ESTADO_SAPOmit<ExtArgs> | null
    /**
     * The data needed to update a CLIENTE_ESTADO_SAP.
     */
    data: XOR<CLIENTE_ESTADO_SAPUpdateInput, CLIENTE_ESTADO_SAPUncheckedUpdateInput>
    /**
     * Choose, which CLIENTE_ESTADO_SAP to update.
     */
    where: CLIENTE_ESTADO_SAPWhereUniqueInput
  }

  /**
   * CLIENTE_ESTADO_SAP updateMany
   */
  export type CLIENTE_ESTADO_SAPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CLIENTE_ESTADO_SAPS.
     */
    data: XOR<CLIENTE_ESTADO_SAPUpdateManyMutationInput, CLIENTE_ESTADO_SAPUncheckedUpdateManyInput>
    /**
     * Filter which CLIENTE_ESTADO_SAPS to update
     */
    where?: CLIENTE_ESTADO_SAPWhereInput
    /**
     * Limit how many CLIENTE_ESTADO_SAPS to update.
     */
    limit?: number
  }

  /**
   * CLIENTE_ESTADO_SAP upsert
   */
  export type CLIENTE_ESTADO_SAPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CLIENTE_ESTADO_SAP
     */
    select?: CLIENTE_ESTADO_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CLIENTE_ESTADO_SAP
     */
    omit?: CLIENTE_ESTADO_SAPOmit<ExtArgs> | null
    /**
     * The filter to search for the CLIENTE_ESTADO_SAP to update in case it exists.
     */
    where: CLIENTE_ESTADO_SAPWhereUniqueInput
    /**
     * In case the CLIENTE_ESTADO_SAP found by the `where` argument doesn't exist, create a new CLIENTE_ESTADO_SAP with this data.
     */
    create: XOR<CLIENTE_ESTADO_SAPCreateInput, CLIENTE_ESTADO_SAPUncheckedCreateInput>
    /**
     * In case the CLIENTE_ESTADO_SAP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CLIENTE_ESTADO_SAPUpdateInput, CLIENTE_ESTADO_SAPUncheckedUpdateInput>
  }

  /**
   * CLIENTE_ESTADO_SAP delete
   */
  export type CLIENTE_ESTADO_SAPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CLIENTE_ESTADO_SAP
     */
    select?: CLIENTE_ESTADO_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CLIENTE_ESTADO_SAP
     */
    omit?: CLIENTE_ESTADO_SAPOmit<ExtArgs> | null
    /**
     * Filter which CLIENTE_ESTADO_SAP to delete.
     */
    where: CLIENTE_ESTADO_SAPWhereUniqueInput
  }

  /**
   * CLIENTE_ESTADO_SAP deleteMany
   */
  export type CLIENTE_ESTADO_SAPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CLIENTE_ESTADO_SAPS to delete
     */
    where?: CLIENTE_ESTADO_SAPWhereInput
    /**
     * Limit how many CLIENTE_ESTADO_SAPS to delete.
     */
    limit?: number
  }

  /**
   * CLIENTE_ESTADO_SAP without action
   */
  export type CLIENTE_ESTADO_SAPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CLIENTE_ESTADO_SAP
     */
    select?: CLIENTE_ESTADO_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CLIENTE_ESTADO_SAP
     */
    omit?: CLIENTE_ESTADO_SAPOmit<ExtArgs> | null
  }


  /**
   * Model CONTROLE_IMPPRODUTOS
   */

  export type AggregateCONTROLE_IMPPRODUTOS = {
    _count: CONTROLE_IMPPRODUTOSCountAggregateOutputType | null
    _min: CONTROLE_IMPPRODUTOSMinAggregateOutputType | null
    _max: CONTROLE_IMPPRODUTOSMaxAggregateOutputType | null
  }

  export type CONTROLE_IMPPRODUTOSMinAggregateOutputType = {
    DATA_IMPORTACAO: Date | null
    DATA_CUSTO: Date | null
  }

  export type CONTROLE_IMPPRODUTOSMaxAggregateOutputType = {
    DATA_IMPORTACAO: Date | null
    DATA_CUSTO: Date | null
  }

  export type CONTROLE_IMPPRODUTOSCountAggregateOutputType = {
    DATA_IMPORTACAO: number
    DATA_CUSTO: number
    _all: number
  }


  export type CONTROLE_IMPPRODUTOSMinAggregateInputType = {
    DATA_IMPORTACAO?: true
    DATA_CUSTO?: true
  }

  export type CONTROLE_IMPPRODUTOSMaxAggregateInputType = {
    DATA_IMPORTACAO?: true
    DATA_CUSTO?: true
  }

  export type CONTROLE_IMPPRODUTOSCountAggregateInputType = {
    DATA_IMPORTACAO?: true
    DATA_CUSTO?: true
    _all?: true
  }

  export type CONTROLE_IMPPRODUTOSAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CONTROLE_IMPPRODUTOS to aggregate.
     */
    where?: CONTROLE_IMPPRODUTOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CONTROLE_IMPPRODUTOS to fetch.
     */
    orderBy?: CONTROLE_IMPPRODUTOSOrderByWithRelationInput | CONTROLE_IMPPRODUTOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CONTROLE_IMPPRODUTOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CONTROLE_IMPPRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CONTROLE_IMPPRODUTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CONTROLE_IMPPRODUTOS
    **/
    _count?: true | CONTROLE_IMPPRODUTOSCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CONTROLE_IMPPRODUTOSMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CONTROLE_IMPPRODUTOSMaxAggregateInputType
  }

  export type GetCONTROLE_IMPPRODUTOSAggregateType<T extends CONTROLE_IMPPRODUTOSAggregateArgs> = {
        [P in keyof T & keyof AggregateCONTROLE_IMPPRODUTOS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCONTROLE_IMPPRODUTOS[P]>
      : GetScalarType<T[P], AggregateCONTROLE_IMPPRODUTOS[P]>
  }




  export type CONTROLE_IMPPRODUTOSGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CONTROLE_IMPPRODUTOSWhereInput
    orderBy?: CONTROLE_IMPPRODUTOSOrderByWithAggregationInput | CONTROLE_IMPPRODUTOSOrderByWithAggregationInput[]
    by: CONTROLE_IMPPRODUTOSScalarFieldEnum[] | CONTROLE_IMPPRODUTOSScalarFieldEnum
    having?: CONTROLE_IMPPRODUTOSScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CONTROLE_IMPPRODUTOSCountAggregateInputType | true
    _min?: CONTROLE_IMPPRODUTOSMinAggregateInputType
    _max?: CONTROLE_IMPPRODUTOSMaxAggregateInputType
  }

  export type CONTROLE_IMPPRODUTOSGroupByOutputType = {
    DATA_IMPORTACAO: Date
    DATA_CUSTO: Date | null
    _count: CONTROLE_IMPPRODUTOSCountAggregateOutputType | null
    _min: CONTROLE_IMPPRODUTOSMinAggregateOutputType | null
    _max: CONTROLE_IMPPRODUTOSMaxAggregateOutputType | null
  }

  type GetCONTROLE_IMPPRODUTOSGroupByPayload<T extends CONTROLE_IMPPRODUTOSGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CONTROLE_IMPPRODUTOSGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CONTROLE_IMPPRODUTOSGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CONTROLE_IMPPRODUTOSGroupByOutputType[P]>
            : GetScalarType<T[P], CONTROLE_IMPPRODUTOSGroupByOutputType[P]>
        }
      >
    >


  export type CONTROLE_IMPPRODUTOSSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DATA_IMPORTACAO?: boolean
    DATA_CUSTO?: boolean
  }, ExtArgs["result"]["cONTROLE_IMPPRODUTOS"]>



  export type CONTROLE_IMPPRODUTOSSelectScalar = {
    DATA_IMPORTACAO?: boolean
    DATA_CUSTO?: boolean
  }

  export type CONTROLE_IMPPRODUTOSOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"DATA_IMPORTACAO" | "DATA_CUSTO", ExtArgs["result"]["cONTROLE_IMPPRODUTOS"]>

  export type $CONTROLE_IMPPRODUTOSPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CONTROLE_IMPPRODUTOS"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      DATA_IMPORTACAO: Date
      DATA_CUSTO: Date | null
    }, ExtArgs["result"]["cONTROLE_IMPPRODUTOS"]>
    composites: {}
  }

  type CONTROLE_IMPPRODUTOSGetPayload<S extends boolean | null | undefined | CONTROLE_IMPPRODUTOSDefaultArgs> = $Result.GetResult<Prisma.$CONTROLE_IMPPRODUTOSPayload, S>

  type CONTROLE_IMPPRODUTOSCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CONTROLE_IMPPRODUTOSFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CONTROLE_IMPPRODUTOSCountAggregateInputType | true
    }

  export interface CONTROLE_IMPPRODUTOSDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CONTROLE_IMPPRODUTOS'], meta: { name: 'CONTROLE_IMPPRODUTOS' } }
    /**
     * Find zero or one CONTROLE_IMPPRODUTOS that matches the filter.
     * @param {CONTROLE_IMPPRODUTOSFindUniqueArgs} args - Arguments to find a CONTROLE_IMPPRODUTOS
     * @example
     * // Get one CONTROLE_IMPPRODUTOS
     * const cONTROLE_IMPPRODUTOS = await prisma.cONTROLE_IMPPRODUTOS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CONTROLE_IMPPRODUTOSFindUniqueArgs>(args: SelectSubset<T, CONTROLE_IMPPRODUTOSFindUniqueArgs<ExtArgs>>): Prisma__CONTROLE_IMPPRODUTOSClient<$Result.GetResult<Prisma.$CONTROLE_IMPPRODUTOSPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one CONTROLE_IMPPRODUTOS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CONTROLE_IMPPRODUTOSFindUniqueOrThrowArgs} args - Arguments to find a CONTROLE_IMPPRODUTOS
     * @example
     * // Get one CONTROLE_IMPPRODUTOS
     * const cONTROLE_IMPPRODUTOS = await prisma.cONTROLE_IMPPRODUTOS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CONTROLE_IMPPRODUTOSFindUniqueOrThrowArgs>(args: SelectSubset<T, CONTROLE_IMPPRODUTOSFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CONTROLE_IMPPRODUTOSClient<$Result.GetResult<Prisma.$CONTROLE_IMPPRODUTOSPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first CONTROLE_IMPPRODUTOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONTROLE_IMPPRODUTOSFindFirstArgs} args - Arguments to find a CONTROLE_IMPPRODUTOS
     * @example
     * // Get one CONTROLE_IMPPRODUTOS
     * const cONTROLE_IMPPRODUTOS = await prisma.cONTROLE_IMPPRODUTOS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CONTROLE_IMPPRODUTOSFindFirstArgs>(args?: SelectSubset<T, CONTROLE_IMPPRODUTOSFindFirstArgs<ExtArgs>>): Prisma__CONTROLE_IMPPRODUTOSClient<$Result.GetResult<Prisma.$CONTROLE_IMPPRODUTOSPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first CONTROLE_IMPPRODUTOS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONTROLE_IMPPRODUTOSFindFirstOrThrowArgs} args - Arguments to find a CONTROLE_IMPPRODUTOS
     * @example
     * // Get one CONTROLE_IMPPRODUTOS
     * const cONTROLE_IMPPRODUTOS = await prisma.cONTROLE_IMPPRODUTOS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CONTROLE_IMPPRODUTOSFindFirstOrThrowArgs>(args?: SelectSubset<T, CONTROLE_IMPPRODUTOSFindFirstOrThrowArgs<ExtArgs>>): Prisma__CONTROLE_IMPPRODUTOSClient<$Result.GetResult<Prisma.$CONTROLE_IMPPRODUTOSPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more CONTROLE_IMPPRODUTOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONTROLE_IMPPRODUTOSFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CONTROLE_IMPPRODUTOS
     * const cONTROLE_IMPPRODUTOS = await prisma.cONTROLE_IMPPRODUTOS.findMany()
     * 
     * // Get first 10 CONTROLE_IMPPRODUTOS
     * const cONTROLE_IMPPRODUTOS = await prisma.cONTROLE_IMPPRODUTOS.findMany({ take: 10 })
     * 
     * // Only select the `DATA_IMPORTACAO`
     * const cONTROLE_IMPPRODUTOSWithDATA_IMPORTACAOOnly = await prisma.cONTROLE_IMPPRODUTOS.findMany({ select: { DATA_IMPORTACAO: true } })
     * 
     */
    findMany<T extends CONTROLE_IMPPRODUTOSFindManyArgs>(args?: SelectSubset<T, CONTROLE_IMPPRODUTOSFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CONTROLE_IMPPRODUTOSPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a CONTROLE_IMPPRODUTOS.
     * @param {CONTROLE_IMPPRODUTOSCreateArgs} args - Arguments to create a CONTROLE_IMPPRODUTOS.
     * @example
     * // Create one CONTROLE_IMPPRODUTOS
     * const CONTROLE_IMPPRODUTOS = await prisma.cONTROLE_IMPPRODUTOS.create({
     *   data: {
     *     // ... data to create a CONTROLE_IMPPRODUTOS
     *   }
     * })
     * 
     */
    create<T extends CONTROLE_IMPPRODUTOSCreateArgs>(args: SelectSubset<T, CONTROLE_IMPPRODUTOSCreateArgs<ExtArgs>>): Prisma__CONTROLE_IMPPRODUTOSClient<$Result.GetResult<Prisma.$CONTROLE_IMPPRODUTOSPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many CONTROLE_IMPPRODUTOS.
     * @param {CONTROLE_IMPPRODUTOSCreateManyArgs} args - Arguments to create many CONTROLE_IMPPRODUTOS.
     * @example
     * // Create many CONTROLE_IMPPRODUTOS
     * const cONTROLE_IMPPRODUTOS = await prisma.cONTROLE_IMPPRODUTOS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CONTROLE_IMPPRODUTOSCreateManyArgs>(args?: SelectSubset<T, CONTROLE_IMPPRODUTOSCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CONTROLE_IMPPRODUTOS.
     * @param {CONTROLE_IMPPRODUTOSDeleteArgs} args - Arguments to delete one CONTROLE_IMPPRODUTOS.
     * @example
     * // Delete one CONTROLE_IMPPRODUTOS
     * const CONTROLE_IMPPRODUTOS = await prisma.cONTROLE_IMPPRODUTOS.delete({
     *   where: {
     *     // ... filter to delete one CONTROLE_IMPPRODUTOS
     *   }
     * })
     * 
     */
    delete<T extends CONTROLE_IMPPRODUTOSDeleteArgs>(args: SelectSubset<T, CONTROLE_IMPPRODUTOSDeleteArgs<ExtArgs>>): Prisma__CONTROLE_IMPPRODUTOSClient<$Result.GetResult<Prisma.$CONTROLE_IMPPRODUTOSPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one CONTROLE_IMPPRODUTOS.
     * @param {CONTROLE_IMPPRODUTOSUpdateArgs} args - Arguments to update one CONTROLE_IMPPRODUTOS.
     * @example
     * // Update one CONTROLE_IMPPRODUTOS
     * const cONTROLE_IMPPRODUTOS = await prisma.cONTROLE_IMPPRODUTOS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CONTROLE_IMPPRODUTOSUpdateArgs>(args: SelectSubset<T, CONTROLE_IMPPRODUTOSUpdateArgs<ExtArgs>>): Prisma__CONTROLE_IMPPRODUTOSClient<$Result.GetResult<Prisma.$CONTROLE_IMPPRODUTOSPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more CONTROLE_IMPPRODUTOS.
     * @param {CONTROLE_IMPPRODUTOSDeleteManyArgs} args - Arguments to filter CONTROLE_IMPPRODUTOS to delete.
     * @example
     * // Delete a few CONTROLE_IMPPRODUTOS
     * const { count } = await prisma.cONTROLE_IMPPRODUTOS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CONTROLE_IMPPRODUTOSDeleteManyArgs>(args?: SelectSubset<T, CONTROLE_IMPPRODUTOSDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CONTROLE_IMPPRODUTOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONTROLE_IMPPRODUTOSUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CONTROLE_IMPPRODUTOS
     * const cONTROLE_IMPPRODUTOS = await prisma.cONTROLE_IMPPRODUTOS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CONTROLE_IMPPRODUTOSUpdateManyArgs>(args: SelectSubset<T, CONTROLE_IMPPRODUTOSUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CONTROLE_IMPPRODUTOS.
     * @param {CONTROLE_IMPPRODUTOSUpsertArgs} args - Arguments to update or create a CONTROLE_IMPPRODUTOS.
     * @example
     * // Update or create a CONTROLE_IMPPRODUTOS
     * const cONTROLE_IMPPRODUTOS = await prisma.cONTROLE_IMPPRODUTOS.upsert({
     *   create: {
     *     // ... data to create a CONTROLE_IMPPRODUTOS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CONTROLE_IMPPRODUTOS we want to update
     *   }
     * })
     */
    upsert<T extends CONTROLE_IMPPRODUTOSUpsertArgs>(args: SelectSubset<T, CONTROLE_IMPPRODUTOSUpsertArgs<ExtArgs>>): Prisma__CONTROLE_IMPPRODUTOSClient<$Result.GetResult<Prisma.$CONTROLE_IMPPRODUTOSPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of CONTROLE_IMPPRODUTOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONTROLE_IMPPRODUTOSCountArgs} args - Arguments to filter CONTROLE_IMPPRODUTOS to count.
     * @example
     * // Count the number of CONTROLE_IMPPRODUTOS
     * const count = await prisma.cONTROLE_IMPPRODUTOS.count({
     *   where: {
     *     // ... the filter for the CONTROLE_IMPPRODUTOS we want to count
     *   }
     * })
    **/
    count<T extends CONTROLE_IMPPRODUTOSCountArgs>(
      args?: Subset<T, CONTROLE_IMPPRODUTOSCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CONTROLE_IMPPRODUTOSCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CONTROLE_IMPPRODUTOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONTROLE_IMPPRODUTOSAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CONTROLE_IMPPRODUTOSAggregateArgs>(args: Subset<T, CONTROLE_IMPPRODUTOSAggregateArgs>): Prisma.PrismaPromise<GetCONTROLE_IMPPRODUTOSAggregateType<T>>

    /**
     * Group by CONTROLE_IMPPRODUTOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CONTROLE_IMPPRODUTOSGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CONTROLE_IMPPRODUTOSGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CONTROLE_IMPPRODUTOSGroupByArgs['orderBy'] }
        : { orderBy?: CONTROLE_IMPPRODUTOSGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CONTROLE_IMPPRODUTOSGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCONTROLE_IMPPRODUTOSGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CONTROLE_IMPPRODUTOS model
   */
  readonly fields: CONTROLE_IMPPRODUTOSFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CONTROLE_IMPPRODUTOS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CONTROLE_IMPPRODUTOSClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CONTROLE_IMPPRODUTOS model
   */ 
  interface CONTROLE_IMPPRODUTOSFieldRefs {
    readonly DATA_IMPORTACAO: FieldRef<"CONTROLE_IMPPRODUTOS", 'DateTime'>
    readonly DATA_CUSTO: FieldRef<"CONTROLE_IMPPRODUTOS", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CONTROLE_IMPPRODUTOS findUnique
   */
  export type CONTROLE_IMPPRODUTOSFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONTROLE_IMPPRODUTOS
     */
    select?: CONTROLE_IMPPRODUTOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONTROLE_IMPPRODUTOS
     */
    omit?: CONTROLE_IMPPRODUTOSOmit<ExtArgs> | null
    /**
     * Filter, which CONTROLE_IMPPRODUTOS to fetch.
     */
    where: CONTROLE_IMPPRODUTOSWhereUniqueInput
  }

  /**
   * CONTROLE_IMPPRODUTOS findUniqueOrThrow
   */
  export type CONTROLE_IMPPRODUTOSFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONTROLE_IMPPRODUTOS
     */
    select?: CONTROLE_IMPPRODUTOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONTROLE_IMPPRODUTOS
     */
    omit?: CONTROLE_IMPPRODUTOSOmit<ExtArgs> | null
    /**
     * Filter, which CONTROLE_IMPPRODUTOS to fetch.
     */
    where: CONTROLE_IMPPRODUTOSWhereUniqueInput
  }

  /**
   * CONTROLE_IMPPRODUTOS findFirst
   */
  export type CONTROLE_IMPPRODUTOSFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONTROLE_IMPPRODUTOS
     */
    select?: CONTROLE_IMPPRODUTOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONTROLE_IMPPRODUTOS
     */
    omit?: CONTROLE_IMPPRODUTOSOmit<ExtArgs> | null
    /**
     * Filter, which CONTROLE_IMPPRODUTOS to fetch.
     */
    where?: CONTROLE_IMPPRODUTOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CONTROLE_IMPPRODUTOS to fetch.
     */
    orderBy?: CONTROLE_IMPPRODUTOSOrderByWithRelationInput | CONTROLE_IMPPRODUTOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CONTROLE_IMPPRODUTOS.
     */
    cursor?: CONTROLE_IMPPRODUTOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CONTROLE_IMPPRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CONTROLE_IMPPRODUTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CONTROLE_IMPPRODUTOS.
     */
    distinct?: CONTROLE_IMPPRODUTOSScalarFieldEnum | CONTROLE_IMPPRODUTOSScalarFieldEnum[]
  }

  /**
   * CONTROLE_IMPPRODUTOS findFirstOrThrow
   */
  export type CONTROLE_IMPPRODUTOSFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONTROLE_IMPPRODUTOS
     */
    select?: CONTROLE_IMPPRODUTOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONTROLE_IMPPRODUTOS
     */
    omit?: CONTROLE_IMPPRODUTOSOmit<ExtArgs> | null
    /**
     * Filter, which CONTROLE_IMPPRODUTOS to fetch.
     */
    where?: CONTROLE_IMPPRODUTOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CONTROLE_IMPPRODUTOS to fetch.
     */
    orderBy?: CONTROLE_IMPPRODUTOSOrderByWithRelationInput | CONTROLE_IMPPRODUTOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CONTROLE_IMPPRODUTOS.
     */
    cursor?: CONTROLE_IMPPRODUTOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CONTROLE_IMPPRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CONTROLE_IMPPRODUTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CONTROLE_IMPPRODUTOS.
     */
    distinct?: CONTROLE_IMPPRODUTOSScalarFieldEnum | CONTROLE_IMPPRODUTOSScalarFieldEnum[]
  }

  /**
   * CONTROLE_IMPPRODUTOS findMany
   */
  export type CONTROLE_IMPPRODUTOSFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONTROLE_IMPPRODUTOS
     */
    select?: CONTROLE_IMPPRODUTOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONTROLE_IMPPRODUTOS
     */
    omit?: CONTROLE_IMPPRODUTOSOmit<ExtArgs> | null
    /**
     * Filter, which CONTROLE_IMPPRODUTOS to fetch.
     */
    where?: CONTROLE_IMPPRODUTOSWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CONTROLE_IMPPRODUTOS to fetch.
     */
    orderBy?: CONTROLE_IMPPRODUTOSOrderByWithRelationInput | CONTROLE_IMPPRODUTOSOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CONTROLE_IMPPRODUTOS.
     */
    cursor?: CONTROLE_IMPPRODUTOSWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CONTROLE_IMPPRODUTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CONTROLE_IMPPRODUTOS.
     */
    skip?: number
    distinct?: CONTROLE_IMPPRODUTOSScalarFieldEnum | CONTROLE_IMPPRODUTOSScalarFieldEnum[]
  }

  /**
   * CONTROLE_IMPPRODUTOS create
   */
  export type CONTROLE_IMPPRODUTOSCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONTROLE_IMPPRODUTOS
     */
    select?: CONTROLE_IMPPRODUTOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONTROLE_IMPPRODUTOS
     */
    omit?: CONTROLE_IMPPRODUTOSOmit<ExtArgs> | null
    /**
     * The data needed to create a CONTROLE_IMPPRODUTOS.
     */
    data?: XOR<CONTROLE_IMPPRODUTOSCreateInput, CONTROLE_IMPPRODUTOSUncheckedCreateInput>
  }

  /**
   * CONTROLE_IMPPRODUTOS createMany
   */
  export type CONTROLE_IMPPRODUTOSCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CONTROLE_IMPPRODUTOS.
     */
    data: CONTROLE_IMPPRODUTOSCreateManyInput | CONTROLE_IMPPRODUTOSCreateManyInput[]
  }

  /**
   * CONTROLE_IMPPRODUTOS update
   */
  export type CONTROLE_IMPPRODUTOSUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONTROLE_IMPPRODUTOS
     */
    select?: CONTROLE_IMPPRODUTOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONTROLE_IMPPRODUTOS
     */
    omit?: CONTROLE_IMPPRODUTOSOmit<ExtArgs> | null
    /**
     * The data needed to update a CONTROLE_IMPPRODUTOS.
     */
    data: XOR<CONTROLE_IMPPRODUTOSUpdateInput, CONTROLE_IMPPRODUTOSUncheckedUpdateInput>
    /**
     * Choose, which CONTROLE_IMPPRODUTOS to update.
     */
    where: CONTROLE_IMPPRODUTOSWhereUniqueInput
  }

  /**
   * CONTROLE_IMPPRODUTOS updateMany
   */
  export type CONTROLE_IMPPRODUTOSUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CONTROLE_IMPPRODUTOS.
     */
    data: XOR<CONTROLE_IMPPRODUTOSUpdateManyMutationInput, CONTROLE_IMPPRODUTOSUncheckedUpdateManyInput>
    /**
     * Filter which CONTROLE_IMPPRODUTOS to update
     */
    where?: CONTROLE_IMPPRODUTOSWhereInput
    /**
     * Limit how many CONTROLE_IMPPRODUTOS to update.
     */
    limit?: number
  }

  /**
   * CONTROLE_IMPPRODUTOS upsert
   */
  export type CONTROLE_IMPPRODUTOSUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONTROLE_IMPPRODUTOS
     */
    select?: CONTROLE_IMPPRODUTOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONTROLE_IMPPRODUTOS
     */
    omit?: CONTROLE_IMPPRODUTOSOmit<ExtArgs> | null
    /**
     * The filter to search for the CONTROLE_IMPPRODUTOS to update in case it exists.
     */
    where: CONTROLE_IMPPRODUTOSWhereUniqueInput
    /**
     * In case the CONTROLE_IMPPRODUTOS found by the `where` argument doesn't exist, create a new CONTROLE_IMPPRODUTOS with this data.
     */
    create: XOR<CONTROLE_IMPPRODUTOSCreateInput, CONTROLE_IMPPRODUTOSUncheckedCreateInput>
    /**
     * In case the CONTROLE_IMPPRODUTOS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CONTROLE_IMPPRODUTOSUpdateInput, CONTROLE_IMPPRODUTOSUncheckedUpdateInput>
  }

  /**
   * CONTROLE_IMPPRODUTOS delete
   */
  export type CONTROLE_IMPPRODUTOSDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONTROLE_IMPPRODUTOS
     */
    select?: CONTROLE_IMPPRODUTOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONTROLE_IMPPRODUTOS
     */
    omit?: CONTROLE_IMPPRODUTOSOmit<ExtArgs> | null
    /**
     * Filter which CONTROLE_IMPPRODUTOS to delete.
     */
    where: CONTROLE_IMPPRODUTOSWhereUniqueInput
  }

  /**
   * CONTROLE_IMPPRODUTOS deleteMany
   */
  export type CONTROLE_IMPPRODUTOSDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CONTROLE_IMPPRODUTOS to delete
     */
    where?: CONTROLE_IMPPRODUTOSWhereInput
    /**
     * Limit how many CONTROLE_IMPPRODUTOS to delete.
     */
    limit?: number
  }

  /**
   * CONTROLE_IMPPRODUTOS without action
   */
  export type CONTROLE_IMPPRODUTOSDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CONTROLE_IMPPRODUTOS
     */
    select?: CONTROLE_IMPPRODUTOSSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CONTROLE_IMPPRODUTOS
     */
    omit?: CONTROLE_IMPPRODUTOSOmit<ExtArgs> | null
  }


  /**
   * Model DEVOLUCAO
   */

  export type AggregateDEVOLUCAO = {
    _count: DEVOLUCAOCountAggregateOutputType | null
    _avg: DEVOLUCAOAvgAggregateOutputType | null
    _sum: DEVOLUCAOSumAggregateOutputType | null
    _min: DEVOLUCAOMinAggregateOutputType | null
    _max: DEVOLUCAOMaxAggregateOutputType | null
  }

  export type DEVOLUCAOAvgAggregateOutputType = {
    LOJA: number | null
    CODIGO: number | null
    VALORDEVOLUCAO: number | null
    SITUACAO: number | null
    SITUACAO_LOJA: number | null
    SITUACAO_PDV: number | null
    SITUACAO_COO: number | null
  }

  export type DEVOLUCAOSumAggregateOutputType = {
    LOJA: number | null
    CODIGO: bigint | null
    VALORDEVOLUCAO: number | null
    SITUACAO: number | null
    SITUACAO_LOJA: number | null
    SITUACAO_PDV: number | null
    SITUACAO_COO: number | null
  }

  export type DEVOLUCAOMinAggregateOutputType = {
    LOJA: number | null
    CODIGO: bigint | null
    VALORDEVOLUCAO: number | null
    SITUACAO: number | null
    SITUACAO_DATA: Date | null
    SITUACAO_LOJA: number | null
    SITUACAO_PDV: number | null
    SITUACAO_COO: number | null
    DATAINCLUSAO: Date | null
  }

  export type DEVOLUCAOMaxAggregateOutputType = {
    LOJA: number | null
    CODIGO: bigint | null
    VALORDEVOLUCAO: number | null
    SITUACAO: number | null
    SITUACAO_DATA: Date | null
    SITUACAO_LOJA: number | null
    SITUACAO_PDV: number | null
    SITUACAO_COO: number | null
    DATAINCLUSAO: Date | null
  }

  export type DEVOLUCAOCountAggregateOutputType = {
    LOJA: number
    CODIGO: number
    VALORDEVOLUCAO: number
    SITUACAO: number
    SITUACAO_DATA: number
    SITUACAO_LOJA: number
    SITUACAO_PDV: number
    SITUACAO_COO: number
    DATAINCLUSAO: number
    _all: number
  }


  export type DEVOLUCAOAvgAggregateInputType = {
    LOJA?: true
    CODIGO?: true
    VALORDEVOLUCAO?: true
    SITUACAO?: true
    SITUACAO_LOJA?: true
    SITUACAO_PDV?: true
    SITUACAO_COO?: true
  }

  export type DEVOLUCAOSumAggregateInputType = {
    LOJA?: true
    CODIGO?: true
    VALORDEVOLUCAO?: true
    SITUACAO?: true
    SITUACAO_LOJA?: true
    SITUACAO_PDV?: true
    SITUACAO_COO?: true
  }

  export type DEVOLUCAOMinAggregateInputType = {
    LOJA?: true
    CODIGO?: true
    VALORDEVOLUCAO?: true
    SITUACAO?: true
    SITUACAO_DATA?: true
    SITUACAO_LOJA?: true
    SITUACAO_PDV?: true
    SITUACAO_COO?: true
    DATAINCLUSAO?: true
  }

  export type DEVOLUCAOMaxAggregateInputType = {
    LOJA?: true
    CODIGO?: true
    VALORDEVOLUCAO?: true
    SITUACAO?: true
    SITUACAO_DATA?: true
    SITUACAO_LOJA?: true
    SITUACAO_PDV?: true
    SITUACAO_COO?: true
    DATAINCLUSAO?: true
  }

  export type DEVOLUCAOCountAggregateInputType = {
    LOJA?: true
    CODIGO?: true
    VALORDEVOLUCAO?: true
    SITUACAO?: true
    SITUACAO_DATA?: true
    SITUACAO_LOJA?: true
    SITUACAO_PDV?: true
    SITUACAO_COO?: true
    DATAINCLUSAO?: true
    _all?: true
  }

  export type DEVOLUCAOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DEVOLUCAO to aggregate.
     */
    where?: DEVOLUCAOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DEVOLUCAOS to fetch.
     */
    orderBy?: DEVOLUCAOOrderByWithRelationInput | DEVOLUCAOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DEVOLUCAOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DEVOLUCAOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DEVOLUCAOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DEVOLUCAOS
    **/
    _count?: true | DEVOLUCAOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DEVOLUCAOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DEVOLUCAOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DEVOLUCAOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DEVOLUCAOMaxAggregateInputType
  }

  export type GetDEVOLUCAOAggregateType<T extends DEVOLUCAOAggregateArgs> = {
        [P in keyof T & keyof AggregateDEVOLUCAO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDEVOLUCAO[P]>
      : GetScalarType<T[P], AggregateDEVOLUCAO[P]>
  }




  export type DEVOLUCAOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DEVOLUCAOWhereInput
    orderBy?: DEVOLUCAOOrderByWithAggregationInput | DEVOLUCAOOrderByWithAggregationInput[]
    by: DEVOLUCAOScalarFieldEnum[] | DEVOLUCAOScalarFieldEnum
    having?: DEVOLUCAOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DEVOLUCAOCountAggregateInputType | true
    _avg?: DEVOLUCAOAvgAggregateInputType
    _sum?: DEVOLUCAOSumAggregateInputType
    _min?: DEVOLUCAOMinAggregateInputType
    _max?: DEVOLUCAOMaxAggregateInputType
  }

  export type DEVOLUCAOGroupByOutputType = {
    LOJA: number | null
    CODIGO: bigint
    VALORDEVOLUCAO: number | null
    SITUACAO: number | null
    SITUACAO_DATA: Date | null
    SITUACAO_LOJA: number | null
    SITUACAO_PDV: number | null
    SITUACAO_COO: number | null
    DATAINCLUSAO: Date | null
    _count: DEVOLUCAOCountAggregateOutputType | null
    _avg: DEVOLUCAOAvgAggregateOutputType | null
    _sum: DEVOLUCAOSumAggregateOutputType | null
    _min: DEVOLUCAOMinAggregateOutputType | null
    _max: DEVOLUCAOMaxAggregateOutputType | null
  }

  type GetDEVOLUCAOGroupByPayload<T extends DEVOLUCAOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DEVOLUCAOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DEVOLUCAOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DEVOLUCAOGroupByOutputType[P]>
            : GetScalarType<T[P], DEVOLUCAOGroupByOutputType[P]>
        }
      >
    >


  export type DEVOLUCAOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    LOJA?: boolean
    CODIGO?: boolean
    VALORDEVOLUCAO?: boolean
    SITUACAO?: boolean
    SITUACAO_DATA?: boolean
    SITUACAO_LOJA?: boolean
    SITUACAO_PDV?: boolean
    SITUACAO_COO?: boolean
    DATAINCLUSAO?: boolean
  }, ExtArgs["result"]["dEVOLUCAO"]>



  export type DEVOLUCAOSelectScalar = {
    LOJA?: boolean
    CODIGO?: boolean
    VALORDEVOLUCAO?: boolean
    SITUACAO?: boolean
    SITUACAO_DATA?: boolean
    SITUACAO_LOJA?: boolean
    SITUACAO_PDV?: boolean
    SITUACAO_COO?: boolean
    DATAINCLUSAO?: boolean
  }

  export type DEVOLUCAOOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"LOJA" | "CODIGO" | "VALORDEVOLUCAO" | "SITUACAO" | "SITUACAO_DATA" | "SITUACAO_LOJA" | "SITUACAO_PDV" | "SITUACAO_COO" | "DATAINCLUSAO", ExtArgs["result"]["dEVOLUCAO"]>

  export type $DEVOLUCAOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DEVOLUCAO"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      LOJA: number | null
      CODIGO: bigint
      VALORDEVOLUCAO: number | null
      SITUACAO: number | null
      SITUACAO_DATA: Date | null
      SITUACAO_LOJA: number | null
      SITUACAO_PDV: number | null
      SITUACAO_COO: number | null
      DATAINCLUSAO: Date | null
    }, ExtArgs["result"]["dEVOLUCAO"]>
    composites: {}
  }

  type DEVOLUCAOGetPayload<S extends boolean | null | undefined | DEVOLUCAODefaultArgs> = $Result.GetResult<Prisma.$DEVOLUCAOPayload, S>

  type DEVOLUCAOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DEVOLUCAOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DEVOLUCAOCountAggregateInputType | true
    }

  export interface DEVOLUCAODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DEVOLUCAO'], meta: { name: 'DEVOLUCAO' } }
    /**
     * Find zero or one DEVOLUCAO that matches the filter.
     * @param {DEVOLUCAOFindUniqueArgs} args - Arguments to find a DEVOLUCAO
     * @example
     * // Get one DEVOLUCAO
     * const dEVOLUCAO = await prisma.dEVOLUCAO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DEVOLUCAOFindUniqueArgs>(args: SelectSubset<T, DEVOLUCAOFindUniqueArgs<ExtArgs>>): Prisma__DEVOLUCAOClient<$Result.GetResult<Prisma.$DEVOLUCAOPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one DEVOLUCAO that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DEVOLUCAOFindUniqueOrThrowArgs} args - Arguments to find a DEVOLUCAO
     * @example
     * // Get one DEVOLUCAO
     * const dEVOLUCAO = await prisma.dEVOLUCAO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DEVOLUCAOFindUniqueOrThrowArgs>(args: SelectSubset<T, DEVOLUCAOFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DEVOLUCAOClient<$Result.GetResult<Prisma.$DEVOLUCAOPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first DEVOLUCAO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DEVOLUCAOFindFirstArgs} args - Arguments to find a DEVOLUCAO
     * @example
     * // Get one DEVOLUCAO
     * const dEVOLUCAO = await prisma.dEVOLUCAO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DEVOLUCAOFindFirstArgs>(args?: SelectSubset<T, DEVOLUCAOFindFirstArgs<ExtArgs>>): Prisma__DEVOLUCAOClient<$Result.GetResult<Prisma.$DEVOLUCAOPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first DEVOLUCAO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DEVOLUCAOFindFirstOrThrowArgs} args - Arguments to find a DEVOLUCAO
     * @example
     * // Get one DEVOLUCAO
     * const dEVOLUCAO = await prisma.dEVOLUCAO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DEVOLUCAOFindFirstOrThrowArgs>(args?: SelectSubset<T, DEVOLUCAOFindFirstOrThrowArgs<ExtArgs>>): Prisma__DEVOLUCAOClient<$Result.GetResult<Prisma.$DEVOLUCAOPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more DEVOLUCAOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DEVOLUCAOFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DEVOLUCAOS
     * const dEVOLUCAOS = await prisma.dEVOLUCAO.findMany()
     * 
     * // Get first 10 DEVOLUCAOS
     * const dEVOLUCAOS = await prisma.dEVOLUCAO.findMany({ take: 10 })
     * 
     * // Only select the `LOJA`
     * const dEVOLUCAOWithLOJAOnly = await prisma.dEVOLUCAO.findMany({ select: { LOJA: true } })
     * 
     */
    findMany<T extends DEVOLUCAOFindManyArgs>(args?: SelectSubset<T, DEVOLUCAOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DEVOLUCAOPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a DEVOLUCAO.
     * @param {DEVOLUCAOCreateArgs} args - Arguments to create a DEVOLUCAO.
     * @example
     * // Create one DEVOLUCAO
     * const DEVOLUCAO = await prisma.dEVOLUCAO.create({
     *   data: {
     *     // ... data to create a DEVOLUCAO
     *   }
     * })
     * 
     */
    create<T extends DEVOLUCAOCreateArgs>(args: SelectSubset<T, DEVOLUCAOCreateArgs<ExtArgs>>): Prisma__DEVOLUCAOClient<$Result.GetResult<Prisma.$DEVOLUCAOPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many DEVOLUCAOS.
     * @param {DEVOLUCAOCreateManyArgs} args - Arguments to create many DEVOLUCAOS.
     * @example
     * // Create many DEVOLUCAOS
     * const dEVOLUCAO = await prisma.dEVOLUCAO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DEVOLUCAOCreateManyArgs>(args?: SelectSubset<T, DEVOLUCAOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DEVOLUCAO.
     * @param {DEVOLUCAODeleteArgs} args - Arguments to delete one DEVOLUCAO.
     * @example
     * // Delete one DEVOLUCAO
     * const DEVOLUCAO = await prisma.dEVOLUCAO.delete({
     *   where: {
     *     // ... filter to delete one DEVOLUCAO
     *   }
     * })
     * 
     */
    delete<T extends DEVOLUCAODeleteArgs>(args: SelectSubset<T, DEVOLUCAODeleteArgs<ExtArgs>>): Prisma__DEVOLUCAOClient<$Result.GetResult<Prisma.$DEVOLUCAOPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one DEVOLUCAO.
     * @param {DEVOLUCAOUpdateArgs} args - Arguments to update one DEVOLUCAO.
     * @example
     * // Update one DEVOLUCAO
     * const dEVOLUCAO = await prisma.dEVOLUCAO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DEVOLUCAOUpdateArgs>(args: SelectSubset<T, DEVOLUCAOUpdateArgs<ExtArgs>>): Prisma__DEVOLUCAOClient<$Result.GetResult<Prisma.$DEVOLUCAOPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more DEVOLUCAOS.
     * @param {DEVOLUCAODeleteManyArgs} args - Arguments to filter DEVOLUCAOS to delete.
     * @example
     * // Delete a few DEVOLUCAOS
     * const { count } = await prisma.dEVOLUCAO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DEVOLUCAODeleteManyArgs>(args?: SelectSubset<T, DEVOLUCAODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DEVOLUCAOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DEVOLUCAOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DEVOLUCAOS
     * const dEVOLUCAO = await prisma.dEVOLUCAO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DEVOLUCAOUpdateManyArgs>(args: SelectSubset<T, DEVOLUCAOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DEVOLUCAO.
     * @param {DEVOLUCAOUpsertArgs} args - Arguments to update or create a DEVOLUCAO.
     * @example
     * // Update or create a DEVOLUCAO
     * const dEVOLUCAO = await prisma.dEVOLUCAO.upsert({
     *   create: {
     *     // ... data to create a DEVOLUCAO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DEVOLUCAO we want to update
     *   }
     * })
     */
    upsert<T extends DEVOLUCAOUpsertArgs>(args: SelectSubset<T, DEVOLUCAOUpsertArgs<ExtArgs>>): Prisma__DEVOLUCAOClient<$Result.GetResult<Prisma.$DEVOLUCAOPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of DEVOLUCAOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DEVOLUCAOCountArgs} args - Arguments to filter DEVOLUCAOS to count.
     * @example
     * // Count the number of DEVOLUCAOS
     * const count = await prisma.dEVOLUCAO.count({
     *   where: {
     *     // ... the filter for the DEVOLUCAOS we want to count
     *   }
     * })
    **/
    count<T extends DEVOLUCAOCountArgs>(
      args?: Subset<T, DEVOLUCAOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DEVOLUCAOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DEVOLUCAO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DEVOLUCAOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DEVOLUCAOAggregateArgs>(args: Subset<T, DEVOLUCAOAggregateArgs>): Prisma.PrismaPromise<GetDEVOLUCAOAggregateType<T>>

    /**
     * Group by DEVOLUCAO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DEVOLUCAOGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DEVOLUCAOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DEVOLUCAOGroupByArgs['orderBy'] }
        : { orderBy?: DEVOLUCAOGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DEVOLUCAOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDEVOLUCAOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DEVOLUCAO model
   */
  readonly fields: DEVOLUCAOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DEVOLUCAO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DEVOLUCAOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DEVOLUCAO model
   */ 
  interface DEVOLUCAOFieldRefs {
    readonly LOJA: FieldRef<"DEVOLUCAO", 'Int'>
    readonly CODIGO: FieldRef<"DEVOLUCAO", 'BigInt'>
    readonly VALORDEVOLUCAO: FieldRef<"DEVOLUCAO", 'Float'>
    readonly SITUACAO: FieldRef<"DEVOLUCAO", 'Int'>
    readonly SITUACAO_DATA: FieldRef<"DEVOLUCAO", 'DateTime'>
    readonly SITUACAO_LOJA: FieldRef<"DEVOLUCAO", 'Int'>
    readonly SITUACAO_PDV: FieldRef<"DEVOLUCAO", 'Int'>
    readonly SITUACAO_COO: FieldRef<"DEVOLUCAO", 'Int'>
    readonly DATAINCLUSAO: FieldRef<"DEVOLUCAO", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DEVOLUCAO findUnique
   */
  export type DEVOLUCAOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEVOLUCAO
     */
    select?: DEVOLUCAOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DEVOLUCAO
     */
    omit?: DEVOLUCAOOmit<ExtArgs> | null
    /**
     * Filter, which DEVOLUCAO to fetch.
     */
    where: DEVOLUCAOWhereUniqueInput
  }

  /**
   * DEVOLUCAO findUniqueOrThrow
   */
  export type DEVOLUCAOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEVOLUCAO
     */
    select?: DEVOLUCAOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DEVOLUCAO
     */
    omit?: DEVOLUCAOOmit<ExtArgs> | null
    /**
     * Filter, which DEVOLUCAO to fetch.
     */
    where: DEVOLUCAOWhereUniqueInput
  }

  /**
   * DEVOLUCAO findFirst
   */
  export type DEVOLUCAOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEVOLUCAO
     */
    select?: DEVOLUCAOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DEVOLUCAO
     */
    omit?: DEVOLUCAOOmit<ExtArgs> | null
    /**
     * Filter, which DEVOLUCAO to fetch.
     */
    where?: DEVOLUCAOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DEVOLUCAOS to fetch.
     */
    orderBy?: DEVOLUCAOOrderByWithRelationInput | DEVOLUCAOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DEVOLUCAOS.
     */
    cursor?: DEVOLUCAOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DEVOLUCAOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DEVOLUCAOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DEVOLUCAOS.
     */
    distinct?: DEVOLUCAOScalarFieldEnum | DEVOLUCAOScalarFieldEnum[]
  }

  /**
   * DEVOLUCAO findFirstOrThrow
   */
  export type DEVOLUCAOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEVOLUCAO
     */
    select?: DEVOLUCAOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DEVOLUCAO
     */
    omit?: DEVOLUCAOOmit<ExtArgs> | null
    /**
     * Filter, which DEVOLUCAO to fetch.
     */
    where?: DEVOLUCAOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DEVOLUCAOS to fetch.
     */
    orderBy?: DEVOLUCAOOrderByWithRelationInput | DEVOLUCAOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DEVOLUCAOS.
     */
    cursor?: DEVOLUCAOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DEVOLUCAOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DEVOLUCAOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DEVOLUCAOS.
     */
    distinct?: DEVOLUCAOScalarFieldEnum | DEVOLUCAOScalarFieldEnum[]
  }

  /**
   * DEVOLUCAO findMany
   */
  export type DEVOLUCAOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEVOLUCAO
     */
    select?: DEVOLUCAOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DEVOLUCAO
     */
    omit?: DEVOLUCAOOmit<ExtArgs> | null
    /**
     * Filter, which DEVOLUCAOS to fetch.
     */
    where?: DEVOLUCAOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DEVOLUCAOS to fetch.
     */
    orderBy?: DEVOLUCAOOrderByWithRelationInput | DEVOLUCAOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DEVOLUCAOS.
     */
    cursor?: DEVOLUCAOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DEVOLUCAOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DEVOLUCAOS.
     */
    skip?: number
    distinct?: DEVOLUCAOScalarFieldEnum | DEVOLUCAOScalarFieldEnum[]
  }

  /**
   * DEVOLUCAO create
   */
  export type DEVOLUCAOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEVOLUCAO
     */
    select?: DEVOLUCAOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DEVOLUCAO
     */
    omit?: DEVOLUCAOOmit<ExtArgs> | null
    /**
     * The data needed to create a DEVOLUCAO.
     */
    data?: XOR<DEVOLUCAOCreateInput, DEVOLUCAOUncheckedCreateInput>
  }

  /**
   * DEVOLUCAO createMany
   */
  export type DEVOLUCAOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DEVOLUCAOS.
     */
    data: DEVOLUCAOCreateManyInput | DEVOLUCAOCreateManyInput[]
  }

  /**
   * DEVOLUCAO update
   */
  export type DEVOLUCAOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEVOLUCAO
     */
    select?: DEVOLUCAOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DEVOLUCAO
     */
    omit?: DEVOLUCAOOmit<ExtArgs> | null
    /**
     * The data needed to update a DEVOLUCAO.
     */
    data: XOR<DEVOLUCAOUpdateInput, DEVOLUCAOUncheckedUpdateInput>
    /**
     * Choose, which DEVOLUCAO to update.
     */
    where: DEVOLUCAOWhereUniqueInput
  }

  /**
   * DEVOLUCAO updateMany
   */
  export type DEVOLUCAOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DEVOLUCAOS.
     */
    data: XOR<DEVOLUCAOUpdateManyMutationInput, DEVOLUCAOUncheckedUpdateManyInput>
    /**
     * Filter which DEVOLUCAOS to update
     */
    where?: DEVOLUCAOWhereInput
    /**
     * Limit how many DEVOLUCAOS to update.
     */
    limit?: number
  }

  /**
   * DEVOLUCAO upsert
   */
  export type DEVOLUCAOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEVOLUCAO
     */
    select?: DEVOLUCAOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DEVOLUCAO
     */
    omit?: DEVOLUCAOOmit<ExtArgs> | null
    /**
     * The filter to search for the DEVOLUCAO to update in case it exists.
     */
    where: DEVOLUCAOWhereUniqueInput
    /**
     * In case the DEVOLUCAO found by the `where` argument doesn't exist, create a new DEVOLUCAO with this data.
     */
    create: XOR<DEVOLUCAOCreateInput, DEVOLUCAOUncheckedCreateInput>
    /**
     * In case the DEVOLUCAO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DEVOLUCAOUpdateInput, DEVOLUCAOUncheckedUpdateInput>
  }

  /**
   * DEVOLUCAO delete
   */
  export type DEVOLUCAODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEVOLUCAO
     */
    select?: DEVOLUCAOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DEVOLUCAO
     */
    omit?: DEVOLUCAOOmit<ExtArgs> | null
    /**
     * Filter which DEVOLUCAO to delete.
     */
    where: DEVOLUCAOWhereUniqueInput
  }

  /**
   * DEVOLUCAO deleteMany
   */
  export type DEVOLUCAODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DEVOLUCAOS to delete
     */
    where?: DEVOLUCAOWhereInput
    /**
     * Limit how many DEVOLUCAOS to delete.
     */
    limit?: number
  }

  /**
   * DEVOLUCAO without action
   */
  export type DEVOLUCAODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DEVOLUCAO
     */
    select?: DEVOLUCAOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DEVOLUCAO
     */
    omit?: DEVOLUCAOOmit<ExtArgs> | null
  }


  /**
   * Model EXPORTACAO
   */

  export type AggregateEXPORTACAO = {
    _count: EXPORTACAOCountAggregateOutputType | null
    _avg: EXPORTACAOAvgAggregateOutputType | null
    _sum: EXPORTACAOSumAggregateOutputType | null
    _min: EXPORTACAOMinAggregateOutputType | null
    _max: EXPORTACAOMaxAggregateOutputType | null
  }

  export type EXPORTACAOAvgAggregateOutputType = {
    LOJA: number | null
    TIPO_CADASTRO: number | null
    INTEGRADO: number | null
    VALOR1: number | null
    VALOR2: number | null
    VALOR3: number | null
    VALOR4: number | null
    VALOR5: number | null
    VALOR6: number | null
    VALOR7: number | null
  }

  export type EXPORTACAOSumAggregateOutputType = {
    LOJA: number | null
    TIPO_CADASTRO: number | null
    INTEGRADO: number | null
    VALOR1: number | null
    VALOR2: number | null
    VALOR3: number | null
    VALOR4: number | null
    VALOR5: number | null
    VALOR6: number | null
    VALOR7: number | null
  }

  export type EXPORTACAOMinAggregateOutputType = {
    LOJA: number | null
    TIPO_CADASTRO: number | null
    CHAVE: string | null
    DATA_INCLUSAO: Date | null
    DATA_INIPROC: Date | null
    DATA_FIMPROC: Date | null
    INTEGRADO: number | null
    DESC_INTEGRADO: string | null
    DATA1: Date | null
    DATA2: Date | null
    DATA3: Date | null
    VALOR1: number | null
    VALOR2: number | null
    VALOR3: number | null
    VALOR4: number | null
    VALOR5: number | null
    VALOR6: number | null
    PROCESSO: string | null
    VALOR7: number | null
  }

  export type EXPORTACAOMaxAggregateOutputType = {
    LOJA: number | null
    TIPO_CADASTRO: number | null
    CHAVE: string | null
    DATA_INCLUSAO: Date | null
    DATA_INIPROC: Date | null
    DATA_FIMPROC: Date | null
    INTEGRADO: number | null
    DESC_INTEGRADO: string | null
    DATA1: Date | null
    DATA2: Date | null
    DATA3: Date | null
    VALOR1: number | null
    VALOR2: number | null
    VALOR3: number | null
    VALOR4: number | null
    VALOR5: number | null
    VALOR6: number | null
    PROCESSO: string | null
    VALOR7: number | null
  }

  export type EXPORTACAOCountAggregateOutputType = {
    LOJA: number
    TIPO_CADASTRO: number
    CHAVE: number
    DATA_INCLUSAO: number
    DATA_INIPROC: number
    DATA_FIMPROC: number
    INTEGRADO: number
    DESC_INTEGRADO: number
    DATA1: number
    DATA2: number
    DATA3: number
    VALOR1: number
    VALOR2: number
    VALOR3: number
    VALOR4: number
    VALOR5: number
    VALOR6: number
    PROCESSO: number
    VALOR7: number
    _all: number
  }


  export type EXPORTACAOAvgAggregateInputType = {
    LOJA?: true
    TIPO_CADASTRO?: true
    INTEGRADO?: true
    VALOR1?: true
    VALOR2?: true
    VALOR3?: true
    VALOR4?: true
    VALOR5?: true
    VALOR6?: true
    VALOR7?: true
  }

  export type EXPORTACAOSumAggregateInputType = {
    LOJA?: true
    TIPO_CADASTRO?: true
    INTEGRADO?: true
    VALOR1?: true
    VALOR2?: true
    VALOR3?: true
    VALOR4?: true
    VALOR5?: true
    VALOR6?: true
    VALOR7?: true
  }

  export type EXPORTACAOMinAggregateInputType = {
    LOJA?: true
    TIPO_CADASTRO?: true
    CHAVE?: true
    DATA_INCLUSAO?: true
    DATA_INIPROC?: true
    DATA_FIMPROC?: true
    INTEGRADO?: true
    DESC_INTEGRADO?: true
    DATA1?: true
    DATA2?: true
    DATA3?: true
    VALOR1?: true
    VALOR2?: true
    VALOR3?: true
    VALOR4?: true
    VALOR5?: true
    VALOR6?: true
    PROCESSO?: true
    VALOR7?: true
  }

  export type EXPORTACAOMaxAggregateInputType = {
    LOJA?: true
    TIPO_CADASTRO?: true
    CHAVE?: true
    DATA_INCLUSAO?: true
    DATA_INIPROC?: true
    DATA_FIMPROC?: true
    INTEGRADO?: true
    DESC_INTEGRADO?: true
    DATA1?: true
    DATA2?: true
    DATA3?: true
    VALOR1?: true
    VALOR2?: true
    VALOR3?: true
    VALOR4?: true
    VALOR5?: true
    VALOR6?: true
    PROCESSO?: true
    VALOR7?: true
  }

  export type EXPORTACAOCountAggregateInputType = {
    LOJA?: true
    TIPO_CADASTRO?: true
    CHAVE?: true
    DATA_INCLUSAO?: true
    DATA_INIPROC?: true
    DATA_FIMPROC?: true
    INTEGRADO?: true
    DESC_INTEGRADO?: true
    DATA1?: true
    DATA2?: true
    DATA3?: true
    VALOR1?: true
    VALOR2?: true
    VALOR3?: true
    VALOR4?: true
    VALOR5?: true
    VALOR6?: true
    PROCESSO?: true
    VALOR7?: true
    _all?: true
  }

  export type EXPORTACAOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EXPORTACAO to aggregate.
     */
    where?: EXPORTACAOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EXPORTACAOS to fetch.
     */
    orderBy?: EXPORTACAOOrderByWithRelationInput | EXPORTACAOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EXPORTACAOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EXPORTACAOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EXPORTACAOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EXPORTACAOS
    **/
    _count?: true | EXPORTACAOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EXPORTACAOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EXPORTACAOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EXPORTACAOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EXPORTACAOMaxAggregateInputType
  }

  export type GetEXPORTACAOAggregateType<T extends EXPORTACAOAggregateArgs> = {
        [P in keyof T & keyof AggregateEXPORTACAO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEXPORTACAO[P]>
      : GetScalarType<T[P], AggregateEXPORTACAO[P]>
  }




  export type EXPORTACAOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EXPORTACAOWhereInput
    orderBy?: EXPORTACAOOrderByWithAggregationInput | EXPORTACAOOrderByWithAggregationInput[]
    by: EXPORTACAOScalarFieldEnum[] | EXPORTACAOScalarFieldEnum
    having?: EXPORTACAOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EXPORTACAOCountAggregateInputType | true
    _avg?: EXPORTACAOAvgAggregateInputType
    _sum?: EXPORTACAOSumAggregateInputType
    _min?: EXPORTACAOMinAggregateInputType
    _max?: EXPORTACAOMaxAggregateInputType
  }

  export type EXPORTACAOGroupByOutputType = {
    LOJA: number
    TIPO_CADASTRO: number
    CHAVE: string
    DATA_INCLUSAO: Date | null
    DATA_INIPROC: Date | null
    DATA_FIMPROC: Date | null
    INTEGRADO: number
    DESC_INTEGRADO: string | null
    DATA1: Date | null
    DATA2: Date | null
    DATA3: Date | null
    VALOR1: number | null
    VALOR2: number | null
    VALOR3: number | null
    VALOR4: number | null
    VALOR5: number | null
    VALOR6: number | null
    PROCESSO: string | null
    VALOR7: number | null
    _count: EXPORTACAOCountAggregateOutputType | null
    _avg: EXPORTACAOAvgAggregateOutputType | null
    _sum: EXPORTACAOSumAggregateOutputType | null
    _min: EXPORTACAOMinAggregateOutputType | null
    _max: EXPORTACAOMaxAggregateOutputType | null
  }

  type GetEXPORTACAOGroupByPayload<T extends EXPORTACAOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EXPORTACAOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EXPORTACAOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EXPORTACAOGroupByOutputType[P]>
            : GetScalarType<T[P], EXPORTACAOGroupByOutputType[P]>
        }
      >
    >


  export type EXPORTACAOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    LOJA?: boolean
    TIPO_CADASTRO?: boolean
    CHAVE?: boolean
    DATA_INCLUSAO?: boolean
    DATA_INIPROC?: boolean
    DATA_FIMPROC?: boolean
    INTEGRADO?: boolean
    DESC_INTEGRADO?: boolean
    DATA1?: boolean
    DATA2?: boolean
    DATA3?: boolean
    VALOR1?: boolean
    VALOR2?: boolean
    VALOR3?: boolean
    VALOR4?: boolean
    VALOR5?: boolean
    VALOR6?: boolean
    PROCESSO?: boolean
    VALOR7?: boolean
  }, ExtArgs["result"]["eXPORTACAO"]>



  export type EXPORTACAOSelectScalar = {
    LOJA?: boolean
    TIPO_CADASTRO?: boolean
    CHAVE?: boolean
    DATA_INCLUSAO?: boolean
    DATA_INIPROC?: boolean
    DATA_FIMPROC?: boolean
    INTEGRADO?: boolean
    DESC_INTEGRADO?: boolean
    DATA1?: boolean
    DATA2?: boolean
    DATA3?: boolean
    VALOR1?: boolean
    VALOR2?: boolean
    VALOR3?: boolean
    VALOR4?: boolean
    VALOR5?: boolean
    VALOR6?: boolean
    PROCESSO?: boolean
    VALOR7?: boolean
  }

  export type EXPORTACAOOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"LOJA" | "TIPO_CADASTRO" | "CHAVE" | "DATA_INCLUSAO" | "DATA_INIPROC" | "DATA_FIMPROC" | "INTEGRADO" | "DESC_INTEGRADO" | "DATA1" | "DATA2" | "DATA3" | "VALOR1" | "VALOR2" | "VALOR3" | "VALOR4" | "VALOR5" | "VALOR6" | "PROCESSO" | "VALOR7", ExtArgs["result"]["eXPORTACAO"]>

  export type $EXPORTACAOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EXPORTACAO"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      LOJA: number
      TIPO_CADASTRO: number
      CHAVE: string
      DATA_INCLUSAO: Date | null
      DATA_INIPROC: Date | null
      DATA_FIMPROC: Date | null
      INTEGRADO: number
      DESC_INTEGRADO: string | null
      DATA1: Date | null
      DATA2: Date | null
      DATA3: Date | null
      VALOR1: number | null
      VALOR2: number | null
      VALOR3: number | null
      VALOR4: number | null
      VALOR5: number | null
      VALOR6: number | null
      PROCESSO: string | null
      VALOR7: number | null
    }, ExtArgs["result"]["eXPORTACAO"]>
    composites: {}
  }

  type EXPORTACAOGetPayload<S extends boolean | null | undefined | EXPORTACAODefaultArgs> = $Result.GetResult<Prisma.$EXPORTACAOPayload, S>

  type EXPORTACAOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EXPORTACAOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EXPORTACAOCountAggregateInputType | true
    }

  export interface EXPORTACAODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EXPORTACAO'], meta: { name: 'EXPORTACAO' } }
    /**
     * Find zero or one EXPORTACAO that matches the filter.
     * @param {EXPORTACAOFindUniqueArgs} args - Arguments to find a EXPORTACAO
     * @example
     * // Get one EXPORTACAO
     * const eXPORTACAO = await prisma.eXPORTACAO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EXPORTACAOFindUniqueArgs>(args: SelectSubset<T, EXPORTACAOFindUniqueArgs<ExtArgs>>): Prisma__EXPORTACAOClient<$Result.GetResult<Prisma.$EXPORTACAOPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one EXPORTACAO that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EXPORTACAOFindUniqueOrThrowArgs} args - Arguments to find a EXPORTACAO
     * @example
     * // Get one EXPORTACAO
     * const eXPORTACAO = await prisma.eXPORTACAO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EXPORTACAOFindUniqueOrThrowArgs>(args: SelectSubset<T, EXPORTACAOFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EXPORTACAOClient<$Result.GetResult<Prisma.$EXPORTACAOPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first EXPORTACAO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EXPORTACAOFindFirstArgs} args - Arguments to find a EXPORTACAO
     * @example
     * // Get one EXPORTACAO
     * const eXPORTACAO = await prisma.eXPORTACAO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EXPORTACAOFindFirstArgs>(args?: SelectSubset<T, EXPORTACAOFindFirstArgs<ExtArgs>>): Prisma__EXPORTACAOClient<$Result.GetResult<Prisma.$EXPORTACAOPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first EXPORTACAO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EXPORTACAOFindFirstOrThrowArgs} args - Arguments to find a EXPORTACAO
     * @example
     * // Get one EXPORTACAO
     * const eXPORTACAO = await prisma.eXPORTACAO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EXPORTACAOFindFirstOrThrowArgs>(args?: SelectSubset<T, EXPORTACAOFindFirstOrThrowArgs<ExtArgs>>): Prisma__EXPORTACAOClient<$Result.GetResult<Prisma.$EXPORTACAOPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more EXPORTACAOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EXPORTACAOFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EXPORTACAOS
     * const eXPORTACAOS = await prisma.eXPORTACAO.findMany()
     * 
     * // Get first 10 EXPORTACAOS
     * const eXPORTACAOS = await prisma.eXPORTACAO.findMany({ take: 10 })
     * 
     * // Only select the `LOJA`
     * const eXPORTACAOWithLOJAOnly = await prisma.eXPORTACAO.findMany({ select: { LOJA: true } })
     * 
     */
    findMany<T extends EXPORTACAOFindManyArgs>(args?: SelectSubset<T, EXPORTACAOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EXPORTACAOPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a EXPORTACAO.
     * @param {EXPORTACAOCreateArgs} args - Arguments to create a EXPORTACAO.
     * @example
     * // Create one EXPORTACAO
     * const EXPORTACAO = await prisma.eXPORTACAO.create({
     *   data: {
     *     // ... data to create a EXPORTACAO
     *   }
     * })
     * 
     */
    create<T extends EXPORTACAOCreateArgs>(args: SelectSubset<T, EXPORTACAOCreateArgs<ExtArgs>>): Prisma__EXPORTACAOClient<$Result.GetResult<Prisma.$EXPORTACAOPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many EXPORTACAOS.
     * @param {EXPORTACAOCreateManyArgs} args - Arguments to create many EXPORTACAOS.
     * @example
     * // Create many EXPORTACAOS
     * const eXPORTACAO = await prisma.eXPORTACAO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EXPORTACAOCreateManyArgs>(args?: SelectSubset<T, EXPORTACAOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EXPORTACAO.
     * @param {EXPORTACAODeleteArgs} args - Arguments to delete one EXPORTACAO.
     * @example
     * // Delete one EXPORTACAO
     * const EXPORTACAO = await prisma.eXPORTACAO.delete({
     *   where: {
     *     // ... filter to delete one EXPORTACAO
     *   }
     * })
     * 
     */
    delete<T extends EXPORTACAODeleteArgs>(args: SelectSubset<T, EXPORTACAODeleteArgs<ExtArgs>>): Prisma__EXPORTACAOClient<$Result.GetResult<Prisma.$EXPORTACAOPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one EXPORTACAO.
     * @param {EXPORTACAOUpdateArgs} args - Arguments to update one EXPORTACAO.
     * @example
     * // Update one EXPORTACAO
     * const eXPORTACAO = await prisma.eXPORTACAO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EXPORTACAOUpdateArgs>(args: SelectSubset<T, EXPORTACAOUpdateArgs<ExtArgs>>): Prisma__EXPORTACAOClient<$Result.GetResult<Prisma.$EXPORTACAOPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more EXPORTACAOS.
     * @param {EXPORTACAODeleteManyArgs} args - Arguments to filter EXPORTACAOS to delete.
     * @example
     * // Delete a few EXPORTACAOS
     * const { count } = await prisma.eXPORTACAO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EXPORTACAODeleteManyArgs>(args?: SelectSubset<T, EXPORTACAODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EXPORTACAOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EXPORTACAOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EXPORTACAOS
     * const eXPORTACAO = await prisma.eXPORTACAO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EXPORTACAOUpdateManyArgs>(args: SelectSubset<T, EXPORTACAOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EXPORTACAO.
     * @param {EXPORTACAOUpsertArgs} args - Arguments to update or create a EXPORTACAO.
     * @example
     * // Update or create a EXPORTACAO
     * const eXPORTACAO = await prisma.eXPORTACAO.upsert({
     *   create: {
     *     // ... data to create a EXPORTACAO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EXPORTACAO we want to update
     *   }
     * })
     */
    upsert<T extends EXPORTACAOUpsertArgs>(args: SelectSubset<T, EXPORTACAOUpsertArgs<ExtArgs>>): Prisma__EXPORTACAOClient<$Result.GetResult<Prisma.$EXPORTACAOPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of EXPORTACAOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EXPORTACAOCountArgs} args - Arguments to filter EXPORTACAOS to count.
     * @example
     * // Count the number of EXPORTACAOS
     * const count = await prisma.eXPORTACAO.count({
     *   where: {
     *     // ... the filter for the EXPORTACAOS we want to count
     *   }
     * })
    **/
    count<T extends EXPORTACAOCountArgs>(
      args?: Subset<T, EXPORTACAOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EXPORTACAOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EXPORTACAO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EXPORTACAOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EXPORTACAOAggregateArgs>(args: Subset<T, EXPORTACAOAggregateArgs>): Prisma.PrismaPromise<GetEXPORTACAOAggregateType<T>>

    /**
     * Group by EXPORTACAO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EXPORTACAOGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EXPORTACAOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EXPORTACAOGroupByArgs['orderBy'] }
        : { orderBy?: EXPORTACAOGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EXPORTACAOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEXPORTACAOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EXPORTACAO model
   */
  readonly fields: EXPORTACAOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EXPORTACAO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EXPORTACAOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EXPORTACAO model
   */ 
  interface EXPORTACAOFieldRefs {
    readonly LOJA: FieldRef<"EXPORTACAO", 'Int'>
    readonly TIPO_CADASTRO: FieldRef<"EXPORTACAO", 'Int'>
    readonly CHAVE: FieldRef<"EXPORTACAO", 'String'>
    readonly DATA_INCLUSAO: FieldRef<"EXPORTACAO", 'DateTime'>
    readonly DATA_INIPROC: FieldRef<"EXPORTACAO", 'DateTime'>
    readonly DATA_FIMPROC: FieldRef<"EXPORTACAO", 'DateTime'>
    readonly INTEGRADO: FieldRef<"EXPORTACAO", 'Int'>
    readonly DESC_INTEGRADO: FieldRef<"EXPORTACAO", 'String'>
    readonly DATA1: FieldRef<"EXPORTACAO", 'DateTime'>
    readonly DATA2: FieldRef<"EXPORTACAO", 'DateTime'>
    readonly DATA3: FieldRef<"EXPORTACAO", 'DateTime'>
    readonly VALOR1: FieldRef<"EXPORTACAO", 'Float'>
    readonly VALOR2: FieldRef<"EXPORTACAO", 'Float'>
    readonly VALOR3: FieldRef<"EXPORTACAO", 'Float'>
    readonly VALOR4: FieldRef<"EXPORTACAO", 'Float'>
    readonly VALOR5: FieldRef<"EXPORTACAO", 'Float'>
    readonly VALOR6: FieldRef<"EXPORTACAO", 'Float'>
    readonly PROCESSO: FieldRef<"EXPORTACAO", 'String'>
    readonly VALOR7: FieldRef<"EXPORTACAO", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * EXPORTACAO findUnique
   */
  export type EXPORTACAOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EXPORTACAO
     */
    select?: EXPORTACAOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EXPORTACAO
     */
    omit?: EXPORTACAOOmit<ExtArgs> | null
    /**
     * Filter, which EXPORTACAO to fetch.
     */
    where: EXPORTACAOWhereUniqueInput
  }

  /**
   * EXPORTACAO findUniqueOrThrow
   */
  export type EXPORTACAOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EXPORTACAO
     */
    select?: EXPORTACAOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EXPORTACAO
     */
    omit?: EXPORTACAOOmit<ExtArgs> | null
    /**
     * Filter, which EXPORTACAO to fetch.
     */
    where: EXPORTACAOWhereUniqueInput
  }

  /**
   * EXPORTACAO findFirst
   */
  export type EXPORTACAOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EXPORTACAO
     */
    select?: EXPORTACAOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EXPORTACAO
     */
    omit?: EXPORTACAOOmit<ExtArgs> | null
    /**
     * Filter, which EXPORTACAO to fetch.
     */
    where?: EXPORTACAOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EXPORTACAOS to fetch.
     */
    orderBy?: EXPORTACAOOrderByWithRelationInput | EXPORTACAOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EXPORTACAOS.
     */
    cursor?: EXPORTACAOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EXPORTACAOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EXPORTACAOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EXPORTACAOS.
     */
    distinct?: EXPORTACAOScalarFieldEnum | EXPORTACAOScalarFieldEnum[]
  }

  /**
   * EXPORTACAO findFirstOrThrow
   */
  export type EXPORTACAOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EXPORTACAO
     */
    select?: EXPORTACAOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EXPORTACAO
     */
    omit?: EXPORTACAOOmit<ExtArgs> | null
    /**
     * Filter, which EXPORTACAO to fetch.
     */
    where?: EXPORTACAOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EXPORTACAOS to fetch.
     */
    orderBy?: EXPORTACAOOrderByWithRelationInput | EXPORTACAOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EXPORTACAOS.
     */
    cursor?: EXPORTACAOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EXPORTACAOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EXPORTACAOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EXPORTACAOS.
     */
    distinct?: EXPORTACAOScalarFieldEnum | EXPORTACAOScalarFieldEnum[]
  }

  /**
   * EXPORTACAO findMany
   */
  export type EXPORTACAOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EXPORTACAO
     */
    select?: EXPORTACAOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EXPORTACAO
     */
    omit?: EXPORTACAOOmit<ExtArgs> | null
    /**
     * Filter, which EXPORTACAOS to fetch.
     */
    where?: EXPORTACAOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EXPORTACAOS to fetch.
     */
    orderBy?: EXPORTACAOOrderByWithRelationInput | EXPORTACAOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EXPORTACAOS.
     */
    cursor?: EXPORTACAOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EXPORTACAOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EXPORTACAOS.
     */
    skip?: number
    distinct?: EXPORTACAOScalarFieldEnum | EXPORTACAOScalarFieldEnum[]
  }

  /**
   * EXPORTACAO create
   */
  export type EXPORTACAOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EXPORTACAO
     */
    select?: EXPORTACAOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EXPORTACAO
     */
    omit?: EXPORTACAOOmit<ExtArgs> | null
    /**
     * The data needed to create a EXPORTACAO.
     */
    data?: XOR<EXPORTACAOCreateInput, EXPORTACAOUncheckedCreateInput>
  }

  /**
   * EXPORTACAO createMany
   */
  export type EXPORTACAOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EXPORTACAOS.
     */
    data: EXPORTACAOCreateManyInput | EXPORTACAOCreateManyInput[]
  }

  /**
   * EXPORTACAO update
   */
  export type EXPORTACAOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EXPORTACAO
     */
    select?: EXPORTACAOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EXPORTACAO
     */
    omit?: EXPORTACAOOmit<ExtArgs> | null
    /**
     * The data needed to update a EXPORTACAO.
     */
    data: XOR<EXPORTACAOUpdateInput, EXPORTACAOUncheckedUpdateInput>
    /**
     * Choose, which EXPORTACAO to update.
     */
    where: EXPORTACAOWhereUniqueInput
  }

  /**
   * EXPORTACAO updateMany
   */
  export type EXPORTACAOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EXPORTACAOS.
     */
    data: XOR<EXPORTACAOUpdateManyMutationInput, EXPORTACAOUncheckedUpdateManyInput>
    /**
     * Filter which EXPORTACAOS to update
     */
    where?: EXPORTACAOWhereInput
    /**
     * Limit how many EXPORTACAOS to update.
     */
    limit?: number
  }

  /**
   * EXPORTACAO upsert
   */
  export type EXPORTACAOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EXPORTACAO
     */
    select?: EXPORTACAOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EXPORTACAO
     */
    omit?: EXPORTACAOOmit<ExtArgs> | null
    /**
     * The filter to search for the EXPORTACAO to update in case it exists.
     */
    where: EXPORTACAOWhereUniqueInput
    /**
     * In case the EXPORTACAO found by the `where` argument doesn't exist, create a new EXPORTACAO with this data.
     */
    create: XOR<EXPORTACAOCreateInput, EXPORTACAOUncheckedCreateInput>
    /**
     * In case the EXPORTACAO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EXPORTACAOUpdateInput, EXPORTACAOUncheckedUpdateInput>
  }

  /**
   * EXPORTACAO delete
   */
  export type EXPORTACAODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EXPORTACAO
     */
    select?: EXPORTACAOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EXPORTACAO
     */
    omit?: EXPORTACAOOmit<ExtArgs> | null
    /**
     * Filter which EXPORTACAO to delete.
     */
    where: EXPORTACAOWhereUniqueInput
  }

  /**
   * EXPORTACAO deleteMany
   */
  export type EXPORTACAODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EXPORTACAOS to delete
     */
    where?: EXPORTACAOWhereInput
    /**
     * Limit how many EXPORTACAOS to delete.
     */
    limit?: number
  }

  /**
   * EXPORTACAO without action
   */
  export type EXPORTACAODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EXPORTACAO
     */
    select?: EXPORTACAOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EXPORTACAO
     */
    omit?: EXPORTACAOOmit<ExtArgs> | null
  }


  /**
   * Model FINALIZADORAS_SAP
   */

  export type AggregateFINALIZADORAS_SAP = {
    _count: FINALIZADORAS_SAPCountAggregateOutputType | null
    _avg: FINALIZADORAS_SAPAvgAggregateOutputType | null
    _sum: FINALIZADORAS_SAPSumAggregateOutputType | null
    _min: FINALIZADORAS_SAPMinAggregateOutputType | null
    _max: FINALIZADORAS_SAPMaxAggregateOutputType | null
  }

  export type FINALIZADORAS_SAPAvgAggregateOutputType = {
    COD_FINALIZ: number | null
    DOMINIO: number | null
    TRANSACAO: number | null
    TIPO: number | null
    REDE: number | null
    BANDEIRA: number | null
    MODALIDADE: number | null
    BIN: number | null
  }

  export type FINALIZADORAS_SAPSumAggregateOutputType = {
    COD_FINALIZ: number | null
    DOMINIO: number | null
    TRANSACAO: number | null
    TIPO: number | null
    REDE: number | null
    BANDEIRA: number | null
    MODALIDADE: number | null
    BIN: number | null
  }

  export type FINALIZADORAS_SAPMinAggregateOutputType = {
    COD_FINALIZ: number | null
    DOMINIO: number | null
    TRANSACAO: number | null
    TIPO: number | null
    DESCRICAO: string | null
    OPERACAO_SAP: string | null
    OPERADORA_SAP: string | null
    REDE: number | null
    BANDEIRA: number | null
    MODALIDADE: number | null
    BIN: number | null
  }

  export type FINALIZADORAS_SAPMaxAggregateOutputType = {
    COD_FINALIZ: number | null
    DOMINIO: number | null
    TRANSACAO: number | null
    TIPO: number | null
    DESCRICAO: string | null
    OPERACAO_SAP: string | null
    OPERADORA_SAP: string | null
    REDE: number | null
    BANDEIRA: number | null
    MODALIDADE: number | null
    BIN: number | null
  }

  export type FINALIZADORAS_SAPCountAggregateOutputType = {
    COD_FINALIZ: number
    DOMINIO: number
    TRANSACAO: number
    TIPO: number
    DESCRICAO: number
    OPERACAO_SAP: number
    OPERADORA_SAP: number
    REDE: number
    BANDEIRA: number
    MODALIDADE: number
    BIN: number
    _all: number
  }


  export type FINALIZADORAS_SAPAvgAggregateInputType = {
    COD_FINALIZ?: true
    DOMINIO?: true
    TRANSACAO?: true
    TIPO?: true
    REDE?: true
    BANDEIRA?: true
    MODALIDADE?: true
    BIN?: true
  }

  export type FINALIZADORAS_SAPSumAggregateInputType = {
    COD_FINALIZ?: true
    DOMINIO?: true
    TRANSACAO?: true
    TIPO?: true
    REDE?: true
    BANDEIRA?: true
    MODALIDADE?: true
    BIN?: true
  }

  export type FINALIZADORAS_SAPMinAggregateInputType = {
    COD_FINALIZ?: true
    DOMINIO?: true
    TRANSACAO?: true
    TIPO?: true
    DESCRICAO?: true
    OPERACAO_SAP?: true
    OPERADORA_SAP?: true
    REDE?: true
    BANDEIRA?: true
    MODALIDADE?: true
    BIN?: true
  }

  export type FINALIZADORAS_SAPMaxAggregateInputType = {
    COD_FINALIZ?: true
    DOMINIO?: true
    TRANSACAO?: true
    TIPO?: true
    DESCRICAO?: true
    OPERACAO_SAP?: true
    OPERADORA_SAP?: true
    REDE?: true
    BANDEIRA?: true
    MODALIDADE?: true
    BIN?: true
  }

  export type FINALIZADORAS_SAPCountAggregateInputType = {
    COD_FINALIZ?: true
    DOMINIO?: true
    TRANSACAO?: true
    TIPO?: true
    DESCRICAO?: true
    OPERACAO_SAP?: true
    OPERADORA_SAP?: true
    REDE?: true
    BANDEIRA?: true
    MODALIDADE?: true
    BIN?: true
    _all?: true
  }

  export type FINALIZADORAS_SAPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FINALIZADORAS_SAP to aggregate.
     */
    where?: FINALIZADORAS_SAPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FINALIZADORAS_SAPS to fetch.
     */
    orderBy?: FINALIZADORAS_SAPOrderByWithRelationInput | FINALIZADORAS_SAPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FINALIZADORAS_SAPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FINALIZADORAS_SAPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FINALIZADORAS_SAPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FINALIZADORAS_SAPS
    **/
    _count?: true | FINALIZADORAS_SAPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FINALIZADORAS_SAPAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FINALIZADORAS_SAPSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FINALIZADORAS_SAPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FINALIZADORAS_SAPMaxAggregateInputType
  }

  export type GetFINALIZADORAS_SAPAggregateType<T extends FINALIZADORAS_SAPAggregateArgs> = {
        [P in keyof T & keyof AggregateFINALIZADORAS_SAP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFINALIZADORAS_SAP[P]>
      : GetScalarType<T[P], AggregateFINALIZADORAS_SAP[P]>
  }




  export type FINALIZADORAS_SAPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FINALIZADORAS_SAPWhereInput
    orderBy?: FINALIZADORAS_SAPOrderByWithAggregationInput | FINALIZADORAS_SAPOrderByWithAggregationInput[]
    by: FINALIZADORAS_SAPScalarFieldEnum[] | FINALIZADORAS_SAPScalarFieldEnum
    having?: FINALIZADORAS_SAPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FINALIZADORAS_SAPCountAggregateInputType | true
    _avg?: FINALIZADORAS_SAPAvgAggregateInputType
    _sum?: FINALIZADORAS_SAPSumAggregateInputType
    _min?: FINALIZADORAS_SAPMinAggregateInputType
    _max?: FINALIZADORAS_SAPMaxAggregateInputType
  }

  export type FINALIZADORAS_SAPGroupByOutputType = {
    COD_FINALIZ: number
    DOMINIO: number
    TRANSACAO: number
    TIPO: number | null
    DESCRICAO: string | null
    OPERACAO_SAP: string | null
    OPERADORA_SAP: string | null
    REDE: number
    BANDEIRA: number
    MODALIDADE: number
    BIN: number
    _count: FINALIZADORAS_SAPCountAggregateOutputType | null
    _avg: FINALIZADORAS_SAPAvgAggregateOutputType | null
    _sum: FINALIZADORAS_SAPSumAggregateOutputType | null
    _min: FINALIZADORAS_SAPMinAggregateOutputType | null
    _max: FINALIZADORAS_SAPMaxAggregateOutputType | null
  }

  type GetFINALIZADORAS_SAPGroupByPayload<T extends FINALIZADORAS_SAPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FINALIZADORAS_SAPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FINALIZADORAS_SAPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FINALIZADORAS_SAPGroupByOutputType[P]>
            : GetScalarType<T[P], FINALIZADORAS_SAPGroupByOutputType[P]>
        }
      >
    >


  export type FINALIZADORAS_SAPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    COD_FINALIZ?: boolean
    DOMINIO?: boolean
    TRANSACAO?: boolean
    TIPO?: boolean
    DESCRICAO?: boolean
    OPERACAO_SAP?: boolean
    OPERADORA_SAP?: boolean
    REDE?: boolean
    BANDEIRA?: boolean
    MODALIDADE?: boolean
    BIN?: boolean
  }, ExtArgs["result"]["fINALIZADORAS_SAP"]>



  export type FINALIZADORAS_SAPSelectScalar = {
    COD_FINALIZ?: boolean
    DOMINIO?: boolean
    TRANSACAO?: boolean
    TIPO?: boolean
    DESCRICAO?: boolean
    OPERACAO_SAP?: boolean
    OPERADORA_SAP?: boolean
    REDE?: boolean
    BANDEIRA?: boolean
    MODALIDADE?: boolean
    BIN?: boolean
  }

  export type FINALIZADORAS_SAPOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"COD_FINALIZ" | "DOMINIO" | "TRANSACAO" | "TIPO" | "DESCRICAO" | "OPERACAO_SAP" | "OPERADORA_SAP" | "REDE" | "BANDEIRA" | "MODALIDADE" | "BIN", ExtArgs["result"]["fINALIZADORAS_SAP"]>

  export type $FINALIZADORAS_SAPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FINALIZADORAS_SAP"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      COD_FINALIZ: number
      DOMINIO: number
      TRANSACAO: number
      TIPO: number | null
      DESCRICAO: string | null
      OPERACAO_SAP: string | null
      OPERADORA_SAP: string | null
      REDE: number
      BANDEIRA: number
      MODALIDADE: number
      BIN: number
    }, ExtArgs["result"]["fINALIZADORAS_SAP"]>
    composites: {}
  }

  type FINALIZADORAS_SAPGetPayload<S extends boolean | null | undefined | FINALIZADORAS_SAPDefaultArgs> = $Result.GetResult<Prisma.$FINALIZADORAS_SAPPayload, S>

  type FINALIZADORAS_SAPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FINALIZADORAS_SAPFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FINALIZADORAS_SAPCountAggregateInputType | true
    }

  export interface FINALIZADORAS_SAPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FINALIZADORAS_SAP'], meta: { name: 'FINALIZADORAS_SAP' } }
    /**
     * Find zero or one FINALIZADORAS_SAP that matches the filter.
     * @param {FINALIZADORAS_SAPFindUniqueArgs} args - Arguments to find a FINALIZADORAS_SAP
     * @example
     * // Get one FINALIZADORAS_SAP
     * const fINALIZADORAS_SAP = await prisma.fINALIZADORAS_SAP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FINALIZADORAS_SAPFindUniqueArgs>(args: SelectSubset<T, FINALIZADORAS_SAPFindUniqueArgs<ExtArgs>>): Prisma__FINALIZADORAS_SAPClient<$Result.GetResult<Prisma.$FINALIZADORAS_SAPPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one FINALIZADORAS_SAP that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FINALIZADORAS_SAPFindUniqueOrThrowArgs} args - Arguments to find a FINALIZADORAS_SAP
     * @example
     * // Get one FINALIZADORAS_SAP
     * const fINALIZADORAS_SAP = await prisma.fINALIZADORAS_SAP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FINALIZADORAS_SAPFindUniqueOrThrowArgs>(args: SelectSubset<T, FINALIZADORAS_SAPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FINALIZADORAS_SAPClient<$Result.GetResult<Prisma.$FINALIZADORAS_SAPPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first FINALIZADORAS_SAP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FINALIZADORAS_SAPFindFirstArgs} args - Arguments to find a FINALIZADORAS_SAP
     * @example
     * // Get one FINALIZADORAS_SAP
     * const fINALIZADORAS_SAP = await prisma.fINALIZADORAS_SAP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FINALIZADORAS_SAPFindFirstArgs>(args?: SelectSubset<T, FINALIZADORAS_SAPFindFirstArgs<ExtArgs>>): Prisma__FINALIZADORAS_SAPClient<$Result.GetResult<Prisma.$FINALIZADORAS_SAPPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first FINALIZADORAS_SAP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FINALIZADORAS_SAPFindFirstOrThrowArgs} args - Arguments to find a FINALIZADORAS_SAP
     * @example
     * // Get one FINALIZADORAS_SAP
     * const fINALIZADORAS_SAP = await prisma.fINALIZADORAS_SAP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FINALIZADORAS_SAPFindFirstOrThrowArgs>(args?: SelectSubset<T, FINALIZADORAS_SAPFindFirstOrThrowArgs<ExtArgs>>): Prisma__FINALIZADORAS_SAPClient<$Result.GetResult<Prisma.$FINALIZADORAS_SAPPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more FINALIZADORAS_SAPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FINALIZADORAS_SAPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FINALIZADORAS_SAPS
     * const fINALIZADORAS_SAPS = await prisma.fINALIZADORAS_SAP.findMany()
     * 
     * // Get first 10 FINALIZADORAS_SAPS
     * const fINALIZADORAS_SAPS = await prisma.fINALIZADORAS_SAP.findMany({ take: 10 })
     * 
     * // Only select the `COD_FINALIZ`
     * const fINALIZADORAS_SAPWithCOD_FINALIZOnly = await prisma.fINALIZADORAS_SAP.findMany({ select: { COD_FINALIZ: true } })
     * 
     */
    findMany<T extends FINALIZADORAS_SAPFindManyArgs>(args?: SelectSubset<T, FINALIZADORAS_SAPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FINALIZADORAS_SAPPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a FINALIZADORAS_SAP.
     * @param {FINALIZADORAS_SAPCreateArgs} args - Arguments to create a FINALIZADORAS_SAP.
     * @example
     * // Create one FINALIZADORAS_SAP
     * const FINALIZADORAS_SAP = await prisma.fINALIZADORAS_SAP.create({
     *   data: {
     *     // ... data to create a FINALIZADORAS_SAP
     *   }
     * })
     * 
     */
    create<T extends FINALIZADORAS_SAPCreateArgs>(args: SelectSubset<T, FINALIZADORAS_SAPCreateArgs<ExtArgs>>): Prisma__FINALIZADORAS_SAPClient<$Result.GetResult<Prisma.$FINALIZADORAS_SAPPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many FINALIZADORAS_SAPS.
     * @param {FINALIZADORAS_SAPCreateManyArgs} args - Arguments to create many FINALIZADORAS_SAPS.
     * @example
     * // Create many FINALIZADORAS_SAPS
     * const fINALIZADORAS_SAP = await prisma.fINALIZADORAS_SAP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FINALIZADORAS_SAPCreateManyArgs>(args?: SelectSubset<T, FINALIZADORAS_SAPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FINALIZADORAS_SAP.
     * @param {FINALIZADORAS_SAPDeleteArgs} args - Arguments to delete one FINALIZADORAS_SAP.
     * @example
     * // Delete one FINALIZADORAS_SAP
     * const FINALIZADORAS_SAP = await prisma.fINALIZADORAS_SAP.delete({
     *   where: {
     *     // ... filter to delete one FINALIZADORAS_SAP
     *   }
     * })
     * 
     */
    delete<T extends FINALIZADORAS_SAPDeleteArgs>(args: SelectSubset<T, FINALIZADORAS_SAPDeleteArgs<ExtArgs>>): Prisma__FINALIZADORAS_SAPClient<$Result.GetResult<Prisma.$FINALIZADORAS_SAPPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one FINALIZADORAS_SAP.
     * @param {FINALIZADORAS_SAPUpdateArgs} args - Arguments to update one FINALIZADORAS_SAP.
     * @example
     * // Update one FINALIZADORAS_SAP
     * const fINALIZADORAS_SAP = await prisma.fINALIZADORAS_SAP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FINALIZADORAS_SAPUpdateArgs>(args: SelectSubset<T, FINALIZADORAS_SAPUpdateArgs<ExtArgs>>): Prisma__FINALIZADORAS_SAPClient<$Result.GetResult<Prisma.$FINALIZADORAS_SAPPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more FINALIZADORAS_SAPS.
     * @param {FINALIZADORAS_SAPDeleteManyArgs} args - Arguments to filter FINALIZADORAS_SAPS to delete.
     * @example
     * // Delete a few FINALIZADORAS_SAPS
     * const { count } = await prisma.fINALIZADORAS_SAP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FINALIZADORAS_SAPDeleteManyArgs>(args?: SelectSubset<T, FINALIZADORAS_SAPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FINALIZADORAS_SAPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FINALIZADORAS_SAPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FINALIZADORAS_SAPS
     * const fINALIZADORAS_SAP = await prisma.fINALIZADORAS_SAP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FINALIZADORAS_SAPUpdateManyArgs>(args: SelectSubset<T, FINALIZADORAS_SAPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FINALIZADORAS_SAP.
     * @param {FINALIZADORAS_SAPUpsertArgs} args - Arguments to update or create a FINALIZADORAS_SAP.
     * @example
     * // Update or create a FINALIZADORAS_SAP
     * const fINALIZADORAS_SAP = await prisma.fINALIZADORAS_SAP.upsert({
     *   create: {
     *     // ... data to create a FINALIZADORAS_SAP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FINALIZADORAS_SAP we want to update
     *   }
     * })
     */
    upsert<T extends FINALIZADORAS_SAPUpsertArgs>(args: SelectSubset<T, FINALIZADORAS_SAPUpsertArgs<ExtArgs>>): Prisma__FINALIZADORAS_SAPClient<$Result.GetResult<Prisma.$FINALIZADORAS_SAPPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of FINALIZADORAS_SAPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FINALIZADORAS_SAPCountArgs} args - Arguments to filter FINALIZADORAS_SAPS to count.
     * @example
     * // Count the number of FINALIZADORAS_SAPS
     * const count = await prisma.fINALIZADORAS_SAP.count({
     *   where: {
     *     // ... the filter for the FINALIZADORAS_SAPS we want to count
     *   }
     * })
    **/
    count<T extends FINALIZADORAS_SAPCountArgs>(
      args?: Subset<T, FINALIZADORAS_SAPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FINALIZADORAS_SAPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FINALIZADORAS_SAP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FINALIZADORAS_SAPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FINALIZADORAS_SAPAggregateArgs>(args: Subset<T, FINALIZADORAS_SAPAggregateArgs>): Prisma.PrismaPromise<GetFINALIZADORAS_SAPAggregateType<T>>

    /**
     * Group by FINALIZADORAS_SAP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FINALIZADORAS_SAPGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FINALIZADORAS_SAPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FINALIZADORAS_SAPGroupByArgs['orderBy'] }
        : { orderBy?: FINALIZADORAS_SAPGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FINALIZADORAS_SAPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFINALIZADORAS_SAPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FINALIZADORAS_SAP model
   */
  readonly fields: FINALIZADORAS_SAPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FINALIZADORAS_SAP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FINALIZADORAS_SAPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FINALIZADORAS_SAP model
   */ 
  interface FINALIZADORAS_SAPFieldRefs {
    readonly COD_FINALIZ: FieldRef<"FINALIZADORAS_SAP", 'Int'>
    readonly DOMINIO: FieldRef<"FINALIZADORAS_SAP", 'Int'>
    readonly TRANSACAO: FieldRef<"FINALIZADORAS_SAP", 'Int'>
    readonly TIPO: FieldRef<"FINALIZADORAS_SAP", 'Int'>
    readonly DESCRICAO: FieldRef<"FINALIZADORAS_SAP", 'String'>
    readonly OPERACAO_SAP: FieldRef<"FINALIZADORAS_SAP", 'String'>
    readonly OPERADORA_SAP: FieldRef<"FINALIZADORAS_SAP", 'String'>
    readonly REDE: FieldRef<"FINALIZADORAS_SAP", 'Int'>
    readonly BANDEIRA: FieldRef<"FINALIZADORAS_SAP", 'Int'>
    readonly MODALIDADE: FieldRef<"FINALIZADORAS_SAP", 'Int'>
    readonly BIN: FieldRef<"FINALIZADORAS_SAP", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FINALIZADORAS_SAP findUnique
   */
  export type FINALIZADORAS_SAPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FINALIZADORAS_SAP
     */
    select?: FINALIZADORAS_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FINALIZADORAS_SAP
     */
    omit?: FINALIZADORAS_SAPOmit<ExtArgs> | null
    /**
     * Filter, which FINALIZADORAS_SAP to fetch.
     */
    where: FINALIZADORAS_SAPWhereUniqueInput
  }

  /**
   * FINALIZADORAS_SAP findUniqueOrThrow
   */
  export type FINALIZADORAS_SAPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FINALIZADORAS_SAP
     */
    select?: FINALIZADORAS_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FINALIZADORAS_SAP
     */
    omit?: FINALIZADORAS_SAPOmit<ExtArgs> | null
    /**
     * Filter, which FINALIZADORAS_SAP to fetch.
     */
    where: FINALIZADORAS_SAPWhereUniqueInput
  }

  /**
   * FINALIZADORAS_SAP findFirst
   */
  export type FINALIZADORAS_SAPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FINALIZADORAS_SAP
     */
    select?: FINALIZADORAS_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FINALIZADORAS_SAP
     */
    omit?: FINALIZADORAS_SAPOmit<ExtArgs> | null
    /**
     * Filter, which FINALIZADORAS_SAP to fetch.
     */
    where?: FINALIZADORAS_SAPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FINALIZADORAS_SAPS to fetch.
     */
    orderBy?: FINALIZADORAS_SAPOrderByWithRelationInput | FINALIZADORAS_SAPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FINALIZADORAS_SAPS.
     */
    cursor?: FINALIZADORAS_SAPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FINALIZADORAS_SAPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FINALIZADORAS_SAPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FINALIZADORAS_SAPS.
     */
    distinct?: FINALIZADORAS_SAPScalarFieldEnum | FINALIZADORAS_SAPScalarFieldEnum[]
  }

  /**
   * FINALIZADORAS_SAP findFirstOrThrow
   */
  export type FINALIZADORAS_SAPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FINALIZADORAS_SAP
     */
    select?: FINALIZADORAS_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FINALIZADORAS_SAP
     */
    omit?: FINALIZADORAS_SAPOmit<ExtArgs> | null
    /**
     * Filter, which FINALIZADORAS_SAP to fetch.
     */
    where?: FINALIZADORAS_SAPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FINALIZADORAS_SAPS to fetch.
     */
    orderBy?: FINALIZADORAS_SAPOrderByWithRelationInput | FINALIZADORAS_SAPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FINALIZADORAS_SAPS.
     */
    cursor?: FINALIZADORAS_SAPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FINALIZADORAS_SAPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FINALIZADORAS_SAPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FINALIZADORAS_SAPS.
     */
    distinct?: FINALIZADORAS_SAPScalarFieldEnum | FINALIZADORAS_SAPScalarFieldEnum[]
  }

  /**
   * FINALIZADORAS_SAP findMany
   */
  export type FINALIZADORAS_SAPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FINALIZADORAS_SAP
     */
    select?: FINALIZADORAS_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FINALIZADORAS_SAP
     */
    omit?: FINALIZADORAS_SAPOmit<ExtArgs> | null
    /**
     * Filter, which FINALIZADORAS_SAPS to fetch.
     */
    where?: FINALIZADORAS_SAPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FINALIZADORAS_SAPS to fetch.
     */
    orderBy?: FINALIZADORAS_SAPOrderByWithRelationInput | FINALIZADORAS_SAPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FINALIZADORAS_SAPS.
     */
    cursor?: FINALIZADORAS_SAPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FINALIZADORAS_SAPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FINALIZADORAS_SAPS.
     */
    skip?: number
    distinct?: FINALIZADORAS_SAPScalarFieldEnum | FINALIZADORAS_SAPScalarFieldEnum[]
  }

  /**
   * FINALIZADORAS_SAP create
   */
  export type FINALIZADORAS_SAPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FINALIZADORAS_SAP
     */
    select?: FINALIZADORAS_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FINALIZADORAS_SAP
     */
    omit?: FINALIZADORAS_SAPOmit<ExtArgs> | null
    /**
     * The data needed to create a FINALIZADORAS_SAP.
     */
    data?: XOR<FINALIZADORAS_SAPCreateInput, FINALIZADORAS_SAPUncheckedCreateInput>
  }

  /**
   * FINALIZADORAS_SAP createMany
   */
  export type FINALIZADORAS_SAPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FINALIZADORAS_SAPS.
     */
    data: FINALIZADORAS_SAPCreateManyInput | FINALIZADORAS_SAPCreateManyInput[]
  }

  /**
   * FINALIZADORAS_SAP update
   */
  export type FINALIZADORAS_SAPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FINALIZADORAS_SAP
     */
    select?: FINALIZADORAS_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FINALIZADORAS_SAP
     */
    omit?: FINALIZADORAS_SAPOmit<ExtArgs> | null
    /**
     * The data needed to update a FINALIZADORAS_SAP.
     */
    data: XOR<FINALIZADORAS_SAPUpdateInput, FINALIZADORAS_SAPUncheckedUpdateInput>
    /**
     * Choose, which FINALIZADORAS_SAP to update.
     */
    where: FINALIZADORAS_SAPWhereUniqueInput
  }

  /**
   * FINALIZADORAS_SAP updateMany
   */
  export type FINALIZADORAS_SAPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FINALIZADORAS_SAPS.
     */
    data: XOR<FINALIZADORAS_SAPUpdateManyMutationInput, FINALIZADORAS_SAPUncheckedUpdateManyInput>
    /**
     * Filter which FINALIZADORAS_SAPS to update
     */
    where?: FINALIZADORAS_SAPWhereInput
    /**
     * Limit how many FINALIZADORAS_SAPS to update.
     */
    limit?: number
  }

  /**
   * FINALIZADORAS_SAP upsert
   */
  export type FINALIZADORAS_SAPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FINALIZADORAS_SAP
     */
    select?: FINALIZADORAS_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FINALIZADORAS_SAP
     */
    omit?: FINALIZADORAS_SAPOmit<ExtArgs> | null
    /**
     * The filter to search for the FINALIZADORAS_SAP to update in case it exists.
     */
    where: FINALIZADORAS_SAPWhereUniqueInput
    /**
     * In case the FINALIZADORAS_SAP found by the `where` argument doesn't exist, create a new FINALIZADORAS_SAP with this data.
     */
    create: XOR<FINALIZADORAS_SAPCreateInput, FINALIZADORAS_SAPUncheckedCreateInput>
    /**
     * In case the FINALIZADORAS_SAP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FINALIZADORAS_SAPUpdateInput, FINALIZADORAS_SAPUncheckedUpdateInput>
  }

  /**
   * FINALIZADORAS_SAP delete
   */
  export type FINALIZADORAS_SAPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FINALIZADORAS_SAP
     */
    select?: FINALIZADORAS_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FINALIZADORAS_SAP
     */
    omit?: FINALIZADORAS_SAPOmit<ExtArgs> | null
    /**
     * Filter which FINALIZADORAS_SAP to delete.
     */
    where: FINALIZADORAS_SAPWhereUniqueInput
  }

  /**
   * FINALIZADORAS_SAP deleteMany
   */
  export type FINALIZADORAS_SAPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FINALIZADORAS_SAPS to delete
     */
    where?: FINALIZADORAS_SAPWhereInput
    /**
     * Limit how many FINALIZADORAS_SAPS to delete.
     */
    limit?: number
  }

  /**
   * FINALIZADORAS_SAP without action
   */
  export type FINALIZADORAS_SAPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FINALIZADORAS_SAP
     */
    select?: FINALIZADORAS_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FINALIZADORAS_SAP
     */
    omit?: FINALIZADORAS_SAPOmit<ExtArgs> | null
  }


  /**
   * Model MONITORAMENTO
   */

  export type AggregateMONITORAMENTO = {
    _count: MONITORAMENTOCountAggregateOutputType | null
    _avg: MONITORAMENTOAvgAggregateOutputType | null
    _sum: MONITORAMENTOSumAggregateOutputType | null
    _min: MONITORAMENTOMinAggregateOutputType | null
    _max: MONITORAMENTOMaxAggregateOutputType | null
  }

  export type MONITORAMENTOAvgAggregateOutputType = {
    STATUS: number | null
  }

  export type MONITORAMENTOSumAggregateOutputType = {
    STATUS: number | null
  }

  export type MONITORAMENTOMinAggregateOutputType = {
    THREAD: string | null
    DATA_LOG: Date | null
    DESCRICAO: string | null
    STATUS: number | null
  }

  export type MONITORAMENTOMaxAggregateOutputType = {
    THREAD: string | null
    DATA_LOG: Date | null
    DESCRICAO: string | null
    STATUS: number | null
  }

  export type MONITORAMENTOCountAggregateOutputType = {
    THREAD: number
    DATA_LOG: number
    DESCRICAO: number
    STATUS: number
    _all: number
  }


  export type MONITORAMENTOAvgAggregateInputType = {
    STATUS?: true
  }

  export type MONITORAMENTOSumAggregateInputType = {
    STATUS?: true
  }

  export type MONITORAMENTOMinAggregateInputType = {
    THREAD?: true
    DATA_LOG?: true
    DESCRICAO?: true
    STATUS?: true
  }

  export type MONITORAMENTOMaxAggregateInputType = {
    THREAD?: true
    DATA_LOG?: true
    DESCRICAO?: true
    STATUS?: true
  }

  export type MONITORAMENTOCountAggregateInputType = {
    THREAD?: true
    DATA_LOG?: true
    DESCRICAO?: true
    STATUS?: true
    _all?: true
  }

  export type MONITORAMENTOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MONITORAMENTO to aggregate.
     */
    where?: MONITORAMENTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MONITORAMENTOS to fetch.
     */
    orderBy?: MONITORAMENTOOrderByWithRelationInput | MONITORAMENTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MONITORAMENTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MONITORAMENTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MONITORAMENTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MONITORAMENTOS
    **/
    _count?: true | MONITORAMENTOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MONITORAMENTOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MONITORAMENTOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MONITORAMENTOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MONITORAMENTOMaxAggregateInputType
  }

  export type GetMONITORAMENTOAggregateType<T extends MONITORAMENTOAggregateArgs> = {
        [P in keyof T & keyof AggregateMONITORAMENTO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMONITORAMENTO[P]>
      : GetScalarType<T[P], AggregateMONITORAMENTO[P]>
  }




  export type MONITORAMENTOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MONITORAMENTOWhereInput
    orderBy?: MONITORAMENTOOrderByWithAggregationInput | MONITORAMENTOOrderByWithAggregationInput[]
    by: MONITORAMENTOScalarFieldEnum[] | MONITORAMENTOScalarFieldEnum
    having?: MONITORAMENTOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MONITORAMENTOCountAggregateInputType | true
    _avg?: MONITORAMENTOAvgAggregateInputType
    _sum?: MONITORAMENTOSumAggregateInputType
    _min?: MONITORAMENTOMinAggregateInputType
    _max?: MONITORAMENTOMaxAggregateInputType
  }

  export type MONITORAMENTOGroupByOutputType = {
    THREAD: string
    DATA_LOG: Date | null
    DESCRICAO: string | null
    STATUS: number | null
    _count: MONITORAMENTOCountAggregateOutputType | null
    _avg: MONITORAMENTOAvgAggregateOutputType | null
    _sum: MONITORAMENTOSumAggregateOutputType | null
    _min: MONITORAMENTOMinAggregateOutputType | null
    _max: MONITORAMENTOMaxAggregateOutputType | null
  }

  type GetMONITORAMENTOGroupByPayload<T extends MONITORAMENTOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MONITORAMENTOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MONITORAMENTOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MONITORAMENTOGroupByOutputType[P]>
            : GetScalarType<T[P], MONITORAMENTOGroupByOutputType[P]>
        }
      >
    >


  export type MONITORAMENTOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    THREAD?: boolean
    DATA_LOG?: boolean
    DESCRICAO?: boolean
    STATUS?: boolean
  }, ExtArgs["result"]["mONITORAMENTO"]>



  export type MONITORAMENTOSelectScalar = {
    THREAD?: boolean
    DATA_LOG?: boolean
    DESCRICAO?: boolean
    STATUS?: boolean
  }

  export type MONITORAMENTOOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"THREAD" | "DATA_LOG" | "DESCRICAO" | "STATUS", ExtArgs["result"]["mONITORAMENTO"]>

  export type $MONITORAMENTOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MONITORAMENTO"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      THREAD: string
      DATA_LOG: Date | null
      DESCRICAO: string | null
      STATUS: number | null
    }, ExtArgs["result"]["mONITORAMENTO"]>
    composites: {}
  }

  type MONITORAMENTOGetPayload<S extends boolean | null | undefined | MONITORAMENTODefaultArgs> = $Result.GetResult<Prisma.$MONITORAMENTOPayload, S>

  type MONITORAMENTOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MONITORAMENTOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MONITORAMENTOCountAggregateInputType | true
    }

  export interface MONITORAMENTODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MONITORAMENTO'], meta: { name: 'MONITORAMENTO' } }
    /**
     * Find zero or one MONITORAMENTO that matches the filter.
     * @param {MONITORAMENTOFindUniqueArgs} args - Arguments to find a MONITORAMENTO
     * @example
     * // Get one MONITORAMENTO
     * const mONITORAMENTO = await prisma.mONITORAMENTO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MONITORAMENTOFindUniqueArgs>(args: SelectSubset<T, MONITORAMENTOFindUniqueArgs<ExtArgs>>): Prisma__MONITORAMENTOClient<$Result.GetResult<Prisma.$MONITORAMENTOPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one MONITORAMENTO that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MONITORAMENTOFindUniqueOrThrowArgs} args - Arguments to find a MONITORAMENTO
     * @example
     * // Get one MONITORAMENTO
     * const mONITORAMENTO = await prisma.mONITORAMENTO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MONITORAMENTOFindUniqueOrThrowArgs>(args: SelectSubset<T, MONITORAMENTOFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MONITORAMENTOClient<$Result.GetResult<Prisma.$MONITORAMENTOPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first MONITORAMENTO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MONITORAMENTOFindFirstArgs} args - Arguments to find a MONITORAMENTO
     * @example
     * // Get one MONITORAMENTO
     * const mONITORAMENTO = await prisma.mONITORAMENTO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MONITORAMENTOFindFirstArgs>(args?: SelectSubset<T, MONITORAMENTOFindFirstArgs<ExtArgs>>): Prisma__MONITORAMENTOClient<$Result.GetResult<Prisma.$MONITORAMENTOPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first MONITORAMENTO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MONITORAMENTOFindFirstOrThrowArgs} args - Arguments to find a MONITORAMENTO
     * @example
     * // Get one MONITORAMENTO
     * const mONITORAMENTO = await prisma.mONITORAMENTO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MONITORAMENTOFindFirstOrThrowArgs>(args?: SelectSubset<T, MONITORAMENTOFindFirstOrThrowArgs<ExtArgs>>): Prisma__MONITORAMENTOClient<$Result.GetResult<Prisma.$MONITORAMENTOPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more MONITORAMENTOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MONITORAMENTOFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MONITORAMENTOS
     * const mONITORAMENTOS = await prisma.mONITORAMENTO.findMany()
     * 
     * // Get first 10 MONITORAMENTOS
     * const mONITORAMENTOS = await prisma.mONITORAMENTO.findMany({ take: 10 })
     * 
     * // Only select the `THREAD`
     * const mONITORAMENTOWithTHREADOnly = await prisma.mONITORAMENTO.findMany({ select: { THREAD: true } })
     * 
     */
    findMany<T extends MONITORAMENTOFindManyArgs>(args?: SelectSubset<T, MONITORAMENTOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MONITORAMENTOPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a MONITORAMENTO.
     * @param {MONITORAMENTOCreateArgs} args - Arguments to create a MONITORAMENTO.
     * @example
     * // Create one MONITORAMENTO
     * const MONITORAMENTO = await prisma.mONITORAMENTO.create({
     *   data: {
     *     // ... data to create a MONITORAMENTO
     *   }
     * })
     * 
     */
    create<T extends MONITORAMENTOCreateArgs>(args: SelectSubset<T, MONITORAMENTOCreateArgs<ExtArgs>>): Prisma__MONITORAMENTOClient<$Result.GetResult<Prisma.$MONITORAMENTOPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many MONITORAMENTOS.
     * @param {MONITORAMENTOCreateManyArgs} args - Arguments to create many MONITORAMENTOS.
     * @example
     * // Create many MONITORAMENTOS
     * const mONITORAMENTO = await prisma.mONITORAMENTO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MONITORAMENTOCreateManyArgs>(args?: SelectSubset<T, MONITORAMENTOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MONITORAMENTO.
     * @param {MONITORAMENTODeleteArgs} args - Arguments to delete one MONITORAMENTO.
     * @example
     * // Delete one MONITORAMENTO
     * const MONITORAMENTO = await prisma.mONITORAMENTO.delete({
     *   where: {
     *     // ... filter to delete one MONITORAMENTO
     *   }
     * })
     * 
     */
    delete<T extends MONITORAMENTODeleteArgs>(args: SelectSubset<T, MONITORAMENTODeleteArgs<ExtArgs>>): Prisma__MONITORAMENTOClient<$Result.GetResult<Prisma.$MONITORAMENTOPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one MONITORAMENTO.
     * @param {MONITORAMENTOUpdateArgs} args - Arguments to update one MONITORAMENTO.
     * @example
     * // Update one MONITORAMENTO
     * const mONITORAMENTO = await prisma.mONITORAMENTO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MONITORAMENTOUpdateArgs>(args: SelectSubset<T, MONITORAMENTOUpdateArgs<ExtArgs>>): Prisma__MONITORAMENTOClient<$Result.GetResult<Prisma.$MONITORAMENTOPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more MONITORAMENTOS.
     * @param {MONITORAMENTODeleteManyArgs} args - Arguments to filter MONITORAMENTOS to delete.
     * @example
     * // Delete a few MONITORAMENTOS
     * const { count } = await prisma.mONITORAMENTO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MONITORAMENTODeleteManyArgs>(args?: SelectSubset<T, MONITORAMENTODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MONITORAMENTOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MONITORAMENTOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MONITORAMENTOS
     * const mONITORAMENTO = await prisma.mONITORAMENTO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MONITORAMENTOUpdateManyArgs>(args: SelectSubset<T, MONITORAMENTOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MONITORAMENTO.
     * @param {MONITORAMENTOUpsertArgs} args - Arguments to update or create a MONITORAMENTO.
     * @example
     * // Update or create a MONITORAMENTO
     * const mONITORAMENTO = await prisma.mONITORAMENTO.upsert({
     *   create: {
     *     // ... data to create a MONITORAMENTO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MONITORAMENTO we want to update
     *   }
     * })
     */
    upsert<T extends MONITORAMENTOUpsertArgs>(args: SelectSubset<T, MONITORAMENTOUpsertArgs<ExtArgs>>): Prisma__MONITORAMENTOClient<$Result.GetResult<Prisma.$MONITORAMENTOPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of MONITORAMENTOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MONITORAMENTOCountArgs} args - Arguments to filter MONITORAMENTOS to count.
     * @example
     * // Count the number of MONITORAMENTOS
     * const count = await prisma.mONITORAMENTO.count({
     *   where: {
     *     // ... the filter for the MONITORAMENTOS we want to count
     *   }
     * })
    **/
    count<T extends MONITORAMENTOCountArgs>(
      args?: Subset<T, MONITORAMENTOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MONITORAMENTOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MONITORAMENTO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MONITORAMENTOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MONITORAMENTOAggregateArgs>(args: Subset<T, MONITORAMENTOAggregateArgs>): Prisma.PrismaPromise<GetMONITORAMENTOAggregateType<T>>

    /**
     * Group by MONITORAMENTO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MONITORAMENTOGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MONITORAMENTOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MONITORAMENTOGroupByArgs['orderBy'] }
        : { orderBy?: MONITORAMENTOGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MONITORAMENTOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMONITORAMENTOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MONITORAMENTO model
   */
  readonly fields: MONITORAMENTOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MONITORAMENTO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MONITORAMENTOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MONITORAMENTO model
   */ 
  interface MONITORAMENTOFieldRefs {
    readonly THREAD: FieldRef<"MONITORAMENTO", 'String'>
    readonly DATA_LOG: FieldRef<"MONITORAMENTO", 'DateTime'>
    readonly DESCRICAO: FieldRef<"MONITORAMENTO", 'String'>
    readonly STATUS: FieldRef<"MONITORAMENTO", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MONITORAMENTO findUnique
   */
  export type MONITORAMENTOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MONITORAMENTO
     */
    select?: MONITORAMENTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MONITORAMENTO
     */
    omit?: MONITORAMENTOOmit<ExtArgs> | null
    /**
     * Filter, which MONITORAMENTO to fetch.
     */
    where: MONITORAMENTOWhereUniqueInput
  }

  /**
   * MONITORAMENTO findUniqueOrThrow
   */
  export type MONITORAMENTOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MONITORAMENTO
     */
    select?: MONITORAMENTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MONITORAMENTO
     */
    omit?: MONITORAMENTOOmit<ExtArgs> | null
    /**
     * Filter, which MONITORAMENTO to fetch.
     */
    where: MONITORAMENTOWhereUniqueInput
  }

  /**
   * MONITORAMENTO findFirst
   */
  export type MONITORAMENTOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MONITORAMENTO
     */
    select?: MONITORAMENTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MONITORAMENTO
     */
    omit?: MONITORAMENTOOmit<ExtArgs> | null
    /**
     * Filter, which MONITORAMENTO to fetch.
     */
    where?: MONITORAMENTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MONITORAMENTOS to fetch.
     */
    orderBy?: MONITORAMENTOOrderByWithRelationInput | MONITORAMENTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MONITORAMENTOS.
     */
    cursor?: MONITORAMENTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MONITORAMENTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MONITORAMENTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MONITORAMENTOS.
     */
    distinct?: MONITORAMENTOScalarFieldEnum | MONITORAMENTOScalarFieldEnum[]
  }

  /**
   * MONITORAMENTO findFirstOrThrow
   */
  export type MONITORAMENTOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MONITORAMENTO
     */
    select?: MONITORAMENTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MONITORAMENTO
     */
    omit?: MONITORAMENTOOmit<ExtArgs> | null
    /**
     * Filter, which MONITORAMENTO to fetch.
     */
    where?: MONITORAMENTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MONITORAMENTOS to fetch.
     */
    orderBy?: MONITORAMENTOOrderByWithRelationInput | MONITORAMENTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MONITORAMENTOS.
     */
    cursor?: MONITORAMENTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MONITORAMENTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MONITORAMENTOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MONITORAMENTOS.
     */
    distinct?: MONITORAMENTOScalarFieldEnum | MONITORAMENTOScalarFieldEnum[]
  }

  /**
   * MONITORAMENTO findMany
   */
  export type MONITORAMENTOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MONITORAMENTO
     */
    select?: MONITORAMENTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MONITORAMENTO
     */
    omit?: MONITORAMENTOOmit<ExtArgs> | null
    /**
     * Filter, which MONITORAMENTOS to fetch.
     */
    where?: MONITORAMENTOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MONITORAMENTOS to fetch.
     */
    orderBy?: MONITORAMENTOOrderByWithRelationInput | MONITORAMENTOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MONITORAMENTOS.
     */
    cursor?: MONITORAMENTOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MONITORAMENTOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MONITORAMENTOS.
     */
    skip?: number
    distinct?: MONITORAMENTOScalarFieldEnum | MONITORAMENTOScalarFieldEnum[]
  }

  /**
   * MONITORAMENTO create
   */
  export type MONITORAMENTOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MONITORAMENTO
     */
    select?: MONITORAMENTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MONITORAMENTO
     */
    omit?: MONITORAMENTOOmit<ExtArgs> | null
    /**
     * The data needed to create a MONITORAMENTO.
     */
    data?: XOR<MONITORAMENTOCreateInput, MONITORAMENTOUncheckedCreateInput>
  }

  /**
   * MONITORAMENTO createMany
   */
  export type MONITORAMENTOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MONITORAMENTOS.
     */
    data: MONITORAMENTOCreateManyInput | MONITORAMENTOCreateManyInput[]
  }

  /**
   * MONITORAMENTO update
   */
  export type MONITORAMENTOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MONITORAMENTO
     */
    select?: MONITORAMENTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MONITORAMENTO
     */
    omit?: MONITORAMENTOOmit<ExtArgs> | null
    /**
     * The data needed to update a MONITORAMENTO.
     */
    data: XOR<MONITORAMENTOUpdateInput, MONITORAMENTOUncheckedUpdateInput>
    /**
     * Choose, which MONITORAMENTO to update.
     */
    where: MONITORAMENTOWhereUniqueInput
  }

  /**
   * MONITORAMENTO updateMany
   */
  export type MONITORAMENTOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MONITORAMENTOS.
     */
    data: XOR<MONITORAMENTOUpdateManyMutationInput, MONITORAMENTOUncheckedUpdateManyInput>
    /**
     * Filter which MONITORAMENTOS to update
     */
    where?: MONITORAMENTOWhereInput
    /**
     * Limit how many MONITORAMENTOS to update.
     */
    limit?: number
  }

  /**
   * MONITORAMENTO upsert
   */
  export type MONITORAMENTOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MONITORAMENTO
     */
    select?: MONITORAMENTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MONITORAMENTO
     */
    omit?: MONITORAMENTOOmit<ExtArgs> | null
    /**
     * The filter to search for the MONITORAMENTO to update in case it exists.
     */
    where: MONITORAMENTOWhereUniqueInput
    /**
     * In case the MONITORAMENTO found by the `where` argument doesn't exist, create a new MONITORAMENTO with this data.
     */
    create: XOR<MONITORAMENTOCreateInput, MONITORAMENTOUncheckedCreateInput>
    /**
     * In case the MONITORAMENTO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MONITORAMENTOUpdateInput, MONITORAMENTOUncheckedUpdateInput>
  }

  /**
   * MONITORAMENTO delete
   */
  export type MONITORAMENTODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MONITORAMENTO
     */
    select?: MONITORAMENTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MONITORAMENTO
     */
    omit?: MONITORAMENTOOmit<ExtArgs> | null
    /**
     * Filter which MONITORAMENTO to delete.
     */
    where: MONITORAMENTOWhereUniqueInput
  }

  /**
   * MONITORAMENTO deleteMany
   */
  export type MONITORAMENTODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MONITORAMENTOS to delete
     */
    where?: MONITORAMENTOWhereInput
    /**
     * Limit how many MONITORAMENTOS to delete.
     */
    limit?: number
  }

  /**
   * MONITORAMENTO without action
   */
  export type MONITORAMENTODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MONITORAMENTO
     */
    select?: MONITORAMENTOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MONITORAMENTO
     */
    omit?: MONITORAMENTOOmit<ExtArgs> | null
  }


  /**
   * Model PARAMETROS_SAP
   */

  export type AggregatePARAMETROS_SAP = {
    _count: PARAMETROS_SAPCountAggregateOutputType | null
    _avg: PARAMETROS_SAPAvgAggregateOutputType | null
    _sum: PARAMETROS_SAPSumAggregateOutputType | null
    _min: PARAMETROS_SAPMinAggregateOutputType | null
    _max: PARAMETROS_SAPMaxAggregateOutputType | null
  }

  export type PARAMETROS_SAPAvgAggregateOutputType = {
    ID_PARAMETRO: number | null
    TIPO: number | null
  }

  export type PARAMETROS_SAPSumAggregateOutputType = {
    ID_PARAMETRO: number | null
    TIPO: number | null
  }

  export type PARAMETROS_SAPMinAggregateOutputType = {
    ID_PARAMETRO: number | null
    DESCRICAO: string | null
    PARAMETRO: string | null
    TIPO: number | null
  }

  export type PARAMETROS_SAPMaxAggregateOutputType = {
    ID_PARAMETRO: number | null
    DESCRICAO: string | null
    PARAMETRO: string | null
    TIPO: number | null
  }

  export type PARAMETROS_SAPCountAggregateOutputType = {
    ID_PARAMETRO: number
    DESCRICAO: number
    PARAMETRO: number
    TIPO: number
    _all: number
  }


  export type PARAMETROS_SAPAvgAggregateInputType = {
    ID_PARAMETRO?: true
    TIPO?: true
  }

  export type PARAMETROS_SAPSumAggregateInputType = {
    ID_PARAMETRO?: true
    TIPO?: true
  }

  export type PARAMETROS_SAPMinAggregateInputType = {
    ID_PARAMETRO?: true
    DESCRICAO?: true
    PARAMETRO?: true
    TIPO?: true
  }

  export type PARAMETROS_SAPMaxAggregateInputType = {
    ID_PARAMETRO?: true
    DESCRICAO?: true
    PARAMETRO?: true
    TIPO?: true
  }

  export type PARAMETROS_SAPCountAggregateInputType = {
    ID_PARAMETRO?: true
    DESCRICAO?: true
    PARAMETRO?: true
    TIPO?: true
    _all?: true
  }

  export type PARAMETROS_SAPAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PARAMETROS_SAP to aggregate.
     */
    where?: PARAMETROS_SAPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PARAMETROS_SAPS to fetch.
     */
    orderBy?: PARAMETROS_SAPOrderByWithRelationInput | PARAMETROS_SAPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PARAMETROS_SAPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PARAMETROS_SAPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PARAMETROS_SAPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PARAMETROS_SAPS
    **/
    _count?: true | PARAMETROS_SAPCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PARAMETROS_SAPAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PARAMETROS_SAPSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PARAMETROS_SAPMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PARAMETROS_SAPMaxAggregateInputType
  }

  export type GetPARAMETROS_SAPAggregateType<T extends PARAMETROS_SAPAggregateArgs> = {
        [P in keyof T & keyof AggregatePARAMETROS_SAP]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePARAMETROS_SAP[P]>
      : GetScalarType<T[P], AggregatePARAMETROS_SAP[P]>
  }




  export type PARAMETROS_SAPGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PARAMETROS_SAPWhereInput
    orderBy?: PARAMETROS_SAPOrderByWithAggregationInput | PARAMETROS_SAPOrderByWithAggregationInput[]
    by: PARAMETROS_SAPScalarFieldEnum[] | PARAMETROS_SAPScalarFieldEnum
    having?: PARAMETROS_SAPScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PARAMETROS_SAPCountAggregateInputType | true
    _avg?: PARAMETROS_SAPAvgAggregateInputType
    _sum?: PARAMETROS_SAPSumAggregateInputType
    _min?: PARAMETROS_SAPMinAggregateInputType
    _max?: PARAMETROS_SAPMaxAggregateInputType
  }

  export type PARAMETROS_SAPGroupByOutputType = {
    ID_PARAMETRO: number
    DESCRICAO: string | null
    PARAMETRO: string | null
    TIPO: number | null
    _count: PARAMETROS_SAPCountAggregateOutputType | null
    _avg: PARAMETROS_SAPAvgAggregateOutputType | null
    _sum: PARAMETROS_SAPSumAggregateOutputType | null
    _min: PARAMETROS_SAPMinAggregateOutputType | null
    _max: PARAMETROS_SAPMaxAggregateOutputType | null
  }

  type GetPARAMETROS_SAPGroupByPayload<T extends PARAMETROS_SAPGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PARAMETROS_SAPGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PARAMETROS_SAPGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PARAMETROS_SAPGroupByOutputType[P]>
            : GetScalarType<T[P], PARAMETROS_SAPGroupByOutputType[P]>
        }
      >
    >


  export type PARAMETROS_SAPSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_PARAMETRO?: boolean
    DESCRICAO?: boolean
    PARAMETRO?: boolean
    TIPO?: boolean
  }, ExtArgs["result"]["pARAMETROS_SAP"]>



  export type PARAMETROS_SAPSelectScalar = {
    ID_PARAMETRO?: boolean
    DESCRICAO?: boolean
    PARAMETRO?: boolean
    TIPO?: boolean
  }

  export type PARAMETROS_SAPOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_PARAMETRO" | "DESCRICAO" | "PARAMETRO" | "TIPO", ExtArgs["result"]["pARAMETROS_SAP"]>

  export type $PARAMETROS_SAPPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PARAMETROS_SAP"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID_PARAMETRO: number
      DESCRICAO: string | null
      PARAMETRO: string | null
      TIPO: number | null
    }, ExtArgs["result"]["pARAMETROS_SAP"]>
    composites: {}
  }

  type PARAMETROS_SAPGetPayload<S extends boolean | null | undefined | PARAMETROS_SAPDefaultArgs> = $Result.GetResult<Prisma.$PARAMETROS_SAPPayload, S>

  type PARAMETROS_SAPCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PARAMETROS_SAPFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PARAMETROS_SAPCountAggregateInputType | true
    }

  export interface PARAMETROS_SAPDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PARAMETROS_SAP'], meta: { name: 'PARAMETROS_SAP' } }
    /**
     * Find zero or one PARAMETROS_SAP that matches the filter.
     * @param {PARAMETROS_SAPFindUniqueArgs} args - Arguments to find a PARAMETROS_SAP
     * @example
     * // Get one PARAMETROS_SAP
     * const pARAMETROS_SAP = await prisma.pARAMETROS_SAP.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PARAMETROS_SAPFindUniqueArgs>(args: SelectSubset<T, PARAMETROS_SAPFindUniqueArgs<ExtArgs>>): Prisma__PARAMETROS_SAPClient<$Result.GetResult<Prisma.$PARAMETROS_SAPPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PARAMETROS_SAP that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PARAMETROS_SAPFindUniqueOrThrowArgs} args - Arguments to find a PARAMETROS_SAP
     * @example
     * // Get one PARAMETROS_SAP
     * const pARAMETROS_SAP = await prisma.pARAMETROS_SAP.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PARAMETROS_SAPFindUniqueOrThrowArgs>(args: SelectSubset<T, PARAMETROS_SAPFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PARAMETROS_SAPClient<$Result.GetResult<Prisma.$PARAMETROS_SAPPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PARAMETROS_SAP that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PARAMETROS_SAPFindFirstArgs} args - Arguments to find a PARAMETROS_SAP
     * @example
     * // Get one PARAMETROS_SAP
     * const pARAMETROS_SAP = await prisma.pARAMETROS_SAP.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PARAMETROS_SAPFindFirstArgs>(args?: SelectSubset<T, PARAMETROS_SAPFindFirstArgs<ExtArgs>>): Prisma__PARAMETROS_SAPClient<$Result.GetResult<Prisma.$PARAMETROS_SAPPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PARAMETROS_SAP that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PARAMETROS_SAPFindFirstOrThrowArgs} args - Arguments to find a PARAMETROS_SAP
     * @example
     * // Get one PARAMETROS_SAP
     * const pARAMETROS_SAP = await prisma.pARAMETROS_SAP.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PARAMETROS_SAPFindFirstOrThrowArgs>(args?: SelectSubset<T, PARAMETROS_SAPFindFirstOrThrowArgs<ExtArgs>>): Prisma__PARAMETROS_SAPClient<$Result.GetResult<Prisma.$PARAMETROS_SAPPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PARAMETROS_SAPS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PARAMETROS_SAPFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PARAMETROS_SAPS
     * const pARAMETROS_SAPS = await prisma.pARAMETROS_SAP.findMany()
     * 
     * // Get first 10 PARAMETROS_SAPS
     * const pARAMETROS_SAPS = await prisma.pARAMETROS_SAP.findMany({ take: 10 })
     * 
     * // Only select the `ID_PARAMETRO`
     * const pARAMETROS_SAPWithID_PARAMETROOnly = await prisma.pARAMETROS_SAP.findMany({ select: { ID_PARAMETRO: true } })
     * 
     */
    findMany<T extends PARAMETROS_SAPFindManyArgs>(args?: SelectSubset<T, PARAMETROS_SAPFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PARAMETROS_SAPPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PARAMETROS_SAP.
     * @param {PARAMETROS_SAPCreateArgs} args - Arguments to create a PARAMETROS_SAP.
     * @example
     * // Create one PARAMETROS_SAP
     * const PARAMETROS_SAP = await prisma.pARAMETROS_SAP.create({
     *   data: {
     *     // ... data to create a PARAMETROS_SAP
     *   }
     * })
     * 
     */
    create<T extends PARAMETROS_SAPCreateArgs>(args: SelectSubset<T, PARAMETROS_SAPCreateArgs<ExtArgs>>): Prisma__PARAMETROS_SAPClient<$Result.GetResult<Prisma.$PARAMETROS_SAPPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PARAMETROS_SAPS.
     * @param {PARAMETROS_SAPCreateManyArgs} args - Arguments to create many PARAMETROS_SAPS.
     * @example
     * // Create many PARAMETROS_SAPS
     * const pARAMETROS_SAP = await prisma.pARAMETROS_SAP.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PARAMETROS_SAPCreateManyArgs>(args?: SelectSubset<T, PARAMETROS_SAPCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PARAMETROS_SAP.
     * @param {PARAMETROS_SAPDeleteArgs} args - Arguments to delete one PARAMETROS_SAP.
     * @example
     * // Delete one PARAMETROS_SAP
     * const PARAMETROS_SAP = await prisma.pARAMETROS_SAP.delete({
     *   where: {
     *     // ... filter to delete one PARAMETROS_SAP
     *   }
     * })
     * 
     */
    delete<T extends PARAMETROS_SAPDeleteArgs>(args: SelectSubset<T, PARAMETROS_SAPDeleteArgs<ExtArgs>>): Prisma__PARAMETROS_SAPClient<$Result.GetResult<Prisma.$PARAMETROS_SAPPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PARAMETROS_SAP.
     * @param {PARAMETROS_SAPUpdateArgs} args - Arguments to update one PARAMETROS_SAP.
     * @example
     * // Update one PARAMETROS_SAP
     * const pARAMETROS_SAP = await prisma.pARAMETROS_SAP.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PARAMETROS_SAPUpdateArgs>(args: SelectSubset<T, PARAMETROS_SAPUpdateArgs<ExtArgs>>): Prisma__PARAMETROS_SAPClient<$Result.GetResult<Prisma.$PARAMETROS_SAPPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PARAMETROS_SAPS.
     * @param {PARAMETROS_SAPDeleteManyArgs} args - Arguments to filter PARAMETROS_SAPS to delete.
     * @example
     * // Delete a few PARAMETROS_SAPS
     * const { count } = await prisma.pARAMETROS_SAP.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PARAMETROS_SAPDeleteManyArgs>(args?: SelectSubset<T, PARAMETROS_SAPDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PARAMETROS_SAPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PARAMETROS_SAPUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PARAMETROS_SAPS
     * const pARAMETROS_SAP = await prisma.pARAMETROS_SAP.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PARAMETROS_SAPUpdateManyArgs>(args: SelectSubset<T, PARAMETROS_SAPUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PARAMETROS_SAP.
     * @param {PARAMETROS_SAPUpsertArgs} args - Arguments to update or create a PARAMETROS_SAP.
     * @example
     * // Update or create a PARAMETROS_SAP
     * const pARAMETROS_SAP = await prisma.pARAMETROS_SAP.upsert({
     *   create: {
     *     // ... data to create a PARAMETROS_SAP
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PARAMETROS_SAP we want to update
     *   }
     * })
     */
    upsert<T extends PARAMETROS_SAPUpsertArgs>(args: SelectSubset<T, PARAMETROS_SAPUpsertArgs<ExtArgs>>): Prisma__PARAMETROS_SAPClient<$Result.GetResult<Prisma.$PARAMETROS_SAPPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PARAMETROS_SAPS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PARAMETROS_SAPCountArgs} args - Arguments to filter PARAMETROS_SAPS to count.
     * @example
     * // Count the number of PARAMETROS_SAPS
     * const count = await prisma.pARAMETROS_SAP.count({
     *   where: {
     *     // ... the filter for the PARAMETROS_SAPS we want to count
     *   }
     * })
    **/
    count<T extends PARAMETROS_SAPCountArgs>(
      args?: Subset<T, PARAMETROS_SAPCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PARAMETROS_SAPCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PARAMETROS_SAP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PARAMETROS_SAPAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PARAMETROS_SAPAggregateArgs>(args: Subset<T, PARAMETROS_SAPAggregateArgs>): Prisma.PrismaPromise<GetPARAMETROS_SAPAggregateType<T>>

    /**
     * Group by PARAMETROS_SAP.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PARAMETROS_SAPGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PARAMETROS_SAPGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PARAMETROS_SAPGroupByArgs['orderBy'] }
        : { orderBy?: PARAMETROS_SAPGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PARAMETROS_SAPGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPARAMETROS_SAPGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PARAMETROS_SAP model
   */
  readonly fields: PARAMETROS_SAPFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PARAMETROS_SAP.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PARAMETROS_SAPClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PARAMETROS_SAP model
   */ 
  interface PARAMETROS_SAPFieldRefs {
    readonly ID_PARAMETRO: FieldRef<"PARAMETROS_SAP", 'Int'>
    readonly DESCRICAO: FieldRef<"PARAMETROS_SAP", 'String'>
    readonly PARAMETRO: FieldRef<"PARAMETROS_SAP", 'String'>
    readonly TIPO: FieldRef<"PARAMETROS_SAP", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PARAMETROS_SAP findUnique
   */
  export type PARAMETROS_SAPFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PARAMETROS_SAP
     */
    select?: PARAMETROS_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PARAMETROS_SAP
     */
    omit?: PARAMETROS_SAPOmit<ExtArgs> | null
    /**
     * Filter, which PARAMETROS_SAP to fetch.
     */
    where: PARAMETROS_SAPWhereUniqueInput
  }

  /**
   * PARAMETROS_SAP findUniqueOrThrow
   */
  export type PARAMETROS_SAPFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PARAMETROS_SAP
     */
    select?: PARAMETROS_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PARAMETROS_SAP
     */
    omit?: PARAMETROS_SAPOmit<ExtArgs> | null
    /**
     * Filter, which PARAMETROS_SAP to fetch.
     */
    where: PARAMETROS_SAPWhereUniqueInput
  }

  /**
   * PARAMETROS_SAP findFirst
   */
  export type PARAMETROS_SAPFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PARAMETROS_SAP
     */
    select?: PARAMETROS_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PARAMETROS_SAP
     */
    omit?: PARAMETROS_SAPOmit<ExtArgs> | null
    /**
     * Filter, which PARAMETROS_SAP to fetch.
     */
    where?: PARAMETROS_SAPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PARAMETROS_SAPS to fetch.
     */
    orderBy?: PARAMETROS_SAPOrderByWithRelationInput | PARAMETROS_SAPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PARAMETROS_SAPS.
     */
    cursor?: PARAMETROS_SAPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PARAMETROS_SAPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PARAMETROS_SAPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PARAMETROS_SAPS.
     */
    distinct?: PARAMETROS_SAPScalarFieldEnum | PARAMETROS_SAPScalarFieldEnum[]
  }

  /**
   * PARAMETROS_SAP findFirstOrThrow
   */
  export type PARAMETROS_SAPFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PARAMETROS_SAP
     */
    select?: PARAMETROS_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PARAMETROS_SAP
     */
    omit?: PARAMETROS_SAPOmit<ExtArgs> | null
    /**
     * Filter, which PARAMETROS_SAP to fetch.
     */
    where?: PARAMETROS_SAPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PARAMETROS_SAPS to fetch.
     */
    orderBy?: PARAMETROS_SAPOrderByWithRelationInput | PARAMETROS_SAPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PARAMETROS_SAPS.
     */
    cursor?: PARAMETROS_SAPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PARAMETROS_SAPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PARAMETROS_SAPS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PARAMETROS_SAPS.
     */
    distinct?: PARAMETROS_SAPScalarFieldEnum | PARAMETROS_SAPScalarFieldEnum[]
  }

  /**
   * PARAMETROS_SAP findMany
   */
  export type PARAMETROS_SAPFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PARAMETROS_SAP
     */
    select?: PARAMETROS_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PARAMETROS_SAP
     */
    omit?: PARAMETROS_SAPOmit<ExtArgs> | null
    /**
     * Filter, which PARAMETROS_SAPS to fetch.
     */
    where?: PARAMETROS_SAPWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PARAMETROS_SAPS to fetch.
     */
    orderBy?: PARAMETROS_SAPOrderByWithRelationInput | PARAMETROS_SAPOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PARAMETROS_SAPS.
     */
    cursor?: PARAMETROS_SAPWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PARAMETROS_SAPS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PARAMETROS_SAPS.
     */
    skip?: number
    distinct?: PARAMETROS_SAPScalarFieldEnum | PARAMETROS_SAPScalarFieldEnum[]
  }

  /**
   * PARAMETROS_SAP create
   */
  export type PARAMETROS_SAPCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PARAMETROS_SAP
     */
    select?: PARAMETROS_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PARAMETROS_SAP
     */
    omit?: PARAMETROS_SAPOmit<ExtArgs> | null
    /**
     * The data needed to create a PARAMETROS_SAP.
     */
    data?: XOR<PARAMETROS_SAPCreateInput, PARAMETROS_SAPUncheckedCreateInput>
  }

  /**
   * PARAMETROS_SAP createMany
   */
  export type PARAMETROS_SAPCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PARAMETROS_SAPS.
     */
    data: PARAMETROS_SAPCreateManyInput | PARAMETROS_SAPCreateManyInput[]
  }

  /**
   * PARAMETROS_SAP update
   */
  export type PARAMETROS_SAPUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PARAMETROS_SAP
     */
    select?: PARAMETROS_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PARAMETROS_SAP
     */
    omit?: PARAMETROS_SAPOmit<ExtArgs> | null
    /**
     * The data needed to update a PARAMETROS_SAP.
     */
    data: XOR<PARAMETROS_SAPUpdateInput, PARAMETROS_SAPUncheckedUpdateInput>
    /**
     * Choose, which PARAMETROS_SAP to update.
     */
    where: PARAMETROS_SAPWhereUniqueInput
  }

  /**
   * PARAMETROS_SAP updateMany
   */
  export type PARAMETROS_SAPUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PARAMETROS_SAPS.
     */
    data: XOR<PARAMETROS_SAPUpdateManyMutationInput, PARAMETROS_SAPUncheckedUpdateManyInput>
    /**
     * Filter which PARAMETROS_SAPS to update
     */
    where?: PARAMETROS_SAPWhereInput
    /**
     * Limit how many PARAMETROS_SAPS to update.
     */
    limit?: number
  }

  /**
   * PARAMETROS_SAP upsert
   */
  export type PARAMETROS_SAPUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PARAMETROS_SAP
     */
    select?: PARAMETROS_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PARAMETROS_SAP
     */
    omit?: PARAMETROS_SAPOmit<ExtArgs> | null
    /**
     * The filter to search for the PARAMETROS_SAP to update in case it exists.
     */
    where: PARAMETROS_SAPWhereUniqueInput
    /**
     * In case the PARAMETROS_SAP found by the `where` argument doesn't exist, create a new PARAMETROS_SAP with this data.
     */
    create: XOR<PARAMETROS_SAPCreateInput, PARAMETROS_SAPUncheckedCreateInput>
    /**
     * In case the PARAMETROS_SAP was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PARAMETROS_SAPUpdateInput, PARAMETROS_SAPUncheckedUpdateInput>
  }

  /**
   * PARAMETROS_SAP delete
   */
  export type PARAMETROS_SAPDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PARAMETROS_SAP
     */
    select?: PARAMETROS_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PARAMETROS_SAP
     */
    omit?: PARAMETROS_SAPOmit<ExtArgs> | null
    /**
     * Filter which PARAMETROS_SAP to delete.
     */
    where: PARAMETROS_SAPWhereUniqueInput
  }

  /**
   * PARAMETROS_SAP deleteMany
   */
  export type PARAMETROS_SAPDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PARAMETROS_SAPS to delete
     */
    where?: PARAMETROS_SAPWhereInput
    /**
     * Limit how many PARAMETROS_SAPS to delete.
     */
    limit?: number
  }

  /**
   * PARAMETROS_SAP without action
   */
  export type PARAMETROS_SAPDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PARAMETROS_SAP
     */
    select?: PARAMETROS_SAPSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PARAMETROS_SAP
     */
    omit?: PARAMETROS_SAPOmit<ExtArgs> | null
  }


  /**
   * Model PEDIDO_CONTROLE
   */

  export type AggregatePEDIDO_CONTROLE = {
    _count: PEDIDO_CONTROLECountAggregateOutputType | null
    _avg: PEDIDO_CONTROLEAvgAggregateOutputType | null
    _sum: PEDIDO_CONTROLESumAggregateOutputType | null
    _min: PEDIDO_CONTROLEMinAggregateOutputType | null
    _max: PEDIDO_CONTROLEMaxAggregateOutputType | null
  }

  export type PEDIDO_CONTROLEAvgAggregateOutputType = {
    NUM_PEDIDO: number | null
    LOJA: number | null
    NUM_PDV: number | null
    SITUACAO: number | null
  }

  export type PEDIDO_CONTROLESumAggregateOutputType = {
    NUM_PEDIDO: bigint | null
    LOJA: number | null
    NUM_PDV: number | null
    SITUACAO: number | null
  }

  export type PEDIDO_CONTROLEMinAggregateOutputType = {
    NUM_PEDIDO: bigint | null
    LOJA: number | null
    NUM_PDV: number | null
    SITUACAO: number | null
  }

  export type PEDIDO_CONTROLEMaxAggregateOutputType = {
    NUM_PEDIDO: bigint | null
    LOJA: number | null
    NUM_PDV: number | null
    SITUACAO: number | null
  }

  export type PEDIDO_CONTROLECountAggregateOutputType = {
    NUM_PEDIDO: number
    LOJA: number
    NUM_PDV: number
    SITUACAO: number
    _all: number
  }


  export type PEDIDO_CONTROLEAvgAggregateInputType = {
    NUM_PEDIDO?: true
    LOJA?: true
    NUM_PDV?: true
    SITUACAO?: true
  }

  export type PEDIDO_CONTROLESumAggregateInputType = {
    NUM_PEDIDO?: true
    LOJA?: true
    NUM_PDV?: true
    SITUACAO?: true
  }

  export type PEDIDO_CONTROLEMinAggregateInputType = {
    NUM_PEDIDO?: true
    LOJA?: true
    NUM_PDV?: true
    SITUACAO?: true
  }

  export type PEDIDO_CONTROLEMaxAggregateInputType = {
    NUM_PEDIDO?: true
    LOJA?: true
    NUM_PDV?: true
    SITUACAO?: true
  }

  export type PEDIDO_CONTROLECountAggregateInputType = {
    NUM_PEDIDO?: true
    LOJA?: true
    NUM_PDV?: true
    SITUACAO?: true
    _all?: true
  }

  export type PEDIDO_CONTROLEAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PEDIDO_CONTROLE to aggregate.
     */
    where?: PEDIDO_CONTROLEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PEDIDO_CONTROLES to fetch.
     */
    orderBy?: PEDIDO_CONTROLEOrderByWithRelationInput | PEDIDO_CONTROLEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PEDIDO_CONTROLEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PEDIDO_CONTROLES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PEDIDO_CONTROLES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PEDIDO_CONTROLES
    **/
    _count?: true | PEDIDO_CONTROLECountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PEDIDO_CONTROLEAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PEDIDO_CONTROLESumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PEDIDO_CONTROLEMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PEDIDO_CONTROLEMaxAggregateInputType
  }

  export type GetPEDIDO_CONTROLEAggregateType<T extends PEDIDO_CONTROLEAggregateArgs> = {
        [P in keyof T & keyof AggregatePEDIDO_CONTROLE]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePEDIDO_CONTROLE[P]>
      : GetScalarType<T[P], AggregatePEDIDO_CONTROLE[P]>
  }




  export type PEDIDO_CONTROLEGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PEDIDO_CONTROLEWhereInput
    orderBy?: PEDIDO_CONTROLEOrderByWithAggregationInput | PEDIDO_CONTROLEOrderByWithAggregationInput[]
    by: PEDIDO_CONTROLEScalarFieldEnum[] | PEDIDO_CONTROLEScalarFieldEnum
    having?: PEDIDO_CONTROLEScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PEDIDO_CONTROLECountAggregateInputType | true
    _avg?: PEDIDO_CONTROLEAvgAggregateInputType
    _sum?: PEDIDO_CONTROLESumAggregateInputType
    _min?: PEDIDO_CONTROLEMinAggregateInputType
    _max?: PEDIDO_CONTROLEMaxAggregateInputType
  }

  export type PEDIDO_CONTROLEGroupByOutputType = {
    NUM_PEDIDO: bigint
    LOJA: number | null
    NUM_PDV: number | null
    SITUACAO: number | null
    _count: PEDIDO_CONTROLECountAggregateOutputType | null
    _avg: PEDIDO_CONTROLEAvgAggregateOutputType | null
    _sum: PEDIDO_CONTROLESumAggregateOutputType | null
    _min: PEDIDO_CONTROLEMinAggregateOutputType | null
    _max: PEDIDO_CONTROLEMaxAggregateOutputType | null
  }

  type GetPEDIDO_CONTROLEGroupByPayload<T extends PEDIDO_CONTROLEGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PEDIDO_CONTROLEGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PEDIDO_CONTROLEGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PEDIDO_CONTROLEGroupByOutputType[P]>
            : GetScalarType<T[P], PEDIDO_CONTROLEGroupByOutputType[P]>
        }
      >
    >


  export type PEDIDO_CONTROLESelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    NUM_PEDIDO?: boolean
    LOJA?: boolean
    NUM_PDV?: boolean
    SITUACAO?: boolean
  }, ExtArgs["result"]["pEDIDO_CONTROLE"]>



  export type PEDIDO_CONTROLESelectScalar = {
    NUM_PEDIDO?: boolean
    LOJA?: boolean
    NUM_PDV?: boolean
    SITUACAO?: boolean
  }

  export type PEDIDO_CONTROLEOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"NUM_PEDIDO" | "LOJA" | "NUM_PDV" | "SITUACAO", ExtArgs["result"]["pEDIDO_CONTROLE"]>

  export type $PEDIDO_CONTROLEPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PEDIDO_CONTROLE"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      NUM_PEDIDO: bigint
      LOJA: number | null
      NUM_PDV: number | null
      SITUACAO: number | null
    }, ExtArgs["result"]["pEDIDO_CONTROLE"]>
    composites: {}
  }

  type PEDIDO_CONTROLEGetPayload<S extends boolean | null | undefined | PEDIDO_CONTROLEDefaultArgs> = $Result.GetResult<Prisma.$PEDIDO_CONTROLEPayload, S>

  type PEDIDO_CONTROLECountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PEDIDO_CONTROLEFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PEDIDO_CONTROLECountAggregateInputType | true
    }

  export interface PEDIDO_CONTROLEDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PEDIDO_CONTROLE'], meta: { name: 'PEDIDO_CONTROLE' } }
    /**
     * Find zero or one PEDIDO_CONTROLE that matches the filter.
     * @param {PEDIDO_CONTROLEFindUniqueArgs} args - Arguments to find a PEDIDO_CONTROLE
     * @example
     * // Get one PEDIDO_CONTROLE
     * const pEDIDO_CONTROLE = await prisma.pEDIDO_CONTROLE.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PEDIDO_CONTROLEFindUniqueArgs>(args: SelectSubset<T, PEDIDO_CONTROLEFindUniqueArgs<ExtArgs>>): Prisma__PEDIDO_CONTROLEClient<$Result.GetResult<Prisma.$PEDIDO_CONTROLEPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PEDIDO_CONTROLE that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PEDIDO_CONTROLEFindUniqueOrThrowArgs} args - Arguments to find a PEDIDO_CONTROLE
     * @example
     * // Get one PEDIDO_CONTROLE
     * const pEDIDO_CONTROLE = await prisma.pEDIDO_CONTROLE.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PEDIDO_CONTROLEFindUniqueOrThrowArgs>(args: SelectSubset<T, PEDIDO_CONTROLEFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PEDIDO_CONTROLEClient<$Result.GetResult<Prisma.$PEDIDO_CONTROLEPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PEDIDO_CONTROLE that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PEDIDO_CONTROLEFindFirstArgs} args - Arguments to find a PEDIDO_CONTROLE
     * @example
     * // Get one PEDIDO_CONTROLE
     * const pEDIDO_CONTROLE = await prisma.pEDIDO_CONTROLE.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PEDIDO_CONTROLEFindFirstArgs>(args?: SelectSubset<T, PEDIDO_CONTROLEFindFirstArgs<ExtArgs>>): Prisma__PEDIDO_CONTROLEClient<$Result.GetResult<Prisma.$PEDIDO_CONTROLEPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PEDIDO_CONTROLE that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PEDIDO_CONTROLEFindFirstOrThrowArgs} args - Arguments to find a PEDIDO_CONTROLE
     * @example
     * // Get one PEDIDO_CONTROLE
     * const pEDIDO_CONTROLE = await prisma.pEDIDO_CONTROLE.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PEDIDO_CONTROLEFindFirstOrThrowArgs>(args?: SelectSubset<T, PEDIDO_CONTROLEFindFirstOrThrowArgs<ExtArgs>>): Prisma__PEDIDO_CONTROLEClient<$Result.GetResult<Prisma.$PEDIDO_CONTROLEPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PEDIDO_CONTROLES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PEDIDO_CONTROLEFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PEDIDO_CONTROLES
     * const pEDIDO_CONTROLES = await prisma.pEDIDO_CONTROLE.findMany()
     * 
     * // Get first 10 PEDIDO_CONTROLES
     * const pEDIDO_CONTROLES = await prisma.pEDIDO_CONTROLE.findMany({ take: 10 })
     * 
     * // Only select the `NUM_PEDIDO`
     * const pEDIDO_CONTROLEWithNUM_PEDIDOOnly = await prisma.pEDIDO_CONTROLE.findMany({ select: { NUM_PEDIDO: true } })
     * 
     */
    findMany<T extends PEDIDO_CONTROLEFindManyArgs>(args?: SelectSubset<T, PEDIDO_CONTROLEFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PEDIDO_CONTROLEPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PEDIDO_CONTROLE.
     * @param {PEDIDO_CONTROLECreateArgs} args - Arguments to create a PEDIDO_CONTROLE.
     * @example
     * // Create one PEDIDO_CONTROLE
     * const PEDIDO_CONTROLE = await prisma.pEDIDO_CONTROLE.create({
     *   data: {
     *     // ... data to create a PEDIDO_CONTROLE
     *   }
     * })
     * 
     */
    create<T extends PEDIDO_CONTROLECreateArgs>(args: SelectSubset<T, PEDIDO_CONTROLECreateArgs<ExtArgs>>): Prisma__PEDIDO_CONTROLEClient<$Result.GetResult<Prisma.$PEDIDO_CONTROLEPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PEDIDO_CONTROLES.
     * @param {PEDIDO_CONTROLECreateManyArgs} args - Arguments to create many PEDIDO_CONTROLES.
     * @example
     * // Create many PEDIDO_CONTROLES
     * const pEDIDO_CONTROLE = await prisma.pEDIDO_CONTROLE.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PEDIDO_CONTROLECreateManyArgs>(args?: SelectSubset<T, PEDIDO_CONTROLECreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PEDIDO_CONTROLE.
     * @param {PEDIDO_CONTROLEDeleteArgs} args - Arguments to delete one PEDIDO_CONTROLE.
     * @example
     * // Delete one PEDIDO_CONTROLE
     * const PEDIDO_CONTROLE = await prisma.pEDIDO_CONTROLE.delete({
     *   where: {
     *     // ... filter to delete one PEDIDO_CONTROLE
     *   }
     * })
     * 
     */
    delete<T extends PEDIDO_CONTROLEDeleteArgs>(args: SelectSubset<T, PEDIDO_CONTROLEDeleteArgs<ExtArgs>>): Prisma__PEDIDO_CONTROLEClient<$Result.GetResult<Prisma.$PEDIDO_CONTROLEPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PEDIDO_CONTROLE.
     * @param {PEDIDO_CONTROLEUpdateArgs} args - Arguments to update one PEDIDO_CONTROLE.
     * @example
     * // Update one PEDIDO_CONTROLE
     * const pEDIDO_CONTROLE = await prisma.pEDIDO_CONTROLE.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PEDIDO_CONTROLEUpdateArgs>(args: SelectSubset<T, PEDIDO_CONTROLEUpdateArgs<ExtArgs>>): Prisma__PEDIDO_CONTROLEClient<$Result.GetResult<Prisma.$PEDIDO_CONTROLEPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PEDIDO_CONTROLES.
     * @param {PEDIDO_CONTROLEDeleteManyArgs} args - Arguments to filter PEDIDO_CONTROLES to delete.
     * @example
     * // Delete a few PEDIDO_CONTROLES
     * const { count } = await prisma.pEDIDO_CONTROLE.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PEDIDO_CONTROLEDeleteManyArgs>(args?: SelectSubset<T, PEDIDO_CONTROLEDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PEDIDO_CONTROLES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PEDIDO_CONTROLEUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PEDIDO_CONTROLES
     * const pEDIDO_CONTROLE = await prisma.pEDIDO_CONTROLE.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PEDIDO_CONTROLEUpdateManyArgs>(args: SelectSubset<T, PEDIDO_CONTROLEUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PEDIDO_CONTROLE.
     * @param {PEDIDO_CONTROLEUpsertArgs} args - Arguments to update or create a PEDIDO_CONTROLE.
     * @example
     * // Update or create a PEDIDO_CONTROLE
     * const pEDIDO_CONTROLE = await prisma.pEDIDO_CONTROLE.upsert({
     *   create: {
     *     // ... data to create a PEDIDO_CONTROLE
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PEDIDO_CONTROLE we want to update
     *   }
     * })
     */
    upsert<T extends PEDIDO_CONTROLEUpsertArgs>(args: SelectSubset<T, PEDIDO_CONTROLEUpsertArgs<ExtArgs>>): Prisma__PEDIDO_CONTROLEClient<$Result.GetResult<Prisma.$PEDIDO_CONTROLEPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PEDIDO_CONTROLES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PEDIDO_CONTROLECountArgs} args - Arguments to filter PEDIDO_CONTROLES to count.
     * @example
     * // Count the number of PEDIDO_CONTROLES
     * const count = await prisma.pEDIDO_CONTROLE.count({
     *   where: {
     *     // ... the filter for the PEDIDO_CONTROLES we want to count
     *   }
     * })
    **/
    count<T extends PEDIDO_CONTROLECountArgs>(
      args?: Subset<T, PEDIDO_CONTROLECountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PEDIDO_CONTROLECountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PEDIDO_CONTROLE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PEDIDO_CONTROLEAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PEDIDO_CONTROLEAggregateArgs>(args: Subset<T, PEDIDO_CONTROLEAggregateArgs>): Prisma.PrismaPromise<GetPEDIDO_CONTROLEAggregateType<T>>

    /**
     * Group by PEDIDO_CONTROLE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PEDIDO_CONTROLEGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PEDIDO_CONTROLEGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PEDIDO_CONTROLEGroupByArgs['orderBy'] }
        : { orderBy?: PEDIDO_CONTROLEGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PEDIDO_CONTROLEGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPEDIDO_CONTROLEGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PEDIDO_CONTROLE model
   */
  readonly fields: PEDIDO_CONTROLEFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PEDIDO_CONTROLE.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PEDIDO_CONTROLEClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PEDIDO_CONTROLE model
   */ 
  interface PEDIDO_CONTROLEFieldRefs {
    readonly NUM_PEDIDO: FieldRef<"PEDIDO_CONTROLE", 'BigInt'>
    readonly LOJA: FieldRef<"PEDIDO_CONTROLE", 'Int'>
    readonly NUM_PDV: FieldRef<"PEDIDO_CONTROLE", 'Int'>
    readonly SITUACAO: FieldRef<"PEDIDO_CONTROLE", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PEDIDO_CONTROLE findUnique
   */
  export type PEDIDO_CONTROLEFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PEDIDO_CONTROLE
     */
    select?: PEDIDO_CONTROLESelect<ExtArgs> | null
    /**
     * Omit specific fields from the PEDIDO_CONTROLE
     */
    omit?: PEDIDO_CONTROLEOmit<ExtArgs> | null
    /**
     * Filter, which PEDIDO_CONTROLE to fetch.
     */
    where: PEDIDO_CONTROLEWhereUniqueInput
  }

  /**
   * PEDIDO_CONTROLE findUniqueOrThrow
   */
  export type PEDIDO_CONTROLEFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PEDIDO_CONTROLE
     */
    select?: PEDIDO_CONTROLESelect<ExtArgs> | null
    /**
     * Omit specific fields from the PEDIDO_CONTROLE
     */
    omit?: PEDIDO_CONTROLEOmit<ExtArgs> | null
    /**
     * Filter, which PEDIDO_CONTROLE to fetch.
     */
    where: PEDIDO_CONTROLEWhereUniqueInput
  }

  /**
   * PEDIDO_CONTROLE findFirst
   */
  export type PEDIDO_CONTROLEFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PEDIDO_CONTROLE
     */
    select?: PEDIDO_CONTROLESelect<ExtArgs> | null
    /**
     * Omit specific fields from the PEDIDO_CONTROLE
     */
    omit?: PEDIDO_CONTROLEOmit<ExtArgs> | null
    /**
     * Filter, which PEDIDO_CONTROLE to fetch.
     */
    where?: PEDIDO_CONTROLEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PEDIDO_CONTROLES to fetch.
     */
    orderBy?: PEDIDO_CONTROLEOrderByWithRelationInput | PEDIDO_CONTROLEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PEDIDO_CONTROLES.
     */
    cursor?: PEDIDO_CONTROLEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PEDIDO_CONTROLES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PEDIDO_CONTROLES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PEDIDO_CONTROLES.
     */
    distinct?: PEDIDO_CONTROLEScalarFieldEnum | PEDIDO_CONTROLEScalarFieldEnum[]
  }

  /**
   * PEDIDO_CONTROLE findFirstOrThrow
   */
  export type PEDIDO_CONTROLEFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PEDIDO_CONTROLE
     */
    select?: PEDIDO_CONTROLESelect<ExtArgs> | null
    /**
     * Omit specific fields from the PEDIDO_CONTROLE
     */
    omit?: PEDIDO_CONTROLEOmit<ExtArgs> | null
    /**
     * Filter, which PEDIDO_CONTROLE to fetch.
     */
    where?: PEDIDO_CONTROLEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PEDIDO_CONTROLES to fetch.
     */
    orderBy?: PEDIDO_CONTROLEOrderByWithRelationInput | PEDIDO_CONTROLEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PEDIDO_CONTROLES.
     */
    cursor?: PEDIDO_CONTROLEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PEDIDO_CONTROLES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PEDIDO_CONTROLES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PEDIDO_CONTROLES.
     */
    distinct?: PEDIDO_CONTROLEScalarFieldEnum | PEDIDO_CONTROLEScalarFieldEnum[]
  }

  /**
   * PEDIDO_CONTROLE findMany
   */
  export type PEDIDO_CONTROLEFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PEDIDO_CONTROLE
     */
    select?: PEDIDO_CONTROLESelect<ExtArgs> | null
    /**
     * Omit specific fields from the PEDIDO_CONTROLE
     */
    omit?: PEDIDO_CONTROLEOmit<ExtArgs> | null
    /**
     * Filter, which PEDIDO_CONTROLES to fetch.
     */
    where?: PEDIDO_CONTROLEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PEDIDO_CONTROLES to fetch.
     */
    orderBy?: PEDIDO_CONTROLEOrderByWithRelationInput | PEDIDO_CONTROLEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PEDIDO_CONTROLES.
     */
    cursor?: PEDIDO_CONTROLEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PEDIDO_CONTROLES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PEDIDO_CONTROLES.
     */
    skip?: number
    distinct?: PEDIDO_CONTROLEScalarFieldEnum | PEDIDO_CONTROLEScalarFieldEnum[]
  }

  /**
   * PEDIDO_CONTROLE create
   */
  export type PEDIDO_CONTROLECreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PEDIDO_CONTROLE
     */
    select?: PEDIDO_CONTROLESelect<ExtArgs> | null
    /**
     * Omit specific fields from the PEDIDO_CONTROLE
     */
    omit?: PEDIDO_CONTROLEOmit<ExtArgs> | null
    /**
     * The data needed to create a PEDIDO_CONTROLE.
     */
    data?: XOR<PEDIDO_CONTROLECreateInput, PEDIDO_CONTROLEUncheckedCreateInput>
  }

  /**
   * PEDIDO_CONTROLE createMany
   */
  export type PEDIDO_CONTROLECreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PEDIDO_CONTROLES.
     */
    data: PEDIDO_CONTROLECreateManyInput | PEDIDO_CONTROLECreateManyInput[]
  }

  /**
   * PEDIDO_CONTROLE update
   */
  export type PEDIDO_CONTROLEUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PEDIDO_CONTROLE
     */
    select?: PEDIDO_CONTROLESelect<ExtArgs> | null
    /**
     * Omit specific fields from the PEDIDO_CONTROLE
     */
    omit?: PEDIDO_CONTROLEOmit<ExtArgs> | null
    /**
     * The data needed to update a PEDIDO_CONTROLE.
     */
    data: XOR<PEDIDO_CONTROLEUpdateInput, PEDIDO_CONTROLEUncheckedUpdateInput>
    /**
     * Choose, which PEDIDO_CONTROLE to update.
     */
    where: PEDIDO_CONTROLEWhereUniqueInput
  }

  /**
   * PEDIDO_CONTROLE updateMany
   */
  export type PEDIDO_CONTROLEUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PEDIDO_CONTROLES.
     */
    data: XOR<PEDIDO_CONTROLEUpdateManyMutationInput, PEDIDO_CONTROLEUncheckedUpdateManyInput>
    /**
     * Filter which PEDIDO_CONTROLES to update
     */
    where?: PEDIDO_CONTROLEWhereInput
    /**
     * Limit how many PEDIDO_CONTROLES to update.
     */
    limit?: number
  }

  /**
   * PEDIDO_CONTROLE upsert
   */
  export type PEDIDO_CONTROLEUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PEDIDO_CONTROLE
     */
    select?: PEDIDO_CONTROLESelect<ExtArgs> | null
    /**
     * Omit specific fields from the PEDIDO_CONTROLE
     */
    omit?: PEDIDO_CONTROLEOmit<ExtArgs> | null
    /**
     * The filter to search for the PEDIDO_CONTROLE to update in case it exists.
     */
    where: PEDIDO_CONTROLEWhereUniqueInput
    /**
     * In case the PEDIDO_CONTROLE found by the `where` argument doesn't exist, create a new PEDIDO_CONTROLE with this data.
     */
    create: XOR<PEDIDO_CONTROLECreateInput, PEDIDO_CONTROLEUncheckedCreateInput>
    /**
     * In case the PEDIDO_CONTROLE was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PEDIDO_CONTROLEUpdateInput, PEDIDO_CONTROLEUncheckedUpdateInput>
  }

  /**
   * PEDIDO_CONTROLE delete
   */
  export type PEDIDO_CONTROLEDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PEDIDO_CONTROLE
     */
    select?: PEDIDO_CONTROLESelect<ExtArgs> | null
    /**
     * Omit specific fields from the PEDIDO_CONTROLE
     */
    omit?: PEDIDO_CONTROLEOmit<ExtArgs> | null
    /**
     * Filter which PEDIDO_CONTROLE to delete.
     */
    where: PEDIDO_CONTROLEWhereUniqueInput
  }

  /**
   * PEDIDO_CONTROLE deleteMany
   */
  export type PEDIDO_CONTROLEDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PEDIDO_CONTROLES to delete
     */
    where?: PEDIDO_CONTROLEWhereInput
    /**
     * Limit how many PEDIDO_CONTROLES to delete.
     */
    limit?: number
  }

  /**
   * PEDIDO_CONTROLE without action
   */
  export type PEDIDO_CONTROLEDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PEDIDO_CONTROLE
     */
    select?: PEDIDO_CONTROLESelect<ExtArgs> | null
    /**
     * Omit specific fields from the PEDIDO_CONTROLE
     */
    omit?: PEDIDO_CONTROLEOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CLIENTE_ESTADO_SAPScalarFieldEnum: {
    CODIGO: 'CODIGO',
    ESTADO: 'ESTADO',
    CODIGOINTEGRACAO: 'CODIGOINTEGRACAO',
    DATAALTERACAO: 'DATAALTERACAO'
  };

  export type CLIENTE_ESTADO_SAPScalarFieldEnum = (typeof CLIENTE_ESTADO_SAPScalarFieldEnum)[keyof typeof CLIENTE_ESTADO_SAPScalarFieldEnum]


  export const CONTROLE_IMPPRODUTOSScalarFieldEnum: {
    DATA_IMPORTACAO: 'DATA_IMPORTACAO',
    DATA_CUSTO: 'DATA_CUSTO'
  };

  export type CONTROLE_IMPPRODUTOSScalarFieldEnum = (typeof CONTROLE_IMPPRODUTOSScalarFieldEnum)[keyof typeof CONTROLE_IMPPRODUTOSScalarFieldEnum]


  export const DEVOLUCAOScalarFieldEnum: {
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

  export type DEVOLUCAOScalarFieldEnum = (typeof DEVOLUCAOScalarFieldEnum)[keyof typeof DEVOLUCAOScalarFieldEnum]


  export const EXPORTACAOScalarFieldEnum: {
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

  export type EXPORTACAOScalarFieldEnum = (typeof EXPORTACAOScalarFieldEnum)[keyof typeof EXPORTACAOScalarFieldEnum]


  export const FINALIZADORAS_SAPScalarFieldEnum: {
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

  export type FINALIZADORAS_SAPScalarFieldEnum = (typeof FINALIZADORAS_SAPScalarFieldEnum)[keyof typeof FINALIZADORAS_SAPScalarFieldEnum]


  export const MONITORAMENTOScalarFieldEnum: {
    THREAD: 'THREAD',
    DATA_LOG: 'DATA_LOG',
    DESCRICAO: 'DESCRICAO',
    STATUS: 'STATUS'
  };

  export type MONITORAMENTOScalarFieldEnum = (typeof MONITORAMENTOScalarFieldEnum)[keyof typeof MONITORAMENTOScalarFieldEnum]


  export const PARAMETROS_SAPScalarFieldEnum: {
    ID_PARAMETRO: 'ID_PARAMETRO',
    DESCRICAO: 'DESCRICAO',
    PARAMETRO: 'PARAMETRO',
    TIPO: 'TIPO'
  };

  export type PARAMETROS_SAPScalarFieldEnum = (typeof PARAMETROS_SAPScalarFieldEnum)[keyof typeof PARAMETROS_SAPScalarFieldEnum]


  export const PEDIDO_CONTROLEScalarFieldEnum: {
    NUM_PEDIDO: 'NUM_PEDIDO',
    LOJA: 'LOJA',
    NUM_PDV: 'NUM_PDV',
    SITUACAO: 'SITUACAO'
  };

  export type PEDIDO_CONTROLEScalarFieldEnum = (typeof PEDIDO_CONTROLEScalarFieldEnum)[keyof typeof PEDIDO_CONTROLEScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CLIENTE_ESTADO_SAPWhereInput = {
    AND?: CLIENTE_ESTADO_SAPWhereInput | CLIENTE_ESTADO_SAPWhereInput[]
    OR?: CLIENTE_ESTADO_SAPWhereInput[]
    NOT?: CLIENTE_ESTADO_SAPWhereInput | CLIENTE_ESTADO_SAPWhereInput[]
    CODIGO?: BigIntFilter<"CLIENTE_ESTADO_SAP"> | bigint | number
    ESTADO?: StringNullableFilter<"CLIENTE_ESTADO_SAP"> | string | null
    CODIGOINTEGRACAO?: StringNullableFilter<"CLIENTE_ESTADO_SAP"> | string | null
    DATAALTERACAO?: DateTimeNullableFilter<"CLIENTE_ESTADO_SAP"> | Date | string | null
  }

  export type CLIENTE_ESTADO_SAPOrderByWithRelationInput = {
    CODIGO?: SortOrder
    ESTADO?: SortOrderInput | SortOrder
    CODIGOINTEGRACAO?: SortOrderInput | SortOrder
    DATAALTERACAO?: SortOrderInput | SortOrder
  }

  export type CLIENTE_ESTADO_SAPWhereUniqueInput = Prisma.AtLeast<{
    CODIGO?: bigint | number
    AND?: CLIENTE_ESTADO_SAPWhereInput | CLIENTE_ESTADO_SAPWhereInput[]
    OR?: CLIENTE_ESTADO_SAPWhereInput[]
    NOT?: CLIENTE_ESTADO_SAPWhereInput | CLIENTE_ESTADO_SAPWhereInput[]
    ESTADO?: StringNullableFilter<"CLIENTE_ESTADO_SAP"> | string | null
    CODIGOINTEGRACAO?: StringNullableFilter<"CLIENTE_ESTADO_SAP"> | string | null
    DATAALTERACAO?: DateTimeNullableFilter<"CLIENTE_ESTADO_SAP"> | Date | string | null
  }, "CODIGO">

  export type CLIENTE_ESTADO_SAPOrderByWithAggregationInput = {
    CODIGO?: SortOrder
    ESTADO?: SortOrderInput | SortOrder
    CODIGOINTEGRACAO?: SortOrderInput | SortOrder
    DATAALTERACAO?: SortOrderInput | SortOrder
    _count?: CLIENTE_ESTADO_SAPCountOrderByAggregateInput
    _avg?: CLIENTE_ESTADO_SAPAvgOrderByAggregateInput
    _max?: CLIENTE_ESTADO_SAPMaxOrderByAggregateInput
    _min?: CLIENTE_ESTADO_SAPMinOrderByAggregateInput
    _sum?: CLIENTE_ESTADO_SAPSumOrderByAggregateInput
  }

  export type CLIENTE_ESTADO_SAPScalarWhereWithAggregatesInput = {
    AND?: CLIENTE_ESTADO_SAPScalarWhereWithAggregatesInput | CLIENTE_ESTADO_SAPScalarWhereWithAggregatesInput[]
    OR?: CLIENTE_ESTADO_SAPScalarWhereWithAggregatesInput[]
    NOT?: CLIENTE_ESTADO_SAPScalarWhereWithAggregatesInput | CLIENTE_ESTADO_SAPScalarWhereWithAggregatesInput[]
    CODIGO?: BigIntWithAggregatesFilter<"CLIENTE_ESTADO_SAP"> | bigint | number
    ESTADO?: StringNullableWithAggregatesFilter<"CLIENTE_ESTADO_SAP"> | string | null
    CODIGOINTEGRACAO?: StringNullableWithAggregatesFilter<"CLIENTE_ESTADO_SAP"> | string | null
    DATAALTERACAO?: DateTimeNullableWithAggregatesFilter<"CLIENTE_ESTADO_SAP"> | Date | string | null
  }

  export type CONTROLE_IMPPRODUTOSWhereInput = {
    AND?: CONTROLE_IMPPRODUTOSWhereInput | CONTROLE_IMPPRODUTOSWhereInput[]
    OR?: CONTROLE_IMPPRODUTOSWhereInput[]
    NOT?: CONTROLE_IMPPRODUTOSWhereInput | CONTROLE_IMPPRODUTOSWhereInput[]
    DATA_IMPORTACAO?: DateTimeFilter<"CONTROLE_IMPPRODUTOS"> | Date | string
    DATA_CUSTO?: DateTimeNullableFilter<"CONTROLE_IMPPRODUTOS"> | Date | string | null
  }

  export type CONTROLE_IMPPRODUTOSOrderByWithRelationInput = {
    DATA_IMPORTACAO?: SortOrder
    DATA_CUSTO?: SortOrderInput | SortOrder
  }

  export type CONTROLE_IMPPRODUTOSWhereUniqueInput = Prisma.AtLeast<{
    DATA_IMPORTACAO?: Date | string
    AND?: CONTROLE_IMPPRODUTOSWhereInput | CONTROLE_IMPPRODUTOSWhereInput[]
    OR?: CONTROLE_IMPPRODUTOSWhereInput[]
    NOT?: CONTROLE_IMPPRODUTOSWhereInput | CONTROLE_IMPPRODUTOSWhereInput[]
    DATA_CUSTO?: DateTimeNullableFilter<"CONTROLE_IMPPRODUTOS"> | Date | string | null
  }, "DATA_IMPORTACAO">

  export type CONTROLE_IMPPRODUTOSOrderByWithAggregationInput = {
    DATA_IMPORTACAO?: SortOrder
    DATA_CUSTO?: SortOrderInput | SortOrder
    _count?: CONTROLE_IMPPRODUTOSCountOrderByAggregateInput
    _max?: CONTROLE_IMPPRODUTOSMaxOrderByAggregateInput
    _min?: CONTROLE_IMPPRODUTOSMinOrderByAggregateInput
  }

  export type CONTROLE_IMPPRODUTOSScalarWhereWithAggregatesInput = {
    AND?: CONTROLE_IMPPRODUTOSScalarWhereWithAggregatesInput | CONTROLE_IMPPRODUTOSScalarWhereWithAggregatesInput[]
    OR?: CONTROLE_IMPPRODUTOSScalarWhereWithAggregatesInput[]
    NOT?: CONTROLE_IMPPRODUTOSScalarWhereWithAggregatesInput | CONTROLE_IMPPRODUTOSScalarWhereWithAggregatesInput[]
    DATA_IMPORTACAO?: DateTimeWithAggregatesFilter<"CONTROLE_IMPPRODUTOS"> | Date | string
    DATA_CUSTO?: DateTimeNullableWithAggregatesFilter<"CONTROLE_IMPPRODUTOS"> | Date | string | null
  }

  export type DEVOLUCAOWhereInput = {
    AND?: DEVOLUCAOWhereInput | DEVOLUCAOWhereInput[]
    OR?: DEVOLUCAOWhereInput[]
    NOT?: DEVOLUCAOWhereInput | DEVOLUCAOWhereInput[]
    LOJA?: IntNullableFilter<"DEVOLUCAO"> | number | null
    CODIGO?: BigIntFilter<"DEVOLUCAO"> | bigint | number
    VALORDEVOLUCAO?: FloatNullableFilter<"DEVOLUCAO"> | number | null
    SITUACAO?: IntNullableFilter<"DEVOLUCAO"> | number | null
    SITUACAO_DATA?: DateTimeNullableFilter<"DEVOLUCAO"> | Date | string | null
    SITUACAO_LOJA?: IntNullableFilter<"DEVOLUCAO"> | number | null
    SITUACAO_PDV?: IntNullableFilter<"DEVOLUCAO"> | number | null
    SITUACAO_COO?: IntNullableFilter<"DEVOLUCAO"> | number | null
    DATAINCLUSAO?: DateTimeNullableFilter<"DEVOLUCAO"> | Date | string | null
  }

  export type DEVOLUCAOOrderByWithRelationInput = {
    LOJA?: SortOrderInput | SortOrder
    CODIGO?: SortOrder
    VALORDEVOLUCAO?: SortOrderInput | SortOrder
    SITUACAO?: SortOrderInput | SortOrder
    SITUACAO_DATA?: SortOrderInput | SortOrder
    SITUACAO_LOJA?: SortOrderInput | SortOrder
    SITUACAO_PDV?: SortOrderInput | SortOrder
    SITUACAO_COO?: SortOrderInput | SortOrder
    DATAINCLUSAO?: SortOrderInput | SortOrder
  }

  export type DEVOLUCAOWhereUniqueInput = Prisma.AtLeast<{
    CODIGO?: bigint | number
    AND?: DEVOLUCAOWhereInput | DEVOLUCAOWhereInput[]
    OR?: DEVOLUCAOWhereInput[]
    NOT?: DEVOLUCAOWhereInput | DEVOLUCAOWhereInput[]
    LOJA?: IntNullableFilter<"DEVOLUCAO"> | number | null
    VALORDEVOLUCAO?: FloatNullableFilter<"DEVOLUCAO"> | number | null
    SITUACAO?: IntNullableFilter<"DEVOLUCAO"> | number | null
    SITUACAO_DATA?: DateTimeNullableFilter<"DEVOLUCAO"> | Date | string | null
    SITUACAO_LOJA?: IntNullableFilter<"DEVOLUCAO"> | number | null
    SITUACAO_PDV?: IntNullableFilter<"DEVOLUCAO"> | number | null
    SITUACAO_COO?: IntNullableFilter<"DEVOLUCAO"> | number | null
    DATAINCLUSAO?: DateTimeNullableFilter<"DEVOLUCAO"> | Date | string | null
  }, "CODIGO">

  export type DEVOLUCAOOrderByWithAggregationInput = {
    LOJA?: SortOrderInput | SortOrder
    CODIGO?: SortOrder
    VALORDEVOLUCAO?: SortOrderInput | SortOrder
    SITUACAO?: SortOrderInput | SortOrder
    SITUACAO_DATA?: SortOrderInput | SortOrder
    SITUACAO_LOJA?: SortOrderInput | SortOrder
    SITUACAO_PDV?: SortOrderInput | SortOrder
    SITUACAO_COO?: SortOrderInput | SortOrder
    DATAINCLUSAO?: SortOrderInput | SortOrder
    _count?: DEVOLUCAOCountOrderByAggregateInput
    _avg?: DEVOLUCAOAvgOrderByAggregateInput
    _max?: DEVOLUCAOMaxOrderByAggregateInput
    _min?: DEVOLUCAOMinOrderByAggregateInput
    _sum?: DEVOLUCAOSumOrderByAggregateInput
  }

  export type DEVOLUCAOScalarWhereWithAggregatesInput = {
    AND?: DEVOLUCAOScalarWhereWithAggregatesInput | DEVOLUCAOScalarWhereWithAggregatesInput[]
    OR?: DEVOLUCAOScalarWhereWithAggregatesInput[]
    NOT?: DEVOLUCAOScalarWhereWithAggregatesInput | DEVOLUCAOScalarWhereWithAggregatesInput[]
    LOJA?: IntNullableWithAggregatesFilter<"DEVOLUCAO"> | number | null
    CODIGO?: BigIntWithAggregatesFilter<"DEVOLUCAO"> | bigint | number
    VALORDEVOLUCAO?: FloatNullableWithAggregatesFilter<"DEVOLUCAO"> | number | null
    SITUACAO?: IntNullableWithAggregatesFilter<"DEVOLUCAO"> | number | null
    SITUACAO_DATA?: DateTimeNullableWithAggregatesFilter<"DEVOLUCAO"> | Date | string | null
    SITUACAO_LOJA?: IntNullableWithAggregatesFilter<"DEVOLUCAO"> | number | null
    SITUACAO_PDV?: IntNullableWithAggregatesFilter<"DEVOLUCAO"> | number | null
    SITUACAO_COO?: IntNullableWithAggregatesFilter<"DEVOLUCAO"> | number | null
    DATAINCLUSAO?: DateTimeNullableWithAggregatesFilter<"DEVOLUCAO"> | Date | string | null
  }

  export type EXPORTACAOWhereInput = {
    AND?: EXPORTACAOWhereInput | EXPORTACAOWhereInput[]
    OR?: EXPORTACAOWhereInput[]
    NOT?: EXPORTACAOWhereInput | EXPORTACAOWhereInput[]
    LOJA?: IntFilter<"EXPORTACAO"> | number
    TIPO_CADASTRO?: IntFilter<"EXPORTACAO"> | number
    CHAVE?: StringFilter<"EXPORTACAO"> | string
    DATA_INCLUSAO?: DateTimeNullableFilter<"EXPORTACAO"> | Date | string | null
    DATA_INIPROC?: DateTimeNullableFilter<"EXPORTACAO"> | Date | string | null
    DATA_FIMPROC?: DateTimeNullableFilter<"EXPORTACAO"> | Date | string | null
    INTEGRADO?: IntFilter<"EXPORTACAO"> | number
    DESC_INTEGRADO?: StringNullableFilter<"EXPORTACAO"> | string | null
    DATA1?: DateTimeNullableFilter<"EXPORTACAO"> | Date | string | null
    DATA2?: DateTimeNullableFilter<"EXPORTACAO"> | Date | string | null
    DATA3?: DateTimeNullableFilter<"EXPORTACAO"> | Date | string | null
    VALOR1?: FloatNullableFilter<"EXPORTACAO"> | number | null
    VALOR2?: FloatNullableFilter<"EXPORTACAO"> | number | null
    VALOR3?: FloatNullableFilter<"EXPORTACAO"> | number | null
    VALOR4?: FloatNullableFilter<"EXPORTACAO"> | number | null
    VALOR5?: FloatNullableFilter<"EXPORTACAO"> | number | null
    VALOR6?: FloatNullableFilter<"EXPORTACAO"> | number | null
    PROCESSO?: StringNullableFilter<"EXPORTACAO"> | string | null
    VALOR7?: FloatNullableFilter<"EXPORTACAO"> | number | null
  }

  export type EXPORTACAOOrderByWithRelationInput = {
    LOJA?: SortOrder
    TIPO_CADASTRO?: SortOrder
    CHAVE?: SortOrder
    DATA_INCLUSAO?: SortOrderInput | SortOrder
    DATA_INIPROC?: SortOrderInput | SortOrder
    DATA_FIMPROC?: SortOrderInput | SortOrder
    INTEGRADO?: SortOrder
    DESC_INTEGRADO?: SortOrderInput | SortOrder
    DATA1?: SortOrderInput | SortOrder
    DATA2?: SortOrderInput | SortOrder
    DATA3?: SortOrderInput | SortOrder
    VALOR1?: SortOrderInput | SortOrder
    VALOR2?: SortOrderInput | SortOrder
    VALOR3?: SortOrderInput | SortOrder
    VALOR4?: SortOrderInput | SortOrder
    VALOR5?: SortOrderInput | SortOrder
    VALOR6?: SortOrderInput | SortOrder
    PROCESSO?: SortOrderInput | SortOrder
    VALOR7?: SortOrderInput | SortOrder
  }

  export type EXPORTACAOWhereUniqueInput = Prisma.AtLeast<{
    LOJA_TIPO_CADASTRO_CHAVE?: EXPORTACAOLOJATIPO_CADASTROCHAVECompoundUniqueInput
    AND?: EXPORTACAOWhereInput | EXPORTACAOWhereInput[]
    OR?: EXPORTACAOWhereInput[]
    NOT?: EXPORTACAOWhereInput | EXPORTACAOWhereInput[]
    LOJA?: IntFilter<"EXPORTACAO"> | number
    TIPO_CADASTRO?: IntFilter<"EXPORTACAO"> | number
    CHAVE?: StringFilter<"EXPORTACAO"> | string
    DATA_INCLUSAO?: DateTimeNullableFilter<"EXPORTACAO"> | Date | string | null
    DATA_INIPROC?: DateTimeNullableFilter<"EXPORTACAO"> | Date | string | null
    DATA_FIMPROC?: DateTimeNullableFilter<"EXPORTACAO"> | Date | string | null
    INTEGRADO?: IntFilter<"EXPORTACAO"> | number
    DESC_INTEGRADO?: StringNullableFilter<"EXPORTACAO"> | string | null
    DATA1?: DateTimeNullableFilter<"EXPORTACAO"> | Date | string | null
    DATA2?: DateTimeNullableFilter<"EXPORTACAO"> | Date | string | null
    DATA3?: DateTimeNullableFilter<"EXPORTACAO"> | Date | string | null
    VALOR1?: FloatNullableFilter<"EXPORTACAO"> | number | null
    VALOR2?: FloatNullableFilter<"EXPORTACAO"> | number | null
    VALOR3?: FloatNullableFilter<"EXPORTACAO"> | number | null
    VALOR4?: FloatNullableFilter<"EXPORTACAO"> | number | null
    VALOR5?: FloatNullableFilter<"EXPORTACAO"> | number | null
    VALOR6?: FloatNullableFilter<"EXPORTACAO"> | number | null
    PROCESSO?: StringNullableFilter<"EXPORTACAO"> | string | null
    VALOR7?: FloatNullableFilter<"EXPORTACAO"> | number | null
  }, "LOJA_TIPO_CADASTRO_CHAVE">

  export type EXPORTACAOOrderByWithAggregationInput = {
    LOJA?: SortOrder
    TIPO_CADASTRO?: SortOrder
    CHAVE?: SortOrder
    DATA_INCLUSAO?: SortOrderInput | SortOrder
    DATA_INIPROC?: SortOrderInput | SortOrder
    DATA_FIMPROC?: SortOrderInput | SortOrder
    INTEGRADO?: SortOrder
    DESC_INTEGRADO?: SortOrderInput | SortOrder
    DATA1?: SortOrderInput | SortOrder
    DATA2?: SortOrderInput | SortOrder
    DATA3?: SortOrderInput | SortOrder
    VALOR1?: SortOrderInput | SortOrder
    VALOR2?: SortOrderInput | SortOrder
    VALOR3?: SortOrderInput | SortOrder
    VALOR4?: SortOrderInput | SortOrder
    VALOR5?: SortOrderInput | SortOrder
    VALOR6?: SortOrderInput | SortOrder
    PROCESSO?: SortOrderInput | SortOrder
    VALOR7?: SortOrderInput | SortOrder
    _count?: EXPORTACAOCountOrderByAggregateInput
    _avg?: EXPORTACAOAvgOrderByAggregateInput
    _max?: EXPORTACAOMaxOrderByAggregateInput
    _min?: EXPORTACAOMinOrderByAggregateInput
    _sum?: EXPORTACAOSumOrderByAggregateInput
  }

  export type EXPORTACAOScalarWhereWithAggregatesInput = {
    AND?: EXPORTACAOScalarWhereWithAggregatesInput | EXPORTACAOScalarWhereWithAggregatesInput[]
    OR?: EXPORTACAOScalarWhereWithAggregatesInput[]
    NOT?: EXPORTACAOScalarWhereWithAggregatesInput | EXPORTACAOScalarWhereWithAggregatesInput[]
    LOJA?: IntWithAggregatesFilter<"EXPORTACAO"> | number
    TIPO_CADASTRO?: IntWithAggregatesFilter<"EXPORTACAO"> | number
    CHAVE?: StringWithAggregatesFilter<"EXPORTACAO"> | string
    DATA_INCLUSAO?: DateTimeNullableWithAggregatesFilter<"EXPORTACAO"> | Date | string | null
    DATA_INIPROC?: DateTimeNullableWithAggregatesFilter<"EXPORTACAO"> | Date | string | null
    DATA_FIMPROC?: DateTimeNullableWithAggregatesFilter<"EXPORTACAO"> | Date | string | null
    INTEGRADO?: IntWithAggregatesFilter<"EXPORTACAO"> | number
    DESC_INTEGRADO?: StringNullableWithAggregatesFilter<"EXPORTACAO"> | string | null
    DATA1?: DateTimeNullableWithAggregatesFilter<"EXPORTACAO"> | Date | string | null
    DATA2?: DateTimeNullableWithAggregatesFilter<"EXPORTACAO"> | Date | string | null
    DATA3?: DateTimeNullableWithAggregatesFilter<"EXPORTACAO"> | Date | string | null
    VALOR1?: FloatNullableWithAggregatesFilter<"EXPORTACAO"> | number | null
    VALOR2?: FloatNullableWithAggregatesFilter<"EXPORTACAO"> | number | null
    VALOR3?: FloatNullableWithAggregatesFilter<"EXPORTACAO"> | number | null
    VALOR4?: FloatNullableWithAggregatesFilter<"EXPORTACAO"> | number | null
    VALOR5?: FloatNullableWithAggregatesFilter<"EXPORTACAO"> | number | null
    VALOR6?: FloatNullableWithAggregatesFilter<"EXPORTACAO"> | number | null
    PROCESSO?: StringNullableWithAggregatesFilter<"EXPORTACAO"> | string | null
    VALOR7?: FloatNullableWithAggregatesFilter<"EXPORTACAO"> | number | null
  }

  export type FINALIZADORAS_SAPWhereInput = {
    AND?: FINALIZADORAS_SAPWhereInput | FINALIZADORAS_SAPWhereInput[]
    OR?: FINALIZADORAS_SAPWhereInput[]
    NOT?: FINALIZADORAS_SAPWhereInput | FINALIZADORAS_SAPWhereInput[]
    COD_FINALIZ?: IntFilter<"FINALIZADORAS_SAP"> | number
    DOMINIO?: IntFilter<"FINALIZADORAS_SAP"> | number
    TRANSACAO?: IntFilter<"FINALIZADORAS_SAP"> | number
    TIPO?: IntNullableFilter<"FINALIZADORAS_SAP"> | number | null
    DESCRICAO?: StringNullableFilter<"FINALIZADORAS_SAP"> | string | null
    OPERACAO_SAP?: StringNullableFilter<"FINALIZADORAS_SAP"> | string | null
    OPERADORA_SAP?: StringNullableFilter<"FINALIZADORAS_SAP"> | string | null
    REDE?: IntFilter<"FINALIZADORAS_SAP"> | number
    BANDEIRA?: IntFilter<"FINALIZADORAS_SAP"> | number
    MODALIDADE?: IntFilter<"FINALIZADORAS_SAP"> | number
    BIN?: IntFilter<"FINALIZADORAS_SAP"> | number
  }

  export type FINALIZADORAS_SAPOrderByWithRelationInput = {
    COD_FINALIZ?: SortOrder
    DOMINIO?: SortOrder
    TRANSACAO?: SortOrder
    TIPO?: SortOrderInput | SortOrder
    DESCRICAO?: SortOrderInput | SortOrder
    OPERACAO_SAP?: SortOrderInput | SortOrder
    OPERADORA_SAP?: SortOrderInput | SortOrder
    REDE?: SortOrder
    BANDEIRA?: SortOrder
    MODALIDADE?: SortOrder
    BIN?: SortOrder
  }

  export type FINALIZADORAS_SAPWhereUniqueInput = Prisma.AtLeast<{
    COD_FINALIZ_DOMINIO_TRANSACAO_REDE_BANDEIRA_MODALIDADE_BIN?: FINALIZADORAS_SAPCOD_FINALIZDOMINIOTRANSACAOREDEBANDEIRAMODALIDADEBINCompoundUniqueInput
    AND?: FINALIZADORAS_SAPWhereInput | FINALIZADORAS_SAPWhereInput[]
    OR?: FINALIZADORAS_SAPWhereInput[]
    NOT?: FINALIZADORAS_SAPWhereInput | FINALIZADORAS_SAPWhereInput[]
    COD_FINALIZ?: IntFilter<"FINALIZADORAS_SAP"> | number
    DOMINIO?: IntFilter<"FINALIZADORAS_SAP"> | number
    TRANSACAO?: IntFilter<"FINALIZADORAS_SAP"> | number
    TIPO?: IntNullableFilter<"FINALIZADORAS_SAP"> | number | null
    DESCRICAO?: StringNullableFilter<"FINALIZADORAS_SAP"> | string | null
    OPERACAO_SAP?: StringNullableFilter<"FINALIZADORAS_SAP"> | string | null
    OPERADORA_SAP?: StringNullableFilter<"FINALIZADORAS_SAP"> | string | null
    REDE?: IntFilter<"FINALIZADORAS_SAP"> | number
    BANDEIRA?: IntFilter<"FINALIZADORAS_SAP"> | number
    MODALIDADE?: IntFilter<"FINALIZADORAS_SAP"> | number
    BIN?: IntFilter<"FINALIZADORAS_SAP"> | number
  }, "COD_FINALIZ_DOMINIO_TRANSACAO_REDE_BANDEIRA_MODALIDADE_BIN">

  export type FINALIZADORAS_SAPOrderByWithAggregationInput = {
    COD_FINALIZ?: SortOrder
    DOMINIO?: SortOrder
    TRANSACAO?: SortOrder
    TIPO?: SortOrderInput | SortOrder
    DESCRICAO?: SortOrderInput | SortOrder
    OPERACAO_SAP?: SortOrderInput | SortOrder
    OPERADORA_SAP?: SortOrderInput | SortOrder
    REDE?: SortOrder
    BANDEIRA?: SortOrder
    MODALIDADE?: SortOrder
    BIN?: SortOrder
    _count?: FINALIZADORAS_SAPCountOrderByAggregateInput
    _avg?: FINALIZADORAS_SAPAvgOrderByAggregateInput
    _max?: FINALIZADORAS_SAPMaxOrderByAggregateInput
    _min?: FINALIZADORAS_SAPMinOrderByAggregateInput
    _sum?: FINALIZADORAS_SAPSumOrderByAggregateInput
  }

  export type FINALIZADORAS_SAPScalarWhereWithAggregatesInput = {
    AND?: FINALIZADORAS_SAPScalarWhereWithAggregatesInput | FINALIZADORAS_SAPScalarWhereWithAggregatesInput[]
    OR?: FINALIZADORAS_SAPScalarWhereWithAggregatesInput[]
    NOT?: FINALIZADORAS_SAPScalarWhereWithAggregatesInput | FINALIZADORAS_SAPScalarWhereWithAggregatesInput[]
    COD_FINALIZ?: IntWithAggregatesFilter<"FINALIZADORAS_SAP"> | number
    DOMINIO?: IntWithAggregatesFilter<"FINALIZADORAS_SAP"> | number
    TRANSACAO?: IntWithAggregatesFilter<"FINALIZADORAS_SAP"> | number
    TIPO?: IntNullableWithAggregatesFilter<"FINALIZADORAS_SAP"> | number | null
    DESCRICAO?: StringNullableWithAggregatesFilter<"FINALIZADORAS_SAP"> | string | null
    OPERACAO_SAP?: StringNullableWithAggregatesFilter<"FINALIZADORAS_SAP"> | string | null
    OPERADORA_SAP?: StringNullableWithAggregatesFilter<"FINALIZADORAS_SAP"> | string | null
    REDE?: IntWithAggregatesFilter<"FINALIZADORAS_SAP"> | number
    BANDEIRA?: IntWithAggregatesFilter<"FINALIZADORAS_SAP"> | number
    MODALIDADE?: IntWithAggregatesFilter<"FINALIZADORAS_SAP"> | number
    BIN?: IntWithAggregatesFilter<"FINALIZADORAS_SAP"> | number
  }

  export type MONITORAMENTOWhereInput = {
    AND?: MONITORAMENTOWhereInput | MONITORAMENTOWhereInput[]
    OR?: MONITORAMENTOWhereInput[]
    NOT?: MONITORAMENTOWhereInput | MONITORAMENTOWhereInput[]
    THREAD?: StringFilter<"MONITORAMENTO"> | string
    DATA_LOG?: DateTimeNullableFilter<"MONITORAMENTO"> | Date | string | null
    DESCRICAO?: StringNullableFilter<"MONITORAMENTO"> | string | null
    STATUS?: IntNullableFilter<"MONITORAMENTO"> | number | null
  }

  export type MONITORAMENTOOrderByWithRelationInput = {
    THREAD?: SortOrder
    DATA_LOG?: SortOrderInput | SortOrder
    DESCRICAO?: SortOrderInput | SortOrder
    STATUS?: SortOrderInput | SortOrder
  }

  export type MONITORAMENTOWhereUniqueInput = Prisma.AtLeast<{
    THREAD?: string
    AND?: MONITORAMENTOWhereInput | MONITORAMENTOWhereInput[]
    OR?: MONITORAMENTOWhereInput[]
    NOT?: MONITORAMENTOWhereInput | MONITORAMENTOWhereInput[]
    DATA_LOG?: DateTimeNullableFilter<"MONITORAMENTO"> | Date | string | null
    DESCRICAO?: StringNullableFilter<"MONITORAMENTO"> | string | null
    STATUS?: IntNullableFilter<"MONITORAMENTO"> | number | null
  }, "THREAD">

  export type MONITORAMENTOOrderByWithAggregationInput = {
    THREAD?: SortOrder
    DATA_LOG?: SortOrderInput | SortOrder
    DESCRICAO?: SortOrderInput | SortOrder
    STATUS?: SortOrderInput | SortOrder
    _count?: MONITORAMENTOCountOrderByAggregateInput
    _avg?: MONITORAMENTOAvgOrderByAggregateInput
    _max?: MONITORAMENTOMaxOrderByAggregateInput
    _min?: MONITORAMENTOMinOrderByAggregateInput
    _sum?: MONITORAMENTOSumOrderByAggregateInput
  }

  export type MONITORAMENTOScalarWhereWithAggregatesInput = {
    AND?: MONITORAMENTOScalarWhereWithAggregatesInput | MONITORAMENTOScalarWhereWithAggregatesInput[]
    OR?: MONITORAMENTOScalarWhereWithAggregatesInput[]
    NOT?: MONITORAMENTOScalarWhereWithAggregatesInput | MONITORAMENTOScalarWhereWithAggregatesInput[]
    THREAD?: StringWithAggregatesFilter<"MONITORAMENTO"> | string
    DATA_LOG?: DateTimeNullableWithAggregatesFilter<"MONITORAMENTO"> | Date | string | null
    DESCRICAO?: StringNullableWithAggregatesFilter<"MONITORAMENTO"> | string | null
    STATUS?: IntNullableWithAggregatesFilter<"MONITORAMENTO"> | number | null
  }

  export type PARAMETROS_SAPWhereInput = {
    AND?: PARAMETROS_SAPWhereInput | PARAMETROS_SAPWhereInput[]
    OR?: PARAMETROS_SAPWhereInput[]
    NOT?: PARAMETROS_SAPWhereInput | PARAMETROS_SAPWhereInput[]
    ID_PARAMETRO?: IntFilter<"PARAMETROS_SAP"> | number
    DESCRICAO?: StringNullableFilter<"PARAMETROS_SAP"> | string | null
    PARAMETRO?: StringNullableFilter<"PARAMETROS_SAP"> | string | null
    TIPO?: IntNullableFilter<"PARAMETROS_SAP"> | number | null
  }

  export type PARAMETROS_SAPOrderByWithRelationInput = {
    ID_PARAMETRO?: SortOrder
    DESCRICAO?: SortOrderInput | SortOrder
    PARAMETRO?: SortOrderInput | SortOrder
    TIPO?: SortOrderInput | SortOrder
  }

  export type PARAMETROS_SAPWhereUniqueInput = Prisma.AtLeast<{
    ID_PARAMETRO?: number
    AND?: PARAMETROS_SAPWhereInput | PARAMETROS_SAPWhereInput[]
    OR?: PARAMETROS_SAPWhereInput[]
    NOT?: PARAMETROS_SAPWhereInput | PARAMETROS_SAPWhereInput[]
    DESCRICAO?: StringNullableFilter<"PARAMETROS_SAP"> | string | null
    PARAMETRO?: StringNullableFilter<"PARAMETROS_SAP"> | string | null
    TIPO?: IntNullableFilter<"PARAMETROS_SAP"> | number | null
  }, "ID_PARAMETRO">

  export type PARAMETROS_SAPOrderByWithAggregationInput = {
    ID_PARAMETRO?: SortOrder
    DESCRICAO?: SortOrderInput | SortOrder
    PARAMETRO?: SortOrderInput | SortOrder
    TIPO?: SortOrderInput | SortOrder
    _count?: PARAMETROS_SAPCountOrderByAggregateInput
    _avg?: PARAMETROS_SAPAvgOrderByAggregateInput
    _max?: PARAMETROS_SAPMaxOrderByAggregateInput
    _min?: PARAMETROS_SAPMinOrderByAggregateInput
    _sum?: PARAMETROS_SAPSumOrderByAggregateInput
  }

  export type PARAMETROS_SAPScalarWhereWithAggregatesInput = {
    AND?: PARAMETROS_SAPScalarWhereWithAggregatesInput | PARAMETROS_SAPScalarWhereWithAggregatesInput[]
    OR?: PARAMETROS_SAPScalarWhereWithAggregatesInput[]
    NOT?: PARAMETROS_SAPScalarWhereWithAggregatesInput | PARAMETROS_SAPScalarWhereWithAggregatesInput[]
    ID_PARAMETRO?: IntWithAggregatesFilter<"PARAMETROS_SAP"> | number
    DESCRICAO?: StringNullableWithAggregatesFilter<"PARAMETROS_SAP"> | string | null
    PARAMETRO?: StringNullableWithAggregatesFilter<"PARAMETROS_SAP"> | string | null
    TIPO?: IntNullableWithAggregatesFilter<"PARAMETROS_SAP"> | number | null
  }

  export type PEDIDO_CONTROLEWhereInput = {
    AND?: PEDIDO_CONTROLEWhereInput | PEDIDO_CONTROLEWhereInput[]
    OR?: PEDIDO_CONTROLEWhereInput[]
    NOT?: PEDIDO_CONTROLEWhereInput | PEDIDO_CONTROLEWhereInput[]
    NUM_PEDIDO?: BigIntFilter<"PEDIDO_CONTROLE"> | bigint | number
    LOJA?: IntNullableFilter<"PEDIDO_CONTROLE"> | number | null
    NUM_PDV?: IntNullableFilter<"PEDIDO_CONTROLE"> | number | null
    SITUACAO?: IntNullableFilter<"PEDIDO_CONTROLE"> | number | null
  }

  export type PEDIDO_CONTROLEOrderByWithRelationInput = {
    NUM_PEDIDO?: SortOrder
    LOJA?: SortOrderInput | SortOrder
    NUM_PDV?: SortOrderInput | SortOrder
    SITUACAO?: SortOrderInput | SortOrder
  }

  export type PEDIDO_CONTROLEWhereUniqueInput = Prisma.AtLeast<{
    NUM_PEDIDO?: bigint | number
    AND?: PEDIDO_CONTROLEWhereInput | PEDIDO_CONTROLEWhereInput[]
    OR?: PEDIDO_CONTROLEWhereInput[]
    NOT?: PEDIDO_CONTROLEWhereInput | PEDIDO_CONTROLEWhereInput[]
    LOJA?: IntNullableFilter<"PEDIDO_CONTROLE"> | number | null
    NUM_PDV?: IntNullableFilter<"PEDIDO_CONTROLE"> | number | null
    SITUACAO?: IntNullableFilter<"PEDIDO_CONTROLE"> | number | null
  }, "NUM_PEDIDO">

  export type PEDIDO_CONTROLEOrderByWithAggregationInput = {
    NUM_PEDIDO?: SortOrder
    LOJA?: SortOrderInput | SortOrder
    NUM_PDV?: SortOrderInput | SortOrder
    SITUACAO?: SortOrderInput | SortOrder
    _count?: PEDIDO_CONTROLECountOrderByAggregateInput
    _avg?: PEDIDO_CONTROLEAvgOrderByAggregateInput
    _max?: PEDIDO_CONTROLEMaxOrderByAggregateInput
    _min?: PEDIDO_CONTROLEMinOrderByAggregateInput
    _sum?: PEDIDO_CONTROLESumOrderByAggregateInput
  }

  export type PEDIDO_CONTROLEScalarWhereWithAggregatesInput = {
    AND?: PEDIDO_CONTROLEScalarWhereWithAggregatesInput | PEDIDO_CONTROLEScalarWhereWithAggregatesInput[]
    OR?: PEDIDO_CONTROLEScalarWhereWithAggregatesInput[]
    NOT?: PEDIDO_CONTROLEScalarWhereWithAggregatesInput | PEDIDO_CONTROLEScalarWhereWithAggregatesInput[]
    NUM_PEDIDO?: BigIntWithAggregatesFilter<"PEDIDO_CONTROLE"> | bigint | number
    LOJA?: IntNullableWithAggregatesFilter<"PEDIDO_CONTROLE"> | number | null
    NUM_PDV?: IntNullableWithAggregatesFilter<"PEDIDO_CONTROLE"> | number | null
    SITUACAO?: IntNullableWithAggregatesFilter<"PEDIDO_CONTROLE"> | number | null
  }

  export type CLIENTE_ESTADO_SAPCreateInput = {
    CODIGO?: bigint | number
    ESTADO?: string | null
    CODIGOINTEGRACAO?: string | null
    DATAALTERACAO?: Date | string | null
  }

  export type CLIENTE_ESTADO_SAPUncheckedCreateInput = {
    CODIGO?: bigint | number
    ESTADO?: string | null
    CODIGOINTEGRACAO?: string | null
    DATAALTERACAO?: Date | string | null
  }

  export type CLIENTE_ESTADO_SAPUpdateInput = {
    CODIGO?: BigIntFieldUpdateOperationsInput | bigint | number
    ESTADO?: NullableStringFieldUpdateOperationsInput | string | null
    CODIGOINTEGRACAO?: NullableStringFieldUpdateOperationsInput | string | null
    DATAALTERACAO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CLIENTE_ESTADO_SAPUncheckedUpdateInput = {
    CODIGO?: BigIntFieldUpdateOperationsInput | bigint | number
    ESTADO?: NullableStringFieldUpdateOperationsInput | string | null
    CODIGOINTEGRACAO?: NullableStringFieldUpdateOperationsInput | string | null
    DATAALTERACAO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CLIENTE_ESTADO_SAPCreateManyInput = {
    CODIGO?: bigint | number
    ESTADO?: string | null
    CODIGOINTEGRACAO?: string | null
    DATAALTERACAO?: Date | string | null
  }

  export type CLIENTE_ESTADO_SAPUpdateManyMutationInput = {
    CODIGO?: BigIntFieldUpdateOperationsInput | bigint | number
    ESTADO?: NullableStringFieldUpdateOperationsInput | string | null
    CODIGOINTEGRACAO?: NullableStringFieldUpdateOperationsInput | string | null
    DATAALTERACAO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CLIENTE_ESTADO_SAPUncheckedUpdateManyInput = {
    CODIGO?: BigIntFieldUpdateOperationsInput | bigint | number
    ESTADO?: NullableStringFieldUpdateOperationsInput | string | null
    CODIGOINTEGRACAO?: NullableStringFieldUpdateOperationsInput | string | null
    DATAALTERACAO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CONTROLE_IMPPRODUTOSCreateInput = {
    DATA_IMPORTACAO?: Date | string
    DATA_CUSTO?: Date | string | null
  }

  export type CONTROLE_IMPPRODUTOSUncheckedCreateInput = {
    DATA_IMPORTACAO?: Date | string
    DATA_CUSTO?: Date | string | null
  }

  export type CONTROLE_IMPPRODUTOSUpdateInput = {
    DATA_IMPORTACAO?: DateTimeFieldUpdateOperationsInput | Date | string
    DATA_CUSTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CONTROLE_IMPPRODUTOSUncheckedUpdateInput = {
    DATA_IMPORTACAO?: DateTimeFieldUpdateOperationsInput | Date | string
    DATA_CUSTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CONTROLE_IMPPRODUTOSCreateManyInput = {
    DATA_IMPORTACAO?: Date | string
    DATA_CUSTO?: Date | string | null
  }

  export type CONTROLE_IMPPRODUTOSUpdateManyMutationInput = {
    DATA_IMPORTACAO?: DateTimeFieldUpdateOperationsInput | Date | string
    DATA_CUSTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CONTROLE_IMPPRODUTOSUncheckedUpdateManyInput = {
    DATA_IMPORTACAO?: DateTimeFieldUpdateOperationsInput | Date | string
    DATA_CUSTO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DEVOLUCAOCreateInput = {
    LOJA?: number | null
    CODIGO?: bigint | number
    VALORDEVOLUCAO?: number | null
    SITUACAO?: number | null
    SITUACAO_DATA?: Date | string | null
    SITUACAO_LOJA?: number | null
    SITUACAO_PDV?: number | null
    SITUACAO_COO?: number | null
    DATAINCLUSAO?: Date | string | null
  }

  export type DEVOLUCAOUncheckedCreateInput = {
    LOJA?: number | null
    CODIGO?: bigint | number
    VALORDEVOLUCAO?: number | null
    SITUACAO?: number | null
    SITUACAO_DATA?: Date | string | null
    SITUACAO_LOJA?: number | null
    SITUACAO_PDV?: number | null
    SITUACAO_COO?: number | null
    DATAINCLUSAO?: Date | string | null
  }

  export type DEVOLUCAOUpdateInput = {
    LOJA?: NullableIntFieldUpdateOperationsInput | number | null
    CODIGO?: BigIntFieldUpdateOperationsInput | bigint | number
    VALORDEVOLUCAO?: NullableFloatFieldUpdateOperationsInput | number | null
    SITUACAO?: NullableIntFieldUpdateOperationsInput | number | null
    SITUACAO_DATA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SITUACAO_LOJA?: NullableIntFieldUpdateOperationsInput | number | null
    SITUACAO_PDV?: NullableIntFieldUpdateOperationsInput | number | null
    SITUACAO_COO?: NullableIntFieldUpdateOperationsInput | number | null
    DATAINCLUSAO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DEVOLUCAOUncheckedUpdateInput = {
    LOJA?: NullableIntFieldUpdateOperationsInput | number | null
    CODIGO?: BigIntFieldUpdateOperationsInput | bigint | number
    VALORDEVOLUCAO?: NullableFloatFieldUpdateOperationsInput | number | null
    SITUACAO?: NullableIntFieldUpdateOperationsInput | number | null
    SITUACAO_DATA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SITUACAO_LOJA?: NullableIntFieldUpdateOperationsInput | number | null
    SITUACAO_PDV?: NullableIntFieldUpdateOperationsInput | number | null
    SITUACAO_COO?: NullableIntFieldUpdateOperationsInput | number | null
    DATAINCLUSAO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DEVOLUCAOCreateManyInput = {
    LOJA?: number | null
    CODIGO?: bigint | number
    VALORDEVOLUCAO?: number | null
    SITUACAO?: number | null
    SITUACAO_DATA?: Date | string | null
    SITUACAO_LOJA?: number | null
    SITUACAO_PDV?: number | null
    SITUACAO_COO?: number | null
    DATAINCLUSAO?: Date | string | null
  }

  export type DEVOLUCAOUpdateManyMutationInput = {
    LOJA?: NullableIntFieldUpdateOperationsInput | number | null
    CODIGO?: BigIntFieldUpdateOperationsInput | bigint | number
    VALORDEVOLUCAO?: NullableFloatFieldUpdateOperationsInput | number | null
    SITUACAO?: NullableIntFieldUpdateOperationsInput | number | null
    SITUACAO_DATA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SITUACAO_LOJA?: NullableIntFieldUpdateOperationsInput | number | null
    SITUACAO_PDV?: NullableIntFieldUpdateOperationsInput | number | null
    SITUACAO_COO?: NullableIntFieldUpdateOperationsInput | number | null
    DATAINCLUSAO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DEVOLUCAOUncheckedUpdateManyInput = {
    LOJA?: NullableIntFieldUpdateOperationsInput | number | null
    CODIGO?: BigIntFieldUpdateOperationsInput | bigint | number
    VALORDEVOLUCAO?: NullableFloatFieldUpdateOperationsInput | number | null
    SITUACAO?: NullableIntFieldUpdateOperationsInput | number | null
    SITUACAO_DATA?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SITUACAO_LOJA?: NullableIntFieldUpdateOperationsInput | number | null
    SITUACAO_PDV?: NullableIntFieldUpdateOperationsInput | number | null
    SITUACAO_COO?: NullableIntFieldUpdateOperationsInput | number | null
    DATAINCLUSAO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EXPORTACAOCreateInput = {
    LOJA?: number
    TIPO_CADASTRO?: number
    CHAVE?: string
    DATA_INCLUSAO?: Date | string | null
    DATA_INIPROC?: Date | string | null
    DATA_FIMPROC?: Date | string | null
    INTEGRADO?: number
    DESC_INTEGRADO?: string | null
    DATA1?: Date | string | null
    DATA2?: Date | string | null
    DATA3?: Date | string | null
    VALOR1?: number | null
    VALOR2?: number | null
    VALOR3?: number | null
    VALOR4?: number | null
    VALOR5?: number | null
    VALOR6?: number | null
    PROCESSO?: string | null
    VALOR7?: number | null
  }

  export type EXPORTACAOUncheckedCreateInput = {
    LOJA?: number
    TIPO_CADASTRO?: number
    CHAVE?: string
    DATA_INCLUSAO?: Date | string | null
    DATA_INIPROC?: Date | string | null
    DATA_FIMPROC?: Date | string | null
    INTEGRADO?: number
    DESC_INTEGRADO?: string | null
    DATA1?: Date | string | null
    DATA2?: Date | string | null
    DATA3?: Date | string | null
    VALOR1?: number | null
    VALOR2?: number | null
    VALOR3?: number | null
    VALOR4?: number | null
    VALOR5?: number | null
    VALOR6?: number | null
    PROCESSO?: string | null
    VALOR7?: number | null
  }

  export type EXPORTACAOUpdateInput = {
    LOJA?: IntFieldUpdateOperationsInput | number
    TIPO_CADASTRO?: IntFieldUpdateOperationsInput | number
    CHAVE?: StringFieldUpdateOperationsInput | string
    DATA_INCLUSAO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA_INIPROC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA_FIMPROC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    INTEGRADO?: IntFieldUpdateOperationsInput | number
    DESC_INTEGRADO?: NullableStringFieldUpdateOperationsInput | string | null
    DATA1?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA2?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA3?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VALOR1?: NullableFloatFieldUpdateOperationsInput | number | null
    VALOR2?: NullableFloatFieldUpdateOperationsInput | number | null
    VALOR3?: NullableFloatFieldUpdateOperationsInput | number | null
    VALOR4?: NullableFloatFieldUpdateOperationsInput | number | null
    VALOR5?: NullableFloatFieldUpdateOperationsInput | number | null
    VALOR6?: NullableFloatFieldUpdateOperationsInput | number | null
    PROCESSO?: NullableStringFieldUpdateOperationsInput | string | null
    VALOR7?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type EXPORTACAOUncheckedUpdateInput = {
    LOJA?: IntFieldUpdateOperationsInput | number
    TIPO_CADASTRO?: IntFieldUpdateOperationsInput | number
    CHAVE?: StringFieldUpdateOperationsInput | string
    DATA_INCLUSAO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA_INIPROC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA_FIMPROC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    INTEGRADO?: IntFieldUpdateOperationsInput | number
    DESC_INTEGRADO?: NullableStringFieldUpdateOperationsInput | string | null
    DATA1?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA2?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA3?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VALOR1?: NullableFloatFieldUpdateOperationsInput | number | null
    VALOR2?: NullableFloatFieldUpdateOperationsInput | number | null
    VALOR3?: NullableFloatFieldUpdateOperationsInput | number | null
    VALOR4?: NullableFloatFieldUpdateOperationsInput | number | null
    VALOR5?: NullableFloatFieldUpdateOperationsInput | number | null
    VALOR6?: NullableFloatFieldUpdateOperationsInput | number | null
    PROCESSO?: NullableStringFieldUpdateOperationsInput | string | null
    VALOR7?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type EXPORTACAOCreateManyInput = {
    LOJA?: number
    TIPO_CADASTRO?: number
    CHAVE?: string
    DATA_INCLUSAO?: Date | string | null
    DATA_INIPROC?: Date | string | null
    DATA_FIMPROC?: Date | string | null
    INTEGRADO?: number
    DESC_INTEGRADO?: string | null
    DATA1?: Date | string | null
    DATA2?: Date | string | null
    DATA3?: Date | string | null
    VALOR1?: number | null
    VALOR2?: number | null
    VALOR3?: number | null
    VALOR4?: number | null
    VALOR5?: number | null
    VALOR6?: number | null
    PROCESSO?: string | null
    VALOR7?: number | null
  }

  export type EXPORTACAOUpdateManyMutationInput = {
    LOJA?: IntFieldUpdateOperationsInput | number
    TIPO_CADASTRO?: IntFieldUpdateOperationsInput | number
    CHAVE?: StringFieldUpdateOperationsInput | string
    DATA_INCLUSAO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA_INIPROC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA_FIMPROC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    INTEGRADO?: IntFieldUpdateOperationsInput | number
    DESC_INTEGRADO?: NullableStringFieldUpdateOperationsInput | string | null
    DATA1?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA2?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA3?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VALOR1?: NullableFloatFieldUpdateOperationsInput | number | null
    VALOR2?: NullableFloatFieldUpdateOperationsInput | number | null
    VALOR3?: NullableFloatFieldUpdateOperationsInput | number | null
    VALOR4?: NullableFloatFieldUpdateOperationsInput | number | null
    VALOR5?: NullableFloatFieldUpdateOperationsInput | number | null
    VALOR6?: NullableFloatFieldUpdateOperationsInput | number | null
    PROCESSO?: NullableStringFieldUpdateOperationsInput | string | null
    VALOR7?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type EXPORTACAOUncheckedUpdateManyInput = {
    LOJA?: IntFieldUpdateOperationsInput | number
    TIPO_CADASTRO?: IntFieldUpdateOperationsInput | number
    CHAVE?: StringFieldUpdateOperationsInput | string
    DATA_INCLUSAO?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA_INIPROC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA_FIMPROC?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    INTEGRADO?: IntFieldUpdateOperationsInput | number
    DESC_INTEGRADO?: NullableStringFieldUpdateOperationsInput | string | null
    DATA1?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA2?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DATA3?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    VALOR1?: NullableFloatFieldUpdateOperationsInput | number | null
    VALOR2?: NullableFloatFieldUpdateOperationsInput | number | null
    VALOR3?: NullableFloatFieldUpdateOperationsInput | number | null
    VALOR4?: NullableFloatFieldUpdateOperationsInput | number | null
    VALOR5?: NullableFloatFieldUpdateOperationsInput | number | null
    VALOR6?: NullableFloatFieldUpdateOperationsInput | number | null
    PROCESSO?: NullableStringFieldUpdateOperationsInput | string | null
    VALOR7?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type FINALIZADORAS_SAPCreateInput = {
    COD_FINALIZ?: number
    DOMINIO?: number
    TRANSACAO?: number
    TIPO?: number | null
    DESCRICAO?: string | null
    OPERACAO_SAP?: string | null
    OPERADORA_SAP?: string | null
    REDE?: number
    BANDEIRA?: number
    MODALIDADE?: number
    BIN?: number
  }

  export type FINALIZADORAS_SAPUncheckedCreateInput = {
    COD_FINALIZ?: number
    DOMINIO?: number
    TRANSACAO?: number
    TIPO?: number | null
    DESCRICAO?: string | null
    OPERACAO_SAP?: string | null
    OPERADORA_SAP?: string | null
    REDE?: number
    BANDEIRA?: number
    MODALIDADE?: number
    BIN?: number
  }

  export type FINALIZADORAS_SAPUpdateInput = {
    COD_FINALIZ?: IntFieldUpdateOperationsInput | number
    DOMINIO?: IntFieldUpdateOperationsInput | number
    TRANSACAO?: IntFieldUpdateOperationsInput | number
    TIPO?: NullableIntFieldUpdateOperationsInput | number | null
    DESCRICAO?: NullableStringFieldUpdateOperationsInput | string | null
    OPERACAO_SAP?: NullableStringFieldUpdateOperationsInput | string | null
    OPERADORA_SAP?: NullableStringFieldUpdateOperationsInput | string | null
    REDE?: IntFieldUpdateOperationsInput | number
    BANDEIRA?: IntFieldUpdateOperationsInput | number
    MODALIDADE?: IntFieldUpdateOperationsInput | number
    BIN?: IntFieldUpdateOperationsInput | number
  }

  export type FINALIZADORAS_SAPUncheckedUpdateInput = {
    COD_FINALIZ?: IntFieldUpdateOperationsInput | number
    DOMINIO?: IntFieldUpdateOperationsInput | number
    TRANSACAO?: IntFieldUpdateOperationsInput | number
    TIPO?: NullableIntFieldUpdateOperationsInput | number | null
    DESCRICAO?: NullableStringFieldUpdateOperationsInput | string | null
    OPERACAO_SAP?: NullableStringFieldUpdateOperationsInput | string | null
    OPERADORA_SAP?: NullableStringFieldUpdateOperationsInput | string | null
    REDE?: IntFieldUpdateOperationsInput | number
    BANDEIRA?: IntFieldUpdateOperationsInput | number
    MODALIDADE?: IntFieldUpdateOperationsInput | number
    BIN?: IntFieldUpdateOperationsInput | number
  }

  export type FINALIZADORAS_SAPCreateManyInput = {
    COD_FINALIZ?: number
    DOMINIO?: number
    TRANSACAO?: number
    TIPO?: number | null
    DESCRICAO?: string | null
    OPERACAO_SAP?: string | null
    OPERADORA_SAP?: string | null
    REDE?: number
    BANDEIRA?: number
    MODALIDADE?: number
    BIN?: number
  }

  export type FINALIZADORAS_SAPUpdateManyMutationInput = {
    COD_FINALIZ?: IntFieldUpdateOperationsInput | number
    DOMINIO?: IntFieldUpdateOperationsInput | number
    TRANSACAO?: IntFieldUpdateOperationsInput | number
    TIPO?: NullableIntFieldUpdateOperationsInput | number | null
    DESCRICAO?: NullableStringFieldUpdateOperationsInput | string | null
    OPERACAO_SAP?: NullableStringFieldUpdateOperationsInput | string | null
    OPERADORA_SAP?: NullableStringFieldUpdateOperationsInput | string | null
    REDE?: IntFieldUpdateOperationsInput | number
    BANDEIRA?: IntFieldUpdateOperationsInput | number
    MODALIDADE?: IntFieldUpdateOperationsInput | number
    BIN?: IntFieldUpdateOperationsInput | number
  }

  export type FINALIZADORAS_SAPUncheckedUpdateManyInput = {
    COD_FINALIZ?: IntFieldUpdateOperationsInput | number
    DOMINIO?: IntFieldUpdateOperationsInput | number
    TRANSACAO?: IntFieldUpdateOperationsInput | number
    TIPO?: NullableIntFieldUpdateOperationsInput | number | null
    DESCRICAO?: NullableStringFieldUpdateOperationsInput | string | null
    OPERACAO_SAP?: NullableStringFieldUpdateOperationsInput | string | null
    OPERADORA_SAP?: NullableStringFieldUpdateOperationsInput | string | null
    REDE?: IntFieldUpdateOperationsInput | number
    BANDEIRA?: IntFieldUpdateOperationsInput | number
    MODALIDADE?: IntFieldUpdateOperationsInput | number
    BIN?: IntFieldUpdateOperationsInput | number
  }

  export type MONITORAMENTOCreateInput = {
    THREAD?: string
    DATA_LOG?: Date | string | null
    DESCRICAO?: string | null
    STATUS?: number | null
  }

  export type MONITORAMENTOUncheckedCreateInput = {
    THREAD?: string
    DATA_LOG?: Date | string | null
    DESCRICAO?: string | null
    STATUS?: number | null
  }

  export type MONITORAMENTOUpdateInput = {
    THREAD?: StringFieldUpdateOperationsInput | string
    DATA_LOG?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DESCRICAO?: NullableStringFieldUpdateOperationsInput | string | null
    STATUS?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MONITORAMENTOUncheckedUpdateInput = {
    THREAD?: StringFieldUpdateOperationsInput | string
    DATA_LOG?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DESCRICAO?: NullableStringFieldUpdateOperationsInput | string | null
    STATUS?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MONITORAMENTOCreateManyInput = {
    THREAD?: string
    DATA_LOG?: Date | string | null
    DESCRICAO?: string | null
    STATUS?: number | null
  }

  export type MONITORAMENTOUpdateManyMutationInput = {
    THREAD?: StringFieldUpdateOperationsInput | string
    DATA_LOG?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DESCRICAO?: NullableStringFieldUpdateOperationsInput | string | null
    STATUS?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MONITORAMENTOUncheckedUpdateManyInput = {
    THREAD?: StringFieldUpdateOperationsInput | string
    DATA_LOG?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DESCRICAO?: NullableStringFieldUpdateOperationsInput | string | null
    STATUS?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PARAMETROS_SAPCreateInput = {
    ID_PARAMETRO?: number
    DESCRICAO?: string | null
    PARAMETRO?: string | null
    TIPO?: number | null
  }

  export type PARAMETROS_SAPUncheckedCreateInput = {
    ID_PARAMETRO?: number
    DESCRICAO?: string | null
    PARAMETRO?: string | null
    TIPO?: number | null
  }

  export type PARAMETROS_SAPUpdateInput = {
    ID_PARAMETRO?: IntFieldUpdateOperationsInput | number
    DESCRICAO?: NullableStringFieldUpdateOperationsInput | string | null
    PARAMETRO?: NullableStringFieldUpdateOperationsInput | string | null
    TIPO?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PARAMETROS_SAPUncheckedUpdateInput = {
    ID_PARAMETRO?: IntFieldUpdateOperationsInput | number
    DESCRICAO?: NullableStringFieldUpdateOperationsInput | string | null
    PARAMETRO?: NullableStringFieldUpdateOperationsInput | string | null
    TIPO?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PARAMETROS_SAPCreateManyInput = {
    ID_PARAMETRO?: number
    DESCRICAO?: string | null
    PARAMETRO?: string | null
    TIPO?: number | null
  }

  export type PARAMETROS_SAPUpdateManyMutationInput = {
    ID_PARAMETRO?: IntFieldUpdateOperationsInput | number
    DESCRICAO?: NullableStringFieldUpdateOperationsInput | string | null
    PARAMETRO?: NullableStringFieldUpdateOperationsInput | string | null
    TIPO?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PARAMETROS_SAPUncheckedUpdateManyInput = {
    ID_PARAMETRO?: IntFieldUpdateOperationsInput | number
    DESCRICAO?: NullableStringFieldUpdateOperationsInput | string | null
    PARAMETRO?: NullableStringFieldUpdateOperationsInput | string | null
    TIPO?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PEDIDO_CONTROLECreateInput = {
    NUM_PEDIDO?: bigint | number
    LOJA?: number | null
    NUM_PDV?: number | null
    SITUACAO?: number | null
  }

  export type PEDIDO_CONTROLEUncheckedCreateInput = {
    NUM_PEDIDO?: bigint | number
    LOJA?: number | null
    NUM_PDV?: number | null
    SITUACAO?: number | null
  }

  export type PEDIDO_CONTROLEUpdateInput = {
    NUM_PEDIDO?: BigIntFieldUpdateOperationsInput | bigint | number
    LOJA?: NullableIntFieldUpdateOperationsInput | number | null
    NUM_PDV?: NullableIntFieldUpdateOperationsInput | number | null
    SITUACAO?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PEDIDO_CONTROLEUncheckedUpdateInput = {
    NUM_PEDIDO?: BigIntFieldUpdateOperationsInput | bigint | number
    LOJA?: NullableIntFieldUpdateOperationsInput | number | null
    NUM_PDV?: NullableIntFieldUpdateOperationsInput | number | null
    SITUACAO?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PEDIDO_CONTROLECreateManyInput = {
    NUM_PEDIDO?: bigint | number
    LOJA?: number | null
    NUM_PDV?: number | null
    SITUACAO?: number | null
  }

  export type PEDIDO_CONTROLEUpdateManyMutationInput = {
    NUM_PEDIDO?: BigIntFieldUpdateOperationsInput | bigint | number
    LOJA?: NullableIntFieldUpdateOperationsInput | number | null
    NUM_PDV?: NullableIntFieldUpdateOperationsInput | number | null
    SITUACAO?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PEDIDO_CONTROLEUncheckedUpdateManyInput = {
    NUM_PEDIDO?: BigIntFieldUpdateOperationsInput | bigint | number
    LOJA?: NullableIntFieldUpdateOperationsInput | number | null
    NUM_PDV?: NullableIntFieldUpdateOperationsInput | number | null
    SITUACAO?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CLIENTE_ESTADO_SAPCountOrderByAggregateInput = {
    CODIGO?: SortOrder
    ESTADO?: SortOrder
    CODIGOINTEGRACAO?: SortOrder
    DATAALTERACAO?: SortOrder
  }

  export type CLIENTE_ESTADO_SAPAvgOrderByAggregateInput = {
    CODIGO?: SortOrder
  }

  export type CLIENTE_ESTADO_SAPMaxOrderByAggregateInput = {
    CODIGO?: SortOrder
    ESTADO?: SortOrder
    CODIGOINTEGRACAO?: SortOrder
    DATAALTERACAO?: SortOrder
  }

  export type CLIENTE_ESTADO_SAPMinOrderByAggregateInput = {
    CODIGO?: SortOrder
    ESTADO?: SortOrder
    CODIGOINTEGRACAO?: SortOrder
    DATAALTERACAO?: SortOrder
  }

  export type CLIENTE_ESTADO_SAPSumOrderByAggregateInput = {
    CODIGO?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CONTROLE_IMPPRODUTOSCountOrderByAggregateInput = {
    DATA_IMPORTACAO?: SortOrder
    DATA_CUSTO?: SortOrder
  }

  export type CONTROLE_IMPPRODUTOSMaxOrderByAggregateInput = {
    DATA_IMPORTACAO?: SortOrder
    DATA_CUSTO?: SortOrder
  }

  export type CONTROLE_IMPPRODUTOSMinOrderByAggregateInput = {
    DATA_IMPORTACAO?: SortOrder
    DATA_CUSTO?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DEVOLUCAOCountOrderByAggregateInput = {
    LOJA?: SortOrder
    CODIGO?: SortOrder
    VALORDEVOLUCAO?: SortOrder
    SITUACAO?: SortOrder
    SITUACAO_DATA?: SortOrder
    SITUACAO_LOJA?: SortOrder
    SITUACAO_PDV?: SortOrder
    SITUACAO_COO?: SortOrder
    DATAINCLUSAO?: SortOrder
  }

  export type DEVOLUCAOAvgOrderByAggregateInput = {
    LOJA?: SortOrder
    CODIGO?: SortOrder
    VALORDEVOLUCAO?: SortOrder
    SITUACAO?: SortOrder
    SITUACAO_LOJA?: SortOrder
    SITUACAO_PDV?: SortOrder
    SITUACAO_COO?: SortOrder
  }

  export type DEVOLUCAOMaxOrderByAggregateInput = {
    LOJA?: SortOrder
    CODIGO?: SortOrder
    VALORDEVOLUCAO?: SortOrder
    SITUACAO?: SortOrder
    SITUACAO_DATA?: SortOrder
    SITUACAO_LOJA?: SortOrder
    SITUACAO_PDV?: SortOrder
    SITUACAO_COO?: SortOrder
    DATAINCLUSAO?: SortOrder
  }

  export type DEVOLUCAOMinOrderByAggregateInput = {
    LOJA?: SortOrder
    CODIGO?: SortOrder
    VALORDEVOLUCAO?: SortOrder
    SITUACAO?: SortOrder
    SITUACAO_DATA?: SortOrder
    SITUACAO_LOJA?: SortOrder
    SITUACAO_PDV?: SortOrder
    SITUACAO_COO?: SortOrder
    DATAINCLUSAO?: SortOrder
  }

  export type DEVOLUCAOSumOrderByAggregateInput = {
    LOJA?: SortOrder
    CODIGO?: SortOrder
    VALORDEVOLUCAO?: SortOrder
    SITUACAO?: SortOrder
    SITUACAO_LOJA?: SortOrder
    SITUACAO_PDV?: SortOrder
    SITUACAO_COO?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EXPORTACAOLOJATIPO_CADASTROCHAVECompoundUniqueInput = {
    LOJA: number
    TIPO_CADASTRO: number
    CHAVE: string
  }

  export type EXPORTACAOCountOrderByAggregateInput = {
    LOJA?: SortOrder
    TIPO_CADASTRO?: SortOrder
    CHAVE?: SortOrder
    DATA_INCLUSAO?: SortOrder
    DATA_INIPROC?: SortOrder
    DATA_FIMPROC?: SortOrder
    INTEGRADO?: SortOrder
    DESC_INTEGRADO?: SortOrder
    DATA1?: SortOrder
    DATA2?: SortOrder
    DATA3?: SortOrder
    VALOR1?: SortOrder
    VALOR2?: SortOrder
    VALOR3?: SortOrder
    VALOR4?: SortOrder
    VALOR5?: SortOrder
    VALOR6?: SortOrder
    PROCESSO?: SortOrder
    VALOR7?: SortOrder
  }

  export type EXPORTACAOAvgOrderByAggregateInput = {
    LOJA?: SortOrder
    TIPO_CADASTRO?: SortOrder
    INTEGRADO?: SortOrder
    VALOR1?: SortOrder
    VALOR2?: SortOrder
    VALOR3?: SortOrder
    VALOR4?: SortOrder
    VALOR5?: SortOrder
    VALOR6?: SortOrder
    VALOR7?: SortOrder
  }

  export type EXPORTACAOMaxOrderByAggregateInput = {
    LOJA?: SortOrder
    TIPO_CADASTRO?: SortOrder
    CHAVE?: SortOrder
    DATA_INCLUSAO?: SortOrder
    DATA_INIPROC?: SortOrder
    DATA_FIMPROC?: SortOrder
    INTEGRADO?: SortOrder
    DESC_INTEGRADO?: SortOrder
    DATA1?: SortOrder
    DATA2?: SortOrder
    DATA3?: SortOrder
    VALOR1?: SortOrder
    VALOR2?: SortOrder
    VALOR3?: SortOrder
    VALOR4?: SortOrder
    VALOR5?: SortOrder
    VALOR6?: SortOrder
    PROCESSO?: SortOrder
    VALOR7?: SortOrder
  }

  export type EXPORTACAOMinOrderByAggregateInput = {
    LOJA?: SortOrder
    TIPO_CADASTRO?: SortOrder
    CHAVE?: SortOrder
    DATA_INCLUSAO?: SortOrder
    DATA_INIPROC?: SortOrder
    DATA_FIMPROC?: SortOrder
    INTEGRADO?: SortOrder
    DESC_INTEGRADO?: SortOrder
    DATA1?: SortOrder
    DATA2?: SortOrder
    DATA3?: SortOrder
    VALOR1?: SortOrder
    VALOR2?: SortOrder
    VALOR3?: SortOrder
    VALOR4?: SortOrder
    VALOR5?: SortOrder
    VALOR6?: SortOrder
    PROCESSO?: SortOrder
    VALOR7?: SortOrder
  }

  export type EXPORTACAOSumOrderByAggregateInput = {
    LOJA?: SortOrder
    TIPO_CADASTRO?: SortOrder
    INTEGRADO?: SortOrder
    VALOR1?: SortOrder
    VALOR2?: SortOrder
    VALOR3?: SortOrder
    VALOR4?: SortOrder
    VALOR5?: SortOrder
    VALOR6?: SortOrder
    VALOR7?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FINALIZADORAS_SAPCOD_FINALIZDOMINIOTRANSACAOREDEBANDEIRAMODALIDADEBINCompoundUniqueInput = {
    COD_FINALIZ: number
    DOMINIO: number
    TRANSACAO: number
    REDE: number
    BANDEIRA: number
    MODALIDADE: number
    BIN: number
  }

  export type FINALIZADORAS_SAPCountOrderByAggregateInput = {
    COD_FINALIZ?: SortOrder
    DOMINIO?: SortOrder
    TRANSACAO?: SortOrder
    TIPO?: SortOrder
    DESCRICAO?: SortOrder
    OPERACAO_SAP?: SortOrder
    OPERADORA_SAP?: SortOrder
    REDE?: SortOrder
    BANDEIRA?: SortOrder
    MODALIDADE?: SortOrder
    BIN?: SortOrder
  }

  export type FINALIZADORAS_SAPAvgOrderByAggregateInput = {
    COD_FINALIZ?: SortOrder
    DOMINIO?: SortOrder
    TRANSACAO?: SortOrder
    TIPO?: SortOrder
    REDE?: SortOrder
    BANDEIRA?: SortOrder
    MODALIDADE?: SortOrder
    BIN?: SortOrder
  }

  export type FINALIZADORAS_SAPMaxOrderByAggregateInput = {
    COD_FINALIZ?: SortOrder
    DOMINIO?: SortOrder
    TRANSACAO?: SortOrder
    TIPO?: SortOrder
    DESCRICAO?: SortOrder
    OPERACAO_SAP?: SortOrder
    OPERADORA_SAP?: SortOrder
    REDE?: SortOrder
    BANDEIRA?: SortOrder
    MODALIDADE?: SortOrder
    BIN?: SortOrder
  }

  export type FINALIZADORAS_SAPMinOrderByAggregateInput = {
    COD_FINALIZ?: SortOrder
    DOMINIO?: SortOrder
    TRANSACAO?: SortOrder
    TIPO?: SortOrder
    DESCRICAO?: SortOrder
    OPERACAO_SAP?: SortOrder
    OPERADORA_SAP?: SortOrder
    REDE?: SortOrder
    BANDEIRA?: SortOrder
    MODALIDADE?: SortOrder
    BIN?: SortOrder
  }

  export type FINALIZADORAS_SAPSumOrderByAggregateInput = {
    COD_FINALIZ?: SortOrder
    DOMINIO?: SortOrder
    TRANSACAO?: SortOrder
    TIPO?: SortOrder
    REDE?: SortOrder
    BANDEIRA?: SortOrder
    MODALIDADE?: SortOrder
    BIN?: SortOrder
  }

  export type MONITORAMENTOCountOrderByAggregateInput = {
    THREAD?: SortOrder
    DATA_LOG?: SortOrder
    DESCRICAO?: SortOrder
    STATUS?: SortOrder
  }

  export type MONITORAMENTOAvgOrderByAggregateInput = {
    STATUS?: SortOrder
  }

  export type MONITORAMENTOMaxOrderByAggregateInput = {
    THREAD?: SortOrder
    DATA_LOG?: SortOrder
    DESCRICAO?: SortOrder
    STATUS?: SortOrder
  }

  export type MONITORAMENTOMinOrderByAggregateInput = {
    THREAD?: SortOrder
    DATA_LOG?: SortOrder
    DESCRICAO?: SortOrder
    STATUS?: SortOrder
  }

  export type MONITORAMENTOSumOrderByAggregateInput = {
    STATUS?: SortOrder
  }

  export type PARAMETROS_SAPCountOrderByAggregateInput = {
    ID_PARAMETRO?: SortOrder
    DESCRICAO?: SortOrder
    PARAMETRO?: SortOrder
    TIPO?: SortOrder
  }

  export type PARAMETROS_SAPAvgOrderByAggregateInput = {
    ID_PARAMETRO?: SortOrder
    TIPO?: SortOrder
  }

  export type PARAMETROS_SAPMaxOrderByAggregateInput = {
    ID_PARAMETRO?: SortOrder
    DESCRICAO?: SortOrder
    PARAMETRO?: SortOrder
    TIPO?: SortOrder
  }

  export type PARAMETROS_SAPMinOrderByAggregateInput = {
    ID_PARAMETRO?: SortOrder
    DESCRICAO?: SortOrder
    PARAMETRO?: SortOrder
    TIPO?: SortOrder
  }

  export type PARAMETROS_SAPSumOrderByAggregateInput = {
    ID_PARAMETRO?: SortOrder
    TIPO?: SortOrder
  }

  export type PEDIDO_CONTROLECountOrderByAggregateInput = {
    NUM_PEDIDO?: SortOrder
    LOJA?: SortOrder
    NUM_PDV?: SortOrder
    SITUACAO?: SortOrder
  }

  export type PEDIDO_CONTROLEAvgOrderByAggregateInput = {
    NUM_PEDIDO?: SortOrder
    LOJA?: SortOrder
    NUM_PDV?: SortOrder
    SITUACAO?: SortOrder
  }

  export type PEDIDO_CONTROLEMaxOrderByAggregateInput = {
    NUM_PEDIDO?: SortOrder
    LOJA?: SortOrder
    NUM_PDV?: SortOrder
    SITUACAO?: SortOrder
  }

  export type PEDIDO_CONTROLEMinOrderByAggregateInput = {
    NUM_PEDIDO?: SortOrder
    LOJA?: SortOrder
    NUM_PDV?: SortOrder
    SITUACAO?: SortOrder
  }

  export type PEDIDO_CONTROLESumOrderByAggregateInput = {
    NUM_PEDIDO?: SortOrder
    LOJA?: SortOrder
    NUM_PDV?: SortOrder
    SITUACAO?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}