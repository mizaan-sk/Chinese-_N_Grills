import React from 'react'
import { Container } from '../../pages/customer_journey/plan_details/journey'
import first_text_img from "../../assets/what-do/first-text-img.png"
import second_text_img from "../../assets/what-do/second-text-img.png"
import third_text_img from "../../assets/what-do/third-text-img.png"
import { Link } from 'react-router-dom'
const What_do = () => {
  return (
   <>
   <Container>
    <div className="text-content text-center">
        <p className='m-20'><span className='poppins-font-text text-dark'>Great</span><img src={first_text_img} alt=""  className = "what-we-do-img"/><span className='londrina-font-text text-dark'>Taste Of Chinese</span></p>

        <p className='m-20' ><span className='londrina-font-text text-dark text-dark'> @Every Single Bite</span> <span><img src={second_text_img} alt=""  className = "what-we-do-img"/></span><span className='londrina-font-text text-dark text-dark'>Time</span><span> <img src={third_text_img} alt="" className = "what-we-do-img" /></span></p>

        <p className='londrina-font-text text-dark text-dark m-20'>To Explore Taste</p>
   <Link to={'/menu'} target='_top'> <span className='What_btn' >Explore Menu</span></Link>
    </div>
   </Container>
   </>
  )
}

export default What_do
