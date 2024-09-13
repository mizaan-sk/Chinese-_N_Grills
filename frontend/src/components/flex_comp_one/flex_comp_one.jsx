import React from 'react'
import style from "./flex_comp_one.module.css"
import { Container } from '../../pages/customer_journey/plan_details/journey'
import img from "../../assets/flex_comp_one/flex_comp_one.png"
export const Flex_comp_one = () => {
  return (
  <>
  <Container>
    <section className = {style.flex_comp_one} >
<div className={style.grill_text}>
<h2>Chinese N Grills</h2>
<p>Delicious Chinese food at your fingertips</p>
</div>
<div className={style.sect_flex}>
    <div className={style.left_Sect}>
        <img src={img} alt="" />
    </div>
    <div className={style.right_Sect}>
    <p>Welcome to <b>Chinese and Grills</b>, where we combine the rich, authentic flavors of Chinese cuisine with the bold, smoky taste of grilled delights.</p>
    <p>
    Whether you're in the mood for savory stir-fried dishes, spicy noodles, or perfectly grilled meats, we offer a diverse menu to satisfy every craving.
Our journey started with a passion for bringing together two culinary worlds—traditional Chinese flavors and the art of grilling. At Chinese and Grills, we believe in using the freshest ingredients, carefully selected to ensure that each dish we serve is of the highest quality. From sizzling grills to aromatic Chinese favorites, every bite is crafted to deliver an unforgettable taste experience.
    </p>
    <p>At <b>Chinese and Grills</b>, we don't just serve food we create experiences.  We invite you to explore the unique blend of flavors that defines our culinary identity and discover why Chinese and Grills is more than just a restaurant—it’s a place where passion meets taste.</p>
    <button>
    Book Table Now
    </button>
    </div>
</div>
    </section>
  </Container>
  </>
  )
}

