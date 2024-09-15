import style from "./contact_us_cards.module.css"
import mobile_icon from "../../assets/contact_us/mb-check.png"
import { Container } from "../../pages/customer_journey/plan_details/journey"
import direction_icon from "../../assets/contact_us/direction_icon.png"
import clock_icon from "../../assets/contact_us/clock_icon.png"
export const Contact_us_cards = () => {
    const data = [
        {
            id: 1,
            text_one: "Phone Us 24/7",
            text_two: "123-5879406",
            text_three: "123-5879406",
            img : mobile_icon
        },
        {
            id: 2,
            text_one: "Get Direction",
            text_two: "Sector:7, Road:27, House:18, Uttara, Dhaka, 1230 Dhaka.",
            img : direction_icon
        },
        {
            id: 3,
            text_one: "Opening Hours",
            text_two: "Everyday 11.00 PM - 11.00 AM",
            img : clock_icon
        },
        
    ]
    
  return (
   <>
   <Container>
    <div className={style.cards_main}>
<div className={style.cards_start}>
   {
    data.map((item,index)=>{
       return(
        <div className={style.cards} key = {index + 1}>
        <div className={style.image}>
            <img src= {item.img} alt="" />
        </div>
        <div className={style.text}>
<p>{item.text_one}</p>
<p>{item.text_two}
</p>
<p>{item.text_three}
</p>
        </div>
    </div>
       )
    })
   }
</div>
   </div>
   </Container>
   </>
  )
}

