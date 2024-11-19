import React from 'react'
import { Container } from '../../pages/customer_journey/plan_details/journey'
import cake from "../../assets/iconic-menu/cake.png"
import noodles from "../../assets/iconic-menu/noodles.png"
import pasta from "../../assets/iconic-menu/pasta.png"
import pure_veg from "../../assets/iconic-menu/pure-veg.png"
import sandwich from "../../assets/iconic-menu/sandwich.png"
import non_veg from "../../assets/iconic-menu/non-veg.png"
import mocktails from "../../assets/iconic-menu/mocktails.png"
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const Iconic_Menu = () => {
 var settings = {
    dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 750,
        arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const Menuitems = [
    {
      id:1,
      image:noodles,
      title:"Noodles",
    },
    {
      id:2,
      image:pure_veg,
      title:"Veg Manchurian",
    },
    {
      id:3,
      image:cake,
      title:"Cake",
    },
    {
      id:4,
      image:pasta,
      title:"Pasta",
    },
    {
      id:5,
      image:sandwich,
      title:"Sandwich",
    },
    {
      id:5,
      image:non_veg,
      title:"Non Veg",
    },
    {
      id:5,
      image:mocktails,
      title:"Mocktails",
    }
    
  ]
  return (
 <>
<Container>
   <div className="iconic-menu">
   <h2 className='text-left iconic-menu-text iconic-menu-font-700'>Our Iconic Menu</h2>
   <div className="slider-container iconic-cards    ">
      <Slider {...settings}>
    
    {
Menuitems.map((item,index)=>{
 return(
  <div className="iconic-card text-center " key = {index + 1}>
  <img src={item.image} alt="" className='w-75 mx-auto' />
  <p className='iconic-card-text text-font-500'>{item.title}</p>
 <NavLink to = "/menu">
 <button className='iconic-card-btn' >Order Now</button>
 </NavLink>
</div>
 )
})
    }
  
      </Slider>
    </div>
   </div>

</Container>
 </>
  )
}

export default Iconic_Menu
