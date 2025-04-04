import React from 'react'
import { Navbar_new } from '../../components/navbar.jsx/navbar'
import { Bg_banner } from '../../components/bg_banner/bg_banner'
import { Flex_comp_one } from '../../components/flex_comp_one/flex_comp_one'
import Choose_us from '../../components/Choose_us/Choose_us'
import Exception_Service from '../../components/ExceptionService/Exception_Service'
import ReservationForm from '../../components/ReservationForm/ReservationForm'
import Customer_Experience from '../../components/Customer_Experience/Customer_Experience'
import Caroussel from '../../components/Caroussel/Caroussel'
import { Footer_new } from '../../components/footer_new/footer_new'
import Marquee from '../../components/marquee-sect/marquee-sect'
import Iconic_Menu from '../../components/iconic-menu/iconic-menu'
import Navbar_Home from '../../components_2/Navbar_Home/Navbar_Home'


export const About_Us = () => {
  return (
    <div>
      <Navbar_Home/>
     <Bg_banner name = {"About Us"}/>
     <Flex_comp_one/>
     <Choose_us/>
     <Exception_Service/>
     <ReservationForm/>
     <Customer_Experience/>
     <Caroussel/>
     <Footer_new/>
    </div>
  )
}

