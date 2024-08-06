import React from 'react'
import View_activity from './View_activity'
import {Link} from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Admin_dashboard() {
 
  return (
    <div className='w-full'>
       
        <div className='flex gap-4 flex-wrap items-center justify-center m-auto w-full  my-2 p-3 lg:rounded-lg text-medium lg:w-[80vw] admin-nav'>
        <Link className='shadow text-black rounded-xl p-2  hover:text-white' to={'/View_activity'}>Activities</Link>
        <Link className='shadow rounded-xl text-black p-2 hover:text-white' to={'/Gallery'} >Gallery Images</Link>
        <Link className='shadow rounded-xl text-black p-2 hover:text-white' to={'/Parent_review'} >Parent Reviews</Link>
        <Link className='shadow rounded-xl text-black p-2 hover:text-white' to={'/View_notices'} >Notices</Link>
        <Link className='shadow rounded-xl text-black p-2 hover:text-white' to={'/Student'} >Student</Link>
        </div>
        {/* <h1 className='roboto text-2xl text-center m-2'>welcome to Admin dashboard</h1> */}
        <View_activity/>
    </div>
  )
}
