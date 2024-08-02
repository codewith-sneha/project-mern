import { useEffect, useState } from 'react';
import axios from 'axios';
import './admin.css';
import { Link } from 'react-router-dom';

function View_activity() {
  const [activity, setActivity] = useState([]);
  const getPosts = async () => {
    try {
      let res = await axios.get("http://localhost:3387/api/get_all_post");
      let data = res.data;
      setActivity(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };


  useEffect(() => {
    getPosts();
  }, []);
  
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3387/api/delete_post/${id}`);
      // Remove the deleted post from the state
      setActivity(activity.filter(post => post._id !== id));
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
        <Link to='/Add' className='p-3 mt-2 bg-green-600 text-black min-w-[70px] m-auto text-center rounded-md'>
          Add element <i className="fa-solid fa-plus"></i>
        </Link>
        <table className='w-[70vw] m-auto table-auto border-collapse border border-gray-300 table-view p-2 my-3 bg-gray-100'>
          <thead>
            <tr className='p-2 border-b border-gray-300 bg-gray-400'>
              <th className='border capitalize p-2 border-gray-300'>s.no</th>
              <th className='border capitalize p-2 border-gray-300'>title</th>
              <th className='border capitalize p-2 border-gray-300'>images</th>
              <th className='border capitalize p-2 border-gray-300'>description</th>
              <th className='border capitalize p-2 border-gray-300'>action</th>
            </tr>
          </thead>
          <tbody>
            {activity.map((v, i) => (
              <tr className='p-1 border-b border-gray-300' key={i}>
                <td className='border border-gray-300'>{i + 1}</td>
                <td className='border border-gray-300'>{v.title}</td>
                <td className='border border-gray-300'>
                  <img
                    src={`http://localhost:3387/${v.image}`}
                    alt={v.title}
                    className='h-[100px] w-full'
                  />
                </td>
                <td className='border border-gray-300'>{v.description}</td>
                <td className='border flex gap-2 justify-center items-center border-gray-300 m-auto'>
                  <Link to={`/Update_activity/${v._id}`} className='btn-view bg-yellow-200 p-2 rounded-lg text-black'>
                    <i className="fa-regular fa-pen-to-square"></i>
                  </Link>
                  <button
                    className='btn-view bg-red-600 p-2 rounded-lg text-black'
                    onClick={() => handleDelete(v._id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default View_activity;
