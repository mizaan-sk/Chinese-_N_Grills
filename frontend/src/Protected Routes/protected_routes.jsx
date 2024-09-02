import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import { Navigate, Outlet } from 'react-router-dom'

const Protected_routes = () => {
    const {token} = useContext(StoreContext)
  return !token ? <Outlet/> : <Navigate to = "/register"/>
}

export default Protected_routes
