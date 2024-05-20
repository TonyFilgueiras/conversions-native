import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import useConversion, { lengthUnits, massUnits, speedUnits, temperatureUnits } from "../hooks/useConversion";

const unitMapping : Record<string, any> = {
  mass: {
    defaultUnit1: "kilogram",
    defaultUnit2: "pound",
    units: massUnits,
  },
  length: {
    defaultUnit1: "meter",
    defaultUnit2: "foot",
    units: lengthUnits,
  },
  temperature: {
    defaultUnit1: "celsius",
    defaultUnit2: "fahrenheit",
    units: temperatureUnits,
  },
  speed: {
    defaultUnit1: "metersPerSecond",
    defaultUnit2: "milesPerHour",
    units: speedUnits,
  },
};

const useConversionLogic = () => {
  const unitConverting = useSelector((state: RootState) => state.unitConverting.unit);
  const [value1, setValue1] = useState("0");
  const [value2, setValue2] = useState("0");
  const [unit1, setUnit1] = useState("");
  const [unit2, setUnit2] = useState("");
  const [symbol1, setSymbol1] = useState("");
  const [symbol2, setSymbol2] = useState("");
  const { convert } = useConversion();

  useEffect(() => {
    if (unitConverting) {
      const { defaultUnit1, defaultUnit2, units } = unitMapping[unitConverting];
      setUnit1(defaultUnit1);
      setUnit2(defaultUnit2);
      setSymbol1(units[defaultUnit1].symbol);
      setSymbol2(units[defaultUnit2].symbol);

      const value1Number = Number(value1);
      const convertedValue = convert(value1Number, defaultUnit1, defaultUnit2, unitConverting);
      setValue2(String(convertedValue));
    }
  }, [unitConverting]);


  function handleValueChange1(newValue: string) {
    // Replace commas with dots
    let sanitizedValue = newValue.replace(/,/g, '.');
  
    // Ensure there is only one dot in the value
    const dotCount = (sanitizedValue.match(/\./g) || []).length;
    if (dotCount > 1) {
      // Remove the last entered dot
      sanitizedValue = sanitizedValue.slice(0, sanitizedValue.lastIndexOf('.')) + sanitizedValue.slice(sanitizedValue.lastIndexOf('.') + 1);
    }
  
    // Prevent invalid formats like '0.2.456'
    if (/^\d*\.?\d*$/.test(sanitizedValue)) {
      setValue1(sanitizedValue);
      const value1Number = Number(sanitizedValue);
      const convertedValue = convert(value1Number, unit1, unit2, unitConverting);
      setValue2(String(convertedValue));
    }
  }

  function handleValueChange2(newValue: string) {
    // Replace commas with dots
    let sanitizedValue = newValue.replace(/,/g, '.');
  
    // Ensure there is only one dot in the value
    const dotCount = (sanitizedValue.match(/\./g) || []).length;
    if (dotCount > 1) {
      // Remove the last entered dot
      sanitizedValue = sanitizedValue.slice(0, sanitizedValue.lastIndexOf('.')) + sanitizedValue.slice(sanitizedValue.lastIndexOf('.') + 1);
    }
  
    // Prevent invalid formats like '0.2.456'
    if (/^\d*\.?\d*$/.test(sanitizedValue)) {
      setValue2(sanitizedValue);
      const value2Number = Number(sanitizedValue);
      const convertedValue = convert(value2Number, unit2, unit1, unitConverting);
      setValue1(String(convertedValue));
    }
  }
  
  
  const handleUnitChange1 = (selectedUnit: string) => {
    let otherUnit = unit2;
    if (unit2 == selectedUnit) {
      setUnit2(unit1);
      setSymbol2(symbol1)
      otherUnit = unit1;
    }
    setUnit1(selectedUnit);
    setSymbol1(unitMapping[unitConverting].units[selectedUnit].symbol);
    const convertedValue = convert(Number(value1), selectedUnit, otherUnit, unitConverting);
    setValue2(String(convertedValue));
  };

  const handleUnitChange2 = (selectedUnit: string) => {
    let otherUnit = unit1;
    if (unit1 == selectedUnit) {
      setUnit1(unit2);
      setSymbol1(symbol2)
      otherUnit = unit2;
    }
    setUnit2(selectedUnit);
    setSymbol2(unitMapping[unitConverting].units[selectedUnit].symbol);
    const convertedValue = convert(Number(value1), otherUnit, selectedUnit, unitConverting);
    setValue2(String(convertedValue));
  };

  const unitOptions = Object.keys(unitMapping[unitConverting]?.units || {}).map((key) => ({
    value: key,
    label: unitMapping[unitConverting].units[key].name + " " + `(${unitMapping[unitConverting].units[key].symbol})`,
  }));

  const selectedUnit1 = unitOptions.find((option) => option.value === unit1);
  const selectedUnit2 = unitOptions.find((option) => option.value === unit2);

  return {
    value1,
    setValue1,
    value2,
    setValue2,
    unit1,
    unit2,
    symbol1,
    symbol2,
    handleValueChange1,
    handleValueChange2,
    handleUnitChange1,
    handleUnitChange2,
    unitOptions,
    selectedUnit1,
    selectedUnit2,
  };
};

export default useConversionLogic;
