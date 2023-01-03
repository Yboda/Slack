import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import user from "../Redux/modules/userSlice";

export const store = configureStore({
  reducer: {
    user,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
