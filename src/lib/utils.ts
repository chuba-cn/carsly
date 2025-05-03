import { Colour, FuelType, OdoUnit, Transmission } from "@/generated/prisma";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class name values into a single optimized string, merging Tailwind CSS classes as needed.
 *
 * @param inputs - Class name values to combine.
 * @returns A merged class name string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number according to US English locale and optional formatting options.
 *
 * Returns "0" if the input is null or falsy.
 *
 * @param num - The number to format, or null.
 * @param options - Optional formatting options for {@link Intl.NumberFormat}.
 * @returns The formatted number as a string, or "0" if {@link num} is null or falsy.
 */
export function formatNumber(
  num: number | null,
  options?: Intl.NumberFormatOptions
) {
  if (!num) return "0";

  return new Intl.NumberFormat("en-US", options).format(num);
}

/**
 * Formats a number as a currency string using the specified currency code.
 *
 * @param num - The number to format, or null.
 * @param currencyCode - The ISO 4217 currency code to use (default is "USD").
 * @returns The formatted currency string, or "0" if {@link num} is null or falsy.
 */
export function formatCurrency(
  num: number | null,
  currencyCode: string = "USD"
) {
  return formatNumber(num, {
    style: "currency",
    currency: currencyCode,
  });
}

/**
 * Returns the string abbreviation for an odometer unit.
 *
 * @param unit - The odometer unit to format.
 * @returns "mi" if the unit is miles, otherwise "km".
 */
export function formatOdometerUnit(unit: OdoUnit) {
  return unit === OdoUnit.MILES ? "mi" : "km";
}

/**
 * Converts a transmission enum value to its display string.
 *
 * @param transmission - The transmission type to format.
 * @returns "Auto" if the transmission is automatic, otherwise "Manual".
 */
export function formatTransmission(transmission: Transmission) {
  return transmission === Transmission.AUTOMATIC ? "Auto" : "Manual";
}

/**
 * Converts a {@link FuelType} enum value to its human-readable string representation.
 *
 * @param fuelType - The fuel type to format.
 * @returns The formatted fuel type string, or "Unknown" if the value is unrecognized.
 */
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

/**
 * Formats a color string by capitalizing the first letter and lowercasing the rest.
 *
 * @param colour - The color value to format.
 * @returns The formatted color string, or "Unknown" if {@link colour} is falsy.
 */
export function formatColour(colour: Colour) {
  return colour
    ? colour[0].toUpperCase() + colour.slice(1).toLowerCase()
    : "Unknown";
}
