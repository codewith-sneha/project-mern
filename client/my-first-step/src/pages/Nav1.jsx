import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function Nav1() {
  return (
<<<<<<< HEAD
    <Navbar fluid  className="bg-nav  p-0 m-0 sticky-nav">
      <NavbarBrand as={Link} to="/" className="m-0 p-0 flex items-center">
      <Link  to="/" className="flex items-center  m-0 p-0 ">
            <img src="./src/assets/logo.jpeg" className=" h-19 rounded-r-lg logo-img 0" alt="Logo" />
=======
    <Navbar fluid rounded className="bg-nav sticky-nav">
      <div>
      <NavbarBrand as={Link} to="/">
      <Link  to="/" className="flex items-center mr-5 rtl:space-x-reverse">
            <img src="./src/assets/logo.jpeg" className="animate ml-0 m-0 h-19 rounded-r-lg logo-img md:m-0" alt="Logo" />
>>>>>>> 0e5ee6457ce67b7ce3b8b77b43746af96a38caae
          </Link>
      </NavbarBrand>
      </div>
      <div>
      <NavbarToggle />
      <NavbarCollapse className="flex item-center justify-center m-auto mt-0 ">
        <NavbarLink as={Link} to="/" active className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav my-auto my-auto"> 
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/about" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav my-auto">
          About
        </NavbarLink>
        <NavbarLink as={Link} to="/Curriculum" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav my-auto">
        Curriculum
        </NavbarLink>
        <NavbarLink as={Link} to="/Notices" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav my-auto">
          Notices
        </NavbarLink>
        <NavbarLink as={Link} to="/Admission" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav my-auto">
          Admission
        </NavbarLink>
        <NavbarLink as={Link} to="/Contact" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav my-auto">
          Contact
        </NavbarLink>
        <NavbarLink as={Link} to="/Login" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav my-auto">
          Login
        </NavbarLink>
      </NavbarCollapse>
      </div>
    </Navbar>
  );
}
