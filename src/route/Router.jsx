import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Login from "../component/Login";
import ForgetPassword from "../pages/ForgetPassword";
import SignUp from "../component/SignUp";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
  
  {
    path: "/resetPass",
    element: <ForgetPassword/>,
  },
  {
    path: "/signup",
    element: <SignUp/>,
  },
  {
    path: "/upprofile",
    element: <PrivateRoute><UpdateProfile/></PrivateRoute>,
  },
  {
    path: "*",
    element: <NotFound/>,
  },
]);
