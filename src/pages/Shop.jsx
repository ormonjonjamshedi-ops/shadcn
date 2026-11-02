import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Footer from './Footer'

const product = {
  id: 1995751877966,
  name: 'Barberton Daisy',
  price: 119,
  rating: 4,
  reviews: 19,
  description:
    'The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.',
  sizes: ['S', 'M', 'L', 'XL'],
  categories: ['Potter Plants'],
  tags: ['Home', 'Garden', 'Plants'],
  images: ['/flover1.png', '/flover2.png', '/flover3.png', '/flover4.png'],
}
const data = [
  { id: 1, name: 'Monstera Deliciosa', price: 25, img: '/flover1.png' },
  { id: 2, name: 'Snake Plant', price: 18, img: '/flover2.png' },
  { id: 3, name: 'Aloe Vera', price: 12, img: '/flover3.png' },
  { id: 4, name: 'Peace Lily', price: 22, img: '/flover4.png' },
  { id: 5, name: 'Fiddle Leaf Fig', price: 35, img: '/flover5.png' },
  { id: 6, name: 'Rubber Plant', price: 28, img: '/flover6.png' },
  { id: 7, name: 'Pothos', price: 10, img: '/flover7.png' },
  { id: 8, name: 'ZZ Plant', price: 20, img: '/flover8.png' },
  { id: 9, name: 'Cactus Mix', price: 15, img: '/flover9.png' },
]

