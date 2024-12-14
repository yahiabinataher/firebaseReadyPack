import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../component/Loading'


const PrivateRoute = ({children}) => {
    const{authUser,loading} = useContext(AuthContext)
    const location = useLocation()
    
    if(loading){
      return <Loading/>
    }
    if(authUser){
        return children
    }

  return <Navigate state={location.pathname} to="/login"/> 
}

export default PrivateRoute