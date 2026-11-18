import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Lauout } from "./pages/Lauout";
import Home from "./pages/Home";
import About from "./pages/Jotai";
import SyncZustand from "./pages/SyncZustand";
import SyncRedux from "./pages/SyncRedux";
import SyncJotay from "./pages/SyncJotay";
import Zustand from "./pages/Zustand";
import Redux from "./pages/Redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Lauout />,
    children: [
      { index: true,
         element: <Home/> },
      { path: "about", 
        element: <About /> },
        { path: "zustand", 
        element: <Zustand/> },
        { path: "redux", 
        element: <Redux/> },
      { path: "Asincjotay", 
        element: <SyncJotay/> },
      { path: "SyncZus", 
        element: <SyncZustand/> },
        { path: "SyncRedux", 
        element: <SyncRedux/> },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;