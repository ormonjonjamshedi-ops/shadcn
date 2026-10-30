import React from 'react'
import { Link, useLocation, Outlet } from 'react-router'

const Layout = () => {
  const location = useLocation()
  const isActive = (path) => location.pathname === path

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col font-sans">
      {/* Header / Navbar */}
      <header className="bg-slate-800/80 backdrop-blur border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo / Title */}
          <Link to="/" className="text-2xl font-bold tracking-wide text-cyan-400 hover:text-cyan-300 transition-colors">
            ⚡ MY APP
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-3">
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
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout