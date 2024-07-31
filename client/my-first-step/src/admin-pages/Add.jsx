import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Add() {
  const user={
    name:"",
    desc:"",
    img:" "
  }
  const [data,setdata]=useState(user);
  const handleinput=(e)=>{
    const {name,value}=e.target;
    setdata({...data,[name]:value})   //used ..data to add on into existing data 
  }
  const handlesubmit=async(e)=>{
    e.preventDefault();
    await axios.post();

  }
  return (
    <div className='w-full m-auto bg-green-100  min-h-[400px] p-4 '>
        <Link to='/View_activity' className='bg-gray-200 py-2 p-3 rounded-lg'>Back</Link>
        <div className='flex justify-center items-center gap-20 m-3 mb-5 text-2xl capitalize '>
        
        <h1 className='oswald underline'>add new activity</h1>
        </div>
        <form className=' bg-gray-300 min-h[300px] w-[300px] m-auto rounded-xl p-4 align-justify flex flex-col justify-center items-center form-shadow' onSubmit={handlesubmit}>
            <div className='m-1 capitalize align-justify flex flex-col justify-center'>
            <label htmlFor='name' className='mx-4'>activity name :</label>
            <input type="text" autoComplete='off' id='name' onChange={handleinput} name='name' />
            </div>
            <div className='m-1 capitalize align-justify flex flex-col justify-center'>
            <label htmlFor='desc' className='mx-4'>description : </label>
            <input type='text' name='desc' id='desc' onChange={handleinput} autoComplete='off'/>
            </div>
            <div className='m-1 capitalize align-justify flex flex-col justify-center'>
            <label htmlFor='img' className='mx-4'>add image : </label>
            <input type='file' name='img' id='img' onChange={handleinput} accept='image/*'/>
            </div>
            <div className='m-1 capitalize align-justify flex flex-col justify-center'>
                <button type='submit' className='bg-green-400 py-2 p-3 rounded-lg '>add element</button>
            </div>
        </form>
    </div>
  )
}
