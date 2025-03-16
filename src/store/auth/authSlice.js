import { createSlice } from "@reduxjs/toolkit";
import { sigInRequest, singUpRequest } from "../thunks/authThunks";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    role: null,
    token: null,
    isLoading: false,
    isError: null,
  },
  reducers: {
    isAuth: (state, action) => {
      state.role = action.payload;
    },
    logout: (state, { payload }) => {
      state.role = null;
      state.auth = null;
      localStorage.removeItem("auth");
      payload("/");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(singUpRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(singUpRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.role = action.payload.data.role;
        state.token = action.payload.data.token;
      })
      .addCase(singUpRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
    builder.addCase(sigInRequest.fulfilled, (state, action) => {
      state.role = action.payload.data.role;
    });
  },
});

export const { isAuth, logout } = authSlice.actions;
