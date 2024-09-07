import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './Refer.module.css';
import { Container } from '../customer_journey/plan_details/journey';
import ReferImage from '../../assets/referimage.png';
import copy from '../../assets/copy.png';
import Referform from './Referform';

const Refer = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    generateRandomNumber();
  }, []); 

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 900) + 100;
    setRandomNumber(number);
  };

  let name = localStorage.getItem('name');

  const referalCode = (name) => {
    return `${name}${randomNumber}`;
  };

  const handleCopyClick = () => {
    const code = referalCode(name);
    navigator.clipboard.writeText(code)
      .then(() => {
        toast.success("Referral code copied to clipboard!"); // Show success toast
      })
      .catch(err => {
        toast.error("Failed to copy the referral code!"); // Show error toast
        console.error("Failed to copy!", err);
      });
  };

  return (
    <>
      <ToastContainer /> 
      <Container>
        <h1 className={styles.referfriend}>Refer A Friend</h1>
        <div className={styles.cont}>
          <img className={styles.img} src={ReferImage} alt="Refer" />
          <div className={styles.referal_sect}>
            <div className={styles.ref_code}>
              <h3>
                Your Referral Code: <span>{referalCode(name)}</span>
                <img 
                  className={styles.refer_image} 
                  src={copy} 
                  alt="Copy" 
                  onClick={handleCopyClick} 
                 
                />
              </h3>
            </div>
            <div className={styles.form}>
              <Referform />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Refer;
