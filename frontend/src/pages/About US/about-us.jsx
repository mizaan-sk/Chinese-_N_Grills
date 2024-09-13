import React from 'react'
import { Navbar_new } from '../../components/navbar.jsx/navbar'
import { Bg_banner } from '../../components/bg_banner/bg_banner'
import { Flex_comp_one } from '../../components/flex_comp_one/flex_comp_one'

export const About_Us = () => {
  return (
    <div>
     <Navbar_new/>
     <Bg_banner name = {"About US"}/>
     <Flex_comp_one/>
    </div>
  )
}

