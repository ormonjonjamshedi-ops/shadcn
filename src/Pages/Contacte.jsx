import React from "react";

const siteMap = ["About Us", "Courses", "Events", "Blog", "Contacts"];
const courses = ["Marketing", "Management", "HR & Recruting", "Design", "Development"];

export const Contacte = () => {
  return (
    <div>
    
      <div className="bg-gradient-to-b from-red-100 to-orange-100 py-24 flex flex-col items-center gap-6">
        <h1 className="text-xs font-bold uppercase tracking-wide">
          Don't miss anything
        </h1>
        <h1 className="text-5xl font-bold text-center max-w-2xl text-slate-800">
          Subscribe to the Createx School announcements
        </h1>
        <div className="flex gap-4 mt-4">
          <input
            type="email"
            placeholder="Your working email"
            className="bg-white border border-gray-300 px-4 py-3 w-96 text-sm outline-none"
          />
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded text-sm font-semibold">
            Subscribe
          </button>
        </div>
      </div>

     
      <div className="bg-slate-900 text-gray-400 px-40 py-16">
        <div className="flex justify-between gap-10">
        
          <div className="flex flex-col gap-6 w-72">
            <h1 className="text-3xl font-bold text-white">
              CREATE<span className="text-red-500">X</span>
            </h1>
            <h1 className="text-xs leading-5">
              Createx Online School is a leader in online studying. We have lots
              of courses and programs from the main market experts. We provide
              relevant approaches to online learning, internships and employment
              in the largest companies in the country.
            </h1>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-white text-sm font-bold uppercase">Site map</h1>
            {siteMap.map((item) => (
              <h1 key={item} className="text-sm cursor-pointer hover:text-white">
                {item}
              </h1>
            ))}
          </div>

       
          <div className="flex flex-col gap-3">
            <h1 className="text-white text-sm font-bold uppercase">Courses</h1>
            {courses.map((item) => (
              <h1 key={item} className="text-sm cursor-pointer hover:text-white">
                {item}
              </h1>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-white text-sm font-bold uppercase">Contact us</h1>
            <h1 className="text-sm">(405) 555-0128</h1>
            <h1 className="text-sm">hello@createx.com</h1>
          </div>
          <div className="flex flex-col gap-3 w-64">
            <h1 className="text-white text-sm font-bold uppercase">
              Sign up to our newsletter
            </h1>
            <div className="flex items-center bg-slate-800 border border-slate-700 rounded px-3 py-2">
              <input type="email" placeholder="Email address" className="bg-transparent outline-none text-xs flex-1"/>
            </div>
            <h1 className="text-[10px] leading-4">*Subscribe to our newsletter to receive communications and earlyupdates from Createx SEO Agency.</h1>
          </div>
        </div>
      </div>


      <div className="bg-slate-800 text-gray-400 text-xs px-40 py-5 flex justify-between">
        <h1>© All rights reserved. Made by Createx Studio</h1>
        <h1 className="cursor-pointer hover:text-white uppercase"  >Go to top
        </h1>
      </div>
    </div>
  );
};