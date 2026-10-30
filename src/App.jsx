
import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Partfoliyo from './pages/Partfoliyo';
import Home from './pages/Home';
import Users from './pages/Users';
import Layout from './Layout/Layout';



 const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/> ,
    children :[

      {
        index:true,
        element: <Home/>
      },
      {
       path:"partfoliyo",
        element:<Partfoliyo/>
      },
      {
        path:"users",
        element: <Users/>
      }
    ]
  },
]);
  return (
    <div>
  <RouterProvider router={router} />,
    </div>
  )
}
export default App