import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice.jsx";
import authReducer from "../features/AuthSlice.jsx";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
