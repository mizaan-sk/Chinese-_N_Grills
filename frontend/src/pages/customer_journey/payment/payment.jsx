import React, { useContext, useRef, useState } from 'react';
import style from "./payment.module.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { StoreContext } from '../../../context/StoreContext';
import { Container } from '../plan_details/journey';
import { BsCreditCard2Back } from "react-icons/bs";
import americancard from '../../../assets/americancard.svg'
import mastercard from '../../../assets/mastercard.svg'
import visaimage from '../../../assets/visaimage.svg'
import pay_gimage from '../../../assets/pay_gimage.png'
import pay_image from '../../../assets/pay_image.png'
import gpay_image from '../../../assets/gpay_image.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import gpay_modal_image from '../../../assets/gpay_modal_image.png'
import { GoTriangleRight } from 'react-icons/go';
export const Payment = ({ formData }) => {
  const data = JSON.parse(localStorage.getItem('formData'));
  const [ToggleValue, setToggleValue] = useState(false)
  const [discountCode, setDiscountCode] = useState('');
  const [discountCode10, setDiscountCode10] = useState("");
  const [discountCode20, setDiscountCode20] = useState("");
  const [discountedAmount, setDiscountedAmount] = useState("");
  const { url, setToken, food_list, getTotalCartAmount, cartItems, token } = useContext(StoreContext);
  const inputRef = useRef(null);
  const [showGPayModal, setShowGPayModal] = useState(false); // GPay Modal state
  const handleGPayClick = () => {
    setShowGPayModal(true); // Open the modal
  };

  const closeGPayModal = () => {
    setShowGPayModal(false); // Close the modal
  };
  const ChargesApplied = (getTotalCartAmount) => {
    const amount = getTotalCartAmount();
    if (amount > 1000) {
      return amount;
    }
    if (amount > 500) {
      return amount;
    }
    else if (amount > 50) {
      return amount;
    }

    else {
      return amount;
    }
  };
  const placeOrder = async (event) => {
    // event.preventDefault();
    let OrderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item }; // Create a copy of the item to avoid mutating the original object
        itemInfo["quantity"] = cartItems[item._id];
        OrderItems.push(itemInfo);
      }
    });
    const totalAmount = getTotalCartAmount();
    const gst = Math.round(totalAmount * 0.03);
    const restaurantCharges = 10;
    const deliveryCharges = 50;
    const platformFee = 10;
    let discount = 0;
    if (discountCode10.toUpperCase() === '10OFF') {
      discount = 10;
    } else if (discountCode20.toUpperCase() === '20OFF') {
      discount = 20;
    }
    const billDetail = {
      totalAmount: totalAmount,
      gst: gst,
      discount: discount,
      restaurantCharges: restaurantCharges,
      deliveryCharges: deliveryCharges,
      platformFee: platformFee,
      totalPay: totalAmount + gst + restaurantCharges + deliveryCharges + platformFee, // Subtract discount from totalPay
      discountedprice:discountedAmount,
    };
    let BillAmount = getTotalCartAmount() + gst + restaurantCharges + deliveryCharges + platformFee;

