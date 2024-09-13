
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

  const Protected_routes = () => {
    const isloggedin=  localStorage.getItem("isLoggedIn")
   
    
    return isloggedin ===  "true" ? <Outlet/> : <Navigate to ="register"/>
  }

export default Protected_routes
