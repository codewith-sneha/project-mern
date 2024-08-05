import { Link , useNavigate} from "react-router-dom";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { useEffect } from "react";
import { useState } from "react";


export default function Nav1() {

  const [isMenuOpen ,setIsMenuOpen]=useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };
  
  const id=localStorage.getItem('id');
  const navigate = useNavigate();
  // const isStudent = localStorage.getItem('isStudent')==='true';
  // const isAdmin = true; //using true bcoz localstorage return string so to convert it 
  const [isAdmin, setIsAdmin] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  // localStorage.setItem('isStudent',true);
  
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
    
    <Navbar fluid  className="bg-nav  p-0 m-0 sticky-nav  rtl:space-x-reverse ">
      <NavbarBrand as={Link} to="/" className="m-0 p-0 flex items-center">
      <Link  to="/" className="flex items-center justify center m-0 p-0 ">
            <img src="./src/assets/logo.jpeg" className=" h-19 rounded-r-lg logo-img 0" alt="Logo" />
          </Link>
          
      </NavbarBrand>
      
      <div className="flex items-center  flex-grow ">
      <NavbarToggle onClick={toggleMenu}/>
      <NavbarCollapse className="flex flex-col item-center md:flex-row justify-between m-auto  mr-2 ${isMenuOpen ? 'block' : 'hidden'}">
        <NavbarLink as={Link} to="/" active className="block py-2 mx-0 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav  "> 
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/about" className="block py-2 px-3 mx-0 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav ">
          About
        </NavbarLink>
        <NavbarLink as={Link} to="/Curriculum" className="block py-2 mx-0 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav ">
        Curriculum
        </NavbarLink>
        <NavbarLink as={Link} to="/Notices" className="block py-2 px-3 mx-0 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav ">
          Notices
        </NavbarLink>
        <NavbarLink as={Link} to="/Admission" className="block py-2 mx-0 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav ">
          Admission
        </NavbarLink>
        <NavbarLink as={Link} to="/Contact" className="block py-2 px-3 mx-0 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav ">
          Contact
        </NavbarLink>
        {isAdmin && (
            <NavbarLink as={Link} to="/Admin_dashboard" className="block mx-0 py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav">
              Admin Dashboard
            </NavbarLink>
          )}
          {isStudent && (
            <NavbarLink as={Link} to="/Student_dashboard" className="block mx-0 py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav">
              Student Dashboard
            </NavbarLink>
          )}
        
        {isAdmin || isStudent ? 
        <NavbarLink as={Link} to="/" className="block py-2 px-3 md:py-0 mx-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav " onClick={handleLogout}> logout </NavbarLink>
         : <NavbarLink as={Link} to="/Login" className="block py-2 px-3 md:py-0 mx-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav "> login </NavbarLink>}
       
      </NavbarCollapse>
      </div>
    </Navbar>
  );
}
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// export default function Nav1() {
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [isStudent, setIsStudent] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
//   // localStorage.setItem('isAdmin',true);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('isStudent');
//     localStorage.removeItem('isAdmin');
//     localStorage.removeItem('id');
//     setIsAdmin(false);
//     setIsStudent(false);
//     navigate('/');
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
//   };

//   useEffect(() => {
//     setIsAdmin(JSON.parse(localStorage.getItem('isAdmin') || 'false'));
//     setIsStudent(JSON.parse(localStorage.getItem('isStudent') || 'false'));
//   }, []);

