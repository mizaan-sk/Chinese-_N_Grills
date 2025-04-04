import React, { useContext } from 'react';
import style from "./contact_us_form.module.css";
import { Container } from '../../pages/customer_journey/plan_details/journey';
import contact_us_form_img from "../../assets/flex_comp_one/flex_comp_one.png";
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import Swal from 'sweetalert2';

export const Contact_us_form = () => {
  const { url } = useContext(StoreContext);

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name cannot exceed 50 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]+$/, 'Phone number can only contain digits')
      .min(10, 'Phone number must be at least 10 digits')
      .max(15, 'Phone number cannot exceed 15 digits')
      .required('Phone number is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .max(500, 'Message cannot exceed 500 characters')
      .required('Additional message is required'),
  });

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    let newurl = url + "/contact";
    try {
      const response = await axios.post(newurl, values);
      console.log(response.data);

     
        if (response.data.success) {
          Swal.fire({
            title: 'Thanks For Registering',
            showConfirmButton: false,
            timer: 3000,  
            customClass: {
              popup: `${style.custom_class}`,   
             
            },
          });
          resetForm(); 
        } else {
          Swal.fire({
            title: 'Something Went Wrong',
            icon: 'error',
            showConfirmButton: true,
            customClass: {
              popup: `${style.custom_class_red}`,   
            },
          });
        }
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: 'Error Occurred',
        text: 'Please try again later',
        showConfirmButton: true,
            customClass: {
              popup: `${style.custom_class_red}`,   
            },
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container>
      <section className={`${style.contact_form_sect} flex `}>
        <div className={`${style.contact_form_sect_left}`}>
          <img
            src={contact_us_form_img}
            alt="Contact Us"
            title="Contact Us"
            className={style.contact_us_form_img}
          />
        </div>
        <div className={`${style.contact_form_sect_right}`}>
          <div className={style.contact_form}>
            <div className={style.form_text}>
              <p>Contact Us</p>
              <h3>Get In Touch For Booking & Enquiries</h3>
            </div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className={style.contact_form}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="name"
                      component="p"
                      className={style.error_message}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className={style.error_message}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Enter Phone No</label>
                    <Field
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="phone"
                      component="p"
                      className={style.error_message}
                    />
                  </div>

                  <div className={style.form_textarea}>
                    <label htmlFor="message">Additional Message</label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      className="form-control"
                      rows="4"
                    />
                    <ErrorMessage
                      name="message"
                      component="p"
                      className={style.error_message}
                    />
                  </div>

                  <button
                    type="submit"
                    className={style.submitbutton}
                    disabled={isSubmitting} // Disable button when submitting
                  >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </Container>
  );
};
