import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { api } from '@/api/auth'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  const [data, setData] = useState([])
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
  const [catalogs, setCatalogs] = useState([])

  const [dataProductsTotal, setDataProductsTotal] = useState(0)
  const [dataProductsLimit, setDataProductsLimit] = useState(9)
  const [dataProductsTotalPage, setDataProductsTotalPage] = useState(1)
  const [dataProductsPage, setDataProductsPage] = useState(1)

  const [search, setSearch] = useState('')
  const [selectCatalog, setSelectCatalog] = useState('')
  const token = localStorage.getItem('token')

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart')
    return saved ? JSON.parse(saved) : []
  })

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites')
    return saved ? JSON.parse(saved) : []
  })

  async function GetProduct() {
    try {
      if (!token) {
        console.log('Token now')
        setData([])
        return
      }
      const params = {
        limit: dataProductsLimit,
        page: dataProductsPage,
      }
      if (search) params.search = search
      if (selectCatalog) params.catalogId = selectCatalog

      const res = await axios.get(api + '/products', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
        params,
      })

      setData(res.data.data)
      setDataProductsTotal(res.data.total)
      setDataProductsTotalPage(res.data.totalPages || 1)
    } catch (error) {
      console.log(error)
      setData([])
    }
  }
  async function GetCatalog() {
    try {
      const res = await axios.get(api + '/catalogs', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })

      setCatalogs(res.data || [])
    } catch (error) {
      console.log(error)
      setCatalogs([])
    }
  }
  function addToCart(product) {
    const exists = cart.find((item) => item.id === product.id)

    let newCart
    if (exists) {
      newCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    } else {
      newCart = [...cart, { ...product, quantity: 1 }]
    }

    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
  }

  function toggleFavorite(product) {
    const exists = favorites.find((item) => item.id === product.id)

    let newFavorites
    if (exists) {
      newFavorites = favorites.filter((item) => item.id !== product.id)
    } else {
      newFavorites = [...favorites, product]
    }

    setFavorites(newFavorites)
    localStorage.setItem('favorites', JSON.stringify(newFavorites))
  }

  useEffect(() => {
    GetCatalog()
  }, [])

  useEffect(() => {
    GetProduct()
  }, [dataProductsLimit, dataProductsPage, search, selectCatalog])

  return (
    <div className="w-full bg-gray-50 overflow-x-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="w-full mb-6 md:mb-10"
      >
        <SwiperSlide>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-5 md:px-10 py-8 md:py-16 text-center md:text-left">
            <div className="max-w-lg flex flex-col items-center md:items-start gap-4 md:gap-6">
              <p className="text-xs md:text-sm tracking-widest text-gray-500 uppercase">
                Welcome to GreenShop
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                LET'S MAKE A <br />
                BETTER <span className="text-green-600">PLANET</span>
              </h1>
              <p className="text-gray-500 text-base md:text-lg">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="w-fit bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 rounded-md font-medium transition">
                SHOP NOW
              </button>
            </div>
            <div className="relative pb-6 md:pb-0">
              <img src="/flover1.png" alt="Plant" className="w-48 sm:w-64 md:w-96" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-6 px-5 md:px-10 py-8 md:py-16 text-center md:text-left">
            <div className="relative pb-6 md:pb-0">
              <img src="/flover2.png" alt="Plant" className="w-48 sm:w-64 md:w-96" />
            </div>
            <div className="max-w-lg flex flex-col items-center md:items-start gap-4 md:gap-6">
              <p className="text-xs md:text-sm tracking-widest text-gray-500 uppercase">  Welcome to GreenShop</p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 leading-tight">LET'S MAKE A <br />BETTER <span className="text-green-600">PLANET</span></h1>
              <p className="text-gray-500 text-base md:text-lg">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="w-fit bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 rounded-md font-medium transition">
                SHOP NOW
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-5 md:px-10 py-8 md:py-16 text-center md:text-left">
            <div className="max-w-lg flex flex-col items-center md:items-start gap-4 md:gap-6">
              <p className="text-xs md:text-sm tracking-widest text-gray-500 uppercase">Welcome to GreenShop</p>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                LET'S MAKE A <br />BETTER <span className="text-green-600">PLANET</span>
              </h1>
              <p className="text-gray-500 text-base md:text-lg">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="w-fit bg-green-600 hover:bg-green-700 text-white px-6 md:px-8 py-3 rounded-md font-medium transition">
                SHOP NOW
              </button>
            </div>
            <div className="relative pb-6 md:pb-0">
              <img src="/flover3.png" alt="Plant" className="w-48 sm:w-64 md:w-96" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-84 lg:min-h-screen p-3 lg:p-5 text-black border-2 bg-white">
          <h2 className="text-xl font-bold mb-3 lg:mb-5">Categories</h2>
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            <button
              onClick={() => {
                setSelectCatalog('')
                setDataProductsPage(1)
              }}
              className={`shrink-0 whitespace-nowrap lg:w-full text-left px-4 py-2 lg:py-3 lg:mb-2 rounded-lg font-medium transition ${
                selectCatalog === '' ? 'bg-green-600 text-white' : 'bg-gray-100 lg:bg-transparent hover:bg-green-100'
              }`}>All</button>

            {catalogs.map((cat) => (
              <button key={cat.id} onClick={() => {
                  setSelectCatalog(cat.id)
                  setDataProductsPage(1)
                }}
                className={`shrink-0 whitespace-nowrap lg:w-full text-left px-4 py-2 lg:py-3 lg:mb-2 rounded-lg font-medium transition ${
                  selectCatalog === cat.id ? 'bg-green-600 text-white' : 'bg-gray-100 lg:bg-transparent hover:bg-green-100'
                }`}>{cat.name}</button>
            ))}
          </div>
          <img src="/flover10.png" alt="" className="hidden lg:block w-full mt-6" />
        </div>

        <div className="p-3 sm:p-5 flex-1">
          <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-5">Products: {dataProductsTotal}</h1>
          <div className="flex flex-wrap gap-3 mb-5">
            <input className="border rounded-lg p-2 w-full sm:w-auto bg-white"
              type="search" placeholder="Search product..." value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setDataProductsPage(1)
              }} />
            <select
              className="border rounded-lg p-2 bg-white"
              value={dataProductsLimit}
              onChange={(e) => {
                setDataProductsLimit(Number(e.target.value))
                setDataProductsPage(1)
              }}>
              <option value={5}>5</option>
              <option value={9}>9</option>
              <option value={18}>18</option>
            </select>
          </div>
          <Link
            to="/plantCare"
            state={{ products: data, images: dataImg }}>Plant Care</Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mt-3">
            {data.map((e, index) => {
              const isFavorite = favorites.some((item) => item.id === e.id)
              return (
                <div key={e.id} className="border p-4 rounded-xl shadow bg-white relative">
                  <img src={dataImg[index % dataImg.length].img} alt={e.name} className="w-32 h-32 sm:w-40 sm:h-40 m-auto object-cover rounded-lg" />
                  <h2 className="font-bold mt-3">{e.name}</h2>
                  <p>Price: {e.price}</p>
                  <p>Currency: {e.currency}</p>

                  <div className="flex items-center justify-between mt-4">
                    <button onClick={() => addToCart(e)} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>Cart</button>
                    <button onClick={() => toggleFavorite(e)} className="p-2 rounded-full transition hover:bg-gray-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg" className="w-7 h-7"
                        fill={isFavorite ? '#ef4444' : 'none'}
                        viewBox="0 0 24 24"
                        stroke={isFavorite ? '#ef4444' : '#6b7280'}
                        strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>)
            })}
          </div>
          <div className="flex flex-wrap gap-2 mt-6">
            {Array.from(
              { length: Number(dataProductsTotalPage) || 0 },
              (_, i) => i + 1
            ).map((page) => (
              <button key={page} onClick={() => setDataProductsPage(page)}
                className={`border p-2 px-4 rounded-xl ${dataProductsPage === page ? 'bg-green-600 text-white' : 'hover:bg-amber-50'}`}>
                {page}</button>))}
          </div>
        </div>
      </div>

      <div className='flex flex-col xl:flex-row justify-center items-center gap-6 xl:gap-20 mx-4 my-10 xl:m-30'>
        <div className='w-full xl:w-150 flex flex-col sm:flex-row bg-white border-2 items-center gap-5 p-3 sm:p-2 rounded-2xl'>
          <img src="/flover2.png" alt="" className='w-48 sm:w-70' />
          <div className='flex flex-col gap-3 sm:gap-5 text-center sm:text-end items-center sm:items-end'>
            <h1 className='text-2xl md:text-4xl'>Summer cactus & succulents</h1>
            <h1>We are an online plant shop offering a wide range of cheap and trendy plants</h1>
            <button className='text-white bg-green-600 rounded-2xl w-30 p-2'>Find more</button>
          </div>
        </div>
        <div className='w-full xl:w-150 flex flex-col sm:flex-row bg-white border-2 items-center gap-5 p-3 sm:p-2 rounded-2xl'>
          <img src="/flover6.png" alt="" className='w-48 sm:w-70' />
          <div className='flex flex-col gap-3 sm:gap-5 text-center sm:text-end items-center sm:items-end'>
            <h1 className='text-2xl md:text-4xl'>Summer cactus & succulents</h1>
            <h1>We are an online plant shop offering a wide range of cheap and trendy plants</h1>
            <button className='text-white bg-green-600 rounded-2xl w-30 p-2'>Find more</button>
          </div>
        </div>
      </div>

      <div>
        <h1 className='text-3xl md:text-5xl text-center p-5'> Our Blog Posts</h1>
        <h1 className='text-center px-4'>We are an online plant shop offering a wide range of cheap and trendy plants. </h1>
        <div className='flex flex-wrap justify-center gap-6 lg:gap-20 m-4 md:m-10'>
          <div className='w-70 flex flex-col gap-2 border-2 items-center text-center'>
            <img src="/flover11.png" alt="" className='w-70' />
            <h1 className='text-green-400'>September 12  I Read in 6 minutes</h1>
            <h1 className='text-2xl md:text-3xl'>Cactus & Succulent Care Tips</h1>
            <h1 className='text-gray-400'>Cacti are succulents are easy care plants for any home or patio. </h1>
            <h1>Read More  </h1>
          </div>
          <div className='w-70 flex flex-col gap-2 border-2 items-center text-center'>
            <img src="/flover12.png" alt="" className='w-70' />
            <h1 className='text-green-400'>September 12  I Read in 6 minutes</h1>
            <h1 className='text-2xl md:text-3xl'>Cactus & Succulent Care Tips</h1>
            <h1 className='text-gray-400'>Cacti are succulents are easy care plants for any home or patio. </h1>
            <h1>Read More  </h1>
          </div>
          <div className='w-70 flex flex-col gap-2 border-2 items-center text-center'>
            <img src="/flover13.png" alt="" className='w-70' />
            <h1 className='text-green-400'>September 12  I Read in 6 minutes</h1>
            <h1 className='text-2xl md:text-3xl'>Cactus & Succulent Care Tips</h1>
            <h1 className='text-gray-400'>Cacti are succulents are easy care plants for any home or patio. </h1>
            <h1>Read More  </h1>
          </div>
          <div className='w-70 flex flex-col gap-2 border-2 items-center text-center'>
            <img src="/flover14.png" alt="" className='w-70' />
            <h1 className='text-green-400'>September 12  I Read in 6 minutes</h1>
            <h1 className='text-2xl md:text-3xl'>Cactus & Succulent Care Tips</h1>
            <h1 className='text-gray-400'>Cacti are succulents are easy care plants for any home or patio. </h1>
            <h1 className='p-3'>Read More  </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Home