import type { ClassifiedWithImages } from "@/config/types";
import React from "react";
import ClassifiedCard from "./classified-card";

interface ClassifiedListProps {
	classifieds: ClassifiedWithImages[];
	favourites: number[];
}

function ClassifiedList(props: ClassifiedListProps) {
	const { classifieds, favourites } = props;

	return (
		<>
			{classifieds.length === 0 ? (
				<div className="col-span-full text-center py-12">
					<p className="text-lg text-gray-500">No classifieds found.</p>
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
					{classifieds.map((classified) => {
						return (
							<ClassifiedCard
								key={classified.id}
								classified={classified}
								favourites={favourites}
							/>
						);
					})}
				</div>
			)}
		</>
	);
}

export default ClassifiedList;
