
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';

export default function Navbar() {
  const id=localStorage.getItem('id');
  const navigate = useNavigate();
  // const isStudent = localStorage.getItem('isStudent')==='true';
  // const isAdmin = true; //using true bcoz localstorage return string so to convert it 
  const [isAdmin, setIsAdmin] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  // localStorage.setItem('isAdmin',true);
  
  const handleLogout=()=>{
    localStorage.removeItem('isStudent');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('id');
    setIsAdmin(false);
    setIsStudent(false);
    // window.location.href='/Login';
navigate('/');

  }
  
  useEffect(()=>{
    setIsAdmin(JSON.parse(localStorage.getItem('isAdmin') || 'false'));
    setIsStudent(JSON.parse(localStorage.getItem('isStudent') || 'false'));
  },[])
  return (
    <div className='w-full h-18 bg-nav flex justify-between items-center sticky z-10 lato font-semibold capitalize'>
      
      <div>
        <Link to={'/'} className='float-left'>
        <img src='./src/assets/logo.jpeg' alt='logo' className='h-[70px] rounded-r-md'></img>
        </Link>
      </div>
      <input type='checkbox' id='check' name='check'/>
      <label htmlFor="check" className='checkbtn float-right text-[25px] cursor-pointer'>
      <i className="fa-solid fa-bars "></i>
      </label>
      <div className='ul flex items-center justify-center mr-4 '>
      
<Link to='/' className="btnnav">
Home
</Link>
<Link  to="/about" className="btnnav ">
          About
        </Link>
        <Link  to="/Curriculum" className="btnnav ">
        Curriculum
        </Link>
        <Link  to="/Notices" className=" btnnav ">
          Notices
        </Link>
        <Link  to="/Admission" className=" btnnav ">
          Admission
        </Link>
        <Link  to="/Contact" className=" btnnav ">
          Contact
        </Link>
        {isAdmin && (
            <Link  to="/Admin_dashboard" className=" btnnav">
              Admin Dashboard
            </Link>
          )}
          {isStudent && (
            <Link  to="/Student_dashboard" className=" btnnav">
              Student Dashboard
            </Link>
          )}
        
        {isAdmin || isStudent ? 
        <Link  to="/" className=" btnnav " onClick={handleLogout}> logout </Link>
         : <Link  to="/Login" className=" btnnav "> login </Link>}
       
      </div>
    </div>
  )
}
