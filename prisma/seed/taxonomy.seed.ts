import type { Prisma, PrismaClient } from "../../src/generated/prisma/";
import { parse } from "csv";
import fs from "node:fs";

type Row = {
  make: string;
  model: string;
  variant: string | undefined;
  yearStart: number;
  yearEnd: number;
};

const BATCH_SIZE = 100;

export async function seedTaxonomy(prisma: PrismaClient) {
  const rows = await new Promise<Row[]>((resolve, reject) => {
    const eachRow: Row[] = [];

    fs.createReadStream("taxonomy.csv")
      .pipe(parse({ columns: true }))
      .on("data", (row: { [index: string]: string }) => {
        eachRow.push({
          make: row.Make,
          model: row.Model,
          variant: row.Model_Variant || undefined,
          yearStart: Number(row.Year_Start),
          yearEnd: row.Year_end
            ? Number(row.Year_End)
            : new Date().getFullYear(),
        });
      })
      .on("error", (error) => {
        console.log({ error });
        reject(error);
      })
      .on("end", () => {
        resolve(eachRow);
      });
  });

  type makeModelMap = {
    [make: string]: {
      [model: string]: {
        variants: {
          [variant: string]: {
            yearStart: number;
            yearEnd: number;
          };
        };
      };
    };
  };

  const result: makeModelMap = {};

  for (const row of rows) {
    if (!result[row.make]) {
      result[row.make] = {};
    }

    if (!result[row.make][row.model]) {
      result[row.make][row.model] = {
        variants: {},
      };
    }

    if (row.variant) {
      result[row.make][row.model].variants[row.variant] = {
        yearStart: row.yearStart,
        yearEnd: row.yearEnd,
      };
    }
  }

  const makePromises = Object.entries(result).map(([make]) => {
    return prisma.make.upsert({
      where: {
        name: make,
      },
      update: {
        name: make,
        image: `https://vl.imgix.net/img/${make
          .replace(/\s+/g, "-")
          .toLowerCase()}-logo.png?auto=format,compress`,
      },
      create: {
        name: make,
        image: `https://vl.imgix.net/img/${make
          .replace(/\s+/g, "-")
          .toLowerCase()}-logo.png?auto=format,compress`,
      },
    });
  });

  const resolvedMakes = await Promise.all(makePromises);
  console.log(`Seeded database with ${resolvedMakes.length} makes 🌱`);

  const modelPromises: Prisma.Prisma__ModelClient<unknown, unknown>[] = [];

  for (const make of resolvedMakes) {
    for (const model in result[make.name]) {
      modelPromises.push(
        prisma.model.upsert({
          where: {
            makeId_name: {
              name: model,
              makeId: make.id,
            },
          },
          update: {
            name: model,
          },
          create: {
            name: model,
            make: { connect: { id: make.id } },
          },
        })
      );
    }
  }

  async function insertInBatches<TUpsertArgs>(
    items: TUpsertArgs[],
    batchSize: number,
    insertFunction: (batch: TUpsertArgs[]) => Promise<void>
  ) {
    for (let i = 0; i < items.length; i += batchSize){
      const batch = items.slice(i, i + batchSize);
      await insertFunction(batch)
    }
  }

  await insertInBatches<Prisma.Prisma__ModelClient<unknown, unknown>>(
    modelPromises,
    BATCH_SIZE,
    async (batch) => {
      const models = await Promise.all(batch);
      console.log(`Seeded batch of ${models.length} models 🌱`);
    }
  )

  const variantPromises: Prisma.Prisma__ModelVariantClient<unknown, unknown>[] = [];
  
  for (const make of resolvedMakes) {
    const models = await prisma.model.findMany({
      where: {
        makeId: make.id,
      },
    });

    for (const model of models) {
      for (const [ variant, year_range ] of Object.entries(result[ make.name ][ model.name ].variants)) {
        variantPromises.push(prisma.modelVariant.upsert({
          where: {
            modelId_name: {
              name: variant,
              modelId: model.id
            }
          },
          update: {
            name: variant
          },
          create: {
            name: variant,
            yearStart: year_range.yearStart,
            yearEnd: year_range.yearEnd,
            model: { connect: { id: model.id } }
          }
        }))
      }
    }
  }

    await insertInBatches<Prisma.Prisma__ModelVariantClient<unknown, unknown>>(
      variantPromises,
      BATCH_SIZE,
      async (batch) => {
        const variants = await Promise.all(batch);
        console.log(`Seeded batch of ${variants.length} variants 🌱`);
      }
    );
}