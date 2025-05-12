
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
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Language
 * 
 */
export type Language = $Result.DefaultSelection<Prisma.$LanguagePayload>
/**
 * Model TranslationKey
 * 
 */
export type TranslationKey = $Result.DefaultSelection<Prisma.$TranslationKeyPayload>
/**
 * Model Translation
 * 
 */
export type Translation = $Result.DefaultSelection<Prisma.$TranslationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TranslationHistory
 * 
 */
export type TranslationHistory = $Result.DefaultSelection<Prisma.$TranslationHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Projects
 * const projects = await prisma.project.findMany()
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
   * // Fetch zero or more Projects
   * const projects = await prisma.project.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.language`: Exposes CRUD operations for the **Language** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.language.findMany()
    * ```
    */
  get language(): Prisma.LanguageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.translationKey`: Exposes CRUD operations for the **TranslationKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TranslationKeys
    * const translationKeys = await prisma.translationKey.findMany()
    * ```
    */
  get translationKey(): Prisma.TranslationKeyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.translation`: Exposes CRUD operations for the **Translation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Translations
    * const translations = await prisma.translation.findMany()
    * ```
    */
  get translation(): Prisma.TranslationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.translationHistory`: Exposes CRUD operations for the **TranslationHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TranslationHistories
    * const translationHistories = await prisma.translationHistory.findMany()
    * ```
    */
  get translationHistory(): Prisma.TranslationHistoryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Project: 'Project',
    Language: 'Language',
    TranslationKey: 'TranslationKey',
    Translation: 'Translation',
    User: 'User',
    TranslationHistory: 'TranslationHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "project" | "language" | "translationKey" | "translation" | "user" | "translationHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Language: {
        payload: Prisma.$LanguagePayload<ExtArgs>
        fields: Prisma.LanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findFirst: {
            args: Prisma.LanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findMany: {
            args: Prisma.LanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          create: {
            args: Prisma.LanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          createMany: {
            args: Prisma.LanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          delete: {
            args: Prisma.LanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          update: {
            args: Prisma.LanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          deleteMany: {
            args: Prisma.LanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LanguageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          upsert: {
            args: Prisma.LanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          aggregate: {
            args: Prisma.LanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguage>
          }
          groupBy: {
            args: Prisma.LanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageCountAggregateOutputType> | number
          }
        }
      }
      TranslationKey: {
        payload: Prisma.$TranslationKeyPayload<ExtArgs>
        fields: Prisma.TranslationKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TranslationKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TranslationKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationKeyPayload>
          }
          findFirst: {
            args: Prisma.TranslationKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TranslationKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationKeyPayload>
          }
          findMany: {
            args: Prisma.TranslationKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationKeyPayload>[]
          }
          create: {
            args: Prisma.TranslationKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationKeyPayload>
          }
          createMany: {
            args: Prisma.TranslationKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TranslationKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationKeyPayload>[]
          }
          delete: {
            args: Prisma.TranslationKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationKeyPayload>
          }
          update: {
            args: Prisma.TranslationKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationKeyPayload>
          }
          deleteMany: {
            args: Prisma.TranslationKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TranslationKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TranslationKeyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationKeyPayload>[]
          }
          upsert: {
            args: Prisma.TranslationKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationKeyPayload>
          }
          aggregate: {
            args: Prisma.TranslationKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTranslationKey>
          }
          groupBy: {
            args: Prisma.TranslationKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<TranslationKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.TranslationKeyCountArgs<ExtArgs>
            result: $Utils.Optional<TranslationKeyCountAggregateOutputType> | number
          }
        }
      }
      Translation: {
        payload: Prisma.$TranslationPayload<ExtArgs>
        fields: Prisma.TranslationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TranslationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TranslationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          findFirst: {
            args: Prisma.TranslationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TranslationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          findMany: {
            args: Prisma.TranslationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>[]
          }
          create: {
            args: Prisma.TranslationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          createMany: {
            args: Prisma.TranslationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TranslationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>[]
          }
          delete: {
            args: Prisma.TranslationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          update: {
            args: Prisma.TranslationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          deleteMany: {
            args: Prisma.TranslationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TranslationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TranslationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>[]
          }
          upsert: {
            args: Prisma.TranslationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationPayload>
          }
          aggregate: {
            args: Prisma.TranslationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTranslation>
          }
          groupBy: {
            args: Prisma.TranslationGroupByArgs<ExtArgs>
            result: $Utils.Optional<TranslationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TranslationCountArgs<ExtArgs>
            result: $Utils.Optional<TranslationCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TranslationHistory: {
        payload: Prisma.$TranslationHistoryPayload<ExtArgs>
        fields: Prisma.TranslationHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TranslationHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TranslationHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationHistoryPayload>
          }
          findFirst: {
            args: Prisma.TranslationHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TranslationHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationHistoryPayload>
          }
          findMany: {
            args: Prisma.TranslationHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationHistoryPayload>[]
          }
          create: {
            args: Prisma.TranslationHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationHistoryPayload>
          }
          createMany: {
            args: Prisma.TranslationHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TranslationHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationHistoryPayload>[]
          }
          delete: {
            args: Prisma.TranslationHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationHistoryPayload>
          }
          update: {
            args: Prisma.TranslationHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TranslationHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TranslationHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TranslationHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationHistoryPayload>[]
          }
          upsert: {
            args: Prisma.TranslationHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TranslationHistoryPayload>
          }
          aggregate: {
            args: Prisma.TranslationHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTranslationHistory>
          }
          groupBy: {
            args: Prisma.TranslationHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TranslationHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TranslationHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TranslationHistoryCountAggregateOutputType> | number
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
    project?: ProjectOmit
    language?: LanguageOmit
    translationKey?: TranslationKeyOmit
    translation?: TranslationOmit
    user?: UserOmit
    translationHistory?: TranslationHistoryOmit
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
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    keys: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keys?: boolean | ProjectCountOutputTypeCountKeysArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranslationKeyWhereInput
  }


  /**
   * Count Type LanguageCountOutputType
   */

  export type LanguageCountOutputType = {
    translations: number
  }

  export type LanguageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translations?: boolean | LanguageCountOutputTypeCountTranslationsArgs
  }

  // Custom InputTypes
  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageCountOutputType
     */
    select?: LanguageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeCountTranslationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranslationWhereInput
  }


  /**
   * Count Type TranslationKeyCountOutputType
   */

  export type TranslationKeyCountOutputType = {
    translations: number
  }

  export type TranslationKeyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translations?: boolean | TranslationKeyCountOutputTypeCountTranslationsArgs
  }

  // Custom InputTypes
  /**
   * TranslationKeyCountOutputType without action
   */
  export type TranslationKeyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationKeyCountOutputType
     */
    select?: TranslationKeyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TranslationKeyCountOutputType without action
   */
  export type TranslationKeyCountOutputTypeCountTranslationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranslationWhereInput
  }


  /**
   * Count Type TranslationCountOutputType
   */

  export type TranslationCountOutputType = {
    TranslationHistory: number
  }

  export type TranslationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TranslationHistory?: boolean | TranslationCountOutputTypeCountTranslationHistoryArgs
  }

  // Custom InputTypes
  /**
   * TranslationCountOutputType without action
   */
  export type TranslationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationCountOutputType
     */
    select?: TranslationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TranslationCountOutputType without action
   */
  export type TranslationCountOutputTypeCountTranslationHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranslationHistoryWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    editedTranslations: number
    editedHistory: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    editedTranslations?: boolean | UserCountOutputTypeCountEditedTranslationsArgs
    editedHistory?: boolean | UserCountOutputTypeCountEditedHistoryArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEditedTranslationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranslationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEditedHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranslationHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    id: number | null
  }

  export type ProjectSumAggregateOutputType = {
    id: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    id?: true
  }

  export type ProjectSumAggregateInputType = {
    id?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    keys?: boolean | Project$keysArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    keys?: boolean | Project$keysArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      keys: Prisma.$TranslationKeyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    keys<T extends Project$keysArgs<ExtArgs> = {}>(args?: Subset<T, Project$keysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'Int'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.keys
   */
  export type Project$keysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationKey
     */
    select?: TranslationKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationKey
     */
    omit?: TranslationKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationKeyInclude<ExtArgs> | null
    where?: TranslationKeyWhereInput
    orderBy?: TranslationKeyOrderByWithRelationInput | TranslationKeyOrderByWithRelationInput[]
    cursor?: TranslationKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TranslationKeyScalarFieldEnum | TranslationKeyScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model Language
   */

  export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null
    _avg: LanguageAvgAggregateOutputType | null
    _sum: LanguageSumAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  export type LanguageAvgAggregateOutputType = {
    id: number | null
  }

  export type LanguageSumAggregateOutputType = {
    id: number | null
  }

  export type LanguageMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LanguageMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LanguageCountAggregateOutputType = {
    id: number
    code: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LanguageAvgAggregateInputType = {
    id?: true
  }

  export type LanguageSumAggregateInputType = {
    id?: true
  }

  export type LanguageMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LanguageMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LanguageCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Language to aggregate.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Languages
    **/
    _count?: true | LanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LanguageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LanguageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageMaxAggregateInputType
  }

  export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguage[P]>
      : GetScalarType<T[P], AggregateLanguage[P]>
  }




  export type LanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageWhereInput
    orderBy?: LanguageOrderByWithAggregationInput | LanguageOrderByWithAggregationInput[]
    by: LanguageScalarFieldEnum[] | LanguageScalarFieldEnum
    having?: LanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageCountAggregateInputType | true
    _avg?: LanguageAvgAggregateInputType
    _sum?: LanguageSumAggregateInputType
    _min?: LanguageMinAggregateInputType
    _max?: LanguageMaxAggregateInputType
  }

  export type LanguageGroupByOutputType = {
    id: number
    code: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: LanguageCountAggregateOutputType | null
    _avg: LanguageAvgAggregateOutputType | null
    _sum: LanguageSumAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  type GetLanguageGroupByPayload<T extends LanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageGroupByOutputType[P]>
        }
      >
    >


  export type LanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    translations?: boolean | Language$translationsArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["language"]>
  export type LanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translations?: boolean | Language$translationsArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LanguageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LanguageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Language"
    objects: {
      translations: Prisma.$TranslationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["language"]>
    composites: {}
  }

  type LanguageGetPayload<S extends boolean | null | undefined | LanguageDefaultArgs> = $Result.GetResult<Prisma.$LanguagePayload, S>

  type LanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguageCountAggregateInputType | true
    }

  export interface LanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Language'], meta: { name: 'Language' } }
    /**
     * Find zero or one Language that matches the filter.
     * @param {LanguageFindUniqueArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageFindUniqueArgs>(args: SelectSubset<T, LanguageFindUniqueArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Language that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguageFindUniqueOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageFindFirstArgs>(args?: SelectSubset<T, LanguageFindFirstArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.language.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.language.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languageWithIdOnly = await prisma.language.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanguageFindManyArgs>(args?: SelectSubset<T, LanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Language.
     * @param {LanguageCreateArgs} args - Arguments to create a Language.
     * @example
     * // Create one Language
     * const Language = await prisma.language.create({
     *   data: {
     *     // ... data to create a Language
     *   }
     * })
     * 
     */
    create<T extends LanguageCreateArgs>(args: SelectSubset<T, LanguageCreateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Languages.
     * @param {LanguageCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageCreateManyArgs>(args?: SelectSubset<T, LanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Languages and returns the data saved in the database.
     * @param {LanguageCreateManyAndReturnArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Languages and only return the `id`
     * const languageWithIdOnly = await prisma.language.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguageCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Language.
     * @param {LanguageDeleteArgs} args - Arguments to delete one Language.
     * @example
     * // Delete one Language
     * const Language = await prisma.language.delete({
     *   where: {
     *     // ... filter to delete one Language
     *   }
     * })
     * 
     */
    delete<T extends LanguageDeleteArgs>(args: SelectSubset<T, LanguageDeleteArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Language.
     * @param {LanguageUpdateArgs} args - Arguments to update one Language.
     * @example
     * // Update one Language
     * const language = await prisma.language.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageUpdateArgs>(args: SelectSubset<T, LanguageUpdateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Languages.
     * @param {LanguageDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.language.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageDeleteManyArgs>(args?: SelectSubset<T, LanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageUpdateManyArgs>(args: SelectSubset<T, LanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages and returns the data updated in the database.
     * @param {LanguageUpdateManyAndReturnArgs} args - Arguments to update many Languages.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Languages and only return the `id`
     * const languageWithIdOnly = await prisma.language.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LanguageUpdateManyAndReturnArgs>(args: SelectSubset<T, LanguageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Language.
     * @param {LanguageUpsertArgs} args - Arguments to update or create a Language.
     * @example
     * // Update or create a Language
     * const language = await prisma.language.upsert({
     *   create: {
     *     // ... data to create a Language
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Language we want to update
     *   }
     * })
     */
    upsert<T extends LanguageUpsertArgs>(args: SelectSubset<T, LanguageUpsertArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.language.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends LanguageCountArgs>(
      args?: Subset<T, LanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LanguageAggregateArgs>(args: Subset<T, LanguageAggregateArgs>): Prisma.PrismaPromise<GetLanguageAggregateType<T>>

    /**
     * Group by Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageGroupByArgs} args - Group by arguments.
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
      T extends LanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageGroupByArgs['orderBy'] }
        : { orderBy?: LanguageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Language model
   */
  readonly fields: LanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Language.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    translations<T extends Language$translationsArgs<ExtArgs> = {}>(args?: Subset<T, Language$translationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Language model
   */
  interface LanguageFieldRefs {
    readonly id: FieldRef<"Language", 'Int'>
    readonly code: FieldRef<"Language", 'String'>
    readonly name: FieldRef<"Language", 'String'>
    readonly createdAt: FieldRef<"Language", 'DateTime'>
    readonly updatedAt: FieldRef<"Language", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Language findUnique
   */
  export type LanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findUniqueOrThrow
   */
  export type LanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findFirst
   */
  export type LanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findFirstOrThrow
   */
  export type LanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findMany
   */
  export type LanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language create
   */
  export type LanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a Language.
     */
    data: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
  }

  /**
   * Language createMany
   */
  export type LanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language createManyAndReturn
   */
  export type LanguageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language update
   */
  export type LanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a Language.
     */
    data: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
    /**
     * Choose, which Language to update.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language updateMany
   */
  export type LanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language updateManyAndReturn
   */
  export type LanguageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language upsert
   */
  export type LanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the Language to update in case it exists.
     */
    where: LanguageWhereUniqueInput
    /**
     * In case the Language found by the `where` argument doesn't exist, create a new Language with this data.
     */
    create: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
    /**
     * In case the Language was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
  }

  /**
   * Language delete
   */
  export type LanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter which Language to delete.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language deleteMany
   */
  export type LanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to delete
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to delete.
     */
    limit?: number
  }

  /**
   * Language.translations
   */
  export type Language$translationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    where?: TranslationWhereInput
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    cursor?: TranslationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }

  /**
   * Language without action
   */
  export type LanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
  }


  /**
   * Model TranslationKey
   */

  export type AggregateTranslationKey = {
    _count: TranslationKeyCountAggregateOutputType | null
    _avg: TranslationKeyAvgAggregateOutputType | null
    _sum: TranslationKeySumAggregateOutputType | null
    _min: TranslationKeyMinAggregateOutputType | null
    _max: TranslationKeyMaxAggregateOutputType | null
  }

  export type TranslationKeyAvgAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type TranslationKeySumAggregateOutputType = {
    id: number | null
    projectId: number | null
  }

  export type TranslationKeyMinAggregateOutputType = {
    id: number | null
    projectId: number | null
    key: string | null
    namespace: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TranslationKeyMaxAggregateOutputType = {
    id: number | null
    projectId: number | null
    key: string | null
    namespace: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TranslationKeyCountAggregateOutputType = {
    id: number
    projectId: number
    key: number
    namespace: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TranslationKeyAvgAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type TranslationKeySumAggregateInputType = {
    id?: true
    projectId?: true
  }

  export type TranslationKeyMinAggregateInputType = {
    id?: true
    projectId?: true
    key?: true
    namespace?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TranslationKeyMaxAggregateInputType = {
    id?: true
    projectId?: true
    key?: true
    namespace?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TranslationKeyCountAggregateInputType = {
    id?: true
    projectId?: true
    key?: true
    namespace?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TranslationKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TranslationKey to aggregate.
     */
    where?: TranslationKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranslationKeys to fetch.
     */
    orderBy?: TranslationKeyOrderByWithRelationInput | TranslationKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TranslationKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranslationKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranslationKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TranslationKeys
    **/
    _count?: true | TranslationKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TranslationKeyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TranslationKeySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TranslationKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TranslationKeyMaxAggregateInputType
  }

  export type GetTranslationKeyAggregateType<T extends TranslationKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateTranslationKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTranslationKey[P]>
      : GetScalarType<T[P], AggregateTranslationKey[P]>
  }




  export type TranslationKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranslationKeyWhereInput
    orderBy?: TranslationKeyOrderByWithAggregationInput | TranslationKeyOrderByWithAggregationInput[]
    by: TranslationKeyScalarFieldEnum[] | TranslationKeyScalarFieldEnum
    having?: TranslationKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TranslationKeyCountAggregateInputType | true
    _avg?: TranslationKeyAvgAggregateInputType
    _sum?: TranslationKeySumAggregateInputType
    _min?: TranslationKeyMinAggregateInputType
    _max?: TranslationKeyMaxAggregateInputType
  }

  export type TranslationKeyGroupByOutputType = {
    id: number
    projectId: number
    key: string
    namespace: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: TranslationKeyCountAggregateOutputType | null
    _avg: TranslationKeyAvgAggregateOutputType | null
    _sum: TranslationKeySumAggregateOutputType | null
    _min: TranslationKeyMinAggregateOutputType | null
    _max: TranslationKeyMaxAggregateOutputType | null
  }

  type GetTranslationKeyGroupByPayload<T extends TranslationKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TranslationKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TranslationKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TranslationKeyGroupByOutputType[P]>
            : GetScalarType<T[P], TranslationKeyGroupByOutputType[P]>
        }
      >
    >


  export type TranslationKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    key?: boolean
    namespace?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    translations?: boolean | TranslationKey$translationsArgs<ExtArgs>
    _count?: boolean | TranslationKeyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["translationKey"]>

  export type TranslationKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    key?: boolean
    namespace?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["translationKey"]>

  export type TranslationKeySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    key?: boolean
    namespace?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["translationKey"]>

  export type TranslationKeySelectScalar = {
    id?: boolean
    projectId?: boolean
    key?: boolean
    namespace?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TranslationKeyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "key" | "namespace" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["translationKey"]>
  export type TranslationKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    translations?: boolean | TranslationKey$translationsArgs<ExtArgs>
    _count?: boolean | TranslationKeyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TranslationKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type TranslationKeyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $TranslationKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TranslationKey"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      translations: Prisma.$TranslationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      projectId: number
      key: string
      namespace: string | null
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["translationKey"]>
    composites: {}
  }

  type TranslationKeyGetPayload<S extends boolean | null | undefined | TranslationKeyDefaultArgs> = $Result.GetResult<Prisma.$TranslationKeyPayload, S>

  type TranslationKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TranslationKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TranslationKeyCountAggregateInputType | true
    }

  export interface TranslationKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TranslationKey'], meta: { name: 'TranslationKey' } }
    /**
     * Find zero or one TranslationKey that matches the filter.
     * @param {TranslationKeyFindUniqueArgs} args - Arguments to find a TranslationKey
     * @example
     * // Get one TranslationKey
     * const translationKey = await prisma.translationKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TranslationKeyFindUniqueArgs>(args: SelectSubset<T, TranslationKeyFindUniqueArgs<ExtArgs>>): Prisma__TranslationKeyClient<$Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TranslationKey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TranslationKeyFindUniqueOrThrowArgs} args - Arguments to find a TranslationKey
     * @example
     * // Get one TranslationKey
     * const translationKey = await prisma.translationKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TranslationKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, TranslationKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TranslationKeyClient<$Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TranslationKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationKeyFindFirstArgs} args - Arguments to find a TranslationKey
     * @example
     * // Get one TranslationKey
     * const translationKey = await prisma.translationKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TranslationKeyFindFirstArgs>(args?: SelectSubset<T, TranslationKeyFindFirstArgs<ExtArgs>>): Prisma__TranslationKeyClient<$Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TranslationKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationKeyFindFirstOrThrowArgs} args - Arguments to find a TranslationKey
     * @example
     * // Get one TranslationKey
     * const translationKey = await prisma.translationKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TranslationKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, TranslationKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__TranslationKeyClient<$Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TranslationKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TranslationKeys
     * const translationKeys = await prisma.translationKey.findMany()
     * 
     * // Get first 10 TranslationKeys
     * const translationKeys = await prisma.translationKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const translationKeyWithIdOnly = await prisma.translationKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TranslationKeyFindManyArgs>(args?: SelectSubset<T, TranslationKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TranslationKey.
     * @param {TranslationKeyCreateArgs} args - Arguments to create a TranslationKey.
     * @example
     * // Create one TranslationKey
     * const TranslationKey = await prisma.translationKey.create({
     *   data: {
     *     // ... data to create a TranslationKey
     *   }
     * })
     * 
     */
    create<T extends TranslationKeyCreateArgs>(args: SelectSubset<T, TranslationKeyCreateArgs<ExtArgs>>): Prisma__TranslationKeyClient<$Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TranslationKeys.
     * @param {TranslationKeyCreateManyArgs} args - Arguments to create many TranslationKeys.
     * @example
     * // Create many TranslationKeys
     * const translationKey = await prisma.translationKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TranslationKeyCreateManyArgs>(args?: SelectSubset<T, TranslationKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TranslationKeys and returns the data saved in the database.
     * @param {TranslationKeyCreateManyAndReturnArgs} args - Arguments to create many TranslationKeys.
     * @example
     * // Create many TranslationKeys
     * const translationKey = await prisma.translationKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TranslationKeys and only return the `id`
     * const translationKeyWithIdOnly = await prisma.translationKey.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TranslationKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, TranslationKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TranslationKey.
     * @param {TranslationKeyDeleteArgs} args - Arguments to delete one TranslationKey.
     * @example
     * // Delete one TranslationKey
     * const TranslationKey = await prisma.translationKey.delete({
     *   where: {
     *     // ... filter to delete one TranslationKey
     *   }
     * })
     * 
     */
    delete<T extends TranslationKeyDeleteArgs>(args: SelectSubset<T, TranslationKeyDeleteArgs<ExtArgs>>): Prisma__TranslationKeyClient<$Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TranslationKey.
     * @param {TranslationKeyUpdateArgs} args - Arguments to update one TranslationKey.
     * @example
     * // Update one TranslationKey
     * const translationKey = await prisma.translationKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TranslationKeyUpdateArgs>(args: SelectSubset<T, TranslationKeyUpdateArgs<ExtArgs>>): Prisma__TranslationKeyClient<$Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TranslationKeys.
     * @param {TranslationKeyDeleteManyArgs} args - Arguments to filter TranslationKeys to delete.
     * @example
     * // Delete a few TranslationKeys
     * const { count } = await prisma.translationKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TranslationKeyDeleteManyArgs>(args?: SelectSubset<T, TranslationKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TranslationKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TranslationKeys
     * const translationKey = await prisma.translationKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TranslationKeyUpdateManyArgs>(args: SelectSubset<T, TranslationKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TranslationKeys and returns the data updated in the database.
     * @param {TranslationKeyUpdateManyAndReturnArgs} args - Arguments to update many TranslationKeys.
     * @example
     * // Update many TranslationKeys
     * const translationKey = await prisma.translationKey.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TranslationKeys and only return the `id`
     * const translationKeyWithIdOnly = await prisma.translationKey.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TranslationKeyUpdateManyAndReturnArgs>(args: SelectSubset<T, TranslationKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TranslationKey.
     * @param {TranslationKeyUpsertArgs} args - Arguments to update or create a TranslationKey.
     * @example
     * // Update or create a TranslationKey
     * const translationKey = await prisma.translationKey.upsert({
     *   create: {
     *     // ... data to create a TranslationKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TranslationKey we want to update
     *   }
     * })
     */
    upsert<T extends TranslationKeyUpsertArgs>(args: SelectSubset<T, TranslationKeyUpsertArgs<ExtArgs>>): Prisma__TranslationKeyClient<$Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TranslationKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationKeyCountArgs} args - Arguments to filter TranslationKeys to count.
     * @example
     * // Count the number of TranslationKeys
     * const count = await prisma.translationKey.count({
     *   where: {
     *     // ... the filter for the TranslationKeys we want to count
     *   }
     * })
    **/
    count<T extends TranslationKeyCountArgs>(
      args?: Subset<T, TranslationKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TranslationKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TranslationKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TranslationKeyAggregateArgs>(args: Subset<T, TranslationKeyAggregateArgs>): Prisma.PrismaPromise<GetTranslationKeyAggregateType<T>>

    /**
     * Group by TranslationKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationKeyGroupByArgs} args - Group by arguments.
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
      T extends TranslationKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TranslationKeyGroupByArgs['orderBy'] }
        : { orderBy?: TranslationKeyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TranslationKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranslationKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TranslationKey model
   */
  readonly fields: TranslationKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TranslationKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TranslationKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    translations<T extends TranslationKey$translationsArgs<ExtArgs> = {}>(args?: Subset<T, TranslationKey$translationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TranslationKey model
   */
  interface TranslationKeyFieldRefs {
    readonly id: FieldRef<"TranslationKey", 'Int'>
    readonly projectId: FieldRef<"TranslationKey", 'Int'>
    readonly key: FieldRef<"TranslationKey", 'String'>
    readonly namespace: FieldRef<"TranslationKey", 'String'>
    readonly description: FieldRef<"TranslationKey", 'String'>
    readonly createdAt: FieldRef<"TranslationKey", 'DateTime'>
    readonly updatedAt: FieldRef<"TranslationKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TranslationKey findUnique
   */
  export type TranslationKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationKey
     */
    select?: TranslationKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationKey
     */
    omit?: TranslationKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationKeyInclude<ExtArgs> | null
    /**
     * Filter, which TranslationKey to fetch.
     */
    where: TranslationKeyWhereUniqueInput
  }

  /**
   * TranslationKey findUniqueOrThrow
   */
  export type TranslationKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationKey
     */
    select?: TranslationKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationKey
     */
    omit?: TranslationKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationKeyInclude<ExtArgs> | null
    /**
     * Filter, which TranslationKey to fetch.
     */
    where: TranslationKeyWhereUniqueInput
  }

  /**
   * TranslationKey findFirst
   */
  export type TranslationKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationKey
     */
    select?: TranslationKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationKey
     */
    omit?: TranslationKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationKeyInclude<ExtArgs> | null
    /**
     * Filter, which TranslationKey to fetch.
     */
    where?: TranslationKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranslationKeys to fetch.
     */
    orderBy?: TranslationKeyOrderByWithRelationInput | TranslationKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TranslationKeys.
     */
    cursor?: TranslationKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranslationKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranslationKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TranslationKeys.
     */
    distinct?: TranslationKeyScalarFieldEnum | TranslationKeyScalarFieldEnum[]
  }

  /**
   * TranslationKey findFirstOrThrow
   */
  export type TranslationKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationKey
     */
    select?: TranslationKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationKey
     */
    omit?: TranslationKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationKeyInclude<ExtArgs> | null
    /**
     * Filter, which TranslationKey to fetch.
     */
    where?: TranslationKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranslationKeys to fetch.
     */
    orderBy?: TranslationKeyOrderByWithRelationInput | TranslationKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TranslationKeys.
     */
    cursor?: TranslationKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranslationKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranslationKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TranslationKeys.
     */
    distinct?: TranslationKeyScalarFieldEnum | TranslationKeyScalarFieldEnum[]
  }

  /**
   * TranslationKey findMany
   */
  export type TranslationKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationKey
     */
    select?: TranslationKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationKey
     */
    omit?: TranslationKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationKeyInclude<ExtArgs> | null
    /**
     * Filter, which TranslationKeys to fetch.
     */
    where?: TranslationKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranslationKeys to fetch.
     */
    orderBy?: TranslationKeyOrderByWithRelationInput | TranslationKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TranslationKeys.
     */
    cursor?: TranslationKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranslationKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranslationKeys.
     */
    skip?: number
    distinct?: TranslationKeyScalarFieldEnum | TranslationKeyScalarFieldEnum[]
  }

  /**
   * TranslationKey create
   */
  export type TranslationKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationKey
     */
    select?: TranslationKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationKey
     */
    omit?: TranslationKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a TranslationKey.
     */
    data: XOR<TranslationKeyCreateInput, TranslationKeyUncheckedCreateInput>
  }

  /**
   * TranslationKey createMany
   */
  export type TranslationKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TranslationKeys.
     */
    data: TranslationKeyCreateManyInput | TranslationKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TranslationKey createManyAndReturn
   */
  export type TranslationKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationKey
     */
    select?: TranslationKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationKey
     */
    omit?: TranslationKeyOmit<ExtArgs> | null
    /**
     * The data used to create many TranslationKeys.
     */
    data: TranslationKeyCreateManyInput | TranslationKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TranslationKey update
   */
  export type TranslationKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationKey
     */
    select?: TranslationKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationKey
     */
    omit?: TranslationKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a TranslationKey.
     */
    data: XOR<TranslationKeyUpdateInput, TranslationKeyUncheckedUpdateInput>
    /**
     * Choose, which TranslationKey to update.
     */
    where: TranslationKeyWhereUniqueInput
  }

  /**
   * TranslationKey updateMany
   */
  export type TranslationKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TranslationKeys.
     */
    data: XOR<TranslationKeyUpdateManyMutationInput, TranslationKeyUncheckedUpdateManyInput>
    /**
     * Filter which TranslationKeys to update
     */
    where?: TranslationKeyWhereInput
    /**
     * Limit how many TranslationKeys to update.
     */
    limit?: number
  }

  /**
   * TranslationKey updateManyAndReturn
   */
  export type TranslationKeyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationKey
     */
    select?: TranslationKeySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationKey
     */
    omit?: TranslationKeyOmit<ExtArgs> | null
    /**
     * The data used to update TranslationKeys.
     */
    data: XOR<TranslationKeyUpdateManyMutationInput, TranslationKeyUncheckedUpdateManyInput>
    /**
     * Filter which TranslationKeys to update
     */
    where?: TranslationKeyWhereInput
    /**
     * Limit how many TranslationKeys to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationKeyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TranslationKey upsert
   */
  export type TranslationKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationKey
     */
    select?: TranslationKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationKey
     */
    omit?: TranslationKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the TranslationKey to update in case it exists.
     */
    where: TranslationKeyWhereUniqueInput
    /**
     * In case the TranslationKey found by the `where` argument doesn't exist, create a new TranslationKey with this data.
     */
    create: XOR<TranslationKeyCreateInput, TranslationKeyUncheckedCreateInput>
    /**
     * In case the TranslationKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TranslationKeyUpdateInput, TranslationKeyUncheckedUpdateInput>
  }

  /**
   * TranslationKey delete
   */
  export type TranslationKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationKey
     */
    select?: TranslationKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationKey
     */
    omit?: TranslationKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationKeyInclude<ExtArgs> | null
    /**
     * Filter which TranslationKey to delete.
     */
    where: TranslationKeyWhereUniqueInput
  }

  /**
   * TranslationKey deleteMany
   */
  export type TranslationKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TranslationKeys to delete
     */
    where?: TranslationKeyWhereInput
    /**
     * Limit how many TranslationKeys to delete.
     */
    limit?: number
  }

  /**
   * TranslationKey.translations
   */
  export type TranslationKey$translationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    where?: TranslationWhereInput
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    cursor?: TranslationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }

  /**
   * TranslationKey without action
   */
  export type TranslationKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationKey
     */
    select?: TranslationKeySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationKey
     */
    omit?: TranslationKeyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationKeyInclude<ExtArgs> | null
  }


  /**
   * Model Translation
   */

  export type AggregateTranslation = {
    _count: TranslationCountAggregateOutputType | null
    _avg: TranslationAvgAggregateOutputType | null
    _sum: TranslationSumAggregateOutputType | null
    _min: TranslationMinAggregateOutputType | null
    _max: TranslationMaxAggregateOutputType | null
  }

  export type TranslationAvgAggregateOutputType = {
    id: number | null
    translationKeyId: number | null
    languageId: number | null
    editedBy: number | null
  }

  export type TranslationSumAggregateOutputType = {
    id: number | null
    translationKeyId: number | null
    languageId: number | null
    editedBy: number | null
  }

  export type TranslationMinAggregateOutputType = {
    id: number | null
    translationKeyId: number | null
    languageId: number | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
    editedBy: number | null
  }

  export type TranslationMaxAggregateOutputType = {
    id: number | null
    translationKeyId: number | null
    languageId: number | null
    value: string | null
    createdAt: Date | null
    updatedAt: Date | null
    editedBy: number | null
  }

  export type TranslationCountAggregateOutputType = {
    id: number
    translationKeyId: number
    languageId: number
    value: number
    createdAt: number
    updatedAt: number
    editedBy: number
    _all: number
  }


  export type TranslationAvgAggregateInputType = {
    id?: true
    translationKeyId?: true
    languageId?: true
    editedBy?: true
  }

  export type TranslationSumAggregateInputType = {
    id?: true
    translationKeyId?: true
    languageId?: true
    editedBy?: true
  }

  export type TranslationMinAggregateInputType = {
    id?: true
    translationKeyId?: true
    languageId?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    editedBy?: true
  }

  export type TranslationMaxAggregateInputType = {
    id?: true
    translationKeyId?: true
    languageId?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    editedBy?: true
  }

  export type TranslationCountAggregateInputType = {
    id?: true
    translationKeyId?: true
    languageId?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    editedBy?: true
    _all?: true
  }

  export type TranslationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Translation to aggregate.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Translations
    **/
    _count?: true | TranslationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TranslationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TranslationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TranslationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TranslationMaxAggregateInputType
  }

  export type GetTranslationAggregateType<T extends TranslationAggregateArgs> = {
        [P in keyof T & keyof AggregateTranslation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTranslation[P]>
      : GetScalarType<T[P], AggregateTranslation[P]>
  }




  export type TranslationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranslationWhereInput
    orderBy?: TranslationOrderByWithAggregationInput | TranslationOrderByWithAggregationInput[]
    by: TranslationScalarFieldEnum[] | TranslationScalarFieldEnum
    having?: TranslationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TranslationCountAggregateInputType | true
    _avg?: TranslationAvgAggregateInputType
    _sum?: TranslationSumAggregateInputType
    _min?: TranslationMinAggregateInputType
    _max?: TranslationMaxAggregateInputType
  }

  export type TranslationGroupByOutputType = {
    id: number
    translationKeyId: number
    languageId: number
    value: string
    createdAt: Date
    updatedAt: Date
    editedBy: number | null
    _count: TranslationCountAggregateOutputType | null
    _avg: TranslationAvgAggregateOutputType | null
    _sum: TranslationSumAggregateOutputType | null
    _min: TranslationMinAggregateOutputType | null
    _max: TranslationMaxAggregateOutputType | null
  }

  type GetTranslationGroupByPayload<T extends TranslationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TranslationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TranslationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TranslationGroupByOutputType[P]>
            : GetScalarType<T[P], TranslationGroupByOutputType[P]>
        }
      >
    >


  export type TranslationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    translationKeyId?: boolean
    languageId?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    editedBy?: boolean
    translationKey?: boolean | TranslationKeyDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
    editor?: boolean | Translation$editorArgs<ExtArgs>
    TranslationHistory?: boolean | Translation$TranslationHistoryArgs<ExtArgs>
    _count?: boolean | TranslationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["translation"]>

  export type TranslationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    translationKeyId?: boolean
    languageId?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    editedBy?: boolean
    translationKey?: boolean | TranslationKeyDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
    editor?: boolean | Translation$editorArgs<ExtArgs>
  }, ExtArgs["result"]["translation"]>

  export type TranslationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    translationKeyId?: boolean
    languageId?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    editedBy?: boolean
    translationKey?: boolean | TranslationKeyDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
    editor?: boolean | Translation$editorArgs<ExtArgs>
  }, ExtArgs["result"]["translation"]>

  export type TranslationSelectScalar = {
    id?: boolean
    translationKeyId?: boolean
    languageId?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    editedBy?: boolean
  }

  export type TranslationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "translationKeyId" | "languageId" | "value" | "createdAt" | "updatedAt" | "editedBy", ExtArgs["result"]["translation"]>
  export type TranslationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translationKey?: boolean | TranslationKeyDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
    editor?: boolean | Translation$editorArgs<ExtArgs>
    TranslationHistory?: boolean | Translation$TranslationHistoryArgs<ExtArgs>
    _count?: boolean | TranslationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TranslationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translationKey?: boolean | TranslationKeyDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
    editor?: boolean | Translation$editorArgs<ExtArgs>
  }
  export type TranslationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translationKey?: boolean | TranslationKeyDefaultArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
    editor?: boolean | Translation$editorArgs<ExtArgs>
  }

  export type $TranslationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Translation"
    objects: {
      translationKey: Prisma.$TranslationKeyPayload<ExtArgs>
      language: Prisma.$LanguagePayload<ExtArgs>
      editor: Prisma.$UserPayload<ExtArgs> | null
      TranslationHistory: Prisma.$TranslationHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      translationKeyId: number
      languageId: number
      value: string
      createdAt: Date
      updatedAt: Date
      editedBy: number | null
    }, ExtArgs["result"]["translation"]>
    composites: {}
  }

  type TranslationGetPayload<S extends boolean | null | undefined | TranslationDefaultArgs> = $Result.GetResult<Prisma.$TranslationPayload, S>

  type TranslationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TranslationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TranslationCountAggregateInputType | true
    }

  export interface TranslationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Translation'], meta: { name: 'Translation' } }
    /**
     * Find zero or one Translation that matches the filter.
     * @param {TranslationFindUniqueArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TranslationFindUniqueArgs>(args: SelectSubset<T, TranslationFindUniqueArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Translation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TranslationFindUniqueOrThrowArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TranslationFindUniqueOrThrowArgs>(args: SelectSubset<T, TranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Translation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationFindFirstArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TranslationFindFirstArgs>(args?: SelectSubset<T, TranslationFindFirstArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Translation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationFindFirstOrThrowArgs} args - Arguments to find a Translation
     * @example
     * // Get one Translation
     * const translation = await prisma.translation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TranslationFindFirstOrThrowArgs>(args?: SelectSubset<T, TranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Translations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Translations
     * const translations = await prisma.translation.findMany()
     * 
     * // Get first 10 Translations
     * const translations = await prisma.translation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const translationWithIdOnly = await prisma.translation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TranslationFindManyArgs>(args?: SelectSubset<T, TranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Translation.
     * @param {TranslationCreateArgs} args - Arguments to create a Translation.
     * @example
     * // Create one Translation
     * const Translation = await prisma.translation.create({
     *   data: {
     *     // ... data to create a Translation
     *   }
     * })
     * 
     */
    create<T extends TranslationCreateArgs>(args: SelectSubset<T, TranslationCreateArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Translations.
     * @param {TranslationCreateManyArgs} args - Arguments to create many Translations.
     * @example
     * // Create many Translations
     * const translation = await prisma.translation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TranslationCreateManyArgs>(args?: SelectSubset<T, TranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Translations and returns the data saved in the database.
     * @param {TranslationCreateManyAndReturnArgs} args - Arguments to create many Translations.
     * @example
     * // Create many Translations
     * const translation = await prisma.translation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Translations and only return the `id`
     * const translationWithIdOnly = await prisma.translation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TranslationCreateManyAndReturnArgs>(args?: SelectSubset<T, TranslationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Translation.
     * @param {TranslationDeleteArgs} args - Arguments to delete one Translation.
     * @example
     * // Delete one Translation
     * const Translation = await prisma.translation.delete({
     *   where: {
     *     // ... filter to delete one Translation
     *   }
     * })
     * 
     */
    delete<T extends TranslationDeleteArgs>(args: SelectSubset<T, TranslationDeleteArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Translation.
     * @param {TranslationUpdateArgs} args - Arguments to update one Translation.
     * @example
     * // Update one Translation
     * const translation = await prisma.translation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TranslationUpdateArgs>(args: SelectSubset<T, TranslationUpdateArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Translations.
     * @param {TranslationDeleteManyArgs} args - Arguments to filter Translations to delete.
     * @example
     * // Delete a few Translations
     * const { count } = await prisma.translation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TranslationDeleteManyArgs>(args?: SelectSubset<T, TranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Translations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Translations
     * const translation = await prisma.translation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TranslationUpdateManyArgs>(args: SelectSubset<T, TranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Translations and returns the data updated in the database.
     * @param {TranslationUpdateManyAndReturnArgs} args - Arguments to update many Translations.
     * @example
     * // Update many Translations
     * const translation = await prisma.translation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Translations and only return the `id`
     * const translationWithIdOnly = await prisma.translation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TranslationUpdateManyAndReturnArgs>(args: SelectSubset<T, TranslationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Translation.
     * @param {TranslationUpsertArgs} args - Arguments to update or create a Translation.
     * @example
     * // Update or create a Translation
     * const translation = await prisma.translation.upsert({
     *   create: {
     *     // ... data to create a Translation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Translation we want to update
     *   }
     * })
     */
    upsert<T extends TranslationUpsertArgs>(args: SelectSubset<T, TranslationUpsertArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Translations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationCountArgs} args - Arguments to filter Translations to count.
     * @example
     * // Count the number of Translations
     * const count = await prisma.translation.count({
     *   where: {
     *     // ... the filter for the Translations we want to count
     *   }
     * })
    **/
    count<T extends TranslationCountArgs>(
      args?: Subset<T, TranslationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TranslationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Translation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TranslationAggregateArgs>(args: Subset<T, TranslationAggregateArgs>): Prisma.PrismaPromise<GetTranslationAggregateType<T>>

    /**
     * Group by Translation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationGroupByArgs} args - Group by arguments.
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
      T extends TranslationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TranslationGroupByArgs['orderBy'] }
        : { orderBy?: TranslationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Translation model
   */
  readonly fields: TranslationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Translation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TranslationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    translationKey<T extends TranslationKeyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TranslationKeyDefaultArgs<ExtArgs>>): Prisma__TranslationKeyClient<$Result.GetResult<Prisma.$TranslationKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    language<T extends LanguageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguageDefaultArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    editor<T extends Translation$editorArgs<ExtArgs> = {}>(args?: Subset<T, Translation$editorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    TranslationHistory<T extends Translation$TranslationHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Translation$TranslationHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Translation model
   */
  interface TranslationFieldRefs {
    readonly id: FieldRef<"Translation", 'Int'>
    readonly translationKeyId: FieldRef<"Translation", 'Int'>
    readonly languageId: FieldRef<"Translation", 'Int'>
    readonly value: FieldRef<"Translation", 'String'>
    readonly createdAt: FieldRef<"Translation", 'DateTime'>
    readonly updatedAt: FieldRef<"Translation", 'DateTime'>
    readonly editedBy: FieldRef<"Translation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Translation findUnique
   */
  export type TranslationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where: TranslationWhereUniqueInput
  }

  /**
   * Translation findUniqueOrThrow
   */
  export type TranslationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where: TranslationWhereUniqueInput
  }

  /**
   * Translation findFirst
   */
  export type TranslationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Translations.
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Translations.
     */
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }

  /**
   * Translation findFirstOrThrow
   */
  export type TranslationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * Filter, which Translation to fetch.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Translations.
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Translations.
     */
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }

  /**
   * Translation findMany
   */
  export type TranslationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * Filter, which Translations to fetch.
     */
    where?: TranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Translations to fetch.
     */
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Translations.
     */
    cursor?: TranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Translations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Translations.
     */
    skip?: number
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }

  /**
   * Translation create
   */
  export type TranslationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * The data needed to create a Translation.
     */
    data: XOR<TranslationCreateInput, TranslationUncheckedCreateInput>
  }

  /**
   * Translation createMany
   */
  export type TranslationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Translations.
     */
    data: TranslationCreateManyInput | TranslationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Translation createManyAndReturn
   */
  export type TranslationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * The data used to create many Translations.
     */
    data: TranslationCreateManyInput | TranslationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Translation update
   */
  export type TranslationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * The data needed to update a Translation.
     */
    data: XOR<TranslationUpdateInput, TranslationUncheckedUpdateInput>
    /**
     * Choose, which Translation to update.
     */
    where: TranslationWhereUniqueInput
  }

  /**
   * Translation updateMany
   */
  export type TranslationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Translations.
     */
    data: XOR<TranslationUpdateManyMutationInput, TranslationUncheckedUpdateManyInput>
    /**
     * Filter which Translations to update
     */
    where?: TranslationWhereInput
    /**
     * Limit how many Translations to update.
     */
    limit?: number
  }

  /**
   * Translation updateManyAndReturn
   */
  export type TranslationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * The data used to update Translations.
     */
    data: XOR<TranslationUpdateManyMutationInput, TranslationUncheckedUpdateManyInput>
    /**
     * Filter which Translations to update
     */
    where?: TranslationWhereInput
    /**
     * Limit how many Translations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Translation upsert
   */
  export type TranslationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * The filter to search for the Translation to update in case it exists.
     */
    where: TranslationWhereUniqueInput
    /**
     * In case the Translation found by the `where` argument doesn't exist, create a new Translation with this data.
     */
    create: XOR<TranslationCreateInput, TranslationUncheckedCreateInput>
    /**
     * In case the Translation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TranslationUpdateInput, TranslationUncheckedUpdateInput>
  }

  /**
   * Translation delete
   */
  export type TranslationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    /**
     * Filter which Translation to delete.
     */
    where: TranslationWhereUniqueInput
  }

  /**
   * Translation deleteMany
   */
  export type TranslationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Translations to delete
     */
    where?: TranslationWhereInput
    /**
     * Limit how many Translations to delete.
     */
    limit?: number
  }

  /**
   * Translation.editor
   */
  export type Translation$editorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Translation.TranslationHistory
   */
  export type Translation$TranslationHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationHistoryInclude<ExtArgs> | null
    where?: TranslationHistoryWhereInput
    orderBy?: TranslationHistoryOrderByWithRelationInput | TranslationHistoryOrderByWithRelationInput[]
    cursor?: TranslationHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TranslationHistoryScalarFieldEnum | TranslationHistoryScalarFieldEnum[]
  }

  /**
   * Translation without action
   */
  export type TranslationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    editedTranslations?: boolean | User$editedTranslationsArgs<ExtArgs>
    editedHistory?: boolean | User$editedHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    editedTranslations?: boolean | User$editedTranslationsArgs<ExtArgs>
    editedHistory?: boolean | User$editedHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      editedTranslations: Prisma.$TranslationPayload<ExtArgs>[]
      editedHistory: Prisma.$TranslationHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    editedTranslations<T extends User$editedTranslationsArgs<ExtArgs> = {}>(args?: Subset<T, User$editedTranslationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    editedHistory<T extends User$editedHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$editedHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.editedTranslations
   */
  export type User$editedTranslationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Translation
     */
    select?: TranslationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Translation
     */
    omit?: TranslationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationInclude<ExtArgs> | null
    where?: TranslationWhereInput
    orderBy?: TranslationOrderByWithRelationInput | TranslationOrderByWithRelationInput[]
    cursor?: TranslationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TranslationScalarFieldEnum | TranslationScalarFieldEnum[]
  }

  /**
   * User.editedHistory
   */
  export type User$editedHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationHistoryInclude<ExtArgs> | null
    where?: TranslationHistoryWhereInput
    orderBy?: TranslationHistoryOrderByWithRelationInput | TranslationHistoryOrderByWithRelationInput[]
    cursor?: TranslationHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TranslationHistoryScalarFieldEnum | TranslationHistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TranslationHistory
   */

  export type AggregateTranslationHistory = {
    _count: TranslationHistoryCountAggregateOutputType | null
    _avg: TranslationHistoryAvgAggregateOutputType | null
    _sum: TranslationHistorySumAggregateOutputType | null
    _min: TranslationHistoryMinAggregateOutputType | null
    _max: TranslationHistoryMaxAggregateOutputType | null
  }

  export type TranslationHistoryAvgAggregateOutputType = {
    id: number | null
    translationId: number | null
    editedBy: number | null
  }

  export type TranslationHistorySumAggregateOutputType = {
    id: number | null
    translationId: number | null
    editedBy: number | null
  }

  export type TranslationHistoryMinAggregateOutputType = {
    id: number | null
    translationId: number | null
    newValue: string | null
    oldValue: string | null
    createdAt: Date | null
    editedBy: number | null
  }

  export type TranslationHistoryMaxAggregateOutputType = {
    id: number | null
    translationId: number | null
    newValue: string | null
    oldValue: string | null
    createdAt: Date | null
    editedBy: number | null
  }

  export type TranslationHistoryCountAggregateOutputType = {
    id: number
    translationId: number
    newValue: number
    oldValue: number
    createdAt: number
    editedBy: number
    _all: number
  }


  export type TranslationHistoryAvgAggregateInputType = {
    id?: true
    translationId?: true
    editedBy?: true
  }

  export type TranslationHistorySumAggregateInputType = {
    id?: true
    translationId?: true
    editedBy?: true
  }

  export type TranslationHistoryMinAggregateInputType = {
    id?: true
    translationId?: true
    newValue?: true
    oldValue?: true
    createdAt?: true
    editedBy?: true
  }

  export type TranslationHistoryMaxAggregateInputType = {
    id?: true
    translationId?: true
    newValue?: true
    oldValue?: true
    createdAt?: true
    editedBy?: true
  }

  export type TranslationHistoryCountAggregateInputType = {
    id?: true
    translationId?: true
    newValue?: true
    oldValue?: true
    createdAt?: true
    editedBy?: true
    _all?: true
  }

  export type TranslationHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TranslationHistory to aggregate.
     */
    where?: TranslationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranslationHistories to fetch.
     */
    orderBy?: TranslationHistoryOrderByWithRelationInput | TranslationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TranslationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranslationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranslationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TranslationHistories
    **/
    _count?: true | TranslationHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TranslationHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TranslationHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TranslationHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TranslationHistoryMaxAggregateInputType
  }

  export type GetTranslationHistoryAggregateType<T extends TranslationHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTranslationHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTranslationHistory[P]>
      : GetScalarType<T[P], AggregateTranslationHistory[P]>
  }




  export type TranslationHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TranslationHistoryWhereInput
    orderBy?: TranslationHistoryOrderByWithAggregationInput | TranslationHistoryOrderByWithAggregationInput[]
    by: TranslationHistoryScalarFieldEnum[] | TranslationHistoryScalarFieldEnum
    having?: TranslationHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TranslationHistoryCountAggregateInputType | true
    _avg?: TranslationHistoryAvgAggregateInputType
    _sum?: TranslationHistorySumAggregateInputType
    _min?: TranslationHistoryMinAggregateInputType
    _max?: TranslationHistoryMaxAggregateInputType
  }

  export type TranslationHistoryGroupByOutputType = {
    id: number
    translationId: number
    newValue: string
    oldValue: string
    createdAt: Date
    editedBy: number | null
    _count: TranslationHistoryCountAggregateOutputType | null
    _avg: TranslationHistoryAvgAggregateOutputType | null
    _sum: TranslationHistorySumAggregateOutputType | null
    _min: TranslationHistoryMinAggregateOutputType | null
    _max: TranslationHistoryMaxAggregateOutputType | null
  }

  type GetTranslationHistoryGroupByPayload<T extends TranslationHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TranslationHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TranslationHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TranslationHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TranslationHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TranslationHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    translationId?: boolean
    newValue?: boolean
    oldValue?: boolean
    createdAt?: boolean
    editedBy?: boolean
    translation?: boolean | TranslationDefaultArgs<ExtArgs>
    editor?: boolean | TranslationHistory$editorArgs<ExtArgs>
  }, ExtArgs["result"]["translationHistory"]>

  export type TranslationHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    translationId?: boolean
    newValue?: boolean
    oldValue?: boolean
    createdAt?: boolean
    editedBy?: boolean
    translation?: boolean | TranslationDefaultArgs<ExtArgs>
    editor?: boolean | TranslationHistory$editorArgs<ExtArgs>
  }, ExtArgs["result"]["translationHistory"]>

  export type TranslationHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    translationId?: boolean
    newValue?: boolean
    oldValue?: boolean
    createdAt?: boolean
    editedBy?: boolean
    translation?: boolean | TranslationDefaultArgs<ExtArgs>
    editor?: boolean | TranslationHistory$editorArgs<ExtArgs>
  }, ExtArgs["result"]["translationHistory"]>

  export type TranslationHistorySelectScalar = {
    id?: boolean
    translationId?: boolean
    newValue?: boolean
    oldValue?: boolean
    createdAt?: boolean
    editedBy?: boolean
  }

  export type TranslationHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "translationId" | "newValue" | "oldValue" | "createdAt" | "editedBy", ExtArgs["result"]["translationHistory"]>
  export type TranslationHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translation?: boolean | TranslationDefaultArgs<ExtArgs>
    editor?: boolean | TranslationHistory$editorArgs<ExtArgs>
  }
  export type TranslationHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translation?: boolean | TranslationDefaultArgs<ExtArgs>
    editor?: boolean | TranslationHistory$editorArgs<ExtArgs>
  }
  export type TranslationHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translation?: boolean | TranslationDefaultArgs<ExtArgs>
    editor?: boolean | TranslationHistory$editorArgs<ExtArgs>
  }

  export type $TranslationHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TranslationHistory"
    objects: {
      translation: Prisma.$TranslationPayload<ExtArgs>
      editor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      translationId: number
      newValue: string
      oldValue: string
      createdAt: Date
      editedBy: number | null
    }, ExtArgs["result"]["translationHistory"]>
    composites: {}
  }

  type TranslationHistoryGetPayload<S extends boolean | null | undefined | TranslationHistoryDefaultArgs> = $Result.GetResult<Prisma.$TranslationHistoryPayload, S>

  type TranslationHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TranslationHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TranslationHistoryCountAggregateInputType | true
    }

  export interface TranslationHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TranslationHistory'], meta: { name: 'TranslationHistory' } }
    /**
     * Find zero or one TranslationHistory that matches the filter.
     * @param {TranslationHistoryFindUniqueArgs} args - Arguments to find a TranslationHistory
     * @example
     * // Get one TranslationHistory
     * const translationHistory = await prisma.translationHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TranslationHistoryFindUniqueArgs>(args: SelectSubset<T, TranslationHistoryFindUniqueArgs<ExtArgs>>): Prisma__TranslationHistoryClient<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TranslationHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TranslationHistoryFindUniqueOrThrowArgs} args - Arguments to find a TranslationHistory
     * @example
     * // Get one TranslationHistory
     * const translationHistory = await prisma.translationHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TranslationHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TranslationHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TranslationHistoryClient<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TranslationHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationHistoryFindFirstArgs} args - Arguments to find a TranslationHistory
     * @example
     * // Get one TranslationHistory
     * const translationHistory = await prisma.translationHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TranslationHistoryFindFirstArgs>(args?: SelectSubset<T, TranslationHistoryFindFirstArgs<ExtArgs>>): Prisma__TranslationHistoryClient<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TranslationHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationHistoryFindFirstOrThrowArgs} args - Arguments to find a TranslationHistory
     * @example
     * // Get one TranslationHistory
     * const translationHistory = await prisma.translationHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TranslationHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TranslationHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TranslationHistoryClient<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TranslationHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TranslationHistories
     * const translationHistories = await prisma.translationHistory.findMany()
     * 
     * // Get first 10 TranslationHistories
     * const translationHistories = await prisma.translationHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const translationHistoryWithIdOnly = await prisma.translationHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TranslationHistoryFindManyArgs>(args?: SelectSubset<T, TranslationHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TranslationHistory.
     * @param {TranslationHistoryCreateArgs} args - Arguments to create a TranslationHistory.
     * @example
     * // Create one TranslationHistory
     * const TranslationHistory = await prisma.translationHistory.create({
     *   data: {
     *     // ... data to create a TranslationHistory
     *   }
     * })
     * 
     */
    create<T extends TranslationHistoryCreateArgs>(args: SelectSubset<T, TranslationHistoryCreateArgs<ExtArgs>>): Prisma__TranslationHistoryClient<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TranslationHistories.
     * @param {TranslationHistoryCreateManyArgs} args - Arguments to create many TranslationHistories.
     * @example
     * // Create many TranslationHistories
     * const translationHistory = await prisma.translationHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TranslationHistoryCreateManyArgs>(args?: SelectSubset<T, TranslationHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TranslationHistories and returns the data saved in the database.
     * @param {TranslationHistoryCreateManyAndReturnArgs} args - Arguments to create many TranslationHistories.
     * @example
     * // Create many TranslationHistories
     * const translationHistory = await prisma.translationHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TranslationHistories and only return the `id`
     * const translationHistoryWithIdOnly = await prisma.translationHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TranslationHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TranslationHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TranslationHistory.
     * @param {TranslationHistoryDeleteArgs} args - Arguments to delete one TranslationHistory.
     * @example
     * // Delete one TranslationHistory
     * const TranslationHistory = await prisma.translationHistory.delete({
     *   where: {
     *     // ... filter to delete one TranslationHistory
     *   }
     * })
     * 
     */
    delete<T extends TranslationHistoryDeleteArgs>(args: SelectSubset<T, TranslationHistoryDeleteArgs<ExtArgs>>): Prisma__TranslationHistoryClient<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TranslationHistory.
     * @param {TranslationHistoryUpdateArgs} args - Arguments to update one TranslationHistory.
     * @example
     * // Update one TranslationHistory
     * const translationHistory = await prisma.translationHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TranslationHistoryUpdateArgs>(args: SelectSubset<T, TranslationHistoryUpdateArgs<ExtArgs>>): Prisma__TranslationHistoryClient<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TranslationHistories.
     * @param {TranslationHistoryDeleteManyArgs} args - Arguments to filter TranslationHistories to delete.
     * @example
     * // Delete a few TranslationHistories
     * const { count } = await prisma.translationHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TranslationHistoryDeleteManyArgs>(args?: SelectSubset<T, TranslationHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TranslationHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TranslationHistories
     * const translationHistory = await prisma.translationHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TranslationHistoryUpdateManyArgs>(args: SelectSubset<T, TranslationHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TranslationHistories and returns the data updated in the database.
     * @param {TranslationHistoryUpdateManyAndReturnArgs} args - Arguments to update many TranslationHistories.
     * @example
     * // Update many TranslationHistories
     * const translationHistory = await prisma.translationHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TranslationHistories and only return the `id`
     * const translationHistoryWithIdOnly = await prisma.translationHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TranslationHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TranslationHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TranslationHistory.
     * @param {TranslationHistoryUpsertArgs} args - Arguments to update or create a TranslationHistory.
     * @example
     * // Update or create a TranslationHistory
     * const translationHistory = await prisma.translationHistory.upsert({
     *   create: {
     *     // ... data to create a TranslationHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TranslationHistory we want to update
     *   }
     * })
     */
    upsert<T extends TranslationHistoryUpsertArgs>(args: SelectSubset<T, TranslationHistoryUpsertArgs<ExtArgs>>): Prisma__TranslationHistoryClient<$Result.GetResult<Prisma.$TranslationHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TranslationHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationHistoryCountArgs} args - Arguments to filter TranslationHistories to count.
     * @example
     * // Count the number of TranslationHistories
     * const count = await prisma.translationHistory.count({
     *   where: {
     *     // ... the filter for the TranslationHistories we want to count
     *   }
     * })
    **/
    count<T extends TranslationHistoryCountArgs>(
      args?: Subset<T, TranslationHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TranslationHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TranslationHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TranslationHistoryAggregateArgs>(args: Subset<T, TranslationHistoryAggregateArgs>): Prisma.PrismaPromise<GetTranslationHistoryAggregateType<T>>

    /**
     * Group by TranslationHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TranslationHistoryGroupByArgs} args - Group by arguments.
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
      T extends TranslationHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TranslationHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TranslationHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TranslationHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTranslationHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TranslationHistory model
   */
  readonly fields: TranslationHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TranslationHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TranslationHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    translation<T extends TranslationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TranslationDefaultArgs<ExtArgs>>): Prisma__TranslationClient<$Result.GetResult<Prisma.$TranslationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    editor<T extends TranslationHistory$editorArgs<ExtArgs> = {}>(args?: Subset<T, TranslationHistory$editorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TranslationHistory model
   */
  interface TranslationHistoryFieldRefs {
    readonly id: FieldRef<"TranslationHistory", 'Int'>
    readonly translationId: FieldRef<"TranslationHistory", 'Int'>
    readonly newValue: FieldRef<"TranslationHistory", 'String'>
    readonly oldValue: FieldRef<"TranslationHistory", 'String'>
    readonly createdAt: FieldRef<"TranslationHistory", 'DateTime'>
    readonly editedBy: FieldRef<"TranslationHistory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TranslationHistory findUnique
   */
  export type TranslationHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TranslationHistory to fetch.
     */
    where: TranslationHistoryWhereUniqueInput
  }

  /**
   * TranslationHistory findUniqueOrThrow
   */
  export type TranslationHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TranslationHistory to fetch.
     */
    where: TranslationHistoryWhereUniqueInput
  }

  /**
   * TranslationHistory findFirst
   */
  export type TranslationHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TranslationHistory to fetch.
     */
    where?: TranslationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranslationHistories to fetch.
     */
    orderBy?: TranslationHistoryOrderByWithRelationInput | TranslationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TranslationHistories.
     */
    cursor?: TranslationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranslationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranslationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TranslationHistories.
     */
    distinct?: TranslationHistoryScalarFieldEnum | TranslationHistoryScalarFieldEnum[]
  }

  /**
   * TranslationHistory findFirstOrThrow
   */
  export type TranslationHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TranslationHistory to fetch.
     */
    where?: TranslationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranslationHistories to fetch.
     */
    orderBy?: TranslationHistoryOrderByWithRelationInput | TranslationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TranslationHistories.
     */
    cursor?: TranslationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranslationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranslationHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TranslationHistories.
     */
    distinct?: TranslationHistoryScalarFieldEnum | TranslationHistoryScalarFieldEnum[]
  }

  /**
   * TranslationHistory findMany
   */
  export type TranslationHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TranslationHistories to fetch.
     */
    where?: TranslationHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TranslationHistories to fetch.
     */
    orderBy?: TranslationHistoryOrderByWithRelationInput | TranslationHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TranslationHistories.
     */
    cursor?: TranslationHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TranslationHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TranslationHistories.
     */
    skip?: number
    distinct?: TranslationHistoryScalarFieldEnum | TranslationHistoryScalarFieldEnum[]
  }

  /**
   * TranslationHistory create
   */
  export type TranslationHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TranslationHistory.
     */
    data: XOR<TranslationHistoryCreateInput, TranslationHistoryUncheckedCreateInput>
  }

  /**
   * TranslationHistory createMany
   */
  export type TranslationHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TranslationHistories.
     */
    data: TranslationHistoryCreateManyInput | TranslationHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TranslationHistory createManyAndReturn
   */
  export type TranslationHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many TranslationHistories.
     */
    data: TranslationHistoryCreateManyInput | TranslationHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TranslationHistory update
   */
  export type TranslationHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TranslationHistory.
     */
    data: XOR<TranslationHistoryUpdateInput, TranslationHistoryUncheckedUpdateInput>
    /**
     * Choose, which TranslationHistory to update.
     */
    where: TranslationHistoryWhereUniqueInput
  }

  /**
   * TranslationHistory updateMany
   */
  export type TranslationHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TranslationHistories.
     */
    data: XOR<TranslationHistoryUpdateManyMutationInput, TranslationHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TranslationHistories to update
     */
    where?: TranslationHistoryWhereInput
    /**
     * Limit how many TranslationHistories to update.
     */
    limit?: number
  }

  /**
   * TranslationHistory updateManyAndReturn
   */
  export type TranslationHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * The data used to update TranslationHistories.
     */
    data: XOR<TranslationHistoryUpdateManyMutationInput, TranslationHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TranslationHistories to update
     */
    where?: TranslationHistoryWhereInput
    /**
     * Limit how many TranslationHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TranslationHistory upsert
   */
  export type TranslationHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TranslationHistory to update in case it exists.
     */
    where: TranslationHistoryWhereUniqueInput
    /**
     * In case the TranslationHistory found by the `where` argument doesn't exist, create a new TranslationHistory with this data.
     */
    create: XOR<TranslationHistoryCreateInput, TranslationHistoryUncheckedCreateInput>
    /**
     * In case the TranslationHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TranslationHistoryUpdateInput, TranslationHistoryUncheckedUpdateInput>
  }

  /**
   * TranslationHistory delete
   */
  export type TranslationHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationHistoryInclude<ExtArgs> | null
    /**
     * Filter which TranslationHistory to delete.
     */
    where: TranslationHistoryWhereUniqueInput
  }

  /**
   * TranslationHistory deleteMany
   */
  export type TranslationHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TranslationHistories to delete
     */
    where?: TranslationHistoryWhereInput
    /**
     * Limit how many TranslationHistories to delete.
     */
    limit?: number
  }

  /**
   * TranslationHistory.editor
   */
  export type TranslationHistory$editorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * TranslationHistory without action
   */
  export type TranslationHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TranslationHistory
     */
    select?: TranslationHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TranslationHistory
     */
    omit?: TranslationHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TranslationHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const LanguageScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum]


  export const TranslationKeyScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    key: 'key',
    namespace: 'namespace',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TranslationKeyScalarFieldEnum = (typeof TranslationKeyScalarFieldEnum)[keyof typeof TranslationKeyScalarFieldEnum]


  export const TranslationScalarFieldEnum: {
    id: 'id',
    translationKeyId: 'translationKeyId',
    languageId: 'languageId',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    editedBy: 'editedBy'
  };

  export type TranslationScalarFieldEnum = (typeof TranslationScalarFieldEnum)[keyof typeof TranslationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TranslationHistoryScalarFieldEnum: {
    id: 'id',
    translationId: 'translationId',
    newValue: 'newValue',
    oldValue: 'oldValue',
    createdAt: 'createdAt',
    editedBy: 'editedBy'
  };

  export type TranslationHistoryScalarFieldEnum = (typeof TranslationHistoryScalarFieldEnum)[keyof typeof TranslationHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: IntFilter<"Project"> | number
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    keys?: TranslationKeyListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    keys?: TranslationKeyOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    description?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    keys?: TranslationKeyListRelationFilter
  }, "id" | "name">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Project"> | number
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type LanguageWhereInput = {
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    id?: IntFilter<"Language"> | number
    code?: StringFilter<"Language"> | string
    name?: StringFilter<"Language"> | string
    createdAt?: DateTimeFilter<"Language"> | Date | string
    updatedAt?: DateTimeFilter<"Language"> | Date | string
    translations?: TranslationListRelationFilter
  }

  export type LanguageOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    translations?: TranslationOrderByRelationAggregateInput
  }

  export type LanguageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    name?: StringFilter<"Language"> | string
    createdAt?: DateTimeFilter<"Language"> | Date | string
    updatedAt?: DateTimeFilter<"Language"> | Date | string
    translations?: TranslationListRelationFilter
  }, "id" | "code">

  export type LanguageOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LanguageCountOrderByAggregateInput
    _avg?: LanguageAvgOrderByAggregateInput
    _max?: LanguageMaxOrderByAggregateInput
    _min?: LanguageMinOrderByAggregateInput
    _sum?: LanguageSumOrderByAggregateInput
  }

  export type LanguageScalarWhereWithAggregatesInput = {
    AND?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    OR?: LanguageScalarWhereWithAggregatesInput[]
    NOT?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Language"> | number
    code?: StringWithAggregatesFilter<"Language"> | string
    name?: StringWithAggregatesFilter<"Language"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Language"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Language"> | Date | string
  }

  export type TranslationKeyWhereInput = {
    AND?: TranslationKeyWhereInput | TranslationKeyWhereInput[]
    OR?: TranslationKeyWhereInput[]
    NOT?: TranslationKeyWhereInput | TranslationKeyWhereInput[]
    id?: IntFilter<"TranslationKey"> | number
    projectId?: IntFilter<"TranslationKey"> | number
    key?: StringFilter<"TranslationKey"> | string
    namespace?: StringNullableFilter<"TranslationKey"> | string | null
    description?: StringNullableFilter<"TranslationKey"> | string | null
    createdAt?: DateTimeFilter<"TranslationKey"> | Date | string
    updatedAt?: DateTimeFilter<"TranslationKey"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    translations?: TranslationListRelationFilter
  }

  export type TranslationKeyOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    namespace?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
    translations?: TranslationOrderByRelationAggregateInput
  }

  export type TranslationKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    projectId_key?: TranslationKeyProjectIdKeyCompoundUniqueInput
    AND?: TranslationKeyWhereInput | TranslationKeyWhereInput[]
    OR?: TranslationKeyWhereInput[]
    NOT?: TranslationKeyWhereInput | TranslationKeyWhereInput[]
    projectId?: IntFilter<"TranslationKey"> | number
    key?: StringFilter<"TranslationKey"> | string
    namespace?: StringNullableFilter<"TranslationKey"> | string | null
    description?: StringNullableFilter<"TranslationKey"> | string | null
    createdAt?: DateTimeFilter<"TranslationKey"> | Date | string
    updatedAt?: DateTimeFilter<"TranslationKey"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    translations?: TranslationListRelationFilter
  }, "id" | "projectId_key">

  export type TranslationKeyOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    namespace?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TranslationKeyCountOrderByAggregateInput
    _avg?: TranslationKeyAvgOrderByAggregateInput
    _max?: TranslationKeyMaxOrderByAggregateInput
    _min?: TranslationKeyMinOrderByAggregateInput
    _sum?: TranslationKeySumOrderByAggregateInput
  }

  export type TranslationKeyScalarWhereWithAggregatesInput = {
    AND?: TranslationKeyScalarWhereWithAggregatesInput | TranslationKeyScalarWhereWithAggregatesInput[]
    OR?: TranslationKeyScalarWhereWithAggregatesInput[]
    NOT?: TranslationKeyScalarWhereWithAggregatesInput | TranslationKeyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TranslationKey"> | number
    projectId?: IntWithAggregatesFilter<"TranslationKey"> | number
    key?: StringWithAggregatesFilter<"TranslationKey"> | string
    namespace?: StringNullableWithAggregatesFilter<"TranslationKey"> | string | null
    description?: StringNullableWithAggregatesFilter<"TranslationKey"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TranslationKey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TranslationKey"> | Date | string
  }

  export type TranslationWhereInput = {
    AND?: TranslationWhereInput | TranslationWhereInput[]
    OR?: TranslationWhereInput[]
    NOT?: TranslationWhereInput | TranslationWhereInput[]
    id?: IntFilter<"Translation"> | number
    translationKeyId?: IntFilter<"Translation"> | number
    languageId?: IntFilter<"Translation"> | number
    value?: StringFilter<"Translation"> | string
    createdAt?: DateTimeFilter<"Translation"> | Date | string
    updatedAt?: DateTimeFilter<"Translation"> | Date | string
    editedBy?: IntNullableFilter<"Translation"> | number | null
    translationKey?: XOR<TranslationKeyScalarRelationFilter, TranslationKeyWhereInput>
    language?: XOR<LanguageScalarRelationFilter, LanguageWhereInput>
    editor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    TranslationHistory?: TranslationHistoryListRelationFilter
  }

  export type TranslationOrderByWithRelationInput = {
    id?: SortOrder
    translationKeyId?: SortOrder
    languageId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    editedBy?: SortOrderInput | SortOrder
    translationKey?: TranslationKeyOrderByWithRelationInput
    language?: LanguageOrderByWithRelationInput
    editor?: UserOrderByWithRelationInput
    TranslationHistory?: TranslationHistoryOrderByRelationAggregateInput
  }

  export type TranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    translationKeyId_languageId?: TranslationTranslationKeyIdLanguageIdCompoundUniqueInput
    AND?: TranslationWhereInput | TranslationWhereInput[]
    OR?: TranslationWhereInput[]
    NOT?: TranslationWhereInput | TranslationWhereInput[]
    translationKeyId?: IntFilter<"Translation"> | number
    languageId?: IntFilter<"Translation"> | number
    value?: StringFilter<"Translation"> | string
    createdAt?: DateTimeFilter<"Translation"> | Date | string
    updatedAt?: DateTimeFilter<"Translation"> | Date | string
    editedBy?: IntNullableFilter<"Translation"> | number | null
    translationKey?: XOR<TranslationKeyScalarRelationFilter, TranslationKeyWhereInput>
    language?: XOR<LanguageScalarRelationFilter, LanguageWhereInput>
    editor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    TranslationHistory?: TranslationHistoryListRelationFilter
  }, "id" | "translationKeyId_languageId">

  export type TranslationOrderByWithAggregationInput = {
    id?: SortOrder
    translationKeyId?: SortOrder
    languageId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    editedBy?: SortOrderInput | SortOrder
    _count?: TranslationCountOrderByAggregateInput
    _avg?: TranslationAvgOrderByAggregateInput
    _max?: TranslationMaxOrderByAggregateInput
    _min?: TranslationMinOrderByAggregateInput
    _sum?: TranslationSumOrderByAggregateInput
  }

  export type TranslationScalarWhereWithAggregatesInput = {
    AND?: TranslationScalarWhereWithAggregatesInput | TranslationScalarWhereWithAggregatesInput[]
    OR?: TranslationScalarWhereWithAggregatesInput[]
    NOT?: TranslationScalarWhereWithAggregatesInput | TranslationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Translation"> | number
    translationKeyId?: IntWithAggregatesFilter<"Translation"> | number
    languageId?: IntWithAggregatesFilter<"Translation"> | number
    value?: StringWithAggregatesFilter<"Translation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Translation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Translation"> | Date | string
    editedBy?: IntNullableWithAggregatesFilter<"Translation"> | number | null
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    editedTranslations?: TranslationListRelationFilter
    editedHistory?: TranslationHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    editedTranslations?: TranslationOrderByRelationAggregateInput
    editedHistory?: TranslationHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    editedTranslations?: TranslationListRelationFilter
    editedHistory?: TranslationHistoryListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TranslationHistoryWhereInput = {
    AND?: TranslationHistoryWhereInput | TranslationHistoryWhereInput[]
    OR?: TranslationHistoryWhereInput[]
    NOT?: TranslationHistoryWhereInput | TranslationHistoryWhereInput[]
    id?: IntFilter<"TranslationHistory"> | number
    translationId?: IntFilter<"TranslationHistory"> | number
    newValue?: StringFilter<"TranslationHistory"> | string
    oldValue?: StringFilter<"TranslationHistory"> | string
    createdAt?: DateTimeFilter<"TranslationHistory"> | Date | string
    editedBy?: IntNullableFilter<"TranslationHistory"> | number | null
    translation?: XOR<TranslationScalarRelationFilter, TranslationWhereInput>
    editor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type TranslationHistoryOrderByWithRelationInput = {
    id?: SortOrder
    translationId?: SortOrder
    newValue?: SortOrder
    oldValue?: SortOrder
    createdAt?: SortOrder
    editedBy?: SortOrderInput | SortOrder
    translation?: TranslationOrderByWithRelationInput
    editor?: UserOrderByWithRelationInput
  }

  export type TranslationHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TranslationHistoryWhereInput | TranslationHistoryWhereInput[]
    OR?: TranslationHistoryWhereInput[]
    NOT?: TranslationHistoryWhereInput | TranslationHistoryWhereInput[]
    translationId?: IntFilter<"TranslationHistory"> | number
    newValue?: StringFilter<"TranslationHistory"> | string
    oldValue?: StringFilter<"TranslationHistory"> | string
    createdAt?: DateTimeFilter<"TranslationHistory"> | Date | string
    editedBy?: IntNullableFilter<"TranslationHistory"> | number | null
    translation?: XOR<TranslationScalarRelationFilter, TranslationWhereInput>
    editor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type TranslationHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    translationId?: SortOrder
    newValue?: SortOrder
    oldValue?: SortOrder
    createdAt?: SortOrder
    editedBy?: SortOrderInput | SortOrder
    _count?: TranslationHistoryCountOrderByAggregateInput
    _avg?: TranslationHistoryAvgOrderByAggregateInput
    _max?: TranslationHistoryMaxOrderByAggregateInput
    _min?: TranslationHistoryMinOrderByAggregateInput
    _sum?: TranslationHistorySumOrderByAggregateInput
  }

  export type TranslationHistoryScalarWhereWithAggregatesInput = {
    AND?: TranslationHistoryScalarWhereWithAggregatesInput | TranslationHistoryScalarWhereWithAggregatesInput[]
    OR?: TranslationHistoryScalarWhereWithAggregatesInput[]
    NOT?: TranslationHistoryScalarWhereWithAggregatesInput | TranslationHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TranslationHistory"> | number
    translationId?: IntWithAggregatesFilter<"TranslationHistory"> | number
    newValue?: StringWithAggregatesFilter<"TranslationHistory"> | string
    oldValue?: StringWithAggregatesFilter<"TranslationHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TranslationHistory"> | Date | string
    editedBy?: IntNullableWithAggregatesFilter<"TranslationHistory"> | number | null
  }

  export type ProjectCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    keys?: TranslationKeyCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    keys?: TranslationKeyUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keys?: TranslationKeyUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    keys?: TranslationKeyUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageCreateInput = {
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    translations?: TranslationCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    translations?: TranslationUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: TranslationUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: TranslationUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageCreateManyInput = {
    id?: number
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LanguageUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationKeyCreateInput = {
    key: string
    namespace?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutKeysInput
    translations?: TranslationCreateNestedManyWithoutTranslationKeyInput
  }

  export type TranslationKeyUncheckedCreateInput = {
    id?: number
    projectId: number
    key: string
    namespace?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    translations?: TranslationUncheckedCreateNestedManyWithoutTranslationKeyInput
  }

  export type TranslationKeyUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    namespace?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutKeysNestedInput
    translations?: TranslationUpdateManyWithoutTranslationKeyNestedInput
  }

  export type TranslationKeyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    namespace?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: TranslationUncheckedUpdateManyWithoutTranslationKeyNestedInput
  }

  export type TranslationKeyCreateManyInput = {
    id?: number
    projectId: number
    key: string
    namespace?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranslationKeyUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    namespace?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationKeyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    namespace?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationCreateInput = {
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    translationKey: TranslationKeyCreateNestedOneWithoutTranslationsInput
    language: LanguageCreateNestedOneWithoutTranslationsInput
    editor?: UserCreateNestedOneWithoutEditedTranslationsInput
    TranslationHistory?: TranslationHistoryCreateNestedManyWithoutTranslationInput
  }

  export type TranslationUncheckedCreateInput = {
    id?: number
    translationKeyId: number
    languageId: number
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    editedBy?: number | null
    TranslationHistory?: TranslationHistoryUncheckedCreateNestedManyWithoutTranslationInput
  }

  export type TranslationUpdateInput = {
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translationKey?: TranslationKeyUpdateOneRequiredWithoutTranslationsNestedInput
    language?: LanguageUpdateOneRequiredWithoutTranslationsNestedInput
    editor?: UserUpdateOneWithoutEditedTranslationsNestedInput
    TranslationHistory?: TranslationHistoryUpdateManyWithoutTranslationNestedInput
  }

  export type TranslationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    translationKeyId?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedBy?: NullableIntFieldUpdateOperationsInput | number | null
    TranslationHistory?: TranslationHistoryUncheckedUpdateManyWithoutTranslationNestedInput
  }

  export type TranslationCreateManyInput = {
    id?: number
    translationKeyId: number
    languageId: number
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    editedBy?: number | null
  }

  export type TranslationUpdateManyMutationInput = {
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    translationKeyId?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    editedTranslations?: TranslationCreateNestedManyWithoutEditorInput
    editedHistory?: TranslationHistoryCreateNestedManyWithoutEditorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    editedTranslations?: TranslationUncheckedCreateNestedManyWithoutEditorInput
    editedHistory?: TranslationHistoryUncheckedCreateNestedManyWithoutEditorInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedTranslations?: TranslationUpdateManyWithoutEditorNestedInput
    editedHistory?: TranslationHistoryUpdateManyWithoutEditorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedTranslations?: TranslationUncheckedUpdateManyWithoutEditorNestedInput
    editedHistory?: TranslationHistoryUncheckedUpdateManyWithoutEditorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationHistoryCreateInput = {
    newValue: string
    oldValue: string
    createdAt?: Date | string
    translation: TranslationCreateNestedOneWithoutTranslationHistoryInput
    editor?: UserCreateNestedOneWithoutEditedHistoryInput
  }

  export type TranslationHistoryUncheckedCreateInput = {
    id?: number
    translationId: number
    newValue: string
    oldValue: string
    createdAt?: Date | string
    editedBy?: number | null
  }

  export type TranslationHistoryUpdateInput = {
    newValue?: StringFieldUpdateOperationsInput | string
    oldValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translation?: TranslationUpdateOneRequiredWithoutTranslationHistoryNestedInput
    editor?: UserUpdateOneWithoutEditedHistoryNestedInput
  }

  export type TranslationHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    translationId?: IntFieldUpdateOperationsInput | number
    newValue?: StringFieldUpdateOperationsInput | string
    oldValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TranslationHistoryCreateManyInput = {
    id?: number
    translationId: number
    newValue: string
    oldValue: string
    createdAt?: Date | string
    editedBy?: number | null
  }

  export type TranslationHistoryUpdateManyMutationInput = {
    newValue?: StringFieldUpdateOperationsInput | string
    oldValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    translationId?: IntFieldUpdateOperationsInput | number
    newValue?: StringFieldUpdateOperationsInput | string
    oldValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TranslationKeyListRelationFilter = {
    every?: TranslationKeyWhereInput
    some?: TranslationKeyWhereInput
    none?: TranslationKeyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TranslationKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type TranslationListRelationFilter = {
    every?: TranslationWhereInput
    some?: TranslationWhereInput
    none?: TranslationWhereInput
  }

  export type TranslationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LanguageCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LanguageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LanguageMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LanguageMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LanguageSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type TranslationKeyProjectIdKeyCompoundUniqueInput = {
    projectId: number
    key: string
  }

  export type TranslationKeyCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    namespace?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TranslationKeyAvgOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type TranslationKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    namespace?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TranslationKeyMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    key?: SortOrder
    namespace?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TranslationKeySumOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TranslationKeyScalarRelationFilter = {
    is?: TranslationKeyWhereInput
    isNot?: TranslationKeyWhereInput
  }

  export type LanguageScalarRelationFilter = {
    is?: LanguageWhereInput
    isNot?: LanguageWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TranslationHistoryListRelationFilter = {
    every?: TranslationHistoryWhereInput
    some?: TranslationHistoryWhereInput
    none?: TranslationHistoryWhereInput
  }

  export type TranslationHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TranslationTranslationKeyIdLanguageIdCompoundUniqueInput = {
    translationKeyId: number
    languageId: number
  }

  export type TranslationCountOrderByAggregateInput = {
    id?: SortOrder
    translationKeyId?: SortOrder
    languageId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    editedBy?: SortOrder
  }

  export type TranslationAvgOrderByAggregateInput = {
    id?: SortOrder
    translationKeyId?: SortOrder
    languageId?: SortOrder
    editedBy?: SortOrder
  }

  export type TranslationMaxOrderByAggregateInput = {
    id?: SortOrder
    translationKeyId?: SortOrder
    languageId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    editedBy?: SortOrder
  }

  export type TranslationMinOrderByAggregateInput = {
    id?: SortOrder
    translationKeyId?: SortOrder
    languageId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    editedBy?: SortOrder
  }

  export type TranslationSumOrderByAggregateInput = {
    id?: SortOrder
    translationKeyId?: SortOrder
    languageId?: SortOrder
    editedBy?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TranslationScalarRelationFilter = {
    is?: TranslationWhereInput
    isNot?: TranslationWhereInput
  }

  export type TranslationHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    translationId?: SortOrder
    newValue?: SortOrder
    oldValue?: SortOrder
    createdAt?: SortOrder
    editedBy?: SortOrder
  }

  export type TranslationHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    translationId?: SortOrder
    editedBy?: SortOrder
  }

  export type TranslationHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    translationId?: SortOrder
    newValue?: SortOrder
    oldValue?: SortOrder
    createdAt?: SortOrder
    editedBy?: SortOrder
  }

  export type TranslationHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    translationId?: SortOrder
    newValue?: SortOrder
    oldValue?: SortOrder
    createdAt?: SortOrder
    editedBy?: SortOrder
  }

  export type TranslationHistorySumOrderByAggregateInput = {
    id?: SortOrder
    translationId?: SortOrder
    editedBy?: SortOrder
  }

  export type TranslationKeyCreateNestedManyWithoutProjectInput = {
    create?: XOR<TranslationKeyCreateWithoutProjectInput, TranslationKeyUncheckedCreateWithoutProjectInput> | TranslationKeyCreateWithoutProjectInput[] | TranslationKeyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TranslationKeyCreateOrConnectWithoutProjectInput | TranslationKeyCreateOrConnectWithoutProjectInput[]
    createMany?: TranslationKeyCreateManyProjectInputEnvelope
    connect?: TranslationKeyWhereUniqueInput | TranslationKeyWhereUniqueInput[]
  }

  export type TranslationKeyUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<TranslationKeyCreateWithoutProjectInput, TranslationKeyUncheckedCreateWithoutProjectInput> | TranslationKeyCreateWithoutProjectInput[] | TranslationKeyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TranslationKeyCreateOrConnectWithoutProjectInput | TranslationKeyCreateOrConnectWithoutProjectInput[]
    createMany?: TranslationKeyCreateManyProjectInputEnvelope
    connect?: TranslationKeyWhereUniqueInput | TranslationKeyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TranslationKeyUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TranslationKeyCreateWithoutProjectInput, TranslationKeyUncheckedCreateWithoutProjectInput> | TranslationKeyCreateWithoutProjectInput[] | TranslationKeyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TranslationKeyCreateOrConnectWithoutProjectInput | TranslationKeyCreateOrConnectWithoutProjectInput[]
    upsert?: TranslationKeyUpsertWithWhereUniqueWithoutProjectInput | TranslationKeyUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TranslationKeyCreateManyProjectInputEnvelope
    set?: TranslationKeyWhereUniqueInput | TranslationKeyWhereUniqueInput[]
    disconnect?: TranslationKeyWhereUniqueInput | TranslationKeyWhereUniqueInput[]
    delete?: TranslationKeyWhereUniqueInput | TranslationKeyWhereUniqueInput[]
    connect?: TranslationKeyWhereUniqueInput | TranslationKeyWhereUniqueInput[]
    update?: TranslationKeyUpdateWithWhereUniqueWithoutProjectInput | TranslationKeyUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TranslationKeyUpdateManyWithWhereWithoutProjectInput | TranslationKeyUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TranslationKeyScalarWhereInput | TranslationKeyScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TranslationKeyUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<TranslationKeyCreateWithoutProjectInput, TranslationKeyUncheckedCreateWithoutProjectInput> | TranslationKeyCreateWithoutProjectInput[] | TranslationKeyUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: TranslationKeyCreateOrConnectWithoutProjectInput | TranslationKeyCreateOrConnectWithoutProjectInput[]
    upsert?: TranslationKeyUpsertWithWhereUniqueWithoutProjectInput | TranslationKeyUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: TranslationKeyCreateManyProjectInputEnvelope
    set?: TranslationKeyWhereUniqueInput | TranslationKeyWhereUniqueInput[]
    disconnect?: TranslationKeyWhereUniqueInput | TranslationKeyWhereUniqueInput[]
    delete?: TranslationKeyWhereUniqueInput | TranslationKeyWhereUniqueInput[]
    connect?: TranslationKeyWhereUniqueInput | TranslationKeyWhereUniqueInput[]
    update?: TranslationKeyUpdateWithWhereUniqueWithoutProjectInput | TranslationKeyUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: TranslationKeyUpdateManyWithWhereWithoutProjectInput | TranslationKeyUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: TranslationKeyScalarWhereInput | TranslationKeyScalarWhereInput[]
  }

  export type TranslationCreateNestedManyWithoutLanguageInput = {
    create?: XOR<TranslationCreateWithoutLanguageInput, TranslationUncheckedCreateWithoutLanguageInput> | TranslationCreateWithoutLanguageInput[] | TranslationUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: TranslationCreateOrConnectWithoutLanguageInput | TranslationCreateOrConnectWithoutLanguageInput[]
    createMany?: TranslationCreateManyLanguageInputEnvelope
    connect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
  }

  export type TranslationUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: XOR<TranslationCreateWithoutLanguageInput, TranslationUncheckedCreateWithoutLanguageInput> | TranslationCreateWithoutLanguageInput[] | TranslationUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: TranslationCreateOrConnectWithoutLanguageInput | TranslationCreateOrConnectWithoutLanguageInput[]
    createMany?: TranslationCreateManyLanguageInputEnvelope
    connect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
  }

  export type TranslationUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<TranslationCreateWithoutLanguageInput, TranslationUncheckedCreateWithoutLanguageInput> | TranslationCreateWithoutLanguageInput[] | TranslationUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: TranslationCreateOrConnectWithoutLanguageInput | TranslationCreateOrConnectWithoutLanguageInput[]
    upsert?: TranslationUpsertWithWhereUniqueWithoutLanguageInput | TranslationUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: TranslationCreateManyLanguageInputEnvelope
    set?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    disconnect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    delete?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    connect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    update?: TranslationUpdateWithWhereUniqueWithoutLanguageInput | TranslationUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: TranslationUpdateManyWithWhereWithoutLanguageInput | TranslationUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: TranslationScalarWhereInput | TranslationScalarWhereInput[]
  }

  export type TranslationUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<TranslationCreateWithoutLanguageInput, TranslationUncheckedCreateWithoutLanguageInput> | TranslationCreateWithoutLanguageInput[] | TranslationUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: TranslationCreateOrConnectWithoutLanguageInput | TranslationCreateOrConnectWithoutLanguageInput[]
    upsert?: TranslationUpsertWithWhereUniqueWithoutLanguageInput | TranslationUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: TranslationCreateManyLanguageInputEnvelope
    set?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    disconnect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    delete?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    connect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    update?: TranslationUpdateWithWhereUniqueWithoutLanguageInput | TranslationUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: TranslationUpdateManyWithWhereWithoutLanguageInput | TranslationUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: TranslationScalarWhereInput | TranslationScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutKeysInput = {
    create?: XOR<ProjectCreateWithoutKeysInput, ProjectUncheckedCreateWithoutKeysInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutKeysInput
    connect?: ProjectWhereUniqueInput
  }

  export type TranslationCreateNestedManyWithoutTranslationKeyInput = {
    create?: XOR<TranslationCreateWithoutTranslationKeyInput, TranslationUncheckedCreateWithoutTranslationKeyInput> | TranslationCreateWithoutTranslationKeyInput[] | TranslationUncheckedCreateWithoutTranslationKeyInput[]
    connectOrCreate?: TranslationCreateOrConnectWithoutTranslationKeyInput | TranslationCreateOrConnectWithoutTranslationKeyInput[]
    createMany?: TranslationCreateManyTranslationKeyInputEnvelope
    connect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
  }

  export type TranslationUncheckedCreateNestedManyWithoutTranslationKeyInput = {
    create?: XOR<TranslationCreateWithoutTranslationKeyInput, TranslationUncheckedCreateWithoutTranslationKeyInput> | TranslationCreateWithoutTranslationKeyInput[] | TranslationUncheckedCreateWithoutTranslationKeyInput[]
    connectOrCreate?: TranslationCreateOrConnectWithoutTranslationKeyInput | TranslationCreateOrConnectWithoutTranslationKeyInput[]
    createMany?: TranslationCreateManyTranslationKeyInputEnvelope
    connect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
  }

  export type ProjectUpdateOneRequiredWithoutKeysNestedInput = {
    create?: XOR<ProjectCreateWithoutKeysInput, ProjectUncheckedCreateWithoutKeysInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutKeysInput
    upsert?: ProjectUpsertWithoutKeysInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutKeysInput, ProjectUpdateWithoutKeysInput>, ProjectUncheckedUpdateWithoutKeysInput>
  }

  export type TranslationUpdateManyWithoutTranslationKeyNestedInput = {
    create?: XOR<TranslationCreateWithoutTranslationKeyInput, TranslationUncheckedCreateWithoutTranslationKeyInput> | TranslationCreateWithoutTranslationKeyInput[] | TranslationUncheckedCreateWithoutTranslationKeyInput[]
    connectOrCreate?: TranslationCreateOrConnectWithoutTranslationKeyInput | TranslationCreateOrConnectWithoutTranslationKeyInput[]
    upsert?: TranslationUpsertWithWhereUniqueWithoutTranslationKeyInput | TranslationUpsertWithWhereUniqueWithoutTranslationKeyInput[]
    createMany?: TranslationCreateManyTranslationKeyInputEnvelope
    set?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    disconnect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    delete?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    connect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    update?: TranslationUpdateWithWhereUniqueWithoutTranslationKeyInput | TranslationUpdateWithWhereUniqueWithoutTranslationKeyInput[]
    updateMany?: TranslationUpdateManyWithWhereWithoutTranslationKeyInput | TranslationUpdateManyWithWhereWithoutTranslationKeyInput[]
    deleteMany?: TranslationScalarWhereInput | TranslationScalarWhereInput[]
  }

  export type TranslationUncheckedUpdateManyWithoutTranslationKeyNestedInput = {
    create?: XOR<TranslationCreateWithoutTranslationKeyInput, TranslationUncheckedCreateWithoutTranslationKeyInput> | TranslationCreateWithoutTranslationKeyInput[] | TranslationUncheckedCreateWithoutTranslationKeyInput[]
    connectOrCreate?: TranslationCreateOrConnectWithoutTranslationKeyInput | TranslationCreateOrConnectWithoutTranslationKeyInput[]
    upsert?: TranslationUpsertWithWhereUniqueWithoutTranslationKeyInput | TranslationUpsertWithWhereUniqueWithoutTranslationKeyInput[]
    createMany?: TranslationCreateManyTranslationKeyInputEnvelope
    set?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    disconnect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    delete?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    connect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    update?: TranslationUpdateWithWhereUniqueWithoutTranslationKeyInput | TranslationUpdateWithWhereUniqueWithoutTranslationKeyInput[]
    updateMany?: TranslationUpdateManyWithWhereWithoutTranslationKeyInput | TranslationUpdateManyWithWhereWithoutTranslationKeyInput[]
    deleteMany?: TranslationScalarWhereInput | TranslationScalarWhereInput[]
  }

  export type TranslationKeyCreateNestedOneWithoutTranslationsInput = {
    create?: XOR<TranslationKeyCreateWithoutTranslationsInput, TranslationKeyUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: TranslationKeyCreateOrConnectWithoutTranslationsInput
    connect?: TranslationKeyWhereUniqueInput
  }

  export type LanguageCreateNestedOneWithoutTranslationsInput = {
    create?: XOR<LanguageCreateWithoutTranslationsInput, LanguageUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutTranslationsInput
    connect?: LanguageWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEditedTranslationsInput = {
    create?: XOR<UserCreateWithoutEditedTranslationsInput, UserUncheckedCreateWithoutEditedTranslationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEditedTranslationsInput
    connect?: UserWhereUniqueInput
  }

  export type TranslationHistoryCreateNestedManyWithoutTranslationInput = {
    create?: XOR<TranslationHistoryCreateWithoutTranslationInput, TranslationHistoryUncheckedCreateWithoutTranslationInput> | TranslationHistoryCreateWithoutTranslationInput[] | TranslationHistoryUncheckedCreateWithoutTranslationInput[]
    connectOrCreate?: TranslationHistoryCreateOrConnectWithoutTranslationInput | TranslationHistoryCreateOrConnectWithoutTranslationInput[]
    createMany?: TranslationHistoryCreateManyTranslationInputEnvelope
    connect?: TranslationHistoryWhereUniqueInput | TranslationHistoryWhereUniqueInput[]
  }

  export type TranslationHistoryUncheckedCreateNestedManyWithoutTranslationInput = {
    create?: XOR<TranslationHistoryCreateWithoutTranslationInput, TranslationHistoryUncheckedCreateWithoutTranslationInput> | TranslationHistoryCreateWithoutTranslationInput[] | TranslationHistoryUncheckedCreateWithoutTranslationInput[]
    connectOrCreate?: TranslationHistoryCreateOrConnectWithoutTranslationInput | TranslationHistoryCreateOrConnectWithoutTranslationInput[]
    createMany?: TranslationHistoryCreateManyTranslationInputEnvelope
    connect?: TranslationHistoryWhereUniqueInput | TranslationHistoryWhereUniqueInput[]
  }

  export type TranslationKeyUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: XOR<TranslationKeyCreateWithoutTranslationsInput, TranslationKeyUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: TranslationKeyCreateOrConnectWithoutTranslationsInput
    upsert?: TranslationKeyUpsertWithoutTranslationsInput
    connect?: TranslationKeyWhereUniqueInput
    update?: XOR<XOR<TranslationKeyUpdateToOneWithWhereWithoutTranslationsInput, TranslationKeyUpdateWithoutTranslationsInput>, TranslationKeyUncheckedUpdateWithoutTranslationsInput>
  }

  export type LanguageUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: XOR<LanguageCreateWithoutTranslationsInput, LanguageUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutTranslationsInput
    upsert?: LanguageUpsertWithoutTranslationsInput
    connect?: LanguageWhereUniqueInput
    update?: XOR<XOR<LanguageUpdateToOneWithWhereWithoutTranslationsInput, LanguageUpdateWithoutTranslationsInput>, LanguageUncheckedUpdateWithoutTranslationsInput>
  }

  export type UserUpdateOneWithoutEditedTranslationsNestedInput = {
    create?: XOR<UserCreateWithoutEditedTranslationsInput, UserUncheckedCreateWithoutEditedTranslationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEditedTranslationsInput
    upsert?: UserUpsertWithoutEditedTranslationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEditedTranslationsInput, UserUpdateWithoutEditedTranslationsInput>, UserUncheckedUpdateWithoutEditedTranslationsInput>
  }

  export type TranslationHistoryUpdateManyWithoutTranslationNestedInput = {
    create?: XOR<TranslationHistoryCreateWithoutTranslationInput, TranslationHistoryUncheckedCreateWithoutTranslationInput> | TranslationHistoryCreateWithoutTranslationInput[] | TranslationHistoryUncheckedCreateWithoutTranslationInput[]
    connectOrCreate?: TranslationHistoryCreateOrConnectWithoutTranslationInput | TranslationHistoryCreateOrConnectWithoutTranslationInput[]
    upsert?: TranslationHistoryUpsertWithWhereUniqueWithoutTranslationInput | TranslationHistoryUpsertWithWhereUniqueWithoutTranslationInput[]
    createMany?: TranslationHistoryCreateManyTranslationInputEnvelope
    set?: TranslationHistoryWhereUniqueInput | TranslationHistoryWhereUniqueInput[]
    disconnect?: TranslationHistoryWhereUniqueInput | TranslationHistoryWhereUniqueInput[]
    delete?: TranslationHistoryWhereUniqueInput | TranslationHistoryWhereUniqueInput[]
    connect?: TranslationHistoryWhereUniqueInput | TranslationHistoryWhereUniqueInput[]
    update?: TranslationHistoryUpdateWithWhereUniqueWithoutTranslationInput | TranslationHistoryUpdateWithWhereUniqueWithoutTranslationInput[]
    updateMany?: TranslationHistoryUpdateManyWithWhereWithoutTranslationInput | TranslationHistoryUpdateManyWithWhereWithoutTranslationInput[]
    deleteMany?: TranslationHistoryScalarWhereInput | TranslationHistoryScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TranslationHistoryUncheckedUpdateManyWithoutTranslationNestedInput = {
    create?: XOR<TranslationHistoryCreateWithoutTranslationInput, TranslationHistoryUncheckedCreateWithoutTranslationInput> | TranslationHistoryCreateWithoutTranslationInput[] | TranslationHistoryUncheckedCreateWithoutTranslationInput[]
    connectOrCreate?: TranslationHistoryCreateOrConnectWithoutTranslationInput | TranslationHistoryCreateOrConnectWithoutTranslationInput[]
    upsert?: TranslationHistoryUpsertWithWhereUniqueWithoutTranslationInput | TranslationHistoryUpsertWithWhereUniqueWithoutTranslationInput[]
    createMany?: TranslationHistoryCreateManyTranslationInputEnvelope
    set?: TranslationHistoryWhereUniqueInput | TranslationHistoryWhereUniqueInput[]
    disconnect?: TranslationHistoryWhereUniqueInput | TranslationHistoryWhereUniqueInput[]
    delete?: TranslationHistoryWhereUniqueInput | TranslationHistoryWhereUniqueInput[]
    connect?: TranslationHistoryWhereUniqueInput | TranslationHistoryWhereUniqueInput[]
    update?: TranslationHistoryUpdateWithWhereUniqueWithoutTranslationInput | TranslationHistoryUpdateWithWhereUniqueWithoutTranslationInput[]
    updateMany?: TranslationHistoryUpdateManyWithWhereWithoutTranslationInput | TranslationHistoryUpdateManyWithWhereWithoutTranslationInput[]
    deleteMany?: TranslationHistoryScalarWhereInput | TranslationHistoryScalarWhereInput[]
  }

  export type TranslationCreateNestedManyWithoutEditorInput = {
    create?: XOR<TranslationCreateWithoutEditorInput, TranslationUncheckedCreateWithoutEditorInput> | TranslationCreateWithoutEditorInput[] | TranslationUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: TranslationCreateOrConnectWithoutEditorInput | TranslationCreateOrConnectWithoutEditorInput[]
    createMany?: TranslationCreateManyEditorInputEnvelope
    connect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
  }

  export type TranslationHistoryCreateNestedManyWithoutEditorInput = {
    create?: XOR<TranslationHistoryCreateWithoutEditorInput, TranslationHistoryUncheckedCreateWithoutEditorInput> | TranslationHistoryCreateWithoutEditorInput[] | TranslationHistoryUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: TranslationHistoryCreateOrConnectWithoutEditorInput | TranslationHistoryCreateOrConnectWithoutEditorInput[]
    createMany?: TranslationHistoryCreateManyEditorInputEnvelope
    connect?: TranslationHistoryWhereUniqueInput | TranslationHistoryWhereUniqueInput[]
  }

  export type TranslationUncheckedCreateNestedManyWithoutEditorInput = {
    create?: XOR<TranslationCreateWithoutEditorInput, TranslationUncheckedCreateWithoutEditorInput> | TranslationCreateWithoutEditorInput[] | TranslationUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: TranslationCreateOrConnectWithoutEditorInput | TranslationCreateOrConnectWithoutEditorInput[]
    createMany?: TranslationCreateManyEditorInputEnvelope
    connect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
  }

  export type TranslationHistoryUncheckedCreateNestedManyWithoutEditorInput = {
    create?: XOR<TranslationHistoryCreateWithoutEditorInput, TranslationHistoryUncheckedCreateWithoutEditorInput> | TranslationHistoryCreateWithoutEditorInput[] | TranslationHistoryUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: TranslationHistoryCreateOrConnectWithoutEditorInput | TranslationHistoryCreateOrConnectWithoutEditorInput[]
    createMany?: TranslationHistoryCreateManyEditorInputEnvelope
    connect?: TranslationHistoryWhereUniqueInput | TranslationHistoryWhereUniqueInput[]
  }

  export type TranslationUpdateManyWithoutEditorNestedInput = {
    create?: XOR<TranslationCreateWithoutEditorInput, TranslationUncheckedCreateWithoutEditorInput> | TranslationCreateWithoutEditorInput[] | TranslationUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: TranslationCreateOrConnectWithoutEditorInput | TranslationCreateOrConnectWithoutEditorInput[]
    upsert?: TranslationUpsertWithWhereUniqueWithoutEditorInput | TranslationUpsertWithWhereUniqueWithoutEditorInput[]
    createMany?: TranslationCreateManyEditorInputEnvelope
    set?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    disconnect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    delete?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    connect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    update?: TranslationUpdateWithWhereUniqueWithoutEditorInput | TranslationUpdateWithWhereUniqueWithoutEditorInput[]
    updateMany?: TranslationUpdateManyWithWhereWithoutEditorInput | TranslationUpdateManyWithWhereWithoutEditorInput[]
    deleteMany?: TranslationScalarWhereInput | TranslationScalarWhereInput[]
  }

  export type TranslationHistoryUpdateManyWithoutEditorNestedInput = {
    create?: XOR<TranslationHistoryCreateWithoutEditorInput, TranslationHistoryUncheckedCreateWithoutEditorInput> | TranslationHistoryCreateWithoutEditorInput[] | TranslationHistoryUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: TranslationHistoryCreateOrConnectWithoutEditorInput | TranslationHistoryCreateOrConnectWithoutEditorInput[]
    upsert?: TranslationHistoryUpsertWithWhereUniqueWithoutEditorInput | TranslationHistoryUpsertWithWhereUniqueWithoutEditorInput[]
    createMany?: TranslationHistoryCreateManyEditorInputEnvelope
    set?: TranslationHistoryWhereUniqueInput | TranslationHistoryWhereUniqueInput[]
    disconnect?: TranslationHistoryWhereUniqueInput | TranslationHistoryWhereUniqueInput[]
    delete?: TranslationHistoryWhereUniqueInput | TranslationHistoryWhereUniqueInput[]
    connect?: TranslationHistoryWhereUniqueInput | TranslationHistoryWhereUniqueInput[]
    update?: TranslationHistoryUpdateWithWhereUniqueWithoutEditorInput | TranslationHistoryUpdateWithWhereUniqueWithoutEditorInput[]
    updateMany?: TranslationHistoryUpdateManyWithWhereWithoutEditorInput | TranslationHistoryUpdateManyWithWhereWithoutEditorInput[]
    deleteMany?: TranslationHistoryScalarWhereInput | TranslationHistoryScalarWhereInput[]
  }

  export type TranslationUncheckedUpdateManyWithoutEditorNestedInput = {
    create?: XOR<TranslationCreateWithoutEditorInput, TranslationUncheckedCreateWithoutEditorInput> | TranslationCreateWithoutEditorInput[] | TranslationUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: TranslationCreateOrConnectWithoutEditorInput | TranslationCreateOrConnectWithoutEditorInput[]
    upsert?: TranslationUpsertWithWhereUniqueWithoutEditorInput | TranslationUpsertWithWhereUniqueWithoutEditorInput[]
    createMany?: TranslationCreateManyEditorInputEnvelope
    set?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    disconnect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    delete?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    connect?: TranslationWhereUniqueInput | TranslationWhereUniqueInput[]
    update?: TranslationUpdateWithWhereUniqueWithoutEditorInput | TranslationUpdateWithWhereUniqueWithoutEditorInput[]
    updateMany?: TranslationUpdateManyWithWhereWithoutEditorInput | TranslationUpdateManyWithWhereWithoutEditorInput[]
    deleteMany?: TranslationScalarWhereInput | TranslationScalarWhereInput[]
  }

  export type TranslationHistoryUncheckedUpdateManyWithoutEditorNestedInput = {
    create?: XOR<TranslationHistoryCreateWithoutEditorInput, TranslationHistoryUncheckedCreateWithoutEditorInput> | TranslationHistoryCreateWithoutEditorInput[] | TranslationHistoryUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: TranslationHistoryCreateOrConnectWithoutEditorInput | TranslationHistoryCreateOrConnectWithoutEditorInput[]
    upsert?: TranslationHistoryUpsertWithWhereUniqueWithoutEditorInput | TranslationHistoryUpsertWithWhereUniqueWithoutEditorInput[]
    createMany?: TranslationHistoryCreateManyEditorInputEnvelope
    set?: TranslationHistoryWhereUniqueInput | TranslationHistoryWhereUniqueInput[]
    disconnect?: TranslationHistoryWhereUniqueInput | TranslationHistoryWhereUniqueInput[]
    delete?: TranslationHistoryWhereUniqueInput | TranslationHistoryWhereUniqueInput[]
    connect?: TranslationHistoryWhereUniqueInput | TranslationHistoryWhereUniqueInput[]
    update?: TranslationHistoryUpdateWithWhereUniqueWithoutEditorInput | TranslationHistoryUpdateWithWhereUniqueWithoutEditorInput[]
    updateMany?: TranslationHistoryUpdateManyWithWhereWithoutEditorInput | TranslationHistoryUpdateManyWithWhereWithoutEditorInput[]
    deleteMany?: TranslationHistoryScalarWhereInput | TranslationHistoryScalarWhereInput[]
  }

  export type TranslationCreateNestedOneWithoutTranslationHistoryInput = {
    create?: XOR<TranslationCreateWithoutTranslationHistoryInput, TranslationUncheckedCreateWithoutTranslationHistoryInput>
    connectOrCreate?: TranslationCreateOrConnectWithoutTranslationHistoryInput
    connect?: TranslationWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEditedHistoryInput = {
    create?: XOR<UserCreateWithoutEditedHistoryInput, UserUncheckedCreateWithoutEditedHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutEditedHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type TranslationUpdateOneRequiredWithoutTranslationHistoryNestedInput = {
    create?: XOR<TranslationCreateWithoutTranslationHistoryInput, TranslationUncheckedCreateWithoutTranslationHistoryInput>
    connectOrCreate?: TranslationCreateOrConnectWithoutTranslationHistoryInput
    upsert?: TranslationUpsertWithoutTranslationHistoryInput
    connect?: TranslationWhereUniqueInput
    update?: XOR<XOR<TranslationUpdateToOneWithWhereWithoutTranslationHistoryInput, TranslationUpdateWithoutTranslationHistoryInput>, TranslationUncheckedUpdateWithoutTranslationHistoryInput>
  }

  export type UserUpdateOneWithoutEditedHistoryNestedInput = {
    create?: XOR<UserCreateWithoutEditedHistoryInput, UserUncheckedCreateWithoutEditedHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutEditedHistoryInput
    upsert?: UserUpsertWithoutEditedHistoryInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEditedHistoryInput, UserUpdateWithoutEditedHistoryInput>, UserUncheckedUpdateWithoutEditedHistoryInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type TranslationKeyCreateWithoutProjectInput = {
    key: string
    namespace?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    translations?: TranslationCreateNestedManyWithoutTranslationKeyInput
  }

  export type TranslationKeyUncheckedCreateWithoutProjectInput = {
    id?: number
    key: string
    namespace?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    translations?: TranslationUncheckedCreateNestedManyWithoutTranslationKeyInput
  }

  export type TranslationKeyCreateOrConnectWithoutProjectInput = {
    where: TranslationKeyWhereUniqueInput
    create: XOR<TranslationKeyCreateWithoutProjectInput, TranslationKeyUncheckedCreateWithoutProjectInput>
  }

  export type TranslationKeyCreateManyProjectInputEnvelope = {
    data: TranslationKeyCreateManyProjectInput | TranslationKeyCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type TranslationKeyUpsertWithWhereUniqueWithoutProjectInput = {
    where: TranslationKeyWhereUniqueInput
    update: XOR<TranslationKeyUpdateWithoutProjectInput, TranslationKeyUncheckedUpdateWithoutProjectInput>
    create: XOR<TranslationKeyCreateWithoutProjectInput, TranslationKeyUncheckedCreateWithoutProjectInput>
  }

  export type TranslationKeyUpdateWithWhereUniqueWithoutProjectInput = {
    where: TranslationKeyWhereUniqueInput
    data: XOR<TranslationKeyUpdateWithoutProjectInput, TranslationKeyUncheckedUpdateWithoutProjectInput>
  }

  export type TranslationKeyUpdateManyWithWhereWithoutProjectInput = {
    where: TranslationKeyScalarWhereInput
    data: XOR<TranslationKeyUpdateManyMutationInput, TranslationKeyUncheckedUpdateManyWithoutProjectInput>
  }

  export type TranslationKeyScalarWhereInput = {
    AND?: TranslationKeyScalarWhereInput | TranslationKeyScalarWhereInput[]
    OR?: TranslationKeyScalarWhereInput[]
    NOT?: TranslationKeyScalarWhereInput | TranslationKeyScalarWhereInput[]
    id?: IntFilter<"TranslationKey"> | number
    projectId?: IntFilter<"TranslationKey"> | number
    key?: StringFilter<"TranslationKey"> | string
    namespace?: StringNullableFilter<"TranslationKey"> | string | null
    description?: StringNullableFilter<"TranslationKey"> | string | null
    createdAt?: DateTimeFilter<"TranslationKey"> | Date | string
    updatedAt?: DateTimeFilter<"TranslationKey"> | Date | string
  }

  export type TranslationCreateWithoutLanguageInput = {
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    translationKey: TranslationKeyCreateNestedOneWithoutTranslationsInput
    editor?: UserCreateNestedOneWithoutEditedTranslationsInput
    TranslationHistory?: TranslationHistoryCreateNestedManyWithoutTranslationInput
  }

  export type TranslationUncheckedCreateWithoutLanguageInput = {
    id?: number
    translationKeyId: number
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    editedBy?: number | null
    TranslationHistory?: TranslationHistoryUncheckedCreateNestedManyWithoutTranslationInput
  }

  export type TranslationCreateOrConnectWithoutLanguageInput = {
    where: TranslationWhereUniqueInput
    create: XOR<TranslationCreateWithoutLanguageInput, TranslationUncheckedCreateWithoutLanguageInput>
  }

  export type TranslationCreateManyLanguageInputEnvelope = {
    data: TranslationCreateManyLanguageInput | TranslationCreateManyLanguageInput[]
    skipDuplicates?: boolean
  }

  export type TranslationUpsertWithWhereUniqueWithoutLanguageInput = {
    where: TranslationWhereUniqueInput
    update: XOR<TranslationUpdateWithoutLanguageInput, TranslationUncheckedUpdateWithoutLanguageInput>
    create: XOR<TranslationCreateWithoutLanguageInput, TranslationUncheckedCreateWithoutLanguageInput>
  }

  export type TranslationUpdateWithWhereUniqueWithoutLanguageInput = {
    where: TranslationWhereUniqueInput
    data: XOR<TranslationUpdateWithoutLanguageInput, TranslationUncheckedUpdateWithoutLanguageInput>
  }

  export type TranslationUpdateManyWithWhereWithoutLanguageInput = {
    where: TranslationScalarWhereInput
    data: XOR<TranslationUpdateManyMutationInput, TranslationUncheckedUpdateManyWithoutLanguageInput>
  }

  export type TranslationScalarWhereInput = {
    AND?: TranslationScalarWhereInput | TranslationScalarWhereInput[]
    OR?: TranslationScalarWhereInput[]
    NOT?: TranslationScalarWhereInput | TranslationScalarWhereInput[]
    id?: IntFilter<"Translation"> | number
    translationKeyId?: IntFilter<"Translation"> | number
    languageId?: IntFilter<"Translation"> | number
    value?: StringFilter<"Translation"> | string
    createdAt?: DateTimeFilter<"Translation"> | Date | string
    updatedAt?: DateTimeFilter<"Translation"> | Date | string
    editedBy?: IntNullableFilter<"Translation"> | number | null
  }

  export type ProjectCreateWithoutKeysInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUncheckedCreateWithoutKeysInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectCreateOrConnectWithoutKeysInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutKeysInput, ProjectUncheckedCreateWithoutKeysInput>
  }

  export type TranslationCreateWithoutTranslationKeyInput = {
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    language: LanguageCreateNestedOneWithoutTranslationsInput
    editor?: UserCreateNestedOneWithoutEditedTranslationsInput
    TranslationHistory?: TranslationHistoryCreateNestedManyWithoutTranslationInput
  }

  export type TranslationUncheckedCreateWithoutTranslationKeyInput = {
    id?: number
    languageId: number
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    editedBy?: number | null
    TranslationHistory?: TranslationHistoryUncheckedCreateNestedManyWithoutTranslationInput
  }

  export type TranslationCreateOrConnectWithoutTranslationKeyInput = {
    where: TranslationWhereUniqueInput
    create: XOR<TranslationCreateWithoutTranslationKeyInput, TranslationUncheckedCreateWithoutTranslationKeyInput>
  }

  export type TranslationCreateManyTranslationKeyInputEnvelope = {
    data: TranslationCreateManyTranslationKeyInput | TranslationCreateManyTranslationKeyInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutKeysInput = {
    update: XOR<ProjectUpdateWithoutKeysInput, ProjectUncheckedUpdateWithoutKeysInput>
    create: XOR<ProjectCreateWithoutKeysInput, ProjectUncheckedCreateWithoutKeysInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutKeysInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutKeysInput, ProjectUncheckedUpdateWithoutKeysInput>
  }

  export type ProjectUpdateWithoutKeysInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateWithoutKeysInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationUpsertWithWhereUniqueWithoutTranslationKeyInput = {
    where: TranslationWhereUniqueInput
    update: XOR<TranslationUpdateWithoutTranslationKeyInput, TranslationUncheckedUpdateWithoutTranslationKeyInput>
    create: XOR<TranslationCreateWithoutTranslationKeyInput, TranslationUncheckedCreateWithoutTranslationKeyInput>
  }

  export type TranslationUpdateWithWhereUniqueWithoutTranslationKeyInput = {
    where: TranslationWhereUniqueInput
    data: XOR<TranslationUpdateWithoutTranslationKeyInput, TranslationUncheckedUpdateWithoutTranslationKeyInput>
  }

  export type TranslationUpdateManyWithWhereWithoutTranslationKeyInput = {
    where: TranslationScalarWhereInput
    data: XOR<TranslationUpdateManyMutationInput, TranslationUncheckedUpdateManyWithoutTranslationKeyInput>
  }

  export type TranslationKeyCreateWithoutTranslationsInput = {
    key: string
    namespace?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutKeysInput
  }

  export type TranslationKeyUncheckedCreateWithoutTranslationsInput = {
    id?: number
    projectId: number
    key: string
    namespace?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranslationKeyCreateOrConnectWithoutTranslationsInput = {
    where: TranslationKeyWhereUniqueInput
    create: XOR<TranslationKeyCreateWithoutTranslationsInput, TranslationKeyUncheckedCreateWithoutTranslationsInput>
  }

  export type LanguageCreateWithoutTranslationsInput = {
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LanguageUncheckedCreateWithoutTranslationsInput = {
    id?: number
    code: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LanguageCreateOrConnectWithoutTranslationsInput = {
    where: LanguageWhereUniqueInput
    create: XOR<LanguageCreateWithoutTranslationsInput, LanguageUncheckedCreateWithoutTranslationsInput>
  }

  export type UserCreateWithoutEditedTranslationsInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    editedHistory?: TranslationHistoryCreateNestedManyWithoutEditorInput
  }

  export type UserUncheckedCreateWithoutEditedTranslationsInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    editedHistory?: TranslationHistoryUncheckedCreateNestedManyWithoutEditorInput
  }

  export type UserCreateOrConnectWithoutEditedTranslationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEditedTranslationsInput, UserUncheckedCreateWithoutEditedTranslationsInput>
  }

  export type TranslationHistoryCreateWithoutTranslationInput = {
    newValue: string
    oldValue: string
    createdAt?: Date | string
    editor?: UserCreateNestedOneWithoutEditedHistoryInput
  }

  export type TranslationHistoryUncheckedCreateWithoutTranslationInput = {
    id?: number
    newValue: string
    oldValue: string
    createdAt?: Date | string
    editedBy?: number | null
  }

  export type TranslationHistoryCreateOrConnectWithoutTranslationInput = {
    where: TranslationHistoryWhereUniqueInput
    create: XOR<TranslationHistoryCreateWithoutTranslationInput, TranslationHistoryUncheckedCreateWithoutTranslationInput>
  }

  export type TranslationHistoryCreateManyTranslationInputEnvelope = {
    data: TranslationHistoryCreateManyTranslationInput | TranslationHistoryCreateManyTranslationInput[]
    skipDuplicates?: boolean
  }

  export type TranslationKeyUpsertWithoutTranslationsInput = {
    update: XOR<TranslationKeyUpdateWithoutTranslationsInput, TranslationKeyUncheckedUpdateWithoutTranslationsInput>
    create: XOR<TranslationKeyCreateWithoutTranslationsInput, TranslationKeyUncheckedCreateWithoutTranslationsInput>
    where?: TranslationKeyWhereInput
  }

  export type TranslationKeyUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: TranslationKeyWhereInput
    data: XOR<TranslationKeyUpdateWithoutTranslationsInput, TranslationKeyUncheckedUpdateWithoutTranslationsInput>
  }

  export type TranslationKeyUpdateWithoutTranslationsInput = {
    key?: StringFieldUpdateOperationsInput | string
    namespace?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutKeysNestedInput
  }

  export type TranslationKeyUncheckedUpdateWithoutTranslationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    projectId?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    namespace?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageUpsertWithoutTranslationsInput = {
    update: XOR<LanguageUpdateWithoutTranslationsInput, LanguageUncheckedUpdateWithoutTranslationsInput>
    create: XOR<LanguageCreateWithoutTranslationsInput, LanguageUncheckedCreateWithoutTranslationsInput>
    where?: LanguageWhereInput
  }

  export type LanguageUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: LanguageWhereInput
    data: XOR<LanguageUpdateWithoutTranslationsInput, LanguageUncheckedUpdateWithoutTranslationsInput>
  }

  export type LanguageUpdateWithoutTranslationsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageUncheckedUpdateWithoutTranslationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutEditedTranslationsInput = {
    update: XOR<UserUpdateWithoutEditedTranslationsInput, UserUncheckedUpdateWithoutEditedTranslationsInput>
    create: XOR<UserCreateWithoutEditedTranslationsInput, UserUncheckedCreateWithoutEditedTranslationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEditedTranslationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEditedTranslationsInput, UserUncheckedUpdateWithoutEditedTranslationsInput>
  }

  export type UserUpdateWithoutEditedTranslationsInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedHistory?: TranslationHistoryUpdateManyWithoutEditorNestedInput
  }

  export type UserUncheckedUpdateWithoutEditedTranslationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedHistory?: TranslationHistoryUncheckedUpdateManyWithoutEditorNestedInput
  }

  export type TranslationHistoryUpsertWithWhereUniqueWithoutTranslationInput = {
    where: TranslationHistoryWhereUniqueInput
    update: XOR<TranslationHistoryUpdateWithoutTranslationInput, TranslationHistoryUncheckedUpdateWithoutTranslationInput>
    create: XOR<TranslationHistoryCreateWithoutTranslationInput, TranslationHistoryUncheckedCreateWithoutTranslationInput>
  }

  export type TranslationHistoryUpdateWithWhereUniqueWithoutTranslationInput = {
    where: TranslationHistoryWhereUniqueInput
    data: XOR<TranslationHistoryUpdateWithoutTranslationInput, TranslationHistoryUncheckedUpdateWithoutTranslationInput>
  }

  export type TranslationHistoryUpdateManyWithWhereWithoutTranslationInput = {
    where: TranslationHistoryScalarWhereInput
    data: XOR<TranslationHistoryUpdateManyMutationInput, TranslationHistoryUncheckedUpdateManyWithoutTranslationInput>
  }

  export type TranslationHistoryScalarWhereInput = {
    AND?: TranslationHistoryScalarWhereInput | TranslationHistoryScalarWhereInput[]
    OR?: TranslationHistoryScalarWhereInput[]
    NOT?: TranslationHistoryScalarWhereInput | TranslationHistoryScalarWhereInput[]
    id?: IntFilter<"TranslationHistory"> | number
    translationId?: IntFilter<"TranslationHistory"> | number
    newValue?: StringFilter<"TranslationHistory"> | string
    oldValue?: StringFilter<"TranslationHistory"> | string
    createdAt?: DateTimeFilter<"TranslationHistory"> | Date | string
    editedBy?: IntNullableFilter<"TranslationHistory"> | number | null
  }

  export type TranslationCreateWithoutEditorInput = {
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    translationKey: TranslationKeyCreateNestedOneWithoutTranslationsInput
    language: LanguageCreateNestedOneWithoutTranslationsInput
    TranslationHistory?: TranslationHistoryCreateNestedManyWithoutTranslationInput
  }

  export type TranslationUncheckedCreateWithoutEditorInput = {
    id?: number
    translationKeyId: number
    languageId: number
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    TranslationHistory?: TranslationHistoryUncheckedCreateNestedManyWithoutTranslationInput
  }

  export type TranslationCreateOrConnectWithoutEditorInput = {
    where: TranslationWhereUniqueInput
    create: XOR<TranslationCreateWithoutEditorInput, TranslationUncheckedCreateWithoutEditorInput>
  }

  export type TranslationCreateManyEditorInputEnvelope = {
    data: TranslationCreateManyEditorInput | TranslationCreateManyEditorInput[]
    skipDuplicates?: boolean
  }

  export type TranslationHistoryCreateWithoutEditorInput = {
    newValue: string
    oldValue: string
    createdAt?: Date | string
    translation: TranslationCreateNestedOneWithoutTranslationHistoryInput
  }

  export type TranslationHistoryUncheckedCreateWithoutEditorInput = {
    id?: number
    translationId: number
    newValue: string
    oldValue: string
    createdAt?: Date | string
  }

  export type TranslationHistoryCreateOrConnectWithoutEditorInput = {
    where: TranslationHistoryWhereUniqueInput
    create: XOR<TranslationHistoryCreateWithoutEditorInput, TranslationHistoryUncheckedCreateWithoutEditorInput>
  }

  export type TranslationHistoryCreateManyEditorInputEnvelope = {
    data: TranslationHistoryCreateManyEditorInput | TranslationHistoryCreateManyEditorInput[]
    skipDuplicates?: boolean
  }

  export type TranslationUpsertWithWhereUniqueWithoutEditorInput = {
    where: TranslationWhereUniqueInput
    update: XOR<TranslationUpdateWithoutEditorInput, TranslationUncheckedUpdateWithoutEditorInput>
    create: XOR<TranslationCreateWithoutEditorInput, TranslationUncheckedCreateWithoutEditorInput>
  }

  export type TranslationUpdateWithWhereUniqueWithoutEditorInput = {
    where: TranslationWhereUniqueInput
    data: XOR<TranslationUpdateWithoutEditorInput, TranslationUncheckedUpdateWithoutEditorInput>
  }

  export type TranslationUpdateManyWithWhereWithoutEditorInput = {
    where: TranslationScalarWhereInput
    data: XOR<TranslationUpdateManyMutationInput, TranslationUncheckedUpdateManyWithoutEditorInput>
  }

  export type TranslationHistoryUpsertWithWhereUniqueWithoutEditorInput = {
    where: TranslationHistoryWhereUniqueInput
    update: XOR<TranslationHistoryUpdateWithoutEditorInput, TranslationHistoryUncheckedUpdateWithoutEditorInput>
    create: XOR<TranslationHistoryCreateWithoutEditorInput, TranslationHistoryUncheckedCreateWithoutEditorInput>
  }

  export type TranslationHistoryUpdateWithWhereUniqueWithoutEditorInput = {
    where: TranslationHistoryWhereUniqueInput
    data: XOR<TranslationHistoryUpdateWithoutEditorInput, TranslationHistoryUncheckedUpdateWithoutEditorInput>
  }

  export type TranslationHistoryUpdateManyWithWhereWithoutEditorInput = {
    where: TranslationHistoryScalarWhereInput
    data: XOR<TranslationHistoryUpdateManyMutationInput, TranslationHistoryUncheckedUpdateManyWithoutEditorInput>
  }

  export type TranslationCreateWithoutTranslationHistoryInput = {
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    translationKey: TranslationKeyCreateNestedOneWithoutTranslationsInput
    language: LanguageCreateNestedOneWithoutTranslationsInput
    editor?: UserCreateNestedOneWithoutEditedTranslationsInput
  }

  export type TranslationUncheckedCreateWithoutTranslationHistoryInput = {
    id?: number
    translationKeyId: number
    languageId: number
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    editedBy?: number | null
  }

  export type TranslationCreateOrConnectWithoutTranslationHistoryInput = {
    where: TranslationWhereUniqueInput
    create: XOR<TranslationCreateWithoutTranslationHistoryInput, TranslationUncheckedCreateWithoutTranslationHistoryInput>
  }

  export type UserCreateWithoutEditedHistoryInput = {
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    editedTranslations?: TranslationCreateNestedManyWithoutEditorInput
  }

  export type UserUncheckedCreateWithoutEditedHistoryInput = {
    id?: number
    username: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    editedTranslations?: TranslationUncheckedCreateNestedManyWithoutEditorInput
  }

  export type UserCreateOrConnectWithoutEditedHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEditedHistoryInput, UserUncheckedCreateWithoutEditedHistoryInput>
  }

  export type TranslationUpsertWithoutTranslationHistoryInput = {
    update: XOR<TranslationUpdateWithoutTranslationHistoryInput, TranslationUncheckedUpdateWithoutTranslationHistoryInput>
    create: XOR<TranslationCreateWithoutTranslationHistoryInput, TranslationUncheckedCreateWithoutTranslationHistoryInput>
    where?: TranslationWhereInput
  }

  export type TranslationUpdateToOneWithWhereWithoutTranslationHistoryInput = {
    where?: TranslationWhereInput
    data: XOR<TranslationUpdateWithoutTranslationHistoryInput, TranslationUncheckedUpdateWithoutTranslationHistoryInput>
  }

  export type TranslationUpdateWithoutTranslationHistoryInput = {
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translationKey?: TranslationKeyUpdateOneRequiredWithoutTranslationsNestedInput
    language?: LanguageUpdateOneRequiredWithoutTranslationsNestedInput
    editor?: UserUpdateOneWithoutEditedTranslationsNestedInput
  }

  export type TranslationUncheckedUpdateWithoutTranslationHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    translationKeyId?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserUpsertWithoutEditedHistoryInput = {
    update: XOR<UserUpdateWithoutEditedHistoryInput, UserUncheckedUpdateWithoutEditedHistoryInput>
    create: XOR<UserCreateWithoutEditedHistoryInput, UserUncheckedCreateWithoutEditedHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEditedHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEditedHistoryInput, UserUncheckedUpdateWithoutEditedHistoryInput>
  }

  export type UserUpdateWithoutEditedHistoryInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedTranslations?: TranslationUpdateManyWithoutEditorNestedInput
  }

  export type UserUncheckedUpdateWithoutEditedHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedTranslations?: TranslationUncheckedUpdateManyWithoutEditorNestedInput
  }

  export type TranslationKeyCreateManyProjectInput = {
    id?: number
    key: string
    namespace?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranslationKeyUpdateWithoutProjectInput = {
    key?: StringFieldUpdateOperationsInput | string
    namespace?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: TranslationUpdateManyWithoutTranslationKeyNestedInput
  }

  export type TranslationKeyUncheckedUpdateWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    namespace?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: TranslationUncheckedUpdateManyWithoutTranslationKeyNestedInput
  }

  export type TranslationKeyUncheckedUpdateManyWithoutProjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    key?: StringFieldUpdateOperationsInput | string
    namespace?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationCreateManyLanguageInput = {
    id?: number
    translationKeyId: number
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    editedBy?: number | null
  }

  export type TranslationUpdateWithoutLanguageInput = {
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translationKey?: TranslationKeyUpdateOneRequiredWithoutTranslationsNestedInput
    editor?: UserUpdateOneWithoutEditedTranslationsNestedInput
    TranslationHistory?: TranslationHistoryUpdateManyWithoutTranslationNestedInput
  }

  export type TranslationUncheckedUpdateWithoutLanguageInput = {
    id?: IntFieldUpdateOperationsInput | number
    translationKeyId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedBy?: NullableIntFieldUpdateOperationsInput | number | null
    TranslationHistory?: TranslationHistoryUncheckedUpdateManyWithoutTranslationNestedInput
  }

  export type TranslationUncheckedUpdateManyWithoutLanguageInput = {
    id?: IntFieldUpdateOperationsInput | number
    translationKeyId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TranslationCreateManyTranslationKeyInput = {
    id?: number
    languageId: number
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    editedBy?: number | null
  }

  export type TranslationUpdateWithoutTranslationKeyInput = {
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    language?: LanguageUpdateOneRequiredWithoutTranslationsNestedInput
    editor?: UserUpdateOneWithoutEditedTranslationsNestedInput
    TranslationHistory?: TranslationHistoryUpdateManyWithoutTranslationNestedInput
  }

  export type TranslationUncheckedUpdateWithoutTranslationKeyInput = {
    id?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedBy?: NullableIntFieldUpdateOperationsInput | number | null
    TranslationHistory?: TranslationHistoryUncheckedUpdateManyWithoutTranslationNestedInput
  }

  export type TranslationUncheckedUpdateManyWithoutTranslationKeyInput = {
    id?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TranslationHistoryCreateManyTranslationInput = {
    id?: number
    newValue: string
    oldValue: string
    createdAt?: Date | string
    editedBy?: number | null
  }

  export type TranslationHistoryUpdateWithoutTranslationInput = {
    newValue?: StringFieldUpdateOperationsInput | string
    oldValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editor?: UserUpdateOneWithoutEditedHistoryNestedInput
  }

  export type TranslationHistoryUncheckedUpdateWithoutTranslationInput = {
    id?: IntFieldUpdateOperationsInput | number
    newValue?: StringFieldUpdateOperationsInput | string
    oldValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TranslationHistoryUncheckedUpdateManyWithoutTranslationInput = {
    id?: IntFieldUpdateOperationsInput | number
    newValue?: StringFieldUpdateOperationsInput | string
    oldValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    editedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TranslationCreateManyEditorInput = {
    id?: number
    translationKeyId: number
    languageId: number
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TranslationHistoryCreateManyEditorInput = {
    id?: number
    translationId: number
    newValue: string
    oldValue: string
    createdAt?: Date | string
  }

  export type TranslationUpdateWithoutEditorInput = {
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translationKey?: TranslationKeyUpdateOneRequiredWithoutTranslationsNestedInput
    language?: LanguageUpdateOneRequiredWithoutTranslationsNestedInput
    TranslationHistory?: TranslationHistoryUpdateManyWithoutTranslationNestedInput
  }

  export type TranslationUncheckedUpdateWithoutEditorInput = {
    id?: IntFieldUpdateOperationsInput | number
    translationKeyId?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TranslationHistory?: TranslationHistoryUncheckedUpdateManyWithoutTranslationNestedInput
  }

  export type TranslationUncheckedUpdateManyWithoutEditorInput = {
    id?: IntFieldUpdateOperationsInput | number
    translationKeyId?: IntFieldUpdateOperationsInput | number
    languageId?: IntFieldUpdateOperationsInput | number
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationHistoryUpdateWithoutEditorInput = {
    newValue?: StringFieldUpdateOperationsInput | string
    oldValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translation?: TranslationUpdateOneRequiredWithoutTranslationHistoryNestedInput
  }

  export type TranslationHistoryUncheckedUpdateWithoutEditorInput = {
    id?: IntFieldUpdateOperationsInput | number
    translationId?: IntFieldUpdateOperationsInput | number
    newValue?: StringFieldUpdateOperationsInput | string
    oldValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TranslationHistoryUncheckedUpdateManyWithoutEditorInput = {
    id?: IntFieldUpdateOperationsInput | number
    translationId?: IntFieldUpdateOperationsInput | number
    newValue?: StringFieldUpdateOperationsInput | string
    oldValue?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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