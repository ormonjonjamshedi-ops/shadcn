import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Dashboard } from "./Dashboard/Dashboard";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import Product from "./Pages/Product";


const Info = lazy(() => import("./Pages/Info"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { index: true,
         element: <Home /> },
      { path: "about", 
        element: <About /> },
      { path: "product", 
        element: <Product /> },
      {
        path: "info/:id",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Info />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;