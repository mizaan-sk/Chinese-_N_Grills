import * as Yup from 'yup';

export const ReferSchema = Yup.object().shape({
    friendEmail: Yup.string().email('Invalid email').required('Friend’s email is required'),
    referrerName: Yup.string().required('Your name is required'),
    referrerEmail: Yup.string().email('Invalid email').required('Your email is required'),
});
