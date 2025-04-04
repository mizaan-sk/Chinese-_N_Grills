import React, { useContext, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios';
import { useEffect } from 'react';
import { assets } from '../../assets/assets';
import { Container } from '../customer_journey/plan_details/journey';
import DisableCart from '../Cart/DisableCart/DisableCart';
const MyOrders = () => {
    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);
    const fetchOrder = async () => {
        const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } })
        setData(response.data.data)
        console.log(response.data.data)
    }

    useEffect(() => {
        if (token) {
            fetchOrder();
        }
    }, [token])
console.log(data)
    return (
<Container>
<div className='my-orders'>
            {data.length > 0 ? 
             <div className="container">
                {data.map((order, index) => {
                    return (
                        <div key={index} className='my-orders-order'>   
                            <img src={assets.parcel_icon} alt="" />
                            <p>{order.items.map((item,index)=>{
                                if(index === order.items.length-1){  //If the item is the last in the list, it doesn’t add a comma at the end   
                                    return item.name + " x " + item.quantity
                                }
                                else{// If it’s not the last, it adds a comma after the quantity
                                    return item.name + " x " + item.quantity+" ,"
                                }
                            })}</p>
                            <p>₹{order.amount}.00</p>
                            <p>Items : {order.items.length}</p>
                            <p><span>&#x25cf;</span><b>{order.status}</b></p>
                            <button onClick={fetchOrder}>Track order</button>
                        </div>
                    )
                })}
            </div>
            :
          <DisableCart/>
            }
           
        </div>
</Container>
    )
}

export default MyOrders