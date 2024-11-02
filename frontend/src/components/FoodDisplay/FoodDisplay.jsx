import React, { useContext, useEffect } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import { TomatoContainer } from '../../pages/customer_journey/plan_details/journey'
const FoodDisplay = ({category,filteredFoodList}) => {
    const {food_list} =useContext(StoreContext)

    const func = ()=>{
      filteredFoodList
    }
    useEffect(()=>{
      func()
    },[])
  return (
    <TomatoContainer>
    <div className='food-display' id='food-display'>
      <h2>Your flavor adventure starts here </h2>
      <div className="food-display-list">
        {food_list.map((item,index)=>{
          if (category ==="All" || category === item.category) {
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
          }
        })}
      </div>
    </div></TomatoContainer>
  )
}

export default FoodDisplay
