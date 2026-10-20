import React from 'react'
import ormonIm from "../assets/calogo1.png"
import About from './About'
export default function Careers() {
  return (
    <div>
         <section className="lg:max-w-330 w-[90%] m-auto lg:my-20 my-10 bg-[#141414] rounded-2xl relative flex items-center justify-start text-white">
       <img className=" absolute lg:w-[35%] left-200   " src={ormonIm} alt="" />
        <img className="absolute  left-0 top-0 " src="../../public/w2.png" alt="" />
        <div className="w-[90%] m-auto lg:py-20 flex items-center lg:flex-row flex-col justify-between relative">
            <div className="flex flex-col items-start gap-7 w-full lg:py-0 py-15 gap-y-10 lg:w-[60%]">
                <h1 className="lg:text-4xl text-2xl font-bold">Build the Future with Us</h1>
                <p className="">We’re a team of builders, thinkers, and explorers using AI, machine learning, and blockchain to solve meaningful problems.</p>
                        <button className="hover:bg-linear-to-b from-white to-[#0A84FF]   lg:hover:p-[8px_16px] hover:p-1 hover:rounded-2xl hover:text-black hover:duration-500 duration-500 hover:ease-in-out ease-in-out bg-[#0A84FF] p-[15px_35px] rounded-2xl text-white lg:flex hidden active:scale-1">Explore Open Positions</button>
            </div>
            <img src="../../public/w1.png" alt="" />
        </div>
    </section> 
    <section className="w-full lg:w-[380] m-auto bg-[#0B0B0B] text-white">
        <div className="lg:max-w-330 w-[90%] gap-y-7 gap-x-5 m-auto lg:py-15 py-10 flex lg:flex-row flex-col items-center justify-between">
            <div className="lg:w-[18%] w-full justify-between flex items-center gap-20 h-20 p-5 bg-[#191919] rounded-2xl">
             <h1>Departments</h1>
             <i className="fa-solid fa-sort-down"></i>
            </div>
              <div className="lg:w-[18%] w-full justify-between flex items-center gap-20 h-20 p-5 bg-[#191919] rounded-2xl">
             <h1>Experience</h1>
             <i className="fa-solid fa-sort-down"></i>
            </div>
              <div className="lg:w-[18%] w-full justify-between flex items-center gap-20 h-20 p-5 bg-[#191919] rounded-2xl">
             <h1>Job Type</h1>
             <i className="fa-solid fa-sort-down"></i>
            </div>
              <div className="lg:w-[20%] w-full justify-between flex items-center gap-20 h-20 p-5 bg-[#191919] rounded-2xl">
             <h1>Workplace Type</h1>
             <i className="fa-solid fa-sort-down"></i>
            </div>
                <div className=" flex items-center gap-10 h-20 p-5 bg-[#191919] rounded-2xl">
            <input placeholder="Search by keywords..." type="text" name="" id="" />
            <div className="p-2 rounded-[50%] bg-[#0A84FF] "><i className="fa-solid fa-magnifying-glass"></i></div>
            </div>
        </div>
    </section>
    <section className="lg:max-w-330 w-[90%] m-auto lg:my-20 my-10 flex flex-col items-center gap-15 text-white">
        <h1 className="lg:text-4xl text-2xl font-semibold">Open Positions</h1>
        <div className="w-full gap-10 flex flex-wrap">
            <div className="lg:w-[48%] w-full flex flex-col items-start gap-10 lg:p-10 p-5 bg-[#191919] rounded-2xl">
                <div className="flex items-center gap-5">
                    <img src="../../public/w3.png" alt="" />
                    <h1 className="text-2xl">Web Designer</h1>
                </div>
                <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
                    <h1>Salary</h1>
                    <div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div>
                    <b>$45,000 - $60,000 per year</b>
                </div>
                <div className="flex lg:flex-row flex-col items-center gap-2">
                       <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
                    <h1>Experience</h1>
                    <div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div>
                    <b>1+ year</b>
                </div>
                   <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
                    <h1>Deadline</h1>
                    <div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div>
                    <b>30/09/2025</b>
                </div>
                </div>
                <div className="flex flex-col items-start gap-3">
                    <h1 className="text-2xl">Skills</h1>
                    <h1>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), <br />
                         strong understanding of UI/UX design principles, responsive <br />
                          design expertise.</h1>
                </div>
                        <button className="w-full hover:bg-linear-to-b from-white to-[#0A84FF] flex justify-center   lg:hover:p-[8px_16px] hover:p-1 hover:rounded-2xl hover:text-black hover:duration-500 duration-500 hover:ease-in-out ease-in-out bg-[#0A84FF] p-[15px_35px] rounded-2xl text-white lg:flex  active:scale-1">Apply Now</button>
            </div>
             <div className="lg:w-[48%] w-full flex flex-col items-start gap-10 lg:p-10 p-5 bg-[#191919] rounded-2xl">
                <div className="flex items-center gap-5">
                    <img src="../../public/w4.png" alt="" />
                    <h1 className="text-2xl">Mobile App Developer</h1>
                </div>
                <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
                    <h1>Salary</h1>
                    <div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div>
                    <b>$45,000 - $60,000 per year</b>
                </div>
                <div className="flex lg:flex-row flex-col items-center gap-2">
                       <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
                    <h1>Experience</h1>
                    <div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div>
                    <b>1+ year</b>
                </div>
                   <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
                    <h1>Deadline</h1>
                    <div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div>
                    <b>30/09/2025</b>
                </div>
                </div>
                <div className="flex flex-col items-start gap-3">
                    <h1 className="text-2xl">Skills</h1>
                    <h1>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), <br />
                         strong understanding of UI/UX design principles, responsive <br />
                          design expertise.</h1>
                </div>
                        <button className="w-full hover:bg-linear-to-b from-white to-[#0A84FF] flex justify-center   lg:hover:p-[8px_16px] hover:p-1 hover:rounded-2xl hover:text-black hover:duration-500 duration-500 hover:ease-in-out ease-in-out bg-[#0A84FF] p-[15px_35px] rounded-2xl text-white lg:flex  active:scale-1">Apply Now</button>
            </div>
             <div className="lg:w-[48%] w-full flex flex-col items-start gap-10 lg:p-10 p-5 bg-[#191919] rounded-2xl">
                <div className="flex items-center gap-5">
                    <img src="../../public/w5.png" alt="" />
                    <h1 className="text-2xl">Digital Marketing Specialist</h1>
                </div>
                <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
                    <h1>Salary</h1>
                    <div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div>
                    <b>$45,000 - $60,000 per year</b>
                </div>
                <div className="flex lg:flex-row flex-col items-center gap-2">
                       <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
                    <h1>Experience</h1>
                    <div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div>
                    <b>1+ year</b>
                </div>
                   <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
                    <h1>Deadline</h1>
                    <div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div>
                    <b>30/09/2025</b>
                </div>
                </div>
                <div className="flex flex-col items-start gap-3">
                    <h1 className="text-2xl">Skills</h1>
                    <h1>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), <br />
                         strong understanding of UI/UX design principles, responsive <br />
                          design expertise.</h1>
                </div>
                        <button className="w-full hover:bg-linear-to-b from-white to-[#0A84FF] flex justify-center   lg:hover:p-[8px_16px] hover:p-1 hover:rounded-2xl hover:text-black hover:duration-500 duration-500 hover:ease-in-out ease-in-out bg-[#0A84FF] p-[15px_35px] rounded-2xl text-white lg:flex  active:scale-1">Apply Now</button>
            </div>
             <div className="lg:w-[48%] w-full flex flex-col items-start gap-10 lg:p-10 p-5 bg-[#191919] rounded-2xl">
                <div className="flex items-center gap-5">
                    <img src="../../public/w6.png" alt="" />
                    <h1 className="text-2xl">Project Manager</h1>
                </div>
                <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
                    <h1>Salary</h1>
                    <div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div>
                    <b>$45,000 - $60,000 per year</b>
                </div>
                <div className="flex lg:flex-row flex-col items-center gap-2">
                       <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
                    <h1>Experience</h1>
                    <div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div>
                    <b>1+ year</b>
                </div>
                   <div className="bg-[#1F1F1F] rounded-2xl p-5 flex items-center gap-4">
                    <h1>Deadline</h1>
                    <div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div>
                    <b>30/09/2025</b>
                </div>
                </div>
                <div className="flex flex-col items-start gap-3">
                    <h1 className="text-2xl">Skills</h1>
                    <h1>Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), <br />
                         strong understanding of UI/UX design principles, responsive <br />
                          design expertise.</h1>
                </div>
                        <button className="w-full hover:bg-linear-to-b from-white to-[#0A84FF] flex justify-center   lg:hover:p-[8px_16px] hover:p-1 hover:rounded-2xl hover:text-black hover:duration-500 duration-500 hover:ease-in-out ease-in-out bg-[#0A84FF] p-[15px_35px] rounded-2xl text-white lg:flex  active:scale-1">Apply Now</button>
            </div>
        </div>
    </section>
    <section className="lg:max-w-330 w-[90%] m-auto lg:my-20 my-10 py-25 relative flex items-center justify-center text-white border-2 rounded-2xl border-[darkgrey] shadow-[0px_0px_20px_darkgrey] bg-blue-500">
        <div className="flex flex-col gap-10 relative items-center text-center">
              <h1 className="lg:text-5xl font-bold">Ready to discuss</h1>
              <h1 className="text-2xl">your product needs with <t className="text-[#0A84FF]">Catalyst Analytic</t> experts?</h1>
             <button className=" hover:bg-linear-to-b from-white to-[#0A84FF] flex justify-center   lg:hover:p-[8px_16px] hover:p-1 hover:rounded-2xl hover:text-black hover:duration-500 duration-500 hover:ease-in-out ease-in-out bg-[#0A84FF] p-[15px_75px] rounded-2xl text-white lg:flex  active:scale-1">Get In Touch</button>
        </div>
    </section>
         <footer className="w-full lg:w-380 m-auto border-t-2 border-white lg:mt-30 mt-10 ">
 
    <div className="w-full flex items-center lg:flex-row flex-col justify-between gap-y-5">
        <img src="../../public/Logo.png" alt="" />
        <nav className="flex items-center gap-7 text-white flex-wrap justify-start ">
            <p> Home</p>
            <p>Services</p>
            <p>Portfolio</p>
            <p>About Us</p>
            <p>Careers</p>
        </nav>

  
  </div>
 </footer>
 <About/>
    </div>
  
  )
}
