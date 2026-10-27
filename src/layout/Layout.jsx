import React from 'react'
import { Link, Outlet } from 'react-router-dom'



export const Layout = () => {
  return (
    <div>
      <nav className="w-380 my-5 h-20 m-auto  flex justify-around text-center text-black items-center text-3xl">
     
      <div className='flex gap-10'>
        <Link className="text-2xl" to="/">
        MAin
        </Link>
        <Link to="Catalog" className="text-2xl">
  Catalog
        </Link>

        <Link to="product" className="text-2xl">
     Product
        </Link>
          
        </div>
      </nav>

      <Outlet/>
    </div>
  )
}