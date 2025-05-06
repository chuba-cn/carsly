import ClassifiedList from "@/components/inventory/classified-list";
import type { AwaitedPageProps, Favourites, PageProps } from "@/config/types";
import { prisma } from "@/lib/prisma";
import { redis } from "@/lib/redis-store";
import { getSourceId } from "@/lib/source-id";
import React from "react";
import CustomPagination from "@/components/shared/custom-pagination";
import {routes} from "@/config/routes";
import { z } from "zod";
import { CLASSIFIED_PER_PAGE } from "@/config/constants";
import Sidebar from "@/components/inventory/sidebar";

const PageSchema = z.string().transform((value) => Math.max(Number(value), 1)).optional();

const getInventory = async (searchParams: AwaitedPageProps[ "searchParams" ]) => {
  const validPage = PageSchema.parse(searchParams?.page);

  const page = validPage ? validPage : 1;

  const offset = (page - 1) * CLASSIFIED_PER_PAGE;
  return prisma.classified.findMany({
    where: {},
    include: {
      images: {take: 1},
    },
    skip: offset,
    take: CLASSIFIED_PER_PAGE
  });
};

const InventoryPage = async (props: PageProps) => {
  const searchParams = await props.searchParams;

  const sourceId = await getSourceId();
  const favourites = await redis.get<Favourites>(sourceId ?? "");

  const classifieds = await getInventory(searchParams);
  const count = await prisma.classified.count({where: {}});
  const totalPages = Math.ceil(count / CLASSIFIED_PER_PAGE);

  return (
    <div className={"flex"}>
      <Sidebar minMaxValues={null} searchParams={searchParams}/>
      <div className="flex-1 p-4 bg-white">
        <div className="flex space-y-2 flex-col items-center justify-center pb-4 -mt-1">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-sm md:text-base lg:text-xl font-semibold min-w-fit">We have found {count} classifieds
            </h2>
            {/*<DialogFilters />*/}
          <CustomPagination
            baseURL={routes.inventory}
            totalPages={totalPages}
            styles={{
              paginationRoot: "flex justify-end",
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
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
