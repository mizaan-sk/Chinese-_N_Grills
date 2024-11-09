import React from 'react'
import Navbar_Home from '../Navbar_Home/Navbar_Home'
import style from '../Final_Home_Page/Final_Home_Page.module.css'
import Content_Image from '../../pages_2/Home_Pages_Components/Content_Image'
import Quality_Services from '../../pages_2/Home_Pages_Components/Quality_Services'
const Final_Home_Page = () => {
  return (
    <>
    <div className={style.bg_main_section}>
    <Navbar_Home/>
    <Content_Image/>
    </div>
    <Quality_Services/>
    </>
  )
}

export default Final_Home_Page