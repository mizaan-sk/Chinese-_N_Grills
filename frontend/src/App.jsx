import React, { useContext, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
 ''
import Verified from './Verified/Verified'
import MyOrders from './pages/MyOrders/MyOrders'
import { Journey } from './pages/customer_journey/plan_details/journey'
import Registration from './pages/Registration/registration'
import { Forgot_Password } from './pages/forgot password/forgot-password'
import { StoreContext } from './context/StoreContext'
import Reset_password from './pages/Registration/reset_password/reset_password'
import Refer from './pages/Refer/Refer'




const App = () => {
  const {token} = useContext(StoreContext)
  
  const location = useLocation();

  // Navbar and footer should not be visible on these routes
  const showNavbarAndFooter = !['/check', '/login', '/register'].includes(location.pathname);

  return (
    <>
      {/* Removed the login popup logic as requested */}

      {showNavbarAndFooter && <Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Journey />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/verify' element={<Verified />} />
        <Route path='/myorders' element={<MyOrders />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/forgot-password' element={<Forgot_Password />} />
        <Route path='/reset-password/:id/:token' element={<Reset_password />} />
        <Route path='/refer' element={<Refer />} />
      </Routes>

      {showNavbarAndFooter && <Footer />}
    </>
  )
}

export default App
