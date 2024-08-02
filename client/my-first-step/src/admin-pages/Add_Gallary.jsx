import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Add_Gallary() {
  const user={
    name:"",
    img:null,
    desc:""
  }
  const [data,setdata]=useState(user);

  const inputhandle=(e)=>{
const {name,value,files}=e.target;
console.log(name,value);
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
      formData.append('img', data.img);
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
        <Link to='/Gallery' className='bg-gray-200 py-2 p-3 rounded-lg text-black'>Back</Link>
        <div className='flex justify-center items-center gap-20 m-3 mb-5 text-3xl capitalize '>
        
        <h1 className='heading '>add new Image</h1>
        </div>
        <form className=' bg-gray-300 min-h[300px] w-[350px] m-auto rounded-xl p-4 align-justify flex flex-col justify-center items-center form-shadow' onSubmit={handlesubmit}>
            
            <div className='m-1 capitalize align-justify flex flex-col justify-center '>
            <label htmlFor='img' className='m-2 roboto text-xl'>select image : </label>
            <input type='file' name='img' id='img' onChange={inputhandle} accept='image/*' className='w-full p-2 border rounded-lg '/>
            </div>
            <div className='m-4  capitalize align-justify flex flex-col justify-center'>
                <button type='submit' className='bg-green-400 py-2 p-3 rounded-lg '>add element</button>
            </div>
        </form>
    </div>
  )
}
