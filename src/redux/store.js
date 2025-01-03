import { configureStore } from "@reduxjs/toolkit";
import bellCounterReducer from "./bellCounter";
import bellCounterSingleReducer from "./bellCounterSingle";

const store = configureStore({
  reducer: {
    bellCounter: bellCounterReducer,
    bellCounterSingle: bellCounterSingleReducer,
  },
});

export default store;
