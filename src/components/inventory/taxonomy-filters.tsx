import { endpoints } from "@/config/endpoints";
import type { FilterOptions, TaxonomyFiltersProps } from "@/config/types";
import { api } from "@/lib/api-client";
import React, { useEffect, useState, type ChangeEvent } from "react";
import Select from "../ui/select";

function TaxonomyFilters(props: TaxonomyFiltersProps) {
	const { searchParams, handleChange } = props;

	const [makes, setMakes] = useState<FilterOptions<string, string>>([]);
	const [models, setModels] = useState<FilterOptions<string, string>>([]);
	const [modelVariants, setModelVariants] = useState<
		FilterOptions<string, string>
	>([]);

	useEffect(() => {
		(async function fetchMakesOptions() {
			const params = new URLSearchParams();

			for (const [key, value] of Object.entries(
				searchParams as Record<string, string>,
			)) {
				if (value) {
					params.set(key, value);
				}
			}

			const url = new URL(endpoints.taxonomy, window.location.href);
			url.search = params.toString();

			const data = await api.get<{
				makes: FilterOptions<string, string>;
				models: FilterOptions<string, string>;
				modelVariants: FilterOptions<string, string>;
			}>(url.toString());

			setMakes(data.makes);
			setModels(data.models);
			setModelVariants(data.modelVariants);
		})();
	}, [searchParams]);

	return (
		<>
			<Select
				label="Make"
				name="make"
				value={searchParams?.make as string}
				onChange={handleChange}
				options={makes}
			/>

			<Select
				label="Model"
				name="model"
				value={searchParams?.model as string}
				onChange={handleChange}
				options={models}
				disabled={!models.length}
			/>

			<Select
				label="Model Variant"
				name="modelVariant"
				value={searchParams?.modelVariant as string}
				onChange={handleChange}
				options={modelVariants}
				disabled={!modelVariants.length}
			/>
		</>
	);
}

export default TaxonomyFilters;
