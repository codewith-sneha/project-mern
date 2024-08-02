import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Add() {
  const user={
    name:"",
    img:null,
    desc:""
  }
  const [data,setdata]=useState(user);

  const inputhandle=(e)=>{
const {name,value,files}=e.target;

if(name=='img'){
  setdata({...data,[name]:files[0]});
}
else{
setdata({...data,[name]:value});
  }
}
 
  const handlesubmit=async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    if (data.img) {
      formData.append('image', data.img);
    }

    try {
      const response = await axios.post("http://localhost:3387/api/add_post", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log(response.data);
    } catch (error) {
      
      console.log(error);
    }
  };
  
  return (
    <div className='w-full m-auto bg-green-100  min-h-[400px] p-4 '>
        <Link to='/View_activity' className='bg-gray-200 py-2 p-3 rounded-lg text-black'>Back</Link>
        <div className='flex justify-center items-center gap-20 m-3 mb-5 text-2xl capitalize '>
        
        <h1 className='oswald underline'>add new activity</h1>
        </div>
        <form className=' bg-gray-300 min-h[300px] w-[300px] m-auto rounded-xl p-4 align-justify flex flex-col justify-center items-center form-shadow' onSubmit={handlesubmit}>
            <div className='m-1 capitalize align-justify flex flex-col justify-center'>
            <label htmlFor='title' className='mx-4'>activity name :</label>
            <input type="text" autoComplete='off' id='name' onChange={inputhandle} name='title' />
            </div>
            <div className='m-1 capitalize align-justify flex flex-col justify-center'>
            <label htmlFor='description' className='mx-4'>description : </label>
            <input type='text' name='description' id='desc' onChange={inputhandle} autoComplete='off'/>
            </div>
            <div className='m-1 capitalize align-justify flex flex-col justify-center'>
            <label htmlFor='img' className='mx-4'>add image : </label>
            <input type='file' name='img' id='img' onChange={inputhandle} accept='image/*'/>
            </div>
            <div className='m-1 capitalize align-justify flex flex-col justify-center'>
                <button type='submit' className='bg-green-400 py-2 p-3 rounded-lg '>add element</button>
            </div>
        </form>
    </div>
  )
}
