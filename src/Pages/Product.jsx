

import { api } from '@/api/auth'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Product = () => {
  const [data, setData] = useState([])
  const [dataProductsTotal, setDataProductsTotal] = useState(0)
  const [dataProductsLimit, setDataProductsLimit] = useState(9)
  const [dataProductsTotalPage, setDataProductsTotalPage] = useState(1)
  const [dataProductsPage, setDataProductsPage] = useState(1)

  const [search, setSearch] = useState('')
  const [selectCatalog, setSelectCatalog] = useState('')

  const token = localStorage.getItem('token')

  async function GetProduct() {
    try {
      const params = {
        limit: dataProductsLimit,
        page: dataProductsPage,
      }

      if (search) {
        params.search = search
      }

      if (selectCatalog) {
        params.catalogId = selectCatalog
      }

      const res = await axios.get(api + '/products', {
        headers: {
          Authorization: 'Bearer ' + token,
        },
        params,
      })

      console.log(res.data)

      setData(res.data.data)
      setDataProductsTotal(res.data.total)
      setDataProductsTotalPage(res.data.totalPages)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    GetProduct()
  }, [
    dataProductsLimit,
    dataProductsPage,
    search,
    selectCatalog,
  ])

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">
        Products: {dataProductsTotal}
      </h1>

      <div className="flex flex-wrap gap-3 mb-5">
        <input
          className="border rounded-lg p-2"
          type="search"
          placeholder="Search product..."
          value={search}
          onChange={(e) => {  setSearch(e.target.value)
              setDataProductsPage(1)}}/>

        <select
          className="border rounded-lg p-2"
          value={selectCatalog}
          onChange={(e) => {setSelectCatalog(e.target.value)
 setDataProductsPage(1)
          }}>
          <option value="">All catalogs</option>
          
        </select>

        <select
          className="border rounded-lg p-2"
          value={dataProductsLimit}
          onChange={(e) => {
            setDataProductsLimit(Number(e.target.value))
            setDataProductsPage(1)
          }}>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((e) => (
          <div key={e.id} className="border p-4 rounded-xl shadow">
            <img src={e.image} alt={e.name}   className="w-full h-40 object-cover rounded-lg"/>

            <h2 className="font-bold mt-3">{e.name}</h2>
            <p>Price: {e.price}</p>
            <p>Unit: {e.unit}</p>
            <p>Currency: {e.currency}</p>
            <p>Discount: {e.discount}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        {Array.from(
          { length: Number(dataProductsTotalPage) || 0 },
          (_, i) => i + 1
        ).map((page) => (
          <button  key={page} onClick={() => setDataProductsPage(page)}  className={`border p-2 px-4 rounded-xl ${
              dataProductsPage === page ? 'bg-amber-400'  : 'hover:bg-amber-50' }`} >
            {page}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Product

