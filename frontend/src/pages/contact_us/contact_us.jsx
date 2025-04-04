import React from 'react'
import style from "./contact_us.module.css"
import { Navbar_new } from '../../components/navbar.jsx/navbar'
import { Bg_banner } from '../../components/bg_banner/bg_banner'
import { Contact_us_cards } from '../../components/contact_us_cards/contact_us_cards'
import { Footer_new } from '../../components/footer_new/footer_new'
import { Contact_us_form } from '../../components/contact_us_form/contact_us_form'
import mobile_icon from "../../assets/contact_us/mb-check.png"
import direction_icon from "../../assets/contact_us/direction_icon.png"
import clock_icon from "../../assets/contact_us/clock_icon.png"
import Navbar_Home from '../../components_2/Navbar_Home/Navbar_Home'
export const Contact_us = () => {  // const data = [
const data_value=        
[ {
            id: 1,
            text_one: "Phone Us 24/7",
            text_two: "9372449572",
            text_three: "999999999",
            img : mobile_icon
        },
        {
            id: 2,
            text_one: "Get Direction",
            text_two: "Shop No 7/8, Gajanan Plaza, Old Agra Road, Vasind, Thane - 421601",
            img : direction_icon
        },
        {
            id: 3,
            text_one: "Opening Hours",
            text_two: "Everyday 8.00 AM - 12.00 AM\nSaturday-Sunday : 8.00 AM - 2.00 AM",
            img : clock_icon
        },
        
    ]
  return (
<>
<Navbar_Home/>
<Bg_banner name = {"Contact US"}/>
<div style={{background:"#f7f7f7"}}>
<Contact_us_form/>
<Contact_us_cards data_value = {data_value}/>
</div>
<Footer_new/>
</>
  )
}

