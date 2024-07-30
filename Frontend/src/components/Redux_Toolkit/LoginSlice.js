import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  role: null,
  token: null,
  id: null,
  vendor: null,
};

const LoginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin(state, action) {
      const { isLogin, role, token, id, vendor } = action.payload;
      state.isLogin = isLogin;
      state.role = role;
      state.token = token;
      state.id = id;
      state.vendor = vendor;
    },
    userLogout(state) {
      state.isLogin = false;
      state.role = null;
      state.token = null;
      state.id = null;
      state.vendor = null;
    },
  },
});

export const { userLogin, userLogout } = LoginSlice.actions;

export default LoginSlice.reducer;
