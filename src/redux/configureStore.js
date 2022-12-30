import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";

export function configureAppStore() {
  const store = configureStore({
    reducer: {
      user: userReducer,
    },
  });

  return store;
}
