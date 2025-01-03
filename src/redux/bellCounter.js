import { createSlice } from "@reduxjs/toolkit";

const bellCounterSlice = createSlice({
  name: "bellCounter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1; // Increment the counter
    },
  },
});

export const { increment, reset } = bellCounterSlice.actions;

export default bellCounterSlice.reducer;
