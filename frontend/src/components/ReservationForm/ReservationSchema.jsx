import * as Yup from 'yup';
import React from 'react';

export const ReservationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    date: Yup.date()
        .required('Required'),
    persons: Yup.number()
        .min(1, 'Must be at least 1 person')
        .required('Required'),
    occasion: Yup.string()
        .oneOf(['Birthday Dinner', 'Anniversary Dinner', 'Corporate Dinner', 'Candle Light Dinner'], 'Invalid occasion')
        .required('Required'),
    dining: Yup.string()
        .oneOf(['Anniversary', 'Birthday', 'Family Gathering', 'Office Party', 'Corporate Celebrations', 'Others'], 'Invalid dining option')
        .required('Required'),
});
