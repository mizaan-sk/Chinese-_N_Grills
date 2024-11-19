import React from 'react'
import styles from './Customer_Experience.module.css'
const Customer_Experience = () => {
    const Custom_Experience=[
        {id:1 , title:"32+", text:"Restaurant "},
        {id:2 , title:"5Year +", text:"Experience "},
        {id:3, title:"12K+", text:"Customers"}
    ]
    return (
        <>
            <div className={styles.Custom_Experience_Image}>
                <div className={styles.Image_text}>
                    <p>Ready To Eat-In, Take-Away<br /> And Delivery.</p>
                    <div className={styles.Content_Area}>
                    {Custom_Experience.map((item,index) => (
                        <div key={index} className={styles.Custom_Content}>
                            <p>{item.title}</p>
                            <p>{item.text}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Customer_Experience