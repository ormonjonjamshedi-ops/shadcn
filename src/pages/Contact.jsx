import React from 'react'
import ormonIm from "../assets/cont.png"
import About from './About'
export default function Contact() {
  return (
    <div> <section className="lg:max-w-330 w-[90%] m-auto lg:my-20 my-10 bg-[#141414] rounded-2xl relative flex items-center justify-start text-white">
       <img className="absolute lg:w-[45%] left-190  " src={ormonIm} alt="" />
        <img className="absolute  left-0 top-0 " src="../../public/w2.png" alt="" />
        <div className="w-[90%] m-auto lg:py-20 flex items-center lg:flex-row flex-col justify-between relative">
            <div className="flex flex-col items-start gap-7 w-full lg:py-0 py-15 gap-y-10 lg:w-[60%]">
                <h1 className="lg:text-4xl text-2xl font-bold">Contact Us</h1>
                <p className="">Get in touch with our team to discuss how we can help transform your business.We’re here to help.</p>
                        <button className="hover:bg-linear-to-b from-white to-[#0A84FF]   lg:hover:p-[8px_16px] hover:p-1 hover:rounded-2xl hover:text-black hover:duration-500 duration-500 hover:ease-in-out ease-in-out bg-[#0A84FF] p-[15px_35px] rounded-2xl text-white lg:flex hidden active:scale-1">Get In Touch Now</button>
            </div>
            <img className="lg:w-[40%]" src="../../public/e4.png" alt="" />
        </div>
    </section>
    <section className="lg:max-w-330 w-[90%] m-auto lg:flex-row flex-col flex items-start justify-between lg:my-30 my-10 text-white">
                <div className="lg:w-[50%] w-full lg:p-10 p-5 flex flex-col items-start gap-15 bg-[#141414] rounded-2xl">
            <h1 className="text-3xl">Send Us a Message</h1>
          <div className="w-full flex-col items-start flex gap-5">
              <div className="w-full flex items-center justify-between">
           <input className="bg-[#202020] rounded-md w-[49%] py-3 pl-3" placeholder="First Name*" type="text" />
           <input className="bg-[#202020] rounded-md w-[49%] py-3 pl-3" placeholder="Last Name*" type="text" />
            </div>
            <input className="bg-[#202020] rounded-md w-full py-3 pl-3" placeholder="Email" type="text" />
             <input className="bg-[#202020] rounded-md w-full py-3 pl-3" placeholder="Company" type="text" />
<div className="bg-[#202020] rounded-md w-full py-3 pl-3 flex items-center gap-3">
    <div className="flex items-center gap-3 bg-[#323232] p-4 rounded-md ">
        <img src="../../public/e3.png" alt="" />
        <p>+1</p>
        <i className="fa-solid fa-sort-down"></i>
    </div>
             <input  placeholder="Phone Number" type="text" />
</div>
<textarea className="bg-[#202020] p-5 h-50 w-full rounded-md" name="" id="">Message</textarea>
        <button className=" items-center gap-3 w-full  justify-center hover:bg-linear-to-b from-white to-[#0A84FF]   lg:hover:p-[8px_16px] hover:p-1 hover:rounded-2xl hover:text-black hover:duration-500 duration-500 hover:ease-in-out ease-in-out bg-[#0A84FF] p-[15px_35px] rounded-2xl text-white flex active:scale-1">Send <i className="fa-brands fa-telegram"></i></button>
          </div>
        </div>
    <div className="lg:w-[48%] flex flex-col items-start gap-5">
            <div className="text-white  w-full lg:p-10 p-5 flex gap-8 flex-col items-start bg-[#141414] rounded-md">
            <h1 className="text-3xl">Contact Information</h1>
            <div className="flex items-center gap-3">
                <i className="fa-regular fa-envelope text-blue-600 text-3xl"></i>
                <h1><b>Email</b> <br />contact@catalystanalytics.io</h1>
            </div>
            <div className="flex items-center gap-3">
               <i className="fa-solid fa-phone  text-blue-600 text-3xl"></i>
                <h1><b>Phone</b> <br />(469) 712-4672</h1>
            </div>
            <div className="flex items-center gap-3">
               <i className="fa-solid fa-location-dot  text-blue-600 text-3xl"></i>
                <h1><b>Office</b> <br />5511 Parkcrest Dr, Suite 103 <br /> 
Austin, TX 78731 <br />
United States</h1>
            </div>
        </div>
        <div className="text-white  w-full lg:p-10 p-5 flex gap-10 flex-col items-start bg-[#141414] rounded-md" >
             <h1 className="text-3xl">Contact Information</h1>
             <p>Want to discuss your project in detail? Schedule a free 30-minute consultation with our team of experts. We'll help you understand how our solutions can benefit your business.</p>
                     <button className="hover:bg-linear-to-b from-white to-[#0A84FF] w-full   lg:hover:p-[8px_16px] hover:p-1 hover:rounded-2xl hover:text-black hover:duration-500 duration-500 hover:ease-in-out ease-in-out bg-[#0A84FF] p-[15px_35px] rounded-2xl text-white flex justify-center  active:scale-1">Book a Meeting</button>
        </div>
    </div>
    </section>
    <About/> 
          </div>
  )
}
