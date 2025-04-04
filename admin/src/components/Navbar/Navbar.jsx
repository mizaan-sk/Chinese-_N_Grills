import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
  return (
<div className='Container'>
<div className='navbar'>
      <p className='nav-logo-text'>Chinese N Grills <br /> <span className='nav-logo-span'>Admin Panel</span></p>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
</div>
  )
}

export default Navbar