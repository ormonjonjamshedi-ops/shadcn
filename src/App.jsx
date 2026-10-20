import React from 'react'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import About from './pages/Servise';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import NotFond from './pages/NotFond';
import Contact from './pages/Contact';
import Table from './pages/CareerDetails';
import Servise from './pages/Servise';
import Careers from './pages/Careers';
import CareerDetails from './pages/CareerDetails';

export default function App() {
  const router = createBrowserRouter([
  {
   path :"/",
   element: <Layout/>,
   children:[
    {
      index:true,
      element:<Home/>
    },
    {
      path:"servise",
      element:<Servise/>
    },
     {
      path:"careers",
      element:<Careers/>
    },
 {
      path:"careerDetails",
      element:<CareerDetails/>
    },
     {
      path:"contact",
      element:<Contact/>
    },
    
   ]
  },
  {
    path:"*",
    element:<NotFond/>
  }
]);

  return (
     <RouterProvider router={router} />
  )
}
