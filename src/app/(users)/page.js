import React from 'react'
import Navbar from '../components/Navbar'
import ProductsCard from '../components/ProductsCard'

import { showProduct } from './ShowProduct'

const page = async () => {

  const data = await showProduct()
  console.log("show :",data)
  

  return (
    <div className='max-w-screen max-h-screen'>
      <Navbar className="w-full" />
      <div className='mt-4  flex flex-wrap justify-center w-full  gap-4 '>
        {
          data  ? (<p className='text-red-400'>Not Data</p>):
          (data.data.map((product ) =>
            <ProductsCard key={product._id.toString()} _id={product._id.toString()}  title={product.title} price={product.price} du={false} />
          ))
          
          }
        
      </div>
      
    </div>
  )
}

export default page