import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import axios from 'axios';
import styles from './ReservationForm.module.css';
import { ReservationSchema } from './ReservationSchema';
import { Container } from '../../pages/customer_journey/plan_details/journey';
import { toast, ToastContainer } from 'react-toastify';
import * as Yup from "yup";

const ReservationForm = () => {
  const today = new Date().toISOString().split('T')[0]; // Get today's date in 'YYYY-MM-DD' format

  const HandleSubmit = async (values, { resetForm }) => {
    try {

      const res = await axios.post('http://localhost:5000/reservation/table', {
        email: values.email,
        name: values.name,
        date: values.date,
        persons: values.persons,
        occasion: values.occasion,
        dining: values.dining,
      });

      if (res.data.success) {
        toast.success('Table reserved successfully!');
        resetForm();
      } else {
        toast.error('Failed to reserve the table.');
      }
    } catch (error) {
      console.error('Error:');
      toast.error('There was an error in reserving the table.');
    }
  };

  return (
    <>
      <ToastContainer />
      <div className={styles.ReservationForm_MainSection}>
        <Container>
          <h1>Reserve Your Table</h1>
          <Formik
            initialValues={{
              name: '',
              email: '',
              date: '',
              persons: '',
              occasion: '',
              dining: '',
            }}
            validationSchema={ReservationSchema}
            onSubmit={HandleSubmit}
          >
            {() => (
              <Form>
                <div className={styles.Reservation_White} id='res'>

                  <div className={styles.Reservation_Manage}>
                    <div className={styles.Input_Section}>
                      <Field name="name" type="text" placeholder="Enter Name" className={styles.select_feild} />
                      <ErrorMessage name="name" component="div" style={{ color: 'red' }} className="error-message" />
                    </div>

                    <div className={styles.Input_Section}>
                      <Field name="email" type="email" placeholder="Enter Email" className={styles.select_feild} />
                      <ErrorMessage name="email" component="div" style={{ color: 'red' }} className="error-message">

                      </ErrorMessage>
                    </div>

                    <div className={styles.Input_Section}>
                      <Field name="occasion" as="select" className={styles.select_feild}>
                        <option value="">Select an occasion</option>
                        <option value="Birthday Dinner">Birthday Dinner</option>
                        <option value="Anniversary Dinner">Anniversary Dinner</option>
                        <option value="Corporate Dinner">Corporate Dinner</option>
                        <option value="Candle Light Dinner">Candle Light Dinner</option>
                      </Field>
                      <ErrorMessage name="occasion" component="div" style={{ color: 'red' }} className="error-message" />
                    </div>

                    <div className={styles.Input_Section}>
                      <Field
                        name="date"
                        type="date"
                        placeholder="Enter Date"
                        className={styles.select_feild}
                        min={today} // Prevents selection of past dates
                      />
                      <ErrorMessage name="date" component="div" style={{ color: 'red' }} className="error-message" />
                    </div>

                    <div className={styles.Input_Section}>
                      <Field name="persons" type="number" placeholder="No Of Persons" className={styles.select_feild} />
                      <ErrorMessage name="persons" component="div" style={{ color: 'red' }} className="error-message" />
                    </div>

                    <div className={styles.Input_Section}>
                      <Field name="dining" as="select" className={styles.select_feild} >
                        <option value="">Select a dining option</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Family Gathering">Family Gathering</option>
                        <option value="Office Party">Office Party</option>
                        <option value="Corporate Celebrations">Corporate Celebrations</option>
                        <option value="Others">Others</option>
                      </Field>
                      <ErrorMessage name="dining" component="div" style={{ color: 'red' }} className="error-message" />
                    </div>
                  </div>
                  <div className={styles.submits_button}>
                    <button type="submit">Reserve Table</button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </Container>
      </div>
    </>
  );
};

export default ReservationForm;
