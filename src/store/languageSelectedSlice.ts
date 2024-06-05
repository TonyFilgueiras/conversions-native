// languageSelectedSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import en from "../languages/en.json";
import pt from "../languages/pt.json";
import es from "../languages/es.json";
import { getLocales } from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { AvailableLanguages } from "../typescript/IAvailableLanguages";

interface LanguageState {
  language: AvailableLanguages;
  translations: { [key: string]: string };
}

const getDefaultLanguage = (): AvailableLanguages => {
  const languageCode = getLocales()[0].languageCode;
  if (languageCode === "pt") return "pt";
  if (languageCode === "es") return "es";
  return "en";
};

const getTranslations = (language: AvailableLanguages) => {
  switch (language) {
    case "pt":
      return pt;
    case "es":
      return es;
    default:
      return en;
  }
};

const initialState: LanguageState = {
  language: getDefaultLanguage(),
  translations: getTranslations(getDefaultLanguage()),
};

export const languageSlice = createSlice({
  name: "languageSelected",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<AvailableLanguages>) => {
      AsyncStorage.setItem("language", action.payload);
      state.language = action.payload;
      state.translations = getTranslations(action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
