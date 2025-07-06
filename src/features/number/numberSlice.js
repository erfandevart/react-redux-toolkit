import { createSlice } from "@reduxjs/toolkit";

const numberSlice = createSlice({
  name: "number",
  initialState: {
    numberValue: 0,
  },
  reducers: {
    increment: (state) => {
      state.numberValue += 1;
    },
    decrement: (state) => {
      state.numberValue -= 1;
    },
  },
});

export default numberSlice.reducer;
export const { increment, decrement } = numberSlice.actions;
export const selectNumber = (state) => state.number.numberValue;
