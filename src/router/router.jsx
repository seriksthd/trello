import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import UserPage from "../pages/UserPage";
import { PrivateRoute } from "./PrivateRoute";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Register } from "../components/auth/Register";
import { Login } from "../components/auth/Login";
import MainLyout from "../components/layout/MainLyout";
import MainPage from "../pages/MainPage";
import { isAuth } from "../store/auth/authSlice";

export const AppRoutes = () => {
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  const { role } = useSelector((state) => state.auth);

  console.log(role);

  useEffect(() => {
    const { data } = JSON.parse(localStorage.getItem("auth")) || {};
    setState(data?.role);
    dispatch(isAuth(state));
  }, [dispatch, state]);

  const router = createBrowserRouter([
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
      ],
    },    

    {
      path: "/admin",
      element: (
        <PrivateRoute
          Component={<AdminPage />}
          fallBackPath="/login"
          isAllowed={role !== "ADMIN"}
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
      path: "/login",
      element: (
        <PrivateRoute
          Component={<Login />}
          fallBackPath="/"
          isAllowed={role}
          redirectPath={
            role === "USER" ? "/user" : role === "ADMIN" ? "/admin" : "/"
          }
        />
      ),
    },

    {
      path: "*",
      element: (
        <div>
          <h1>404 Not found</h1>

          <button>
            <Link to="/">go to Home pages</Link>
          </button>
        </div>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};
