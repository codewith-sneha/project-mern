import React from 'react'
import { Link } from 'react-router-dom'

export default function Edit_review() {
  return (
    <div className='w-full max-w-3xl m-auto bg-green-100 min-h-[400px] p-4 rounded-lg shadow-lg'>
    <Link to='/Parent_review' className='text-black bg-gray-200 py-2 px-4 rounded-lg mb-4 inline-block'>
      Back
    </Link>
    <div className='flex justify-center items-center gap-6 m-1 mb-5 text-3xl capitalize'>
      <h1 className='oswald '>Update Activity</h1>
    </div>
    <form className='bg-gray-300 min-h-[300px] w-full md:w-3/4 lg:w-1/2 m-auto rounded-xl p-4 align-justify flex flex-col justify-center items-center form-shadow space-y-4'>
      <div className='w-full'>
        <label htmlFor='name' className='block text-lg mb-2'>
          Activity Name:
        </label>
        <input
          type='text'
          autoComplete='off'
          id='name'
          name='name'
          className='w-full p-2 border rounded-lg'
        />
      </div>
      <div className='w-full'>
        <label htmlFor='desc' className='block text-lg mb-2'>
          Description:
        </label>
        <input
          type='text'
          name='desc'
          id='desc'
          autoComplete='off'
          className='w-full p-2 border rounded-lg'
        />
      </div>
      <div className='w-full'>
        <label htmlFor='img' className='block text-lg mb-2'>
          Add Image:
        </label>
        <input
          type='file'
          name='img'
          id='img'
          accept='image/*'
          className='w-full p-2 border rounded-lg'
        />
      </div>
      <div className='w-full'>
        <button type='submit' className='bg-green-400 py-2 px-4 w-full rounded-lg text-white'>
          Add Element
        </button>
      </div>
    </form>
  </div>
  )
}