let ordersData = {
  address: data,
  items: OrderItems,
  amount: billDetail.discount === 0 
    ? BillAmount 
    : billDetail.discount === 10 
      ? Math.round(BillAmount - (BillAmount * 10) / 100) 
    :billDetail.discount === 20 
      ? Math.round(BillAmount - (BillAmount * 20) / 100) 
      : 0,
};
    try {
      let response = await axios.post(url + "/api/order/place", ordersData, { headers: { token } });
      if (response.data.success) {
        toast.success("Order placed successfully!");
        setTimeout(() => {
          window.location = '/myorders'; // Navigate after a short delay
        }, 2000);
        localStorage.setItem('formData', '')
        localStorage.setItem('cartItems', '');
      } else {
        toast.error("Error placing order. Please try again.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };
  const discountApply = (getTotalCartAmount, discountCode) => {
    if (discountCode.toLowerCase() === '20off') {
      setDiscountCode20('20off');
      setDiscountCode10('');  // Reset the other discount
    } else if (discountCode.toLowerCase() === '10off') {
      setDiscountCode10('10off');
      setDiscountCode20('');  // Reset the other discount
    }
    const bill = Math.round(getTotalCartAmount() + 50 + 10 + (getTotalCartAmount() * 0.03) + 10);
    let discountPercentage = 0;
    // if (discountCode === "10OFF") {
    //   setDiscountCode10(10)
    // } else if (discountCode === "20OFF") {
    //   setDiscountCode20(20)
    // }
    // Normalize the discount code to handle case sensitivity
    const normalizedCode = discountCode.toUpperCase();
    // Check the entered code and assign the discount percentage
    if (normalizedCode === "10OFF") {
      discountPercentage = 10;
    } else if (normalizedCode === "20OFF") {
      discountPercentage = 20;
    } else {
      Swal.fire({
        title: "Invalid Discount Code",
        text: "Please enter a valid code.",
        icon: "error",
        timer: 1500,
      });
      return; // Exit the function if the code is invalid
    }

    // Calculate the discounted amount
    const afterDiscount = bill - ((bill * discountPercentage) / 100);
    setDiscountedAmount(Math.round(afterDiscount) + "₹");

    setDiscountCode(true)
    // Display a success message
    Swal.fire({
      title: `Congratulations! ${discountPercentage}% Discount Applied Successfully`,
      icon: "success",
      timer: 1500,
    });
    if (inputRef && inputRef.current) {
      inputRef.current.value = ""; // Clear input
    }

  };

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }

    const totalAmount = getTotalCartAmount();
    const gst = Math.round(totalAmount * 0.03);
    const restaurantCharges = 10;
    const deliveryCharges = 50;
    const platformFee = 10;
    let discount = 0;

    // Apply discount based on discount codes
    if (discountCode10.toUpperCase() === '10OFF') {
      discount = 10;
    } else if (discountCode20.toUpperCase() === '20OFF') {
      discount = 20;
    }
  const billDetails = {
      totalAmount: totalAmount,
      gst: gst,
      discount: discount,
      restaurantCharges: restaurantCharges,
      deliveryCharges: deliveryCharges,
      platformFee: platformFee,
      totalPay: totalAmount + gst + restaurantCharges + deliveryCharges + platformFee, // Subtract discount from totalPay
      discountedprice:discountedAmount,
    };
    try {
      await axios.post('http://localhost:5000/api/bill/sendBill', { billDetails, userEmail: data.email });
      toast.success('Bill has been sent to your email!');
      placeOrder();
    } catch (error) {
      console.error('Error sending bill:', error);
      toast.error('Error in sending bill.');
    }
  };


  return (
    <Container>
      <div className={style.tabs}>
        <ul>
          <li className={style.goneTab}>Plan Details</li>
          <span >
            <GoTriangleRight size={50} className={style.TriangleRight}/>
          </span>
          <li className={style.activeTab}>Payment</li>
          <span >
            <GoTriangleRight size={50} className={style.TriangleRight}/>
          </span>
          <li>Confirmation</li>
        </ul>
      </div>
      <ToastContainer />

      <div className={style.cards_main}>
        <div className={style.cards_left} style={{ maxHeight: ToggleValue ? '422px' : "" }}>
          <div className={style.head_text}>Delivery Details</div>
          <div className={style.details}>
            <ul>
              <div className={style.list}>
                <li>Name:</li>
                <li>{data.name}</li>
              </div>
              <div className={style.list}>
                <li>Email:</li>
                <li>{data.email}</li>
              </div>
              <div className={style.list}>
                <li>Apt/Villa No:</li>
                <li>{data.villa_no}</li>
              </div>
              <div className={style.list}>
                <li>Building Name:</li>
                <li>{data.building_name}</li>
              </div>
              <div className={style.list}>
                <li>Street Name:</li>
                <li>{data.street_name}</li>
              </div>
              <div className={style.list}>
                <li>Landmark:</li>
                <li>{data.landmark}</li>
              </div>
            </ul>
          </div>
        </div>
        <div className={style.cards_center} style={{ maxHeight: ToggleValue ? '422px' : "" }}>
          <div className={style.head_text}>
            <p className={style.Discount_p}>Discount</p>
          </div>
          <div className={style.disc}>
            <div className={style.discount_div}>
              <div className={style.offer_combine}>
                <p>Get FLAT <b>10%</b> OFF on your first order</p>
                <p>Use Code <b>10off</b></p>
              </div>
              <div className={style.offer_combine}>
                <input
                  id="discountCode10"
                  type="text"
                  ref={inputRef}
                  placeholder="eg.10off"
                  value={discountCode10}
                  onChange={(e) => setDiscountCode10(e.target.value)}
                />
                <button
                  onClick={() => {
                    discountApply(getTotalCartAmount, discountCode10);
                  }}>
                  Apply
                </button>
              </div>
            </div>
            <p className={style.pay_using_text}><hr /> <span>OR</span><hr /></p>
            <div className={style.discount_div}>
              <div className={style.offer_combine}>
                <p>Get FLAT <b>20%</b> OFF on your first order</p>
                <p>Use Code <b>20off</b></p>
              </div>
              <div className={style.offer_combine}>
                <input
                  id="discountCode20"
                  type="text"
                  placeholder="eg.20off"
                  value={discountCode20}
                  onChange={(e) => setDiscountCode20(e.target.value)}
                />
                <button
                  onClick={() => {
                    discountApply(getTotalCartAmount, discountCode20);
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={style.cards_right}>
            <div className={style.card_start}>
              <div className={style.head_text}>
                <p className={style.Amount_p}>Amount to pay</p>
              </div>
              <ul>
                <div className={style.amt_list}>
                  <li>Total Amount</li>
                  <li>{getTotalCartAmount()}₹</li>
                </div>
                <div className={style.amt_list}>
                  <li>Delivery Charges</li>
                  <li>50₹</li>
                </div>
                <div className={style.amt_list}>
                  <li>Platform Fee</li>
                  <li>10₹</li>
                </div>
                <div className={style.amt_list}>
                  <li>GST 3%</li>
                  <li>{(getTotalCartAmount() * 0.03).toFixed(2)}₹</li> {/* 3% GST, rounded to nearest integer */}
                </div>
                <div className={style.amt_list}>
                  <li>Restaurant Charges</li>
                  <li>10₹</li>
                </div>
                <div className={style.amt_list}>
                  <li>Discount</li>
                  <li>
                    {discountCode20 === '20off'? "20%": discountCode10 === '10off' ? "10%" : '0%'}
                  </li>
                </div>

              </ul>
              <hr />
              <div className={style.amt_list} id={style.list}>
                <div className={style.Pay_Amount_Combine}>
                  <div>
                    <li className={style.total}>Total to Pay</li>
                  </div>
                  <div>
                    <li style={{ textDecoration: discountCode ? 'line-through' : null }} className={style.total_pay}>
                      {Math.round((ChargesApplied(getTotalCartAmount) + 50 + 10 + (getTotalCartAmount() * 0.03) + 10))}₹
                    </li>
                    <li>
                      <span>{discountedAmount}</span>
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div className={style.payment_part}>
              <div className={style.head_text}>
                <p>SELECT PAYMENT METHOD</p>
              </div>
              <div className={style.btn}>
                <button type='submit'>COD</button>
                <button type='button' onClick={() => setToggleValue((prev) => !prev)}>Online Pay</button>
              </div>
              {ToggleValue && (
                <div className={style.click_Online_Pay}>
                  <p className={style.Card_text}>Fill in your card details:</p>
                  <div className={style.credit_input_combine}>
                    <BsCreditCard2Back className={style.credit_Card} />
                    <input type='number' placeholder='card number  MM/YY CVV' className={style.input_pay} required />
                  </div>
                  <button type='submit' className={style.checkout}>Checkout</button>
                  <p className={style.we_accept_text}>WE ACCEPT
                    <span className={style.all_card_debit_images}>
                      <img src={visaimage} />
                      <img src={mastercard} />
                      <img src={americancard} />
                    </span>
                  </p>
                  <p className={style.pay_using_text}><hr /> <span>OR Pay Using</span><hr /></p>
                  <p className={style.gpay_buy_with_text} onClick={handleGPayClick}>Buy with  <img src={gpay_image} className={style.gpay_image} /> </p>
                  <span className={style.buy_below_images}>
                    <img src={pay_gimage} />
                    <img src={pay_image} />
                    <img src={visaimage} />
                    <img src={mastercard} />
                    <img src={americancard} />
                  </span>
                </div>
              )}
            </div>
          </div>


        </form>
      </div>

      {showGPayModal && (
        <div className={style.modal}>
          <div className={style.modal_content}>
            <div className={style.image_cross_combine}>
              <img src={gpay_modal_image} className={style.gpay_modal_image} />
              <span className={style.cross_gpay} onClick={closeGPayModal}>✖</span>
            </div>
            <div className={style.modal_gpay}>
              <h1 className={style.Mobile_number_h2}>Enter your UPI ID</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="eg.john.doe@okaxis"
                  required
                  className={style.mobile_number_input}
                />
                <p className={style.mobile_number_p}>By generating OTP,you are agreeing to Google Pay's <span className={style.mobile_number_span}>Terms & coditions</span> </p>
                <div className={style.mobile_number_otp}>
                  <button type='submit'>Submit</button>
                </div>
              </form>


            </div>
          </div>
        </div>
      )}
    </Container>
  );
};
