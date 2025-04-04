import React, { useContext, useEffect, useState } from 'react';
import styles from './MenuFoodDisplay.module.css';
import { assets } from '../../../assets/assets';
import { StoreContext } from '../../../context/StoreContext';
import { BsCart3 } from "react-icons/bs";
import { GoTriangleRight } from 'react-icons/go';
import {Link} from 'react-router-dom';
const MenuFoodDisplay = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url, setCartItems } = useContext(StoreContext);
  const [ToggleValue, setToggleValue] = useState(false);

   
// useEffect(()=>{
//   const dataref = localStorage.getItem('cartItems')
//   const data = JSON.parse(dataref)
// console.log(data.ids)
// },[])
  // useEffect(() => {
  //   const savedCart = localStorage.getItem('cartItems');
  //   if (savedCart) {
  //     setCartItems(JSON.parse(savedCart));
  //   } else {
  //     setCartItems({}); // Initialize with an empty object if no cart is found
  //   }
  // }, []);
  const handleClick = () => {
    if (id) {
      addToCart(id);
  
      // Check if there are items in the cart
      if (Object.keys(cartItems).length > -1) {
        setToggleValue(true);    
        console.log(ToggleValue)
      }
      console.log(ToggleValue);
    } else {
      console.error("ID is undefined");
    }
  };
  const handlesClick = () => {
    if (id) {
      if (cartItems[id] > 0) {
        // Remove one item from the cart
        removeFromCart(id);
  
        // Check if the item count becomes 0
        if (cartItems[id] - 1 === 0) {
          setToggleValue(false); // Hide the modal when item count reaches 0
        }
      } else {
        console.warn(`No items left to remove for ID: ${id}`);
      }
    } else {
      console.error("ID is undefined");
    }
  };
  
  useEffect(() => {
    setToggleValue(cartItems[id] > 0);
  }, [cartItems, id]);
  
  return (
    <div className={styles.food_item}>
      <div className={styles.food_item_img_container}>
        <img className={styles.food_item_image} src={url + "/images/" + image} alt="" />
      </div>
      <div className={styles.food_item_info}>
        <div className={styles.food_item_name_rating}>
          <p>{name}</p>
          {
            !cartItems[id] ? (
              <p className={styles.add} onClick={handleClick}>Add</p>
            ) : (
              <div className={styles.food_item_counter}>
                <img onClick={handlesClick} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={handleClick} src={assets.add_icon_green}></img>
              </div>
            )
          }
        </div>
        <p className={styles.food_item_desc}>{description}</p>
        <div className={styles.food_rating_flex}>
          <p className={styles.food_item_price}>₹{price}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
      </div>
      {
        ToggleValue ?
          (<div className={styles.modal_view_Cart}>
              <div className={styles.addItem}><BsCart3 className={styles.cartImage} />
              <div className={styles.addItem_p}>Items added to cart</div></div>
              <div >
                <Link className={styles.view_Cart} to={'/cart'} target='_top'>
                <p className={styles.view_Cart_text}> View Cart</p>
              
                <p className={styles.triangle}><GoTriangleRight /></p> </Link>
              </div>
            </div>
          )
          : ""
      }
    </div>
  );
};

export default MenuFoodDisplay;
