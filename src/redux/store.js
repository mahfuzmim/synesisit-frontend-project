import { configureStore } from "@reduxjs/toolkit";
import bellCounterReducer from "./bellCounter";

const store = configureStore({
  reducer: {
    bellCounter: bellCounterReducer,
  },
});

export default store;
