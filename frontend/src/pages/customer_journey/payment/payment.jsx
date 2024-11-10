import React, { useContext, useState } from 'react';
import style from "./payment.module.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { StoreContext } from '../../../context/StoreContext';

export const Payment = () => {
  const data = JSON.parse(sessionStorage.getItem('data'));
  const [discount, setdiscount] = useState(null);
  const { url, setToken,getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  function generatePassword() {
    const timestamp = Date.now().toString();
    const specialChars = '!@#$%^&*';
    const uppercase = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const number = String.fromCharCode(48 + Math.floor(Math.random() * 10));
    const special = specialChars[Math.floor(Math.random() * specialChars.length)];
    return uppercase + number + special + timestamp.slice(0, 5);
  }

  const genpass = generatePassword();

  const values = {
    name: data.name,
    email: data.email,
    password: genpass,
    con_password: genpass
  };

  const autosignin = async () => {
    const newurl = `${url}/api/user/register`;
    try {
      const response = await axios.post(newurl, values);

      if (response.data.success) {
        setToken(response.data.token);
        sessionStorage.setItem("token", response.data.token);
        Swal.fire({
          title: 'Thanks, Please visit again',
          text: 'You Will Be Redirected To Home Page',
        });
        setTimeout(() => navigate("/"), 3000);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed, please try again.");
    }
  };
var discountApply = (getTotalCartAmount,discount)=>{
  var bill = getTotalCartAmount();
  var afterDiscount = bill - (bill * discount / 100);
  setdiscount(afterDiscount)  
  Swal.fire({
    title: `Congratulations ${discount} % Discount Applied Successfully`,
    timer: 1500
  });
}
const ChargesApplied = (getTotalCartAmount) => {
  const amount = getTotalCartAmount();
  if (amount > 1000) {
    return amount;
  }
 if (amount > 500) {
    return amount + 10;
  }
  else if (amount > 50) {
    return amount + 30;
  }
 
  else {
    return amount;
  }
};



// function percentage(partialValue, totalValue) {
//   return (100 * partialValue) / totalValue;
// } 
  return (
    <div>
      <div className={style.cards_main}>
        <div className={style.cards_left}>
          <div className={style.head_text}>Delivery Details</div>
          <hr />
          <div className={style.details}>
            <ul>
              <div className={style.list}>
                <li>Name:</li>
                <li>{data.name}</li>
              </div>
              <div className={style.list}>
                <li>Email Address:</li>
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
        <div className={style.cards_center}>
          <div className={style.head_text}>
            <p>Discount</p>
          </div>
          <div className={style.disc}>
            <div className={style.discount_div}>
              <p><b>10OFF</b>: Flat 10% Discount </p>
              <button onClick={()=>discountApply(getTotalCartAmount,10)}>Apply</button>
            </div>
            <hr />
            <div className={style.discount_div}>
              <p><b>20FF</b>: Flat 20% Discount </p>
              <button onClick={()=>discountApply(getTotalCartAmount,20)}>Apply</button>
            </div>
            <hr />
          </div>
        </div>
        <div className={style.cards_right}>
          <div className={style.card_start}>
            <ul>
              <div className={style.amt_list}>
                <li>Total Amount:</li>
                <li>₹{getTotalCartAmount()}</li>
              </div>
              <div className={style.amt_list}>
                <li>Delivery Charges:</li>
                <li>10</li>
              </div>
              <div className={style.amt_list}>
                <li>Platform Fee:</li>
                <li>10</li>
              </div>
              <div className={style.amt_list}>
                <li>GST and Restaurant Charges:</li>
                <li>10</li>
              </div>
              <div className={style.amt_list}>
                <li>Discount 10%:</li>
                <li>10</li>
              </div>
            </ul>
            <hr />
            <div className={style.amt_list} id={style.list}>
              <li>Total to Pay</li>
             <div className="d-flex">
             <li style={{  textDecoration:  discount ? "line-through" : null }}>{ChargesApplied(getTotalCartAmount)}</li><li>
              <span>
              {discount}</span>
              </li> 
             </div>

            </div>
          </div>
          <div className={style.payment_part}>
            <div className={style.head_text}>
              <p>SELECT PAYMENT METHOD</p>
            </div>
            <div className={style.btn}>
              <button>COD</button>
              <button>Online Pay</button>
            </div>
          </div>
        </div>
      </div>
      <button onClick={autosignin}>Proceed Payment</button>
    </div>
  );
};
