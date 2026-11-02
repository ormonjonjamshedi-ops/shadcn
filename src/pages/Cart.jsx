import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const dataImg = [
  { img: '/flover1.png' },
  { img: '/flover2.png' },
  { img: '/flover3.png' },
  { img: '/flover4.png' },
  { img: '/flover5.png' },
  { img: '/flover6.png' },
  { img: '/flover7.png' },
  { img: '/flover8.png' },
  { img: '/flover9.png' },
]


const Cart = () => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('cart'))
      setCart(saved)
    } catch {
      setCart([])
    }
  }, [])

  const updateCart = (newCart) => {
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }
  const changeQuantity = (id, delta) => {
    const newCart = cart.map((item) =>
      item.id === id ? {...item, quantity: Math.max(1, Number(item.quantity || 1) + delta),}: item
    )
    updateCart(newCart)
  }

  const removeFromCart = (id) => {
    updateCart(cart.filter((item) => item.id !== id))
  }
  const total = cart.reduce(
    (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1), 0
  )
  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="text-6xl mb-4">🛒</div>
        <h1 className="text-3xl font-bold mb-3">Cart</h1>
        <p className="text-gray-500 mb-6">card Mepty</p>
        <div className="flex justify-center gap-3">
          <Link to="/"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >Ба асосӣ рафтан</Link>

          <Link to="/favorites"
            className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition"
          >likes</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Cart ({cart.length})</h1>
      </div>
      <div className="space-y-4">
        {cart.map((item, index) => (
          <div key={item.id} className="flex items-center justify-between gap-4 border border-gray-200 p-4 rounded-xl bg-white hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                <img src={item.img || dataImg[index % dataImg.length].img}  alt={item.name}className="w-16 h-16 object-contain"/>
              </div>
              <div>
                <h2 className="font-bold text-lg text-gray-800">{item.name}</h2>
                <p className="text-gray-500 text-sm"> {Number(item.price || 0).toFixed(2)}{item.size && <span> · Андоза: {item.size}</span>}</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <button onClick={() => changeQuantity(item.id, -1)}className="w-8 h-8 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition"
                >−</button>

                <span className="w-8 text-center font-medium">{item.quantity || 1}</span>

                <button onClick={() => changeQuantity(item.id, 1)}className="w-8 h-8 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition">+</button>
              </div>

              <div className="w-24 text-right text-green-600 font-semibold">${( Number(item.price || 0) * Number(item.quantity || 1)).toFixed(2)}
              </div>
              <button onClick={() => removeFromCart(item.id)}className="text-gray-400 hover:text-red-500 text-xl transition"
              >🗑</button>
            </div>
          </div>
        ))}
      </div>

     
      <div className="mt-8 p-6 bg-green-50 rounded-xl flex flex-wrap gap-4 justify-between items-center">
        <div> 
          <p className="text-sm text-gray-500">Ҷамъи умумӣ</p>
          <h2 className="text-2xl font-bold text-green-600">${total.toFixed(2)}</h2>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/" className="text-green-600 text-sm hover:underline">
          lets go
          </Link>

          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition">
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart