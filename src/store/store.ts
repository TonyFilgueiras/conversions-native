// store.js
import { configureStore } from '@reduxjs/toolkit';
import unitConvertingReducer from './unitConvertingSlice';
import sideMenuSlice from './sideMenuSlice';

export const store = configureStore({
reducer: {
    unitConverting: unitConvertingReducer,
    sideMenu: sideMenuSlice
  ,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
