import React from 'react'
import ormonIm from "../assets/tech.png"
import ormonImg from "../assets/aii.png"
import ormonImge from "../assets/kvv.png"
import ormonI from "../assets/coins.png"
import ormon from "../assets/term.png"
import ormo from "../assets/traning.png"
import orm from "../assets/abr.png"
import About from './About'
export default function Servise() {
  return (
    <div> 
     <section className="lg:max-w-330 w-[90%] m-auto lg:my-20 my-10 bg-[#141414] rounded-2xl relative flex items-center justify-start text-white">
       <img className="absolute left-0 top-0 " src="../../public/q1.png" alt="" />
        <div className="w-[90%] lg:ml-[10%] ml-[5%] flex items-center lg:flex-row flex-col justify-between relative">
            <div className="flex flex-col items-start gap-7 w-full lg:py-0 py-15 gap-y-10 lg:w-[60%]">
                <h1 className="lg:text-4xl text-2xl font-bold">Our Comprehensive <b className="text-[#0A84FF]">Digital Solutions</b></h1>
                <p className="">At Catalyst Analytics, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation, we are committed to delivering exceptional results for every project we undertake. From captivating web design that leaves a lasting impression to seamless web development that ensures optimal functionality, we cover every aspect of your online presence.</p>
            </div>
            <img src={ormonIm} alt="" />
        </div>
    </section>  
    <section className="lg:max-w-330 w-[90%] m-auto lg:my-20 my-10 flex flex-col items-center gap-15 text-white">
        <div className="flex flex-col items-center text-center gap-7">
            <h1 className="text-3xl font-semibold">Our Services</h1>
            <p>Comprehensive AI, blockchain, and analytics solutions powered by deep expertise in machine <br /> learning and data engineering</p>
        </div>
        <div className="w-full flex flex-wrap gap-10">
            <div className="lg:w-[48%] w-full lg:p-px p-px flex flex-col items-center gap-7 bg-linear-to-r from-[#0A84FF] to-black rounded-2xl">
             <div className="w-[99.9%] bg-[#141414] rounded-2xl flex flex-col items-center gap-7 lg:p-10 p-5 ">
                <img src={ormonImg} alt="" />
                <h1 className="text-2xl font-semibold">Machine Learning Solutions</h1>
                <h1>Custom ML models designed and optimized for your specific business <br />
                     challenges, leveraging cutting-edge deep learning techniques.</h1>
                     <div className="w-full flex-wrap gap-3 flex text-[15px]">
                <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Deep learning model development</h1>
                <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Neural network architecture design</h1>
   <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Computer vision solutions</h1>
     <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Natural language processing</h1>
       <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Model optimization and scaling</h1>
                    </div>
                    <div className="bg-linear-to-r w-full lg:w-[45%] from-[#0A84FF] to-black rounded-2xl  lg:p-px p-px">
                        <div className="w-[99.9%] bg-[#141414] rounded-2xl flex items-center gap-7 lg:p-5 p-5 " >
                            <div className="p-[10px_25px] bg-blue-600 rounded-2xl text-white"><i className="fa-solid fa-arrow-right-long"></i></div>
                            <h1>Book a Call</h1>
                        </div>
                    </div>
             </div>
            </div>
                    <div className="lg:w-[48%] w-full lg:p-px p-px flex flex-col items-center gap-7 rounded-2xl">
             <div className="w-[99.9%] bg-[#141414] rounded-2xl flex flex-col items-center gap-7 lg:p-10 p-5 ">
                <img src={ormonI} alt="" />
                <h1 className="text-2xl font-semibold">Blockchain Development</h1>
                <h1>Custom ML models designed and optimized for your specific business <br />
                     challenges, leveraging cutting-edge deep learning techniques.</h1>
                     <div className="w-full flex-wrap gap-3 flex text-[15px]">
                <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Deep learning model development</h1>
                <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Neural network architecture design</h1>
   <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Computer vision solutions</h1>
     <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Natural language processing</h1>
       <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Model optimization and scaling</h1>
                    </div>
                    <div className="bg-linear-to-r w-full lg:w-[45%] from-[#0A84FF] to-black rounded-2xl  lg:p-px p-px">
                        <div className="w-[99.9%] bg-[#141414] rounded-2xl flex items-center gap-7 lg:p-5 p-5 " >
                            <div className="p-[10px_25px] bg-blue-600 rounded-2xl text-white"><i className="fa-solid fa-arrow-right-long"></i></div>
                            <h1>Book a Call</h1>
                        </div>
                    </div>
             </div>
            </div>
                       <div className="lg:w-[48%] w-full lg:p-px p-px flex flex-col items-center gap-7 rounded-2xl">
             <div className="w-[99.9%] bg-[#141414] rounded-2xl flex flex-col items-center gap-7 lg:p-10 p-5 ">
                <img src={ormon} alt="" />
                <h1 className="text-2xl font-semibold">Algorithmic Trading</h1>
                <h1>Custom ML models designed and optimized for your specific business <br />
                     challenges, leveraging cutting-edge deep learning techniques.</h1>
                     <div className="w-full flex-wrap gap-3 flex text-[15px]">
                <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Deep learning model development</h1>
                <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Neural network architecture design</h1>
   <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Computer vision solutions</h1>
     <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Natural language processing</h1>
       <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Model optimization and scaling</h1>
                    </div>
                    <div className="bg-linear-to-r w-full lg:w-[45%] from-[#0A84FF] to-black rounded-2xl  lg:p-px p-px">
                        <div className="w-[99.9%] bg-[#141414] rounded-2xl flex items-center gap-7 lg:p-5 p-5 " >
                            <div className="p-[10px_25px] bg-blue-600 rounded-2xl text-white"><i className="fa-solid fa-arrow-right-long"></i></div>
                            <h1>Book a Call</h1>
                        </div>
                    </div>
             </div>
            </div>
                       <div className="lg:w-[48%] w-full lg:p-px p-px flex flex-col items-center gap-7 rounded-2xl">
             <div className="w-[99.9%] bg-[#141414] rounded-2xl flex flex-col items-center gap-7 lg:p-10 p-5 ">
                <img src={ormonImge} alt="" />
                <h1 className="text-2xl font-semibold">Data Engineering</h1>
                <h1>Custom ML models designed and optimized for your specific business <br />
                     challenges, leveraging cutting-edge deep learning techniques.</h1>
                     <div className="w-full flex-wrap gap-3 flex text-[15px]">
                <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Deep learning model development</h1>
                <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Neural network architecture design</h1>
   <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Computer vision solutions</h1>
     <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Natural language processing</h1>
       <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Model optimization and scaling</h1>
                    </div>
                    <div className="bg-linear-to-r w-full lg:w-[45%] from-[#0A84FF] to-black rounded-2xl  lg:p-px p-px">
                        <div className="w-[99.9%] bg-[#141414] rounded-2xl flex items-center gap-7 lg:p-5 p-5 " >
                            <div className="p-[10px_25px] bg-blue-600 rounded-2xl text-white"><i className="fa-solid fa-arrow-right-long"></i></div>
                            <h1>Book a Call</h1>
                        </div>
                    </div>
             </div>
            </div>
                       <div className="lg:w-[48%] w-full lg:p-px p-px flex flex-col items-center gap-7 rounded-2xl">
             <div className="w-[99.9%] bg-[#141414] rounded-2xl flex flex-col items-center gap-7 lg:p-10 p-5 ">
                <img src={ormo} alt="" />
                <h1 className="text-2xl font-semibold">Predictive Analytics</h1>
                <h1>Custom ML models designed and optimized for your specific business <br />
                     challenges, leveraging cutting-edge deep learning techniques.</h1>
                     <div className="w-full flex-wrap gap-3 flex text-[15px]">
                <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Deep learning model development</h1>
                <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Neural network architecture design</h1>
   <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Computer vision solutions</h1>
     <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Natural language processing</h1>
       <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Model optimization and scaling</h1>
                    </div>
                    <div className="bg-linear-to-r w-full lg:w-[45%] from-[#0A84FF] to-black rounded-2xl  lg:p-px p-px">
                        <div className="w-[99.9%] bg-[#141414] rounded-2xl flex items-center gap-7 lg:p-5 p-5 " >
                            <div className="p-[10px_25px] bg-blue-600 rounded-2xl text-white"><i className="fa-solid fa-arrow-right-long"></i></div>
                            <h1>Book a Call</h1>
                        </div>
                    </div>
             </div>
            </div>
                       <div className="lg:w-[48%] w-full lg:p-px p-px flex flex-col items-center gap-7 rounded-2xl">
             <div className="w-[99.9%] bg-[#141414] rounded-2xl flex flex-col items-center gap-7 lg:p-10 p-5 ">
                <img src={orm} alt="" />
                <h1 className="text-2xl font-semibold">MLOps & Infrastructure</h1>
                <h1>Custom ML models designed and optimized for your specific business <br />
                     challenges, leveraging cutting-edge deep learning techniques.</h1>
                     <div className="w-full flex-wrap gap-3 flex text-[15px]">
                <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Deep learning model development</h1>
                <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Neural network architecture design</h1>
   <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Computer vision solutions</h1>
     <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Natural language processing</h1>
       <h1 className="flex items-center gap-2"><div className="inline-block p-1 bg-blue-600 rounded-[50%]"></div> Model optimization and scaling</h1>
                    </div>
                    <div className="bg-linear-to-r w-full lg:w-[45%] from-[#0A84FF] to-black rounded-2xl  lg:p-px p-px">
                        <div className="w-[99.9%] bg-[#141414] rounded-2xl flex items-center gap-7 lg:p-5 p-5 " >
                            <div className="p-[10px_25px] bg-blue-600 rounded-2xl text-white"><i className="fa-solid fa-arrow-right-long"></i></div>
                            <h1>Book a Call</h1>
                        </div>
                    </div>
             </div>
            </div>
        </div>
    </section>  
    <About/>
    </div>
  )
}
