import React from 'react'
import { Link } from 'react-router-dom'

export default function Parent_review() {
  const parentReview=[
    {name:"abc",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit.",img:"./src/assets/about/p1.jpg"},
    {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
    {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
    {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
    {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
    {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
    {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
    {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
    {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"},
    {name:"abc",desc:"",img:"./src/assets/about/p1.jpg"}
  ]
  return (
    <div>
    <Link to='/Admin_dashboard' className='text-black bg-gray-200 py-2 px-4 rounded-lg mb-4 inline-block m-1'>
      Back
    </Link>
    <div className='flex flex-col m-auto gap-1'>
    <Link to={'/Add_review'} className='p-3 mt-2  bg-green-600 text-black min-w-[70px] m-auto text-center rounded-md'>Add element <i className="fa-solid fa-plus"></i></Link>
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
            {parentReview.map((v,i)=>{
                return(
                    <>
            <tr className='p-1 border-b border-gray-300' key={i}>
                
                <td className='border border-gray-300'>{i+1}</td>
                <td className='border border-gray-300'>{v.name}</td>
                <td className='border border-gray-300'><img src={v.img} alt={i} className='h-[100px] w-full' /></td>
                <td className='border border-gray-300'>{v.desc}</td>
                <td className='border flex gap-2 justify-center items-center border-gray-300 m-auto '>
                    <Link to={'/Edit_review'} className='btn-view bg-yellow-200 p-2 rounded-lg text-black ' >update</Link>
                    <Link to='/delete_activity' className='btn-view bg-red-600 p-2 rounded-lg text-black'><i className="fa-solid fa-trash"></i></Link>
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
