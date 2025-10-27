'use client'
import Link from 'next/link'
import { deleteFnction } from '../admin/Delete'

const ProductsCard = (props) => {



  return (
    <div  className='m-2 w-100  cursor-pointer bg-gray-800 border-gray-800 border-2 p-2 rounded-lg'>
        <div className='w-full bg-gray-600 h-90 rounded-lg'>
        </div>
        <div className='bg-gray-700 mt-2 p-2 rounded-md' >
            <p className='text-2xl text-gray-500 font-semibold'> <Link href={`/product/${props._id}`}>{props.title}</Link></p>
           <p className='text-xl font-sans font-extrabold '> <s className='text-gray-950 font-extrabold'>Rs.3,330.00</s> <span className='text-red-400'>Rs.{props.price}</span> </p>
           {props.du && (
            <div className='flex flex-wrap gap-2'>
             <button onClick={() => deleteFnction(props._id) === alert("deleted")} className='p-0.5 rounded-sm bg-gray-400 text-gray-950 font-mono'>Delete</button>
             <button onClick={() => alert(props._id)} className='p-0.5 rounded-sm bg-gray-600 text-gray-300 font-sans'>Ubdate</button>
           </div>
           )}
          
        </div>

    </div>
  )
}

export default ProductsCard