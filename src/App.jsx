import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/Home';
import About from './pages/About';
import ProductsById from './pages/ProductsById';
import Product from './pages/Product';
import Layout from './Layout/Layout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
      {
        index:true,
        element:<Home/>

      },{
        path:"about",
        element:<About/>
      },
      {
        path:"product",
        element:<Product/>
      },
      {
        path:"products/:id",
        element:<ProductsById/>
      }
    ]
  },
]);
export default function App() {
  
  return (
    <div>  <RouterProvider router={router} /></div>
  )
}
