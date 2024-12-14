import React, { useContext } from 'react'
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../context/AuthProvider';
import { Link } from 'react-router-dom';

const Profile = () => {
    const {authUser} = useContext(AuthContext)
   
  return (
    <div
        className=" bg-white shadow-xl rounded-lg text-gray-900">
        <div className="rounded-t-lg h-32 overflow-hidden">
            <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain'/>
        </div>
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
           {authUser?.photoURL ? ( <img className="object-cover object-center h-32" src={authUser.photoURL} alt='Woman looking front'/>) : (<img className="object-cover object-center h-32" src='https://st.depositphotos.com/1537427/3571/v/450/depositphotos_35717211-stock-illustration-vector-user-icon.jpg' alt='Woman looking front'/>)}
        </div>
        <div className="text-center mt-2">
            <h2 className="font-semibold">{authUser?.displayName ? authUser.displayName : "No Name"}</h2>
            <p className="text-gray-500">{authUser?.email ? authUser.email : "N/A"}</p>
            
        </div>
        <div className="p-4 border-t mx-8 mt-2">
            <Link to="/upprofile" className="w-1/2 block mx-auto text-center rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Update Profile</Link>
        </div>
    </div>
  )
}

export default Profile