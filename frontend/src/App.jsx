import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verified from './Verified/Verified'
import MyOrders from './pages/MyOrders/MyOrders'
import { Journey } from './pages/customer_journey/plan_details/journey'
import Registration from './pages/Registration/registration'




const App = () => {
  const [showLogin, setshowLogin] = useState(false)
  const location = useLocation();

  const showNavbarAndFooter = !['/check', '/login'].includes(location.pathname);
  
  return (
    <>
      {showLogin ? <LoginPopup setshowLogin={setshowLogin} /> : <></>}

      {showNavbarAndFooter && <Navbar setshowLogin={setshowLogin} />}

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/cart' element={<Cart />} /> */}
        <Route path='/cart' element={<Journey />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/verify' element={<Verified />} />
        <Route path='/myorders' element={<MyOrders />} />
        <Route path='/check' element={<Registration />} />
      </Routes>

      {showNavbarAndFooter && <Footer />}
    </>
  )
}

export default App
