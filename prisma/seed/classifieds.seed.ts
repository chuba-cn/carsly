import {
  BodyType,
  ClassifiedStatus,
  Colour,
  CurrencyCode,
  FuelType,
  OdoUnit,
  Transmission,
  ULEZCOMPLIANCE,
  type Prisma,
  type PrismaClient,
} from "../../src/generated/prisma/";
import { faker } from "@faker-js/faker";
import slugify from "slugify";

export async function seedClassifieds(prisma: PrismaClient) {
  const makes = await prisma.make.findMany({
    include: {
      models: {
        include: {
          modelVariants: true,
        },
      },
    },
  });

  const classifiedsData: Prisma.ClassifiedCreateManyInput[] = [];

  for (let i = 0; i < 25; i++) {
    const make = faker.helpers.arrayElement(makes);

    if (!make.models.length) continue;
    const model = faker.helpers.arrayElement(make.models);

    const variant = model.modelVariants.length
      ? faker.helpers.arrayElement(model.modelVariants)
      : null;

    const year = faker.date
      .between({
        from: new Date(1925, 0, 1),
        to: new Date(),
      })
      .getFullYear();

    const title = [year, make.name, model.name, variant?.name]
      .filter(Boolean)
      .join(" ");

    const vin = faker.vehicle.vin();

    const baseSlug = slugify(`${title}-${vin}`);

    classifiedsData.push({
      year,
      vin,
      slug: baseSlug,
      makeId: make.id,
      modelId: model.id,
      ...(variant?.id && { modelVariantId: variant.id }),
      title,
      price: faker.number.int({ min: 400000, max: 10000000 }),
      odoReading: faker.number.int({ min: 0, max: 200000 }),
      doors: faker.number.int({ min: 2, max: 8 }),
      seats: faker.number.int({ min: 2, max: 8 }),
      views: faker.number.int({ min: 100, max: 10000 }),
      description: faker.commerce.productDescription(),
      currency: faker.helpers.arrayElement(Object.values(CurrencyCode)),
      odoUnit: faker.helpers.arrayElement(Object.values(OdoUnit)),
      bodyType: faker.helpers.arrayElement(Object.values(BodyType)),
      transmission: faker.helpers.arrayElement(Object.values(Transmission)),
      fuelType: faker.helpers.arrayElement(Object.values(FuelType)),
      colour: faker.helpers.arrayElement(Object.values(Colour)),
      ulezCompliance: faker.helpers.arrayElement(Object.values(ULEZCOMPLIANCE)),
      status: faker.helpers.arrayElement(Object.values(ClassifiedStatus)),
    });
  }

  const result = await prisma.classified.createMany({
    data: classifiedsData,
    skipDuplicates: true, // Prevent any duplicate errors from duplicate slugs
  });

  console.log(`Total of ${result.count} classifieds seeded 🌱`);
}
