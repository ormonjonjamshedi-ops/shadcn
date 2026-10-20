import React from 'react'
import { Link, Outlet } from 'react-router'
import ormonImg from "../assets/Logo.png"
import { Button } from "@/components/ui/button"
const Layout =()=> {
  return (
    <div >
        <nav className='flex justify-around gap-10 p-3  bg-blue-950 text-white items-center m-auto max-w-400'>
        <img src={ormonImg} alt="Nott" />
          <div className='flex gap-10 '>  
        <Link to={"/"}>Home</Link>
        <Link to={"/servise"}>Servise</Link>
        <Link to={"/careers"}>Careers</Link>
        <Link to={"/careerDetails"}>Career Details</Link>
        <Link to={"/contact"}>Contact</Link>
             </div>
            
                <Button className="bg-blue-700 hover:bg-blue-300 w-[150px] h-[50px]">Contact Us</Button>
             
        </nav>
<Outlet/>
               </div>
    
  )
}
export default Layout