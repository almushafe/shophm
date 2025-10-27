import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex  align-middle justify-between  sm:justify-around p-3 bg-gray-900'>
        <h1 className='text-2xl text-gray-500 font-mono'><Link href="/" >HM-Shop</Link></h1>
        <h1 className='text-2xl text-gray-500 font-mono'><Link href="/admin" >Card.</Link></h1>
    </div>
  )
}

export default Navbar