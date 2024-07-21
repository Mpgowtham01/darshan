import { configureStore } from "@reduxjs/toolkit";
import allTempleSlice from "./allTempleSlice";
import authSlice from "./authSlice";
import blogDetailsSlice from "./blogDetailsSlice";
import CartState from "./CartSlice";

export const store = configureStore({
  reducer: {
    allTemples: allTempleSlice,
    blogDetails: blogDetailsSlice,
    authState: authSlice,
    cart: CartState,
  },

  devTools: true,
});
