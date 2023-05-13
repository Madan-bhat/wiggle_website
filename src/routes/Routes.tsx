import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import DashBoard from "../pages/Dashboard/Dashboard";
import Loading from "../pages/Loading/Loading";

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Loading />,
  },
  {
    path: "/Dashboard",
    element: <DashBoard />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);

export default router;
