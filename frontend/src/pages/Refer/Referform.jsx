import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { ReferSchema } from './ReferSchema';
import styles from './Referform.module.css';
  const Referform = () => {
    const handleSubmit = async (values, { setSubmitting, setStatus }) => {
      try {
        const res = await axios.post('http://localhost:5000/refer/mail', {
          friendEmail: values.friendEmail,
          referrerName: values.referrerName,
          referrerEmail: values.referrerEmail,
        });
  
        if (res.data.success) {
          setStatus({ success: 'Referral email sent successfully!' });
        } else {
          setStatus({ error: 'Failed to send the referral email.' });
        }
      } catch (error) {
        console.error('Error sending referral email:', error);
        setStatus({ error: 'There was an error sending the referral email.' });
      }
      setSubmitting(false);
    };
  
    return (
      <div>
        <Formik
          initialValues={{
            friendEmail: '',
            friendName: '',
            phoneno: '',
          }}
          validationSchema={ReferSchema}
          onSubmit={handleSubmit}
        >
  {({ isSubmitting, status }) => (
            <Form className={styles.refer_form_section}>
              <div className={styles.refer_section}>
                <label>Enter Friend’s Name : <span>*</span></label>
                <Field type="text" name="friendName" />
                <ErrorMessage name="friendName" style={{ color : 'red'}} component="div" className="error" />
              </div>
  
              <div className={styles.refer_section}>
                <label>Enter Friend’s Email :<span>*</span></label>
                <Field type="email" name="friendEmail" />
                <ErrorMessage style={{ color : 'red'}} name="friendEmail" component="div" className="error"/>
              </div>
  
              <div className={styles.refer_section}>
                <label>Enter Friend’s Phone No :<span>*</span></label>
                <Field type="text" name="phoneno" />
                <ErrorMessage style={{ color : 'red'}}  name="phoneno" component="div" className="error" />
              </div>
  
  
              <button type="submit" className={styles.refer_btn} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Referral'}
              </button>
  
              {status && status.success && <p className="success">{status.success}</p>}
              {status && status.error && <p className="error">{status.error}</p>}
            </Form>
          )}
        </Formik>
      </div>
    );
  };
  export default Referform;
