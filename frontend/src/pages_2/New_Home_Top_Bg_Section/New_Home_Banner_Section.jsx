import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useMediaQuery } from 'react-responsive'; 
import "slick-carousel/slick/slick-theme.css";
import style from './New_Home_Banner_Section.module.css'
import banner1 from '../../assets/bg_banner/hero_image_bg_home.png'
import banner2 from '../../assets/bg_banner/hero_image_bg_2.png'
import banner3 from '../../assets/bg_banner/banner_image_cake.png'
import mobile1 from '../../assets/bg_banner/mobile_view_image.png'
import mobile2 from '../../assets/bg_banner/banner_image_cake.png'
import mobile3 from '../../assets/bg_banner/banner_image_cake.png'

import { Link } from 'react-router-dom';

const New_Home_Banner_Section = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: false,
      };
    
      const banners = [
        {
          id: 1,
          image:banner1,
          title: "The Perfect Space to Enjoy Fantastic Food",
          description:"Festive dining at Farthings where we are strong believers in using the very best produce",
          btn:"See Our Menu",
        },
        {
          id: 2,
          image: banner2,
          title: "Craving Something Delicious? Get 20% Off Your First Order",
          description:"Enjoy Mouthwatering Dishes at Unbeatable Prices – A Feast for Your Senses!",
          btn:"See Our Menu",
        },
        {
          id: 3,
          image: isMobile? mobile1:banner3,
          title: "Delicious Discounts – Order Today and Save More!",
          description:"Every bite bursts with flavor, crafted with passion and precision, offering an unforgettable taste experience.",
          btn:"See Our Menu",
        },
      ];
    
  return (
   <>
     <div className={style.banner_container}>
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className={style.banner_slide}>
            <img src={banner.image} alt={banner.title} className={style.banner_image} />
            <div className={style.banner_overlay}>
              <h2>{banner.title}</h2>
              <p>{banner.description}</p>
              <span><Link to={'/menu'} >{banner.btn}</Link></span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
   </>
  )
}

export default New_Home_Banner_Section