
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
 * Model Major
 * 
 */
export type Major = $Result.DefaultSelection<Prisma.$MajorPayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model StudentMajor
 * 
 */
export type StudentMajor = $Result.DefaultSelection<Prisma.$StudentMajorPayload>
/**
 * Model StudentSubject
 * 
 */
export type StudentSubject = $Result.DefaultSelection<Prisma.$StudentSubjectPayload>
/**
 * Model MajorSubject
 * 
 */
export type MajorSubject = $Result.DefaultSelection<Prisma.$MajorSubjectPayload>
/**
 * Model TeacherMajor
 * 
 */
export type TeacherMajor = $Result.DefaultSelection<Prisma.$TeacherMajorPayload>
/**
 * Model TeacherSubject
 * 
 */
export type TeacherSubject = $Result.DefaultSelection<Prisma.$TeacherSubjectPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Majors
 * const majors = await prisma.major.findMany()
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
   * // Fetch zero or more Majors
   * const majors = await prisma.major.findMany()
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
   * `prisma.major`: Exposes CRUD operations for the **Major** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Majors
    * const majors = await prisma.major.findMany()
    * ```
    */
  get major(): Prisma.MajorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentMajor`: Exposes CRUD operations for the **StudentMajor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentMajors
    * const studentMajors = await prisma.studentMajor.findMany()
    * ```
    */
  get studentMajor(): Prisma.StudentMajorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentSubject`: Exposes CRUD operations for the **StudentSubject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentSubjects
    * const studentSubjects = await prisma.studentSubject.findMany()
    * ```
    */
  get studentSubject(): Prisma.StudentSubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.majorSubject`: Exposes CRUD operations for the **MajorSubject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MajorSubjects
    * const majorSubjects = await prisma.majorSubject.findMany()
    * ```
    */
  get majorSubject(): Prisma.MajorSubjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacherMajor`: Exposes CRUD operations for the **TeacherMajor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeacherMajors
    * const teacherMajors = await prisma.teacherMajor.findMany()
    * ```
    */
  get teacherMajor(): Prisma.TeacherMajorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teacherSubject`: Exposes CRUD operations for the **TeacherSubject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeacherSubjects
    * const teacherSubjects = await prisma.teacherSubject.findMany()
    * ```
    */
  get teacherSubject(): Prisma.TeacherSubjectDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Major: 'Major',
    Subject: 'Subject',
    Student: 'Student',
    Teacher: 'Teacher',
    StudentMajor: 'StudentMajor',
    StudentSubject: 'StudentSubject',
    MajorSubject: 'MajorSubject',
    TeacherMajor: 'TeacherMajor',
    TeacherSubject: 'TeacherSubject'
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
      modelProps: "major" | "subject" | "student" | "teacher" | "studentMajor" | "studentSubject" | "majorSubject" | "teacherMajor" | "teacherSubject"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Major: {
        payload: Prisma.$MajorPayload<ExtArgs>
        fields: Prisma.MajorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MajorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MajorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          findFirst: {
            args: Prisma.MajorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MajorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          findMany: {
            args: Prisma.MajorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>[]
          }
          create: {
            args: Prisma.MajorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          createMany: {
            args: Prisma.MajorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MajorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>[]
          }
          delete: {
            args: Prisma.MajorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          update: {
            args: Prisma.MajorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          deleteMany: {
            args: Prisma.MajorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MajorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MajorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>[]
          }
          upsert: {
            args: Prisma.MajorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorPayload>
          }
          aggregate: {
            args: Prisma.MajorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMajor>
          }
          groupBy: {
            args: Prisma.MajorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MajorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MajorCountArgs<ExtArgs>
            result: $Utils.Optional<MajorCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      StudentMajor: {
        payload: Prisma.$StudentMajorPayload<ExtArgs>
        fields: Prisma.StudentMajorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentMajorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentMajorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentMajorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentMajorPayload>
          }
          findFirst: {
            args: Prisma.StudentMajorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentMajorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentMajorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentMajorPayload>
          }
          findMany: {
            args: Prisma.StudentMajorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentMajorPayload>[]
          }
          create: {
            args: Prisma.StudentMajorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentMajorPayload>
          }
          createMany: {
            args: Prisma.StudentMajorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentMajorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentMajorPayload>[]
          }
          delete: {
            args: Prisma.StudentMajorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentMajorPayload>
          }
          update: {
            args: Prisma.StudentMajorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentMajorPayload>
          }
          deleteMany: {
            args: Prisma.StudentMajorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentMajorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentMajorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentMajorPayload>[]
          }
          upsert: {
            args: Prisma.StudentMajorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentMajorPayload>
          }
          aggregate: {
            args: Prisma.StudentMajorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentMajor>
          }
          groupBy: {
            args: Prisma.StudentMajorGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentMajorGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentMajorCountArgs<ExtArgs>
            result: $Utils.Optional<StudentMajorCountAggregateOutputType> | number
          }
        }
      }
      StudentSubject: {
        payload: Prisma.$StudentSubjectPayload<ExtArgs>
        fields: Prisma.StudentSubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentSubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentSubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          findFirst: {
            args: Prisma.StudentSubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentSubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          findMany: {
            args: Prisma.StudentSubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>[]
          }
          create: {
            args: Prisma.StudentSubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          createMany: {
            args: Prisma.StudentSubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentSubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>[]
          }
          delete: {
            args: Prisma.StudentSubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          update: {
            args: Prisma.StudentSubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          deleteMany: {
            args: Prisma.StudentSubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentSubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentSubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>[]
          }
          upsert: {
            args: Prisma.StudentSubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentSubjectPayload>
          }
          aggregate: {
            args: Prisma.StudentSubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentSubject>
          }
          groupBy: {
            args: Prisma.StudentSubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentSubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentSubjectCountArgs<ExtArgs>
            result: $Utils.Optional<StudentSubjectCountAggregateOutputType> | number
          }
        }
      }
      MajorSubject: {
        payload: Prisma.$MajorSubjectPayload<ExtArgs>
        fields: Prisma.MajorSubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MajorSubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorSubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MajorSubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorSubjectPayload>
          }
          findFirst: {
            args: Prisma.MajorSubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorSubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MajorSubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorSubjectPayload>
          }
          findMany: {
            args: Prisma.MajorSubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorSubjectPayload>[]
          }
          create: {
            args: Prisma.MajorSubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorSubjectPayload>
          }
          createMany: {
            args: Prisma.MajorSubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MajorSubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorSubjectPayload>[]
          }
          delete: {
            args: Prisma.MajorSubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorSubjectPayload>
          }
          update: {
            args: Prisma.MajorSubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorSubjectPayload>
          }
          deleteMany: {
            args: Prisma.MajorSubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MajorSubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MajorSubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorSubjectPayload>[]
          }
          upsert: {
            args: Prisma.MajorSubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MajorSubjectPayload>
          }
          aggregate: {
            args: Prisma.MajorSubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMajorSubject>
          }
          groupBy: {
            args: Prisma.MajorSubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<MajorSubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.MajorSubjectCountArgs<ExtArgs>
            result: $Utils.Optional<MajorSubjectCountAggregateOutputType> | number
          }
        }
      }
      TeacherMajor: {
        payload: Prisma.$TeacherMajorPayload<ExtArgs>
        fields: Prisma.TeacherMajorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherMajorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherMajorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherMajorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherMajorPayload>
          }
          findFirst: {
            args: Prisma.TeacherMajorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherMajorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherMajorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherMajorPayload>
          }
          findMany: {
            args: Prisma.TeacherMajorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherMajorPayload>[]
          }
          create: {
            args: Prisma.TeacherMajorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherMajorPayload>
          }
          createMany: {
            args: Prisma.TeacherMajorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherMajorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherMajorPayload>[]
          }
          delete: {
            args: Prisma.TeacherMajorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherMajorPayload>
          }
          update: {
            args: Prisma.TeacherMajorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherMajorPayload>
          }
          deleteMany: {
            args: Prisma.TeacherMajorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherMajorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherMajorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherMajorPayload>[]
          }
          upsert: {
            args: Prisma.TeacherMajorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherMajorPayload>
          }
          aggregate: {
            args: Prisma.TeacherMajorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacherMajor>
          }
          groupBy: {
            args: Prisma.TeacherMajorGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherMajorGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherMajorCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherMajorCountAggregateOutputType> | number
          }
        }
      }
      TeacherSubject: {
        payload: Prisma.$TeacherSubjectPayload<ExtArgs>
        fields: Prisma.TeacherSubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherSubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherSubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          findFirst: {
            args: Prisma.TeacherSubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherSubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          findMany: {
            args: Prisma.TeacherSubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>[]
          }
          create: {
            args: Prisma.TeacherSubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          createMany: {
            args: Prisma.TeacherSubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherSubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>[]
          }
          delete: {
            args: Prisma.TeacherSubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          update: {
            args: Prisma.TeacherSubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          deleteMany: {
            args: Prisma.TeacherSubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherSubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeacherSubjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>[]
          }
          upsert: {
            args: Prisma.TeacherSubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherSubjectPayload>
          }
          aggregate: {
            args: Prisma.TeacherSubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacherSubject>
          }
          groupBy: {
            args: Prisma.TeacherSubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherSubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherSubjectCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherSubjectCountAggregateOutputType> | number
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
    major?: MajorOmit
    subject?: SubjectOmit
    student?: StudentOmit
    teacher?: TeacherOmit
    studentMajor?: StudentMajorOmit
    studentSubject?: StudentSubjectOmit
    majorSubject?: MajorSubjectOmit
    teacherMajor?: TeacherMajorOmit
    teacherSubject?: TeacherSubjectOmit
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
   * Count Type MajorCountOutputType
   */

  export type MajorCountOutputType = {
    students: number
    subjects: number
    teachers: number
  }

  export type MajorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | MajorCountOutputTypeCountStudentsArgs
    subjects?: boolean | MajorCountOutputTypeCountSubjectsArgs
    teachers?: boolean | MajorCountOutputTypeCountTeachersArgs
  }

  // Custom InputTypes
  /**
   * MajorCountOutputType without action
   */
  export type MajorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorCountOutputType
     */
    select?: MajorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MajorCountOutputType without action
   */
  export type MajorCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentMajorWhereInput
  }

  /**
   * MajorCountOutputType without action
   */
  export type MajorCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MajorSubjectWhereInput
  }

  /**
   * MajorCountOutputType without action
   */
  export type MajorCountOutputTypeCountTeachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherMajorWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    majors: number
    students: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    majors?: boolean | SubjectCountOutputTypeCountMajorsArgs
    students?: boolean | SubjectCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountMajorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MajorSubjectWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentSubjectWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    majors: number
    subjects: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    majors?: boolean | StudentCountOutputTypeCountMajorsArgs
    subjects?: boolean | StudentCountOutputTypeCountSubjectsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountMajorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentMajorWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentSubjectWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    majors: number
    subjects: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    majors?: boolean | TeacherCountOutputTypeCountMajorsArgs
    subjects?: boolean | TeacherCountOutputTypeCountSubjectsArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountMajorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherMajorWhereInput
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSubjectWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Major
   */

  export type AggregateMajor = {
    _count: MajorCountAggregateOutputType | null
    _avg: MajorAvgAggregateOutputType | null
    _sum: MajorSumAggregateOutputType | null
    _min: MajorMinAggregateOutputType | null
    _max: MajorMaxAggregateOutputType | null
  }

  export type MajorAvgAggregateOutputType = {
    id: number | null
  }

  export type MajorSumAggregateOutputType = {
    id: number | null
  }

  export type MajorMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type MajorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type MajorCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type MajorAvgAggregateInputType = {
    id?: true
  }

  export type MajorSumAggregateInputType = {
    id?: true
  }

  export type MajorMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type MajorMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type MajorCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type MajorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Major to aggregate.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Majors
    **/
    _count?: true | MajorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MajorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MajorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MajorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MajorMaxAggregateInputType
  }

  export type GetMajorAggregateType<T extends MajorAggregateArgs> = {
        [P in keyof T & keyof AggregateMajor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMajor[P]>
      : GetScalarType<T[P], AggregateMajor[P]>
  }




  export type MajorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MajorWhereInput
    orderBy?: MajorOrderByWithAggregationInput | MajorOrderByWithAggregationInput[]
    by: MajorScalarFieldEnum[] | MajorScalarFieldEnum
    having?: MajorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MajorCountAggregateInputType | true
    _avg?: MajorAvgAggregateInputType
    _sum?: MajorSumAggregateInputType
    _min?: MajorMinAggregateInputType
    _max?: MajorMaxAggregateInputType
  }

  export type MajorGroupByOutputType = {
    id: number
    name: string
    description: string | null
    _count: MajorCountAggregateOutputType | null
    _avg: MajorAvgAggregateOutputType | null
    _sum: MajorSumAggregateOutputType | null
    _min: MajorMinAggregateOutputType | null
    _max: MajorMaxAggregateOutputType | null
  }

  type GetMajorGroupByPayload<T extends MajorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MajorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MajorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MajorGroupByOutputType[P]>
            : GetScalarType<T[P], MajorGroupByOutputType[P]>
        }
      >
    >


  export type MajorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    students?: boolean | Major$studentsArgs<ExtArgs>
    subjects?: boolean | Major$subjectsArgs<ExtArgs>
    teachers?: boolean | Major$teachersArgs<ExtArgs>
    _count?: boolean | MajorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["major"]>

  export type MajorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["major"]>

  export type MajorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["major"]>

  export type MajorSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type MajorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["major"]>
  export type MajorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | Major$studentsArgs<ExtArgs>
    subjects?: boolean | Major$subjectsArgs<ExtArgs>
    teachers?: boolean | Major$teachersArgs<ExtArgs>
    _count?: boolean | MajorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MajorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MajorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MajorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Major"
    objects: {
      students: Prisma.$StudentMajorPayload<ExtArgs>[]
      subjects: Prisma.$MajorSubjectPayload<ExtArgs>[]
      teachers: Prisma.$TeacherMajorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
    }, ExtArgs["result"]["major"]>
    composites: {}
  }

  type MajorGetPayload<S extends boolean | null | undefined | MajorDefaultArgs> = $Result.GetResult<Prisma.$MajorPayload, S>

  type MajorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MajorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MajorCountAggregateInputType | true
    }

  export interface MajorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Major'], meta: { name: 'Major' } }
    /**
     * Find zero or one Major that matches the filter.
     * @param {MajorFindUniqueArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MajorFindUniqueArgs>(args: SelectSubset<T, MajorFindUniqueArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Major that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MajorFindUniqueOrThrowArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MajorFindUniqueOrThrowArgs>(args: SelectSubset<T, MajorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Major that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorFindFirstArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MajorFindFirstArgs>(args?: SelectSubset<T, MajorFindFirstArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Major that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorFindFirstOrThrowArgs} args - Arguments to find a Major
     * @example
     * // Get one Major
     * const major = await prisma.major.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MajorFindFirstOrThrowArgs>(args?: SelectSubset<T, MajorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Majors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Majors
     * const majors = await prisma.major.findMany()
     * 
     * // Get first 10 Majors
     * const majors = await prisma.major.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const majorWithIdOnly = await prisma.major.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MajorFindManyArgs>(args?: SelectSubset<T, MajorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Major.
     * @param {MajorCreateArgs} args - Arguments to create a Major.
     * @example
     * // Create one Major
     * const Major = await prisma.major.create({
     *   data: {
     *     // ... data to create a Major
     *   }
     * })
     * 
     */
    create<T extends MajorCreateArgs>(args: SelectSubset<T, MajorCreateArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Majors.
     * @param {MajorCreateManyArgs} args - Arguments to create many Majors.
     * @example
     * // Create many Majors
     * const major = await prisma.major.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MajorCreateManyArgs>(args?: SelectSubset<T, MajorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Majors and returns the data saved in the database.
     * @param {MajorCreateManyAndReturnArgs} args - Arguments to create many Majors.
     * @example
     * // Create many Majors
     * const major = await prisma.major.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Majors and only return the `id`
     * const majorWithIdOnly = await prisma.major.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MajorCreateManyAndReturnArgs>(args?: SelectSubset<T, MajorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Major.
     * @param {MajorDeleteArgs} args - Arguments to delete one Major.
     * @example
     * // Delete one Major
     * const Major = await prisma.major.delete({
     *   where: {
     *     // ... filter to delete one Major
     *   }
     * })
     * 
     */
    delete<T extends MajorDeleteArgs>(args: SelectSubset<T, MajorDeleteArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Major.
     * @param {MajorUpdateArgs} args - Arguments to update one Major.
     * @example
     * // Update one Major
     * const major = await prisma.major.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MajorUpdateArgs>(args: SelectSubset<T, MajorUpdateArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Majors.
     * @param {MajorDeleteManyArgs} args - Arguments to filter Majors to delete.
     * @example
     * // Delete a few Majors
     * const { count } = await prisma.major.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MajorDeleteManyArgs>(args?: SelectSubset<T, MajorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Majors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Majors
     * const major = await prisma.major.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MajorUpdateManyArgs>(args: SelectSubset<T, MajorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Majors and returns the data updated in the database.
     * @param {MajorUpdateManyAndReturnArgs} args - Arguments to update many Majors.
     * @example
     * // Update many Majors
     * const major = await prisma.major.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Majors and only return the `id`
     * const majorWithIdOnly = await prisma.major.updateManyAndReturn({
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
    updateManyAndReturn<T extends MajorUpdateManyAndReturnArgs>(args: SelectSubset<T, MajorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Major.
     * @param {MajorUpsertArgs} args - Arguments to update or create a Major.
     * @example
     * // Update or create a Major
     * const major = await prisma.major.upsert({
     *   create: {
     *     // ... data to create a Major
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Major we want to update
     *   }
     * })
     */
    upsert<T extends MajorUpsertArgs>(args: SelectSubset<T, MajorUpsertArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Majors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorCountArgs} args - Arguments to filter Majors to count.
     * @example
     * // Count the number of Majors
     * const count = await prisma.major.count({
     *   where: {
     *     // ... the filter for the Majors we want to count
     *   }
     * })
    **/
    count<T extends MajorCountArgs>(
      args?: Subset<T, MajorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MajorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Major.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MajorAggregateArgs>(args: Subset<T, MajorAggregateArgs>): Prisma.PrismaPromise<GetMajorAggregateType<T>>

    /**
     * Group by Major.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorGroupByArgs} args - Group by arguments.
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
      T extends MajorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MajorGroupByArgs['orderBy'] }
        : { orderBy?: MajorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MajorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMajorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Major model
   */
  readonly fields: MajorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Major.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MajorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends Major$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Major$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentMajorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subjects<T extends Major$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Major$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teachers<T extends Major$teachersArgs<ExtArgs> = {}>(args?: Subset<T, Major$teachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherMajorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Major model
   */
  interface MajorFieldRefs {
    readonly id: FieldRef<"Major", 'Int'>
    readonly name: FieldRef<"Major", 'String'>
    readonly description: FieldRef<"Major", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Major findUnique
   */
  export type MajorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major findUniqueOrThrow
   */
  export type MajorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major findFirst
   */
  export type MajorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Majors.
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Majors.
     */
    distinct?: MajorScalarFieldEnum | MajorScalarFieldEnum[]
  }

  /**
   * Major findFirstOrThrow
   */
  export type MajorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Major to fetch.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Majors.
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Majors.
     */
    distinct?: MajorScalarFieldEnum | MajorScalarFieldEnum[]
  }

  /**
   * Major findMany
   */
  export type MajorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter, which Majors to fetch.
     */
    where?: MajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Majors to fetch.
     */
    orderBy?: MajorOrderByWithRelationInput | MajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Majors.
     */
    cursor?: MajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Majors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Majors.
     */
    skip?: number
    distinct?: MajorScalarFieldEnum | MajorScalarFieldEnum[]
  }

  /**
   * Major create
   */
  export type MajorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * The data needed to create a Major.
     */
    data: XOR<MajorCreateInput, MajorUncheckedCreateInput>
  }

  /**
   * Major createMany
   */
  export type MajorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Majors.
     */
    data: MajorCreateManyInput | MajorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Major createManyAndReturn
   */
  export type MajorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * The data used to create many Majors.
     */
    data: MajorCreateManyInput | MajorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Major update
   */
  export type MajorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * The data needed to update a Major.
     */
    data: XOR<MajorUpdateInput, MajorUncheckedUpdateInput>
    /**
     * Choose, which Major to update.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major updateMany
   */
  export type MajorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Majors.
     */
    data: XOR<MajorUpdateManyMutationInput, MajorUncheckedUpdateManyInput>
    /**
     * Filter which Majors to update
     */
    where?: MajorWhereInput
    /**
     * Limit how many Majors to update.
     */
    limit?: number
  }

  /**
   * Major updateManyAndReturn
   */
  export type MajorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * The data used to update Majors.
     */
    data: XOR<MajorUpdateManyMutationInput, MajorUncheckedUpdateManyInput>
    /**
     * Filter which Majors to update
     */
    where?: MajorWhereInput
    /**
     * Limit how many Majors to update.
     */
    limit?: number
  }

  /**
   * Major upsert
   */
  export type MajorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * The filter to search for the Major to update in case it exists.
     */
    where: MajorWhereUniqueInput
    /**
     * In case the Major found by the `where` argument doesn't exist, create a new Major with this data.
     */
    create: XOR<MajorCreateInput, MajorUncheckedCreateInput>
    /**
     * In case the Major was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MajorUpdateInput, MajorUncheckedUpdateInput>
  }

  /**
   * Major delete
   */
  export type MajorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
    /**
     * Filter which Major to delete.
     */
    where: MajorWhereUniqueInput
  }

  /**
   * Major deleteMany
   */
  export type MajorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Majors to delete
     */
    where?: MajorWhereInput
    /**
     * Limit how many Majors to delete.
     */
    limit?: number
  }

  /**
   * Major.students
   */
  export type Major$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentMajor
     */
    select?: StudentMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentMajor
     */
    omit?: StudentMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentMajorInclude<ExtArgs> | null
    where?: StudentMajorWhereInput
    orderBy?: StudentMajorOrderByWithRelationInput | StudentMajorOrderByWithRelationInput[]
    cursor?: StudentMajorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentMajorScalarFieldEnum | StudentMajorScalarFieldEnum[]
  }

  /**
   * Major.subjects
   */
  export type Major$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorSubject
     */
    select?: MajorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorSubject
     */
    omit?: MajorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorSubjectInclude<ExtArgs> | null
    where?: MajorSubjectWhereInput
    orderBy?: MajorSubjectOrderByWithRelationInput | MajorSubjectOrderByWithRelationInput[]
    cursor?: MajorSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MajorSubjectScalarFieldEnum | MajorSubjectScalarFieldEnum[]
  }

  /**
   * Major.teachers
   */
  export type Major$teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherMajor
     */
    select?: TeacherMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherMajor
     */
    omit?: TeacherMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherMajorInclude<ExtArgs> | null
    where?: TeacherMajorWhereInput
    orderBy?: TeacherMajorOrderByWithRelationInput | TeacherMajorOrderByWithRelationInput[]
    cursor?: TeacherMajorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherMajorScalarFieldEnum | TeacherMajorScalarFieldEnum[]
  }

  /**
   * Major without action
   */
  export type MajorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Major
     */
    select?: MajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Major
     */
    omit?: MajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectAvgAggregateOutputType = {
    id: number | null
    teacherId: number | null
  }

  export type SubjectSumAggregateOutputType = {
    id: number | null
    teacherId: number | null
  }

  export type SubjectMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    teacherId: number | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    teacherId: number | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    teacherId: number
    _all: number
  }


  export type SubjectAvgAggregateInputType = {
    id?: true
    teacherId?: true
  }

  export type SubjectSumAggregateInputType = {
    id?: true
    teacherId?: true
  }

  export type SubjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    teacherId?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    teacherId?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    teacherId?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _avg?: SubjectAvgAggregateInputType
    _sum?: SubjectSumAggregateInputType
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: number
    name: string
    description: string | null
    teacherId: number | null
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    teacherId?: boolean
    majors?: boolean | Subject$majorsArgs<ExtArgs>
    students?: boolean | Subject$studentsArgs<ExtArgs>
    teachers?: boolean | Subject$teachersArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    teacherId?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    teacherId?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    teacherId?: boolean
  }

  export type SubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "teacherId", ExtArgs["result"]["subject"]>
  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    majors?: boolean | Subject$majorsArgs<ExtArgs>
    students?: boolean | Subject$studentsArgs<ExtArgs>
    teachers?: boolean | Subject$teachersArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      majors: Prisma.$MajorSubjectPayload<ExtArgs>[]
      students: Prisma.$StudentSubjectPayload<ExtArgs>[]
      teachers: Prisma.$TeacherSubjectPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      teacherId: number | null
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {SubjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, SubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
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
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    majors<T extends Subject$majorsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$majorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends Subject$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teachers<T extends Subject$teachersArgs<ExtArgs> = {}>(args?: Subset<T, Subject$teachersArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Subject model
   */
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'Int'>
    readonly name: FieldRef<"Subject", 'String'>
    readonly description: FieldRef<"Subject", 'String'>
    readonly teacherId: FieldRef<"Subject", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject updateManyAndReturn
   */
  export type SubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to update.
     */
    limit?: number
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
    /**
     * Limit how many Subjects to delete.
     */
    limit?: number
  }

  /**
   * Subject.majors
   */
  export type Subject$majorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorSubject
     */
    select?: MajorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorSubject
     */
    omit?: MajorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorSubjectInclude<ExtArgs> | null
    where?: MajorSubjectWhereInput
    orderBy?: MajorSubjectOrderByWithRelationInput | MajorSubjectOrderByWithRelationInput[]
    cursor?: MajorSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MajorSubjectScalarFieldEnum | MajorSubjectScalarFieldEnum[]
  }

  /**
   * Subject.students
   */
  export type Subject$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    where?: StudentSubjectWhereInput
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    cursor?: StudentSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * Subject.teachers
   */
  export type Subject$teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    where?: TeacherSubjectWhereInput
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subject
     */
    omit?: SubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    name: string
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    majors?: boolean | Student$majorsArgs<ExtArgs>
    subjects?: boolean | Student$subjectsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    majors?: boolean | Student$majorsArgs<ExtArgs>
    subjects?: boolean | Student$subjectsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      majors: Prisma.$StudentMajorPayload<ExtArgs>[]
      subjects: Prisma.$StudentSubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    majors<T extends Student$majorsArgs<ExtArgs> = {}>(args?: Subset<T, Student$majorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentMajorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subjects<T extends Student$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Student$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly name: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.majors
   */
  export type Student$majorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentMajor
     */
    select?: StudentMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentMajor
     */
    omit?: StudentMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentMajorInclude<ExtArgs> | null
    where?: StudentMajorWhereInput
    orderBy?: StudentMajorOrderByWithRelationInput | StudentMajorOrderByWithRelationInput[]
    cursor?: StudentMajorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentMajorScalarFieldEnum | StudentMajorScalarFieldEnum[]
  }

  /**
   * Student.subjects
   */
  export type Student$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    where?: StudentSubjectWhereInput
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    cursor?: StudentSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherAvgAggregateOutputType = {
    id: number | null
  }

  export type TeacherSumAggregateOutputType = {
    id: number | null
  }

  export type TeacherMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TeacherAvgAggregateInputType = {
    id?: true
  }

  export type TeacherSumAggregateInputType = {
    id?: true
  }

  export type TeacherMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _avg?: TeacherAvgAggregateInputType
    _sum?: TeacherSumAggregateInputType
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: number
    name: string
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    majors?: boolean | Teacher$majorsArgs<ExtArgs>
    subjects?: boolean | Teacher$subjectsArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TeacherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["teacher"]>
  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    majors?: boolean | Teacher$majorsArgs<ExtArgs>
    subjects?: boolean | Teacher$subjectsArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeacherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      majors: Prisma.$TeacherMajorPayload<ExtArgs>[]
      subjects: Prisma.$TeacherSubjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers and returns the data updated in the database.
     * @param {TeacherUpdateManyAndReturnArgs} args - Arguments to update many Teachers.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeacherUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
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
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    majors<T extends Teacher$majorsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$majorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherMajorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subjects<T extends Teacher$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Teacher model
   */
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'Int'>
    readonly name: FieldRef<"Teacher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher updateManyAndReturn
   */
  export type TeacherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to update.
     */
    limit?: number
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number
  }

  /**
   * Teacher.majors
   */
  export type Teacher$majorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherMajor
     */
    select?: TeacherMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherMajor
     */
    omit?: TeacherMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherMajorInclude<ExtArgs> | null
    where?: TeacherMajorWhereInput
    orderBy?: TeacherMajorOrderByWithRelationInput | TeacherMajorOrderByWithRelationInput[]
    cursor?: TeacherMajorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherMajorScalarFieldEnum | TeacherMajorScalarFieldEnum[]
  }

  /**
   * Teacher.subjects
   */
  export type Teacher$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    where?: TeacherSubjectWhereInput
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    cursor?: TeacherSubjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teacher
     */
    omit?: TeacherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model StudentMajor
   */

  export type AggregateStudentMajor = {
    _count: StudentMajorCountAggregateOutputType | null
    _avg: StudentMajorAvgAggregateOutputType | null
    _sum: StudentMajorSumAggregateOutputType | null
    _min: StudentMajorMinAggregateOutputType | null
    _max: StudentMajorMaxAggregateOutputType | null
  }

  export type StudentMajorAvgAggregateOutputType = {
    studentId: number | null
    majorId: number | null
  }

  export type StudentMajorSumAggregateOutputType = {
    studentId: number | null
    majorId: number | null
  }

  export type StudentMajorMinAggregateOutputType = {
    studentId: number | null
    majorId: number | null
  }

  export type StudentMajorMaxAggregateOutputType = {
    studentId: number | null
    majorId: number | null
  }

  export type StudentMajorCountAggregateOutputType = {
    studentId: number
    majorId: number
    _all: number
  }


  export type StudentMajorAvgAggregateInputType = {
    studentId?: true
    majorId?: true
  }

  export type StudentMajorSumAggregateInputType = {
    studentId?: true
    majorId?: true
  }

  export type StudentMajorMinAggregateInputType = {
    studentId?: true
    majorId?: true
  }

  export type StudentMajorMaxAggregateInputType = {
    studentId?: true
    majorId?: true
  }

  export type StudentMajorCountAggregateInputType = {
    studentId?: true
    majorId?: true
    _all?: true
  }

  export type StudentMajorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentMajor to aggregate.
     */
    where?: StudentMajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentMajors to fetch.
     */
    orderBy?: StudentMajorOrderByWithRelationInput | StudentMajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentMajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentMajors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentMajors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentMajors
    **/
    _count?: true | StudentMajorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentMajorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentMajorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMajorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMajorMaxAggregateInputType
  }

  export type GetStudentMajorAggregateType<T extends StudentMajorAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentMajor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentMajor[P]>
      : GetScalarType<T[P], AggregateStudentMajor[P]>
  }




  export type StudentMajorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentMajorWhereInput
    orderBy?: StudentMajorOrderByWithAggregationInput | StudentMajorOrderByWithAggregationInput[]
    by: StudentMajorScalarFieldEnum[] | StudentMajorScalarFieldEnum
    having?: StudentMajorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentMajorCountAggregateInputType | true
    _avg?: StudentMajorAvgAggregateInputType
    _sum?: StudentMajorSumAggregateInputType
    _min?: StudentMajorMinAggregateInputType
    _max?: StudentMajorMaxAggregateInputType
  }

  export type StudentMajorGroupByOutputType = {
    studentId: number
    majorId: number
    _count: StudentMajorCountAggregateOutputType | null
    _avg: StudentMajorAvgAggregateOutputType | null
    _sum: StudentMajorSumAggregateOutputType | null
    _min: StudentMajorMinAggregateOutputType | null
    _max: StudentMajorMaxAggregateOutputType | null
  }

  type GetStudentMajorGroupByPayload<T extends StudentMajorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentMajorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentMajorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentMajorGroupByOutputType[P]>
            : GetScalarType<T[P], StudentMajorGroupByOutputType[P]>
        }
      >
    >


  export type StudentMajorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentId?: boolean
    majorId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentMajor"]>

  export type StudentMajorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentId?: boolean
    majorId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentMajor"]>

  export type StudentMajorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentId?: boolean
    majorId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentMajor"]>

  export type StudentMajorSelectScalar = {
    studentId?: boolean
    majorId?: boolean
  }

  export type StudentMajorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"studentId" | "majorId", ExtArgs["result"]["studentMajor"]>
  export type StudentMajorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }
  export type StudentMajorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }
  export type StudentMajorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }

  export type $StudentMajorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentMajor"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      major: Prisma.$MajorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      studentId: number
      majorId: number
    }, ExtArgs["result"]["studentMajor"]>
    composites: {}
  }

  type StudentMajorGetPayload<S extends boolean | null | undefined | StudentMajorDefaultArgs> = $Result.GetResult<Prisma.$StudentMajorPayload, S>

  type StudentMajorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentMajorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentMajorCountAggregateInputType | true
    }

  export interface StudentMajorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentMajor'], meta: { name: 'StudentMajor' } }
    /**
     * Find zero or one StudentMajor that matches the filter.
     * @param {StudentMajorFindUniqueArgs} args - Arguments to find a StudentMajor
     * @example
     * // Get one StudentMajor
     * const studentMajor = await prisma.studentMajor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentMajorFindUniqueArgs>(args: SelectSubset<T, StudentMajorFindUniqueArgs<ExtArgs>>): Prisma__StudentMajorClient<$Result.GetResult<Prisma.$StudentMajorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentMajor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentMajorFindUniqueOrThrowArgs} args - Arguments to find a StudentMajor
     * @example
     * // Get one StudentMajor
     * const studentMajor = await prisma.studentMajor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentMajorFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentMajorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentMajorClient<$Result.GetResult<Prisma.$StudentMajorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentMajor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentMajorFindFirstArgs} args - Arguments to find a StudentMajor
     * @example
     * // Get one StudentMajor
     * const studentMajor = await prisma.studentMajor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentMajorFindFirstArgs>(args?: SelectSubset<T, StudentMajorFindFirstArgs<ExtArgs>>): Prisma__StudentMajorClient<$Result.GetResult<Prisma.$StudentMajorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentMajor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentMajorFindFirstOrThrowArgs} args - Arguments to find a StudentMajor
     * @example
     * // Get one StudentMajor
     * const studentMajor = await prisma.studentMajor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentMajorFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentMajorFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentMajorClient<$Result.GetResult<Prisma.$StudentMajorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentMajors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentMajorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentMajors
     * const studentMajors = await prisma.studentMajor.findMany()
     * 
     * // Get first 10 StudentMajors
     * const studentMajors = await prisma.studentMajor.findMany({ take: 10 })
     * 
     * // Only select the `studentId`
     * const studentMajorWithStudentIdOnly = await prisma.studentMajor.findMany({ select: { studentId: true } })
     * 
     */
    findMany<T extends StudentMajorFindManyArgs>(args?: SelectSubset<T, StudentMajorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentMajorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentMajor.
     * @param {StudentMajorCreateArgs} args - Arguments to create a StudentMajor.
     * @example
     * // Create one StudentMajor
     * const StudentMajor = await prisma.studentMajor.create({
     *   data: {
     *     // ... data to create a StudentMajor
     *   }
     * })
     * 
     */
    create<T extends StudentMajorCreateArgs>(args: SelectSubset<T, StudentMajorCreateArgs<ExtArgs>>): Prisma__StudentMajorClient<$Result.GetResult<Prisma.$StudentMajorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentMajors.
     * @param {StudentMajorCreateManyArgs} args - Arguments to create many StudentMajors.
     * @example
     * // Create many StudentMajors
     * const studentMajor = await prisma.studentMajor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentMajorCreateManyArgs>(args?: SelectSubset<T, StudentMajorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentMajors and returns the data saved in the database.
     * @param {StudentMajorCreateManyAndReturnArgs} args - Arguments to create many StudentMajors.
     * @example
     * // Create many StudentMajors
     * const studentMajor = await prisma.studentMajor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentMajors and only return the `studentId`
     * const studentMajorWithStudentIdOnly = await prisma.studentMajor.createManyAndReturn({
     *   select: { studentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentMajorCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentMajorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentMajorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentMajor.
     * @param {StudentMajorDeleteArgs} args - Arguments to delete one StudentMajor.
     * @example
     * // Delete one StudentMajor
     * const StudentMajor = await prisma.studentMajor.delete({
     *   where: {
     *     // ... filter to delete one StudentMajor
     *   }
     * })
     * 
     */
    delete<T extends StudentMajorDeleteArgs>(args: SelectSubset<T, StudentMajorDeleteArgs<ExtArgs>>): Prisma__StudentMajorClient<$Result.GetResult<Prisma.$StudentMajorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentMajor.
     * @param {StudentMajorUpdateArgs} args - Arguments to update one StudentMajor.
     * @example
     * // Update one StudentMajor
     * const studentMajor = await prisma.studentMajor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentMajorUpdateArgs>(args: SelectSubset<T, StudentMajorUpdateArgs<ExtArgs>>): Prisma__StudentMajorClient<$Result.GetResult<Prisma.$StudentMajorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentMajors.
     * @param {StudentMajorDeleteManyArgs} args - Arguments to filter StudentMajors to delete.
     * @example
     * // Delete a few StudentMajors
     * const { count } = await prisma.studentMajor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentMajorDeleteManyArgs>(args?: SelectSubset<T, StudentMajorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentMajors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentMajorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentMajors
     * const studentMajor = await prisma.studentMajor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentMajorUpdateManyArgs>(args: SelectSubset<T, StudentMajorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentMajors and returns the data updated in the database.
     * @param {StudentMajorUpdateManyAndReturnArgs} args - Arguments to update many StudentMajors.
     * @example
     * // Update many StudentMajors
     * const studentMajor = await prisma.studentMajor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentMajors and only return the `studentId`
     * const studentMajorWithStudentIdOnly = await prisma.studentMajor.updateManyAndReturn({
     *   select: { studentId: true },
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
    updateManyAndReturn<T extends StudentMajorUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentMajorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentMajorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentMajor.
     * @param {StudentMajorUpsertArgs} args - Arguments to update or create a StudentMajor.
     * @example
     * // Update or create a StudentMajor
     * const studentMajor = await prisma.studentMajor.upsert({
     *   create: {
     *     // ... data to create a StudentMajor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentMajor we want to update
     *   }
     * })
     */
    upsert<T extends StudentMajorUpsertArgs>(args: SelectSubset<T, StudentMajorUpsertArgs<ExtArgs>>): Prisma__StudentMajorClient<$Result.GetResult<Prisma.$StudentMajorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentMajors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentMajorCountArgs} args - Arguments to filter StudentMajors to count.
     * @example
     * // Count the number of StudentMajors
     * const count = await prisma.studentMajor.count({
     *   where: {
     *     // ... the filter for the StudentMajors we want to count
     *   }
     * })
    **/
    count<T extends StudentMajorCountArgs>(
      args?: Subset<T, StudentMajorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentMajorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentMajor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentMajorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentMajorAggregateArgs>(args: Subset<T, StudentMajorAggregateArgs>): Prisma.PrismaPromise<GetStudentMajorAggregateType<T>>

    /**
     * Group by StudentMajor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentMajorGroupByArgs} args - Group by arguments.
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
      T extends StudentMajorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentMajorGroupByArgs['orderBy'] }
        : { orderBy?: StudentMajorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentMajorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentMajorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentMajor model
   */
  readonly fields: StudentMajorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentMajor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentMajorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    major<T extends MajorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MajorDefaultArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudentMajor model
   */
  interface StudentMajorFieldRefs {
    readonly studentId: FieldRef<"StudentMajor", 'Int'>
    readonly majorId: FieldRef<"StudentMajor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StudentMajor findUnique
   */
  export type StudentMajorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentMajor
     */
    select?: StudentMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentMajor
     */
    omit?: StudentMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentMajorInclude<ExtArgs> | null
    /**
     * Filter, which StudentMajor to fetch.
     */
    where: StudentMajorWhereUniqueInput
  }

  /**
   * StudentMajor findUniqueOrThrow
   */
  export type StudentMajorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentMajor
     */
    select?: StudentMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentMajor
     */
    omit?: StudentMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentMajorInclude<ExtArgs> | null
    /**
     * Filter, which StudentMajor to fetch.
     */
    where: StudentMajorWhereUniqueInput
  }

  /**
   * StudentMajor findFirst
   */
  export type StudentMajorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentMajor
     */
    select?: StudentMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentMajor
     */
    omit?: StudentMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentMajorInclude<ExtArgs> | null
    /**
     * Filter, which StudentMajor to fetch.
     */
    where?: StudentMajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentMajors to fetch.
     */
    orderBy?: StudentMajorOrderByWithRelationInput | StudentMajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentMajors.
     */
    cursor?: StudentMajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentMajors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentMajors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentMajors.
     */
    distinct?: StudentMajorScalarFieldEnum | StudentMajorScalarFieldEnum[]
  }

  /**
   * StudentMajor findFirstOrThrow
   */
  export type StudentMajorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentMajor
     */
    select?: StudentMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentMajor
     */
    omit?: StudentMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentMajorInclude<ExtArgs> | null
    /**
     * Filter, which StudentMajor to fetch.
     */
    where?: StudentMajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentMajors to fetch.
     */
    orderBy?: StudentMajorOrderByWithRelationInput | StudentMajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentMajors.
     */
    cursor?: StudentMajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentMajors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentMajors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentMajors.
     */
    distinct?: StudentMajorScalarFieldEnum | StudentMajorScalarFieldEnum[]
  }

  /**
   * StudentMajor findMany
   */
  export type StudentMajorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentMajor
     */
    select?: StudentMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentMajor
     */
    omit?: StudentMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentMajorInclude<ExtArgs> | null
    /**
     * Filter, which StudentMajors to fetch.
     */
    where?: StudentMajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentMajors to fetch.
     */
    orderBy?: StudentMajorOrderByWithRelationInput | StudentMajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentMajors.
     */
    cursor?: StudentMajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentMajors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentMajors.
     */
    skip?: number
    distinct?: StudentMajorScalarFieldEnum | StudentMajorScalarFieldEnum[]
  }

  /**
   * StudentMajor create
   */
  export type StudentMajorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentMajor
     */
    select?: StudentMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentMajor
     */
    omit?: StudentMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentMajorInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentMajor.
     */
    data: XOR<StudentMajorCreateInput, StudentMajorUncheckedCreateInput>
  }

  /**
   * StudentMajor createMany
   */
  export type StudentMajorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentMajors.
     */
    data: StudentMajorCreateManyInput | StudentMajorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentMajor createManyAndReturn
   */
  export type StudentMajorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentMajor
     */
    select?: StudentMajorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentMajor
     */
    omit?: StudentMajorOmit<ExtArgs> | null
    /**
     * The data used to create many StudentMajors.
     */
    data: StudentMajorCreateManyInput | StudentMajorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentMajorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentMajor update
   */
  export type StudentMajorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentMajor
     */
    select?: StudentMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentMajor
     */
    omit?: StudentMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentMajorInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentMajor.
     */
    data: XOR<StudentMajorUpdateInput, StudentMajorUncheckedUpdateInput>
    /**
     * Choose, which StudentMajor to update.
     */
    where: StudentMajorWhereUniqueInput
  }

  /**
   * StudentMajor updateMany
   */
  export type StudentMajorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentMajors.
     */
    data: XOR<StudentMajorUpdateManyMutationInput, StudentMajorUncheckedUpdateManyInput>
    /**
     * Filter which StudentMajors to update
     */
    where?: StudentMajorWhereInput
    /**
     * Limit how many StudentMajors to update.
     */
    limit?: number
  }

  /**
   * StudentMajor updateManyAndReturn
   */
  export type StudentMajorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentMajor
     */
    select?: StudentMajorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentMajor
     */
    omit?: StudentMajorOmit<ExtArgs> | null
    /**
     * The data used to update StudentMajors.
     */
    data: XOR<StudentMajorUpdateManyMutationInput, StudentMajorUncheckedUpdateManyInput>
    /**
     * Filter which StudentMajors to update
     */
    where?: StudentMajorWhereInput
    /**
     * Limit how many StudentMajors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentMajorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentMajor upsert
   */
  export type StudentMajorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentMajor
     */
    select?: StudentMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentMajor
     */
    omit?: StudentMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentMajorInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentMajor to update in case it exists.
     */
    where: StudentMajorWhereUniqueInput
    /**
     * In case the StudentMajor found by the `where` argument doesn't exist, create a new StudentMajor with this data.
     */
    create: XOR<StudentMajorCreateInput, StudentMajorUncheckedCreateInput>
    /**
     * In case the StudentMajor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentMajorUpdateInput, StudentMajorUncheckedUpdateInput>
  }

  /**
   * StudentMajor delete
   */
  export type StudentMajorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentMajor
     */
    select?: StudentMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentMajor
     */
    omit?: StudentMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentMajorInclude<ExtArgs> | null
    /**
     * Filter which StudentMajor to delete.
     */
    where: StudentMajorWhereUniqueInput
  }

  /**
   * StudentMajor deleteMany
   */
  export type StudentMajorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentMajors to delete
     */
    where?: StudentMajorWhereInput
    /**
     * Limit how many StudentMajors to delete.
     */
    limit?: number
  }

  /**
   * StudentMajor without action
   */
  export type StudentMajorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentMajor
     */
    select?: StudentMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentMajor
     */
    omit?: StudentMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentMajorInclude<ExtArgs> | null
  }


  /**
   * Model StudentSubject
   */

  export type AggregateStudentSubject = {
    _count: StudentSubjectCountAggregateOutputType | null
    _avg: StudentSubjectAvgAggregateOutputType | null
    _sum: StudentSubjectSumAggregateOutputType | null
    _min: StudentSubjectMinAggregateOutputType | null
    _max: StudentSubjectMaxAggregateOutputType | null
  }

  export type StudentSubjectAvgAggregateOutputType = {
    studentId: number | null
    subjectId: number | null
  }

  export type StudentSubjectSumAggregateOutputType = {
    studentId: number | null
    subjectId: number | null
  }

  export type StudentSubjectMinAggregateOutputType = {
    studentId: number | null
    subjectId: number | null
  }

  export type StudentSubjectMaxAggregateOutputType = {
    studentId: number | null
    subjectId: number | null
  }

  export type StudentSubjectCountAggregateOutputType = {
    studentId: number
    subjectId: number
    _all: number
  }


  export type StudentSubjectAvgAggregateInputType = {
    studentId?: true
    subjectId?: true
  }

  export type StudentSubjectSumAggregateInputType = {
    studentId?: true
    subjectId?: true
  }

  export type StudentSubjectMinAggregateInputType = {
    studentId?: true
    subjectId?: true
  }

  export type StudentSubjectMaxAggregateInputType = {
    studentId?: true
    subjectId?: true
  }

  export type StudentSubjectCountAggregateInputType = {
    studentId?: true
    subjectId?: true
    _all?: true
  }

  export type StudentSubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentSubject to aggregate.
     */
    where?: StudentSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubjects to fetch.
     */
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentSubjects
    **/
    _count?: true | StudentSubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentSubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentSubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentSubjectMaxAggregateInputType
  }

  export type GetStudentSubjectAggregateType<T extends StudentSubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentSubject[P]>
      : GetScalarType<T[P], AggregateStudentSubject[P]>
  }




  export type StudentSubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentSubjectWhereInput
    orderBy?: StudentSubjectOrderByWithAggregationInput | StudentSubjectOrderByWithAggregationInput[]
    by: StudentSubjectScalarFieldEnum[] | StudentSubjectScalarFieldEnum
    having?: StudentSubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentSubjectCountAggregateInputType | true
    _avg?: StudentSubjectAvgAggregateInputType
    _sum?: StudentSubjectSumAggregateInputType
    _min?: StudentSubjectMinAggregateInputType
    _max?: StudentSubjectMaxAggregateInputType
  }

  export type StudentSubjectGroupByOutputType = {
    studentId: number
    subjectId: number
    _count: StudentSubjectCountAggregateOutputType | null
    _avg: StudentSubjectAvgAggregateOutputType | null
    _sum: StudentSubjectSumAggregateOutputType | null
    _min: StudentSubjectMinAggregateOutputType | null
    _max: StudentSubjectMaxAggregateOutputType | null
  }

  type GetStudentSubjectGroupByPayload<T extends StudentSubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentSubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentSubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentSubjectGroupByOutputType[P]>
            : GetScalarType<T[P], StudentSubjectGroupByOutputType[P]>
        }
      >
    >


  export type StudentSubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentId?: boolean
    subjectId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSubject"]>

  export type StudentSubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentId?: boolean
    subjectId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSubject"]>

  export type StudentSubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    studentId?: boolean
    subjectId?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentSubject"]>

  export type StudentSubjectSelectScalar = {
    studentId?: boolean
    subjectId?: boolean
  }

  export type StudentSubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"studentId" | "subjectId", ExtArgs["result"]["studentSubject"]>
  export type StudentSubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type StudentSubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type StudentSubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $StudentSubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentSubject"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      studentId: number
      subjectId: number
    }, ExtArgs["result"]["studentSubject"]>
    composites: {}
  }

  type StudentSubjectGetPayload<S extends boolean | null | undefined | StudentSubjectDefaultArgs> = $Result.GetResult<Prisma.$StudentSubjectPayload, S>

  type StudentSubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentSubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentSubjectCountAggregateInputType | true
    }

  export interface StudentSubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentSubject'], meta: { name: 'StudentSubject' } }
    /**
     * Find zero or one StudentSubject that matches the filter.
     * @param {StudentSubjectFindUniqueArgs} args - Arguments to find a StudentSubject
     * @example
     * // Get one StudentSubject
     * const studentSubject = await prisma.studentSubject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentSubjectFindUniqueArgs>(args: SelectSubset<T, StudentSubjectFindUniqueArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentSubject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentSubjectFindUniqueOrThrowArgs} args - Arguments to find a StudentSubject
     * @example
     * // Get one StudentSubject
     * const studentSubject = await prisma.studentSubject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentSubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentSubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentSubject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectFindFirstArgs} args - Arguments to find a StudentSubject
     * @example
     * // Get one StudentSubject
     * const studentSubject = await prisma.studentSubject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentSubjectFindFirstArgs>(args?: SelectSubset<T, StudentSubjectFindFirstArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentSubject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectFindFirstOrThrowArgs} args - Arguments to find a StudentSubject
     * @example
     * // Get one StudentSubject
     * const studentSubject = await prisma.studentSubject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentSubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentSubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentSubjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentSubjects
     * const studentSubjects = await prisma.studentSubject.findMany()
     * 
     * // Get first 10 StudentSubjects
     * const studentSubjects = await prisma.studentSubject.findMany({ take: 10 })
     * 
     * // Only select the `studentId`
     * const studentSubjectWithStudentIdOnly = await prisma.studentSubject.findMany({ select: { studentId: true } })
     * 
     */
    findMany<T extends StudentSubjectFindManyArgs>(args?: SelectSubset<T, StudentSubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentSubject.
     * @param {StudentSubjectCreateArgs} args - Arguments to create a StudentSubject.
     * @example
     * // Create one StudentSubject
     * const StudentSubject = await prisma.studentSubject.create({
     *   data: {
     *     // ... data to create a StudentSubject
     *   }
     * })
     * 
     */
    create<T extends StudentSubjectCreateArgs>(args: SelectSubset<T, StudentSubjectCreateArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentSubjects.
     * @param {StudentSubjectCreateManyArgs} args - Arguments to create many StudentSubjects.
     * @example
     * // Create many StudentSubjects
     * const studentSubject = await prisma.studentSubject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentSubjectCreateManyArgs>(args?: SelectSubset<T, StudentSubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentSubjects and returns the data saved in the database.
     * @param {StudentSubjectCreateManyAndReturnArgs} args - Arguments to create many StudentSubjects.
     * @example
     * // Create many StudentSubjects
     * const studentSubject = await prisma.studentSubject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentSubjects and only return the `studentId`
     * const studentSubjectWithStudentIdOnly = await prisma.studentSubject.createManyAndReturn({
     *   select: { studentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentSubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentSubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentSubject.
     * @param {StudentSubjectDeleteArgs} args - Arguments to delete one StudentSubject.
     * @example
     * // Delete one StudentSubject
     * const StudentSubject = await prisma.studentSubject.delete({
     *   where: {
     *     // ... filter to delete one StudentSubject
     *   }
     * })
     * 
     */
    delete<T extends StudentSubjectDeleteArgs>(args: SelectSubset<T, StudentSubjectDeleteArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentSubject.
     * @param {StudentSubjectUpdateArgs} args - Arguments to update one StudentSubject.
     * @example
     * // Update one StudentSubject
     * const studentSubject = await prisma.studentSubject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentSubjectUpdateArgs>(args: SelectSubset<T, StudentSubjectUpdateArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentSubjects.
     * @param {StudentSubjectDeleteManyArgs} args - Arguments to filter StudentSubjects to delete.
     * @example
     * // Delete a few StudentSubjects
     * const { count } = await prisma.studentSubject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentSubjectDeleteManyArgs>(args?: SelectSubset<T, StudentSubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentSubjects
     * const studentSubject = await prisma.studentSubject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentSubjectUpdateManyArgs>(args: SelectSubset<T, StudentSubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentSubjects and returns the data updated in the database.
     * @param {StudentSubjectUpdateManyAndReturnArgs} args - Arguments to update many StudentSubjects.
     * @example
     * // Update many StudentSubjects
     * const studentSubject = await prisma.studentSubject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentSubjects and only return the `studentId`
     * const studentSubjectWithStudentIdOnly = await prisma.studentSubject.updateManyAndReturn({
     *   select: { studentId: true },
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
    updateManyAndReturn<T extends StudentSubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentSubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentSubject.
     * @param {StudentSubjectUpsertArgs} args - Arguments to update or create a StudentSubject.
     * @example
     * // Update or create a StudentSubject
     * const studentSubject = await prisma.studentSubject.upsert({
     *   create: {
     *     // ... data to create a StudentSubject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentSubject we want to update
     *   }
     * })
     */
    upsert<T extends StudentSubjectUpsertArgs>(args: SelectSubset<T, StudentSubjectUpsertArgs<ExtArgs>>): Prisma__StudentSubjectClient<$Result.GetResult<Prisma.$StudentSubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectCountArgs} args - Arguments to filter StudentSubjects to count.
     * @example
     * // Count the number of StudentSubjects
     * const count = await prisma.studentSubject.count({
     *   where: {
     *     // ... the filter for the StudentSubjects we want to count
     *   }
     * })
    **/
    count<T extends StudentSubjectCountArgs>(
      args?: Subset<T, StudentSubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentSubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentSubjectAggregateArgs>(args: Subset<T, StudentSubjectAggregateArgs>): Prisma.PrismaPromise<GetStudentSubjectAggregateType<T>>

    /**
     * Group by StudentSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentSubjectGroupByArgs} args - Group by arguments.
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
      T extends StudentSubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentSubjectGroupByArgs['orderBy'] }
        : { orderBy?: StudentSubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentSubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentSubject model
   */
  readonly fields: StudentSubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentSubject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentSubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the StudentSubject model
   */
  interface StudentSubjectFieldRefs {
    readonly studentId: FieldRef<"StudentSubject", 'Int'>
    readonly subjectId: FieldRef<"StudentSubject", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StudentSubject findUnique
   */
  export type StudentSubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubject to fetch.
     */
    where: StudentSubjectWhereUniqueInput
  }

  /**
   * StudentSubject findUniqueOrThrow
   */
  export type StudentSubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubject to fetch.
     */
    where: StudentSubjectWhereUniqueInput
  }

  /**
   * StudentSubject findFirst
   */
  export type StudentSubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubject to fetch.
     */
    where?: StudentSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubjects to fetch.
     */
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentSubjects.
     */
    cursor?: StudentSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentSubjects.
     */
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * StudentSubject findFirstOrThrow
   */
  export type StudentSubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubject to fetch.
     */
    where?: StudentSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubjects to fetch.
     */
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentSubjects.
     */
    cursor?: StudentSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentSubjects.
     */
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * StudentSubject findMany
   */
  export type StudentSubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter, which StudentSubjects to fetch.
     */
    where?: StudentSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentSubjects to fetch.
     */
    orderBy?: StudentSubjectOrderByWithRelationInput | StudentSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentSubjects.
     */
    cursor?: StudentSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentSubjects.
     */
    skip?: number
    distinct?: StudentSubjectScalarFieldEnum | StudentSubjectScalarFieldEnum[]
  }

  /**
   * StudentSubject create
   */
  export type StudentSubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentSubject.
     */
    data: XOR<StudentSubjectCreateInput, StudentSubjectUncheckedCreateInput>
  }

  /**
   * StudentSubject createMany
   */
  export type StudentSubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentSubjects.
     */
    data: StudentSubjectCreateManyInput | StudentSubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentSubject createManyAndReturn
   */
  export type StudentSubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * The data used to create many StudentSubjects.
     */
    data: StudentSubjectCreateManyInput | StudentSubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentSubject update
   */
  export type StudentSubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentSubject.
     */
    data: XOR<StudentSubjectUpdateInput, StudentSubjectUncheckedUpdateInput>
    /**
     * Choose, which StudentSubject to update.
     */
    where: StudentSubjectWhereUniqueInput
  }

  /**
   * StudentSubject updateMany
   */
  export type StudentSubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentSubjects.
     */
    data: XOR<StudentSubjectUpdateManyMutationInput, StudentSubjectUncheckedUpdateManyInput>
    /**
     * Filter which StudentSubjects to update
     */
    where?: StudentSubjectWhereInput
    /**
     * Limit how many StudentSubjects to update.
     */
    limit?: number
  }

  /**
   * StudentSubject updateManyAndReturn
   */
  export type StudentSubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * The data used to update StudentSubjects.
     */
    data: XOR<StudentSubjectUpdateManyMutationInput, StudentSubjectUncheckedUpdateManyInput>
    /**
     * Filter which StudentSubjects to update
     */
    where?: StudentSubjectWhereInput
    /**
     * Limit how many StudentSubjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentSubject upsert
   */
  export type StudentSubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentSubject to update in case it exists.
     */
    where: StudentSubjectWhereUniqueInput
    /**
     * In case the StudentSubject found by the `where` argument doesn't exist, create a new StudentSubject with this data.
     */
    create: XOR<StudentSubjectCreateInput, StudentSubjectUncheckedCreateInput>
    /**
     * In case the StudentSubject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentSubjectUpdateInput, StudentSubjectUncheckedUpdateInput>
  }

  /**
   * StudentSubject delete
   */
  export type StudentSubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
    /**
     * Filter which StudentSubject to delete.
     */
    where: StudentSubjectWhereUniqueInput
  }

  /**
   * StudentSubject deleteMany
   */
  export type StudentSubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentSubjects to delete
     */
    where?: StudentSubjectWhereInput
    /**
     * Limit how many StudentSubjects to delete.
     */
    limit?: number
  }

  /**
   * StudentSubject without action
   */
  export type StudentSubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentSubject
     */
    select?: StudentSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentSubject
     */
    omit?: StudentSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentSubjectInclude<ExtArgs> | null
  }


  /**
   * Model MajorSubject
   */

  export type AggregateMajorSubject = {
    _count: MajorSubjectCountAggregateOutputType | null
    _avg: MajorSubjectAvgAggregateOutputType | null
    _sum: MajorSubjectSumAggregateOutputType | null
    _min: MajorSubjectMinAggregateOutputType | null
    _max: MajorSubjectMaxAggregateOutputType | null
  }

  export type MajorSubjectAvgAggregateOutputType = {
    majorId: number | null
    subjectId: number | null
  }

  export type MajorSubjectSumAggregateOutputType = {
    majorId: number | null
    subjectId: number | null
  }

  export type MajorSubjectMinAggregateOutputType = {
    majorId: number | null
    subjectId: number | null
  }

  export type MajorSubjectMaxAggregateOutputType = {
    majorId: number | null
    subjectId: number | null
  }

  export type MajorSubjectCountAggregateOutputType = {
    majorId: number
    subjectId: number
    _all: number
  }


  export type MajorSubjectAvgAggregateInputType = {
    majorId?: true
    subjectId?: true
  }

  export type MajorSubjectSumAggregateInputType = {
    majorId?: true
    subjectId?: true
  }

  export type MajorSubjectMinAggregateInputType = {
    majorId?: true
    subjectId?: true
  }

  export type MajorSubjectMaxAggregateInputType = {
    majorId?: true
    subjectId?: true
  }

  export type MajorSubjectCountAggregateInputType = {
    majorId?: true
    subjectId?: true
    _all?: true
  }

  export type MajorSubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MajorSubject to aggregate.
     */
    where?: MajorSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MajorSubjects to fetch.
     */
    orderBy?: MajorSubjectOrderByWithRelationInput | MajorSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MajorSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MajorSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MajorSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MajorSubjects
    **/
    _count?: true | MajorSubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MajorSubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MajorSubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MajorSubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MajorSubjectMaxAggregateInputType
  }

  export type GetMajorSubjectAggregateType<T extends MajorSubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateMajorSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMajorSubject[P]>
      : GetScalarType<T[P], AggregateMajorSubject[P]>
  }




  export type MajorSubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MajorSubjectWhereInput
    orderBy?: MajorSubjectOrderByWithAggregationInput | MajorSubjectOrderByWithAggregationInput[]
    by: MajorSubjectScalarFieldEnum[] | MajorSubjectScalarFieldEnum
    having?: MajorSubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MajorSubjectCountAggregateInputType | true
    _avg?: MajorSubjectAvgAggregateInputType
    _sum?: MajorSubjectSumAggregateInputType
    _min?: MajorSubjectMinAggregateInputType
    _max?: MajorSubjectMaxAggregateInputType
  }

  export type MajorSubjectGroupByOutputType = {
    majorId: number
    subjectId: number
    _count: MajorSubjectCountAggregateOutputType | null
    _avg: MajorSubjectAvgAggregateOutputType | null
    _sum: MajorSubjectSumAggregateOutputType | null
    _min: MajorSubjectMinAggregateOutputType | null
    _max: MajorSubjectMaxAggregateOutputType | null
  }

  type GetMajorSubjectGroupByPayload<T extends MajorSubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MajorSubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MajorSubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MajorSubjectGroupByOutputType[P]>
            : GetScalarType<T[P], MajorSubjectGroupByOutputType[P]>
        }
      >
    >


  export type MajorSubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    majorId?: boolean
    subjectId?: boolean
    major?: boolean | MajorDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["majorSubject"]>

  export type MajorSubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    majorId?: boolean
    subjectId?: boolean
    major?: boolean | MajorDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["majorSubject"]>

  export type MajorSubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    majorId?: boolean
    subjectId?: boolean
    major?: boolean | MajorDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["majorSubject"]>

  export type MajorSubjectSelectScalar = {
    majorId?: boolean
    subjectId?: boolean
  }

  export type MajorSubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"majorId" | "subjectId", ExtArgs["result"]["majorSubject"]>
  export type MajorSubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    major?: boolean | MajorDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type MajorSubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    major?: boolean | MajorDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type MajorSubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    major?: boolean | MajorDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $MajorSubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MajorSubject"
    objects: {
      major: Prisma.$MajorPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      majorId: number
      subjectId: number
    }, ExtArgs["result"]["majorSubject"]>
    composites: {}
  }

  type MajorSubjectGetPayload<S extends boolean | null | undefined | MajorSubjectDefaultArgs> = $Result.GetResult<Prisma.$MajorSubjectPayload, S>

  type MajorSubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MajorSubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MajorSubjectCountAggregateInputType | true
    }

  export interface MajorSubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MajorSubject'], meta: { name: 'MajorSubject' } }
    /**
     * Find zero or one MajorSubject that matches the filter.
     * @param {MajorSubjectFindUniqueArgs} args - Arguments to find a MajorSubject
     * @example
     * // Get one MajorSubject
     * const majorSubject = await prisma.majorSubject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MajorSubjectFindUniqueArgs>(args: SelectSubset<T, MajorSubjectFindUniqueArgs<ExtArgs>>): Prisma__MajorSubjectClient<$Result.GetResult<Prisma.$MajorSubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MajorSubject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MajorSubjectFindUniqueOrThrowArgs} args - Arguments to find a MajorSubject
     * @example
     * // Get one MajorSubject
     * const majorSubject = await prisma.majorSubject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MajorSubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, MajorSubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MajorSubjectClient<$Result.GetResult<Prisma.$MajorSubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MajorSubject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorSubjectFindFirstArgs} args - Arguments to find a MajorSubject
     * @example
     * // Get one MajorSubject
     * const majorSubject = await prisma.majorSubject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MajorSubjectFindFirstArgs>(args?: SelectSubset<T, MajorSubjectFindFirstArgs<ExtArgs>>): Prisma__MajorSubjectClient<$Result.GetResult<Prisma.$MajorSubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MajorSubject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorSubjectFindFirstOrThrowArgs} args - Arguments to find a MajorSubject
     * @example
     * // Get one MajorSubject
     * const majorSubject = await prisma.majorSubject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MajorSubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, MajorSubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__MajorSubjectClient<$Result.GetResult<Prisma.$MajorSubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MajorSubjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorSubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MajorSubjects
     * const majorSubjects = await prisma.majorSubject.findMany()
     * 
     * // Get first 10 MajorSubjects
     * const majorSubjects = await prisma.majorSubject.findMany({ take: 10 })
     * 
     * // Only select the `majorId`
     * const majorSubjectWithMajorIdOnly = await prisma.majorSubject.findMany({ select: { majorId: true } })
     * 
     */
    findMany<T extends MajorSubjectFindManyArgs>(args?: SelectSubset<T, MajorSubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MajorSubject.
     * @param {MajorSubjectCreateArgs} args - Arguments to create a MajorSubject.
     * @example
     * // Create one MajorSubject
     * const MajorSubject = await prisma.majorSubject.create({
     *   data: {
     *     // ... data to create a MajorSubject
     *   }
     * })
     * 
     */
    create<T extends MajorSubjectCreateArgs>(args: SelectSubset<T, MajorSubjectCreateArgs<ExtArgs>>): Prisma__MajorSubjectClient<$Result.GetResult<Prisma.$MajorSubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MajorSubjects.
     * @param {MajorSubjectCreateManyArgs} args - Arguments to create many MajorSubjects.
     * @example
     * // Create many MajorSubjects
     * const majorSubject = await prisma.majorSubject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MajorSubjectCreateManyArgs>(args?: SelectSubset<T, MajorSubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MajorSubjects and returns the data saved in the database.
     * @param {MajorSubjectCreateManyAndReturnArgs} args - Arguments to create many MajorSubjects.
     * @example
     * // Create many MajorSubjects
     * const majorSubject = await prisma.majorSubject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MajorSubjects and only return the `majorId`
     * const majorSubjectWithMajorIdOnly = await prisma.majorSubject.createManyAndReturn({
     *   select: { majorId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MajorSubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, MajorSubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorSubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MajorSubject.
     * @param {MajorSubjectDeleteArgs} args - Arguments to delete one MajorSubject.
     * @example
     * // Delete one MajorSubject
     * const MajorSubject = await prisma.majorSubject.delete({
     *   where: {
     *     // ... filter to delete one MajorSubject
     *   }
     * })
     * 
     */
    delete<T extends MajorSubjectDeleteArgs>(args: SelectSubset<T, MajorSubjectDeleteArgs<ExtArgs>>): Prisma__MajorSubjectClient<$Result.GetResult<Prisma.$MajorSubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MajorSubject.
     * @param {MajorSubjectUpdateArgs} args - Arguments to update one MajorSubject.
     * @example
     * // Update one MajorSubject
     * const majorSubject = await prisma.majorSubject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MajorSubjectUpdateArgs>(args: SelectSubset<T, MajorSubjectUpdateArgs<ExtArgs>>): Prisma__MajorSubjectClient<$Result.GetResult<Prisma.$MajorSubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MajorSubjects.
     * @param {MajorSubjectDeleteManyArgs} args - Arguments to filter MajorSubjects to delete.
     * @example
     * // Delete a few MajorSubjects
     * const { count } = await prisma.majorSubject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MajorSubjectDeleteManyArgs>(args?: SelectSubset<T, MajorSubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MajorSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorSubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MajorSubjects
     * const majorSubject = await prisma.majorSubject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MajorSubjectUpdateManyArgs>(args: SelectSubset<T, MajorSubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MajorSubjects and returns the data updated in the database.
     * @param {MajorSubjectUpdateManyAndReturnArgs} args - Arguments to update many MajorSubjects.
     * @example
     * // Update many MajorSubjects
     * const majorSubject = await prisma.majorSubject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MajorSubjects and only return the `majorId`
     * const majorSubjectWithMajorIdOnly = await prisma.majorSubject.updateManyAndReturn({
     *   select: { majorId: true },
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
    updateManyAndReturn<T extends MajorSubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, MajorSubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MajorSubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MajorSubject.
     * @param {MajorSubjectUpsertArgs} args - Arguments to update or create a MajorSubject.
     * @example
     * // Update or create a MajorSubject
     * const majorSubject = await prisma.majorSubject.upsert({
     *   create: {
     *     // ... data to create a MajorSubject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MajorSubject we want to update
     *   }
     * })
     */
    upsert<T extends MajorSubjectUpsertArgs>(args: SelectSubset<T, MajorSubjectUpsertArgs<ExtArgs>>): Prisma__MajorSubjectClient<$Result.GetResult<Prisma.$MajorSubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MajorSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorSubjectCountArgs} args - Arguments to filter MajorSubjects to count.
     * @example
     * // Count the number of MajorSubjects
     * const count = await prisma.majorSubject.count({
     *   where: {
     *     // ... the filter for the MajorSubjects we want to count
     *   }
     * })
    **/
    count<T extends MajorSubjectCountArgs>(
      args?: Subset<T, MajorSubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MajorSubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MajorSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorSubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MajorSubjectAggregateArgs>(args: Subset<T, MajorSubjectAggregateArgs>): Prisma.PrismaPromise<GetMajorSubjectAggregateType<T>>

    /**
     * Group by MajorSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MajorSubjectGroupByArgs} args - Group by arguments.
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
      T extends MajorSubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MajorSubjectGroupByArgs['orderBy'] }
        : { orderBy?: MajorSubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MajorSubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMajorSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MajorSubject model
   */
  readonly fields: MajorSubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MajorSubject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MajorSubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    major<T extends MajorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MajorDefaultArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MajorSubject model
   */
  interface MajorSubjectFieldRefs {
    readonly majorId: FieldRef<"MajorSubject", 'Int'>
    readonly subjectId: FieldRef<"MajorSubject", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MajorSubject findUnique
   */
  export type MajorSubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorSubject
     */
    select?: MajorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorSubject
     */
    omit?: MajorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorSubjectInclude<ExtArgs> | null
    /**
     * Filter, which MajorSubject to fetch.
     */
    where: MajorSubjectWhereUniqueInput
  }

  /**
   * MajorSubject findUniqueOrThrow
   */
  export type MajorSubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorSubject
     */
    select?: MajorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorSubject
     */
    omit?: MajorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorSubjectInclude<ExtArgs> | null
    /**
     * Filter, which MajorSubject to fetch.
     */
    where: MajorSubjectWhereUniqueInput
  }

  /**
   * MajorSubject findFirst
   */
  export type MajorSubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorSubject
     */
    select?: MajorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorSubject
     */
    omit?: MajorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorSubjectInclude<ExtArgs> | null
    /**
     * Filter, which MajorSubject to fetch.
     */
    where?: MajorSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MajorSubjects to fetch.
     */
    orderBy?: MajorSubjectOrderByWithRelationInput | MajorSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MajorSubjects.
     */
    cursor?: MajorSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MajorSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MajorSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MajorSubjects.
     */
    distinct?: MajorSubjectScalarFieldEnum | MajorSubjectScalarFieldEnum[]
  }

  /**
   * MajorSubject findFirstOrThrow
   */
  export type MajorSubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorSubject
     */
    select?: MajorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorSubject
     */
    omit?: MajorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorSubjectInclude<ExtArgs> | null
    /**
     * Filter, which MajorSubject to fetch.
     */
    where?: MajorSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MajorSubjects to fetch.
     */
    orderBy?: MajorSubjectOrderByWithRelationInput | MajorSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MajorSubjects.
     */
    cursor?: MajorSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MajorSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MajorSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MajorSubjects.
     */
    distinct?: MajorSubjectScalarFieldEnum | MajorSubjectScalarFieldEnum[]
  }

  /**
   * MajorSubject findMany
   */
  export type MajorSubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorSubject
     */
    select?: MajorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorSubject
     */
    omit?: MajorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorSubjectInclude<ExtArgs> | null
    /**
     * Filter, which MajorSubjects to fetch.
     */
    where?: MajorSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MajorSubjects to fetch.
     */
    orderBy?: MajorSubjectOrderByWithRelationInput | MajorSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MajorSubjects.
     */
    cursor?: MajorSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MajorSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MajorSubjects.
     */
    skip?: number
    distinct?: MajorSubjectScalarFieldEnum | MajorSubjectScalarFieldEnum[]
  }

  /**
   * MajorSubject create
   */
  export type MajorSubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorSubject
     */
    select?: MajorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorSubject
     */
    omit?: MajorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorSubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a MajorSubject.
     */
    data: XOR<MajorSubjectCreateInput, MajorSubjectUncheckedCreateInput>
  }

  /**
   * MajorSubject createMany
   */
  export type MajorSubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MajorSubjects.
     */
    data: MajorSubjectCreateManyInput | MajorSubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MajorSubject createManyAndReturn
   */
  export type MajorSubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorSubject
     */
    select?: MajorSubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MajorSubject
     */
    omit?: MajorSubjectOmit<ExtArgs> | null
    /**
     * The data used to create many MajorSubjects.
     */
    data: MajorSubjectCreateManyInput | MajorSubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorSubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MajorSubject update
   */
  export type MajorSubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorSubject
     */
    select?: MajorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorSubject
     */
    omit?: MajorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorSubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a MajorSubject.
     */
    data: XOR<MajorSubjectUpdateInput, MajorSubjectUncheckedUpdateInput>
    /**
     * Choose, which MajorSubject to update.
     */
    where: MajorSubjectWhereUniqueInput
  }

  /**
   * MajorSubject updateMany
   */
  export type MajorSubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MajorSubjects.
     */
    data: XOR<MajorSubjectUpdateManyMutationInput, MajorSubjectUncheckedUpdateManyInput>
    /**
     * Filter which MajorSubjects to update
     */
    where?: MajorSubjectWhereInput
    /**
     * Limit how many MajorSubjects to update.
     */
    limit?: number
  }

  /**
   * MajorSubject updateManyAndReturn
   */
  export type MajorSubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorSubject
     */
    select?: MajorSubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MajorSubject
     */
    omit?: MajorSubjectOmit<ExtArgs> | null
    /**
     * The data used to update MajorSubjects.
     */
    data: XOR<MajorSubjectUpdateManyMutationInput, MajorSubjectUncheckedUpdateManyInput>
    /**
     * Filter which MajorSubjects to update
     */
    where?: MajorSubjectWhereInput
    /**
     * Limit how many MajorSubjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorSubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MajorSubject upsert
   */
  export type MajorSubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorSubject
     */
    select?: MajorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorSubject
     */
    omit?: MajorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorSubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the MajorSubject to update in case it exists.
     */
    where: MajorSubjectWhereUniqueInput
    /**
     * In case the MajorSubject found by the `where` argument doesn't exist, create a new MajorSubject with this data.
     */
    create: XOR<MajorSubjectCreateInput, MajorSubjectUncheckedCreateInput>
    /**
     * In case the MajorSubject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MajorSubjectUpdateInput, MajorSubjectUncheckedUpdateInput>
  }

  /**
   * MajorSubject delete
   */
  export type MajorSubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorSubject
     */
    select?: MajorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorSubject
     */
    omit?: MajorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorSubjectInclude<ExtArgs> | null
    /**
     * Filter which MajorSubject to delete.
     */
    where: MajorSubjectWhereUniqueInput
  }

  /**
   * MajorSubject deleteMany
   */
  export type MajorSubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MajorSubjects to delete
     */
    where?: MajorSubjectWhereInput
    /**
     * Limit how many MajorSubjects to delete.
     */
    limit?: number
  }

  /**
   * MajorSubject without action
   */
  export type MajorSubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MajorSubject
     */
    select?: MajorSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MajorSubject
     */
    omit?: MajorSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MajorSubjectInclude<ExtArgs> | null
  }


  /**
   * Model TeacherMajor
   */

  export type AggregateTeacherMajor = {
    _count: TeacherMajorCountAggregateOutputType | null
    _avg: TeacherMajorAvgAggregateOutputType | null
    _sum: TeacherMajorSumAggregateOutputType | null
    _min: TeacherMajorMinAggregateOutputType | null
    _max: TeacherMajorMaxAggregateOutputType | null
  }

  export type TeacherMajorAvgAggregateOutputType = {
    teacherId: number | null
    majorId: number | null
  }

  export type TeacherMajorSumAggregateOutputType = {
    teacherId: number | null
    majorId: number | null
  }

  export type TeacherMajorMinAggregateOutputType = {
    teacherId: number | null
    majorId: number | null
  }

  export type TeacherMajorMaxAggregateOutputType = {
    teacherId: number | null
    majorId: number | null
  }

  export type TeacherMajorCountAggregateOutputType = {
    teacherId: number
    majorId: number
    _all: number
  }


  export type TeacherMajorAvgAggregateInputType = {
    teacherId?: true
    majorId?: true
  }

  export type TeacherMajorSumAggregateInputType = {
    teacherId?: true
    majorId?: true
  }

  export type TeacherMajorMinAggregateInputType = {
    teacherId?: true
    majorId?: true
  }

  export type TeacherMajorMaxAggregateInputType = {
    teacherId?: true
    majorId?: true
  }

  export type TeacherMajorCountAggregateInputType = {
    teacherId?: true
    majorId?: true
    _all?: true
  }

  export type TeacherMajorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherMajor to aggregate.
     */
    where?: TeacherMajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherMajors to fetch.
     */
    orderBy?: TeacherMajorOrderByWithRelationInput | TeacherMajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherMajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherMajors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherMajors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeacherMajors
    **/
    _count?: true | TeacherMajorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherMajorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherMajorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMajorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMajorMaxAggregateInputType
  }

  export type GetTeacherMajorAggregateType<T extends TeacherMajorAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacherMajor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacherMajor[P]>
      : GetScalarType<T[P], AggregateTeacherMajor[P]>
  }




  export type TeacherMajorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherMajorWhereInput
    orderBy?: TeacherMajorOrderByWithAggregationInput | TeacherMajorOrderByWithAggregationInput[]
    by: TeacherMajorScalarFieldEnum[] | TeacherMajorScalarFieldEnum
    having?: TeacherMajorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherMajorCountAggregateInputType | true
    _avg?: TeacherMajorAvgAggregateInputType
    _sum?: TeacherMajorSumAggregateInputType
    _min?: TeacherMajorMinAggregateInputType
    _max?: TeacherMajorMaxAggregateInputType
  }

  export type TeacherMajorGroupByOutputType = {
    teacherId: number
    majorId: number
    _count: TeacherMajorCountAggregateOutputType | null
    _avg: TeacherMajorAvgAggregateOutputType | null
    _sum: TeacherMajorSumAggregateOutputType | null
    _min: TeacherMajorMinAggregateOutputType | null
    _max: TeacherMajorMaxAggregateOutputType | null
  }

  type GetTeacherMajorGroupByPayload<T extends TeacherMajorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherMajorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherMajorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherMajorGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherMajorGroupByOutputType[P]>
        }
      >
    >


  export type TeacherMajorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    teacherId?: boolean
    majorId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherMajor"]>

  export type TeacherMajorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    teacherId?: boolean
    majorId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherMajor"]>

  export type TeacherMajorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    teacherId?: boolean
    majorId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherMajor"]>

  export type TeacherMajorSelectScalar = {
    teacherId?: boolean
    majorId?: boolean
  }

  export type TeacherMajorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"teacherId" | "majorId", ExtArgs["result"]["teacherMajor"]>
  export type TeacherMajorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }
  export type TeacherMajorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }
  export type TeacherMajorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    major?: boolean | MajorDefaultArgs<ExtArgs>
  }

  export type $TeacherMajorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeacherMajor"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs>
      major: Prisma.$MajorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      teacherId: number
      majorId: number
    }, ExtArgs["result"]["teacherMajor"]>
    composites: {}
  }

  type TeacherMajorGetPayload<S extends boolean | null | undefined | TeacherMajorDefaultArgs> = $Result.GetResult<Prisma.$TeacherMajorPayload, S>

  type TeacherMajorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherMajorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherMajorCountAggregateInputType | true
    }

  export interface TeacherMajorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeacherMajor'], meta: { name: 'TeacherMajor' } }
    /**
     * Find zero or one TeacherMajor that matches the filter.
     * @param {TeacherMajorFindUniqueArgs} args - Arguments to find a TeacherMajor
     * @example
     * // Get one TeacherMajor
     * const teacherMajor = await prisma.teacherMajor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherMajorFindUniqueArgs>(args: SelectSubset<T, TeacherMajorFindUniqueArgs<ExtArgs>>): Prisma__TeacherMajorClient<$Result.GetResult<Prisma.$TeacherMajorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeacherMajor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherMajorFindUniqueOrThrowArgs} args - Arguments to find a TeacherMajor
     * @example
     * // Get one TeacherMajor
     * const teacherMajor = await prisma.teacherMajor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherMajorFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherMajorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherMajorClient<$Result.GetResult<Prisma.$TeacherMajorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherMajor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherMajorFindFirstArgs} args - Arguments to find a TeacherMajor
     * @example
     * // Get one TeacherMajor
     * const teacherMajor = await prisma.teacherMajor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherMajorFindFirstArgs>(args?: SelectSubset<T, TeacherMajorFindFirstArgs<ExtArgs>>): Prisma__TeacherMajorClient<$Result.GetResult<Prisma.$TeacherMajorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherMajor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherMajorFindFirstOrThrowArgs} args - Arguments to find a TeacherMajor
     * @example
     * // Get one TeacherMajor
     * const teacherMajor = await prisma.teacherMajor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherMajorFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherMajorFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherMajorClient<$Result.GetResult<Prisma.$TeacherMajorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeacherMajors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherMajorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherMajors
     * const teacherMajors = await prisma.teacherMajor.findMany()
     * 
     * // Get first 10 TeacherMajors
     * const teacherMajors = await prisma.teacherMajor.findMany({ take: 10 })
     * 
     * // Only select the `teacherId`
     * const teacherMajorWithTeacherIdOnly = await prisma.teacherMajor.findMany({ select: { teacherId: true } })
     * 
     */
    findMany<T extends TeacherMajorFindManyArgs>(args?: SelectSubset<T, TeacherMajorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherMajorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeacherMajor.
     * @param {TeacherMajorCreateArgs} args - Arguments to create a TeacherMajor.
     * @example
     * // Create one TeacherMajor
     * const TeacherMajor = await prisma.teacherMajor.create({
     *   data: {
     *     // ... data to create a TeacherMajor
     *   }
     * })
     * 
     */
    create<T extends TeacherMajorCreateArgs>(args: SelectSubset<T, TeacherMajorCreateArgs<ExtArgs>>): Prisma__TeacherMajorClient<$Result.GetResult<Prisma.$TeacherMajorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeacherMajors.
     * @param {TeacherMajorCreateManyArgs} args - Arguments to create many TeacherMajors.
     * @example
     * // Create many TeacherMajors
     * const teacherMajor = await prisma.teacherMajor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherMajorCreateManyArgs>(args?: SelectSubset<T, TeacherMajorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeacherMajors and returns the data saved in the database.
     * @param {TeacherMajorCreateManyAndReturnArgs} args - Arguments to create many TeacherMajors.
     * @example
     * // Create many TeacherMajors
     * const teacherMajor = await prisma.teacherMajor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeacherMajors and only return the `teacherId`
     * const teacherMajorWithTeacherIdOnly = await prisma.teacherMajor.createManyAndReturn({
     *   select: { teacherId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherMajorCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherMajorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherMajorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeacherMajor.
     * @param {TeacherMajorDeleteArgs} args - Arguments to delete one TeacherMajor.
     * @example
     * // Delete one TeacherMajor
     * const TeacherMajor = await prisma.teacherMajor.delete({
     *   where: {
     *     // ... filter to delete one TeacherMajor
     *   }
     * })
     * 
     */
    delete<T extends TeacherMajorDeleteArgs>(args: SelectSubset<T, TeacherMajorDeleteArgs<ExtArgs>>): Prisma__TeacherMajorClient<$Result.GetResult<Prisma.$TeacherMajorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeacherMajor.
     * @param {TeacherMajorUpdateArgs} args - Arguments to update one TeacherMajor.
     * @example
     * // Update one TeacherMajor
     * const teacherMajor = await prisma.teacherMajor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherMajorUpdateArgs>(args: SelectSubset<T, TeacherMajorUpdateArgs<ExtArgs>>): Prisma__TeacherMajorClient<$Result.GetResult<Prisma.$TeacherMajorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeacherMajors.
     * @param {TeacherMajorDeleteManyArgs} args - Arguments to filter TeacherMajors to delete.
     * @example
     * // Delete a few TeacherMajors
     * const { count } = await prisma.teacherMajor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherMajorDeleteManyArgs>(args?: SelectSubset<T, TeacherMajorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherMajors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherMajorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherMajors
     * const teacherMajor = await prisma.teacherMajor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherMajorUpdateManyArgs>(args: SelectSubset<T, TeacherMajorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherMajors and returns the data updated in the database.
     * @param {TeacherMajorUpdateManyAndReturnArgs} args - Arguments to update many TeacherMajors.
     * @example
     * // Update many TeacherMajors
     * const teacherMajor = await prisma.teacherMajor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeacherMajors and only return the `teacherId`
     * const teacherMajorWithTeacherIdOnly = await prisma.teacherMajor.updateManyAndReturn({
     *   select: { teacherId: true },
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
    updateManyAndReturn<T extends TeacherMajorUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherMajorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherMajorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeacherMajor.
     * @param {TeacherMajorUpsertArgs} args - Arguments to update or create a TeacherMajor.
     * @example
     * // Update or create a TeacherMajor
     * const teacherMajor = await prisma.teacherMajor.upsert({
     *   create: {
     *     // ... data to create a TeacherMajor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherMajor we want to update
     *   }
     * })
     */
    upsert<T extends TeacherMajorUpsertArgs>(args: SelectSubset<T, TeacherMajorUpsertArgs<ExtArgs>>): Prisma__TeacherMajorClient<$Result.GetResult<Prisma.$TeacherMajorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeacherMajors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherMajorCountArgs} args - Arguments to filter TeacherMajors to count.
     * @example
     * // Count the number of TeacherMajors
     * const count = await prisma.teacherMajor.count({
     *   where: {
     *     // ... the filter for the TeacherMajors we want to count
     *   }
     * })
    **/
    count<T extends TeacherMajorCountArgs>(
      args?: Subset<T, TeacherMajorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherMajorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeacherMajor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherMajorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherMajorAggregateArgs>(args: Subset<T, TeacherMajorAggregateArgs>): Prisma.PrismaPromise<GetTeacherMajorAggregateType<T>>

    /**
     * Group by TeacherMajor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherMajorGroupByArgs} args - Group by arguments.
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
      T extends TeacherMajorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherMajorGroupByArgs['orderBy'] }
        : { orderBy?: TeacherMajorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherMajorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherMajorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeacherMajor model
   */
  readonly fields: TeacherMajorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeacherMajor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherMajorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    major<T extends MajorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MajorDefaultArgs<ExtArgs>>): Prisma__MajorClient<$Result.GetResult<Prisma.$MajorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeacherMajor model
   */
  interface TeacherMajorFieldRefs {
    readonly teacherId: FieldRef<"TeacherMajor", 'Int'>
    readonly majorId: FieldRef<"TeacherMajor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TeacherMajor findUnique
   */
  export type TeacherMajorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherMajor
     */
    select?: TeacherMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherMajor
     */
    omit?: TeacherMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherMajorInclude<ExtArgs> | null
    /**
     * Filter, which TeacherMajor to fetch.
     */
    where: TeacherMajorWhereUniqueInput
  }

  /**
   * TeacherMajor findUniqueOrThrow
   */
  export type TeacherMajorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherMajor
     */
    select?: TeacherMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherMajor
     */
    omit?: TeacherMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherMajorInclude<ExtArgs> | null
    /**
     * Filter, which TeacherMajor to fetch.
     */
    where: TeacherMajorWhereUniqueInput
  }

  /**
   * TeacherMajor findFirst
   */
  export type TeacherMajorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherMajor
     */
    select?: TeacherMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherMajor
     */
    omit?: TeacherMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherMajorInclude<ExtArgs> | null
    /**
     * Filter, which TeacherMajor to fetch.
     */
    where?: TeacherMajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherMajors to fetch.
     */
    orderBy?: TeacherMajorOrderByWithRelationInput | TeacherMajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherMajors.
     */
    cursor?: TeacherMajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherMajors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherMajors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherMajors.
     */
    distinct?: TeacherMajorScalarFieldEnum | TeacherMajorScalarFieldEnum[]
  }

  /**
   * TeacherMajor findFirstOrThrow
   */
  export type TeacherMajorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherMajor
     */
    select?: TeacherMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherMajor
     */
    omit?: TeacherMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherMajorInclude<ExtArgs> | null
    /**
     * Filter, which TeacherMajor to fetch.
     */
    where?: TeacherMajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherMajors to fetch.
     */
    orderBy?: TeacherMajorOrderByWithRelationInput | TeacherMajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherMajors.
     */
    cursor?: TeacherMajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherMajors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherMajors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherMajors.
     */
    distinct?: TeacherMajorScalarFieldEnum | TeacherMajorScalarFieldEnum[]
  }

  /**
   * TeacherMajor findMany
   */
  export type TeacherMajorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherMajor
     */
    select?: TeacherMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherMajor
     */
    omit?: TeacherMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherMajorInclude<ExtArgs> | null
    /**
     * Filter, which TeacherMajors to fetch.
     */
    where?: TeacherMajorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherMajors to fetch.
     */
    orderBy?: TeacherMajorOrderByWithRelationInput | TeacherMajorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeacherMajors.
     */
    cursor?: TeacherMajorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherMajors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherMajors.
     */
    skip?: number
    distinct?: TeacherMajorScalarFieldEnum | TeacherMajorScalarFieldEnum[]
  }

  /**
   * TeacherMajor create
   */
  export type TeacherMajorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherMajor
     */
    select?: TeacherMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherMajor
     */
    omit?: TeacherMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherMajorInclude<ExtArgs> | null
    /**
     * The data needed to create a TeacherMajor.
     */
    data: XOR<TeacherMajorCreateInput, TeacherMajorUncheckedCreateInput>
  }

  /**
   * TeacherMajor createMany
   */
  export type TeacherMajorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherMajors.
     */
    data: TeacherMajorCreateManyInput | TeacherMajorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeacherMajor createManyAndReturn
   */
  export type TeacherMajorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherMajor
     */
    select?: TeacherMajorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherMajor
     */
    omit?: TeacherMajorOmit<ExtArgs> | null
    /**
     * The data used to create many TeacherMajors.
     */
    data: TeacherMajorCreateManyInput | TeacherMajorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherMajorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherMajor update
   */
  export type TeacherMajorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherMajor
     */
    select?: TeacherMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherMajor
     */
    omit?: TeacherMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherMajorInclude<ExtArgs> | null
    /**
     * The data needed to update a TeacherMajor.
     */
    data: XOR<TeacherMajorUpdateInput, TeacherMajorUncheckedUpdateInput>
    /**
     * Choose, which TeacherMajor to update.
     */
    where: TeacherMajorWhereUniqueInput
  }

  /**
   * TeacherMajor updateMany
   */
  export type TeacherMajorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherMajors.
     */
    data: XOR<TeacherMajorUpdateManyMutationInput, TeacherMajorUncheckedUpdateManyInput>
    /**
     * Filter which TeacherMajors to update
     */
    where?: TeacherMajorWhereInput
    /**
     * Limit how many TeacherMajors to update.
     */
    limit?: number
  }

  /**
   * TeacherMajor updateManyAndReturn
   */
  export type TeacherMajorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherMajor
     */
    select?: TeacherMajorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherMajor
     */
    omit?: TeacherMajorOmit<ExtArgs> | null
    /**
     * The data used to update TeacherMajors.
     */
    data: XOR<TeacherMajorUpdateManyMutationInput, TeacherMajorUncheckedUpdateManyInput>
    /**
     * Filter which TeacherMajors to update
     */
    where?: TeacherMajorWhereInput
    /**
     * Limit how many TeacherMajors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherMajorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherMajor upsert
   */
  export type TeacherMajorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherMajor
     */
    select?: TeacherMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherMajor
     */
    omit?: TeacherMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherMajorInclude<ExtArgs> | null
    /**
     * The filter to search for the TeacherMajor to update in case it exists.
     */
    where: TeacherMajorWhereUniqueInput
    /**
     * In case the TeacherMajor found by the `where` argument doesn't exist, create a new TeacherMajor with this data.
     */
    create: XOR<TeacherMajorCreateInput, TeacherMajorUncheckedCreateInput>
    /**
     * In case the TeacherMajor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherMajorUpdateInput, TeacherMajorUncheckedUpdateInput>
  }

  /**
   * TeacherMajor delete
   */
  export type TeacherMajorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherMajor
     */
    select?: TeacherMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherMajor
     */
    omit?: TeacherMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherMajorInclude<ExtArgs> | null
    /**
     * Filter which TeacherMajor to delete.
     */
    where: TeacherMajorWhereUniqueInput
  }

  /**
   * TeacherMajor deleteMany
   */
  export type TeacherMajorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherMajors to delete
     */
    where?: TeacherMajorWhereInput
    /**
     * Limit how many TeacherMajors to delete.
     */
    limit?: number
  }

  /**
   * TeacherMajor without action
   */
  export type TeacherMajorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherMajor
     */
    select?: TeacherMajorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherMajor
     */
    omit?: TeacherMajorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherMajorInclude<ExtArgs> | null
  }


  /**
   * Model TeacherSubject
   */

  export type AggregateTeacherSubject = {
    _count: TeacherSubjectCountAggregateOutputType | null
    _avg: TeacherSubjectAvgAggregateOutputType | null
    _sum: TeacherSubjectSumAggregateOutputType | null
    _min: TeacherSubjectMinAggregateOutputType | null
    _max: TeacherSubjectMaxAggregateOutputType | null
  }

  export type TeacherSubjectAvgAggregateOutputType = {
    teacherId: number | null
    subjectId: number | null
  }

  export type TeacherSubjectSumAggregateOutputType = {
    teacherId: number | null
    subjectId: number | null
  }

  export type TeacherSubjectMinAggregateOutputType = {
    teacherId: number | null
    subjectId: number | null
  }

  export type TeacherSubjectMaxAggregateOutputType = {
    teacherId: number | null
    subjectId: number | null
  }

  export type TeacherSubjectCountAggregateOutputType = {
    teacherId: number
    subjectId: number
    _all: number
  }


  export type TeacherSubjectAvgAggregateInputType = {
    teacherId?: true
    subjectId?: true
  }

  export type TeacherSubjectSumAggregateInputType = {
    teacherId?: true
    subjectId?: true
  }

  export type TeacherSubjectMinAggregateInputType = {
    teacherId?: true
    subjectId?: true
  }

  export type TeacherSubjectMaxAggregateInputType = {
    teacherId?: true
    subjectId?: true
  }

  export type TeacherSubjectCountAggregateInputType = {
    teacherId?: true
    subjectId?: true
    _all?: true
  }

  export type TeacherSubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherSubject to aggregate.
     */
    where?: TeacherSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSubjects to fetch.
     */
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeacherSubjects
    **/
    _count?: true | TeacherSubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherSubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherSubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherSubjectMaxAggregateInputType
  }

  export type GetTeacherSubjectAggregateType<T extends TeacherSubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacherSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacherSubject[P]>
      : GetScalarType<T[P], AggregateTeacherSubject[P]>
  }




  export type TeacherSubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherSubjectWhereInput
    orderBy?: TeacherSubjectOrderByWithAggregationInput | TeacherSubjectOrderByWithAggregationInput[]
    by: TeacherSubjectScalarFieldEnum[] | TeacherSubjectScalarFieldEnum
    having?: TeacherSubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherSubjectCountAggregateInputType | true
    _avg?: TeacherSubjectAvgAggregateInputType
    _sum?: TeacherSubjectSumAggregateInputType
    _min?: TeacherSubjectMinAggregateInputType
    _max?: TeacherSubjectMaxAggregateInputType
  }

  export type TeacherSubjectGroupByOutputType = {
    teacherId: number
    subjectId: number
    _count: TeacherSubjectCountAggregateOutputType | null
    _avg: TeacherSubjectAvgAggregateOutputType | null
    _sum: TeacherSubjectSumAggregateOutputType | null
    _min: TeacherSubjectMinAggregateOutputType | null
    _max: TeacherSubjectMaxAggregateOutputType | null
  }

  type GetTeacherSubjectGroupByPayload<T extends TeacherSubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherSubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherSubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherSubjectGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherSubjectGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    teacherId?: boolean
    subjectId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSubject"]>

  export type TeacherSubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    teacherId?: boolean
    subjectId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSubject"]>

  export type TeacherSubjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    teacherId?: boolean
    subjectId?: boolean
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherSubject"]>

  export type TeacherSubjectSelectScalar = {
    teacherId?: boolean
    subjectId?: boolean
  }

  export type TeacherSubjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"teacherId" | "subjectId", ExtArgs["result"]["teacherSubject"]>
  export type TeacherSubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type TeacherSubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type TeacherSubjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | TeacherDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $TeacherSubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeacherSubject"
    objects: {
      teacher: Prisma.$TeacherPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      teacherId: number
      subjectId: number
    }, ExtArgs["result"]["teacherSubject"]>
    composites: {}
  }

  type TeacherSubjectGetPayload<S extends boolean | null | undefined | TeacherSubjectDefaultArgs> = $Result.GetResult<Prisma.$TeacherSubjectPayload, S>

  type TeacherSubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeacherSubjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeacherSubjectCountAggregateInputType | true
    }

  export interface TeacherSubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeacherSubject'], meta: { name: 'TeacherSubject' } }
    /**
     * Find zero or one TeacherSubject that matches the filter.
     * @param {TeacherSubjectFindUniqueArgs} args - Arguments to find a TeacherSubject
     * @example
     * // Get one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherSubjectFindUniqueArgs>(args: SelectSubset<T, TeacherSubjectFindUniqueArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeacherSubject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherSubjectFindUniqueOrThrowArgs} args - Arguments to find a TeacherSubject
     * @example
     * // Get one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherSubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherSubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherSubject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectFindFirstArgs} args - Arguments to find a TeacherSubject
     * @example
     * // Get one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherSubjectFindFirstArgs>(args?: SelectSubset<T, TeacherSubjectFindFirstArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeacherSubject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectFindFirstOrThrowArgs} args - Arguments to find a TeacherSubject
     * @example
     * // Get one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherSubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherSubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeacherSubjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherSubjects
     * const teacherSubjects = await prisma.teacherSubject.findMany()
     * 
     * // Get first 10 TeacherSubjects
     * const teacherSubjects = await prisma.teacherSubject.findMany({ take: 10 })
     * 
     * // Only select the `teacherId`
     * const teacherSubjectWithTeacherIdOnly = await prisma.teacherSubject.findMany({ select: { teacherId: true } })
     * 
     */
    findMany<T extends TeacherSubjectFindManyArgs>(args?: SelectSubset<T, TeacherSubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeacherSubject.
     * @param {TeacherSubjectCreateArgs} args - Arguments to create a TeacherSubject.
     * @example
     * // Create one TeacherSubject
     * const TeacherSubject = await prisma.teacherSubject.create({
     *   data: {
     *     // ... data to create a TeacherSubject
     *   }
     * })
     * 
     */
    create<T extends TeacherSubjectCreateArgs>(args: SelectSubset<T, TeacherSubjectCreateArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeacherSubjects.
     * @param {TeacherSubjectCreateManyArgs} args - Arguments to create many TeacherSubjects.
     * @example
     * // Create many TeacherSubjects
     * const teacherSubject = await prisma.teacherSubject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherSubjectCreateManyArgs>(args?: SelectSubset<T, TeacherSubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeacherSubjects and returns the data saved in the database.
     * @param {TeacherSubjectCreateManyAndReturnArgs} args - Arguments to create many TeacherSubjects.
     * @example
     * // Create many TeacherSubjects
     * const teacherSubject = await prisma.teacherSubject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeacherSubjects and only return the `teacherId`
     * const teacherSubjectWithTeacherIdOnly = await prisma.teacherSubject.createManyAndReturn({
     *   select: { teacherId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherSubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherSubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeacherSubject.
     * @param {TeacherSubjectDeleteArgs} args - Arguments to delete one TeacherSubject.
     * @example
     * // Delete one TeacherSubject
     * const TeacherSubject = await prisma.teacherSubject.delete({
     *   where: {
     *     // ... filter to delete one TeacherSubject
     *   }
     * })
     * 
     */
    delete<T extends TeacherSubjectDeleteArgs>(args: SelectSubset<T, TeacherSubjectDeleteArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeacherSubject.
     * @param {TeacherSubjectUpdateArgs} args - Arguments to update one TeacherSubject.
     * @example
     * // Update one TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherSubjectUpdateArgs>(args: SelectSubset<T, TeacherSubjectUpdateArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeacherSubjects.
     * @param {TeacherSubjectDeleteManyArgs} args - Arguments to filter TeacherSubjects to delete.
     * @example
     * // Delete a few TeacherSubjects
     * const { count } = await prisma.teacherSubject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherSubjectDeleteManyArgs>(args?: SelectSubset<T, TeacherSubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherSubjects
     * const teacherSubject = await prisma.teacherSubject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherSubjectUpdateManyArgs>(args: SelectSubset<T, TeacherSubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherSubjects and returns the data updated in the database.
     * @param {TeacherSubjectUpdateManyAndReturnArgs} args - Arguments to update many TeacherSubjects.
     * @example
     * // Update many TeacherSubjects
     * const teacherSubject = await prisma.teacherSubject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeacherSubjects and only return the `teacherId`
     * const teacherSubjectWithTeacherIdOnly = await prisma.teacherSubject.updateManyAndReturn({
     *   select: { teacherId: true },
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
    updateManyAndReturn<T extends TeacherSubjectUpdateManyAndReturnArgs>(args: SelectSubset<T, TeacherSubjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeacherSubject.
     * @param {TeacherSubjectUpsertArgs} args - Arguments to update or create a TeacherSubject.
     * @example
     * // Update or create a TeacherSubject
     * const teacherSubject = await prisma.teacherSubject.upsert({
     *   create: {
     *     // ... data to create a TeacherSubject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherSubject we want to update
     *   }
     * })
     */
    upsert<T extends TeacherSubjectUpsertArgs>(args: SelectSubset<T, TeacherSubjectUpsertArgs<ExtArgs>>): Prisma__TeacherSubjectClient<$Result.GetResult<Prisma.$TeacherSubjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeacherSubjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectCountArgs} args - Arguments to filter TeacherSubjects to count.
     * @example
     * // Count the number of TeacherSubjects
     * const count = await prisma.teacherSubject.count({
     *   where: {
     *     // ... the filter for the TeacherSubjects we want to count
     *   }
     * })
    **/
    count<T extends TeacherSubjectCountArgs>(
      args?: Subset<T, TeacherSubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherSubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeacherSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherSubjectAggregateArgs>(args: Subset<T, TeacherSubjectAggregateArgs>): Prisma.PrismaPromise<GetTeacherSubjectAggregateType<T>>

    /**
     * Group by TeacherSubject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherSubjectGroupByArgs} args - Group by arguments.
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
      T extends TeacherSubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherSubjectGroupByArgs['orderBy'] }
        : { orderBy?: TeacherSubjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeacherSubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeacherSubject model
   */
  readonly fields: TeacherSubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeacherSubject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherSubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeacherSubject model
   */
  interface TeacherSubjectFieldRefs {
    readonly teacherId: FieldRef<"TeacherSubject", 'Int'>
    readonly subjectId: FieldRef<"TeacherSubject", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TeacherSubject findUnique
   */
  export type TeacherSubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubject to fetch.
     */
    where: TeacherSubjectWhereUniqueInput
  }

  /**
   * TeacherSubject findUniqueOrThrow
   */
  export type TeacherSubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubject to fetch.
     */
    where: TeacherSubjectWhereUniqueInput
  }

  /**
   * TeacherSubject findFirst
   */
  export type TeacherSubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubject to fetch.
     */
    where?: TeacherSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSubjects to fetch.
     */
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherSubjects.
     */
    cursor?: TeacherSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherSubjects.
     */
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * TeacherSubject findFirstOrThrow
   */
  export type TeacherSubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubject to fetch.
     */
    where?: TeacherSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSubjects to fetch.
     */
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherSubjects.
     */
    cursor?: TeacherSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSubjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherSubjects.
     */
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * TeacherSubject findMany
   */
  export type TeacherSubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter, which TeacherSubjects to fetch.
     */
    where?: TeacherSubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherSubjects to fetch.
     */
    orderBy?: TeacherSubjectOrderByWithRelationInput | TeacherSubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeacherSubjects.
     */
    cursor?: TeacherSubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherSubjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherSubjects.
     */
    skip?: number
    distinct?: TeacherSubjectScalarFieldEnum | TeacherSubjectScalarFieldEnum[]
  }

  /**
   * TeacherSubject create
   */
  export type TeacherSubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a TeacherSubject.
     */
    data: XOR<TeacherSubjectCreateInput, TeacherSubjectUncheckedCreateInput>
  }

  /**
   * TeacherSubject createMany
   */
  export type TeacherSubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherSubjects.
     */
    data: TeacherSubjectCreateManyInput | TeacherSubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeacherSubject createManyAndReturn
   */
  export type TeacherSubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * The data used to create many TeacherSubjects.
     */
    data: TeacherSubjectCreateManyInput | TeacherSubjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherSubject update
   */
  export type TeacherSubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a TeacherSubject.
     */
    data: XOR<TeacherSubjectUpdateInput, TeacherSubjectUncheckedUpdateInput>
    /**
     * Choose, which TeacherSubject to update.
     */
    where: TeacherSubjectWhereUniqueInput
  }

  /**
   * TeacherSubject updateMany
   */
  export type TeacherSubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherSubjects.
     */
    data: XOR<TeacherSubjectUpdateManyMutationInput, TeacherSubjectUncheckedUpdateManyInput>
    /**
     * Filter which TeacherSubjects to update
     */
    where?: TeacherSubjectWhereInput
    /**
     * Limit how many TeacherSubjects to update.
     */
    limit?: number
  }

  /**
   * TeacherSubject updateManyAndReturn
   */
  export type TeacherSubjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * The data used to update TeacherSubjects.
     */
    data: XOR<TeacherSubjectUpdateManyMutationInput, TeacherSubjectUncheckedUpdateManyInput>
    /**
     * Filter which TeacherSubjects to update
     */
    where?: TeacherSubjectWhereInput
    /**
     * Limit how many TeacherSubjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherSubject upsert
   */
  export type TeacherSubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the TeacherSubject to update in case it exists.
     */
    where: TeacherSubjectWhereUniqueInput
    /**
     * In case the TeacherSubject found by the `where` argument doesn't exist, create a new TeacherSubject with this data.
     */
    create: XOR<TeacherSubjectCreateInput, TeacherSubjectUncheckedCreateInput>
    /**
     * In case the TeacherSubject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherSubjectUpdateInput, TeacherSubjectUncheckedUpdateInput>
  }

  /**
   * TeacherSubject delete
   */
  export type TeacherSubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
    /**
     * Filter which TeacherSubject to delete.
     */
    where: TeacherSubjectWhereUniqueInput
  }

  /**
   * TeacherSubject deleteMany
   */
  export type TeacherSubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherSubjects to delete
     */
    where?: TeacherSubjectWhereInput
    /**
     * Limit how many TeacherSubjects to delete.
     */
    limit?: number
  }

  /**
   * TeacherSubject without action
   */
  export type TeacherSubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherSubject
     */
    select?: TeacherSubjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeacherSubject
     */
    omit?: TeacherSubjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherSubjectInclude<ExtArgs> | null
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


  export const MajorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type MajorScalarFieldEnum = (typeof MajorScalarFieldEnum)[keyof typeof MajorScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    teacherId: 'teacherId'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const StudentMajorScalarFieldEnum: {
    studentId: 'studentId',
    majorId: 'majorId'
  };

  export type StudentMajorScalarFieldEnum = (typeof StudentMajorScalarFieldEnum)[keyof typeof StudentMajorScalarFieldEnum]


  export const StudentSubjectScalarFieldEnum: {
    studentId: 'studentId',
    subjectId: 'subjectId'
  };

  export type StudentSubjectScalarFieldEnum = (typeof StudentSubjectScalarFieldEnum)[keyof typeof StudentSubjectScalarFieldEnum]


  export const MajorSubjectScalarFieldEnum: {
    majorId: 'majorId',
    subjectId: 'subjectId'
  };

  export type MajorSubjectScalarFieldEnum = (typeof MajorSubjectScalarFieldEnum)[keyof typeof MajorSubjectScalarFieldEnum]


  export const TeacherMajorScalarFieldEnum: {
    teacherId: 'teacherId',
    majorId: 'majorId'
  };

  export type TeacherMajorScalarFieldEnum = (typeof TeacherMajorScalarFieldEnum)[keyof typeof TeacherMajorScalarFieldEnum]


  export const TeacherSubjectScalarFieldEnum: {
    teacherId: 'teacherId',
    subjectId: 'subjectId'
  };

  export type TeacherSubjectScalarFieldEnum = (typeof TeacherSubjectScalarFieldEnum)[keyof typeof TeacherSubjectScalarFieldEnum]


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


  export type MajorWhereInput = {
    AND?: MajorWhereInput | MajorWhereInput[]
    OR?: MajorWhereInput[]
    NOT?: MajorWhereInput | MajorWhereInput[]
    id?: IntFilter<"Major"> | number
    name?: StringFilter<"Major"> | string
    description?: StringNullableFilter<"Major"> | string | null
    students?: StudentMajorListRelationFilter
    subjects?: MajorSubjectListRelationFilter
    teachers?: TeacherMajorListRelationFilter
  }

  export type MajorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    students?: StudentMajorOrderByRelationAggregateInput
    subjects?: MajorSubjectOrderByRelationAggregateInput
    teachers?: TeacherMajorOrderByRelationAggregateInput
  }

  export type MajorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: MajorWhereInput | MajorWhereInput[]
    OR?: MajorWhereInput[]
    NOT?: MajorWhereInput | MajorWhereInput[]
    description?: StringNullableFilter<"Major"> | string | null
    students?: StudentMajorListRelationFilter
    subjects?: MajorSubjectListRelationFilter
    teachers?: TeacherMajorListRelationFilter
  }, "id" | "name">

  export type MajorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: MajorCountOrderByAggregateInput
    _avg?: MajorAvgOrderByAggregateInput
    _max?: MajorMaxOrderByAggregateInput
    _min?: MajorMinOrderByAggregateInput
    _sum?: MajorSumOrderByAggregateInput
  }

  export type MajorScalarWhereWithAggregatesInput = {
    AND?: MajorScalarWhereWithAggregatesInput | MajorScalarWhereWithAggregatesInput[]
    OR?: MajorScalarWhereWithAggregatesInput[]
    NOT?: MajorScalarWhereWithAggregatesInput | MajorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Major"> | number
    name?: StringWithAggregatesFilter<"Major"> | string
    description?: StringNullableWithAggregatesFilter<"Major"> | string | null
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: IntFilter<"Subject"> | number
    name?: StringFilter<"Subject"> | string
    description?: StringNullableFilter<"Subject"> | string | null
    teacherId?: IntNullableFilter<"Subject"> | number | null
    majors?: MajorSubjectListRelationFilter
    students?: StudentSubjectListRelationFilter
    teachers?: XOR<TeacherSubjectNullableScalarRelationFilter, TeacherSubjectWhereInput> | null
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    teacherId?: SortOrderInput | SortOrder
    majors?: MajorSubjectOrderByRelationAggregateInput
    students?: StudentSubjectOrderByRelationAggregateInput
    teachers?: TeacherSubjectOrderByWithRelationInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    teacherId?: number
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    description?: StringNullableFilter<"Subject"> | string | null
    majors?: MajorSubjectListRelationFilter
    students?: StudentSubjectListRelationFilter
    teachers?: XOR<TeacherSubjectNullableScalarRelationFilter, TeacherSubjectWhereInput> | null
  }, "id" | "name" | "teacherId">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    teacherId?: SortOrderInput | SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _avg?: SubjectAvgOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
    _sum?: SubjectSumOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subject"> | number
    name?: StringWithAggregatesFilter<"Subject"> | string
    description?: StringNullableWithAggregatesFilter<"Subject"> | string | null
    teacherId?: IntNullableWithAggregatesFilter<"Subject"> | number | null
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    name?: StringFilter<"Student"> | string
    majors?: StudentMajorListRelationFilter
    subjects?: StudentSubjectListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    majors?: StudentMajorOrderByRelationAggregateInput
    subjects?: StudentSubjectOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    majors?: StudentMajorListRelationFilter
    subjects?: StudentSubjectListRelationFilter
  }, "id">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    name?: StringWithAggregatesFilter<"Student"> | string
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: IntFilter<"Teacher"> | number
    name?: StringFilter<"Teacher"> | string
    majors?: TeacherMajorListRelationFilter
    subjects?: TeacherSubjectListRelationFilter
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    majors?: TeacherMajorOrderByRelationAggregateInput
    subjects?: TeacherSubjectOrderByRelationAggregateInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    name?: StringFilter<"Teacher"> | string
    majors?: TeacherMajorListRelationFilter
    subjects?: TeacherSubjectListRelationFilter
  }, "id">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _avg?: TeacherAvgOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
    _sum?: TeacherSumOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Teacher"> | number
    name?: StringWithAggregatesFilter<"Teacher"> | string
  }

  export type StudentMajorWhereInput = {
    AND?: StudentMajorWhereInput | StudentMajorWhereInput[]
    OR?: StudentMajorWhereInput[]
    NOT?: StudentMajorWhereInput | StudentMajorWhereInput[]
    studentId?: IntFilter<"StudentMajor"> | number
    majorId?: IntFilter<"StudentMajor"> | number
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    major?: XOR<MajorScalarRelationFilter, MajorWhereInput>
  }

  export type StudentMajorOrderByWithRelationInput = {
    studentId?: SortOrder
    majorId?: SortOrder
    student?: StudentOrderByWithRelationInput
    major?: MajorOrderByWithRelationInput
  }

  export type StudentMajorWhereUniqueInput = Prisma.AtLeast<{
    studentId_majorId?: StudentMajorStudentIdMajorIdCompoundUniqueInput
    AND?: StudentMajorWhereInput | StudentMajorWhereInput[]
    OR?: StudentMajorWhereInput[]
    NOT?: StudentMajorWhereInput | StudentMajorWhereInput[]
    studentId?: IntFilter<"StudentMajor"> | number
    majorId?: IntFilter<"StudentMajor"> | number
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    major?: XOR<MajorScalarRelationFilter, MajorWhereInput>
  }, "studentId_majorId">

  export type StudentMajorOrderByWithAggregationInput = {
    studentId?: SortOrder
    majorId?: SortOrder
    _count?: StudentMajorCountOrderByAggregateInput
    _avg?: StudentMajorAvgOrderByAggregateInput
    _max?: StudentMajorMaxOrderByAggregateInput
    _min?: StudentMajorMinOrderByAggregateInput
    _sum?: StudentMajorSumOrderByAggregateInput
  }

  export type StudentMajorScalarWhereWithAggregatesInput = {
    AND?: StudentMajorScalarWhereWithAggregatesInput | StudentMajorScalarWhereWithAggregatesInput[]
    OR?: StudentMajorScalarWhereWithAggregatesInput[]
    NOT?: StudentMajorScalarWhereWithAggregatesInput | StudentMajorScalarWhereWithAggregatesInput[]
    studentId?: IntWithAggregatesFilter<"StudentMajor"> | number
    majorId?: IntWithAggregatesFilter<"StudentMajor"> | number
  }

  export type StudentSubjectWhereInput = {
    AND?: StudentSubjectWhereInput | StudentSubjectWhereInput[]
    OR?: StudentSubjectWhereInput[]
    NOT?: StudentSubjectWhereInput | StudentSubjectWhereInput[]
    studentId?: IntFilter<"StudentSubject"> | number
    subjectId?: IntFilter<"StudentSubject"> | number
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }

  export type StudentSubjectOrderByWithRelationInput = {
    studentId?: SortOrder
    subjectId?: SortOrder
    student?: StudentOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
  }

  export type StudentSubjectWhereUniqueInput = Prisma.AtLeast<{
    studentId_subjectId?: StudentSubjectStudentIdSubjectIdCompoundUniqueInput
    AND?: StudentSubjectWhereInput | StudentSubjectWhereInput[]
    OR?: StudentSubjectWhereInput[]
    NOT?: StudentSubjectWhereInput | StudentSubjectWhereInput[]
    studentId?: IntFilter<"StudentSubject"> | number
    subjectId?: IntFilter<"StudentSubject"> | number
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }, "studentId_subjectId">

  export type StudentSubjectOrderByWithAggregationInput = {
    studentId?: SortOrder
    subjectId?: SortOrder
    _count?: StudentSubjectCountOrderByAggregateInput
    _avg?: StudentSubjectAvgOrderByAggregateInput
    _max?: StudentSubjectMaxOrderByAggregateInput
    _min?: StudentSubjectMinOrderByAggregateInput
    _sum?: StudentSubjectSumOrderByAggregateInput
  }

  export type StudentSubjectScalarWhereWithAggregatesInput = {
    AND?: StudentSubjectScalarWhereWithAggregatesInput | StudentSubjectScalarWhereWithAggregatesInput[]
    OR?: StudentSubjectScalarWhereWithAggregatesInput[]
    NOT?: StudentSubjectScalarWhereWithAggregatesInput | StudentSubjectScalarWhereWithAggregatesInput[]
    studentId?: IntWithAggregatesFilter<"StudentSubject"> | number
    subjectId?: IntWithAggregatesFilter<"StudentSubject"> | number
  }

  export type MajorSubjectWhereInput = {
    AND?: MajorSubjectWhereInput | MajorSubjectWhereInput[]
    OR?: MajorSubjectWhereInput[]
    NOT?: MajorSubjectWhereInput | MajorSubjectWhereInput[]
    majorId?: IntFilter<"MajorSubject"> | number
    subjectId?: IntFilter<"MajorSubject"> | number
    major?: XOR<MajorScalarRelationFilter, MajorWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }

  export type MajorSubjectOrderByWithRelationInput = {
    majorId?: SortOrder
    subjectId?: SortOrder
    major?: MajorOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
  }

  export type MajorSubjectWhereUniqueInput = Prisma.AtLeast<{
    majorId_subjectId?: MajorSubjectMajorIdSubjectIdCompoundUniqueInput
    AND?: MajorSubjectWhereInput | MajorSubjectWhereInput[]
    OR?: MajorSubjectWhereInput[]
    NOT?: MajorSubjectWhereInput | MajorSubjectWhereInput[]
    majorId?: IntFilter<"MajorSubject"> | number
    subjectId?: IntFilter<"MajorSubject"> | number
    major?: XOR<MajorScalarRelationFilter, MajorWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }, "majorId_subjectId">

  export type MajorSubjectOrderByWithAggregationInput = {
    majorId?: SortOrder
    subjectId?: SortOrder
    _count?: MajorSubjectCountOrderByAggregateInput
    _avg?: MajorSubjectAvgOrderByAggregateInput
    _max?: MajorSubjectMaxOrderByAggregateInput
    _min?: MajorSubjectMinOrderByAggregateInput
    _sum?: MajorSubjectSumOrderByAggregateInput
  }

  export type MajorSubjectScalarWhereWithAggregatesInput = {
    AND?: MajorSubjectScalarWhereWithAggregatesInput | MajorSubjectScalarWhereWithAggregatesInput[]
    OR?: MajorSubjectScalarWhereWithAggregatesInput[]
    NOT?: MajorSubjectScalarWhereWithAggregatesInput | MajorSubjectScalarWhereWithAggregatesInput[]
    majorId?: IntWithAggregatesFilter<"MajorSubject"> | number
    subjectId?: IntWithAggregatesFilter<"MajorSubject"> | number
  }

  export type TeacherMajorWhereInput = {
    AND?: TeacherMajorWhereInput | TeacherMajorWhereInput[]
    OR?: TeacherMajorWhereInput[]
    NOT?: TeacherMajorWhereInput | TeacherMajorWhereInput[]
    teacherId?: IntFilter<"TeacherMajor"> | number
    majorId?: IntFilter<"TeacherMajor"> | number
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    major?: XOR<MajorScalarRelationFilter, MajorWhereInput>
  }

  export type TeacherMajorOrderByWithRelationInput = {
    teacherId?: SortOrder
    majorId?: SortOrder
    teacher?: TeacherOrderByWithRelationInput
    major?: MajorOrderByWithRelationInput
  }

  export type TeacherMajorWhereUniqueInput = Prisma.AtLeast<{
    teacherId_majorId?: TeacherMajorTeacherIdMajorIdCompoundUniqueInput
    AND?: TeacherMajorWhereInput | TeacherMajorWhereInput[]
    OR?: TeacherMajorWhereInput[]
    NOT?: TeacherMajorWhereInput | TeacherMajorWhereInput[]
    teacherId?: IntFilter<"TeacherMajor"> | number
    majorId?: IntFilter<"TeacherMajor"> | number
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    major?: XOR<MajorScalarRelationFilter, MajorWhereInput>
  }, "teacherId_majorId">

  export type TeacherMajorOrderByWithAggregationInput = {
    teacherId?: SortOrder
    majorId?: SortOrder
    _count?: TeacherMajorCountOrderByAggregateInput
    _avg?: TeacherMajorAvgOrderByAggregateInput
    _max?: TeacherMajorMaxOrderByAggregateInput
    _min?: TeacherMajorMinOrderByAggregateInput
    _sum?: TeacherMajorSumOrderByAggregateInput
  }

  export type TeacherMajorScalarWhereWithAggregatesInput = {
    AND?: TeacherMajorScalarWhereWithAggregatesInput | TeacherMajorScalarWhereWithAggregatesInput[]
    OR?: TeacherMajorScalarWhereWithAggregatesInput[]
    NOT?: TeacherMajorScalarWhereWithAggregatesInput | TeacherMajorScalarWhereWithAggregatesInput[]
    teacherId?: IntWithAggregatesFilter<"TeacherMajor"> | number
    majorId?: IntWithAggregatesFilter<"TeacherMajor"> | number
  }

  export type TeacherSubjectWhereInput = {
    AND?: TeacherSubjectWhereInput | TeacherSubjectWhereInput[]
    OR?: TeacherSubjectWhereInput[]
    NOT?: TeacherSubjectWhereInput | TeacherSubjectWhereInput[]
    teacherId?: IntFilter<"TeacherSubject"> | number
    subjectId?: IntFilter<"TeacherSubject"> | number
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }

  export type TeacherSubjectOrderByWithRelationInput = {
    teacherId?: SortOrder
    subjectId?: SortOrder
    teacher?: TeacherOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
  }

  export type TeacherSubjectWhereUniqueInput = Prisma.AtLeast<{
    teacherId?: number
    subjectId?: number
    teacherId_subjectId?: TeacherSubjectTeacherIdSubjectIdCompoundUniqueInput
    AND?: TeacherSubjectWhereInput | TeacherSubjectWhereInput[]
    OR?: TeacherSubjectWhereInput[]
    NOT?: TeacherSubjectWhereInput | TeacherSubjectWhereInput[]
    teacher?: XOR<TeacherScalarRelationFilter, TeacherWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, SubjectWhereInput>
  }, "teacherId_subjectId" | "teacherId" | "subjectId">

  export type TeacherSubjectOrderByWithAggregationInput = {
    teacherId?: SortOrder
    subjectId?: SortOrder
    _count?: TeacherSubjectCountOrderByAggregateInput
    _avg?: TeacherSubjectAvgOrderByAggregateInput
    _max?: TeacherSubjectMaxOrderByAggregateInput
    _min?: TeacherSubjectMinOrderByAggregateInput
    _sum?: TeacherSubjectSumOrderByAggregateInput
  }

  export type TeacherSubjectScalarWhereWithAggregatesInput = {
    AND?: TeacherSubjectScalarWhereWithAggregatesInput | TeacherSubjectScalarWhereWithAggregatesInput[]
    OR?: TeacherSubjectScalarWhereWithAggregatesInput[]
    NOT?: TeacherSubjectScalarWhereWithAggregatesInput | TeacherSubjectScalarWhereWithAggregatesInput[]
    teacherId?: IntWithAggregatesFilter<"TeacherSubject"> | number
    subjectId?: IntWithAggregatesFilter<"TeacherSubject"> | number
  }

  export type MajorCreateInput = {
    name: string
    description?: string | null
    students?: StudentMajorCreateNestedManyWithoutMajorInput
    subjects?: MajorSubjectCreateNestedManyWithoutMajorInput
    teachers?: TeacherMajorCreateNestedManyWithoutMajorInput
  }

  export type MajorUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    students?: StudentMajorUncheckedCreateNestedManyWithoutMajorInput
    subjects?: MajorSubjectUncheckedCreateNestedManyWithoutMajorInput
    teachers?: TeacherMajorUncheckedCreateNestedManyWithoutMajorInput
  }

  export type MajorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    students?: StudentMajorUpdateManyWithoutMajorNestedInput
    subjects?: MajorSubjectUpdateManyWithoutMajorNestedInput
    teachers?: TeacherMajorUpdateManyWithoutMajorNestedInput
  }

  export type MajorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    students?: StudentMajorUncheckedUpdateManyWithoutMajorNestedInput
    subjects?: MajorSubjectUncheckedUpdateManyWithoutMajorNestedInput
    teachers?: TeacherMajorUncheckedUpdateManyWithoutMajorNestedInput
  }

  export type MajorCreateManyInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type MajorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MajorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubjectCreateInput = {
    name: string
    description?: string | null
    teacherId?: number | null
    majors?: MajorSubjectCreateNestedManyWithoutSubjectInput
    students?: StudentSubjectCreateNestedManyWithoutSubjectInput
    teachers?: TeacherSubjectCreateNestedOneWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    teacherId?: number | null
    majors?: MajorSubjectUncheckedCreateNestedManyWithoutSubjectInput
    students?: StudentSubjectUncheckedCreateNestedManyWithoutSubjectInput
    teachers?: TeacherSubjectUncheckedCreateNestedOneWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    majors?: MajorSubjectUpdateManyWithoutSubjectNestedInput
    students?: StudentSubjectUpdateManyWithoutSubjectNestedInput
    teachers?: TeacherSubjectUpdateOneWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    majors?: MajorSubjectUncheckedUpdateManyWithoutSubjectNestedInput
    students?: StudentSubjectUncheckedUpdateManyWithoutSubjectNestedInput
    teachers?: TeacherSubjectUncheckedUpdateOneWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    teacherId?: number | null
  }

  export type SubjectUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StudentCreateInput = {
    name: string
    majors?: StudentMajorCreateNestedManyWithoutStudentInput
    subjects?: StudentSubjectCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    name: string
    majors?: StudentMajorUncheckedCreateNestedManyWithoutStudentInput
    subjects?: StudentSubjectUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    majors?: StudentMajorUpdateManyWithoutStudentNestedInput
    subjects?: StudentSubjectUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    majors?: StudentMajorUncheckedUpdateManyWithoutStudentNestedInput
    subjects?: StudentSubjectUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: number
    name: string
  }

  export type StudentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherCreateInput = {
    name: string
    majors?: TeacherMajorCreateNestedManyWithoutTeacherInput
    subjects?: TeacherSubjectCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: number
    name: string
    majors?: TeacherMajorUncheckedCreateNestedManyWithoutTeacherInput
    subjects?: TeacherSubjectUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    majors?: TeacherMajorUpdateManyWithoutTeacherNestedInput
    subjects?: TeacherSubjectUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    majors?: TeacherMajorUncheckedUpdateManyWithoutTeacherNestedInput
    subjects?: TeacherSubjectUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: number
    name: string
  }

  export type TeacherUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StudentMajorCreateInput = {
    student: StudentCreateNestedOneWithoutMajorsInput
    major: MajorCreateNestedOneWithoutStudentsInput
  }

  export type StudentMajorUncheckedCreateInput = {
    studentId: number
    majorId: number
  }

  export type StudentMajorUpdateInput = {
    student?: StudentUpdateOneRequiredWithoutMajorsNestedInput
    major?: MajorUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentMajorUncheckedUpdateInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    majorId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentMajorCreateManyInput = {
    studentId: number
    majorId: number
  }

  export type StudentMajorUpdateManyMutationInput = {

  }

  export type StudentMajorUncheckedUpdateManyInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    majorId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentSubjectCreateInput = {
    student: StudentCreateNestedOneWithoutSubjectsInput
    subject: SubjectCreateNestedOneWithoutStudentsInput
  }

  export type StudentSubjectUncheckedCreateInput = {
    studentId: number
    subjectId: number
  }

  export type StudentSubjectUpdateInput = {
    student?: StudentUpdateOneRequiredWithoutSubjectsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentSubjectUncheckedUpdateInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentSubjectCreateManyInput = {
    studentId: number
    subjectId: number
  }

  export type StudentSubjectUpdateManyMutationInput = {

  }

  export type StudentSubjectUncheckedUpdateManyInput = {
    studentId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
  }

  export type MajorSubjectCreateInput = {
    major: MajorCreateNestedOneWithoutSubjectsInput
    subject: SubjectCreateNestedOneWithoutMajorsInput
  }

  export type MajorSubjectUncheckedCreateInput = {
    majorId: number
    subjectId: number
  }

  export type MajorSubjectUpdateInput = {
    major?: MajorUpdateOneRequiredWithoutSubjectsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutMajorsNestedInput
  }

  export type MajorSubjectUncheckedUpdateInput = {
    majorId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
  }

  export type MajorSubjectCreateManyInput = {
    majorId: number
    subjectId: number
  }

  export type MajorSubjectUpdateManyMutationInput = {

  }

  export type MajorSubjectUncheckedUpdateManyInput = {
    majorId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherMajorCreateInput = {
    teacher: TeacherCreateNestedOneWithoutMajorsInput
    major: MajorCreateNestedOneWithoutTeachersInput
  }

  export type TeacherMajorUncheckedCreateInput = {
    teacherId: number
    majorId: number
  }

  export type TeacherMajorUpdateInput = {
    teacher?: TeacherUpdateOneRequiredWithoutMajorsNestedInput
    major?: MajorUpdateOneRequiredWithoutTeachersNestedInput
  }

  export type TeacherMajorUncheckedUpdateInput = {
    teacherId?: IntFieldUpdateOperationsInput | number
    majorId?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherMajorCreateManyInput = {
    teacherId: number
    majorId: number
  }

  export type TeacherMajorUpdateManyMutationInput = {

  }

  export type TeacherMajorUncheckedUpdateManyInput = {
    teacherId?: IntFieldUpdateOperationsInput | number
    majorId?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherSubjectCreateInput = {
    teacher: TeacherCreateNestedOneWithoutSubjectsInput
    subject: SubjectCreateNestedOneWithoutTeachersInput
  }

  export type TeacherSubjectUncheckedCreateInput = {
    teacherId: number
    subjectId: number
  }

  export type TeacherSubjectUpdateInput = {
    teacher?: TeacherUpdateOneRequiredWithoutSubjectsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutTeachersNestedInput
  }

  export type TeacherSubjectUncheckedUpdateInput = {
    teacherId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherSubjectCreateManyInput = {
    teacherId: number
    subjectId: number
  }

  export type TeacherSubjectUpdateManyMutationInput = {

  }

  export type TeacherSubjectUncheckedUpdateManyInput = {
    teacherId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
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

  export type StudentMajorListRelationFilter = {
    every?: StudentMajorWhereInput
    some?: StudentMajorWhereInput
    none?: StudentMajorWhereInput
  }

  export type MajorSubjectListRelationFilter = {
    every?: MajorSubjectWhereInput
    some?: MajorSubjectWhereInput
    none?: MajorSubjectWhereInput
  }

  export type TeacherMajorListRelationFilter = {
    every?: TeacherMajorWhereInput
    some?: TeacherMajorWhereInput
    none?: TeacherMajorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudentMajorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MajorSubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherMajorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MajorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type MajorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MajorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type MajorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type MajorSumOrderByAggregateInput = {
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

  export type StudentSubjectListRelationFilter = {
    every?: StudentSubjectWhereInput
    some?: StudentSubjectWhereInput
    none?: StudentSubjectWhereInput
  }

  export type TeacherSubjectNullableScalarRelationFilter = {
    is?: TeacherSubjectWhereInput | null
    isNot?: TeacherSubjectWhereInput | null
  }

  export type StudentSubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    teacherId?: SortOrder
  }

  export type SubjectAvgOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    teacherId?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    teacherId?: SortOrder
  }

  export type SubjectSumOrderByAggregateInput = {
    id?: SortOrder
    teacherId?: SortOrder
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

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeacherSubjectListRelationFilter = {
    every?: TeacherSubjectWhereInput
    some?: TeacherSubjectWhereInput
    none?: TeacherSubjectWhereInput
  }

  export type TeacherSubjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TeacherAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TeacherSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type MajorScalarRelationFilter = {
    is?: MajorWhereInput
    isNot?: MajorWhereInput
  }

  export type StudentMajorStudentIdMajorIdCompoundUniqueInput = {
    studentId: number
    majorId: number
  }

  export type StudentMajorCountOrderByAggregateInput = {
    studentId?: SortOrder
    majorId?: SortOrder
  }

  export type StudentMajorAvgOrderByAggregateInput = {
    studentId?: SortOrder
    majorId?: SortOrder
  }

  export type StudentMajorMaxOrderByAggregateInput = {
    studentId?: SortOrder
    majorId?: SortOrder
  }

  export type StudentMajorMinOrderByAggregateInput = {
    studentId?: SortOrder
    majorId?: SortOrder
  }

  export type StudentMajorSumOrderByAggregateInput = {
    studentId?: SortOrder
    majorId?: SortOrder
  }

  export type SubjectScalarRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type StudentSubjectStudentIdSubjectIdCompoundUniqueInput = {
    studentId: number
    subjectId: number
  }

  export type StudentSubjectCountOrderByAggregateInput = {
    studentId?: SortOrder
    subjectId?: SortOrder
  }

  export type StudentSubjectAvgOrderByAggregateInput = {
    studentId?: SortOrder
    subjectId?: SortOrder
  }

  export type StudentSubjectMaxOrderByAggregateInput = {
    studentId?: SortOrder
    subjectId?: SortOrder
  }

  export type StudentSubjectMinOrderByAggregateInput = {
    studentId?: SortOrder
    subjectId?: SortOrder
  }

  export type StudentSubjectSumOrderByAggregateInput = {
    studentId?: SortOrder
    subjectId?: SortOrder
  }

  export type MajorSubjectMajorIdSubjectIdCompoundUniqueInput = {
    majorId: number
    subjectId: number
  }

  export type MajorSubjectCountOrderByAggregateInput = {
    majorId?: SortOrder
    subjectId?: SortOrder
  }

  export type MajorSubjectAvgOrderByAggregateInput = {
    majorId?: SortOrder
    subjectId?: SortOrder
  }

  export type MajorSubjectMaxOrderByAggregateInput = {
    majorId?: SortOrder
    subjectId?: SortOrder
  }

  export type MajorSubjectMinOrderByAggregateInput = {
    majorId?: SortOrder
    subjectId?: SortOrder
  }

  export type MajorSubjectSumOrderByAggregateInput = {
    majorId?: SortOrder
    subjectId?: SortOrder
  }

  export type TeacherScalarRelationFilter = {
    is?: TeacherWhereInput
    isNot?: TeacherWhereInput
  }

  export type TeacherMajorTeacherIdMajorIdCompoundUniqueInput = {
    teacherId: number
    majorId: number
  }

  export type TeacherMajorCountOrderByAggregateInput = {
    teacherId?: SortOrder
    majorId?: SortOrder
  }

  export type TeacherMajorAvgOrderByAggregateInput = {
    teacherId?: SortOrder
    majorId?: SortOrder
  }

  export type TeacherMajorMaxOrderByAggregateInput = {
    teacherId?: SortOrder
    majorId?: SortOrder
  }

  export type TeacherMajorMinOrderByAggregateInput = {
    teacherId?: SortOrder
    majorId?: SortOrder
  }

  export type TeacherMajorSumOrderByAggregateInput = {
    teacherId?: SortOrder
    majorId?: SortOrder
  }

  export type TeacherSubjectTeacherIdSubjectIdCompoundUniqueInput = {
    teacherId: number
    subjectId: number
  }

  export type TeacherSubjectCountOrderByAggregateInput = {
    teacherId?: SortOrder
    subjectId?: SortOrder
  }

  export type TeacherSubjectAvgOrderByAggregateInput = {
    teacherId?: SortOrder
    subjectId?: SortOrder
  }

  export type TeacherSubjectMaxOrderByAggregateInput = {
    teacherId?: SortOrder
    subjectId?: SortOrder
  }

  export type TeacherSubjectMinOrderByAggregateInput = {
    teacherId?: SortOrder
    subjectId?: SortOrder
  }

  export type TeacherSubjectSumOrderByAggregateInput = {
    teacherId?: SortOrder
    subjectId?: SortOrder
  }

  export type StudentMajorCreateNestedManyWithoutMajorInput = {
    create?: XOR<StudentMajorCreateWithoutMajorInput, StudentMajorUncheckedCreateWithoutMajorInput> | StudentMajorCreateWithoutMajorInput[] | StudentMajorUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: StudentMajorCreateOrConnectWithoutMajorInput | StudentMajorCreateOrConnectWithoutMajorInput[]
    createMany?: StudentMajorCreateManyMajorInputEnvelope
    connect?: StudentMajorWhereUniqueInput | StudentMajorWhereUniqueInput[]
  }

  export type MajorSubjectCreateNestedManyWithoutMajorInput = {
    create?: XOR<MajorSubjectCreateWithoutMajorInput, MajorSubjectUncheckedCreateWithoutMajorInput> | MajorSubjectCreateWithoutMajorInput[] | MajorSubjectUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: MajorSubjectCreateOrConnectWithoutMajorInput | MajorSubjectCreateOrConnectWithoutMajorInput[]
    createMany?: MajorSubjectCreateManyMajorInputEnvelope
    connect?: MajorSubjectWhereUniqueInput | MajorSubjectWhereUniqueInput[]
  }

  export type TeacherMajorCreateNestedManyWithoutMajorInput = {
    create?: XOR<TeacherMajorCreateWithoutMajorInput, TeacherMajorUncheckedCreateWithoutMajorInput> | TeacherMajorCreateWithoutMajorInput[] | TeacherMajorUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: TeacherMajorCreateOrConnectWithoutMajorInput | TeacherMajorCreateOrConnectWithoutMajorInput[]
    createMany?: TeacherMajorCreateManyMajorInputEnvelope
    connect?: TeacherMajorWhereUniqueInput | TeacherMajorWhereUniqueInput[]
  }

  export type StudentMajorUncheckedCreateNestedManyWithoutMajorInput = {
    create?: XOR<StudentMajorCreateWithoutMajorInput, StudentMajorUncheckedCreateWithoutMajorInput> | StudentMajorCreateWithoutMajorInput[] | StudentMajorUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: StudentMajorCreateOrConnectWithoutMajorInput | StudentMajorCreateOrConnectWithoutMajorInput[]
    createMany?: StudentMajorCreateManyMajorInputEnvelope
    connect?: StudentMajorWhereUniqueInput | StudentMajorWhereUniqueInput[]
  }

  export type MajorSubjectUncheckedCreateNestedManyWithoutMajorInput = {
    create?: XOR<MajorSubjectCreateWithoutMajorInput, MajorSubjectUncheckedCreateWithoutMajorInput> | MajorSubjectCreateWithoutMajorInput[] | MajorSubjectUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: MajorSubjectCreateOrConnectWithoutMajorInput | MajorSubjectCreateOrConnectWithoutMajorInput[]
    createMany?: MajorSubjectCreateManyMajorInputEnvelope
    connect?: MajorSubjectWhereUniqueInput | MajorSubjectWhereUniqueInput[]
  }

  export type TeacherMajorUncheckedCreateNestedManyWithoutMajorInput = {
    create?: XOR<TeacherMajorCreateWithoutMajorInput, TeacherMajorUncheckedCreateWithoutMajorInput> | TeacherMajorCreateWithoutMajorInput[] | TeacherMajorUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: TeacherMajorCreateOrConnectWithoutMajorInput | TeacherMajorCreateOrConnectWithoutMajorInput[]
    createMany?: TeacherMajorCreateManyMajorInputEnvelope
    connect?: TeacherMajorWhereUniqueInput | TeacherMajorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StudentMajorUpdateManyWithoutMajorNestedInput = {
    create?: XOR<StudentMajorCreateWithoutMajorInput, StudentMajorUncheckedCreateWithoutMajorInput> | StudentMajorCreateWithoutMajorInput[] | StudentMajorUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: StudentMajorCreateOrConnectWithoutMajorInput | StudentMajorCreateOrConnectWithoutMajorInput[]
    upsert?: StudentMajorUpsertWithWhereUniqueWithoutMajorInput | StudentMajorUpsertWithWhereUniqueWithoutMajorInput[]
    createMany?: StudentMajorCreateManyMajorInputEnvelope
    set?: StudentMajorWhereUniqueInput | StudentMajorWhereUniqueInput[]
    disconnect?: StudentMajorWhereUniqueInput | StudentMajorWhereUniqueInput[]
    delete?: StudentMajorWhereUniqueInput | StudentMajorWhereUniqueInput[]
    connect?: StudentMajorWhereUniqueInput | StudentMajorWhereUniqueInput[]
    update?: StudentMajorUpdateWithWhereUniqueWithoutMajorInput | StudentMajorUpdateWithWhereUniqueWithoutMajorInput[]
    updateMany?: StudentMajorUpdateManyWithWhereWithoutMajorInput | StudentMajorUpdateManyWithWhereWithoutMajorInput[]
    deleteMany?: StudentMajorScalarWhereInput | StudentMajorScalarWhereInput[]
  }

  export type MajorSubjectUpdateManyWithoutMajorNestedInput = {
    create?: XOR<MajorSubjectCreateWithoutMajorInput, MajorSubjectUncheckedCreateWithoutMajorInput> | MajorSubjectCreateWithoutMajorInput[] | MajorSubjectUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: MajorSubjectCreateOrConnectWithoutMajorInput | MajorSubjectCreateOrConnectWithoutMajorInput[]
    upsert?: MajorSubjectUpsertWithWhereUniqueWithoutMajorInput | MajorSubjectUpsertWithWhereUniqueWithoutMajorInput[]
    createMany?: MajorSubjectCreateManyMajorInputEnvelope
    set?: MajorSubjectWhereUniqueInput | MajorSubjectWhereUniqueInput[]
    disconnect?: MajorSubjectWhereUniqueInput | MajorSubjectWhereUniqueInput[]
    delete?: MajorSubjectWhereUniqueInput | MajorSubjectWhereUniqueInput[]
    connect?: MajorSubjectWhereUniqueInput | MajorSubjectWhereUniqueInput[]
    update?: MajorSubjectUpdateWithWhereUniqueWithoutMajorInput | MajorSubjectUpdateWithWhereUniqueWithoutMajorInput[]
    updateMany?: MajorSubjectUpdateManyWithWhereWithoutMajorInput | MajorSubjectUpdateManyWithWhereWithoutMajorInput[]
    deleteMany?: MajorSubjectScalarWhereInput | MajorSubjectScalarWhereInput[]
  }

  export type TeacherMajorUpdateManyWithoutMajorNestedInput = {
    create?: XOR<TeacherMajorCreateWithoutMajorInput, TeacherMajorUncheckedCreateWithoutMajorInput> | TeacherMajorCreateWithoutMajorInput[] | TeacherMajorUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: TeacherMajorCreateOrConnectWithoutMajorInput | TeacherMajorCreateOrConnectWithoutMajorInput[]
    upsert?: TeacherMajorUpsertWithWhereUniqueWithoutMajorInput | TeacherMajorUpsertWithWhereUniqueWithoutMajorInput[]
    createMany?: TeacherMajorCreateManyMajorInputEnvelope
    set?: TeacherMajorWhereUniqueInput | TeacherMajorWhereUniqueInput[]
    disconnect?: TeacherMajorWhereUniqueInput | TeacherMajorWhereUniqueInput[]
    delete?: TeacherMajorWhereUniqueInput | TeacherMajorWhereUniqueInput[]
    connect?: TeacherMajorWhereUniqueInput | TeacherMajorWhereUniqueInput[]
    update?: TeacherMajorUpdateWithWhereUniqueWithoutMajorInput | TeacherMajorUpdateWithWhereUniqueWithoutMajorInput[]
    updateMany?: TeacherMajorUpdateManyWithWhereWithoutMajorInput | TeacherMajorUpdateManyWithWhereWithoutMajorInput[]
    deleteMany?: TeacherMajorScalarWhereInput | TeacherMajorScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentMajorUncheckedUpdateManyWithoutMajorNestedInput = {
    create?: XOR<StudentMajorCreateWithoutMajorInput, StudentMajorUncheckedCreateWithoutMajorInput> | StudentMajorCreateWithoutMajorInput[] | StudentMajorUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: StudentMajorCreateOrConnectWithoutMajorInput | StudentMajorCreateOrConnectWithoutMajorInput[]
    upsert?: StudentMajorUpsertWithWhereUniqueWithoutMajorInput | StudentMajorUpsertWithWhereUniqueWithoutMajorInput[]
    createMany?: StudentMajorCreateManyMajorInputEnvelope
    set?: StudentMajorWhereUniqueInput | StudentMajorWhereUniqueInput[]
    disconnect?: StudentMajorWhereUniqueInput | StudentMajorWhereUniqueInput[]
    delete?: StudentMajorWhereUniqueInput | StudentMajorWhereUniqueInput[]
    connect?: StudentMajorWhereUniqueInput | StudentMajorWhereUniqueInput[]
    update?: StudentMajorUpdateWithWhereUniqueWithoutMajorInput | StudentMajorUpdateWithWhereUniqueWithoutMajorInput[]
    updateMany?: StudentMajorUpdateManyWithWhereWithoutMajorInput | StudentMajorUpdateManyWithWhereWithoutMajorInput[]
    deleteMany?: StudentMajorScalarWhereInput | StudentMajorScalarWhereInput[]
  }

  export type MajorSubjectUncheckedUpdateManyWithoutMajorNestedInput = {
    create?: XOR<MajorSubjectCreateWithoutMajorInput, MajorSubjectUncheckedCreateWithoutMajorInput> | MajorSubjectCreateWithoutMajorInput[] | MajorSubjectUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: MajorSubjectCreateOrConnectWithoutMajorInput | MajorSubjectCreateOrConnectWithoutMajorInput[]
    upsert?: MajorSubjectUpsertWithWhereUniqueWithoutMajorInput | MajorSubjectUpsertWithWhereUniqueWithoutMajorInput[]
    createMany?: MajorSubjectCreateManyMajorInputEnvelope
    set?: MajorSubjectWhereUniqueInput | MajorSubjectWhereUniqueInput[]
    disconnect?: MajorSubjectWhereUniqueInput | MajorSubjectWhereUniqueInput[]
    delete?: MajorSubjectWhereUniqueInput | MajorSubjectWhereUniqueInput[]
    connect?: MajorSubjectWhereUniqueInput | MajorSubjectWhereUniqueInput[]
    update?: MajorSubjectUpdateWithWhereUniqueWithoutMajorInput | MajorSubjectUpdateWithWhereUniqueWithoutMajorInput[]
    updateMany?: MajorSubjectUpdateManyWithWhereWithoutMajorInput | MajorSubjectUpdateManyWithWhereWithoutMajorInput[]
    deleteMany?: MajorSubjectScalarWhereInput | MajorSubjectScalarWhereInput[]
  }

  export type TeacherMajorUncheckedUpdateManyWithoutMajorNestedInput = {
    create?: XOR<TeacherMajorCreateWithoutMajorInput, TeacherMajorUncheckedCreateWithoutMajorInput> | TeacherMajorCreateWithoutMajorInput[] | TeacherMajorUncheckedCreateWithoutMajorInput[]
    connectOrCreate?: TeacherMajorCreateOrConnectWithoutMajorInput | TeacherMajorCreateOrConnectWithoutMajorInput[]
    upsert?: TeacherMajorUpsertWithWhereUniqueWithoutMajorInput | TeacherMajorUpsertWithWhereUniqueWithoutMajorInput[]
    createMany?: TeacherMajorCreateManyMajorInputEnvelope
    set?: TeacherMajorWhereUniqueInput | TeacherMajorWhereUniqueInput[]
    disconnect?: TeacherMajorWhereUniqueInput | TeacherMajorWhereUniqueInput[]
    delete?: TeacherMajorWhereUniqueInput | TeacherMajorWhereUniqueInput[]
    connect?: TeacherMajorWhereUniqueInput | TeacherMajorWhereUniqueInput[]
    update?: TeacherMajorUpdateWithWhereUniqueWithoutMajorInput | TeacherMajorUpdateWithWhereUniqueWithoutMajorInput[]
    updateMany?: TeacherMajorUpdateManyWithWhereWithoutMajorInput | TeacherMajorUpdateManyWithWhereWithoutMajorInput[]
    deleteMany?: TeacherMajorScalarWhereInput | TeacherMajorScalarWhereInput[]
  }

  export type MajorSubjectCreateNestedManyWithoutSubjectInput = {
    create?: XOR<MajorSubjectCreateWithoutSubjectInput, MajorSubjectUncheckedCreateWithoutSubjectInput> | MajorSubjectCreateWithoutSubjectInput[] | MajorSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: MajorSubjectCreateOrConnectWithoutSubjectInput | MajorSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: MajorSubjectCreateManySubjectInputEnvelope
    connect?: MajorSubjectWhereUniqueInput | MajorSubjectWhereUniqueInput[]
  }

  export type StudentSubjectCreateNestedManyWithoutSubjectInput = {
    create?: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput> | StudentSubjectCreateWithoutSubjectInput[] | StudentSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutSubjectInput | StudentSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: StudentSubjectCreateManySubjectInputEnvelope
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
  }

  export type TeacherSubjectCreateNestedOneWithoutSubjectInput = {
    create?: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput>
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSubjectInput
    connect?: TeacherSubjectWhereUniqueInput
  }

  export type MajorSubjectUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<MajorSubjectCreateWithoutSubjectInput, MajorSubjectUncheckedCreateWithoutSubjectInput> | MajorSubjectCreateWithoutSubjectInput[] | MajorSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: MajorSubjectCreateOrConnectWithoutSubjectInput | MajorSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: MajorSubjectCreateManySubjectInputEnvelope
    connect?: MajorSubjectWhereUniqueInput | MajorSubjectWhereUniqueInput[]
  }

  export type StudentSubjectUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput> | StudentSubjectCreateWithoutSubjectInput[] | StudentSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutSubjectInput | StudentSubjectCreateOrConnectWithoutSubjectInput[]
    createMany?: StudentSubjectCreateManySubjectInputEnvelope
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
  }

  export type TeacherSubjectUncheckedCreateNestedOneWithoutSubjectInput = {
    create?: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput>
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSubjectInput
    connect?: TeacherSubjectWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MajorSubjectUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<MajorSubjectCreateWithoutSubjectInput, MajorSubjectUncheckedCreateWithoutSubjectInput> | MajorSubjectCreateWithoutSubjectInput[] | MajorSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: MajorSubjectCreateOrConnectWithoutSubjectInput | MajorSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: MajorSubjectUpsertWithWhereUniqueWithoutSubjectInput | MajorSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: MajorSubjectCreateManySubjectInputEnvelope
    set?: MajorSubjectWhereUniqueInput | MajorSubjectWhereUniqueInput[]
    disconnect?: MajorSubjectWhereUniqueInput | MajorSubjectWhereUniqueInput[]
    delete?: MajorSubjectWhereUniqueInput | MajorSubjectWhereUniqueInput[]
    connect?: MajorSubjectWhereUniqueInput | MajorSubjectWhereUniqueInput[]
    update?: MajorSubjectUpdateWithWhereUniqueWithoutSubjectInput | MajorSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: MajorSubjectUpdateManyWithWhereWithoutSubjectInput | MajorSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: MajorSubjectScalarWhereInput | MajorSubjectScalarWhereInput[]
  }

  export type StudentSubjectUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput> | StudentSubjectCreateWithoutSubjectInput[] | StudentSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutSubjectInput | StudentSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput | StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: StudentSubjectCreateManySubjectInputEnvelope
    set?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    disconnect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    delete?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    update?: StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput | StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: StudentSubjectUpdateManyWithWhereWithoutSubjectInput | StudentSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
  }

  export type TeacherSubjectUpdateOneWithoutSubjectNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput>
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSubjectInput
    upsert?: TeacherSubjectUpsertWithoutSubjectInput
    disconnect?: TeacherSubjectWhereInput | boolean
    delete?: TeacherSubjectWhereInput | boolean
    connect?: TeacherSubjectWhereUniqueInput
    update?: XOR<XOR<TeacherSubjectUpdateToOneWithWhereWithoutSubjectInput, TeacherSubjectUpdateWithoutSubjectInput>, TeacherSubjectUncheckedUpdateWithoutSubjectInput>
  }

  export type MajorSubjectUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<MajorSubjectCreateWithoutSubjectInput, MajorSubjectUncheckedCreateWithoutSubjectInput> | MajorSubjectCreateWithoutSubjectInput[] | MajorSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: MajorSubjectCreateOrConnectWithoutSubjectInput | MajorSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: MajorSubjectUpsertWithWhereUniqueWithoutSubjectInput | MajorSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: MajorSubjectCreateManySubjectInputEnvelope
    set?: MajorSubjectWhereUniqueInput | MajorSubjectWhereUniqueInput[]
    disconnect?: MajorSubjectWhereUniqueInput | MajorSubjectWhereUniqueInput[]
    delete?: MajorSubjectWhereUniqueInput | MajorSubjectWhereUniqueInput[]
    connect?: MajorSubjectWhereUniqueInput | MajorSubjectWhereUniqueInput[]
    update?: MajorSubjectUpdateWithWhereUniqueWithoutSubjectInput | MajorSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: MajorSubjectUpdateManyWithWhereWithoutSubjectInput | MajorSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: MajorSubjectScalarWhereInput | MajorSubjectScalarWhereInput[]
  }

  export type StudentSubjectUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput> | StudentSubjectCreateWithoutSubjectInput[] | StudentSubjectUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutSubjectInput | StudentSubjectCreateOrConnectWithoutSubjectInput[]
    upsert?: StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput | StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: StudentSubjectCreateManySubjectInputEnvelope
    set?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    disconnect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    delete?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    update?: StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput | StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: StudentSubjectUpdateManyWithWhereWithoutSubjectInput | StudentSubjectUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
  }

  export type TeacherSubjectUncheckedUpdateOneWithoutSubjectNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput>
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutSubjectInput
    upsert?: TeacherSubjectUpsertWithoutSubjectInput
    disconnect?: TeacherSubjectWhereInput | boolean
    delete?: TeacherSubjectWhereInput | boolean
    connect?: TeacherSubjectWhereUniqueInput
    update?: XOR<XOR<TeacherSubjectUpdateToOneWithWhereWithoutSubjectInput, TeacherSubjectUpdateWithoutSubjectInput>, TeacherSubjectUncheckedUpdateWithoutSubjectInput>
  }

  export type StudentMajorCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentMajorCreateWithoutStudentInput, StudentMajorUncheckedCreateWithoutStudentInput> | StudentMajorCreateWithoutStudentInput[] | StudentMajorUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentMajorCreateOrConnectWithoutStudentInput | StudentMajorCreateOrConnectWithoutStudentInput[]
    createMany?: StudentMajorCreateManyStudentInputEnvelope
    connect?: StudentMajorWhereUniqueInput | StudentMajorWhereUniqueInput[]
  }

  export type StudentSubjectCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput> | StudentSubjectCreateWithoutStudentInput[] | StudentSubjectUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutStudentInput | StudentSubjectCreateOrConnectWithoutStudentInput[]
    createMany?: StudentSubjectCreateManyStudentInputEnvelope
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
  }

  export type StudentMajorUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentMajorCreateWithoutStudentInput, StudentMajorUncheckedCreateWithoutStudentInput> | StudentMajorCreateWithoutStudentInput[] | StudentMajorUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentMajorCreateOrConnectWithoutStudentInput | StudentMajorCreateOrConnectWithoutStudentInput[]
    createMany?: StudentMajorCreateManyStudentInputEnvelope
    connect?: StudentMajorWhereUniqueInput | StudentMajorWhereUniqueInput[]
  }

  export type StudentSubjectUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput> | StudentSubjectCreateWithoutStudentInput[] | StudentSubjectUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutStudentInput | StudentSubjectCreateOrConnectWithoutStudentInput[]
    createMany?: StudentSubjectCreateManyStudentInputEnvelope
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
  }

  export type StudentMajorUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentMajorCreateWithoutStudentInput, StudentMajorUncheckedCreateWithoutStudentInput> | StudentMajorCreateWithoutStudentInput[] | StudentMajorUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentMajorCreateOrConnectWithoutStudentInput | StudentMajorCreateOrConnectWithoutStudentInput[]
    upsert?: StudentMajorUpsertWithWhereUniqueWithoutStudentInput | StudentMajorUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentMajorCreateManyStudentInputEnvelope
    set?: StudentMajorWhereUniqueInput | StudentMajorWhereUniqueInput[]
    disconnect?: StudentMajorWhereUniqueInput | StudentMajorWhereUniqueInput[]
    delete?: StudentMajorWhereUniqueInput | StudentMajorWhereUniqueInput[]
    connect?: StudentMajorWhereUniqueInput | StudentMajorWhereUniqueInput[]
    update?: StudentMajorUpdateWithWhereUniqueWithoutStudentInput | StudentMajorUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentMajorUpdateManyWithWhereWithoutStudentInput | StudentMajorUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentMajorScalarWhereInput | StudentMajorScalarWhereInput[]
  }

  export type StudentSubjectUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput> | StudentSubjectCreateWithoutStudentInput[] | StudentSubjectUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutStudentInput | StudentSubjectCreateOrConnectWithoutStudentInput[]
    upsert?: StudentSubjectUpsertWithWhereUniqueWithoutStudentInput | StudentSubjectUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentSubjectCreateManyStudentInputEnvelope
    set?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    disconnect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    delete?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    update?: StudentSubjectUpdateWithWhereUniqueWithoutStudentInput | StudentSubjectUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentSubjectUpdateManyWithWhereWithoutStudentInput | StudentSubjectUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
  }

  export type StudentMajorUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentMajorCreateWithoutStudentInput, StudentMajorUncheckedCreateWithoutStudentInput> | StudentMajorCreateWithoutStudentInput[] | StudentMajorUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentMajorCreateOrConnectWithoutStudentInput | StudentMajorCreateOrConnectWithoutStudentInput[]
    upsert?: StudentMajorUpsertWithWhereUniqueWithoutStudentInput | StudentMajorUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentMajorCreateManyStudentInputEnvelope
    set?: StudentMajorWhereUniqueInput | StudentMajorWhereUniqueInput[]
    disconnect?: StudentMajorWhereUniqueInput | StudentMajorWhereUniqueInput[]
    delete?: StudentMajorWhereUniqueInput | StudentMajorWhereUniqueInput[]
    connect?: StudentMajorWhereUniqueInput | StudentMajorWhereUniqueInput[]
    update?: StudentMajorUpdateWithWhereUniqueWithoutStudentInput | StudentMajorUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentMajorUpdateManyWithWhereWithoutStudentInput | StudentMajorUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentMajorScalarWhereInput | StudentMajorScalarWhereInput[]
  }

  export type StudentSubjectUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput> | StudentSubjectCreateWithoutStudentInput[] | StudentSubjectUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentSubjectCreateOrConnectWithoutStudentInput | StudentSubjectCreateOrConnectWithoutStudentInput[]
    upsert?: StudentSubjectUpsertWithWhereUniqueWithoutStudentInput | StudentSubjectUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentSubjectCreateManyStudentInputEnvelope
    set?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    disconnect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    delete?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    connect?: StudentSubjectWhereUniqueInput | StudentSubjectWhereUniqueInput[]
    update?: StudentSubjectUpdateWithWhereUniqueWithoutStudentInput | StudentSubjectUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentSubjectUpdateManyWithWhereWithoutStudentInput | StudentSubjectUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
  }

  export type TeacherMajorCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherMajorCreateWithoutTeacherInput, TeacherMajorUncheckedCreateWithoutTeacherInput> | TeacherMajorCreateWithoutTeacherInput[] | TeacherMajorUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherMajorCreateOrConnectWithoutTeacherInput | TeacherMajorCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherMajorCreateManyTeacherInputEnvelope
    connect?: TeacherMajorWhereUniqueInput | TeacherMajorWhereUniqueInput[]
  }

  export type TeacherSubjectCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput> | TeacherSubjectCreateWithoutTeacherInput[] | TeacherSubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutTeacherInput | TeacherSubjectCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherSubjectCreateManyTeacherInputEnvelope
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
  }

  export type TeacherMajorUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherMajorCreateWithoutTeacherInput, TeacherMajorUncheckedCreateWithoutTeacherInput> | TeacherMajorCreateWithoutTeacherInput[] | TeacherMajorUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherMajorCreateOrConnectWithoutTeacherInput | TeacherMajorCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherMajorCreateManyTeacherInputEnvelope
    connect?: TeacherMajorWhereUniqueInput | TeacherMajorWhereUniqueInput[]
  }

  export type TeacherSubjectUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput> | TeacherSubjectCreateWithoutTeacherInput[] | TeacherSubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutTeacherInput | TeacherSubjectCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherSubjectCreateManyTeacherInputEnvelope
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
  }

  export type TeacherMajorUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherMajorCreateWithoutTeacherInput, TeacherMajorUncheckedCreateWithoutTeacherInput> | TeacherMajorCreateWithoutTeacherInput[] | TeacherMajorUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherMajorCreateOrConnectWithoutTeacherInput | TeacherMajorCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherMajorUpsertWithWhereUniqueWithoutTeacherInput | TeacherMajorUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherMajorCreateManyTeacherInputEnvelope
    set?: TeacherMajorWhereUniqueInput | TeacherMajorWhereUniqueInput[]
    disconnect?: TeacherMajorWhereUniqueInput | TeacherMajorWhereUniqueInput[]
    delete?: TeacherMajorWhereUniqueInput | TeacherMajorWhereUniqueInput[]
    connect?: TeacherMajorWhereUniqueInput | TeacherMajorWhereUniqueInput[]
    update?: TeacherMajorUpdateWithWhereUniqueWithoutTeacherInput | TeacherMajorUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherMajorUpdateManyWithWhereWithoutTeacherInput | TeacherMajorUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherMajorScalarWhereInput | TeacherMajorScalarWhereInput[]
  }

  export type TeacherSubjectUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput> | TeacherSubjectCreateWithoutTeacherInput[] | TeacherSubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutTeacherInput | TeacherSubjectCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput | TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherSubjectCreateManyTeacherInputEnvelope
    set?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    disconnect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    delete?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    update?: TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput | TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherSubjectUpdateManyWithWhereWithoutTeacherInput | TeacherSubjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
  }

  export type TeacherMajorUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherMajorCreateWithoutTeacherInput, TeacherMajorUncheckedCreateWithoutTeacherInput> | TeacherMajorCreateWithoutTeacherInput[] | TeacherMajorUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherMajorCreateOrConnectWithoutTeacherInput | TeacherMajorCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherMajorUpsertWithWhereUniqueWithoutTeacherInput | TeacherMajorUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherMajorCreateManyTeacherInputEnvelope
    set?: TeacherMajorWhereUniqueInput | TeacherMajorWhereUniqueInput[]
    disconnect?: TeacherMajorWhereUniqueInput | TeacherMajorWhereUniqueInput[]
    delete?: TeacherMajorWhereUniqueInput | TeacherMajorWhereUniqueInput[]
    connect?: TeacherMajorWhereUniqueInput | TeacherMajorWhereUniqueInput[]
    update?: TeacherMajorUpdateWithWhereUniqueWithoutTeacherInput | TeacherMajorUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherMajorUpdateManyWithWhereWithoutTeacherInput | TeacherMajorUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherMajorScalarWhereInput | TeacherMajorScalarWhereInput[]
  }

  export type TeacherSubjectUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput> | TeacherSubjectCreateWithoutTeacherInput[] | TeacherSubjectUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherSubjectCreateOrConnectWithoutTeacherInput | TeacherSubjectCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput | TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherSubjectCreateManyTeacherInputEnvelope
    set?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    disconnect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    delete?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    connect?: TeacherSubjectWhereUniqueInput | TeacherSubjectWhereUniqueInput[]
    update?: TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput | TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherSubjectUpdateManyWithWhereWithoutTeacherInput | TeacherSubjectUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutMajorsInput = {
    create?: XOR<StudentCreateWithoutMajorsInput, StudentUncheckedCreateWithoutMajorsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutMajorsInput
    connect?: StudentWhereUniqueInput
  }

  export type MajorCreateNestedOneWithoutStudentsInput = {
    create?: XOR<MajorCreateWithoutStudentsInput, MajorUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: MajorCreateOrConnectWithoutStudentsInput
    connect?: MajorWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutMajorsNestedInput = {
    create?: XOR<StudentCreateWithoutMajorsInput, StudentUncheckedCreateWithoutMajorsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutMajorsInput
    upsert?: StudentUpsertWithoutMajorsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutMajorsInput, StudentUpdateWithoutMajorsInput>, StudentUncheckedUpdateWithoutMajorsInput>
  }

  export type MajorUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<MajorCreateWithoutStudentsInput, MajorUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: MajorCreateOrConnectWithoutStudentsInput
    upsert?: MajorUpsertWithoutStudentsInput
    connect?: MajorWhereUniqueInput
    update?: XOR<XOR<MajorUpdateToOneWithWhereWithoutStudentsInput, MajorUpdateWithoutStudentsInput>, MajorUncheckedUpdateWithoutStudentsInput>
  }

  export type StudentCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<StudentCreateWithoutSubjectsInput, StudentUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSubjectsInput
    connect?: StudentWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutStudentsInput = {
    create?: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutStudentsInput
    connect?: SubjectWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<StudentCreateWithoutSubjectsInput, StudentUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSubjectsInput
    upsert?: StudentUpsertWithoutSubjectsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutSubjectsInput, StudentUpdateWithoutSubjectsInput>, StudentUncheckedUpdateWithoutSubjectsInput>
  }

  export type SubjectUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutStudentsInput
    upsert?: SubjectUpsertWithoutStudentsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutStudentsInput, SubjectUpdateWithoutStudentsInput>, SubjectUncheckedUpdateWithoutStudentsInput>
  }

  export type MajorCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<MajorCreateWithoutSubjectsInput, MajorUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: MajorCreateOrConnectWithoutSubjectsInput
    connect?: MajorWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutMajorsInput = {
    create?: XOR<SubjectCreateWithoutMajorsInput, SubjectUncheckedCreateWithoutMajorsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutMajorsInput
    connect?: SubjectWhereUniqueInput
  }

  export type MajorUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<MajorCreateWithoutSubjectsInput, MajorUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: MajorCreateOrConnectWithoutSubjectsInput
    upsert?: MajorUpsertWithoutSubjectsInput
    connect?: MajorWhereUniqueInput
    update?: XOR<XOR<MajorUpdateToOneWithWhereWithoutSubjectsInput, MajorUpdateWithoutSubjectsInput>, MajorUncheckedUpdateWithoutSubjectsInput>
  }

  export type SubjectUpdateOneRequiredWithoutMajorsNestedInput = {
    create?: XOR<SubjectCreateWithoutMajorsInput, SubjectUncheckedCreateWithoutMajorsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutMajorsInput
    upsert?: SubjectUpsertWithoutMajorsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutMajorsInput, SubjectUpdateWithoutMajorsInput>, SubjectUncheckedUpdateWithoutMajorsInput>
  }

  export type TeacherCreateNestedOneWithoutMajorsInput = {
    create?: XOR<TeacherCreateWithoutMajorsInput, TeacherUncheckedCreateWithoutMajorsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutMajorsInput
    connect?: TeacherWhereUniqueInput
  }

  export type MajorCreateNestedOneWithoutTeachersInput = {
    create?: XOR<MajorCreateWithoutTeachersInput, MajorUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: MajorCreateOrConnectWithoutTeachersInput
    connect?: MajorWhereUniqueInput
  }

  export type TeacherUpdateOneRequiredWithoutMajorsNestedInput = {
    create?: XOR<TeacherCreateWithoutMajorsInput, TeacherUncheckedCreateWithoutMajorsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutMajorsInput
    upsert?: TeacherUpsertWithoutMajorsInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutMajorsInput, TeacherUpdateWithoutMajorsInput>, TeacherUncheckedUpdateWithoutMajorsInput>
  }

  export type MajorUpdateOneRequiredWithoutTeachersNestedInput = {
    create?: XOR<MajorCreateWithoutTeachersInput, MajorUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: MajorCreateOrConnectWithoutTeachersInput
    upsert?: MajorUpsertWithoutTeachersInput
    connect?: MajorWhereUniqueInput
    update?: XOR<XOR<MajorUpdateToOneWithWhereWithoutTeachersInput, MajorUpdateWithoutTeachersInput>, MajorUncheckedUpdateWithoutTeachersInput>
  }

  export type TeacherCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSubjectsInput
    connect?: TeacherWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutTeachersInput = {
    create?: XOR<SubjectCreateWithoutTeachersInput, SubjectUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTeachersInput
    connect?: SubjectWhereUniqueInput
  }

  export type TeacherUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutSubjectsInput
    upsert?: TeacherUpsertWithoutSubjectsInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutSubjectsInput, TeacherUpdateWithoutSubjectsInput>, TeacherUncheckedUpdateWithoutSubjectsInput>
  }

  export type SubjectUpdateOneRequiredWithoutTeachersNestedInput = {
    create?: XOR<SubjectCreateWithoutTeachersInput, SubjectUncheckedCreateWithoutTeachersInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTeachersInput
    upsert?: SubjectUpsertWithoutTeachersInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutTeachersInput, SubjectUpdateWithoutTeachersInput>, SubjectUncheckedUpdateWithoutTeachersInput>
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

  export type StudentMajorCreateWithoutMajorInput = {
    student: StudentCreateNestedOneWithoutMajorsInput
  }

  export type StudentMajorUncheckedCreateWithoutMajorInput = {
    studentId: number
  }

  export type StudentMajorCreateOrConnectWithoutMajorInput = {
    where: StudentMajorWhereUniqueInput
    create: XOR<StudentMajorCreateWithoutMajorInput, StudentMajorUncheckedCreateWithoutMajorInput>
  }

  export type StudentMajorCreateManyMajorInputEnvelope = {
    data: StudentMajorCreateManyMajorInput | StudentMajorCreateManyMajorInput[]
    skipDuplicates?: boolean
  }

  export type MajorSubjectCreateWithoutMajorInput = {
    subject: SubjectCreateNestedOneWithoutMajorsInput
  }

  export type MajorSubjectUncheckedCreateWithoutMajorInput = {
    subjectId: number
  }

  export type MajorSubjectCreateOrConnectWithoutMajorInput = {
    where: MajorSubjectWhereUniqueInput
    create: XOR<MajorSubjectCreateWithoutMajorInput, MajorSubjectUncheckedCreateWithoutMajorInput>
  }

  export type MajorSubjectCreateManyMajorInputEnvelope = {
    data: MajorSubjectCreateManyMajorInput | MajorSubjectCreateManyMajorInput[]
    skipDuplicates?: boolean
  }

  export type TeacherMajorCreateWithoutMajorInput = {
    teacher: TeacherCreateNestedOneWithoutMajorsInput
  }

  export type TeacherMajorUncheckedCreateWithoutMajorInput = {
    teacherId: number
  }

  export type TeacherMajorCreateOrConnectWithoutMajorInput = {
    where: TeacherMajorWhereUniqueInput
    create: XOR<TeacherMajorCreateWithoutMajorInput, TeacherMajorUncheckedCreateWithoutMajorInput>
  }

  export type TeacherMajorCreateManyMajorInputEnvelope = {
    data: TeacherMajorCreateManyMajorInput | TeacherMajorCreateManyMajorInput[]
    skipDuplicates?: boolean
  }

  export type StudentMajorUpsertWithWhereUniqueWithoutMajorInput = {
    where: StudentMajorWhereUniqueInput
    update: XOR<StudentMajorUpdateWithoutMajorInput, StudentMajorUncheckedUpdateWithoutMajorInput>
    create: XOR<StudentMajorCreateWithoutMajorInput, StudentMajorUncheckedCreateWithoutMajorInput>
  }

  export type StudentMajorUpdateWithWhereUniqueWithoutMajorInput = {
    where: StudentMajorWhereUniqueInput
    data: XOR<StudentMajorUpdateWithoutMajorInput, StudentMajorUncheckedUpdateWithoutMajorInput>
  }

  export type StudentMajorUpdateManyWithWhereWithoutMajorInput = {
    where: StudentMajorScalarWhereInput
    data: XOR<StudentMajorUpdateManyMutationInput, StudentMajorUncheckedUpdateManyWithoutMajorInput>
  }

  export type StudentMajorScalarWhereInput = {
    AND?: StudentMajorScalarWhereInput | StudentMajorScalarWhereInput[]
    OR?: StudentMajorScalarWhereInput[]
    NOT?: StudentMajorScalarWhereInput | StudentMajorScalarWhereInput[]
    studentId?: IntFilter<"StudentMajor"> | number
    majorId?: IntFilter<"StudentMajor"> | number
  }

  export type MajorSubjectUpsertWithWhereUniqueWithoutMajorInput = {
    where: MajorSubjectWhereUniqueInput
    update: XOR<MajorSubjectUpdateWithoutMajorInput, MajorSubjectUncheckedUpdateWithoutMajorInput>
    create: XOR<MajorSubjectCreateWithoutMajorInput, MajorSubjectUncheckedCreateWithoutMajorInput>
  }

  export type MajorSubjectUpdateWithWhereUniqueWithoutMajorInput = {
    where: MajorSubjectWhereUniqueInput
    data: XOR<MajorSubjectUpdateWithoutMajorInput, MajorSubjectUncheckedUpdateWithoutMajorInput>
  }

  export type MajorSubjectUpdateManyWithWhereWithoutMajorInput = {
    where: MajorSubjectScalarWhereInput
    data: XOR<MajorSubjectUpdateManyMutationInput, MajorSubjectUncheckedUpdateManyWithoutMajorInput>
  }

  export type MajorSubjectScalarWhereInput = {
    AND?: MajorSubjectScalarWhereInput | MajorSubjectScalarWhereInput[]
    OR?: MajorSubjectScalarWhereInput[]
    NOT?: MajorSubjectScalarWhereInput | MajorSubjectScalarWhereInput[]
    majorId?: IntFilter<"MajorSubject"> | number
    subjectId?: IntFilter<"MajorSubject"> | number
  }

  export type TeacherMajorUpsertWithWhereUniqueWithoutMajorInput = {
    where: TeacherMajorWhereUniqueInput
    update: XOR<TeacherMajorUpdateWithoutMajorInput, TeacherMajorUncheckedUpdateWithoutMajorInput>
    create: XOR<TeacherMajorCreateWithoutMajorInput, TeacherMajorUncheckedCreateWithoutMajorInput>
  }

  export type TeacherMajorUpdateWithWhereUniqueWithoutMajorInput = {
    where: TeacherMajorWhereUniqueInput
    data: XOR<TeacherMajorUpdateWithoutMajorInput, TeacherMajorUncheckedUpdateWithoutMajorInput>
  }

  export type TeacherMajorUpdateManyWithWhereWithoutMajorInput = {
    where: TeacherMajorScalarWhereInput
    data: XOR<TeacherMajorUpdateManyMutationInput, TeacherMajorUncheckedUpdateManyWithoutMajorInput>
  }

  export type TeacherMajorScalarWhereInput = {
    AND?: TeacherMajorScalarWhereInput | TeacherMajorScalarWhereInput[]
    OR?: TeacherMajorScalarWhereInput[]
    NOT?: TeacherMajorScalarWhereInput | TeacherMajorScalarWhereInput[]
    teacherId?: IntFilter<"TeacherMajor"> | number
    majorId?: IntFilter<"TeacherMajor"> | number
  }

  export type MajorSubjectCreateWithoutSubjectInput = {
    major: MajorCreateNestedOneWithoutSubjectsInput
  }

  export type MajorSubjectUncheckedCreateWithoutSubjectInput = {
    majorId: number
  }

  export type MajorSubjectCreateOrConnectWithoutSubjectInput = {
    where: MajorSubjectWhereUniqueInput
    create: XOR<MajorSubjectCreateWithoutSubjectInput, MajorSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type MajorSubjectCreateManySubjectInputEnvelope = {
    data: MajorSubjectCreateManySubjectInput | MajorSubjectCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type StudentSubjectCreateWithoutSubjectInput = {
    student: StudentCreateNestedOneWithoutSubjectsInput
  }

  export type StudentSubjectUncheckedCreateWithoutSubjectInput = {
    studentId: number
  }

  export type StudentSubjectCreateOrConnectWithoutSubjectInput = {
    where: StudentSubjectWhereUniqueInput
    create: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type StudentSubjectCreateManySubjectInputEnvelope = {
    data: StudentSubjectCreateManySubjectInput | StudentSubjectCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type TeacherSubjectCreateWithoutSubjectInput = {
    teacher: TeacherCreateNestedOneWithoutSubjectsInput
  }

  export type TeacherSubjectUncheckedCreateWithoutSubjectInput = {
    teacherId: number
  }

  export type TeacherSubjectCreateOrConnectWithoutSubjectInput = {
    where: TeacherSubjectWhereUniqueInput
    create: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type MajorSubjectUpsertWithWhereUniqueWithoutSubjectInput = {
    where: MajorSubjectWhereUniqueInput
    update: XOR<MajorSubjectUpdateWithoutSubjectInput, MajorSubjectUncheckedUpdateWithoutSubjectInput>
    create: XOR<MajorSubjectCreateWithoutSubjectInput, MajorSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type MajorSubjectUpdateWithWhereUniqueWithoutSubjectInput = {
    where: MajorSubjectWhereUniqueInput
    data: XOR<MajorSubjectUpdateWithoutSubjectInput, MajorSubjectUncheckedUpdateWithoutSubjectInput>
  }

  export type MajorSubjectUpdateManyWithWhereWithoutSubjectInput = {
    where: MajorSubjectScalarWhereInput
    data: XOR<MajorSubjectUpdateManyMutationInput, MajorSubjectUncheckedUpdateManyWithoutSubjectInput>
  }

  export type StudentSubjectUpsertWithWhereUniqueWithoutSubjectInput = {
    where: StudentSubjectWhereUniqueInput
    update: XOR<StudentSubjectUpdateWithoutSubjectInput, StudentSubjectUncheckedUpdateWithoutSubjectInput>
    create: XOR<StudentSubjectCreateWithoutSubjectInput, StudentSubjectUncheckedCreateWithoutSubjectInput>
  }

  export type StudentSubjectUpdateWithWhereUniqueWithoutSubjectInput = {
    where: StudentSubjectWhereUniqueInput
    data: XOR<StudentSubjectUpdateWithoutSubjectInput, StudentSubjectUncheckedUpdateWithoutSubjectInput>
  }

  export type StudentSubjectUpdateManyWithWhereWithoutSubjectInput = {
    where: StudentSubjectScalarWhereInput
    data: XOR<StudentSubjectUpdateManyMutationInput, StudentSubjectUncheckedUpdateManyWithoutSubjectInput>
  }

  export type StudentSubjectScalarWhereInput = {
    AND?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
    OR?: StudentSubjectScalarWhereInput[]
    NOT?: StudentSubjectScalarWhereInput | StudentSubjectScalarWhereInput[]
    studentId?: IntFilter<"StudentSubject"> | number
    subjectId?: IntFilter<"StudentSubject"> | number
  }

  export type TeacherSubjectUpsertWithoutSubjectInput = {
    update: XOR<TeacherSubjectUpdateWithoutSubjectInput, TeacherSubjectUncheckedUpdateWithoutSubjectInput>
    create: XOR<TeacherSubjectCreateWithoutSubjectInput, TeacherSubjectUncheckedCreateWithoutSubjectInput>
    where?: TeacherSubjectWhereInput
  }

  export type TeacherSubjectUpdateToOneWithWhereWithoutSubjectInput = {
    where?: TeacherSubjectWhereInput
    data: XOR<TeacherSubjectUpdateWithoutSubjectInput, TeacherSubjectUncheckedUpdateWithoutSubjectInput>
  }

  export type TeacherSubjectUpdateWithoutSubjectInput = {
    teacher?: TeacherUpdateOneRequiredWithoutSubjectsNestedInput
  }

  export type TeacherSubjectUncheckedUpdateWithoutSubjectInput = {
    teacherId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentMajorCreateWithoutStudentInput = {
    major: MajorCreateNestedOneWithoutStudentsInput
  }

  export type StudentMajorUncheckedCreateWithoutStudentInput = {
    majorId: number
  }

  export type StudentMajorCreateOrConnectWithoutStudentInput = {
    where: StudentMajorWhereUniqueInput
    create: XOR<StudentMajorCreateWithoutStudentInput, StudentMajorUncheckedCreateWithoutStudentInput>
  }

  export type StudentMajorCreateManyStudentInputEnvelope = {
    data: StudentMajorCreateManyStudentInput | StudentMajorCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type StudentSubjectCreateWithoutStudentInput = {
    subject: SubjectCreateNestedOneWithoutStudentsInput
  }

  export type StudentSubjectUncheckedCreateWithoutStudentInput = {
    subjectId: number
  }

  export type StudentSubjectCreateOrConnectWithoutStudentInput = {
    where: StudentSubjectWhereUniqueInput
    create: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput>
  }

  export type StudentSubjectCreateManyStudentInputEnvelope = {
    data: StudentSubjectCreateManyStudentInput | StudentSubjectCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type StudentMajorUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentMajorWhereUniqueInput
    update: XOR<StudentMajorUpdateWithoutStudentInput, StudentMajorUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentMajorCreateWithoutStudentInput, StudentMajorUncheckedCreateWithoutStudentInput>
  }

  export type StudentMajorUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentMajorWhereUniqueInput
    data: XOR<StudentMajorUpdateWithoutStudentInput, StudentMajorUncheckedUpdateWithoutStudentInput>
  }

  export type StudentMajorUpdateManyWithWhereWithoutStudentInput = {
    where: StudentMajorScalarWhereInput
    data: XOR<StudentMajorUpdateManyMutationInput, StudentMajorUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentSubjectUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentSubjectWhereUniqueInput
    update: XOR<StudentSubjectUpdateWithoutStudentInput, StudentSubjectUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentSubjectCreateWithoutStudentInput, StudentSubjectUncheckedCreateWithoutStudentInput>
  }

  export type StudentSubjectUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentSubjectWhereUniqueInput
    data: XOR<StudentSubjectUpdateWithoutStudentInput, StudentSubjectUncheckedUpdateWithoutStudentInput>
  }

  export type StudentSubjectUpdateManyWithWhereWithoutStudentInput = {
    where: StudentSubjectScalarWhereInput
    data: XOR<StudentSubjectUpdateManyMutationInput, StudentSubjectUncheckedUpdateManyWithoutStudentInput>
  }

  export type TeacherMajorCreateWithoutTeacherInput = {
    major: MajorCreateNestedOneWithoutTeachersInput
  }

  export type TeacherMajorUncheckedCreateWithoutTeacherInput = {
    majorId: number
  }

  export type TeacherMajorCreateOrConnectWithoutTeacherInput = {
    where: TeacherMajorWhereUniqueInput
    create: XOR<TeacherMajorCreateWithoutTeacherInput, TeacherMajorUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherMajorCreateManyTeacherInputEnvelope = {
    data: TeacherMajorCreateManyTeacherInput | TeacherMajorCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type TeacherSubjectCreateWithoutTeacherInput = {
    subject: SubjectCreateNestedOneWithoutTeachersInput
  }

  export type TeacherSubjectUncheckedCreateWithoutTeacherInput = {
    subjectId: number
  }

  export type TeacherSubjectCreateOrConnectWithoutTeacherInput = {
    where: TeacherSubjectWhereUniqueInput
    create: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherSubjectCreateManyTeacherInputEnvelope = {
    data: TeacherSubjectCreateManyTeacherInput | TeacherSubjectCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type TeacherMajorUpsertWithWhereUniqueWithoutTeacherInput = {
    where: TeacherMajorWhereUniqueInput
    update: XOR<TeacherMajorUpdateWithoutTeacherInput, TeacherMajorUncheckedUpdateWithoutTeacherInput>
    create: XOR<TeacherMajorCreateWithoutTeacherInput, TeacherMajorUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherMajorUpdateWithWhereUniqueWithoutTeacherInput = {
    where: TeacherMajorWhereUniqueInput
    data: XOR<TeacherMajorUpdateWithoutTeacherInput, TeacherMajorUncheckedUpdateWithoutTeacherInput>
  }

  export type TeacherMajorUpdateManyWithWhereWithoutTeacherInput = {
    where: TeacherMajorScalarWhereInput
    data: XOR<TeacherMajorUpdateManyMutationInput, TeacherMajorUncheckedUpdateManyWithoutTeacherInput>
  }

  export type TeacherSubjectUpsertWithWhereUniqueWithoutTeacherInput = {
    where: TeacherSubjectWhereUniqueInput
    update: XOR<TeacherSubjectUpdateWithoutTeacherInput, TeacherSubjectUncheckedUpdateWithoutTeacherInput>
    create: XOR<TeacherSubjectCreateWithoutTeacherInput, TeacherSubjectUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherSubjectUpdateWithWhereUniqueWithoutTeacherInput = {
    where: TeacherSubjectWhereUniqueInput
    data: XOR<TeacherSubjectUpdateWithoutTeacherInput, TeacherSubjectUncheckedUpdateWithoutTeacherInput>
  }

  export type TeacherSubjectUpdateManyWithWhereWithoutTeacherInput = {
    where: TeacherSubjectScalarWhereInput
    data: XOR<TeacherSubjectUpdateManyMutationInput, TeacherSubjectUncheckedUpdateManyWithoutTeacherInput>
  }

  export type TeacherSubjectScalarWhereInput = {
    AND?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
    OR?: TeacherSubjectScalarWhereInput[]
    NOT?: TeacherSubjectScalarWhereInput | TeacherSubjectScalarWhereInput[]
    teacherId?: IntFilter<"TeacherSubject"> | number
    subjectId?: IntFilter<"TeacherSubject"> | number
  }

  export type StudentCreateWithoutMajorsInput = {
    name: string
    subjects?: StudentSubjectCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutMajorsInput = {
    id?: number
    name: string
    subjects?: StudentSubjectUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutMajorsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutMajorsInput, StudentUncheckedCreateWithoutMajorsInput>
  }

  export type MajorCreateWithoutStudentsInput = {
    name: string
    description?: string | null
    subjects?: MajorSubjectCreateNestedManyWithoutMajorInput
    teachers?: TeacherMajorCreateNestedManyWithoutMajorInput
  }

  export type MajorUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    description?: string | null
    subjects?: MajorSubjectUncheckedCreateNestedManyWithoutMajorInput
    teachers?: TeacherMajorUncheckedCreateNestedManyWithoutMajorInput
  }

  export type MajorCreateOrConnectWithoutStudentsInput = {
    where: MajorWhereUniqueInput
    create: XOR<MajorCreateWithoutStudentsInput, MajorUncheckedCreateWithoutStudentsInput>
  }

  export type StudentUpsertWithoutMajorsInput = {
    update: XOR<StudentUpdateWithoutMajorsInput, StudentUncheckedUpdateWithoutMajorsInput>
    create: XOR<StudentCreateWithoutMajorsInput, StudentUncheckedCreateWithoutMajorsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutMajorsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutMajorsInput, StudentUncheckedUpdateWithoutMajorsInput>
  }

  export type StudentUpdateWithoutMajorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    subjects?: StudentSubjectUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutMajorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subjects?: StudentSubjectUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type MajorUpsertWithoutStudentsInput = {
    update: XOR<MajorUpdateWithoutStudentsInput, MajorUncheckedUpdateWithoutStudentsInput>
    create: XOR<MajorCreateWithoutStudentsInput, MajorUncheckedCreateWithoutStudentsInput>
    where?: MajorWhereInput
  }

  export type MajorUpdateToOneWithWhereWithoutStudentsInput = {
    where?: MajorWhereInput
    data: XOR<MajorUpdateWithoutStudentsInput, MajorUncheckedUpdateWithoutStudentsInput>
  }

  export type MajorUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: MajorSubjectUpdateManyWithoutMajorNestedInput
    teachers?: TeacherMajorUpdateManyWithoutMajorNestedInput
  }

  export type MajorUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subjects?: MajorSubjectUncheckedUpdateManyWithoutMajorNestedInput
    teachers?: TeacherMajorUncheckedUpdateManyWithoutMajorNestedInput
  }

  export type StudentCreateWithoutSubjectsInput = {
    name: string
    majors?: StudentMajorCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSubjectsInput = {
    id?: number
    name: string
    majors?: StudentMajorUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSubjectsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSubjectsInput, StudentUncheckedCreateWithoutSubjectsInput>
  }

  export type SubjectCreateWithoutStudentsInput = {
    name: string
    description?: string | null
    teacherId?: number | null
    majors?: MajorSubjectCreateNestedManyWithoutSubjectInput
    teachers?: TeacherSubjectCreateNestedOneWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutStudentsInput = {
    id?: number
    name: string
    description?: string | null
    teacherId?: number | null
    majors?: MajorSubjectUncheckedCreateNestedManyWithoutSubjectInput
    teachers?: TeacherSubjectUncheckedCreateNestedOneWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutStudentsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput>
  }

  export type StudentUpsertWithoutSubjectsInput = {
    update: XOR<StudentUpdateWithoutSubjectsInput, StudentUncheckedUpdateWithoutSubjectsInput>
    create: XOR<StudentCreateWithoutSubjectsInput, StudentUncheckedCreateWithoutSubjectsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutSubjectsInput, StudentUncheckedUpdateWithoutSubjectsInput>
  }

  export type StudentUpdateWithoutSubjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    majors?: StudentMajorUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    majors?: StudentMajorUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type SubjectUpsertWithoutStudentsInput = {
    update: XOR<SubjectUpdateWithoutStudentsInput, SubjectUncheckedUpdateWithoutStudentsInput>
    create: XOR<SubjectCreateWithoutStudentsInput, SubjectUncheckedCreateWithoutStudentsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutStudentsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutStudentsInput, SubjectUncheckedUpdateWithoutStudentsInput>
  }

  export type SubjectUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    majors?: MajorSubjectUpdateManyWithoutSubjectNestedInput
    teachers?: TeacherSubjectUpdateOneWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutStudentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    majors?: MajorSubjectUncheckedUpdateManyWithoutSubjectNestedInput
    teachers?: TeacherSubjectUncheckedUpdateOneWithoutSubjectNestedInput
  }

  export type MajorCreateWithoutSubjectsInput = {
    name: string
    description?: string | null
    students?: StudentMajorCreateNestedManyWithoutMajorInput
    teachers?: TeacherMajorCreateNestedManyWithoutMajorInput
  }

  export type MajorUncheckedCreateWithoutSubjectsInput = {
    id?: number
    name: string
    description?: string | null
    students?: StudentMajorUncheckedCreateNestedManyWithoutMajorInput
    teachers?: TeacherMajorUncheckedCreateNestedManyWithoutMajorInput
  }

  export type MajorCreateOrConnectWithoutSubjectsInput = {
    where: MajorWhereUniqueInput
    create: XOR<MajorCreateWithoutSubjectsInput, MajorUncheckedCreateWithoutSubjectsInput>
  }

  export type SubjectCreateWithoutMajorsInput = {
    name: string
    description?: string | null
    teacherId?: number | null
    students?: StudentSubjectCreateNestedManyWithoutSubjectInput
    teachers?: TeacherSubjectCreateNestedOneWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutMajorsInput = {
    id?: number
    name: string
    description?: string | null
    teacherId?: number | null
    students?: StudentSubjectUncheckedCreateNestedManyWithoutSubjectInput
    teachers?: TeacherSubjectUncheckedCreateNestedOneWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutMajorsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutMajorsInput, SubjectUncheckedCreateWithoutMajorsInput>
  }

  export type MajorUpsertWithoutSubjectsInput = {
    update: XOR<MajorUpdateWithoutSubjectsInput, MajorUncheckedUpdateWithoutSubjectsInput>
    create: XOR<MajorCreateWithoutSubjectsInput, MajorUncheckedCreateWithoutSubjectsInput>
    where?: MajorWhereInput
  }

  export type MajorUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: MajorWhereInput
    data: XOR<MajorUpdateWithoutSubjectsInput, MajorUncheckedUpdateWithoutSubjectsInput>
  }

  export type MajorUpdateWithoutSubjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    students?: StudentMajorUpdateManyWithoutMajorNestedInput
    teachers?: TeacherMajorUpdateManyWithoutMajorNestedInput
  }

  export type MajorUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    students?: StudentMajorUncheckedUpdateManyWithoutMajorNestedInput
    teachers?: TeacherMajorUncheckedUpdateManyWithoutMajorNestedInput
  }

  export type SubjectUpsertWithoutMajorsInput = {
    update: XOR<SubjectUpdateWithoutMajorsInput, SubjectUncheckedUpdateWithoutMajorsInput>
    create: XOR<SubjectCreateWithoutMajorsInput, SubjectUncheckedCreateWithoutMajorsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutMajorsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutMajorsInput, SubjectUncheckedUpdateWithoutMajorsInput>
  }

  export type SubjectUpdateWithoutMajorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    students?: StudentSubjectUpdateManyWithoutSubjectNestedInput
    teachers?: TeacherSubjectUpdateOneWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutMajorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    students?: StudentSubjectUncheckedUpdateManyWithoutSubjectNestedInput
    teachers?: TeacherSubjectUncheckedUpdateOneWithoutSubjectNestedInput
  }

  export type TeacherCreateWithoutMajorsInput = {
    name: string
    subjects?: TeacherSubjectCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutMajorsInput = {
    id?: number
    name: string
    subjects?: TeacherSubjectUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutMajorsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutMajorsInput, TeacherUncheckedCreateWithoutMajorsInput>
  }

  export type MajorCreateWithoutTeachersInput = {
    name: string
    description?: string | null
    students?: StudentMajorCreateNestedManyWithoutMajorInput
    subjects?: MajorSubjectCreateNestedManyWithoutMajorInput
  }

  export type MajorUncheckedCreateWithoutTeachersInput = {
    id?: number
    name: string
    description?: string | null
    students?: StudentMajorUncheckedCreateNestedManyWithoutMajorInput
    subjects?: MajorSubjectUncheckedCreateNestedManyWithoutMajorInput
  }

  export type MajorCreateOrConnectWithoutTeachersInput = {
    where: MajorWhereUniqueInput
    create: XOR<MajorCreateWithoutTeachersInput, MajorUncheckedCreateWithoutTeachersInput>
  }

  export type TeacherUpsertWithoutMajorsInput = {
    update: XOR<TeacherUpdateWithoutMajorsInput, TeacherUncheckedUpdateWithoutMajorsInput>
    create: XOR<TeacherCreateWithoutMajorsInput, TeacherUncheckedCreateWithoutMajorsInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutMajorsInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutMajorsInput, TeacherUncheckedUpdateWithoutMajorsInput>
  }

  export type TeacherUpdateWithoutMajorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    subjects?: TeacherSubjectUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutMajorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    subjects?: TeacherSubjectUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type MajorUpsertWithoutTeachersInput = {
    update: XOR<MajorUpdateWithoutTeachersInput, MajorUncheckedUpdateWithoutTeachersInput>
    create: XOR<MajorCreateWithoutTeachersInput, MajorUncheckedCreateWithoutTeachersInput>
    where?: MajorWhereInput
  }

  export type MajorUpdateToOneWithWhereWithoutTeachersInput = {
    where?: MajorWhereInput
    data: XOR<MajorUpdateWithoutTeachersInput, MajorUncheckedUpdateWithoutTeachersInput>
  }

  export type MajorUpdateWithoutTeachersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    students?: StudentMajorUpdateManyWithoutMajorNestedInput
    subjects?: MajorSubjectUpdateManyWithoutMajorNestedInput
  }

  export type MajorUncheckedUpdateWithoutTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    students?: StudentMajorUncheckedUpdateManyWithoutMajorNestedInput
    subjects?: MajorSubjectUncheckedUpdateManyWithoutMajorNestedInput
  }

  export type TeacherCreateWithoutSubjectsInput = {
    name: string
    majors?: TeacherMajorCreateNestedManyWithoutTeacherInput
  }

  export type TeacherUncheckedCreateWithoutSubjectsInput = {
    id?: number
    name: string
    majors?: TeacherMajorUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type TeacherCreateOrConnectWithoutSubjectsInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
  }

  export type SubjectCreateWithoutTeachersInput = {
    name: string
    description?: string | null
    teacherId?: number | null
    majors?: MajorSubjectCreateNestedManyWithoutSubjectInput
    students?: StudentSubjectCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutTeachersInput = {
    id?: number
    name: string
    description?: string | null
    teacherId?: number | null
    majors?: MajorSubjectUncheckedCreateNestedManyWithoutSubjectInput
    students?: StudentSubjectUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutTeachersInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutTeachersInput, SubjectUncheckedCreateWithoutTeachersInput>
  }

  export type TeacherUpsertWithoutSubjectsInput = {
    update: XOR<TeacherUpdateWithoutSubjectsInput, TeacherUncheckedUpdateWithoutSubjectsInput>
    create: XOR<TeacherCreateWithoutSubjectsInput, TeacherUncheckedCreateWithoutSubjectsInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutSubjectsInput, TeacherUncheckedUpdateWithoutSubjectsInput>
  }

  export type TeacherUpdateWithoutSubjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    majors?: TeacherMajorUpdateManyWithoutTeacherNestedInput
  }

  export type TeacherUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    majors?: TeacherMajorUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type SubjectUpsertWithoutTeachersInput = {
    update: XOR<SubjectUpdateWithoutTeachersInput, SubjectUncheckedUpdateWithoutTeachersInput>
    create: XOR<SubjectCreateWithoutTeachersInput, SubjectUncheckedCreateWithoutTeachersInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutTeachersInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutTeachersInput, SubjectUncheckedUpdateWithoutTeachersInput>
  }

  export type SubjectUpdateWithoutTeachersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    majors?: MajorSubjectUpdateManyWithoutSubjectNestedInput
    students?: StudentSubjectUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutTeachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    teacherId?: NullableIntFieldUpdateOperationsInput | number | null
    majors?: MajorSubjectUncheckedUpdateManyWithoutSubjectNestedInput
    students?: StudentSubjectUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type StudentMajorCreateManyMajorInput = {
    studentId: number
  }

  export type MajorSubjectCreateManyMajorInput = {
    subjectId: number
  }

  export type TeacherMajorCreateManyMajorInput = {
    teacherId: number
  }

  export type StudentMajorUpdateWithoutMajorInput = {
    student?: StudentUpdateOneRequiredWithoutMajorsNestedInput
  }

  export type StudentMajorUncheckedUpdateWithoutMajorInput = {
    studentId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentMajorUncheckedUpdateManyWithoutMajorInput = {
    studentId?: IntFieldUpdateOperationsInput | number
  }

  export type MajorSubjectUpdateWithoutMajorInput = {
    subject?: SubjectUpdateOneRequiredWithoutMajorsNestedInput
  }

  export type MajorSubjectUncheckedUpdateWithoutMajorInput = {
    subjectId?: IntFieldUpdateOperationsInput | number
  }

  export type MajorSubjectUncheckedUpdateManyWithoutMajorInput = {
    subjectId?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherMajorUpdateWithoutMajorInput = {
    teacher?: TeacherUpdateOneRequiredWithoutMajorsNestedInput
  }

  export type TeacherMajorUncheckedUpdateWithoutMajorInput = {
    teacherId?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherMajorUncheckedUpdateManyWithoutMajorInput = {
    teacherId?: IntFieldUpdateOperationsInput | number
  }

  export type MajorSubjectCreateManySubjectInput = {
    majorId: number
  }

  export type StudentSubjectCreateManySubjectInput = {
    studentId: number
  }

  export type MajorSubjectUpdateWithoutSubjectInput = {
    major?: MajorUpdateOneRequiredWithoutSubjectsNestedInput
  }

  export type MajorSubjectUncheckedUpdateWithoutSubjectInput = {
    majorId?: IntFieldUpdateOperationsInput | number
  }

  export type MajorSubjectUncheckedUpdateManyWithoutSubjectInput = {
    majorId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentSubjectUpdateWithoutSubjectInput = {
    student?: StudentUpdateOneRequiredWithoutSubjectsNestedInput
  }

  export type StudentSubjectUncheckedUpdateWithoutSubjectInput = {
    studentId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentSubjectUncheckedUpdateManyWithoutSubjectInput = {
    studentId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentMajorCreateManyStudentInput = {
    majorId: number
  }

  export type StudentSubjectCreateManyStudentInput = {
    subjectId: number
  }

  export type StudentMajorUpdateWithoutStudentInput = {
    major?: MajorUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentMajorUncheckedUpdateWithoutStudentInput = {
    majorId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentMajorUncheckedUpdateManyWithoutStudentInput = {
    majorId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentSubjectUpdateWithoutStudentInput = {
    subject?: SubjectUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentSubjectUncheckedUpdateWithoutStudentInput = {
    subjectId?: IntFieldUpdateOperationsInput | number
  }

  export type StudentSubjectUncheckedUpdateManyWithoutStudentInput = {
    subjectId?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherMajorCreateManyTeacherInput = {
    majorId: number
  }

  export type TeacherSubjectCreateManyTeacherInput = {
    subjectId: number
  }

  export type TeacherMajorUpdateWithoutTeacherInput = {
    major?: MajorUpdateOneRequiredWithoutTeachersNestedInput
  }

  export type TeacherMajorUncheckedUpdateWithoutTeacherInput = {
    majorId?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherMajorUncheckedUpdateManyWithoutTeacherInput = {
    majorId?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherSubjectUpdateWithoutTeacherInput = {
    subject?: SubjectUpdateOneRequiredWithoutTeachersNestedInput
  }

  export type TeacherSubjectUncheckedUpdateWithoutTeacherInput = {
    subjectId?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherSubjectUncheckedUpdateManyWithoutTeacherInput = {
    subjectId?: IntFieldUpdateOperationsInput | number
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