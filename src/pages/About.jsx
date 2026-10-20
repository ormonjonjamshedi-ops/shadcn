import React from 'react'
import ormonImg from "../assets/Logo.png"
import ormonIm from "../assets/sub.png"

export default function About() {
  return (
    <div className='bg-black text-white w-380'>
        <div className='flex justify-around aline p-10'>
            <img src={ormonImg} alt="" />
            <div className='flex gap-20 text-center m-auto'>
<p>Home</p>
<p>Servise</p>
<p>About Us</p>
<p>Portfolio</p>
<p>Careers</p>

            </div>
           <img src={ormonIm} alt="" />
        </div>
        <div className='flex justify-around p-20'>
            <p>📧 contact@catalystanalytics.io</p>
            <p>📞 +1 (469) 712-4672</p>
            <p>📌5511 Parkcrest Dr, Suite 103, Austin, TX 78731</p>
            <p>Privacy Policy 
Terms of Service</p>
        </div> 
        <p className='w-100 m-auto'>© 2025 Catalyst Analytics. All rights reserved.</p>
    </div>
  )
}
