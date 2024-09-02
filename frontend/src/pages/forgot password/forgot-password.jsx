import React, { useContext, useState } from 'react';
import styles from "./forgot-password.module.css";
import { Container } from '../customer_journey/plan_details/journey';
import axios from 'axios';
import { StoreContext } from '../../context/StoreContext';
import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';

export const Forgot_Password = () => {
    const [email, setEmail] = useState('');
    const { url } = useContext(StoreContext);

    const validateEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      if (!validateEmail(email)) {
        toast.error("Invalid email format");
        return;
      }

      let newurl = `${url}/user/forgotpassword`;
      try {
        const response = await axios.post(newurl, { email });
        console.log(response);
        if (response.data.success) {
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("An error occurred, please try again.");
      }
    };

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };

    return (
      <>
        <Container>
          <div className={styles.forgot_form}>
            <form onSubmit={handleSubmit}>
              <label>
                Email:
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </label>
              <button type="submit">Submit</button>
              <ToastContainer />
            </form>
          </div>
        </Container>
      </>
  );
};
