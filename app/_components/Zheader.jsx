'use client'
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import logo from '@/public/Untitled design.png'

function Header() {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
   

<nav class="relative border-teal bg-gradient-to-b from-purple to-niga shadow-sm shadow-second dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto py-2 pr-2">
    {/* side menu */}
   <div className='md:hidden ' >
    <input type="checkbox" onClick={() => setOpen(!open)} id="checkbox" />
      <label for="checkbox" class="toggle ml-2" >
          <div class="bars" id="bar1"></div>
          <div class="bars" id="bar2"></div>
          <div class="bars" id="bar3"></div>
      </label>

      <div         className={` mt-4 p-4 w-full flex gap-4 bg-gradient-to-b from-purple to-back h-auto z-50 flex-col    ${ 
          open ? " absolute  " : " hidden  "
        } `}>


     
        <a href="#" class="pb-1 font-medium text-xl text-white border-b-2 border-gae hover:text-gae rounded md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sportawy </a>
        <a href="#" class="pb-1 font-medium text-xl text-white border-b-2 border-gae hover:text-gae  rounded  " aria-current="page">الرئيسية</a>
        <a href="#" class="pb-1 font-medium text-xl text-white border-b-2 border-gae hover:text-gae  rounded  " aria-current="page"> من نحن</a>
        <a href="#" class="pb-1 font-medium text-xl text-white border-b-2 border-gae hover:text-gae  rounded  " aria-current="page">سياسة الخصوصية</a>

        


        <div className='flex gap-2'>
        <a
        href="#!"
        type="button"
        class="rounded-md bg-niga bg-opacity-45 bg-transparent p-3 font-medium uppercase leading-normal transition duration-300 ease-in-out  focus:outline-none focus:ring-0 text-white hover:bg-second"
        data-twe-ripple-init>
        <span class="[&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 320 512">
            <path
              d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>
        </span>
      </a>

      <a
        href="#!"
        type="button"
        class="rounded-md bg-niga bg-opacity-45 p-3 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-second focus:outline-none focus:ring-0 text-white dark:hover:bg-secondary-900"
        data-twe-ripple-init>
        <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 512 512">
            <path
              d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </span>
      </a>

     

      <a
        href="#!"
        type="button"
        class="rounded-md bg-niga bg-opacity-45 bg-transparent p-3 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-second focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
        data-twe-ripple-init>
        <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512">
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </span>
      </a>
        </div>

      
      

     </div>
   </div>


        {/*left side*/}
        <div className='flex '>
        <div class=" mb- md:ml-32 ml-12 po:hidden md:flex justify-center  space-x-2">
      <a
        href="#!"
        type="button"
        class="rounded-md bg-niga bg-opacity-45 bg-transparent p-3 font-medium uppercase leading-normal transition duration-300 ease-in-out  focus:outline-none focus:ring-0 text-white hover:bg-second"
        data-twe-ripple-init>
        <span class="[&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 320 512">
            <path
              d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
          </svg>
        </span>
      </a>

      <a
        href="#!"
        type="button"
        class="rounded-md bg-niga bg-opacity-45 p-3 font-medium uppercase leading-normal transition duration-150 ease-in-out hover:bg-second focus:outline-none focus:ring-0 text-white dark:hover:bg-secondary-900"
        data-twe-ripple-init>
        <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 512 512">
            <path
              d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </span>
      </a>

     

      <a
        href="#!"
        type="button"
        class="rounded-md bg-niga bg-opacity-45 bg-transparent p-3 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-second focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
        data-twe-ripple-init>
        <span class="mx-auto [&>svg]:h-5 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 448 512">
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </span>
      </a>
    </div>

    <div class=" mt-0 ml-2 md:ml-10  w-full po:hidden md:block pc:w-auto" id="navbar-solid-bg">
    
    <ul class="flex flex-row tap:text-base font-bold md:text-lg mt- rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
    <li>
        <a href="#" class="block py-2 px-3  text-white rounded hover:text-teal md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sportawy </a>
      </li>

      <li>
        <a href="#" class="block py-2 px-3  text-white hover:text-teal  rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">الرئيسية</a>

      </li>
    </ul>
  </div>
</div>
{/* right side*/}
    <a href="" class=" flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://i.ibb.co/HNxd2CC/CD7-C532-F-CD43-4-CD6-B8-C1-3-F3-EFE6-B9520.png" class="h-14  mr-12 md:mr-40 " alt=" Logo" />
        {/*<img src='https://i.ibb.co/StHP6sM/2316-B015-46-D6-44-E8-A030-022-AD938-CE2-A.png' alt='' class="self-center w-36 h-16"/>*/}
    </a>
    {/*
    <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  */}
    
  </div>
</nav>

  )
}

export default Header
