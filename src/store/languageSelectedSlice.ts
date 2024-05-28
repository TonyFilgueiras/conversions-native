// languageSelectedSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import en from "../languages/en.json";
import pt from "../languages/pt.json";
import { getLocales } from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { AvailableLanguages } from "../typescript/IAvailableLanguages";

interface LanguageState {
  language: AvailableLanguages;
  translations: { [key: string]: string };
}

const initialState: LanguageState = {
  language: getLocales()[0].languageCode == "pt" ? "pt" : "en",
  translations: getLocales()[0].languageCode == "pt" ? pt : en,
};

export const languageSlice = createSlice({
  name: "languageSelected",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<AvailableLanguages>) => {
      AsyncStorage.setItem("language", action.payload)
      state.language = action.payload;
      state.translations = action.payload === "en" ? en : pt;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
