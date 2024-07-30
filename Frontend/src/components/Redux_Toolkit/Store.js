import { configureStore } from "@reduxjs/toolkit";
import allTempleSlice from "./allTempleSlice";
import authSlice from "./authSlice";
import blogDetailsSlice from "./blogDetailsSlice";
import CartState from "./CartSlice";
import LoginSlice from "./LoginSlice";

export const store = configureStore({
  reducer: {
    allTemples: allTempleSlice,
    blogDetails: blogDetailsSlice,
    authState: authSlice,
    cart: CartState,
    LoginSlice: LoginSlice,
  },

  devTools: true,
});
