import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
      "Email must be a valid @gmail.com address"
    ),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be 6 characters long"),
});

export default validationSchema;
