import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Student() {
 const [student,setStudent]=useState([]);
 const getapi=async()=>{
  let res = await axios.get("http://localhost:3387/api/get_all_students");
  let data=res.data;
  setStudent(data);
 }
 useEffect(()=>{
getapi();
 },[]);
 const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3387/api/delete_student/${id}`);
      // Remove the deleted post from the state
      setStudent(student.filter(post => post._id !== id));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };
  return (
    <div className='overflow-x-hidden'>
    <Link to='/Admin_dashboard' className='text-black bg-gray-200 py-2 px-4 rounded-lg mb-4 inline-block m-1'>
Back
</Link>
<div className='flex flex-col m-auto gap-1 overflow-x-auto'>
  <Link to={'/Add_student'} className='p-3 mt-2  bg-green-600 text-black min-w-[70px] m-auto text-center rounded-md'>Add element <i className="fa-solid fa-plus"></i></Link>
  <table className='w-[70vw] m-auto table-auto border-collapse m-auto table-auto border border-gray-300 table-view p-2 my-3 bg-gray-100 media-scroll '>
      <thead>
          <tr className='p-2 border-b  border-gray-300 bg-gray-400'>
              <th className='border capitalize p-2 border-gray-300'>s.no</th>
              <th className='border capitalize p-2 border-gray-300'>name</th>
              <th className='border capitalize p-2 border-gray-300'>profile_image</th>
              <th className='border capitalize p-2 border-gray-300'>email</th>
              <th className='border capitalize p-2 border-gray-300'>d.o.b</th>
              <th className='border capitalize p-2 border-gray-300'>class</th>
              <th className='border capitalize p-2 border-gray-300'>progress</th>
              <th className='border capitalize p-2 border-gray-300'>action</th>
          </tr >
      </thead>
      <tbody>
          {student.map((v,i)=>{
              return(
                  <>
          <tr className='p-1 border-b border-gray-300' key={i}>
              <td className='border border-gray-300'>{i+1}</td>
              <td className='border border-gray-300'>{v.name}</td>
              
              <td className='border border-gray-300'><img src={`http://localhost:3387/${v.profile_image}`} alt={i} className='h-[100px] w-full' /></td>
              <td className='border border-gray-300'>{v.email}</td>
              <td className='border border-gray-300'>{v.dob}</td>
              <td className='border border-gray-300'>{v.class}</td>
              <td className='border border-gray-300'>{v.progress}</td>
              <td className='border flex gap-2 justify-center items-center border-gray-300 m-auto '>
                  <Link to={`/Update_student/${v._id}`} className='btn-view bg-yellow-200 p-2 rounded-lg text-black ' ><i class="fa-regular fa-pen-to-square"></i></Link>
                  <button className='btn-view bg-red-600 p-2 rounded-lg text-black' ><i className="fa-solid fa-trash" onClick={()=>handleDelete(v._id)}></i></button>
              </td>
          </tr >
            </>  )
      }
         )}
      </tbody>
  </table>
</div>
</div>
  )
}
