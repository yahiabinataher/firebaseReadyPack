import React from "react";
import { FaPhone,FaFacebook,FaTwitter,FaYoutube  } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <div className="bg-gray-700 text-white py-8 px-4">
        <div className="container mx-auto  ">
           <div className="grid grid-cols-3 md:grid-cols-5 items-start px-4 sm:px-0">
           <div className="flex flex-col gap-y-2 col-span-1 md:col-span-3">
           <h4 className='font-bold text-2xl text-[#1DACCB]'>Clowd Funding</h4>
                <h4 className="text-[8px] sm:text-xs w-full md:w-2/3 ">The clowd funding web application is a simple and easy-to-use platform that helps people  those in need across Bangladesh</h4>
            </div>
            <div className="flex flex-col col-span-1 ">
                <h4 className="text-md font-bold">Contact Us</h4>
                <div className='flex flex-col gap-y-2 pt-4'>
                <div className='flex gap-x-2 items-center'>
                    <span><FaLocationDot className="text-xs" /></span>
                    <span className="text-xs">Mirpur,Dhaka</span>
                </div>
                <div className='flex gap-x-2 items-center'>
                    <span className="text-xs"><FaPhone/></span>
                    <span  className="text-xs">+8801611636456</span>
                </div>
                <div className='flex gap-x-2 items-center '>
                    <span  className="text-xs"><IoIosMail/></span>
                    <span  className="text-xs">yahiabinataher@gmail.com</span>
                </div>
                
            </div>
                
            </div>
            <div className="flex flex-col col-span-1">
                <h4 className="text-md font-bold">Social Meadia</h4>
                <div className='flex gap-x-3 pt-4'>
                    <FaFacebook className='cursor-pointer text-blue-500'/>
                    <FaTwitter className='cursor-pointer text-sky-600'/>
                    <FaYoutube className='cursor-pointer text-red-600'/>
                </div>
            </div>
           </div>
        </div>
    </div>
     <div className="text-center  bg-slate-200 py-4">
     <p className="text-xs sm:text-lg">© 2024 Clowd Funding Simple Website. All rights reserved
     </p>
    </div>
    </>
  );
};

export default Footer;
