import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Update_student() {
  const [data,setdata]=useState([]);
  const [updateData,setUpdateData]=useState({
    name:"",
    img:null,
    class:"",
    progress:"",
    email:"",
    dob:"",
    password:""
  });
  const id=useParams("id").id;
let nevigate=useNavigate()
  const getone = async()=>{
let res=await axios.get(`http://localhost:3387/api/get_student/${id}`);
let dataa=res.data;
console.log(res.data)
setdata(dataa);

  }
  useEffect(()=>{
    getone();
    console.log("data",data);
  },[id])

  const inputhandle=(e)=>{
    const {name,value,files}=e.target;
    
    if(name==='img'){
      setUpdateData({...updateData,[name]:files[0]});
      console.log("file",files[0])
    }
    else{
    setUpdateData({...updateData,[name]:value});
      }
    }

  const handlesubmit =async(e)=>{
    e.preventDefault();
const formData=new FormData();
    formData.append('name', updateData.name);
    formData.append('class', updateData.class);
    formData.append('progress', updateData.progress);
    formData.append('email', updateData.email);
    formData.append('dob', updateData.dob);
    formData.append('password', updateData.password);
    if (data.img) {
      formData.append('profile_image', updateData.img);
    }

    try {
      const response = await axios.put(`http://localhost:3387/api/update_student/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log(response.data);
      // toast.success("Data added sucessfully",{position:"top-right"});
      alert("Data updated sucessfully")
      nevigate("/Student");
    } catch (error) {
      
      console.log(error);
    }
  }

  return (
    <div className='w-full m-auto bg-green-100  min-h-[400px] p-4 '>
        <Link to='/Student' className='bg-gray-200 py-2 p-3 rounded-lg text-black'>Back</Link>
        <div className='flex justify-center items-center gap-20 m-3 mb-5 text-2xl capitalize '>
        
        <h1 className='oswald underline'>update student</h1>
        </div>
        <form className=' bg-gray-300 min-h[300px] w-[400px] m-auto rounded-xl p-4 align-justify flex flex-col justify-center items-center form-shadow' onSubmit={handlesubmit}>
            <div className='m-1 capitalize align-justify flex  justify-center h-8'>
            <label htmlFor='name' className='mx-4'>name :</label>
            <input type="text" autoComplete='off' id='name' onChange={inputhandle} name='name' placeholder={data.name} />
            </div>
            <div className='m-1 capitalize align-justify flex  justify-center h-8'>
            <label htmlFor='dob' className='mx-4'>dob : </label>
            <input type='date' placeholder={data.dob} name='dob' id='dob' onChange={inputhandle} autoComplete='off'/>
            </div>
            <div className='m-1 capitalize align-justify flex  justify-center h-8'>
            <label htmlFor='class' className='mx-4'>class : </label>
            <input type='text' placeholder={data.class} name='class' id='class' onChange={inputhandle} autoComplete='off'/>
            </div>
            <div className='m-1 capitalize align-justify flex justify-center h-8'>
            <label htmlFor='email' className='mx-4'>email : </label>
            <input type='email' placeholder={data.email} name='email' id='email' onChange={inputhandle} autoComplete='off'/>
            </div>
            <div className='m-1 capitalize align-justify flex justify-center h-8'>
            <label htmlFor='password' className='mx-4'>password : </label>
            <input type='password' name='password' id='password' onChange={inputhandle} placeholder={data.password} autoComplete='off'/>
            </div>
            <div className='m-1 capitalize align-justify flex flex-col justify-center'>
            <label htmlFor='progress' className='mx-4'>progress : </label>
            {/* <input type='textarea'  name='progress' id='progress' onChange={inputhandle} autoComplete='off'/> */}
            <textarea name='progress'  id='progress' rows='4' cols='30' onChange={inputhandle} placeholder={data.progress} className='rounded-lg'></textarea>
            </div>
            <div className='m-1 capitalize align-justify flex flex-col justify-center'>
            <label htmlFor='img' className='mx-4 my-2'>add profile image : </label>
            <input type='file' name='img' id='img' onChange={inputhandle} accept='image/*'/>
            </div>
            <div className='m-1 capitalize align-justify flex flex-col justify-center'>
                <button type='submit' className='bg-green-400 py-2 p-3 rounded-lg '>update</button>
            </div>
        </form>
    </div>
  )
}
