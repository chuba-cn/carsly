import {
	BodyType,
	type Colour,
	type CurrencyCode,
	FuelType,
	OdoUnit,
	Transmission,
	type ULEZCOMPLIANCE,
} from "@/generated/prisma";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatNumber(
	num: number | null,
	options?: Intl.NumberFormatOptions,
) {
	if (!num) return "0";

	return new Intl.NumberFormat("en-US", options).format(num);
}

export function formatOdometerUnit(unit: OdoUnit) {
	return unit === OdoUnit.MILES ? "mi" : "km";
}

export function formatTransmission(transmission: Transmission) {
	return transmission === Transmission.AUTOMATIC ? "Auto" : "Manual";
}

export function formatFuelType(fuelType: FuelType) {
	switch (fuelType) {
		case FuelType.DIESEL:
			return "Diesel";
		case FuelType.ELECTRIC:
			return "Electric";
		case FuelType.HYBRID:
			return "Hybrid";
		case FuelType.PETROL:
			return "Petrol";
		default:
			return "Unknown";
	}
}

export function formatColour(colour: Colour) {
	return colour
		? colour[0].toUpperCase() + colour.slice(1).toLowerCase()
		: "Unknown";
}

interface FormatPriceArgs {
	price: number | null;
	currency: CurrencyCode | null;
}

export function formatPrice({ currency, price }: FormatPriceArgs) {
	if (!price) return "0";

	const formatter = new Intl.NumberFormat("en-GB", {
		style: "currency",
		currencyDisplay: "narrowSymbol",
		...(currency && { currency }),
		maximumFractionDigits: 0,
	});

	return formatter.format(price / 100);
}

export function formatUlezCompliance(ulezCompliance: ULEZCOMPLIANCE) {
	return ulezCompliance === "EXEMPT" ? "Exempt" : "Non-Exempt";
}

export function formatBodyType(bodyType: BodyType) {
	switch (bodyType) {
		case BodyType.CONVERTIBLE:
			return "Convertible";
		case BodyType.COUPE:
			return "Coupe";
		case BodyType.HATCHBACK:
			return "Hatchback";
		case BodyType.SUV:
			return "SUV";
		case BodyType.WAGON:
			return "Wagon";
		case BodyType.SEDAN:
			return "Sedan";
		default:
			return "Unknown";
	}
}
