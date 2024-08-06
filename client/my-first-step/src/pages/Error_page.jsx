import React from 'react'
import { Link } from 'react-router-dom'

export default function Error_page() {
  return (
    <div >
    <div className='text-4xl lato   mx-4 flex flex-col justify-center items-center gap-2 bg-gray-50 w-full p-3 '>
      <img src="https://i.pinimg.com/736x/d5/ab/1b/d5ab1b9e7a87438a42c17ac1f8f9bcc3.jpg" className='h-[200px]' alt="" />
        <h1 className='font-bold capitalize text-red-600'>error 404 : page not found</h1>
        <p className='text-lg roboto m-1 text-black '>Oops! It looks like the page you're looking for doesn't exist.</p>
        <Link to={'/'} className='border text-lg p-3 py-2  text-white rounded-lg capitalize bg-green-500 hover:bg-green-600'>go back to website</Link>
    </div>
    </div>
  )
}
