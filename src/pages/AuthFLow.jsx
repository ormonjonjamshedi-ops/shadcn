import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const AuthFlow = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const token = localStorage.getItem("token")
    const isLoginPage = location.pathname === "/login"

    if (token && isLoginPage) {
      navigate("/", { replace: true })
    } else if (!token && !isLoginPage) {
      navigate("/login", { replace: true })
    }
  }, [location.pathname, navigate])

  return <>{children}</>
}

export default AuthFlow