import { configureStore } from "@reduxjs/toolkit";
import auth from "./authSlice/auth";
const store = configureStore({
  reducer: {
    auth
  },
});

export default store;
