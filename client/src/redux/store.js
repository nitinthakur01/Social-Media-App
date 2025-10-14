import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice/index.js";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;
