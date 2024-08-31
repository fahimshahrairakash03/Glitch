import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import WorkPage from "../pages/WorkPage/WorkPage/WorkPage";

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
    ],
  },
]);
