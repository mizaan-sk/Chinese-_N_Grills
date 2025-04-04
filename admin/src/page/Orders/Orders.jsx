import React, { useState, useEffect } from 'react';
import './Orders.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]); // State to store fetched orders
  const [deliveryEmails, setDeliveryEmails] = useState({}); // State to store delivery boy emails for each order

  // Fetch orders from the backend
  const fetchOrder = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        setOrders(response.data.data);
      } else {
        toast.error('Failed to fetch orders.');
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      toast.error('Error occurred while fetching orders.');
    }
  };

  // Update the status of an order
  const StatusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(`${url}/api/order/status`, {
        orderId,
        status: event.target.value,
      });
      if (response.data.success) {
        toast.success('Order status updated!');
        await fetchOrder(); // Refresh the order list
      } else {
        toast.error('Failed to update order status.');
      }
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Error occurred while updating status.');
    }
  };

  // Send the delivery bill to the delivery boy
  const deliveryBill = async (event, orderId) => {
    event.preventDefault();

    // Validate the delivery boy email
    if (!/\S+@\S+\.\S+/.test(deliveryEmails[orderId])) {
      toast.error('Please enter a valid delivery boy email.');
      return;
    }

    try {
      // Find the order by ID
      const order = orders.find((order) => order._id === orderId);
      if (!order) {
        toast.error('Order not found.');
        return;
      }

      // Prepare payload for the backend
      const payload = {
        email: deliveryEmails[orderId],
        address: order.address,
        bill_amount: order.amount, // Send the total amount
      };

      // Send the bill to the delivery boy
      const response = await axios.post('http://localhost:5000/api/delivery/bill', payload);

      if (response.data.success) {
        toast.success('Bill sent to the delivery boy successfully!');
        setDeliveryEmails((prev) => ({ ...prev, [orderId]: '' })); // Clear the email input for the specific order
      } else {
        toast.error('Failed to send the bill.');
      }
    } catch (error) {
      console.error('Error sending the bill:', error);
      toast.error('Error occurred while sending the bill.');
    }
  };

  // Load orders when the component mounts
  useEffect(() => {
    fetchOrder();
  }, []);

  const handleEmailChange = (e, orderId) => {
    setDeliveryEmails((prev) => ({
      ...prev,
      [orderId]: e.target.value, // Update the email for the specific order
    }));
  };

  return (
    <div className='order add'>
      <h3>Orders</h3>
      <div className='order-list'>
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt='' />
            <div>
              <p className='order-item-food'>
                {order.items.map((item, index) => (
                  <span key={index}>
                    {item.name} x {item.quantity}
                    {index < order.items.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
              <p className='order-item-name'>{order.address.name}</p>
              <div className='order-item-add'>
                <p>{order.address.street_name}, </p>
                <p>
                  {order.address.building_name}, {order.address.villa_no}, {order.address.landmark}
                </p>
              </div>
              <p className='order-item-phone'>{order.address.email}</p>

              <div>
                <input
                  type='email'
                  placeholder='Enter delivery boy email'
                  value={deliveryEmails[order._id] || ''} // Bind the input to the specific order's email
                  onChange={(e) => handleEmailChange(e, order._id)}
                  className='delivery-email'
                  required
                />
                <button
                  type='submit'
                  onClick={(e) => deliveryBill(e, order._id)}
                  className='delivery-btn'
                >
                  Submit
                </button>
              </div>
            </div>

            <p>Item:{order.items.length}</p>
            <p>Amount: {order.amount}₹(COD)</p>
            <select
              onChange={(event) => StatusHandler(event, order._id)}
              value={order.status}
            >
              <option value='Food Processing'>Food Processing</option>
              <option value='Out For Delivery'>Out For Delivery</option>
              <option value='Delivered'>Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
