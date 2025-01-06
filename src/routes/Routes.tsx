import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import SignIn from "../pages/sign-in";
import SignUp from "../pages/sign-up";
import HomePage from "../pages/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
  //   {
  //     path: "/sign-in",
  //     element: <SignIn />,
  //   },
  //   {
  //     path: "/sign-up",
  //     element: <SignUp />,
  //   },
]);
