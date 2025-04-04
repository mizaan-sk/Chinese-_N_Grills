import React from 'react';
import style from './Happy_Sunday_Section.module.css';
import pepsiImage from '../../assets/bg_banner/pepsi_Happy_Image.png';
import { Link } from 'react-router-dom';
import Premium_food from '../../assets/bg_banner/Premium_Happy_Image.png';
import { Container } from '../../pages/customer_journey/plan_details/journey';

const Happy_Sunday_Section = () => {
    // Get the current day name
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = daysOfWeek[new Date().getDay()];

    return (
        <>
            <div className="marque-bg-color">
                <Container>
                    <div className="d-flex p-10 justify-content-center align-items-center m-ud column-reverse">
                        <div className="d-flex flex-column gap-1 m-l-1 flex-align-center">
                            <h1 className='Happy_Sunday_h1'>Let’s Make This {today} Special</h1>
                            <p className='Happy_Sunday_p'>50% OFF on All Non-Veg Delights!"</p>
                            <img src={pepsiImage} alt="pepsi" className="Pepsi-image" />
                            <span className='Happy_Sunday_btn text-font-700 text-center all-btn'>
                                <Link to={'/menu'} target="_top">Explore Menu</Link>
                            </span>
                        </div>

                        <div className="text-center">
                            <img src={Premium_food} alt="Premium_food" className="Premium-image" />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Happy_Sunday_Section;
