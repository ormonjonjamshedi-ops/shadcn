import React from 'react'
import { Button } from "@/components/ui/button"
import ormonImg from "../assets/rob.png"
import ormonIm from "../assets/Card.png"
import ormonI from "../assets/Card (1).png"
import ormon from "../assets/Card (2).png"
import ormo from "../assets/Card (3).png"
import orm from "../assets/Card (4).png"
import or from "../assets/random.png"
import About from './About'
const Home = () => {
  return (
    <div>
      <div className='flex gap-10 p-20 m-auto items-center bg-cyan-300 '>
      <div className='flex flex-col gap-10 w-[600px] pt-[100px] p-10 '>
      <h1 className='text-8xl'>
        Transforming Data into <span className='bg-blue-600 text-white rounded-3xl h-[10px] text-7xl'>Decisions</span>  
      </h1>
      <p>Leverage the power of machine learning and AI to unlock insights and drive business growth</p>
      <Button className="p-9 text-3xl w-[250px] bg-blue-600">Book a Meeting</Button>
      </div>
      <img src={ormonImg} alt="" className='p-8 text-3xl ' />
      </div>
      <div className=' w-380 flex justify-between bg-black m-auto'>
          <img src={ormonIm} alt=""  />
           <img src={ormonI} alt=""  />
            <img src={ormon} alt=""  />
             <img src={ormo} alt=""  />
              <img src={orm} alt=""  />
      </div>
      <h1 className='text-7xl  p-10 w-380 m-auto bg-blue-950'>Our Ultimate Set of Services for Your <br />Ideas Implementation</h1>

       <div className='flex justify-around p-10 bg-blue-950'>
      <div className='w-65 h-90 border-8 rounded-3xl text-center'>
        <img src={or} alt="" />
        <h1>Predictive Analytics</h1>
        <p>Forecast trends and make data-driven decisions with our advanced ML models.</p>
      </div>
      <div className='w-65 h-90 border-8 rounded-3xl text-center'>
        <img src={or} alt="" />
        <h1>Predictive Analytics</h1>
        <p>Forecast trends and make data-driven decisions with our advanced ML models.</p>
      </div>
      <div className='w-65 h-90 border-8 rounded-3xl text-center'>
        <img src={or} alt="" />
        <h1>Predictive Analytics</h1>
        <p>Forecast trends and make data-driven decisions with our advanced ML models.</p>
      </div> 
     </div>
      <div className='flex flex-col gap-20 p-10 bg-blue-400 text-white'>
        <h1 className='text-6xl w-200 m-auto'>Frequently Asked Questions</h1>
        <div className='w-200 h-60 border-4 flex flex-col gap-5 p-5 m-auto '>
          <h1 className='text-3xl '> <span className='w-0 bg-blue-800 h-50  rounded-3xl'>  01  </span>   What services does Catalyst Analytics provide?   .       .   x</h1>
          <p className='text-2xl'>Catalyst Analytics offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more.</p>

        </div>
        <div className='w-200 h-35 border-4 flex flex-col gap-10 p-5 m-auto text-center'>
          <p className=' m-auto text-3xl '>  <span className='w-0 bg-blue-800 h-50  rounded-3xl'>  02 </span> Lorem Ipsum is simply dummy text of the printing   + </p>
        </div>
         <div className='w-200 h-35 border-4 flex flex-col gap-10 p-5 m-auto text-center'>
          <p className=' m-auto text-3xl'>  <span className='w-0 bg-blue-800 h-50  rounded-3xl'>  03  </span> Lorem Ipsum is simply dummy text of the printing  +</p>
        </div>
         <div className='w-200 h-35 border-4 flex flex-col gap-10 p-5 m-auto text-center '>
          <p className=' m-auto text-3xl'>  <span className='w-0 bg-blue-800 h-50  rounded-3xl'>  04  </span> Lorem Ipsum is simply dummy text of the printing  +</p>
        </div>
       
      </div>
      <About/>
    </div>
  )
}

export default Home