import * as Yup from 'yup';
import React from 'react';

export const ReservationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Please Enter Email'),
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Please Enter Name'),
    date: Yup.date()
        .required('Please Enter Date'),
    persons: Yup.number()
        .min(1, 'Must be at least 1 person')
        .required('Must be at least 1 person'),
    occasion: Yup.string()
        .oneOf(['Birthday Dinner', 'Anniversary Dinner', 'Corporate Dinner', 'Candle Light Dinner'], 'Invalid occasion')
        .required('Must be at least 1 Ocassion '),
    dining: Yup.string()
        .oneOf(['Anniversary', 'Birthday', 'Family Gathering', 'Office Party', 'Corporate Celebrations', 'Others'], 'Invalid dining option').required('Must be at least 1 Dining Option')
       ,
});
