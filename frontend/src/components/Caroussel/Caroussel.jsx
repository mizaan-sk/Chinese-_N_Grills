import React from 'react';
import Slider from 'react-slick';
import styles from './Caroussel.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cardimage from '../../assets/Caroussel_Image/testi-1 1.png';
import stars from '../../assets/Caroussel_Image/stars.png';
import { Container } from '../../pages/customer_journey/plan_details/journey';

const Caroussel = () => {

    const CardsData = [
        { id: 1, image: <img src={cardimage} />, name: 'Christ Deo', location: 'CEO A4Tech Ltd.', stars: <img src={stars} />, content: 'Chinese N Grills is a gret Restaurant from the University of Texas at Austin has been  researching the benefits of frequent testing and the feedback leads to. He explains that in the history of the study.' },
        { id: 2, image: <img src={cardimage} />, name: 'Christ Deo', location: 'CEO A4Tech Ltd.', stars: <img src={stars} />, content: 'Chinese N Grills is a gret Restaurant from the University of Texas at Austin has been  researching the benefits of frequent testing and the feedback leads to. He explains that in the history of the study.' },
        { id: 3, image: <img src={cardimage} />, name: 'Christ Deo', location: 'CEO A4Tech Ltd.', stars: <img src={stars} />, content: 'Chinese N Grills is a gret Restaurant from the University of Texas at Austin has been  researching the benefits of frequent testing and the feedback leads to. He explains that in the history of the study.' },
        { id: 4, image: <img src={cardimage} />, name: 'Christ Deo', location: 'CEO A4Tech Ltd.', stars: <img src={stars} />, content: 'Chinese N Grills is a gret Restaurant from the University of Texas at Austin has been  researching the benefits of frequent testing and the feedback leads to. He explains that in the history of the study.' },
        { id: 5, image: <img src={cardimage} />, name: 'Christ Deo', location: 'CEO A4Tech Ltd.', stars: <img src={stars} />, content: 'Chinese N Grills is a gret Restaurant from the University of Texas at Austin has been  researching the benefits of frequent testing and the feedback leads to. He explains that in the history of the study.' }
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

            <div className={styles.Image_Section}>
                <div className={styles.Burger_Image}></div>
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
                <div className={styles.Pudina_Image}></div>
            </div>

        </>
    )
}

export default Caroussel;
