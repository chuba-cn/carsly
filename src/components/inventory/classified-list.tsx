import { ClassifiedWithImages } from "@/config/types";
import React from "react";
import ClassifiedCard from "./classified-card";

interface ClassifiedListProps {
  classifieds: ClassifiedWithImages[];
}

/**
 * Displays a responsive grid of classified ads using the provided list.
 *
 * Renders each classified ad as a {@link ClassifiedCard} within a grid layout that adapts to different screen sizes.
 *
 * @param props.classifieds - Array of classified ad objects to display.
 * @returns A JSX element containing the grid of classified cards.
 */
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
