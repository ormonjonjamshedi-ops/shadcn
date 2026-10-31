import React, { useEffect, useState } from 'react'
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const isActive = (path) => location.pathname === path

  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)
  }, [location.pathname])

  const handleLogout = () => {
    localStorage.removeItem("token")
    setIsLoggedIn(false)
    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col font-sans">
      <header className="bg-slate-800/80 backdrop-blur border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          
          <Link to="/" className="text-2xl font-bold tracking-wide text-cyan-400 hover:text-cyan-300 transition-colors">
            ⚡ MY APP
          </Link>

          <nav className="flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <Link
                  to="/"
                  className={`px-4 py-2 rounded-lg font-medium text-base transition-all ${
                    isActive('/')
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  Home
                </Link>

                <Link
                  to="/partfoliyo"
                  className={`px-4 py-2 rounded-lg font-medium text-base transition-all ${
                    isActive('/partfoliyo')
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  Portfolio
                </Link>

                <Link
                  to="/users"
                  className={`px-4 py-2 rounded-lg font-medium text-base transition-all ${
                    isActive('/users')
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  Users
                </Link>

                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg font-medium text-base transition-all text-red-400 hover:bg-slate-700 hover:text-red-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className={`px-4 py-2 rounded-lg font-medium text-base transition-all ${
                  isActive('/login')
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout