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
    logout: (state) => {
      state.role = null;
      state.token = null;
      localStorage.removeItem("auth");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(singUpRequest.pending, (state) => {
        state.isLoading = true;
        state.isError = null; 
      })
      .addCase(singUpRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.role = action.payload.data.role;
        state.token = action.payload.data.token;
        localStorage.setItem("auth", JSON.stringify(action.payload)); 
      })
      .addCase(singUpRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload; 
      });

    builder
      .addCase(sigInRequest.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(sigInRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.role = action.payload.data.role;
        state.token = action.payload.data.token;
        localStorage.setItem("auth", JSON.stringify(action.payload));
      })
      .addCase(sigInRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { isAuth, logout } = authSlice.actions;
