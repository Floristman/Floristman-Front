import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./UserSlice";
import { productSlice } from "./ProductSlice";

export const store = configureStore({
  reducer: {
    [userSlice.reducerPath]: userSlice.reducer,
    [productSlice.reducerPath]: productSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userSlice.middleware,productSlice.middleware)
});