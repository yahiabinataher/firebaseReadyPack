import React, { useContext } from 'react'
import { FaPhone,FaFacebook,FaTwitter,FaYoutube  } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { AuthContext } from '../context/AuthProvider';

const Topbar = () => {
    const {darkMode} = useContext(AuthContext)
  return (
    <>
    <div className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}>
    <div className='container mx-auto px-4 '>
        <div className='flex items-center justify-between h-8 '>
            <div className='flex gap-x-4 divide-x-2 '>
                <div className='flex gax-2 items-center'>
                    <span><FaPhone/></span>
                    <span>+8801611636456</span>
                </div>
                <div className='flex gap-x-2 items-center pl-2'>
                    <span><IoIosMail/></span>
                    <span>yahiabinataher@gmail.com</span>
                </div>
                
            </div>
            <div>
                <div className='flex gap-x-3'>
                    <FaFacebook className='cursor-pointer text-blue-500'/>
                    <FaTwitter className='cursor-pointer text-sky-600'/>
                    <FaYoutube className='cursor-pointer text-red-600'/>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Topbar