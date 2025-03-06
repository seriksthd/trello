import { configureStore } from "@reduxjs/toolkit";
import { trelloReducer } from "./slices/trelloSlice";
import { authSlice } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    trello: trelloReducer,
    auth: authSlice.reducer,
  },
});
