import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import SignIn from "../pages/sign-in";
import SignUp from "../pages/sign-up";
import HomePage from "../pages/home";
import MultiStepForm from "../pages/multi-form";
import ContactManagement from "../pages/contact-management";
import ConditionForm from "../pages/condition-form";

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
        path: "multi",
        element: <MultiStepForm />,
      },
      {
        path: "contact-management",
        element: <ContactManagement />,
      },
      {
        path: "contion-form",
        element: <ConditionForm />,
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
