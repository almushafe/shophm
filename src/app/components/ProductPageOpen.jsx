import React from 'react'

const productPageOpen = (props) => {
  return (
    <div className='bg-gray-900 w-full p-10 rounded-lg'>
        <div className='bg-gray-700 w-full h-150 rounded-lg'></div>
          <h1 className='text-3xl text-gray-100 font-bold mt-2'>{props.title}</h1>
          <div className='bg-gradient-to-bl p-2 flex flex-row justify-between'>
          <p className='text-2xl text-red-300 font-mono'>{props.price}</p>
          <button className='bg-green-400 text-xl font-sans py-2 px-4 rounded-2xl cursor-pointer hover:text-gray-500'> BUY</button>
        </div>
    </div>
  )
}

export default productPageOpen