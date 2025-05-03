import { ClassifiedWithImages } from "@/config/types";
import React from "react";
import ClassifiedCard from "./classified-card";

interface ClassifiedListProps {
  classifieds: ClassifiedWithImages[];
}

function ClassifiedList(props: ClassifiedListProps) {
  const { classifieds } = props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {classifieds.map((classified) => {
        return <ClassifiedCard key={classified.id} classified={classified} />;
      })}
    </div>
  );
}

export default ClassifiedList;
