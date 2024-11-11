import React from 'react'
import './Exception_Service.module.css'
import styles from './Exception_Service.module.css'
import girlImage from '../../assets/Exception_Service_image/girl.png'
import { Container } from '../../pages/customer_journey/plan_details/journey'
import { Link } from 'react-router-dom'
const Exception_Service = () => {
    return (
        <Container>
            <div className={styles.Exception_Service_Main_Section}>
                {/* Image Section Starts*/}
                <div className={styles.Exception_Service_Image}>
                    <img src={girlImage} alt="Chef Image" />
                </div>
                {/* Image Section ends*/}
                {/* Content Section starts  */}
                <div className={styles.Exception_Service_ContentSection}>
                    <h3>Exception Service</h3>
                    <h1>Fine Cuisine Served With Love & Dedication  </h1>
                    <p>At Dragon Flame Grill, we believe that great food isn’t just about the ingredients—it’s about the passion and care that go into every dish. Our culinary team is dedicated to creating an unforgettable dining experience, where each bite tells a story of creativity, flavor, and tradition.</p>
                    <p>From our kitchen to your table, every dish is crafted with the finest ingredients, carefully sourced from trusted suppliers. Our chefs bring years of experience and a love for culinary artistry, ensuring that every meal not only satisfies your taste buds but also warms your heart.</p>
                   <Link to = "/menu"> <button>Explore Menu</button></Link>
                </div>
                {/* Content Section ends  */}
            </div>
        </Container>
    )
}

export default Exception_Service