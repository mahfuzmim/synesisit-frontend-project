import { createSlice } from "@reduxjs/toolkit";

const bellCounterSlice = createSlice({
  name: "bellCounter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
  },
});

export const { increment, reset } = bellCounterSlice.actions;

export default bellCounterSlice.reducer;
