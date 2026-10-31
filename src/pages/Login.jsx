import { LoginRequest } from '@/api/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'

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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" className="border" name="email" />
        <input type="password" className="border" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Login