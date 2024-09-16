import { FaPlus } from "react-icons/fa6"
import style from "./accordion.module.css"
import React, { useState } from 'react'
import { FaMinus } from "react-icons/fa";
import { Container } from "../../pages/customer_journey/plan_details/journey";

export const Accordion = () => {
  const [show, setShow] = useState({1:true});
console.log(show);

  const data = [
    {
      id: 1,
      accordion_head: "What are your restaurant's operating hours?",
      accordion_body: "We are open daily from 11:00 AM to 11:00 PM."
    },
    {
      id: 2,
      accordion_head: "Do you offer home delivery?",
      accordion_body: "Yes, we offer fast and reliable home delivery services. You can order directly from our website or via popular food delivery platforms."
    },
    {
      id: 3,
      accordion_head: "Do you have vegetarian options?",
      accordion_body: "Absolutely! We offer a wide range of delicious vegetarian dishes to cater to all preferences."
    },
    {
      id: 4,
      accordion_head: "Is your food halal?",
      accordion_body: "Yes, all our non-vegetarian dishes are prepared with halal-certified meat."
    },
    {
      id: 5,
      accordion_head: "Do you offer dine-in services?",
      accordion_body: "Yes, we have a cozy dine-in space where you can enjoy your meal with friends and family."
    },
    {
      id: 6,
      accordion_head: "Can I make a table reservation online?",
      accordion_body: "Yes, you can reserve a table directly through our website or by giving us a call at [Your Phone Number]."
    },
    {
      id: 7,
      accordion_head: "Do you offer catering for events?",
      accordion_body: "Yes, we provide catering services for all types of events such as parties, weddings, and corporate functions. Please contact us for more details."
    },
    {
      id: 8,
      accordion_head: "What safety measures are you following for COVID-19?",
      accordion_body: "We follow all necessary safety guidelines, including regular sanitation, staff health checks, and contactless delivery options to ensure a safe dining experience."
    },
    {
      id: 9,
      accordion_head: "Do you offer discounts or loyalty programs?",
      accordion_body: "Yes, we have exclusive offers and loyalty programs for our regular customers. Follow us on social media or subscribe to our newsletter to stay updated!"
    },
    {
      id: 10,
      accordion_head: "Where is your restaurant located?",
      accordion_body: "Our restaurant is located at [Your Address]. You can find the directions and a map on our 'Contact Us' page."
    },
    {
      id: 11,
      accordion_head: "Do you accept online payments?",
      accordion_body: "Yes, we accept all major credit/debit cards, UPI, and net banking for online orders."
    },
    {
      id: 12,
      accordion_head: "Can I customize my order?",
      accordion_body: "Yes, we’re happy to accommodate special requests. You can mention any customization preferences when placing your order."
    },
    {
      id: 13,
      accordion_head: "Do you offer special menus for kids?",
      accordion_body: "Yes, we have a kids' menu with smaller portions and mild flavors to suit children’s tastes."
    }
  ];

  const handleToggle = (id) => {
setShow((prevShow) => ({ [id]: !prevShow[id] }));

    
  };

  return (
    <div className={style.accordion_bg}>
      <Container>
        <h2>  Frequently Asked Question </h2>
        <div className={style.head_accordion}>
        {data.map((item, index) => (
           <div key={item.id} className={style.accordion} onClick={() => handleToggle(item.id)} style={{ cursor: "pointer" }}>
            <div className={`${style.accordion_head} ${show[item.id] ? style.accordion_head_active : ""}`}>
              <p className={` ${show[item.id] ? style.accordion_head_active_p : ""}`}>{item.accordion_head}</p>
              <div className={style.accordion_icon}>
                {show[item.id] ? <FaMinus fontSize={"20px"} /> : <FaPlus fontSize={"20px"} />}
              </div>
            </div>
            {show[item.id] && (
              <div className={`${style.accordion_body}`}>
                <p>{item.accordion_body}</p>
              </div>
            )}
          </div>
        ))}
         </div>
      </Container>
    </div>
  );
};