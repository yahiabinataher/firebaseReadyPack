import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../context/AuthProvider';
import { myToast } from '../utils';
import { GoSun } from "react-icons/go";
import { HiMiniMoon } from "react-icons/hi2";




const Navbar = () => {
  const {authUser,logOut,darkMode,toggleDarkMode} = useContext(AuthContext )
  const navigate = useNavigate()

  const handleLogout = () => {
      logOut()
      .then((result) =>{
        myToast("Logout Successful","successli")
        navigate("/")
      })
  }
  return (
   <>
  <div className={`${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}>
  <div className='container mx-auto px-4'>
  <div className="navbar  p-0 m-0">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       <li><Link to="/">Home</Link></li>
      <li><Link to="/allcampaing">All Campaings</Link></li>
      <li><Link to="/addcampaing">Add New Campaing</Link></li>
      <li><Link to="mycampain">My Campaign</Link></li>
      <li><Link to="mydonate">My Donation</Link></li>
      <li><Link to="dashboard">Dashboard</Link></li>
      </ul>
    </div>
    <h4 className='font-bold text-2xl text-[#1DACCB]'>Clowd Funding</h4>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/allcampaing">All Campaings</Link></li>
      <li><Link to="/addcampaing">Add New Campaing</Link></li>
      <li><Link to="mycampain">My Campaign</Link></li>
      <li><Link to="mydonate">My Donation</Link></li>
      <li><Link to="dashboard">Dashboard</Link></li>
    </ul>
  </div>
  <div className="navbar-end gap-x-1">
    {authUser && authUser.email ? (<img className='w-8 h-8 rounded-full object-fill' src={authUser?.photoURL} alt="" />):(<FaUserCircle className='w-8 h-8'/>)}
    {authUser && authUser.email ? (<Link onClick={handleLogout} className="px-4 py-1 bg-[#1DACCB] text-white rounded-md font-medium">LogOut</Link>) : (<Link to="/login" className="px-4 py-1 bg-[#1DACCB] text-white rounded-md font-medium">Login</Link>)}
    {!authUser && <Link to="/signup" className="px-4 py-1 bg-[#1DACCB] text-white rounded-md font-medium">Registition</Link>}
  </div>
  <div className='ml-4'>
    <button onClick={toggleDarkMode}>
      {darkMode ? (<GoSun className='text-2xl cursor-pointer'/>) : ( <HiMiniMoon className='text-2xl cursor-pointer'/>)}
    </button>
  </div>
</div>
  </div>
  </div>
   </>
  )
}

export default Navbar