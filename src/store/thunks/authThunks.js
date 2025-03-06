import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";
import { loginSuccess } from "../auth/authSlice";
export const signUpRequest = createAsyncThunk(
  "auth/signUpRequest",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/register", userData);

      if (data.data.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/user");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const signInRequest = createAsyncThunk(
  "auth/signInRequest",
  async ({ userData, navigate }, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth", userData);
      localStorage.setItem("auth", JSON.stringify(data));
      dispatch(loginSuccess(data));  

      if (data.data.role === "ADMIN") {
        navigate("/");
      } else {
        navigate("/user");
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
