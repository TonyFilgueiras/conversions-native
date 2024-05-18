import { View, Text, StyleSheet, TextInput } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import React from "react";
import { colors } from "../constants/colorTheme";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import useConversion, { lengthUnits, massUnits, speedUnits, temperatureUnits } from "../hooks/useConversion";
import { IPossibleUnits } from "../typescript/IPossibleUnits";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function ConversionScreen() {
  const unitConverting = useSelector((state: RootState) => state.unitConverting.unit);
  const [value1, setValue1] = React.useState("0");
  const [value2, setValue2] = React.useState("0");
  const [unit1, setUnit1] = React.useState("");
  const [unit2, setUnit2] = React.useState("");
  const [symbol1, setSymbol1] = React.useState("");
  const [symbol2, setSymbol2] = React.useState("");
  const { convert } = useConversion();

  const data = ["test2", "fdsafsa", "minha pica"];

  const unitMapping: Record<string, any> = {
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

  React.useEffect(() => {
    const { defaultUnit1, defaultUnit2 } = unitMapping[unitConverting] || unitMapping.mass;
    setUnit1(defaultUnit1);
    setUnit2(defaultUnit2);
    
    console.log(unitConverting)
    console.log(unitMapping[unitConverting].units[unit1])
    console.log(unitMapping[unitConverting].units[unit2])

    const value1Number = Number(value1);
    const convertedValue = convert(value1Number, defaultUnit1, defaultUnit2, unitConverting);
    setValue2(String(convertedValue));
  }, [value1, unitConverting]);

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.contentContainer}
      scrollEnabled={true}
    >
      <View style={styles.unitContainer}>
        <TextInput style={styles.input} onChangeText={setValue1} placeholder="0" keyboardType="number-pad" />

        <Text style={styles.value}>{value1}</Text>
        <Text style={styles.symbol}>({symbol1})</Text>
        <SelectDropdown
          data={data}
          onSelect={() => console.log("selecionado")}
          renderButton={(selectedItem, isOpened) => {
            return <View style={styles.dropdownButtonStyle}>{selectedItem && <Text>{selectedItem}</Text>}</View>;
          }}
          renderItem={(item, index, isSelected) => {
            return (
              <View style={{ ...(isSelected && { backgroundColor: "#D2D9DF" }) }}>
                <Text>{item}</Text>
              </View>
            );
          }}
        />
      </View>
      <Text style={styles.text}>≅</Text>
      <View style={styles.unitContainer}>
        <TextInput style={styles.input} onChangeText={setValue2} value={value2} keyboardType="number-pad" />
        <Text style={styles.value}>{value2}</Text>
        {/* <Text style={styles.symbol}>({unitMapping[unitConverting].units[unit2].symbol})</Text> */}
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightPurple,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  text: {
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 40,
    color: colors.purple,
  },
  unitContainer: {
    flex: 1,
    margin: 20,
    borderColor: colors.purple,
    borderRadius: 20,
    borderWidth: 2,
    padding: 10,
  },
  input: {
    backgroundColor: "white",
    textAlign: "center",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  value: {
    fontSize: 60,
    color: colors.purple,
    textAlign: "center",
    includeFontPadding: false,
  },
  symbol: {
    fontSize: 20,
    includeFontPadding: false,
    textAlign: "center",
  },

  dropdownButtonStyle: {
    width: 200,
    height: 50,
    backgroundColor: "#E9ECEF",
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
});
