// MenuDisplay.js
import React, { useContext, useMemo } from 'react';
import styles from './MenuDisplay.module.css';
import { StoreContext } from '../../../context/StoreContext';
import MenuFoodDisplay from '../MenuFoodDisplay/MenuFoodDisplay';

const MenuDisplay = ({ cat }) => {
    const { food_list } = useContext(StoreContext);

    // Use useMemo to optimize the filtered food list
    const filteredFoodList = useMemo(() => {
        return food_list.filter((item) => 
            cat === "All" || cat === item.category
        );
    }, [cat, food_list]);

    return (
        <div className={styles.menuDisplayContainer}>
            <div className={styles.food_display_list}>
                {filteredFoodList.map((item) => (
                    <MenuFoodDisplay
                        key={item._id}
                        id={item._id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default MenuDisplay;
