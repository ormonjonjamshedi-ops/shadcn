import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home'
import Shop from './pages/Shop'
import PlantCare from './pages/PlantCare'
import Blogs from './pages/Blogs'
import Layout from './Layout/Layout'
import AuthFlow from './pages/FLowPage'
import Login from './pages/Login'
import Favorites from './pages/Favorites'
import Cart from './pages/Cart'
import ThemeToggle from "./ThemeToggle"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <AuthFlow>
            <Home />
          </AuthFlow>
        ),
      },
      {
        path: "shop",
        element: (
          <AuthFlow>
            <Shop />
          </AuthFlow>
        ),
      },
      {
        path: "plantcare",
        element: (
          <AuthFlow>
            <PlantCare />
          </AuthFlow>
        ),
      },
      {
        path: "blogs",
        element: (
          <AuthFlow>
            <Blogs />
          </AuthFlow>
        ),
      },
      {
        path: "favorites",
        element: (
          <AuthFlow>
            <Favorites />
          </AuthFlow>
        ),
      },
      {
        path: "cart",
        element: (
          <AuthFlow>
            <Cart />
          </AuthFlow>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />

      <div className="fixed bottom-6 right-6 z-50">
        <ThemeToggle />
      </div>
    </>
  )
}

export default App