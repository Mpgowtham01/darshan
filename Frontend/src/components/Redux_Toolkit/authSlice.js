import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  loading: false,
};

export const authSlice = createSlice({
  name: "Auth Store",
  initialState,

  reducers: {
    setAuthenticated: (state, action) => {
      console.log("Payload", action.payload);
      state.isAuthenticated = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setAuthenticated, setLoading } = authSlice.actions;

export default authSlice.reducer;
