import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Layout1 from "../Dashboard/Layout";
import Home from "../pages/Home";
import Students from "../Dashboard/Oquvchilar";
import Dhome from "../Dashboard/Dhome";
import Kurs from "../Dashboard/Kurslar";
import Buyurtmachilar from "../Dashboard/Buyurtmachilar";
import Xizmatlar from "../Dashboard/Xizmatlar";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Layout1 />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/dashboard",
        element: <Dhome />,
      },
      {
        path: "/dashboard/oquvchilar",
        element: <Students />,
      },
      {
        path: "/dashboard/kurslar",
        element: <Kurs />,
      },
      {
        path: "/dashboard/buyurtmachilar",
        element: <Buyurtmachilar />,
      },

      {
        path: "/dashboard/xizmatlar",
        element: <Xizmatlar />,
      },
    ],
  },
]);

export default router;
