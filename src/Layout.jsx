import React from 'react'
import Navbar from './component/Navbar'
import Topbar from './component/Topbar'

import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'

const Layout = () => {
  return (
    <>
    <Topbar/>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout