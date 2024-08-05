import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Gallery() {
  const [img,setImg]=useState([]);
  const getPosts = async () => {
    try {
      let res = await axios.get("http://localhost:3387/api/get_all_images");
      let dataa = res.data;
      setImg(dataa);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };


  useEffect(() => {
    getPosts();
  }, []);
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3387/api/delete_image/${id}`);
      // Remove the deleted post from the state
      setImg(img.filter(post => post._id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };


  return (
  <div>
          <Link to='/Admin_dashboard' className='text-black bg-gray-200 py-2 px-4 rounded-lg mb-4 inline-block m-1'>
      Back
    </Link>
    <div className='flex flex-col m-auto gap-1'>
        <Link to={'/Add_Gallary'} className='p-3 mt-2  bg-green-600 text-black min-w-[70px] m-auto text-center rounded-md'>Add element <i className="fa-solid fa-plus"></i></Link>
        <table className='w-[50vw] m-auto table-auto border-collapse border border-gray-300 table-view p-2 my-3 bg-gray-100'>
            <thead>
                <tr className='p-2 border-b  border-gray-300 bg-gray-400'>
                    <th className='border capitalize p-2 border-gray-300'>s.no</th>
                    <th className='border capitalize p-2 border-gray-300 flex justify-center items-center m-auto'>images</th>
                    <th className='border capitalize p-2 border-gray-300'>action</th>
                </tr >
            </thead>
            <tbody>
                {img.map((v,i)=>{
                    return(
                        <>
                <tr className='p-1 border-b border-gray-300' key={i}>
                    
                    <td className='border border-gray-300'>{i+1}</td>
                    <td className='border border-gray-300 flex justify-center items-center'><img src={`http://localhost:3387/${v.image}`} alt={i} className='  h-[150px] w-[150px]' /></td>
                    <td className='border  border-gray-300 m-auto '>
                        <button className='btn-view bg-red-600 p-2 rounded-lg text-black' onClick={()=> handleDelete(v._id)}><i className="fa-solid fa-trash"></i></button>
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
