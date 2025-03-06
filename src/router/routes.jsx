import { createBrowserRouter, Link } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import MainPage from "../pages/MainPage";
import MainLyout from "../components/layout/MainLyout";
import UserPage from "../pages/UserPage";
import AdminPage from "../pages/AdminPage";
import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Registeer";

const authData = JSON.parse(localStorage.getItem("auth")) || {};
const role = authData?.data?.role;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLyout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute
            Component={<MainPage />}
            fallBackPath="/login"
            isAllowed={!role}
          />
        ),
      },

      {
        path: "/user",
        element: (
          <PrivateRoute
            Component={<UserPage />}
            fallBackPath="/login"
            isAllowed={role !== "USER"}
          />
        ),
      },

      {
        path: "/admin",
        element: (
          <PrivateRoute
            Component={<AdminPage/>}
            fallBackPath="/login"
            isAllowed={role !== "ADMIN"}
          />
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PrivateRoute
        Component={<Login />}
        fallBackPath="/"
        isAllowed={role}
      />
    ),
  },
  {
    path: "/register",
    element: (
      <PrivateRoute
        Component={<Register />}
        fallBackPath="/"
        isAllowed={role}
      />
    ),
  },

  {
    path: "*",
    element: (
      <h1>
        404 Not found <Link to={"/"}>go to home</Link>
      </h1>
    ),
  },
]);
