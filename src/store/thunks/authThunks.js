import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";

export const singUpRequest = createAsyncThunk(
  "auth/singUpRequest",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/register/", userData);
      console.log("data: ", data);
      localStorage.setItem("auth", JSON.stringify(data));
      if (data.data.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/user");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const sigInRequest = createAsyncThunk(
  "auth/sigInRequest",
  async ({ userData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/auth/", userData);
      localStorage.setItem("auth", JSON.stringify(data));
      if (data.data.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/user");
      }

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  } 
);
