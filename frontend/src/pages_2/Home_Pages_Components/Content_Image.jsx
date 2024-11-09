import React from 'react';
import style from './Content_Image.module.css';
import { Container } from '../../pages/customer_journey/plan_details/journey';
import { Link } from 'react-router-dom';
import Rolling_Dish from '../../assets/bg_banner/round_food.png';
import Fade from 'react-reveal/Fade'; // Import the Fade component

const Content_Image = () => {
    return (
        <>
            <Container>
                {/* Main div starts */}
                <div className={style.Combine_Content_Rolling_Dish}>
                    {/* Content div starts */}
                    <Fade left> {/* Apply the fade-in-left animation here */}
                        <div className={style.Main_Content_Section_Home_Page}>
                            <p className={style.Enjoy_Content}>Enjoy  Our <br /> Delicious Meal</p>
                            <p className={style.Satisfy_content}>
                                Satisfy your hunger with fresh, flavorful meals at <span> Chinese N Grills</span>. <br />
                                Each dish is made with the finest ingredients for a memorable <br /> dining experience. 
                                Great food, great vibes, every time!
                            </p>
                            <a className={style.button_Book_Table_home_page}>
                                <Link to='/about-us'>Book Table</Link>
                            </a>
                        </div>
                    </Fade>
                    {/* Content div ends */}

                    {/* Rolling dish Starts */}
                    <div className={style.Rollng_dish}>
                        <img src={Rolling_Dish} alt="Rolling Food" />
                    </div>
                    {/* Rolling dish Ends */}
                </div>
                {/* Main div ends */}
            </Container>
        </>
    );
}

export default Content_Image;
