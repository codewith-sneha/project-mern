import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function Update_student() {
  const [data, setdata] = useState([]);
  const [updateData, setUpdateData] = useState({
    name: "",
    img: null,
    class: "",
    progress: "",
    email: "",
    dob: "",
    password: ""
  });
  const id = useParams("id").id;
  let navigate = useNavigate();

  const getone = async () => {
    let res = await axios.get(`http://localhost:3387/api/get_student/${id}`);
    let dataa = res.data;
    console.log(res.data);
    setdata(dataa);
    setUpdateData({
      name: dataa.name,
      image: null,
      class: dataa.class,
      progress: dataa.progress,
      email: dataa.email,
      dob: dataa.dob,
      password: dataa.password
    })
  }

  useEffect(() => {
    getone();
    console.log("data", data);
  }, [id])

  const inputhandle = (e) => {
    const { name, value, files } = e.target;

    if (name === 'img') {
      setUpdateData({ ...updateData, [name]: files[0] });
      console.log("file", files[0])
    } else {
      setUpdateData({ ...updateData, [name]: value });
    }
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', updateData.name);
    formData.append('class', updateData.class);
    formData.append('progress', updateData.progress);
    formData.append('email', updateData.email);
    formData.append('dob', updateData.dob);
    formData.append('password', updateData.password);
    if (updateData.img) {
      formData.append('profile_image', updateData.img);
    }
console.log("update",updateData.img)
    try {
      const response = await axios.put(`http://localhost:3387/api/update_student/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data);
      alert("Data updated successfully")
      navigate("/Student");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='w-full max-w-2xl mx-auto bg-green-100 min-h-screen p-4'>
      <Link to='/Student' className='bg-gray-200 py-2 px-3 rounded-lg text-black'>Back</Link>
      <div className='flex justify-center items-center gap-20 my-5 text-2xl capitalize'>
        <h1 className='underline'>Update Student</h1>
      </div>
      <form className='bg-gray-300 min-h-[300px] w-full p-4 rounded-xl shadow-md flex flex-col items-center' onSubmit={handlesubmit}>
        <div className='w-full mb-4'>
          <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name:</label>
          <input type="text" id='name' name='name' onChange={inputhandle} autoComplete='off' value={updateData.name} className='mt-1 block w-full p-2 border border-gray-300 rounded-md' />
        </div>
        <div className='w-full mb-4'>
          <label htmlFor='dob' className='block text-sm font-medium text-gray-700'>Date of Birth:</label>
          <input type='date' id='dob' name='dob' onChange={inputhandle} autoComplete='off' value={updateData.dob} className='mt-1 block w-full p-2 border border-gray-300 rounded-md' />
        </div>
        <div className='w-full mb-4'>
          <label htmlFor='class' className='block text-sm font-medium text-gray-700'>Class:</label>
          <input type='text' id='class' name='class' onChange={inputhandle} autoComplete='off' value={updateData.class} className='mt-1 block w-full p-2 border border-gray-300 rounded-md' />
        </div>
        <div className='w-full mb-4'>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email:</label>
          <input type='email' id='email' name='email' onChange={inputhandle} autoComplete='off' value={updateData.email} className='mt-1 block w-full p-2 border border-gray-300 rounded-md' />
        </div>
        <div className='w-full mb-4'>
          <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password:</label>
          <input type='password' id='password' name='password' onChange={inputhandle} autoComplete='off' value={updateData.password} className='mt-1 block w-full p-2 border border-gray-300 rounded-md' />
        </div>
        <div className='w-full mb-4'>
          <label htmlFor='progress' className='block text-sm font-medium text-gray-700'>Progress:</label>
          <textarea id='progress' name='progress' rows='4' onChange={inputhandle} value={updateData.progress} className='mt-1 block w-full p-2 border border-gray-300 rounded-md'></textarea>
        </div>
        <div className='w-full mb-4'>
          <label htmlFor='img' className='block text-sm font-medium text-gray-700'>Add Profile Image:</label>
          <input type='file' id='img' name='img' onChange={inputhandle} accept='image/*' className='mt-1 block w-full p-2 border border-gray-300 rounded-md' />
        </div>
        <div className='w-full'>
          <button type='submit' className='bg-green-500 py-2 px-4 rounded-lg text-white hover:bg-green-600 transition duration-200'>Update</button>
        </div>
      </form>
    </div>
  )
}
