import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice.jsx";
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
