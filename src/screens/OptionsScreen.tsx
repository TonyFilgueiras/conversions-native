import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../constants/colorTheme";
import SelectDropdown from "react-native-select-dropdown";

const options = [{ label: "Português", flag: "", value: "1" }];

export default function OptionsScreen() {
  console.log(options[0].label);
  return (
    <View style={styles.mainContainer}>
      <SelectDropdown
        data={options}
        onSelect={(selectedItem) => console.log(selectedItem.label)}
        renderButton={(selectedItem) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Text>{selectedItem ? selectedItem.label : options[0].label}</Text>
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          if (item.value == options[0].value) {
            isSelected = true;
          }
          console.log(item);
          return (
            <View
              style={{
                ...styles.dropdownMenuStyle,
                ...(isSelected && { backgroundColor: colors.lightPurple, borderWidth: 1 }),
              }}
            >
              <Text>{item.label}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.backgroundPurple,
    flex: 1,
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
