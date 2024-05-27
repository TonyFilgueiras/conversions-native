// languageSelectedSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import en from '../languages/en.json';
import pt from '../languages/pt.json';

interface LanguageState {
  language: 'en' | 'pt';
  translations: { [key: string]: string };
}

const initialState: LanguageState = {
  language: 'en',
  translations: en,
};

export const languageSlice = createSlice({
  name: 'languageSelected',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<'en' | 'pt'>) => {
      state.language = action.payload;
      state.translations = action.payload === 'en' ? en : pt;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
