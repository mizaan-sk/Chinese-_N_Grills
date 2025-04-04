import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { Registerschema } from './register-schema/register_schema';
import styles from "../register/register.module.css";
import { StoreContext } from '../../../context/StoreContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Register = ({changeTabs}) => {
  const { url, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      con_password: '',
    },
    validationSchema: Registerschema,

    onSubmit: async (values) => {
      let newurl = url + "/api/user/register";
      try {
        const response = await axios.post(newurl, values);

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("name",values.name);
          localStorage.setItem("isLoggedIn",true);
         values.name = "";
         values.email = "";
         values.password = "";
         values.con_password = "";
         Swal.fire({
          title: 'Thanks For Registering ',
          text: 'You Will Redirect To Home Page',
        });
         setTimeout(function() {
          navigate("/")
        }, 3000);
        } else {
          toast.error(response.data.message);

        }
        
      } catch (error) {
        toast.error("Registration failed, please try again.");
      }
    },

  });



  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_div}>
          <label htmlFor="Name" className="form-label">Enter Name <span>*</span></label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="exampleInpuText"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? <p className={styles.error}>{errors.name}</p> : ""}
        </div>

        <div className={styles.form_div}>
          <label htmlFor="exampleInputEmail1" className="form-label">Email address <span>*</span></label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="exampleInputEmail1"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? <p className={styles.error}>{errors.email}</p> : ""}
        </div>

        <div className={styles.form_div}>
          <label htmlFor="password" className="form-label">Password <span>*</span></label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? <p className={styles.error}>{errors.password}</p> : ""}
        </div>

        <div className={styles.form_div}>
          <label htmlFor="confirm_password" className="form-label">Confirm Password <span>*</span></label>
          <input
            type="password"
            name="con_password"
            className="form-control"
            id="exampleInputPassword2"
            value={values.con_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.con_password && touched.con_password ? <p className={styles.error}>{errors.con_password}</p> : ""}
        </div>
        <div styles= {{cursor:"pointer"}} onClick={()=>changeTabs(0)}>
    Already Have Account?
        </div>
        <button type="submit" className={styles.btn_new}>Submit</button>
      </form>

      <ToastContainer />
    </>
  );
}
