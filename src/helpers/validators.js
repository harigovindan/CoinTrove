import * as Yup from "yup";

export const emailValidator = Yup.string()
  .min(7, "Should have at least 7 characters")
  .max(50, "Should not exceed 50 characters")
  .email("Email is not valid")
  .required("Email is required");

export const passwordValidator = Yup.string()
  .required("Password is required")
  .nullable()
  .min(10, "Password must be at least 10 characters long");

export const confirmPasswordValidator = Yup.string()
  .required("Password confirmation is required")
  .oneOf([Yup.ref("password"), ""], "Passwords must match");

export const nameValidator = (required, requiredMessage) =>
  required
    ? Yup.string()
        .min(2, "Should have at least 2 characters")
        .max(40, "Should not exceed 40 characters")
        .nullable()
        .required(requiredMessage)
    : Yup.string()
        .nullable()
        .min(2, "Should have at least 2 characters")
        .max(40, "Should not exceed 40 characters");
