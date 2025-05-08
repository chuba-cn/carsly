import { imageSources } from "@/config/constants";
import { faker } from "@faker-js/faker";
import { createPngDataUri } from "unlazy/thumbhash";
import type { Prisma, PrismaClient } from "../../src/generated/prisma/";

export async function seedImages(prisma: PrismaClient) {
	const classifieds = await prisma.classified.findMany();

	const classifiedIds = classifieds.map((classified) => classified.id);

	for (const classifiedId of classifiedIds) {
		// Create a placeholder image for each classified
		const image: Prisma.ImageCreateInput = {
			src: imageSources.classifiedPlaceHolder,
			alt: faker.lorem.words(2),
			classified: { connect: { id: classifiedId } },
			blurhash: createPngDataUri("jPcJDYCndnZwl4h6Z2eYhWZ/c/VI "),
		};

		console.log(`Seeding image for classified ${classifiedId} 🌱`);
		await prisma.image.create({ data: image });
	}
}
