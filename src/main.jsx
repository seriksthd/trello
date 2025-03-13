import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AppRoutes } from "./router/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <AppRoutes/>
    </Provider>
  </StrictMode>
);
