import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

export default function Update_notice() {
  const [data,setdata]=useState([]);
  const nevigate=useNavigate();
  const [updatedata,setupdatedata]=useState({
    attach:null,
    desc:""
  });
  const id = useParams("id").id;
  const getone = async()=>{
let res =await axios.get(`http://localhost:3387/api/get_notice/${id}`);
let dataa=res.data;
setdata(dataa);
setupdatedata({
  description:dataa.description,
  attatchment:null
})
  }
  
  useEffect(()=>{
    getone();
  },[id]);

  const inputhandle=(e)=>{
    const {name,value,files}=e.target;
    
    if(name=='attach'){
      setupdatedata({...updatedata,[name]:files[0]});
    }
    else{
    setupdatedata({...updatedata,[name]:value});
      }
    }

  const handlesubmit=async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('description', updatedata.description);
    if (data.img) {
      formData.append('attatchments', updatedata.attach);
    }

    try {
      const response = await axios.put(`http://localhost:3387/api//update_notice/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      console.log(response.data);
      nevigate("/View_notices");
    } catch (error) {
      
      console.log(error);
    }
  };
  return (
    
    <div className='text-black w-full max-w-3xl m-auto bg-green-100 min-h-[400px] p-4 rounded-lg shadow-lg'>
    <Link to='/View_notices' className='bg-gray-200 py-2 px-4 rounded-lg mb-4 inline-block'>
      Back
    </Link>
    {console.log(data)
    }
    <div className='flex justify-center items-center gap-6 m-1 mb-5 text-3xl capitalize'>
      <h1 className='heading '>Update Notice</h1>
    </div>
  
    <form className='bg-gray-300 min-h-[300px] w-full md:w-3/4 lg:w-1/2 m-auto rounded-xl p-4 align-justify flex flex-col justify-center items-center form-shadow space-y-4' onSubmit={handlesubmit}>
      <div className='w-full'>
        
      </div>
      <div className='w-full'>
        <label htmlFor='description' className='block text-lg mb-2'>
          Description:
        </label>
        <input
          type='text'
          value={updatedata.description}
          onChange={inputhandle}
          name='description'
          id='desc'
          autoComplete='off'
          className='w-full p-2 border rounded-lg'
        />
      </div>
      <div className='w-full'>
        <label htmlFor='img' className='block text-lg mb-2'>
          Add attachment:
        </label>
        <input
          type='file'
          name='img'
          id='img'
          onChange={inputhandle}
          accept='.pdf, .doc, .docx'
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

