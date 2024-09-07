import * as Yup from 'yup';
export const ReferSchema = Yup.object().shape({
  friendEmail: Yup.string()
  .email('Invalid email')
  .required('Required'),
  friendName: Yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),
  phoneno: Yup.string()
  .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
  .required('Required'),
});