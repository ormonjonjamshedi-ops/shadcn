import React, { useState } from 'react'

const Blogs = () => {
  return (
 <div className="max-w-6xl mx-auto my-8 bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row font-sans text-gray-800">
      <aside className="w-full md:w-64 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200 py-6 shrink-0">
        <h2 className="text-lg font-semibold px-6 pb-4 text-gray-900">My Account</h2>
        <nav className="flex flex-col space-y-1">
          <a href="#" className="flex items-center gap-3 px-6 py-3 text-sm text-gray-600 hover:bg-green-100  transition-colors">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Account Details</a>
          <a href="#" className="flex items-center gap-3 px-6 py-3 text-sm font-semibold text-gray-600 hover:bg-green-100  ">
            <svg className="w-4 h-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Address</a>
          <a href="#" className="flex items-center gap-3 px-6 py-3 text-sm text-gray-600 hover:bg-green-100 transition-colors">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Orders</a>
          <a href="#" className="flex items-center gap-3 px-6 py-3 text-sm text-gray-600 hover:bg-green-100  transition-colors">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Wishlist</a>
          <a href="#" className="flex items-center gap-3 px-6 py-3 text-sm text-gray-600 hover:bg-green-100  transition-colors">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>Reports
          </a>
          <a href="#" className="flex items-center gap-3 px-6 py-3 text-sm text-gray-600 hover:bg-green-100  transition-colors">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>Downloads
          </a>
        </nav>
      </aside>
      <main className="flex-1 p-6 md:p-10">
        <section className="mb-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Billing Address</h3>
              <p className="text-xs text-gray-500 mt-1">The following addresses will be used on the checkout page by default.</p>
            </div>
            <button className="text-sm font-medium text-green-600 hover:text-green-700">Add</button>
          </div>
          <form  className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">First Name </label>
                <input type="txt" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600 text-sm"/>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Last Name </label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600 text-sm"/>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Country / Region </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600 text-sm">
                  <option value="" disabled>Select a country / region</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Town / City </label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600 text-sm" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Street Address </label>
                <input type="text" placeholder="House number and street name"className="w-full px-3 py-2 border border-gray-300 rounded placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600 text-sm"  />
              </div>
              <div className="flex items-end">
                <input type="text" placeholder="Appartment, suite, unit, etc. (optional)" className="w-full px-3 py-2 border border-gray-300 rounded placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600 text-sm"/>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">State </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-gray-700 focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600 text-sm">
     <option value="" disabled>Select a state</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Zip </label>
                <input type="text"className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600 text-sm"/>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email address </label>
                <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600 text-sm" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Phone Number </label>
                <div className="flex gap-2">
                  <input type="tel" className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-green-600 focus:border-green-600 text-sm"/>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <button className="bg-green-600 hover:bg-green-700 text-white font-medium text-xs py-3 px-6 rounded transition-colors">Save Address </button>
            </div>
          </form>
        </section>
        <section className="border-t border-gray-200 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold text-gray-900">Shipping Address</h3>
            <div className="flex items-center gap-4">
              <label className="inline-flex items-center text-xs text-gray-600 cursor-pointer">
                <span className="ml-2">Same as billing address</span>
              </label>
              <h1 className="text-sm font-medium text-green-600 hover:text-green-700">Add</h1>
            </div>
          </div>
          <p className="text-xs text-gray-500">You have not set up this type of address yet.</p>
        </section>
      </main>
    </div>
  )
}

export default Blogs