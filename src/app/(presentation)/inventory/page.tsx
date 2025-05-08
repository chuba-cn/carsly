import ClassifiedList from "@/components/inventory/classified-list";
import DialogFilters from "@/components/inventory/dialog-filters";
import Sidebar from "@/components/inventory/sidebar";
import CustomPagination from "@/components/shared/custom-pagination";
import { CLASSIFIED_PER_PAGE } from "@/config/constants";
import { routes } from "@/config/routes";
import type { AwaitedPageProps, Favourites, PageProps } from "@/config/types";
import { ClassifiedStatus, type Prisma } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { redis } from "@/lib/redis-store";
import { getSourceId } from "@/lib/source-id";
import React from "react";
import { z } from "zod";

const PageSchema = z
	.string()
	.transform((value) => Math.max(Number(value), 1))
	.optional();

const ClassifiedFilterSchema = z.object({
	q: z.string().optional(),
	make: z.string().optional(),
	model: z.string().optional(),
	modelVariant: z.string().optional(),
	minYear: z.string().optional(),
	maxYear: z.string().optional(),
	minPrice: z.string().optional(),
	maxPrice: z.string().optional(),
	minReading: z.string().optional(),
	maxReading: z.string().optional(),
	currency: z.string().optional(),
	odoUnit: z.string().optional(),
	transmission: z.string().optional(),
	fuelType: z.string().optional(),
	bodyType: z.string().optional(),
	colour: z.string().optional(),
	doors: z.string().optional(),
	seats: z.string().optional(),
	ulezCompliance: z.string().optional(),
});

const buildClassifiedFilterQuery = (
	searchParams: AwaitedPageProps["searchParams"] | undefined,
): Prisma.ClassifiedWhereInput => {
	const { data } = ClassifiedFilterSchema.safeParse(searchParams);

	if (!data) return { status: ClassifiedStatus.LIVE };

	const keys = Object.keys(data);

	const taxonomyFilters = ["make", "model", "modelVariant"];

	const numFilters = ["seats", "doors"];

	const enumFilters = [
		"odoUnit",
		"currency",
		"transmission",
		"bodyType",
		"fuelType",
		"colour",
		"ulezCompliance",
	];

	const rangeFilters = {
		minYear: "year",
		maxYear: "year",
		minPrice: "price",
		maxPrice: "price",
		minReading: "odoReading",
		maxReading: "odoReading",
	};

	const mapParamsToFields = keys.reduce(
		(acc, key) => {
			const value = searchParams?.[key] as string | undefined;

			if (!value) return acc;

			if (taxonomyFilters.includes(key)) {
				acc[key] = { id: Number(value) };
			} else if (enumFilters.includes(key)) {
				acc[key] = value.toUpperCase();
			} else if (numFilters.includes(key)) {
				acc[key] = Number(value);
			} else if (key in rangeFilters) {
				const field = rangeFilters[key as keyof typeof rangeFilters];
				acc[field] = acc[field] || {};

				if (key.startsWith("min")) {
					acc[field].gte = Number(value);
				} else if (key.startsWith("max")) {
					acc[field].lte = Number(value);
				}
			}

			return acc;
		},
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		{} as { [key: string]: any },
	);

	return {
		status: ClassifiedStatus.LIVE,

		...(searchParams?.q && {
			OR: [
				{
					title: {
						contains: searchParams.q as string,
						mode: "insensitive",
					},
				},

				{
					description: {
						contains: searchParams.q as string,
						mode: "insensitive",
					},
				},
			],
		}),
		...mapParamsToFields,
	};
};

const getInventory = async (searchParams: AwaitedPageProps["searchParams"]) => {
	const validPage = PageSchema.parse(searchParams?.page);

	const page = validPage ? validPage : 1;

	const offset = (page - 1) * CLASSIFIED_PER_PAGE;
	return prisma.classified.findMany({
		where: buildClassifiedFilterQuery(searchParams),
		include: {
			images: { take: 1 },
		},
		skip: offset,
		take: CLASSIFIED_PER_PAGE,
	});
};

const InventoryPage = async (props: PageProps) => {
	const searchParams = await props.searchParams;

	const sourceId = await getSourceId();
	const favourites = await redis.get<Favourites>(sourceId ?? "");

	const classifieds = await getInventory(searchParams);
	const count = await prisma.classified.count({
		where: buildClassifiedFilterQuery(searchParams),
	});
	const totalPages = Math.ceil(count / CLASSIFIED_PER_PAGE);

	const minMaxResult = await prisma.classified.aggregate({
		where: { status: ClassifiedStatus.LIVE },
		_min: {
			year: true,
			price: true,
			odoReading: true,
		},
		_max: {
			price: true,
			year: true,
			odoReading: true,
		},
	});

	return (
		<div className={"flex"}>
			<Sidebar minMaxValues={minMaxResult} searchParams={searchParams} />
			<div className="flex-1 p-4 bg-white">
				<div className="flex space-y-2 flex-col items-center justify-center pb-4 -mt-1">
					<div className="flex justify-between items-center w-full">
						<h2 className="text-sm md:text-base lg:text-xl font-semibold min-w-fit">
							We have found {count} classifieds
						</h2>
						{/*Mobile UI for sidebar filters*/}
						<DialogFilters
							minMaxValues={minMaxResult}
							count={count}
							searchParams={searchParams}
						/>
					</div>
					<CustomPagination
						baseURL={routes.inventory}
						totalPages={totalPages}
						styles={{
							paginationRoot: "justify-end hidden lg:flex",
							paginationPrevious: "",
							paginationNext: "",
							paginationLink: "border-none active:!border text-black",
							paginationLinkActive: "bg-secondary",
						}}
					/>
				</div>

				<ClassifiedList
					classifieds={classifieds}
					favourites={favourites ? favourites.ids : []}
				/>

				<CustomPagination
					baseURL={routes.inventory}
					totalPages={totalPages}
					styles={{
						paginationRoot: "flex justify-center lg:hidden pt-12",
						paginationPrevious: "",
						paginationNext: "",
						paginationLink: "border-none active:!border",
						paginationLinkActive: "bg-secondary",
					}}
				/>
			</div>
		</div>
	);
};

export default InventoryPage;
