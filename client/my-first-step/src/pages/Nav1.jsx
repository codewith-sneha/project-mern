import { Link , useNavigate} from "react-router-dom";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useEffect } from "react";
import { useState } from "react";


export default function Nav1() {
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
    
    <Navbar fluid  className="bg-nav  p-0 m-0 sticky-nav  ">
      <NavbarBrand as={Link} to="/" className="m-0 p-0 flex items-center">
      <Link  to="/" className="flex items-center justify center m-0 p-0 ">
            <img src="./src/assets/logo.jpeg" className=" h-19 rounded-r-lg logo-img 0" alt="Logo" />
          </Link>
          
      </NavbarBrand>
      
      <div className="flex items-center  flex-grow ">
      <NavbarToggle />
      <NavbarCollapse className="flex item-center justify-between m-auto  mr-2 ">
        <NavbarLink as={Link} to="/" active className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav  "> 
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/about" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav ">
          About
        </NavbarLink>
        <NavbarLink as={Link} to="/Curriculum" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav ">
        Curriculum
        </NavbarLink>
        <NavbarLink as={Link} to="/Notices" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav ">
          Notices
        </NavbarLink>
        <NavbarLink as={Link} to="/Admission" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav ">
          Admission
        </NavbarLink>
        <NavbarLink as={Link} to="/Contact" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav ">
          Contact
        </NavbarLink>
        {isAdmin && (
            <NavbarLink as={Link} to="/Admin_dashboard" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav">
              Admin Dashboard
            </NavbarLink>
          )}
          {isStudent && (
            <NavbarLink as={Link} to="/Student_dashboard" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav">
              Student Dashboard
            </NavbarLink>
          )}
        
        {isAdmin || isStudent ? 
        <NavbarLink as={Link} to="/" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav " onClick={handleLogout}> logout </NavbarLink>
         : <NavbarLink as={Link} to="/Login" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav "> login </NavbarLink>}
       
      </NavbarCollapse>
      </div>
    </Navbar>
  );
}
