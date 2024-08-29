import React from 'react'
import style from "./payment.module.css"
export const Payment = () => {
  return (
    <div>
<div className={style.cards_main}>
<div className={style.cards_left}>
<div className={style.head_text}>
Delivery Details
</div>
<hr />
<div className={style.details}>
  <ul>
    <div className={style.list}>
      <li>Name:</li>
      <li>Aalain</li>
    </div>
    <div className={style.list}>
      <li>Email Address:</li>
      <li>ala@gmai.com</li>
    </div>
    <div className={style.list}>
      <li>Apt/Villa No:</li>
      <li>Xyz</li>
    </div>
    <div className={style.list}>
      <li>Building Name:</li>
      <li>Xyz</li>
    </div>
    <div className={style.list}>
      <li>Street Name:</li>
      <li>Xyz</li>
    </div>
    <div className={style.list}>
      <li>Landmark:</li>
      <li>Xyz</li>
    </div>
    <div className={style.list}>
      <li>Mobile No:</li>
      <li>Xyz</li>
    </div>
  </ul>
</div>
</div>
<div className={style.cards_center}>
<div className={style.head_text}>
  <p>Discount</p>
</div>
<div className={style.disc}>
  <div className={style.discount_div}>
    <p><b>BIGSAVINGS</b>: Flat 10% Discount
    on your subscription</p>
    <button>Apply</button>
  </div>
  <hr />

  <div className={style.discount_div}>
    <p><b>BIGSAVINGS</b>: Flat 10% Discount
    on your subscription</p>
    <button>Apply</button>
  </div>
  <hr />
</div>
</div>
<div className={style.cards_right}>
<div className={style.card_start}>
  <ul>
    <div className={style.amt_list}>
      <li>Total Amount:</li>
      <li>552 </li>
    </div>
    <div className={style.amt_list}>
      <li>Delivery Charges:</li>
      <li>10</li>
    </div>
    <div className={style.amt_list}>
      <li>Platform  Fee :</li>
      <li>10</li>
    </div>
    <div className={style.amt_list}>
      <li>GST and Restaurant Charges :</li>
      <li>10</li>
    </div>
    <div className={style.amt_list}>
      <li>Discount 10% :</li>
      <li>10</li>
    </div>
  </ul>
  <hr />
  <div className={style.amt_list} id = {style.list}>
      <li>Total to Pay</li>
      <li>579.6</li>
    </div>
</div>
{/* payment part starts here */}
<div className={style.payment_part}>
<div className={style.head_text}>
  <p>SELECT PAYMENT METHOD </p>
</div>
<div className={style.btn}>
  <button>COD</button>
  <button>Online Pay</button>
</div>
</div>
</div>
</div>
.
    </div>

  )
}

