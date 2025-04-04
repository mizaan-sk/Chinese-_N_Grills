import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import david from '../../assets/review_1.png';
import sarah from '../../assets/review_2.jpg';
import priya from '../../assets/review_4.jpg';
import riya from '../../assets/review_3.jpg';
import stars from '../../assets/Caroussel_Image/stars.png';
import burger from "../../assets/Caroussel_Image/burger-img.png";
import pudina from "../../assets/Caroussel_Image/pudina.png";
import { Container } from '../../pages/customer_journey/plan_details/journey';
import styles from './Caroussel.module.css';
const Caroussel = () => {

    const CardsData = [
        { id: 1, image: <img src={david} />, name: 'Fatema Cheni.',  stars: <img src={stars} />, content: 'Yumm food and good atmosphere , service Overall good experience . Best place for all chinese lovers nearby Manchow soup is a must try here .' },
        { id: 2, image: <img src={sarah} />, name: 'Kashif Ajmeri',  stars: <img src={stars} />, content: "One of the best Chinese restro in Vasind Bhiwandi. Very Powerful 💪💪💪. The Owner (Shahrukh Bhai) Is Very Helpful & Friendly.Will surely Visit again With Friends & Family."
 },
        { id: 3, image: <img src={priya} />, name: 'Suraj Patil',  stars: <img src={stars} />, content: "Food has awesome taste. Ambience is also good to have dinner with family and friends. But there is one suggestion, they should customize the dishes as per customer requirements." },
        { id: 3, image: <img src={riya} />, name: 'Yashaswi Devare',  stars: <img src={stars} />, content: "Absolutely loved the food at Chinese and Grills! The dumplings were perfectly steamed, and the grilled chicken skewers were bursting with flavor." },
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        pauseOnHover: false,
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
    <h1 className = "caraousel-heading text-center">Some Words From Our Customer</h1>
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
