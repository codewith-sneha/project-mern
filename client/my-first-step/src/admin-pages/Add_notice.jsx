import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Add_notice() {
  const user={
    attach:null,
    desc:""
  }
  const [data,setdata]=useState(user);
  const nevigate=useNavigate();

  const inputhandle=(e)=>{
const {name,value,files}=e.target;

if(name=='attach'){
  setdata({...data,[name]:files[0]});
}
else{
setdata({...data,[name]:value});
  }
}
 
  const handlesubmit=async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('description', data.description);
    if (data.attach) {
      formData.append('attatchments', data.attach);
    }
  

    try {
      const response = await axios.post("http://localhost:3387/api/add_notice", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log(response.data);
      // toast.success("Data added sucessfully",{position:"top-right"});
      alert("Data added sucessfully")
      nevigate("/View_notices");
    } catch (error) {
      
      console.log(error);
    }
  };
  {console.log(data)}
  return (
  
    <div className='w-full m-auto bg-green-100  min-h-[400px] p-4 '>
        <Link to='/View_notices' className='bg-gray-200 py-2 p-3 rounded-lg text-black'>Back</Link>
        <div className='flex justify-center items-center gap-20 m-3 mb-5 text-2xl capitalize '>
        
        <h1 className='oswald underline'>add new Notices</h1>
        </div>
        <form className=' bg-gray-300 min-h[300px] w-[300px] m-auto rounded-xl p-4 align-justify flex flex-col justify-center items-center form-shadow' onSubmit={handlesubmit}>
            
            <div className='m-1 capitalize align-justify flex flex-col justify-center'>
            <label htmlFor='description' className='mx-4'>description : </label>
            <input type='text' name='description' id='desc' onChange={inputhandle} autoComplete='off'/>
            </div>
            <div className='m-1 capitalize align-justify flex flex-col justify-center'>
            <label htmlFor='attach' className='mx-4'>add attachment : </label>
            <input type='file' name='attach' id='attach' onChange={inputhandle} accept=".pdf, .doc, .docx"/>
            </div>
            <div className='m-1 capitalize align-justify flex flex-col justify-center'>
                <button type='submit' className='bg-green-400 py-2 p-3 rounded-lg '>add element</button>
            </div>
        </form>
    </div>
  )
}
