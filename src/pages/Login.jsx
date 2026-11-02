import { LoginRequest } from '@/api/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaFacebook, FaGoogle } from "react-icons/fa"

const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const obj = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    const token = await LoginRequest(obj)

    if (token) {
      navigate("/", { replace: true })
    }
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-50">
      
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col gap-6 items-center w-full max-w-md bg-white p-10 rounded-2xl shadow-lg shadow-gray-300 border border-gray-100"
      >
        <h1 className="text-3xl font-bold text-gray-800">
          Login
          <span className="text-xl text-gray-400 font-normal"> / </span>
          <span className="text-3xl text-green-700">Register</span>
        </h1>

        <p className="text-gray-500 text-sm text-center">
          Enter your email and password to register.
        </p>

        <input 
          type="email" 
          name="email" 
          placeholder="Email..." 
          className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none focus:border-green-600 transition"
        />

        <input 
          type="password" 
          name="password" 
          placeholder="Password..." 
          className="w-full p-3 border-2 border-gray-200 rounded-xl outline-none focus:border-green-600 transition"
        />

        <button 
          type="submit" 
          className="w-full p-3 rounded-xl text-white bg-green-700 hover:bg-green-600 transition font-medium"
        >
          Register
        </button>

        {/* Хат бо матн дар мобайн */}
        <div className="flex items-center gap-4 w-full my-2">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-400 text-sm">Or register with</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <button 
          type="button"
          className="flex items-center justify-center gap-2 border-2 border-gray-200 w-full p-3 rounded-xl hover:bg-gray-100 transition"
        >
          <FaGoogle size={20} color="#DB4437" />
          Continue with Google
        </button>

        <button 
          type="button"
          className="flex items-center justify-center gap-2 border-2 border-gray-200 w-full p-3 rounded-xl hover:bg-gray-100 transition"
        >
          <FaFacebook size={20} color="#1877F2" />
          Continue with Facebook
        </button>

      </form>
    </div>
  )
}

export default Login