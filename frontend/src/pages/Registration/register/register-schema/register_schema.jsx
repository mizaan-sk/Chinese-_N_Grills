import * as yup from 'yup';

export const Registerschema = yup.object().shape({
  name: yup.string().required().required("Please Enter Name"),
  email: yup.string().email().required("Please Enter Valid Email"),
  password: yup
  .string()
  .required("Please Enter Your Password")
  .matches(
    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
    "Password must contain at least 8 characters, one uppercase, one number and one special case character"
  ),
  con_password:yup
  .string()
  .required("Please Confirm Your Password")
  .oneOf([yup.ref('password'), null], "Passwords don't match.")
});
