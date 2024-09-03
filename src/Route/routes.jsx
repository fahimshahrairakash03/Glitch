import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import WorkPage from "../pages/WorkPage/WorkPage/WorkPage";
import ServicePage from "../pages/ServicePage/ServicePage/ServicePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/work",
        element: <WorkPage></WorkPage>,
      },
      {
        path: "/service",
        element: <ServicePage></ServicePage>,
      },
    ],
  },
]);
