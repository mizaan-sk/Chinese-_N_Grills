import React, { useContext } from 'react'
import styles from '../DisableCart/DisableCart.module.css'

import MyImage from '../../../assets/diablecar_image.avif';
import { Container } from '../../customer_journey/plan_details/journey';
import { Link } from 'react-router-dom';

const DisableCart = () => {
    return (
        <>
   <Container>
   <div className={styles.image_sect}>
            <img src={MyImage } alt="image" />
            <h4>Your cart is empty</h4>
            <p>You can go to home page to view more Foods</p>
        <Link to='/menu' target='_top'><button className='all-btn'>Click! To See Your Delicious Food</button></Link>
        </div>
   </Container>
        </>
    )
}

export default DisableCart