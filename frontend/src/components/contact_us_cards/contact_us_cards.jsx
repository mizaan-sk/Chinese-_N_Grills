import style from "./contact_us_cards.module.css"
import { Container } from "../../pages/customer_journey/plan_details/journey"

export const Contact_us_cards = ({data_value,opt}) => { 
  return (
   <>
   <div className={style.whole_div} style = {
    opt? {
        background: "#f7f7f7"}:{
            background: "#f7f7f7"}
   }>
   <Container>
    {
        opt ? <div className={style.opt_text}>
<h3>we provide amazing & Quality food <br/>for your good health
</h3>
        </div>:""
    }
    <div className={style.cards_main}>
<div className={style.cards_start}>
   {
    data_value.map(({id,text,img,text_one,text_three,text_two})=>{
       return(
        <div className={style.cards} key = {id + 1}>
        <div className={style.image}>
            <img src= {img} alt="" />
        </div>
        <div className={style.text}>
        {text && <p id = {style.big_text}>{text}</p>}
            {text_one && <p>{text_one}</p>}
    {text_two && <p>{text_two}</p>}
    {text_three && <p>{text_three}</p>}
        </div>
    </div>
       )
    })
   }
</div>
   </div>
   </Container>
   </div>
   </>
  )
}

