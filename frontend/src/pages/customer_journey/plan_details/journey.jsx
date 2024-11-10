import React, { useContext, useState } from "react";

import styles from "./journey.module.css";
import { GoTriangleRight } from "react-icons/go";
import { useFormik } from 'formik';
import { Signupschema } from "../schema";
import styled from "styled-components";
import { StoreContext } from "../../../context/StoreContext";
import { assets, food_list } from "../../../assets/assets";
import Order_summary from "./order_summary/order_summary";
import { Payment } from "../payment/payment";
import DisableCart from "../../Cart/DisableCart/DisableCart";
import Swal from "sweetalert2";
export const Journey = () => {
  const [tabs, setactivetabs] = useState(0);
  const {cartItems,food_list,removeFromCart,getTotalCartAmount,url} = useContext(StoreContext);

  
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
          name: '',
          email:"",
          villa_no:"",
          building_name:"",
          street_name:"",
          landmark:"",
        },
        validationSchema: Signupschema,
        onSubmit: values => {
        },
    });
const savedetails = () => {
  const data = sessionStorage.setItem('data', JSON.stringify(values));
 
}
savedetails()


const areAllValuesFilled = (obj) => {
  return Object.values(obj).every(value => value.trim() !== "");
};

    const NextClick = () => {
      if(areAllValuesFilled(values)){
        setactivetabs(tabs + 1)
      }
  else{
    Swal.fire({
      title: "Please Fill Delivery  Details",
    });
  }
    };

    return (
      <>
     {getTotalCartAmount() === 0 ? <DisableCart/>: 

        <div className={styles.bg_body}>
          <Container>
            <div className={styles.tabs}>
              <ul>
                <li
                  className={tabs == 0 ? "active-tabs" : ""}
                >
                  Plan Details
                </li>
                <span>
                  <GoTriangleRight size={50} />
                </span>
                <li
                  className={tabs == 1 ? "active-tabs" : ""}
                  onClick={() => handleClick(1)}
                >
                  Payment
                </li>
                <span>
                  <GoTriangleRight size={50} />
                </span>
                <li
                  // className={tabs == 2 ? "active-tabs" : ""}
                  // onClick={() => handleClick(2)}
                >
                  Confirmation
                </li>
              </ul>
            </div>

            {tabs === 0 && (
              <div className={styles.tabs_flex}>
                <div className={styles.left}>
                  <div className={styles.head}>
                    <p>Delivery Address</p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className={styles.head_div}>
                      <label htmlFor="Name" className="form-label">Enter Name</label>
                      <input type="text" className="form-control" name="name" id="exampleInpuText" placeholder="Enter Name" aria-describedby="emailHelp" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                      {errors.name && touched.name ? <p className={styles.error}>{errors.name}*</p> : ""}
                    </div>
                    <div className={styles.head_div}>
                      <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                      <input type="email" className="form-control" name="email" id="exampleInputEmail1" aria-describedby="emailHelp" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                      {errors.email && touched.email ? <p className={styles.error}>{errors.email}*</p> : ""}
                    </div>
                    <div className={styles.head_div}>
                      <label htmlFor="villa" className="form-label">Apt/Villa No</label>
                      <input type="text" name="villa_no" className="form-control" value={values.villa_no} onChange={handleChange} onBlur={handleBlur} />
                      {errors.villa_no ? <p className={styles.error}>{errors.villa_no}*</p> : ""}
                    </div>
                    <div className={styles.head_div}>
                      <label htmlFor="building_name" className="form-label">Building Name</label>
                      <input type="text" name="building_name" className="form-control" value={values.building_name} onChange={handleChange} onBlur={handleBlur} />
                      {errors.building_name && touched.building_name ? <p className={styles.error}>{errors.building_name}*</p> : ""}
                    </div>
                    <div className={styles.head_div}>
                      <label htmlFor="street_name" className="form-label">Street Name</label>
                      <input type="text" name="street_name" className="form-control" value={values.street_name} onChange={handleChange} onBlur={handleBlur} />
                      {errors.street_name && touched.street_name ? <p className={styles.error}>{errors.street_name}*</p> : ""}
                    </div>

                    <div className={styles.head_div}>
                      <label htmlFor="landmark" className="form-label">Landmark</label>
                      <input type="text" name="landmark" className="form-control" value={values.landmark} onChange={handleChange} onBlur={handleBlur} />
                      {errors.landmark && touched.landmark ? <p className={styles.error}>{errors.landmark}*</p> : ""}
                    </div>
                    {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                  </form>
                </div>
                <div className={styles.right}>
                  <div className={styles.cart_section}>
                    <div className={styles.head_text}>
                 <p>Cart Items</p>
                    </div>
                    <div className="adjust_height">
                    <div className={styles.small_cards}>
               
               {food_list.map((item,index)=>{
          if (cartItems[item._id] > 0)
           {
            return(
              <div className={styles.small_card} key = {index + 1}>
              <div className={styles.image}>
              <img src={url+"/images/"+item.image} alt="" />  
              </div>
              <div className={styles.text_part}>
                <div className={styles.cross}>
                <p>{item.name}</p>
                <p onClick={()=>removeFromCart(item._id)} >X</p>
                </div>
                <p>{item.description}

</p>
<div className={styles.star_part}>
<div className="images">
<img src="/src/assets/rating_starts.png" alt="" />
</div>
 <div className={styles.food_item_counter}>
        <img  src={assets.remove_icon_red} alt="" />
        <p>1</p>
        <img  src={assets.add_icon_green} alt="" />
    </div>
</div>
              </div>
        
             </div>
            )
          }
        })}
                    </div>
                    </div>
                    <Order_summary/>
                  </div>

     <button className={styles.btn_next} onClick={NextClick}
     
     
     >Next</button>
                </div>
                
              </div>
            )}
            {
              tabs == 1 ? (<Payment  savedetails = {savedetails}/>): ""
            }
          </Container>
        </div>
        
        }
      </>
    );
};

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`;

export const TomatoContainer = styled.div`
  max-width: 1150px;
  margin: 0 auto;
  overflow: hidden;
`;
