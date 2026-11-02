import Footer from './Footer'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const PlantCare = () => {
  const [cart, setCart] = useState([])
  const [data] = useState([
    { id: 1, name: 'Monstera Deliciosa', price: 25 },
    { id: 2, name: 'Snake Plant', price: 18 },
    { id: 3, name: 'Aloe Vera', price: 12 },
    { id: 4, name: 'Peace Lily', price: 22 },
    { id: 5, name: 'Fiddle Leaf Fig', price: 35 },
    { id: 6, name: 'Rubber Plant', price: 28 },
    { id: 7, name: 'Pothos', price: 10 },
    { id: 8, name: 'ZZ Plant', price: 20 },
    { id: 9, name: 'Cactus Mix', price: 15 },
  ])
  const [dataImg] = useState([
    { img: '/flover1.png' },
    { img: '/flover2.png' },
    { img: '/flover3.png' },
    { img: '/flover4.png' },
    { img: '/flover5.png' },
    { img: '/flover6.png' },
    { img: '/flover7.png' },
    { img: '/flover8.png' },
    { img: '/flover9.png' },
  ])
  const shipping = 16

  useEffect(() => {
    const saved = localStorage.getItem('cart')
    if (saved) {
      try {
        setCart(JSON.parse(saved))
      } catch (error) {
        console.error('Cart JSON error:', error)
        setCart([])
      }
    }
  }, [])

  function saveCart(newCart) {
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  function changeQuantity(id, amount) {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, Number(item.quantity || 1) + amount) }
      }
      return item
    })

    saveCart(newCart)
  }

  function removeItem(id) {
    const newCart = cart.filter((item) => item.id !== id)

    saveCart(newCart)
  }

  const subtotal = cart.reduce(
    (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1),
    0
  )
  const total = subtotal + shipping

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8">
        <div className="text-sm mb-6 md:mb-8 flex flex-wrap items-center">
          <Link to="/" className="font-medium text-gray-700 hover:text-green-600">Home </Link>
          <span className="mx-2 text-gray-400">  / </span>
          <Link to="/shop" className="text-gray-500">Shop</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">Shopping Cart</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2 min-w-0">
            <div className="hidden md:grid grid-cols-6 border-b pb-4 text-sm font-medium text-gray-700">
              <div className="col-span-2">Products</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
            </div>

            {cart.length === 0 ? (
              <div className="py-12 md:py-20 text-center">
                <div className="text-5xl md:text-6xl mb-5"> 🛒</div>
                <h2 className="text-xl md:text-2xl font-bold mb-3">Your cart is empty</h2>
                <p className="text-gray-500 mb-6">You haven't added any products yet.</p>

                <Link to="/" className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition"> Continue Shopping</Link>
              </div>
            ) : (
              cart.map((item, index) => (
                <div key={item.id} className="flex flex-col gap-4 md:grid md:grid-cols-6 md:items-center border-b py-5">
                  <div className="md:col-span-2 flex items-center gap-4">
                    <div className="w-20 h-20 shrink-0 bg-gray-50 flex items-center justify-center rounded-lg overflow-hidden">
                      <img src={dataImg[index % dataImg.length].img} alt={item.name} className="w-16 h-16 object-contain" />
                    </div>

                    <div className="min-w-0">
                      <h2 className="font-medium text-gray-800">{item.name}</h2>
                      <p className="text-xs text-gray-400 mt-1 break-all">SKU: {item.id}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3 md:contents">
                    <div className="text-gray-700">${Number(item.price || 0).toFixed(2)}</div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => changeQuantity(item.id, -1)} className="w-8 h-8 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition">−</button>
                      <span className="w-6 text-center">{item.quantity || 1}</span>
                      <button onClick={() => changeQuantity(item.id, 1)} className="w-8 h-8 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition">+</button>
                    </div>
                    <div className="text-green-600 font-medium">${(Number(item.price || 0) * Number(item.quantity || 1)).toFixed(2)}</div>
                    <div>
                      <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 text-base md:text-xl transition" title="Remove">delete</button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div>
            <div className="bg-white">
              <h2 className="text-xl font-bold mb-6">Cart Totals</h2>
              <p className="text-sm text-gray-700 mb-2">Coupon Apply</p>
              <div className="flex mb-8">
                <input type="text" placeholder="Enter coupon code here..." className="flex-1 min-w-0 border border-green-500 px-4 py-3 outline-none text-sm rounded-l-md" />
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 font-medium rounded-r-md transition">Apply </button>
              </div>
              <div className="flex justify-between mb-5">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-5">
                <span className="text-gray-600">Coupon Discount</span>
                <span className="text-gray-600">(-) $0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">${shipping.toFixed(2)}</span>
              </div>
              <div className="text-right mt-2 mb-6">
                <button className="text-xs text-green-600 hover:underline">View shipping charge</button>
              </div>
              <div className="flex justify-between border-t pt-5">
                <span className="font-bold text-lg">Total</span>
                <span className="font-bold text-lg text-green-600">${total.toFixed(2)}</span>
              </div>
              <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-md font-medium transition">Proceed To Checkout</button>

              <Link to="/" className="block text-center mt-4 text-green-600 text-sm hover:underline">Continue Shopping</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-10">
        <h2 className="text-sm font-semibold text-green-600 border-b border-gray-200 pb-3 mb-7">
          You may be interested in
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={5}
          rewind={true}
          autoplay={{
            delay: 100,
            disableOnInteraction: true,
            pauseOnMouseEnter: false,
          }}
          speed={1200}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 12 },
            640: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 5, spaceBetween: 16 },
          }}
          className="w-full !pb-16 md:!pb-30"
        >
          {data.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="group cursor-pointer">
                <div className="h-32 sm:h-40 bg-gray-50 rounded-sm flex items-center justify-center overflow-hidden">
                  <img
                    src={dataImg[index % dataImg.length].img}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xs text-gray-700 mt-3 line-clamp-2">{item.name}</h3>
                <p className="text-sm font-semibold text-green-600 mt-2">
                  ${Number(item.price).toFixed(2)}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </div>
  )
}

export default PlantCare