// store.js
import { configureStore } from '@reduxjs/toolkit';
import unitConvertingReducer from './unitConvertingSlice';
import sideMenuSlice from './sideMenuSlice';
import languageSelectedSlice from './languageSelectedSlice';

export const store = configureStore({
reducer: {
    unitConverting: unitConvertingReducer,
    sideMenu: sideMenuSlice,
    languageSelected: languageSelectedSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
