import * as Yup from "yup";
const phoneNumberRegex =
  /((\+38)?\(?\d{3}\)?[\s-]?(\d{7}|\d{3}[\s-]\d{2}[\s-]\d{2}))/;
export const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must contain at least 3 characters")
    .max(50, "Name can not exceed 50 characters")
    .matches(/^[aA-zZ\s]+$/, "Please use Latin alphabet")
    .required("Required field"),
  number: Yup.string()
    .matches(phoneNumberRegex, "Phone number must be like xxx-xxx-xx-xx")
    .required("Required field"),
});
export const registerUserSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(40, "Name must be less than 20 characters")
    .matches(/^[aA-zZ\s]+$/, "Please use Latin alphabet")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .matches(/@[^.]*\./, "Please correct the email")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password length must be at least 8 characters")
    .required("Password is required"),
});

export const loginUserSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password length must be at least 8 characters")
    .required("Password is required"),
});
