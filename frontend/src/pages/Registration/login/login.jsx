import React, { useContext, useState } from 'react'
import { useFormik } from 'formik';
import {LoginSchema} from "../login/login_schema/login-schema"
import style from "../login/login.module.css";
import { StoreContext } from '../../../context/StoreContext';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

export const Login = ({changeTabs}) => {
  const navigate = useNavigate();
const [Eye, setEye] = useState(false)
const EyeChange = () =>{
  setEye(!Eye)
}
  const {url,setToken, token} = useContext(StoreContext)
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email:"",
      password:"",
    },
   validationSchema: LoginSchema,
   onSubmit: async (values) => {
    console.log(values);
    let newurl = url + "/api/user/login";
    try {
      const response = await axios.post(newurl, values);
      console.log(response);

      if (response.data.success) {
        setToken(response.data.token);
        sessionStorage.setItem("token", response.data.token);
values.email = "";
values.password = "";
Swal.fire({
  title: 'Thanks For Registering ',
  text: 'You Will Redirect To Home Page',
});
setTimeout(function() {
  navigate("/")
}, 3000);
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

<input type={Eye ? "text" : "password"}  name = "password" className="form-control" id="exampleInputPassword1" value ={values.password} onChange={handleChange} onBlur={handleBlur}/>
 {
   errors.password  ? <p className={style.error}>{errors.password}</p>:""
 }          <span className={style.eye_icon} onClick={EyeChange} role="button">
 {Eye ?  <IoIosEye />: <IoIosEyeOff />}  {/* Switch icons */}
</span>

</div>
<div style= {{cursor:"pointer", textDecoration:"underline"}} onClick={()=>changeTabs(1)}>
         New Here? Click To Register
        </div>
   <Link to = "/forgot-password">
   <div style= {{cursor:"pointer", marginTop:"10px"}} >
        Forgot Password?
        </div>
   </Link>
   
<button type="submit" className={style.btn_new}>Submit</button>
</form>
   

   </>
  )
}

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  overflow: hidden;
`