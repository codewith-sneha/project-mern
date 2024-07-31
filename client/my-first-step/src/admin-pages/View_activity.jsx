import React from 'react'
import './admin.css';
import { Link } from 'react-router-dom';

function View_activity() {
    const activity=[
        {name:"swimming",desc:"swimming is a fun, relaxing activity that fuels brain, health and built strong bodies.",img:"./src/assets/photogallery/A1.jpeg"},
        {name:"colouring",desc:"Colouring is a great way to help children build fine motor skills and  hand strength. It builds concentration. ",img:"./src/assets/photogallery/A2.jpeg"},
        {name:"festive celebration",desc:"A special event that's meant to be enjoyable and create happy feeling.",img:"./src/assets/photogallery/A3.jpeg"},
        {name:"birthday celebration",desc:" birthdays are very memorable days in a person's life, the celebration and oganization of a happy birthday party are what makes it more fun.",img:"./src/assets/photogallery/A4.jpeg"},
        {name:"dining",desc:" It is important to make children sit together and share the food with them. When we sit together and eat, everyone is equal.",img:"./src/assets/photogallery/A5.jpeg"},
      ]
  return (
    <div className='flex flex-col m-auto gap-1'>
        <Link to={'/Add'} className='p-3  bg-green-200 min-w-[70px] m-auto text-center rounded-md'>Add element <i className="fa-solid fa-plus"></i></Link>
        <table className='w-[70vw] m-auto table-auto border-collapse border border-gray-300 table-view p-2 my-3 bg-gray-100'>
            <thead>
                <tr className='p-2 border-b  border-gray-300 bg-gray-400'>
                    <th className='border capitalize p-2 border-gray-300'>s.no</th>
                    <th className='border capitalize p-2 border-gray-300'>title</th>
                    <th className='border capitalize p-2 border-gray-300'>images</th>
                    <th className='border capitalize p-2 border-gray-300'>description</th>
                    <th className='border capitalize p-2 border-gray-300'>action</th>
                </tr >
            </thead>
            <tbody>
                {activity.map((v,i)=>{
                    return(
                        <>
                <tr className='p-1 border-b border-gray-300' key={i}>
                    
                    <td className='border border-gray-300'>{i+1}</td>
                    <td className='border border-gray-300'>{v.name}</td>
                    <td className='border border-gray-300'><img src={v.img} alt={i} className='h-[100px] w-full' /></td>
                    <td className='border border-gray-300'>{v.desc}</td>
                    <td className='border flex gap-2 justify-center items-center border-gray-300 m-auto '>
                        <Link to={'/Update_activity'} className='btn-view bg-yellow-200 p-2 rounded-lg text-black ' >update</Link>
                        <Link to='/delete_activity' className='btn-view bg-red-600 p-2 rounded-lg text-black'><i className="fa-solid fa-trash"></i></Link>
                    </td>
                </tr >
                  </>  )
            }
               )}
            </tbody>
        </table>
    </div>
  )
}

export default View_activity