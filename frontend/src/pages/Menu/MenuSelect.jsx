import React, { useState, useEffect } from 'react';
import styles from './MenuSelect.module.css';
import { new_menu_list } from '../../assets/new_menu_list';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MenuSelect = ({ cat, setCat }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 786);
        };

        // Initial check
        handleResize();

        // Add event listener for window resizing
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 786,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 615,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 435,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    };

    return (
        <>
            {isMobile && (
                <Slider {...settings}>
                    {new_menu_list.map((item, index) => (
                        <div 
                            key={index} 
                            onClick={() => setCat(prev => prev === item.menu_name ? "All" : item.menu_name)} 
                            className={styles.menu_below_section}
                        >
                            <div className={styles.btn_main_section}>
                                <p className={`${styles.btn_main_text} ${cat === item.menu_name ? styles.active : ''}`}>
                                    {item.menu_name}
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>
            )}

            {!isMobile && (
                <div className={styles.menu_select_main_section}>
                    {new_menu_list.map((item, index) => (
                        <div 
                            key={index} 
                            onClick={() => setCat(prev => prev === item.menu_name ? "All" : item.menu_name)} 
                            className={styles.menu_below_section}
                        >
                            <div className={styles.btn_main_section}>
                                <p className={`${styles.btn_main_text} ${cat === item.menu_name ? styles.active : ''}`}>
                                    {item.menu_name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default MenuSelect;
