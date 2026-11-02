
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

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

const Favorites = () => {
  const navigate = useNavigate()
  const [favorites, setFavorites] = useState([])

  function readStorage(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || '[]')
    } catch {
     console.log(error);
     
    }
  }

  useEffect(() => {
    setFavorites(readStorage('favorites'))
  }, [])
  const removeFavorite = (id) => {
    const newFavorites = favorites.filter((item) => item.id !== id)
    setFavorites(newFavorites)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }
  const addToCart = (item, index) => {
    const cart = readStorage('cart')
    const exists = cart.find((c) => c.id === item.id)

    let newCart
    if (exists) {
      newCart = cart.map((c) =>
        c.id === item.id ? { ...c, quantity: Number(c.quantity || 1) + 1 }: c)
    } else {
      newCart = [  ...cart,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          img: dataImg[index % dataImg.length].img,
          quantity: 1,
        },
      ]
    }

    localStorage.setItem('cart', JSON.stringify(newCart))
    navigate('/plantcare')
  }

 
  if (favorites.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="text-6xl mb-4 text-gray-300">♡</div>
        <h1 className="text-3xl font-bold mb-3">Favorites</h1>
        <p className="text-gray-500 mb-6">go to home</p>
        <div className="flex justify-center gap-3">
          <Link to="/"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">Go to home
          </Link>
          <Link to="/plantcare"
            className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition">🛒 Go to cart
          </Link>
        </div>
      </div>
    )
  }
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Favorites ({favorites.length})</h1>
        <Link to="/plantCare"
          className="border border-green-600 text-green-600 px-5 py-2 rounded-lg hover:bg-green-50 transition text-sm font-medium" >🛒 Go to cart
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((item, index) => (
          <div key={item.id} className="border border-gray-200 rounded-xl bg-white overflow-hidden hover:shadow-lg transition">
            <div className="relative h-56 bg-gray-50 flex items-center justify-center">
              <img src={dataImg[index % dataImg.length].img} alt={item.name} className="w-full h-full object-contain p-4"/>
              <button onClick={() => removeFavorite(item.id)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-red-500 hover:bg-red-50 transition">
                ♥</button>
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-gray-800">{item.name}</h2>
              <p className="text-green-600 font-bold text-lg mt-1">${Number(item.price || 0).toFixed(2)}</p>

              <div className="flex gap-2 mt-4">
                <button onClick={() => addToCart(item, index)} className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition text-sm font-medium">go to Card</button>
                <button onClick={() => removeFavorite(item.id)} className="px-4 border border-red-400 text-red-500 hover:bg-red-50 rounded-lg transition text-sm">🗑</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites