import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Parent_review() {
  const [review, setReview] = useState([]);

  const getapi = async () => {
    try{
    let res = await axios.get("http://localhost:3387/api/get_all_reviews");
    let dataa = res.data;
    setReview(dataa);
  }
catch(error){
  console.log(error)
}
}

const handleDelete=async(id)=>{
  try{
  await axios.delete(`http://localhost:3387/api/delete_review/${id}`);
  setReview(review.filter(post => post._id !== id));
  }
  catch(error){
    console.log("error : ",error);
  }
}

  useEffect(() => {
    getapi();
  }, [])

  return (
    <div className="container mx-auto px-4 overflow-x-hidden ">
      <Link to='/Admin_dashboard' className='text-black bg-gray-200 py-2 px-4 rounded-lg mb-4 inline-block'>
        Back
      </Link>
      <div className='flex flex-col items-center'>
        <Link to={'/Add_review'} className='p-3 mt-2 bg-green-600 text-black min-w-[70px] text-center rounded-md'>Add element <i className="fa-solid fa-plus"></i></Link>
        <div className="w-full overflow-x-auto">
          <table className='w-full md:w-[60vw] min-h-[200px] m-auto table-auto border-collapse border border-gray-300 table-view p-2 my-3 bg-gray-100'>
            <thead>
              <tr className='p-2 border-b border-gray-300 bg-gray-400'>
                <th className='border capitalize p-2 border-gray-300'>s.no</th>
                <th className='border capitalize p-2 border-gray-300'>name</th>
                <th className='border capitalize p-2 border-gray-300'>image</th>
                <th className='border capitalize p-2 border-gray-300'>review</th>
                <th className='border capitalize p-2 border-gray-300'>action</th>
              </tr>
            </thead>
            <tbody>
              {review.map((v, i) => (
                <tr className='p-1 border-b border-gray-300' key={i}>
                  <td className='border border-gray-300 p-2'>{i + 1}</td>
                  <td className='border border-gray-300 p-2'>{v.title}</td>
                  <td className='border border-gray-300 p-2'><img src={`http://localhost:3387/${v.image}`} alt={i} className='h-[100px] w-full object-cover' /></td>
                  <td className='border border-gray-300 p-2'>{v.description}</td>
                  <td className='border flex flex-col sm:flex-row gap-2 justify-center items-center border-gray-300 p-2'>
                    <Link to={`/Edit_review/${v._id}`} className='btn-view bg-yellow-200 p-2 rounded-lg text-black text-center'> <i className="fa-regular fa-pen-to-square"></i></Link>
                    <button className='btn-view bg-red-600 p-2 rounded-lg text-black text-center'><i className="fa-solid fa-trash" onClick={()=> handleDelete(v._id)}></i></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
