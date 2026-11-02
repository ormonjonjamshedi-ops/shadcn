import React, { useEffect, useState } from 'react'
import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom'
import { Heart, ShoppingCart, Menu, X } from 'lucide-react'

const Layout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [favCount, setFavCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const isActive = (path) => location.pathname === path

  const updateCounts = () => {
    const token = localStorage.getItem('token')
    setIsLoggedIn(!!token)

    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')

    setCartCount(cart.reduce((sum, item) => sum + (item.quantity || 1), 0))
    setFavCount(favorites.length)
  }

  useEffect(() => {
    updateCounts()
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    window.addEventListener('storage', updateCounts)
    return () => window.removeEventListener('storage', updateCounts)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    setIsLoggedIn(false)
    setMenuOpen(false)
    navigate('/login')
  }

  
  const linkClass = (path) =>
    `text-base font-medium relative pb-1 transition ${
      isActive(path)
        ? 'text-green-700 after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-green-600'
        : 'text-gray-600 hover:text-green-700'
    }`


  const mobileLinkClass = (path) =>
    `block px-4 py-3 rounded-lg font-medium transition ${
      isActive(path)
        ? 'bg-green-50 text-green-700'
        : 'text-gray-600 hover:bg-gray-50 hover:text-green-700'
    }`

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3 md:py-4">

          <Link to="/" className="flex items-center gap-2">
            <img src="/Vector.png" alt="GREENSHOP" className="h-7 md:h-8" />
            <span className="text-xl md:text-2xl font-bold text-green-700">GREENSHOP</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <Link to="/" className={linkClass('/')}>Home</Link>
            <Link to="/shop" className={linkClass('/shop')}>Shop</Link>
            <Link to="/plantCare" className={linkClass('/plantCare')}>Plant Care</Link>
            <Link to="/blogs" className={linkClass('/blogs')}>Blogs</Link>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">

            <Link to="/favorites"
              className="text-gray-600 hover:text-red-500 transition relative">
              <Heart size={22} />
              {favCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{favCount}</span>
              )}
            </Link>
            <Link to="/cart"
              className="text-gray-600 hover:text-green-700 transition relative">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{cartCount}</span>
              )}
            </Link>
            <div className="hidden md:block">
              {isLoggedIn ? (
                <button onClick={handleLogout} className="flex items-center gap-2 bg-green-700 text-white px-5 py-2 rounded-md hover:bg-green-600 transition">Logout</button>
              ) : (
                <Link to="/login" className="flex items-center gap-2 bg-green-700 text-white px-5 py-2 rounded-md hover:bg-green-600 transition">
                  <span>Login</span>
                </Link>
              )}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-700 p-1"
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-1">
            <Link to="/" className={mobileLinkClass('/')}>Home</Link>
            <Link to="/shop" className={mobileLinkClass('/shop')}>Shop</Link>
            <Link to="/plantCare" className={mobileLinkClass('/plantCare')}>Plant Care</Link>
            <Link to="/blogs" className={mobileLinkClass('/blogs')}>Blogs</Link>

            {isLoggedIn ? (
              <button onClick={handleLogout} className="mt-2 w-full bg-green-700 text-white px-5 py-3 rounded-md hover:bg-green-600 transition">Logout</button>
            ) : (
              <Link to="/login" className="mt-2 block text-center bg-green-700 text-white px-5 py-3 rounded-md hover:bg-green-600 transition">Login</Link>
            )}
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout