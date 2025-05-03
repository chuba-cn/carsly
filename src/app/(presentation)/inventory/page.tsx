import ClassifiedList from "@/components/inventory/classified-list";
import { AwaitedPageProps, Favourites, PageProps } from "@/config/types";
import { prisma } from "@/lib/prisma";
import { redis } from "@/lib/redis-store";
import { getSourceId } from "@/lib/source-id";
import React from "react";

const getInventory = async (searchParams: AwaitedPageProps["searchParams"]) => {
  return prisma.classified.findMany({
    include: {
      images: true,
    },
  });
};

const InventoryPage = async (props: PageProps) => {
  const searchParams = await props.searchParams;

  const sourceId = await getSourceId();
  const favourites = await redis.get<Favourites>(sourceId ?? "");

  const classifieds = await getInventory(searchParams);
  // const count = await prisma.classified.count();

  return (
    <>
      <ClassifiedList
        classifieds={classifieds}
        favourites={favourites ? favourites.ids : []}
      />
    </>
  );
};

export default InventoryPage;
