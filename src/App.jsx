import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Partfoliyo from './pages/Partfoliyo'
import Home from './pages/Home'
import Users from './pages/Users'
import Layout from './Layout/Layout'
import AuthFlow from './pages/AuthFLow'
import Login from './pages/Login'

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
        )
      },
      {
        path: "partfoliyo",
        element: (
          <AuthFlow>
            <Partfoliyo />
          </AuthFlow>
        )
      },
      {
        path: "users",
        element: (
          <AuthFlow>
            <Users />
          </AuthFlow>
        )
      },
      {
        path: "login",
        element: <Login />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App