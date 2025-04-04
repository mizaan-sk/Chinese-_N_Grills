import React from 'react'
import { Navbar_new } from '../../components/navbar.jsx/navbar'
import { Footer_new } from '../../components/footer_new/footer_new'
import { Container } from '../customer_journey/plan_details/journey'
import { Accordion } from '../../components/Accordion/accordion'
import { Bg_banner} from '../../components/bg_banner/bg_banner'
 import { FaPlus } from "react-icons/fa";
import { Contact_us_cards } from '../../components/contact_us_cards/contact_us_cards'
import variety_dishes from "../../assets/faq/variety_dishes.png"
import best_quality_food from "../../assets/faq/best_quality_food.png"
import fast_food_delivery from "../../assets/faq/fast_food_delivery.jpg"
import Navbar_Home from '../../components_2/Navbar_Home/Navbar_Home'
export const Faq = () => {
  const data_value = [
    {
      id: 1,
text:"Best Quality Food",
img:best_quality_food
    },
    {
      id: 2,
text:"fast food Delivery",
img:fast_food_delivery
    },
    {
      id: 3,
text:"Variety Of Dishes",
img:variety_dishes
    }
  ]
  return (
    <>
      <Navbar_Home/>
      <Bg_banner name = {"FAQ"}/>
      <Accordion/>
      <Contact_us_cards data_value = {data_value} opt = {true}/>
    <Footer_new/>
    </>
  )
}

