import { api } from '@/api/auth'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Catalog = () => {

    const [data, setData]=useState([])
  const token = localStorage.getItem("token")

  const GetCatolog = async ()=>{

    try {
      const {data}=await axios.get(api+"/catalogs",{
        headers:{
          Authorization: "Bearer "+token
        }
      })
      setData(data)
    } catch (error) {
      console.log(error);
      
    }
  }
useEffect(()=>{
  GetCatolog()
}, [])
  return (
    <div>
<div className='grid grid-cols-3  items-center '>{
  data.map((e) =>{
    return <div key={e.id} className='border-4 m-auto p-10'>
      <h1 className='bg-amber-400'>{e.slug}</h1>
      <h1>{e.name}</h1>
    </div>
  })
}</div>

    </div>
  )
}

export default Catalog