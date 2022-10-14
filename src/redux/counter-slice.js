import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addOne(state) {
      state.counter++;
    },
    removeOne(state) {
      state.counter--;
    },
    addCustomValue(state, action) {
      state.counter += +action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
