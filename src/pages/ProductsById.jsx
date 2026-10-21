import React from 'react'
import { useParams } from 'react-router'

export default function ProductsById() {
    const {id} = useParams()
    const product = products.find((e)=>e.id==id)
  return (
    <div>

        {
            product?.name
        }
    </div>
  )
}
