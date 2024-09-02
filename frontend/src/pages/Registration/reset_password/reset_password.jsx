import React, { useContext, useState } from 'react'
import { Container } from '../login/login';
import { toast, ToastContainer } from 'react-toastify';
import { StoreContext } from '../../../context/StoreContext';
import axios from 'axios';
import styles from "../login/login.module.css";
import { useParams } from 'react-router-dom';
const Reset_password = () => {
const [password, setpassword] = useState('');
const [confirmPassword, setconfirmPassword] = useState('');
    const { url } = useContext(StoreContext);
  const{ token, id} = useParams()
  

    const handleSubmit = async (event) => {
      event.preventDefault();
     if(!password){
       toast.error("Password is required");
       return;
     }
  
      let newurl = `${url}/user/reset-password/${id}/${token}`;

      try {
        const response = await axios.post(newurl, { password });
        console.log(response);
        
        if (response.data.success) {
          console.log(response.data.message); 
            
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error("An error occurred, please try again.");
      }
    };
  
    const handleEmailChange = (event) => {
        setpassword(event.target.value);
    };
  
    return (
      <>
        <Container>
          <div className={styles.forgot_form}>
            <form onSubmit={handleSubmit}>
              <label>
                Password:
                <input
                  type="password"
                  value={password}
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
  )
}

export default Reset_password
