import React from 'react'
import Iconic_Menu from '../../components/iconic-menu/iconic-menu'
import Marquee from '../../components/marquee-sect/marquee-sect'
import What_do from '../../components/what-do/what-do'
import New_Home_Banner_Section from '../../pages_2/New_Home_Top_Bg_Section/New_Home_Banner_Section'
import Happy_Sunday_Section from '../../pages_2/Happy_Sunday_Section/Happy_Sunday_Section'
import Caroussel from '../../components/Caroussel/Caroussel'
import ReservationForm from '../../components/ReservationForm/ReservationForm'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Refer from '../../pages/Refer/Refer'
const New_Home = () => {
  
  return (
  <>
       <ToastContainer />
  <New_Home_Banner_Section/>
  <What_do/>
  <Marquee/>
  <Iconic_Menu/>
  <ReservationForm/>
  <Happy_Sunday_Section/>
  <Refer/>
  <Caroussel/>

  </>
  )
}

export default New_Home
