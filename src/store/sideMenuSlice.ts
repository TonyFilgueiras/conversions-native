import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SideMenuState {
  isVisible: boolean;
}

const initialState: SideMenuState = {
  isVisible: false,
};

export const sideMenuSlice = createSlice({
  name: 'sideMenu',
  initialState,
  reducers: {
    toggleIsVisible: (state) => {
      state.isVisible = !state.isVisible;
    },
    closeMenu: (state) => {
      state.isVisible = false
    }
  },
});

// Action creators are generated for each case reducer function
export const { toggleIsVisible, closeMenu } = sideMenuSlice.actions;

export default sideMenuSlice.reducer;
