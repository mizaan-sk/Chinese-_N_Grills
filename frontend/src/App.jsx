import React, { useContext } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Verified from './Verified/Verified';
import MyOrders from './pages/MyOrders/MyOrders';
import { Journey } from './pages/customer_journey/plan_details/journey';
import Registration from './pages/Registration/registration';
import { Forgot_Password } from './pages/forgot password/forgot-password';
import { StoreContext } from './context/StoreContext';
import Reset_password from './pages/Registration/reset_password/reset_password';
import Refer from './pages/Refer/Refer';
import Protected_routes from './Protected Routes/protected_routes';
import { About_Us } from './pages/About US/about-us';
import { Contact_us } from './pages/contact_us/contact_us';
import { Faq } from './pages/Faq/faq';
import Menu from './pages/Menu/Menu';
import { Navbar_new } from './components/navbar.jsx/navbar';
import New_Home from './pages/New_Home/New_Home';
import { Payment } from './pages/customer_journey/payment/payment';
import Navbar_Home from './components_2/Navbar_Home/Navbar_Home';
import { Footer_new } from './components/footer_new/footer_new';

const App = () => {

  const location = useLocation();

  const isLoggedin = localStorage.getItem('isLoggedIn') 


  const showNavbarAndFooter = !['/check', '/login', '/register',"/about-us","/contact-us","/faq"].includes(location.pathname);

  return (
    <>
      {/* {showNavbarAndFooter && <Navbar_new />} */}
      {showNavbarAndFooter && <Navbar_Home />} 

      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<New_Home />} />
        <Route path='/cart' element={<Journey />} />
        <Route path='/order' element={<PlaceOrder />} />
        <Route path='/verify' element={<Verified />} />
        <Route path='/about-us' element={<About_Us />} />
        <Route path='/contact-us' element={<Contact_us />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/newhome' element={<Faq />} />
        <Route path='/payment' element={<Payment/>} />

      
        {!isLoggedin && (
       <>
          <Route path='/register' element={<Registration />} />
        
          </>
        )}

          <Route path='/forgot-password' element={<Forgot_Password />} />
        <Route element={<Protected_routes />}>
          <Route path='/myorders' element={<MyOrders />} />
          <Route path='/refer' element={<Refer />} />
          <Route path='/register' element={<Navigate to='/' />} />
        </Route>
        {/* Reset Password Route */}
        <Route path='/reset-password/:id/:token' element={<Reset_password />} />

       
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>

      {showNavbarAndFooter && <Footer_new/>
      }
    </>
  );
};

export default App;
