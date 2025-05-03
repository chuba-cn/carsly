import { Prisma } from "@/generated/prisma";

type Params = {
  [ key: string ]: string | string[];
};

export type PageProps = {
  params?: Promise<Params>,
  searchParams?: Promise<{[key: string]: string | string[] | undefined} >,
}

export type AwaitedPageProps = {
  params?: Awaited<PageProps["params"]>,
  searchParams?: Awaited<PageProps["searchParams"]>,
}

export type ClassifiedWithImages = Prisma.ClassifiedGetPayload<{
  include: {
    images: true;
  };
}>;

export enum MultiStepFormEnum {
  WELCOME = 1,
  SELECT_DATE = 2,
  SUBMIT_DETAILS = 3
}

export interface Favourites {
  ids: number[];
}
