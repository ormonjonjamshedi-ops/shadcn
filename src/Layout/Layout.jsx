import React from 'react'
import { Link, Outlet } from 'react-router'

export default function Layout() {
  return (
    <div>
         <div >
        <nav className='flex justify-around gap-10 p-3  bg-blue-950 text-white items-center m-auto max-w-400'>
   
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>Servise</Link>
        <Link to={"/product"}>Product</Link>
        
        
        </nav>
<Outlet/>
  </div>
    
    </div>
  )
}
