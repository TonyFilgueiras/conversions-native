import { useCallback } from "react";
import IConvertingUnits from "../typescript/IConvertingUnits";
import { IPossibleUnits } from "../typescript/IPossibleUnits";
import { useTranslation } from "./useTranslation";

const useConversion = () => {
  const { t } = useTranslation();

  const massUnits: Record<string, IConvertingUnits> = {
    kilogram: { name: t("Kilogram"), symbol: "kg", toBaseUnitFactor: 1 }, // Base unit
    gram: { name: t("Gram"), symbol: "g", toBaseUnitFactor: 0.001 }, // 1 gram = 0.001 kilograms
    milligram: { name: t("Milligram"), symbol: "mg", toBaseUnitFactor: 0.000001 }, // 1 milligram = 0.000001 kilograms
    pound: { name: t("Pound"), symbol: "lb", toBaseUnitFactor: 0.453592 }, // 1 pound ≈ 0.453592 kilograms
    ounce: { name: t("Ounce"), symbol: "oz", toBaseUnitFactor: 0.0283495 }, // 1 ounce ≈ 0.0283495 kilograms
  };

  const lengthUnits: Record<string, IConvertingUnits> = {
    meter: { name: t("Meter"), symbol: "m", toBaseUnitFactor: 1 },
    kilometer: { name: t("Kilometer"), symbol: "km", toBaseUnitFactor: 1000 },
    centimeter: { name: t("Centimeter"), symbol: "cm", toBaseUnitFactor: 0.01 },
    millimeter: { name: t("Millimeter"), symbol: "mm", toBaseUnitFactor: 0.001 },
    mile: { name: t("Mile"), symbol: "mi", toBaseUnitFactor: 1609.34 },
    yard: { name: t("Yard"), symbol: "yd", toBaseUnitFactor: 0.9144 },
    foot: { name: t("Foot"), symbol: "ft", toBaseUnitFactor: 0.3048 },
    inch: { name: t("Inch"), symbol: "in", toBaseUnitFactor: 0.0254 },
  };

  const temperatureUnits: Record<string, IConvertingUnits> = {
    celsius: { name: t("Celsius"), symbol: "°C", toBaseUnitFactor: 1 }, // Base unit
    fahrenheit: { name: t("Fahrenheit"), symbol: "°F", toBaseUnitFactor: 1 }, // Conversion logic needed
    kelvin: { name: t("Kelvin"), symbol: "K", toBaseUnitFactor: 1 }, // Conversion logic needed
  };

  const speedUnits: Record<string, IConvertingUnits> = {
    metersPerSecond: { name: t("Meters per second"), symbol: "m/s", toBaseUnitFactor: 1 }, // Base unit
    kilometersPerHour: { name: t("Kilometers per hour"), symbol: "km/h", toBaseUnitFactor: 0.277778 }, // 1 km/h = 0.277778 m/s
    milesPerHour: { name: t("Miles per hour"), symbol: "mph", toBaseUnitFactor: 0.44704 }, // 1 mph = 0.44704 m/s
    feetPerSecond: { name: t("Feet per second"), symbol: "ft/s", toBaseUnitFactor: 0.3048 }, // 1 ft/s = 0.3048 m/s
    knot: { name: t("Knot"), symbol: "kn", toBaseUnitFactor: 0.514444 }, // 1 knot = 0.514444 m/s
  };

  type temperatureUnits = "celsius" | "fahrenheit" | "kelvin";

  // Add conversion functions for temperature
  const convertTemperature = (value: number, fromUnit: temperatureUnits, toUnit: temperatureUnits): number => {
    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      return Math.round(((value * 9) / 5 + 32) * 100) / 100;
    }
    if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      return Math.round((((value - 32) * 5) / 9) * 100) / 100;
    }
    if (fromUnit === "celsius" && toUnit === "kelvin") {
      return Math.round((value + 273.15) * 100) / 100;
    }
    if (fromUnit === "kelvin" && toUnit === "celsius") {
      return Math.round((value - 273.15) * 100) / 100;
    }
    if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
      return Math.round((((value - 32) * 5) / 9 + 273.15) * 100) / 100;
    }
    if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
      return Math.round((((value - 273.15) * 9) / 5 + 32) * 100) / 100;
    }
    throw new Error(`Unsupported temperature conversion from ${fromUnit} to ${toUnit}`);
  };

  const convertToBaseUnit = (value: number, unit: string, unitMap: Record<string, IConvertingUnits>): number => {
    const unitInfo = unitMap[unit];
    if (!unitInfo) {
      throw new Error(`Unsupported unit: ${unit}`);
    }
    return value * unitInfo.toBaseUnitFactor;
  };

  const convertFromBaseUnit = (value: number, unit: string, unitMap: Record<string, IConvertingUnits>): number => {
    const unitInfo = unitMap[unit];
    if (!unitInfo) {
      throw new Error(`Unsupported unit: ${unit}`);
    }
    return Math.round((value / unitInfo.toBaseUnitFactor) * 100) / 100;
  };

  const convertMass = (value: number, fromUnit: string, toUnit: string): number => {
    const valueInBaseUnit = convertToBaseUnit(value, fromUnit, massUnits);
    return convertFromBaseUnit(valueInBaseUnit, toUnit, massUnits);
  };

  const convertLength = (value: number, fromUnit: string, toUnit: string): number => {
    const valueInBaseUnit = convertToBaseUnit(value, fromUnit, lengthUnits);
    return convertFromBaseUnit(valueInBaseUnit, toUnit, lengthUnits);
  };

  const convertSpeed = (value: number, fromUnit: string, toUnit: string): number => {
    const valueInBaseUnit = convertToBaseUnit(value, fromUnit, speedUnits);
    return convertFromBaseUnit(valueInBaseUnit, toUnit, speedUnits);
  };

  const convert = useCallback((value: number, fromUnit: string, toUnit: string, unitType: IPossibleUnits): number => {
    switch (unitType) {
      case "mass":
        return convertMass(value, fromUnit, toUnit);
      case "length":
        return convertLength(value, fromUnit, toUnit);
      case "temperature":
        return convertTemperature(value, fromUnit as temperatureUnits, toUnit as temperatureUnits);
      case "speed":
        return convertSpeed(value, fromUnit, toUnit);
      default:
        throw new Error(`Unsupported unit type: ${unitType}`);
    }
  }, []);

  return { convert, massUnits, lengthUnits, temperatureUnits, speedUnits };
};

export default useConversion;
