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
export const Contact_us = () => {  // const data = [
const data_value=        
[ {
            id: 1,
            text_one: "Phone Us 24/7",
            text_two: "123-5879406",
            text_three: "123-5879406",
            img : mobile_icon
        },
        {
            id: 2,
            text_one: "Get Direction",
            text_two: "Sector:7, Road:27, House:18, Uttara, Dhaka, 1230 Dhaka.",
            img : direction_icon
        },
        {
            id: 3,
            text_one: "Opening Hours",
            text_two: "Everyday 11.00 PM - 11.00 AM",
            img : clock_icon
        },
        
    ]
  return (
<>
<Navbar_new/>
<Bg_banner name = {"Contact US"}/>
<div style={{background:"#f7f7f7"}}>
<Contact_us_form/>
<Contact_us_cards data_value = {data_value}/>
</div>
<Footer_new/>
</>
  )
}

