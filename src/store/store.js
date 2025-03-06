import { configureStore } from "@reduxjs/toolkit";
import { trelloReducer } from "./slices/trelloSlice";
import { authSlice } from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    todos: trelloReducer,
    auth: authSlice.reducer,
  },
});
