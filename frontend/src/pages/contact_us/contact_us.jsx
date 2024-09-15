import React from 'react'
import style from "./contact_us.module.css"
import { Navbar_new } from '../../components/navbar.jsx/navbar'
import { Bg_banner } from '../../components/bg_banner/bg_banner'
import { Contact_us_cards } from '../../components/contact_us_cards/contact_us_cards'
import { Footer_new } from '../../components/footer_new/footer_new'
import { Contact_us_form } from '../../components/contact_us_form/contact_us_form'
export const Contact_us = () => {
  return (
<>
<Navbar_new/>
<Bg_banner name = {"Contact US"}/>
<div style={{background:"#f7f7f7"}}>
<Contact_us_form/>
<Contact_us_cards/>
</div>
<Footer_new/>
</>
  )
}

