import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://611e64980f6a1799.mokky.dev",
  timeout: 5000, 
  headers: {
    "Content-Type": "application/json",
  },
});
