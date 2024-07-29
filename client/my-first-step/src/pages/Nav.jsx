import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
function Nav() {
  const a = {
    backgroundColor: "#AD88C6",
    fontWeight: "bold",
    fontSize: "17px",
    color: "white"
  }
  return (
    <div className='sticky-nav'>


      <nav className="shadow-md shadow-black/5 dark:border-gray-700 bg-nav " style={{ height: "70px", }}>
        <div className="max-w-screen-xl flex flex-wrap justify-between items-center " style={{ height: "100%" }}>
          <Link  to="/" className="flex items-center mr-5 space-x-2 rtl:space-x-reverse">
            <img src="./src/assets/logo.jpeg" className="animate h-19 rounded-r-lg logo-img md:m-0" alt="Logo" />

          </Link>
          <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-1 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul className="mediali flex flex-col font-medium mt-2 rounded-lg bg-gray-50 md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700 text-base">
              <li>
                <Link to="/" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black bg-blue-700 rounded md:bg-transparent md:text-white-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent md:hover:text-white btnnav" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/About" className="btnnav block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black rounded  md:hover:bg-transparent md:border-0 md:hover:text-white dark:text-white md:dark:hover:text-white-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ">About</Link>
              </li>
              <li>
                <Link to="/Curriculum" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white dark:text-white md:dark:hover:text-white-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent btnnav">Curriculum</Link>
              </li>
              <li>
                <Link to="/Notices" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black rounded  md:hover:bg-transparent md:border-0 md:hover:text-white dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent btnnav">Notices</Link>
              </li>

              <li>
              <Link to="/Admission" className="block py-2 px-3 md:py-0 md:px-1 md:p-0 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent btnnav">Admission</Link>
              </li>

              <li>
                <Link to="/Contact" className="block py-2 px-3 md:p-0 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent btnnav">Contact</Link>
              </li>
              <li>
              <Link to="/Login" className="block py-2 px-3 md:p-0 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent btnnav">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav