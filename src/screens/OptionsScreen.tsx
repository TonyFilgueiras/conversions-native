import { View, Text, StyleSheet, Image, ImageSourcePropType } from "react-native";
import React from "react";
import { colors } from "../constants/colorTheme";
import SelectDropdown from "react-native-select-dropdown";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../store/languageSelectedSlice";
import brazil from "../languages/flags/brasil.png"
import eua from "../languages/flags/eua.png"
import spain from "../languages/flags/spain.png"
import { RootState } from "../store/store";

type LanguageOptions = {
  label: string
  flag: ImageSourcePropType 
  value: string
}

const options: LanguageOptions[] = [
  { label: "Português", flag: brazil, value: "pt" },
  { label: "English", flag: eua, value: "en" },
  { label: "Español", flag: spain, value: "es" },
];

export default function OptionsScreen() {
  const languageSelected = useSelector((state: RootState) => state.languageSelected.language);
  const dispatch = useDispatch()
  const [languageSelectedDisplay, setLanguageSelected] = React.useState<LanguageOptions>()

  React.useEffect(() => {
    setLanguageSelected(options.find((item)=> item.value == languageSelected))
  },[languageSelected])

  return (
    <View style={styles.mainContainer}>
      <SelectDropdown
        data={options}
        onSelect={(selectedItem) => dispatch(setLanguage(selectedItem.value))}
        renderButton={() => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Image source={languageSelectedDisplay ? languageSelectedDisplay.flag : options[0].flag} style={styles.flag } /><Text>{languageSelectedDisplay ? languageSelectedDisplay.label : options[0].label}</Text>
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          if (languageSelectedDisplay!.value == item.value) {
            isSelected = true
          }
          return (
            <View
              style={{
                ...styles.dropdownMenuStyle,
                ...(isSelected && { backgroundColor: colors.lightPurple, borderWidth: 1 }),
              }}
            >
              <Image source={item.flag} style={styles.flag } />
              <Text >{item.label}</Text>
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
    justifyContent: "center",
    flex: 1,
  },
  flag: {
    marginRight: 10,
    width: 40,
    height: 30,
  },
  dropdownButtonStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.lightPurple,
    borderWidth: 2,
    borderColor: colors.purple,
    borderRadius: 10,
    margin: 40,
    padding: 15,
    color: "white",
  },
  dropdownMenuStyle: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});
