import React, { useContext } from 'react'
import style from "./order_summary.module.css"
import { StoreContext } from '../../../../context/StoreContext';
const Order_summary = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);


  return (
    <div>
      <div className={style.order_summary}>
        <div className={style.head_text}>
          <p>Order Summary
          </p>
        </div>
        <div className={style.order_main}>
          <ul>
            <div className={style.first_list} id={style.head} >
              <li>Items</li>
              <li>Quantity</li>
            </div>
            <div>
              <div className={style.first_list_map}>
                <ul className='d-flex justify-content-between w-100 flex-column'>

                  {
                    food_list.map((item, index) => {
                      if (cartItems[item._id] > 0) {
                        return (
                          <div className='d-flex w-100 justify-content-between' key={index + 1}>
                            <li>{item.name}</li>
                            <li>{cartItems[item._id]}</li>
                            
                          </div>
                        )
                      }
                    })
                  }
                </ul>
              </div>
            </div>


            {/* <div className={style.first_list} >
<li>Vegan Sandwhich</li>
<li>1</li>
                </div> */}
            <hr />
            <div className={style.first_list}>
              <li><b>Pay</b> </li>
              <li><b>₹{getTotalCartAmount()}</b></li>
            </div>
          </ul>
          <div className={style.strip}>
            <p>Amazing offers awaits at next step!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Order_summary
