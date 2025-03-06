import { createSlice } from "@reduxjs/toolkit";
import { signInRequest, signUpRequest } from "../thunks/authThunks";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    role: null,
    registrationStatus: null,
    auth: localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : null,
  },
  reducers: {
    logout: (state, { payload }) => {
      state.role = null;
      state.auth = null;
      localStorage.removeItem("auth");
      payload("/");
    },
    loginSuccess: (state, action) => {
      state.auth = action.payload;
      state.role = action.payload.data.role;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpRequest.pending, (state) => {
        state.registrationStatus = null;
      })
      .addCase(signUpRequest.fulfilled, (state, action) => {
        state.registrationStatus = null;
        state.role = action.payload.role;
      })
      .addCase(signUpRequest.rejected, (state, action) => {
        state.registrationStatus = action.payload;
      });

    builder.addCase(signInRequest.fulfilled, (state, action) => {
      state.role = action.payload.data.role;
      state.auth = action.payload;
    });
  },
});

export const { logout, loginSuccess } = authSlice.actions;
export default authSlice.reducer;
