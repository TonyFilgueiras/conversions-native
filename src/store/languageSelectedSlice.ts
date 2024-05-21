import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageSelectedState {
  language: boolean;
}

const initialState: LanguageSelectedState = {
  language: false,
};

export const languageSelectedSlice = createSlice({
  name: 'languageSelected',
  initialState,
  reducers: {
    toggleIsVisible: (state) => {
      state.language = !state.language;
    },
    closeMenu: (state) => {
      state.language = false
    }
  },
});

// Action creators are generated for each case reducer function
export const { toggleIsVisible, closeMenu } = languageSelectedSlice.actions;

export default languageSelectedSlice.reducer;
