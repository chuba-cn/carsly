import { Colour, FuelType, OdoUnit, Transmission } from "@/generated/prisma";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(
  num: number | null,
  options?: Intl.NumberFormatOptions
) {
  if (!num) return "0";

  return new Intl.NumberFormat("en-US", options).format(num);
}

export function formatCurrency(
  num: number | null,
  currencyCode: string = "USD"
) {
  return formatNumber(num, {
    style: "currency",
    currency: currencyCode,
  });
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
