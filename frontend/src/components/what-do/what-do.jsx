import React from 'react'
import { Container } from '../../pages/customer_journey/plan_details/journey'
import first_text_img from "../../assets/what-do/first-text-img.png"
import second_text_img from "../../assets/what-do/second-text-img.png"
import third_text_img from "../../assets/what-do/third-text-img.png"
const What_do = () => {
  return (
   <>
   <Container>
    <div className="text-content text-center">
        <p><span className='poppins-font-text text-dark'>Great</span><img src={first_text_img} alt=""  className = "what-we-do-img"/><span className='londrina-font-text text-dark'>Taste Of Chinese</span></p>
        <p ><span className='londrina-font-text text-dark text-dark'> @Every Single Bite</span> <span><img src={second_text_img} alt=""  className = "what-we-do-img"/></span><span className='londrina-font-text text-dark text-dark'>Time</span><span> <img src={third_text_img} alt="" className = "what-we-do-img" /></span></p>
        <p className='londrina-font-text text-dark text-dark'>To Explore Taste</p>
    </div>
   </Container>
   </>
  )
}

export default What_do
