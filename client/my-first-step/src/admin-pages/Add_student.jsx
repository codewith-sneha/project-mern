import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Add_student() {
  const user={
    name:"",
    img:null,
    class:"",
    progress:"",
    email:"",
    dob:"",
    password:""
  }
  const [data,setdata]=useState(user);
  const nevigate=useNavigate();

  const inputhandle=(e)=>{
const {name,value,files}=e.target;

if(name==='img'){
  setdata({...data,[name]:files[0]});
}
else{
setdata({...data,[name]:value});
  }
}
 
  const handlesubmit=async(e)=>{
    e.preventDefault();
    console.log("image apth",data.profile_image)
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('class', data.class);
    formData.append('progress', data.progress);
    formData.append('email', data.email);
    formData.append('dob', data.dob);
    formData.append('password', data.password);
    if (data.img) {
      formData.append('profile_image', data.img);
    }
console.log(formData.profile_image)
    try {
      const response = await axios.post("http://localhost:3387/api/add_student", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log(response.data);
      // toast.success("Data added sucessfully",{position:"top-right"});
      alert("Data added sucessfully")
      nevigate("/Student");
    } catch (error) {
      
      console.log(error);
    }
  };
  {console.log(data)}
  return (
  
    <div className='w-full m-auto bg-green-100  min-h-[400px] p-4 '>
        <Link to='/Student' className='bg-gray-200 py-2 p-3 rounded-lg text-black'>Back</Link>
        <div className='flex justify-center items-center gap-20 m-3 mb-5 text-2xl capitalize '>
        
        <h1 className='oswald underline'>add new student</h1>
        </div>
        <form className=' bg-gray-300 min-h[300px] w-[400px] m-auto rounded-xl p-4 align-justify flex flex-col justify-center items-center form-shadow' onSubmit={handlesubmit}>
            <div className='m-1 capitalize align-justify flex  justify-center h-8'>
            <label htmlFor='name' className='mx-4'>name :</label>
            <input type="text" autoComplete='off' id='name' onChange={inputhandle} name='name' />
            </div>
            <div className='m-1 capitalize align-justify flex  justify-center h-8'>
            <label htmlFor='dob' className='mx-4'>dob : </label>
            <input type='date' name='dob' id='dob' onChange={inputhandle} autoComplete='off'/>
            </div>
            <div className='m-1 capitalize align-justify flex  justify-center h-8'>
            <label htmlFor='class' className='mx-4'>class : </label>
            <input type='text' name='class' id='class' onChange={inputhandle} autoComplete='off'/>
            </div>
            <div className='m-1 capitalize align-justify flex justify-center h-8'>
            <label htmlFor='email' className='mx-4'>email : </label>
            <input type='email' name='email' id='email' onChange={inputhandle} autoComplete='off'/>
            </div>
            <div className='m-1 capitalize align-justify flex justify-center h-8'>
            <label htmlFor='password' className='mx-4'>password : </label>
            <input type='password' name='password' id='password' onChange={inputhandle} autoComplete='off'/>
            </div>
            <div className='m-1 capitalize align-justify flex flex-col justify-center'>
            <label htmlFor='progress' className='mx-4'>progress : </label>
            {/* <input type='textarea'  name='progress' id='progress' onChange={inputhandle} autoComplete='off'/> */}
            <textarea name='progress' id='progress' rows='4' cols='30' onChange={inputhandle} value={data.progress} className='rounded-lg'></textarea>
            </div>
            <div className='m-1 capitalize align-justify flex flex-col justify-center'>
            <label htmlFor='img' className='mx-4 my-2'>add profile image : </label>
            <input type='file' name='img' id='img' onChange={inputhandle} accept='image/*'/>
            </div>
            <div className='m-1 capitalize align-justify flex flex-col justify-center'>
                <button type='submit' className='bg-green-400 py-2 p-3 rounded-lg '>add element</button>
            </div>
        </form>
    </div>
  )
}
