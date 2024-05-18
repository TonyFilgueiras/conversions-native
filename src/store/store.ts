// store.js
import { configureStore } from '@reduxjs/toolkit';
import unitConvertingReducer from './unitConvertingSlice';

export const store = configureStore({
  reducer: {
    unitConverting: unitConvertingReducer
  ,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
