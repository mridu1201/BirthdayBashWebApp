import React from 'react';
import AdminProfile from './AdminProfile';
import { Link, useLocation } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaBirthdayCake } from "react-icons/fa";
import { SiFeedly } from "react-icons/si";   
import { BiSolidParty } from "react-icons/bi";
import { MdMenuBook } from "react-icons/md";
import { Dropdown, Menu, Button } from 'antd';
import { TbCircleLetterA } from "react-icons/tb";

const menu = (
   <Menu>
     <Menu.Item key="3">Sign Out</Menu.Item>
   </Menu>
 );

 const MyDropdown = () => {
   return (
     <Dropdown overlay={menu} width={100}>
       <a><TbCircleLetterA className='rounded-full' style={{fontSize:'40px'}}/></a>
     </Dropdown>
   );
 }
function Sidenav() {

   const location = useLocation();    
   return (
      <div className="relative">
         <>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 shadow-md">
               <div className="px-3 py-3 lg:px-5 lg:pl-3">
                  <div className="flex items-center justify-between">
                     <div className="flex items-center justify-start rtl:justify-end">
                           <MyDropdown/>
                        <a href="https://flowbite.com" className="flex ms-2 md:me-24">
                           <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                              🎂Birthday Bash
                           </span>
                        </a>
                     </div>
                  </div>
               </div>
            </nav>
            <aside
               id="logo-sidebar"
               className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 shadow-lg"
               aria-label="Sidebar"
            >
               <div className="h-full px-3 pb-4 overflow-y-auto" style={{ overflowY: 'hidden' }}>
                  <ul className="space-y-2 font-medium mb-10">
                     <li className={`mb-0 ${location.pathname ==='/dashboard' ? 'text-black bg-gray-100 font-bold':''}hover:bg-gray-100 `}>
                        <Link
                           to='/dashboard'
                           className="flex items-center p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition duration-200 ease-in-out group"
                        >
                           <span className="ml-2">
                              <div className='flex flex-row'>
                              <MdDashboard className='mt-1 mr-3' style={{fontSize:'25px'}}/>
                              <div className='mt-1 text-lg'>
                              Dashboard
                              </div>
                              </div></span>
                        </Link>
                     </li>
                     <li className={`mb-0 ${location.pathname ==='/users' ? 'bg-gray-100 text-gray-900 font-bold':''}hover:bg-gray-100`}>
                        <Link to='/users'
                           className="flex items-center p-2 rounded-lg  text-gray-500 hover:bg-gray-100 group"
                        >
                           <span className="ml-2">
                           <div className='flex flex-row'>
                              <FaUser className='mt-1 mr-3' style={{fontSize:'25px'}}/>
                              <div className='mt-1 text-lg'>
                              Users
                              </div>
                              </div>
                           </span>
                        </Link>
                     </li>
                     <li className={`mb-0 ${location.pathname ==='/birthdayrequests' ? 'bg-gray-100 text-gray-900 font-bold':''}hover:bg-gray-100`}>
                        <Link
                           to='/birthdayrequests'
                           className="flex items-center p-2 rounded-lg  text-gray-500 hover:bg-gray-100 group"
                        >
                           <span className="ml-2">
                           <div className='flex flex-row'>
                              <FaBirthdayCake className='mt-1 mr-3' style={{fontSize:'25px'}}/>
                              <div className='mt-1 text-lg'>
                              Birthday Requests
                              </div>
                              </div>
                           </span>
                        </Link>
                     </li>
                     <li className={`mb-0 ${location.pathname ==='/feedbacks' ? 'bg-gray-100 text-gray-900 font-bold':''}hover:bg-gray-100`}>
                        <Link
                           to='/feedbacks'
                           className="flex items-center p-2 rounded-lg  text-gray-500 hover:bg-gray-100 group mb-0"

                        >
                           <span className="ml-2">
                           <div className='flex flex-row'>
                              <SiFeedly className='mt-1 mr-3' style={{fontSize:'25px'}}/>
                              <div className='mt-1 text-lg'>
                              Feedbacks
                              </div>
                              </div>
                           </span>
                        </Link>
                     </li>
                     <li className={`mb-0 ${location.pathname ==='/themes' ? 'bg-gray-100 text-gray-900 font-bold':''}hover:bg-gray-100`}>
                        <Link
                           to='/themes'
                           className="flex items-center text-gray-500 p-2 rounded-lg hover:bg-gray-100 group mb-0"
                        >
                           <span className="ml-2">
                           <div className='flex flex-row'>
                              <BiSolidParty className='mt-1 mr-3' style={{fontSize:'25px'}}/>
                              <div className='mt-1 text-lg'>
                              Party Themes
                              </div>
                              </div>
                           </span>
                        </Link>
                     </li>
                     <li className={`mb-0 ${location.pathname ==='/foodmenu' ? 'bg-gray-100 text-gray-900 font-bold':''}hover:bg-gray-100`}>
                        <Link
                           to='/foodmenu'
                           className="flex items-center text-gray-500 p-2 rounded-lg hover:bg-gray-100 group mb-0"
                        >
                           <span className="ml-2">
                           <div className='flex flex-row'>
                              <MdMenuBook className='mt-1 mr-3' style={{fontSize:'25px'}}/>
                              <div className='mt-1 text-lg'>
                              Food Menu
                              </div>
                              </div>
                           </span>
                        </Link>
                     </li>
                     <li ><AdminProfile /></li>
                  </ul>
               </div>
            </aside>
         </>
      </div>
   );
}

export default Sidenav;
