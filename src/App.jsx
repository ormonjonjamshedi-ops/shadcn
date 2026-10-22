import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Main } from './pages/Main';
import { Catalog } from './pages/Catalog';
import Product from './pages/Product';
import { Deshboard } from './Deshboard/Deshboard';
import { About } from './pages/About';
import { Vork } from './pages/Vork';
import { Order } from './pages/Order';

const App = () => {
    const router = createBrowserRouter([
  {
    path: "/",
    element: <Deshboard/>,
    children : [
        {
            index : true ,
            element : <Main/>
        },
           {
            path:'Catalog' ,
            element : <Catalog/>,
            children:[
                {
          path:':id',
          element:<Product/>
                 },
            ]
        },
        
         {
            path:'About' ,
            element : <About/>
        },
        
         {
            path:'Vork' ,
            element : <Vork/>
        },
        {
            path:'Order' ,
            element : <Order/>
        },
          
          
        
    ]
  },

]);
  return (
    <div>
  <RouterProvider router={router} />
    </div>
  )
}

export default App
