"use client";

import {
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
	Pagination as PaginationRoot,
} from "@/components/ui/pagination";
import { env } from "@/env";
import { cn } from "@/lib/utils";
import { useQueryState } from "nuqs";
import { useEffect, useState } from "react";

interface CustomPaginationProps {
	baseURL: string;
	totalPages: number;
	maxVisiblePages?: number;
	styles: {
		paginationRoot: string;
		paginationPrevious: string;
		paginationNext: string;
		paginationLink: string;
		paginationLinkActive: string;
	};
}

function CustomPagination(props: CustomPaginationProps) {
	const { baseURL, totalPages, maxVisiblePages = 4, styles } = props;
	const [currentPage, setCurrentPage] = useQueryState("page", {
		defaultValue: 1,
		parse: (value) => {
			const parsed = Number.parseInt(value, 10);
			return Number.isNaN(parsed) || parsed < 1 ? 1 : parsed;
		},
		serialize: (value) => value.toString(),
		shallow: false,
	});

	const [visiblePageRange, setVisiblePageRange] = useState({
		start: 1,
		end: Math.min(maxVisiblePages, totalPages),
	});

	useEffect(() => {
		const halfVisible = Math.floor(maxVisiblePages / 2);
		const newStart = Math.max(
			1,
			Math.min(currentPage - halfVisible, totalPages - maxVisiblePages + 1),
		);
		const newEnd = Math.min(newStart + maxVisiblePages - 1, totalPages);

		setVisiblePageRange({ start: newStart, end: newEnd });
	}, [totalPages, currentPage, maxVisiblePages]);

	const createPageUrl = (pageNumber: number) => {
		const url = new URL(baseURL, env.NEXT_PUBLIC_BASE_URL);
		url.searchParams.set("page", pageNumber.toString());
		return url.toString();
	};

	const handleEllipsisClick = (direction: "left" | "right") => {
		const newPage =
			direction === "left"
				? Math.max(1, visiblePageRange.start - maxVisiblePages)
				: Math.min(totalPages, visiblePageRange.end + maxVisiblePages);

		void setCurrentPage(newPage);
	};

	return (
		<div>
			<PaginationRoot className={styles.paginationRoot}>
				<PaginationContent className={"lg:gap-4"}>
					<PaginationItem>
						<PaginationPrevious
							className={cn(
								currentPage <= 1 && "hidden",
								styles.paginationPrevious,
							)}
							href={createPageUrl(currentPage - 1)}
							onClick={(e) => {
								e.preventDefault();
								if (currentPage > 1) void setCurrentPage(currentPage - 1);
							}}
						/>
					</PaginationItem>

					{visiblePageRange.start > 1 && (
						<PaginationItem className="hidden lg:block">
							<PaginationLink
								className={styles.paginationLink}
								href="#"
								onClick={(e) => {
									e.preventDefault();
									handleEllipsisClick("left");
								}}
							>
								...
							</PaginationLink>
						</PaginationItem>
					)}

					{/*pages go here*/}
					{Array.from({
						length: visiblePageRange.end - visiblePageRange.start + 1,
					})
						.map((_, index) => visiblePageRange.start + index)
						.map((pageNumber) => {
							const isActive = pageNumber === currentPage;
							let rel = "";

							if (pageNumber === currentPage - 1) {
								rel = "prev";
							}

							if (pageNumber === currentPage + 1) {
								rel = "next";
							}

							return (
								<PaginationItem key={pageNumber}>
									<PaginationLink
										isActive={isActive}
										href={createPageUrl(pageNumber)}
										onClick={(e) => {
											e.preventDefault();
											void setCurrentPage(pageNumber);
										}}
										className={cn(
											styles.paginationLink,
											isActive && styles.paginationLinkActive,
										)}
										{...(rel ? { rel } : {})}
									>
										{pageNumber}
									</PaginationLink>
								</PaginationItem>
							);
						})}

					{visiblePageRange.end < totalPages && (
						<PaginationItem className="hidden lg:block">
							<PaginationLink
								className={styles.paginationLink}
								href="#"
								onClick={(e) => {
									e.preventDefault();
									handleEllipsisClick("right");
								}}
							>
								...
							</PaginationLink>
						</PaginationItem>
					)}

					<PaginationItem>
						<PaginationNext
							className={cn(
								currentPage >= totalPages && "hidden",
								styles.paginationNext,
							)}
							href={createPageUrl(currentPage + 1)}
							onClick={(e) => {
								e.preventDefault();
								if (currentPage < totalPages)
									void setCurrentPage(currentPage + 1);
							}}
						/>
					</PaginationItem>
				</PaginationContent>
			</PaginationRoot>
		</div>
	);
}

export default CustomPagination;
