import React, { useContext } from 'react'
import { useFormik } from 'formik';
import {LoginSchema} from "../login/login_schema/login-schema"
import style from "../login/login.module.css";
import { StoreContext } from '../../../context/StoreContext';
import axios from 'axios';
export const Login = () => {
  const {url,setToken, token} = useContext(StoreContext)
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email:"",
      password:"",
    },
   validationSchema: LoginSchema,
   onSubmit: async (values) => {
    // First, handle the Formik submission logic
    console.log(values);

    // Then, handle the login logic
    let newurl = url + "/api/user/login";
    try {
      const response = await axios.post(newurl, values);
      console.log(response);

      if (response.data.success) {
        setToken(response.data.token);
        sessionStorage.setItem("token", response.data.token);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login failed, please try again.");
    }}
  });
  
  
  return (
   <>
  <form  onSubmit={handleSubmit}>

<div className={style.form_div}>
 <label htmlFor="exampleInputEmail1" className="form-label">Email address <span>*</span></label>
 <input type="email" className="form-control" name = "email" id="exampleInputEmail1" aria-describedby="emailHelp" value = {values.email} onChange={handleChange} onBlur={handleBlur}/>
 {
   errors.email ? <p className={style.error}>{errors.email}</p>:""
 } 
</div>

<div className={style.form_div}>
 <label htmlFor="password" className="form-label">Password <span>*</span></label>
 <input type="password" name = "password" className="form-control" id="exampleInputPassword1" value = {values.password} onChange={handleChange} onBlur={handleBlur}/>
 {
   errors.password  ? <p className={style.error}>{errors.password}</p>:""
 } 
</div>

<button type="submit" className={style.btn_new}>Submit</button>
</form>
   

   </>
  )
}

