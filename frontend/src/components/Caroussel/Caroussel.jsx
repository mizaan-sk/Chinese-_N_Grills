import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import david from '../../assets/Caroussel_Image/david.png';
import sarah from '../../assets/Caroussel_Image/sarah.png';
import priya from '../../assets/Caroussel_Image/priya.png';
import stars from '../../assets/Caroussel_Image/stars.png';
import burger from "../../assets/Caroussel_Image/burger-img.png";
import pudina from "../../assets/Caroussel_Image/pudina.png";
import { Container } from '../../pages/customer_journey/plan_details/journey';
import styles from './Caroussel.module.css';
const Caroussel = () => {

    const CardsData = [
        { id: 1, image: <img src={david} />, name: 'Sarah M.',  stars: <img src={stars} />, content: 'Absolutely loved the food at Chinese and Grills! The dumplings were perfectly steamed, and the grilled chicken skewers were bursting with flavor. The staff was friendly, and the ambiance was cozy. Will definitely be coming back soon!' },
        { id: 2, image: <img src={sarah} />, name: 'David R.',  stars: <img src={stars} />, content: "Chinese and Grills has quickly become my go-to spot for a delicious meal. The General Tso's chicken was crispy and tangy, and the grilled prawns were seasoned to perfection. Highly recommend it to anyone looking for a fantastic dining experience."

 },
        { id: 3, image: <img src={priya} />, name: 'Priya S',  stars: <img src={stars} />, content: "What a gem of a restaurant! The hot and sour soup was just the right level of spicy, and the grilled lamb chops were tender and juicy. Amazing food, great service, and reasonable prices. A must-visit for food lovers!" },
       
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <>

         
<div className="caraousel-sect">
    <img src={burger} alt="" className='absolute-left' />
    <img src={pudina} alt="" className='absolute-right' />
    <h1 className = "caraousel-heading text-center">Some Words From Out Customer</h1>
    <div className={styles.Review_Card}>
                    <Container>
                        <Slider {...settings}>
                            {CardsData.map((item, index) => (
                                <div key={index} className={styles.Cards_Section}>
                                    <div className={styles.Image_Content_Section}>
                                        <div className={styles.Image}>{item.image}</div>
                                        <div className={styles.Content_Section}>
                                            <p className={styles.User_Name}>{item.name}</p>
                                            <p className={styles.Location}>{item.location}</p>
                                            <p className={styles.stars}>{item.stars}</p>
                                        </div>
                                    </div>
                                    <div className={styles.Content}>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </Container>
                </div>
</div>
        </>
    )
}

export default Caroussel;
