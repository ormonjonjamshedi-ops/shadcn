import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import { Lauout } from "./pages/Lauout";
import Home from "./pages/Home";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Lauout />,
    children: [
      { index: true,
         element: <Home/> },
      { path: "about", 
        element: <About /> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;