//   return (
//     <nav className="bg-nav p-0 m-0 sticky-nav flex">
//       <div className="flex items-center justify-between p-0">
//         <Link to="/" className="flex items-center p-0 m-0">
//           <img src="./src/assets/logo.jpeg" className="h-18 w-18 rounded-r-lg logo-img p-0 m-0" alt="Logo" />
//         </Link>
//         <button
//           onClick={toggleMenu}
//           className="inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
//           aria-controls="navbar-default"
//           aria-expanded={isMenuOpen}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//             <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
//           </svg>
//         </button>
//       </div>
//       <div className={`md:flex md:items-center md:justify-between ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
//         <ul className="flex gap-0 flex-col md:flex-row md:space-x-1 m-auto md:mt-0 text-center md:text-left">
//           <li>
//             <Link to="/" className="btnnav block py-2 px-2 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="btnnav block py-2 px-2 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/Curriculum" className="btnnav block py-2 px-2 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white">
//               Curriculum
//             </Link>
//           </li>
//           <li>
//             <Link to="/Notices" className="btnnav block py-2 px-2 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white">
//               Notices
//             </Link>
//           </li>
//           <li>
//             <Link to="/Admission" className="btnnav block py-2 px-2 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white">
//               Admission
//             </Link>
//           </li>
//           <li>
//             <Link to="/Contact" className="btnnav block py-2 px-2 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white">
//               Contact
//             </Link>
//           </li>
//           {isAdmin && (
//             <li>
//               <Link to="/Admin_dashboard" className="btnnav block py-2 px-2 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white">
//                 Admin Dashboard
//               </Link>
//             </li>
//           )}
//           {isStudent && (
//             <li>
//               <Link to="/Student_dashboard" className="btnnav block py-2 px-2 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white">
//                 Student Dashboard
//               </Link>
//             </li>
//           )}
//           {(isAdmin || isStudent) ? (
//             <li>
//               <Link to="/" className="btnnav block py-2 px-2 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white" onClick={handleLogout}>
//                 Logout
//               </Link>
//             </li>
//           ) : (
//             <li>
//               <Link to="/Login" className="btnnav block  text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white">
//                 Login
//               </Link>
//             </li>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// }
// import { Link, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// export default function Nav1() {
//   const [isAdmin, setIsAdmin] = useState(false);
//   const [isStudent, setIsStudent] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('isStudent');
//     localStorage.removeItem('isAdmin');
//     localStorage.removeItem('id');
//     setIsAdmin(false);
//     setIsStudent(false);
//     navigate('/');
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
//   };

//   useEffect(() => {
//     setIsAdmin(JSON.parse(localStorage.getItem('isAdmin') || 'false'));
//     setIsStudent(JSON.parse(localStorage.getItem('isStudent') || 'false'));
//   }, []);

//   return (
//     <nav className="bg-nav p-0 m-0 sticky-nav flex">
//       <div className="flex items-center justify-between p-2">
//         <Link to="/" className="flex items-center">
//           <img src="./src/assets/logo.jpeg" className="h-16 rounded-r-lg logo-img" alt="Logo" />
//         </Link>
//         <button
//           onClick={toggleMenu}
//           className="inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
//           aria-controls="navbar-default"
//           aria-expanded={isMenuOpen}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//             <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
//           </svg>
//         </button>
//       </div>
//       <div className={`md:flex md:items-center ${isMenuOpen ? 'block' : 'hidden'} md:block`} id="navbar-default">
//         <ul className="flex flex-col md:flex-row md:space-x-4 mt-2 md:mt-0 text-center md:text-left">
//           <li>
//             <Link to="/" className="block py-2 px-4 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="block py-2 px-4 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/Curriculum" className="block py-2 px-4 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white">
//               Curriculum
//             </Link>
//           </li>
//           <li>
//             <Link to="/Notices" className="block py-2 px-4 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white">
//               Notices
//             </Link>
//           </li>
//           <li>
//             <Link to="/Admission" className="block py-2 px-4 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white">
//               Admission
//             </Link>
//           </li>
//           <li>
//             <Link to="/Contact" className="block py-2 px-4 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white">
//               Contact
//             </Link>
//           </li>
//           {isAdmin && (
//             <li>
//               <Link to="/Admin_dashboard" className="block py-2 px-4 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white">
//                 Admin Dashboard
//               </Link>
//             </li>
//           )}
//           {isStudent && (
//             <li>
//               <Link to="/Student_dashboard" className="block py-2 px-4 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white">
//                 Student Dashboard
//               </Link>
//             </li>
//           )}
//           {(isAdmin || isStudent) ? (
//             <li>
//               <Link to="/" className="block py-2 px-4 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white" onClick={handleLogout}>
//                 Logout
//               </Link>
//             </li>
//           ) : (
//             <li>
//               <Link to="/Login" className="block py-2 px-4 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white">
//                 Login
//               </Link>
//             </li>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// }
