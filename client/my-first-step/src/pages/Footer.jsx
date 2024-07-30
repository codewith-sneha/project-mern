import React from 'react'
import './style.css';
import { FaInstagram } from "react-icons/fa6";
import { ImYoutube2 } from "react-icons/im";

function Footer() {
  return (
    <div>
    <footer class="footer dark:bg-gray-900 footer-shadow">
        <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
            <div class="md:flex md:justify-between">
              <div class="mb-6 md:mb-0">
                  <a href="/" class="flex items-center">
                      <img src="./src/assets/logo.jpeg" class=" rounded-2xl h-14 me-3" alt="Logo" />
                      <span class="text-gray-800 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">My-First-Step</span>
                  </a>
              </div>
              <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2 ">
                 
                  <div>
                      <h2 class="footer-links mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                      <ul class="hover:text-white text-black dark:text-gray-400 font-medium">
                         
                          <li>
                              <a href="#" class="hover:text-white hover:underline text-3xl text-gray-800">
                              <FaInstagram/>
                              </a>
                          </li>
                          <li>
                              <a href="#" class="hover:underline hover:text-white text-6xl text-gray-800">
                              <ImYoutube2/>
                              </a>
                          </li>
                      </ul>
                  </div>
                  <div>
                      <h2 class="footer-links mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                      <ul class="text-gray-500 dark:text-gray-400 font-medium">
                          <li class="mb-4">
                              <a href="#" class="hover:underline text-gray-800">Privacy Policy</a>
                          </li>
                          <li>
                              <a href="#" class="hover:underline text-gray-800">Terms &amp; Conditions</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          <hr class="my-6 border-gray-800 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
              <span class="text-sm text-black sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">My First Step™</a>. All Rights Reserved.
              </span>
          </div>
        </div>
    </footer>

    </div>
  )
}



// function Footer() {
//   return (
//     <div>
//         <footer class=" footer  rounded-lg shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 dark:bg-gray-800 antialiased">
//   <p class="mb-4 text-base text-center text-black dark:text-black sm:mb-0">
//       &copy; 2024 <a href="/" class="hover:underline" target="_blank">myfirststep.com</a>. All rights reserved.
//   </p>
//   <div class="flex justify-center items-center space-x-1">
//     <a href="#" data-tooltip-target="tooltip-facebook" class="inline-flex justify-center p-2 text-black rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
//         <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
//             <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
//         </svg>
//         <span class="sr-only">Facebook</span>
//     </a>
//     <div id="tooltip-facebook" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
//         Like us on Facebook
//         <div class="tooltip-arrow" data-popper-arrow></div>
//     </div>
   
// </div>
// </footer>
//     </div>
//   )
// }

export default Footer