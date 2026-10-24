import React from 'react'
import { lazy, Suspense } from "react"
import { Link, Outlet } from 'react-router'

export const Dashboard = () => {
  return (
    <div>
            <div>
              
      <nav className="w-380 my-5 h-20 m-auto  flex justify-around text-center text-black items-center text-3xl">
         <img src='/public/logo.png' alt="" /> <Link className="text-2xl" to="/">
     About
        </Link>
        <Link to="about" className="text-2xl">
         Courses
        </Link>

        <Link to="product" className="text-2xl">
     Product
        </Link>
        <button className='p-5 bg-red-500 hover:bg-red-200 border-2 rounded-4xl text-white'>consultation</button>
        <button className='p-5 bg-gray-500 hover:bg-red-200 border-2 rounded-4xl'>
            Log in / Register
        </button>
       
      </nav>

      <Outlet />
    </div>

    </div>
  )
}
