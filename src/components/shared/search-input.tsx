"use client";

import { cn } from "@/lib/utils";
import debounce from "debounce";
import { SearchIcon, XIcon } from "lucide-react";
import { useQueryState } from "nuqs";
import type React from "react";
import { type ChangeEvent, useCallback, useRef } from "react";
import { Input } from "../ui/input";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function debounceFunc<T extends (...args: any) => any>(
	func: T,
	wait: number,
	opts: { immediate: boolean },
) {
	return debounce(func, wait, opts);
}

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	className?: string;
}

function SearchInput(props: SearchInputProps) {
	const { className, ...rest } = props;

	const [q, setSearch] = useQueryState("q", { shallow: false });

	const searchInputRef = useRef<HTMLInputElement>(null);

	const handleSearch = useCallback(
		debounceFunc(
			(value: string) => {
				setSearch(value || null);
			},
			1000,
			{ immediate: false },
		),
		[],
	);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		handleSearch(newValue);
	};

	const clearSearch = () => {
		setSearch(null);
		if (searchInputRef.current) searchInputRef.current.value = "";
	};

	return (
		<form className="relative flex-1">
			<SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
			<Input
				ref={searchInputRef}
				defaultValue={q || ""}
				className={cn(className, "pl-8")}
				onChange={handleInputChange}
				type="text"
				{...rest}
			/>
			{q && (
				<XIcon
					className="absolute right-2.5 top-2.5 h-4 w-4 bg-gray-500 text-white p-0.5 rounded-full cursor-pointer"
					onClick={clearSearch}
				/>
			)}
		</form>
	);
}

export default SearchInput;