const Shop = () => {
  const navigate = useNavigate()
  const [activeImg, setActiveImg] = useState(product.images[0])
  const [size, setSize] = useState('S')
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  function readStorage(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || '[]')
    } catch (error) {
      console.log(error)
      return []
    }
  }

  useEffect(() => {
    const saved = readStorage('favorites')
    setIsFavorite(saved.some((item) => item.id === product.id))
  }, [])

  function toggleFavorite() {
    const saved = readStorage('favorites')
    let newFavorites
    if (saved.some((item) => item.id === product.id)) {
      newFavorites = saved.filter((item) => item.id !== product.id)
      setIsFavorite(false)
    } else {
      newFavorites = [
        ...saved,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          img: product.images[0],
        },
      ]
      setIsFavorite(true)
    }
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  function addToCart() {
    const cart = readStorage('cart')
    const exists = cart.find((c) => c.id === product.id)
    let newCart
    if (exists) {
      newCart = cart.map((c) =>
        c.id === product.id
          ? { ...c, quantity: Number(c.quantity || 1) + quantity, size }: c
      )
    } else {
      newCart = [
        ...cart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          img: product.images[0],
          size,
          quantity,
        },
      ]
    }
    localStorage.setItem('cart', JSON.stringify(newCart))
    navigate('/plantcare')
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8">
        <div className="text-sm mb-6 md:mb-8">
          <Link to="/" className="font-medium text-gray-700 hover:text-green-600">Home</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-500">Shop</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4 min-w-0">
            <div className="flex flex-row sm:flex-col gap-3 overflow-x-auto sm:overflow-visible pb-1 sm:pb-0">
              {product.images.map((img) => (
                <button key={img}
                  onClick={() => setActiveImg(img)}
                  className={`shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gray-50 rounded-sm flex items-center justify-center overflow-hidden border transition ${
                    activeImg === img ? 'border-green-600' : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img src={img} alt={product.name} className="w-full h-full object-contain p-1" />
                </button>
              ))}
            </div>
            <div className="flex-1 bg-gray-50 rounded-md flex items-center justify-center h-[280px] sm:h-[360px] md:h-[420px] overflow-hidden">
              <img src={activeImg} alt={product.name} className="w-full h-full object-contain p-4 sm:p-6" />
            </div>
          </div>

          <div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">{product.name}</h1>
            <div className="flex items-center justify-between mt-3 pb-3 border-b border-gray-100">
              <span className="text-green-600 font-bold text-xl">${product.price.toFixed(2)}</span>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>{product.reviews} Customer Review</span>
              </div>
            </div>
            <h3 className="text-sm font-semibold text-gray-800 mt-5 mb-2"> Short Description: </h3>
            <p className="text-sm text-gray-500 leading-relaxed"> {product.description} </p>
            <p className="text-sm font-semibold text-gray-800 mt-6 mb-2">Size:</p>
            <div className="flex gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`w-9 h-9 sm:w-8 sm:h-8 rounded-full border text-xs transition ${
                    size === s ? 'border-green-600 text-green-600 font-semibold' : 'border-gray-300 text-gray-600 hover:border-green-600'
                  }`}
                > {s} </button>
              ))}
            </div>

            <div className="flex items-center flex-wrap gap-3 mt-6">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition"
                > −</button>
                <span className="w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-9 h-9 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition"
                > + </button>
              </div>

              <button
                onClick={addToCart}
                className="flex-1 sm:flex-none bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-2.5 rounded text-sm font-medium transition"
              > BUY NOW</button>
              <button
                onClick={addToCart}
                className="flex-1 sm:flex-none border border-green-600 text-green-600 hover:bg-green-50 px-4 sm:px-6 py-2.5 rounded text-sm font-medium transition"
              >ADD TO CART</button>
              <button
                onClick={toggleFavorite}
                className={`w-10 h-10 border rounded flex items-center justify-center text-xl transition ${
                  isFavorite ? 'bg-red-500 border-red-500 text-white' : 'border-green-600 text-green-600 hover:bg-green-50'
                }`}
                title={isFavorite ? 'out in like' : 'go to like'}>{isFavorite ? '♥' : '♡'}</button>
            </div>

            <div className="mt-6 space-y-1 text-sm text-gray-500">
              <p><span className="text-gray-400">SKU: </span>{product.id}</p>
              <p><span className="text-gray-400">Categories: </span>{product.categories.join(', ')}</p>
              <p><span className="text-gray-400">Tags: </span>{product.tags.join(', ')}</p>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-4 text-sm">
              <span className="font-semibold text-gray-800">Share this products:</span>
              <a href="#" className="text-gray-600 hover:text-green-600">f</a>
              <a href="#" className="text-gray-600 hover:text-green-600">t</a>
              <a href="#" className="text-gray-600 hover:text-green-600">in</a>
              <a href="#" className="text-gray-600 hover:text-green-600">✉</a>
            </div>
            <Link to="/favorites" className="inline-block mt-6 text-sm text-green-600 hover:underline">go to like</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-10 flex flex-col gap-4 md:gap-5">
        <div className="flex gap-6 md:gap-12 border-b border-gray-200 pb-4 overflow-x-auto whitespace-nowrap">
          <h2 className="text-green-600 text-lg md:text-2xl font-semibold">Product Description</h2>
          <h2 className="text-black text-lg md:text-2xl font-semibold">Reviews (19)</h2>
        </div>

        <p className="text-gray-600 leading-relaxed">The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.</p>
        <p className="text-gray-600 leading-relaxed">Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.</p>
        <h3 className="text-xl md:text-2xl text-black font-semibold">Living Room:</h3>
        <p className="text-gray-600 leading-relaxed">The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <h3 className="text-xl md:text-2xl text-black font-semibold">Dining Room:</h3>
        <p className="text-gray-600 leading-relaxed">The benefits of houseplants are endless. In addition to cleaning the air of harmful toxins, they can help to improve your mood, reduce stress and provide you with better sleep. Fill every room of your home with houseplants and their restorative qualities will improve your life.</p>
        <h3 className="text-xl md:text-2xl text-black font-semibold">Office:</h3>
        <p className="text-gray-600 leading-relaxed">The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-10">
        <h2 className="text-sm font-semibold text-green-600 border-b border-gray-200 pb-3 mb-7">You may be interested in</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={5}
          rewind={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1500}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 12 },
            640: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 5, spaceBetween: 16 },
          }}
          className="w-full !pb-12"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="group cursor-pointer">
                <div className="h-32 sm:h-40 bg-gray-50 rounded-sm flex items-center justify-center overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" />
                </div>
                <h3 className="text-xs text-gray-700 mt-3 line-clamp-2 group-hover:text-green-600 transition-colors">{item.name}</h3>
                <p className="text-sm font-semibold text-green-600 mt-2">${Number(item.price).toFixed(2)}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Footer />
    </div>
  )
}
export default Shop