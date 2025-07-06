import { createSlice } from "@reduxjs/toolkit";
import { increment as incrementCounter } from "../counter/counterSlice";
import { act } from "react";

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
  extraReducers: (builder) => {
    builder.addCase(incrementCounter, (state, action) => {
      state.numberValue++;
    });
  },
});

export default numberSlice.reducer;
export const { increment, decrement } = numberSlice.actions;
export const selectNumber = (state) => state.number.numberValue;
