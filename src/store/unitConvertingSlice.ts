// unitConvertingSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPossibleUnits } from '../typescript/IPossibleUnits';

interface UnitConvertingState {
  unit: IPossibleUnits
}

const initialState: UnitConvertingState = {
  unit: "",
};

export const unitConvertingSlice = createSlice({
  name: 'unitConverting',
  initialState,
  reducers: {
    changeUnit: (state, action: PayloadAction<UnitConvertingState['unit']>) => {
      state.unit = action.payload;
    },
    resetUnit: (state) => {
      state.unit = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeUnit, resetUnit } = unitConvertingSlice.actions;

export default unitConvertingSlice.reducer;
