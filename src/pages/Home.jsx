import React, { useContext } from 'react'

import { AuthContext } from '../context/AuthProvider'
import Banner from '../component/Banner'



const Home = () => {
  const {darkMode} = useContext(AuthContext)
  return (
   <div className={`${
    darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
  }`}>
     <div className='container mx-auto '>
      <Banner/>
    </div>
   </div>
  )
}

export default Home