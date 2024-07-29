import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

export default function Nav1() {
  return (
    <Navbar fluid rounded className="bg-nav">
      <NavbarBrand as={Link} to="/">
      <Link  to="/" className="flex items-center mr-5 space-x-2 rtl:space-x-reverse">
            <img src="./src/assets/logo.jpeg" className="animate h-19 rounded-r-lg logo-img md:m-0" alt="Logo" />
          </Link>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} to="/" active className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav"> 
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/about" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav">
          About
        </NavbarLink>
        <NavbarLink as={Link} to="/Curriculum" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav">
        Curriculum
        </NavbarLink>
        <NavbarLink as={Link} to="/Notices" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav">
          Notices
        </NavbarLink>
        <NavbarLink as={Link} to="/Admission" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav">
          Admission
        </NavbarLink>
        <NavbarLink as={Link} to="/Contact" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav">
          Contact
        </NavbarLink>
        <NavbarLink as={Link} to="/Login" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav">
          Login
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
