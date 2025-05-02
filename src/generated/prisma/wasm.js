
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
} = require('./runtime/wasm.js')


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
  seats: 'seats',
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
exports.ClassifiedStatus = exports.$Enums.ClassifiedStatus = {
  LIVE: 'LIVE',
  DRAFT: 'DRAFT',
  SOLD: 'SOLD'
};

exports.CurrencyCode = exports.$Enums.CurrencyCode = {
  GBP: 'GBP',
  EUR: 'EUR',
  USD: 'USD',
  NGN: 'NGN'
};

exports.OdoUnit = exports.$Enums.OdoUnit = {
  MILES: 'MILES',
  KILOMETERS: 'KILOMETERS'
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

exports.ULEZCOMPLIANCE = exports.$Enums.ULEZCOMPLIANCE = {
  EXEMPT: 'EXEMPT',
  NON_EXEMPT: 'NON_EXEMPT'
};

exports.Transmission = exports.$Enums.Transmission = {
  MANUAL: 'MANUAL',
  AUTOMATIC: 'AUTOMATIC'
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
      "value": "/home/chuba/Desktop/Courses & Projects/Projects/carsly/src/generated/prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters",
      "prismaSchemaFolder",
      "strictUndefinedChecks"
    ],
    "sourceFilePath": "/home/chuba/Desktop/Courses & Projects/Projects/carsly/prisma/schema/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma/schema",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": "postgres://chuba:Samsung29&&@localhost:5432/carslydb-main?schema=public"
      }
    }
  },
  "inlineSchema": "model Classified {\n  id             Int              @id @default(autoincrement())\n  views          Int              @default(0)\n  slug           String           @unique\n  vin            String?\n  title          String?\n  description    String?\n  year           Int\n  odoReading     Int              @default(0) @map(\"odo_reading\")\n  doors          Int              @default(2)\n  seats          Int              @default(5)\n  price          Int              @default(0) @map(\"price\")\n  makeId         Int              @map(\"make_id\")\n  make           Make             @relation(fields: [makeId], references: [id])\n  modelId        Int              @map(\"model_id\")\n  model          Model            @relation(fields: [modelId], references: [id])\n  modelVariantId Int?             @map(\"model_variant_id\")\n  modelVariant   ModelVariant?    @relation(fields: [modelVariantId], references: [id])\n  ulezCompliance ULEZCOMPLIANCE   @default(EXEMPT) @map(\"ulez_compliance\")\n  transmission   Transmission     @default(AUTOMATIC)\n  colour         Colour           @default(BLACK)\n  bodyType       BodyType         @default(SEDAN)\n  fuelType       FuelType         @default(PETROL)\n  odoUnit        OdoUnit          @default(KILOMETERS)\n  currency       CurrencyCode     @default(NGN)\n  status         ClassifiedStatus @default(DRAFT)\n  images         Image[]\n  customers      Customer[]\n  createdAt      DateTime         @default(now()) @map(\"created_at\")\n  updatedAt      DateTime         @updatedAt @map(\"updated_at\")\n\n  @@index([makeId, modelId], name: \"index_make_model\")\n  @@index([price], name: \"index_price\")\n  @@index([status], name: \"index_status\")\n  @@map(\"classifieds\")\n}\n\nenum ClassifiedStatus {\n  LIVE\n  DRAFT\n  SOLD\n}\n\nenum CurrencyCode {\n  GBP\n  EUR\n  USD\n  NGN\n}\n\nenum OdoUnit {\n  MILES\n  KILOMETERS\n}\n\nenum BodyType {\n  SEDAN\n  HATCHBACK\n  SUV\n  COUPE\n  CONVERTIBLE\n  WAGON\n}\n\nenum FuelType {\n  PETROL\n  DIESEL\n  ELECTRIC\n  HYBRID\n}\n\nenum Colour {\n  BLACK\n  BLUE\n  BROWN\n  GOLD\n  GREEN\n  GREY\n  ORANGE\n  PINK\n  PURPLE\n  RED\n  SILVER\n  WHITE\n  YELLOW\n}\n\nenum ULEZCOMPLIANCE {\n  EXEMPT\n  NON_EXEMPT\n}\n\nenum Transmission {\n  MANUAL\n  AUTOMATIC\n}\n\nmodel Customer {\n  id            Int                 @id @default(autoincrement())\n  firstName     String              @map(\"first_name\")\n  lastName      String              @map(\"last_name\")\n  email         String              @unique\n  mobile        String?\n  bookingDate   DateTime?           @map(\"booking_date\")\n  termsAccepted Boolean             @default(false) @map(\"terms_accepted\")\n  status        CustomerStatus      @default(INTERESTED)\n  createdAt     DateTime            @default(now()) @map(\"created_at\")\n  updatedAt     DateTime            @updatedAt @map(\"updated_at\")\n  Classified    Classified?         @relation(fields: [classifiedId], references: [id])\n  classifiedId  Int?\n  lifecycles    CustomerLifecycle[]\n\n  @@map(\"customers\")\n}\n\nenum CustomerStatus {\n  INTERESTED\n  SUBSCRIBER\n  CONTACTED\n  PURCHASED\n  COLD\n}\n\nmodel CustomerLifecycle {\n  id         Int            @id @default(autoincrement())\n  customerId Int            @map(\"customer_id\")\n  customer   Customer       @relation(fields: [customerId], references: [id], onDelete: Cascade)\n  oldStatus  CustomerStatus @map(\"old_status\")\n  newStatus  CustomerStatus @map(\"new_status\")\n  createdAt  DateTime       @default(now()) @map(\"created_at\")\n  updatedAt  DateTime       @updatedAt @map(\"updated_at\")\n\n  @@index([customerId])\n  @@map(\"customer_lifecycle\")\n}\n\nmodel Image {\n  id           Int        @id @default(autoincrement())\n  alt          String\n  src          String\n  classifiedId Int        @map(\"classified_id\")\n  classified   Classified @relation(fields: [classifiedId], references: [id], onDelete: Cascade)\n  blurhash     String\n  isMain       Boolean    @default(false) @map(\"is_main\")\n\n  @@map(\"images\")\n}\n\nmodel PageView {\n  id        Int      @id @default(autoincrement())\n  path      String\n  viewedAt  DateTime @default(now()) @map(\"viewed_at\")\n  userAgent String?  @map(\"user_agent\")\n  ipAddress String?  @map(\"ip_address\")\n  referrer  String?\n  createdAt DateTime @default(now()) @map(\"created_at\")\n  updatedAt DateTime @updatedAt @map(\"updated_at\")\n\n  @@index([path, viewedAt])\n  @@map(\"page_views\")\n}\n\n// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../../src/generated/prisma\"\n  previewFeatures = [\"prismaSchemaFolder\", \"strictUndefinedChecks\", \"driverAdapters\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Session {\n  id           String   @id @default(cuid())\n  sessionToken String   @unique @map(\"session_token\")\n  userId       String   @map(\"user_id\")\n  expiresAt    DateTime\n  requires2FA  Boolean  @default(true)\n  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@map(\"sessions\")\n}\n\nmodel Make {\n  id          Int          @id @default(autoincrement())\n  name        String       @unique\n  image       String\n  models      Model[]\n  classifieds Classified[]\n  createdAt   DateTime     @default(now()) @map(\"created_at\")\n  updatedAt   DateTime     @updatedAt @map(\"updated_at\")\n\n  @@map(\"makes\")\n}\n\nmodel Model {\n  id            Int            @id @default(autoincrement())\n  name          String\n  makeId        Int            @map(\"make_id\")\n  make          Make           @relation(fields: [makeId], references: [id], onDelete: Cascade)\n  modelVariants ModelVariant[]\n  classifieds   Classified[]\n  createdAt     DateTime       @default(now()) @map(\"created_at\")\n  updatedAt     DateTime       @updatedAt @map(\"updated_at\")\n\n  @@unique([makeId, name])\n  @@map(\"models\")\n}\n\nmodel ModelVariant {\n  id          Int          @id @default(autoincrement())\n  name        String\n  modelId     Int          @map(\"model_id\")\n  model       Model        @relation(fields: [modelId], references: [id], onDelete: Cascade)\n  yearStart   Int\n  yearEnd     Int\n  classifieds Classified[]\n  createdAt   DateTime     @default(now()) @map(\"created_at\")\n  updatedAt   DateTime     @updatedAt @map(\"updated_at\")\n\n  @@unique([modelId, name])\n  @@map(\"model_variants\")\n}\n\nmodel User {\n  id             String    @id @default(cuid())\n  email          String    @unique\n  hashedPassword String    @map(\"hashed_password\")\n  sessions       Session[]\n  createdAt      DateTime  @default(now())\n  updatedAt      DateTime  @updatedAt\n\n  @@map(\"users\")\n}\n",
  "inlineSchemaHash": "aa95b12e36a1f40dc1ce44356970e3f0c2feeee9ceddc2bd24e4416034b2aca5",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Classified\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"views\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"slug\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"vin\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"year\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"odoReading\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"odo_reading\"},{\"name\":\"doors\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"seats\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"price\"},{\"name\":\"makeId\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"make_id\"},{\"name\":\"make\",\"kind\":\"object\",\"type\":\"Make\",\"relationName\":\"ClassifiedToMake\"},{\"name\":\"modelId\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"model_id\"},{\"name\":\"model\",\"kind\":\"object\",\"type\":\"Model\",\"relationName\":\"ClassifiedToModel\"},{\"name\":\"modelVariantId\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"model_variant_id\"},{\"name\":\"modelVariant\",\"kind\":\"object\",\"type\":\"ModelVariant\",\"relationName\":\"ClassifiedToModelVariant\"},{\"name\":\"ulezCompliance\",\"kind\":\"enum\",\"type\":\"ULEZCOMPLIANCE\",\"dbName\":\"ulez_compliance\"},{\"name\":\"transmission\",\"kind\":\"enum\",\"type\":\"Transmission\"},{\"name\":\"colour\",\"kind\":\"enum\",\"type\":\"Colour\"},{\"name\":\"bodyType\",\"kind\":\"enum\",\"type\":\"BodyType\"},{\"name\":\"fuelType\",\"kind\":\"enum\",\"type\":\"FuelType\"},{\"name\":\"odoUnit\",\"kind\":\"enum\",\"type\":\"OdoUnit\"},{\"name\":\"currency\",\"kind\":\"enum\",\"type\":\"CurrencyCode\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"ClassifiedStatus\"},{\"name\":\"images\",\"kind\":\"object\",\"type\":\"Image\",\"relationName\":\"ClassifiedToImage\"},{\"name\":\"customers\",\"kind\":\"object\",\"type\":\"Customer\",\"relationName\":\"ClassifiedToCustomer\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"classifieds\"},\"Customer\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"firstName\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"first_name\"},{\"name\":\"lastName\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"last_name\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"mobile\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"bookingDate\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"booking_date\"},{\"name\":\"termsAccepted\",\"kind\":\"scalar\",\"type\":\"Boolean\",\"dbName\":\"terms_accepted\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"CustomerStatus\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"},{\"name\":\"Classified\",\"kind\":\"object\",\"type\":\"Classified\",\"relationName\":\"ClassifiedToCustomer\"},{\"name\":\"classifiedId\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"lifecycles\",\"kind\":\"object\",\"type\":\"CustomerLifecycle\",\"relationName\":\"CustomerToCustomerLifecycle\"}],\"dbName\":\"customers\"},\"CustomerLifecycle\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"customerId\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"customer_id\"},{\"name\":\"customer\",\"kind\":\"object\",\"type\":\"Customer\",\"relationName\":\"CustomerToCustomerLifecycle\"},{\"name\":\"oldStatus\",\"kind\":\"enum\",\"type\":\"CustomerStatus\",\"dbName\":\"old_status\"},{\"name\":\"newStatus\",\"kind\":\"enum\",\"type\":\"CustomerStatus\",\"dbName\":\"new_status\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"customer_lifecycle\"},\"Image\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"alt\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"src\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"classifiedId\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"classified_id\"},{\"name\":\"classified\",\"kind\":\"object\",\"type\":\"Classified\",\"relationName\":\"ClassifiedToImage\"},{\"name\":\"blurhash\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isMain\",\"kind\":\"scalar\",\"type\":\"Boolean\",\"dbName\":\"is_main\"}],\"dbName\":\"images\"},\"PageView\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"path\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"viewedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"viewed_at\"},{\"name\":\"userAgent\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_agent\"},{\"name\":\"ipAddress\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"ip_address\"},{\"name\":\"referrer\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"page_views\"},\"Session\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sessionToken\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"session_token\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"user_id\"},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"requires2FA\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"SessionToUser\"}],\"dbName\":\"sessions\"},\"Make\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"image\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"models\",\"kind\":\"object\",\"type\":\"Model\",\"relationName\":\"MakeToModel\"},{\"name\":\"classifieds\",\"kind\":\"object\",\"type\":\"Classified\",\"relationName\":\"ClassifiedToMake\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"makes\"},\"Model\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"makeId\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"make_id\"},{\"name\":\"make\",\"kind\":\"object\",\"type\":\"Make\",\"relationName\":\"MakeToModel\"},{\"name\":\"modelVariants\",\"kind\":\"object\",\"type\":\"ModelVariant\",\"relationName\":\"ModelToModelVariant\"},{\"name\":\"classifieds\",\"kind\":\"object\",\"type\":\"Classified\",\"relationName\":\"ClassifiedToModel\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"models\"},\"ModelVariant\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"modelId\",\"kind\":\"scalar\",\"type\":\"Int\",\"dbName\":\"model_id\"},{\"name\":\"model\",\"kind\":\"object\",\"type\":\"Model\",\"relationName\":\"ModelToModelVariant\"},{\"name\":\"yearStart\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"yearEnd\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"classifieds\",\"kind\":\"object\",\"type\":\"Classified\",\"relationName\":\"ClassifiedToModelVariant\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"created_at\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\",\"dbName\":\"updated_at\"}],\"dbName\":\"model_variants\"},\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"hashedPassword\",\"kind\":\"scalar\",\"type\":\"String\",\"dbName\":\"hashed_password\"},{\"name\":\"sessions\",\"kind\":\"object\",\"type\":\"Session\",\"relationName\":\"SessionToUser\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":\"users\"}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: async () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine
  }
}
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

