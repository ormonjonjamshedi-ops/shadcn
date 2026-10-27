import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { Layout } from "./layout/Layout";
import Main from "./Pages/Main";
import Catalog from "./Pages/Catalog";
import Product from "./Pages/Product";
import Login from "./Pages/Login";
import AuthFlow from "./Pages/AuthFlow";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AuthFlow>
          <Layout />
        </AuthFlow>
      ),
      children: [
        {
          index: true,
          element: <Main />,
        },
        {
          path: "product",

          element: <Product />,
        },
        {
          path: "Catalog",
          element: <Catalog />, 
        },
      ],
    },
    {
      path: "login",
      element: (
        <AuthFlow>
            <Login />
        </AuthFlow>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
