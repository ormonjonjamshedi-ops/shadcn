import React from 'react'
import { Link, Outlet } from 'react-router-dom'



export const Layout = () => {
  return (
    <div>
      <nav className="w-380  h-20 text-black text-3xl bg-blue-300 ">
     
      <div className='flex justify-around items-center m-auto pt-5'>
        <Link className="text-2xl" to="/">
        User
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