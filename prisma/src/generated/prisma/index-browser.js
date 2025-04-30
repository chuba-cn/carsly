
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
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
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


Prisma.skip = skip


/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ClassifiedScalarFieldEnum = {
  id: 'id',
  views: 'views',
  slug: 'slug',
  vin: 'vin',
  title: 'title',
  description: 'description',
  year: 'year',
  odoReading: 'odoReading',
  doors: 'doors',
  seates: 'seates',
  price: 'price',
  makeId: 'makeId',
  modelId: 'modelId',
  modelVariantId: 'modelVariantId',
  ulezCompliance: 'ulezCompliance',
  transmission: 'transmission',
  colour: 'colour',
  bodyType: 'bodyType',
  fuelType: 'fuelType',
  odoUnit: 'odoUnit',
  currency: 'currency',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CustomerScalarFieldEnum = {
  id: 'id',
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
  mobile: 'mobile',
  bookingDate: 'bookingDate',
  termsAccepted: 'termsAccepted',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  classifiedId: 'classifiedId'
};

exports.Prisma.CustomerLifecycleScalarFieldEnum = {
  id: 'id',
  customerId: 'customerId',
  oldStatus: 'oldStatus',
  newStatus: 'newStatus',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ImageScalarFieldEnum = {
  id: 'id',
  alt: 'alt',
  src: 'src',
  classifiedId: 'classifiedId',
  blurhash: 'blurhash',
  isMain: 'isMain'
};

exports.Prisma.PageViewScalarFieldEnum = {
  id: 'id',
  path: 'path',
  viewedAt: 'viewedAt',
  userAgent: 'userAgent',
  ipAddress: 'ipAddress',
  referrer: 'referrer',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SessionScalarFieldEnum = {
  id: 'id',
  sessionToken: 'sessionToken',
  userId: 'userId',
  expiresAt: 'expiresAt',
  requires2FA: 'requires2FA'
};

exports.Prisma.MakeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  image: 'image',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ModelScalarFieldEnum = {
  id: 'id',
  name: 'name',
  makeId: 'makeId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ModelVariantScalarFieldEnum = {
  id: 'id',
  name: 'name',
  modelId: 'modelId',
  yearStart: 'yearStart',
  yearEnd: 'yearEnd',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  hashedPassword: 'hashedPassword',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.ULEZCOMPLIANCE = exports.$Enums.ULEZCOMPLIANCE = {
  EXEMPT: 'EXEMPT',
  NON_EXEMPT: 'NON_EXEMPT'
};

exports.Transmission = exports.$Enums.Transmission = {
  MANUAL: 'MANUAL',
  AUTOMATIC: 'AUTOMATIC'
};

exports.Colour = exports.$Enums.Colour = {
  BLACK: 'BLACK',
  BLUE: 'BLUE',
  BROWN: 'BROWN',
  GOLD: 'GOLD',
  GREEN: 'GREEN',
  GREY: 'GREY',
  ORANGE: 'ORANGE',
  PINK: 'PINK',
  PURPLE: 'PURPLE',
  RED: 'RED',
  SILVER: 'SILVER',
  WHITE: 'WHITE',
  YELLOW: 'YELLOW'
};

exports.BodyType = exports.$Enums.BodyType = {
  SEDAN: 'SEDAN',
  HATCHBACK: 'HATCHBACK',
  SUV: 'SUV',
  COUPE: 'COUPE',
  CONVERTIBLE: 'CONVERTIBLE',
  WAGON: 'WAGON'
};

exports.FuelType = exports.$Enums.FuelType = {
  PETROL: 'PETROL',
  DIESEL: 'DIESEL',
  ELECTRIC: 'ELECTRIC',
  HYBRID: 'HYBRID'
};

exports.OdoUnit = exports.$Enums.OdoUnit = {
  MILES: 'MILES',
  KILOMETERS: 'KILOMETERS'
};

exports.CurrencyCode = exports.$Enums.CurrencyCode = {
  GBP: 'GBP',
  EUR: 'EUR',
  USD: 'USD',
  NGN: 'NGN'
};

exports.ClassifiedStatus = exports.$Enums.ClassifiedStatus = {
  LIVE: 'LIVE',
  DRAFT: 'DRAFT',
  SOLD: 'SOLD'
};

exports.CustomerStatus = exports.$Enums.CustomerStatus = {
  INTERESTED: 'INTERESTED',
  SUBSCRIBER: 'SUBSCRIBER',
  CONTACTED: 'CONTACTED',
  PURCHASED: 'PURCHASED',
  COLD: 'COLD'
};

exports.Prisma.ModelName = {
  Classified: 'Classified',
  Customer: 'Customer',
  CustomerLifecycle: 'CustomerLifecycle',
  Image: 'Image',
  PageView: 'PageView',
  Session: 'Session',
  Make: 'Make',
  Model: 'Model',
  ModelVariant: 'ModelVariant',
  User: 'User'
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
