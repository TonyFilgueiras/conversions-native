import React from "react";
import { View, Text, TextInput } from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import { colors } from "../constants/colorTheme";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import useConversionLogic from "../hooks/useConversionLogic";
import { StyleSheet } from "react-native";

export default function ConversionScreen() {
  const {
    value1,
    setValue1,
    value2,
    setValue2,
    symbol1,
    symbol2,
    handleValueChange1,
    handleValueChange2,
    handleUnitChange1,
    handleUnitChange2,
    unitOptions,
    selectedUnit1,
    selectedUnit2,
  } = useConversionLogic();

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.contentContainer}
      scrollEnabled={true}
    >
      <View style={styles.unitContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleValueChange1}
          placeholder="0"
          onFocus={() => value1 === "0" && setValue1("")}
          value={value1}
          keyboardType="number-pad"
        />
        <View>
          <Text style={styles.value}>{value1 ? value1 : "0"}</Text>
          <Text style={styles.symbol}>({symbol1})</Text>
        </View>
        <SelectDropdown
          data={unitOptions}
          onSelect={(selectedItem) => handleUnitChange1(selectedItem.value)}
          renderButton={() => {
            return <View style={styles.dropdownButtonStyle}>{selectedUnit1 && <Text>{selectedUnit1.label}</Text>}</View>;
          }}
          renderItem={(item, index, isSelected) => {
            if (item.value == selectedUnit1!.value) {
              isSelected = true
            }
            return (
              <View style={{ ...styles.dropdownMenuStyle, ...(isSelected && { backgroundColor: colors.lightPurple, borderWidth: 1 }) }}>
                <Text>{item.label}</Text>
              </View>
            );
          }}
        />
      </View>
      <Text style={styles.text}>≅</Text>
      <View style={styles.unitContainer}>
        <TextInput
          style={styles.input}
          value={value2}
          placeholder="0"
          onChangeText={handleValueChange2}
          onFocus={() => value2 === "0" && setValue2("")}
          keyboardType="number-pad"
        />
        <View>
          <Text style={styles.value}>{value2 ? value2 : "0"}</Text>
          <Text style={styles.symbol}>({symbol2})</Text>
        </View>
        <SelectDropdown
          data={unitOptions}
          onSelect={(selectedItem) => handleUnitChange2(selectedItem.value)}
          renderButton={() => {
            return <View style={styles.dropdownButtonStyle}>{selectedUnit2 && <Text>{selectedUnit2.label}</Text>}</View>;
          }}
          renderItem={(item, index, isSelected) => {
            if (item.value == selectedUnit2!.value) {
              isSelected = true
            }
            return (
              <View style={{ ...styles.dropdownMenuStyle, ...(isSelected && { backgroundColor: colors.lightPurple, borderWidth: 1 }) }}>
                <Text>{item.label}</Text>
              </View>
            );
          }}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundPurple,
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
    backgroundColor: colors.lightPurple,
    justifyContent: "space-between",
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
    margin: 10,
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
    color: colors.purple,
  },
  dropdownButtonStyle: {
    backgroundColor: "white",
    borderWidth: 1,
    height: 40,
    margin: 10,
    padding: 10,
  },
  dropdownMenuStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});
