// bellCounterSingle.js
import { createSlice } from "@reduxjs/toolkit";

const bellCounterIndividualSlice = createSlice({
  name: "bellCounterSingle",
  initialState: {}, // The state will hold counts for each post by postId
  reducers: {
    increment: (state, action) => {
      const { postId } = action.payload;
      if (!state[postId]) {
        state[postId] = 0; // Initialize count for the post if it doesn't exist
      }
      state[postId] += 1; // Increment the counter for this specific post
    },
  },
});

export const { increment } = bellCounterIndividualSlice.actions;
export default bellCounterIndividualSlice.reducer;
