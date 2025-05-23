import type { Prisma } from "@/generated/prisma";
import type { ChangeEvent } from "react";

type Params = {
	[key: string]: string | string[];
};

export type PageProps = {
	params?: Promise<Params>;
	searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export type AwaitedPageProps = {
	params?: Awaited<PageProps["params"]>;
	searchParams?: Awaited<PageProps["searchParams"]>;
};

export type ClassifiedWithImages = Prisma.ClassifiedGetPayload<{
	include: {
		images: true;
	};
}>;

export enum MultiStepFormEnum {
	WELCOME = 1,
	SELECT_DATE = 2,
	SUBMIT_DETAILS = 3,
}

export interface Favourites {
	ids: number[];
}

export interface TaxonomyFiltersProps extends AwaitedPageProps {
	handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export type FilterOptions<LType, VType> = Array<{
	label: LType;
	value: VType;
}>;

export interface SidebarProps extends AwaitedPageProps {
	minMaxValues: Prisma.GetClassifiedAggregateType<{
		_min: {
			year: true;
			price: true;
			odoReading: true;
		};
		_max: {
			year: true;
			odoReading: true;
			price: true;
		};
	}>;
}
