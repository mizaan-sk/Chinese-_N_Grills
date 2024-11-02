import React, { useContext } from 'react';
import styles from './MenuFoodDisplay.module.css';
import { assets } from '../../../assets/assets';
import { StoreContext } from '../../../context/StoreContext';

const MenuFoodDisplay = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

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
              <p className={styles.add} onClick={() => addToCart(id)}>Add</p>
            ) : (
              <div className={styles.food_item_counter}>
                <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img  onClick={() => addToCart(id)} src={assets.add_icon_white}></img>
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
    </div>
  );
};

export default MenuFoodDisplay;
