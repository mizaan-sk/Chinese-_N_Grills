import { Link } from 'react-router-dom';
import { IoMdArrowDropdown } from "react-icons/io";
import React from 'react'
import { Container } from "../../pages/customer_journey/plan_details/journey";

import style from '../../components_2/Navbar_Home/Navbar_Home.module.css'
const Navbar_Home = () => {
  return (
    <>
    <Container>
      {/* Navbar Starts */}
      <div className={style.navbar_main_design_section}>
        {/* logo Starts */}
        <div className={style.navbar_logo}>
          <p>Chinese N Grills</p>
        </div>
        {/* Logo Ends */}
        {/* OrderList Starts */}
        <div className={style.navbar_list}>
        <ul>
    <li><Link to="/">Home</Link> </li>
    <li> <Link to="/about-us">About</Link></li>
    <li><Link to="/faq">Faq</Link></li>
    <li><Link to="/menu">Menu</Link></li>
    <li className={`${style.dropdown} dropdown`}>Pages <i><IoMdArrowDropdown /></i></li> 
    <li><Link to="/contact-us">Contact</Link></li>
  </ul>
        </div>
        {/* OrderList Ends */}

        {/* Navbar Login Button Starts */}

   <a className={style.Login_Button}><Link to="/register">Login</Link></a>
        {/* Navbar Login Button Ends */}

      </div>
      {/* Navbar Ends */}
</Container>
    </>
  )
}

export default Navbar_Home