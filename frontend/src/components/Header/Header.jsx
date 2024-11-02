import React from 'react'
import './Header.css'
import { Container, TomatoContainer } from '../../pages/customer_journey/plan_details/journey'
const Header = () => {
  return (
  
   <TomatoContainer>
     <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.  </p>
        <a href='#explore-menu'>View Menu</a>
      </div>
    </div>
   </TomatoContainer>
  )
}

export default Header
