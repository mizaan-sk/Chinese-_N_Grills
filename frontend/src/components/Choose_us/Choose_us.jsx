import React from 'react'
import styles from './Choose_us.module.css'
import { Container } from '../../pages/customer_journey/plan_details/journey';
import Chef1 from '../../assets/Choose_us_Image/chef1.png';
import Delivery from '../../assets/Choose_us_Image/delivery.png';
import Food from '../../assets/Choose_us_Image/food.png';
import Serve from '../../assets/Choose_us_Image/serve.png';
const Choose_us = () => {
    const cardsData = [
        {id:1  , image :<img src={Delivery} /> ,title:'Free Delivery' , color: '#CC3333' },
        {id:2  , image: <img src={Chef1} />,title:<>Professional<br />Chef’s</> , color: '#FF9933'  },
        {id:3  , image :<img src={Food}/> ,title:'100% Safe',   color: '#CC3333' },
        {id:4, image: <img src={Serve} />,title: <>Perfect<br />Cooking</> , color: '#FF9933'}
    ]
    return (
       <>
            {/* // Choose_Us_Main_Section starts  */}
            <div className={styles.Choose_Us_Main_Section}>
        <Container>
                <h1>Why Choose Us ?</h1>
                   {/* Choose Cards starts here */}
                   <div className={styles.Card_Section}>
                    {cardsData.map((card,id) => (
                        <div key={id} className={styles.Card} style={{backgroundColor:card.color}}>
                            <div className={styles.choose_us_image}>{card.image}</div>
                            <div className={styles.Card_Title}><p>{card.title}</p></div>                            
                        </div>
                        ))}
                   </div>

        </Container>
            </div>
       </>
    )
}
export default Choose_us