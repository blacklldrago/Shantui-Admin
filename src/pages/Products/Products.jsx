import React, { useEffect, useState } from 'react'
import Title from '../../components/Title'
import { axiosRequest } from '../../utils/axiosRequest'

const Products = () => {

  const [products, setProducts] = useState([])

  const getProducts = async()=>{
    try {
      const {data} = await axiosRequest.get("Product/GetFilterProducts")
      setProducts(data.data)
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    getProducts();
  },[])

  return (
    <div>
      {
        products.map((e)=>{
          return <div key={e.id}>
            <h1>{e.price}</h1>
          </div>
        })
      }
    </div>
  )
}

export default Products