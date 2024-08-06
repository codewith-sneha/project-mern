import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Add_student() {
  const user = {
    name: "",
    img: null,
    class: "",
    progress: "",
    email: "",
    dob: "",
    password: ""
  }
  const [data, setdata] = useState(user);
  const navigate = useNavigate();

  const inputhandle = (e) => {
    const { name, value, files } = e.target;

    if (name === 'img') {
      setdata({ ...data, [name]: files[0] });
    } else {
      setdata({ ...data, [name]: value });
    }
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
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

    try {
      const response = await axios.post("http://localhost:3387/api/add_student", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      toast.success("Data added successfully", { position: "top-right" });
      navigate("/Student");
    } catch (error) {
      toast.error("Error adding data", { position: "top-right" });
    }
  };

  return (
    <div className='w-full max-w-2xl mx-auto bg-green-100 min-h-screen p-4'>
      <Link to='/Student' className='bg-gray-200 py-2 px-3 rounded-lg text-black'>Back</Link>
      <div className='flex justify-center items-center gap-20 my-5 text-2xl capitalize'>
        <h1 className='heading'>Add New Student</h1>
      </div>
      <form className='bg-gray-300 min-h-[300px] w-full p-4 rounded-xl shadow-md flex flex-col items-center' onSubmit={handlesubmit}>
        <div className='w-full mb-4'>
          <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name:</label>
          <input type="text" id='name' name='name' onChange={inputhandle} autoComplete='off' className='mt-1 block w-full p-2 border border-gray-300 rounded-md' />
        </div>
        <div className='w-full mb-4'>
          <label htmlFor='dob' className='block text-sm font-medium text-gray-700'>Date of Birth:</label>
          <input type='date' id='dob' name='dob' onChange={inputhandle} autoComplete='off' className='mt-1 block w-full p-2 border border-gray-300 rounded-md' />
        </div>
        <div className='w-full mb-4'>
          <label htmlFor='class' className='block text-sm font-medium text-gray-700'>Class:</label>
          <input type='text' id='class' name='class' onChange={inputhandle} autoComplete='off' className='mt-1 block w-full p-2 border border-gray-300 rounded-md' />
        </div>
        <div className='w-full mb-4'>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email:</label>
          <input type='email' id='email' name='email' onChange={inputhandle} autoComplete='off' className='mt-1 block w-full p-2 border border-gray-300 rounded-md' />
        </div>
        <div className='w-full mb-4'>
          <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password:</label>
          <input type='password' id='password' name='password' onChange={inputhandle} autoComplete='off' className='mt-1 block w-full p-2 border border-gray-300 rounded-md' />
        </div>
        <div className='w-full mb-4'>
          <label htmlFor='progress' className='block text-sm font-medium text-gray-700'>Progress:</label>
          <textarea id='progress' name='progress' rows='4' onChange={inputhandle} value={data.progress} className='mt-1 block w-full p-2 border border-gray-300 rounded-md'></textarea>
        </div>
        <div className='w-full mb-4'>
          <label htmlFor='img' className='block text-sm font-medium text-gray-700'>Add Profile Image:</label>
          <input type='file' id='img' name='img' onChange={inputhandle} accept='image/*' className='mt-1 block w-full p-2 border border-gray-300 rounded-md' />
        </div>
        <div className='w-full'>
          <button type='submit' className='bg-green-500 py-2 px-4 rounded-lg text-white hover:bg-green-600 transition duration-200'>Add Student</button>
        </div>
      </form>
    </div>
  )
}
