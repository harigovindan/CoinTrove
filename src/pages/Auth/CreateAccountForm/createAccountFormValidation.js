import * as Yup from "yup";
import { passwordValidator, confirmPasswordValidator } from "../../../helpers";
import { SignUpType } from "../../../constants";

export const createAccountFormValidation = Yup.object().shape({
  email: Yup.string()
    .nullable()
    .email("Email is not valid")
    .when("signUpType", {
      is: (signUpType) => {
        return signUpType === SignUpType.EMAIL;
      },
      then: Yup.string()
        .email("Email is not valid")
        .nullable()
        .required("Email is required"),
    }),
  mobileNumber: Yup.number()
    .nullable()
    .min(10, "Mobile number should contain only 10 characters")
    .max(10, "Mobile number should contain only 10 characters")
    .when("signUpType", {
      is: (signUpType) => {
        return signUpType === SignUpType.MOBILE;
      },
      then: Yup.number()
        .nullable()
        .required("Mobile number is required")
        .min(10, "Mobile number should contain only 10 characters")
        .max(10, "Mobile number should contain only 10 characters"),
    }),
  isdCode: Yup.string()
    .nullable()
    .when("signUpType", {
      is: (signUpType) => {
        return signUpType === SignUpType.MOBILE;
      },
      then: Yup.string().nullable().required(""),
    }),
  password: passwordValidator,
  confirmPassword: confirmPasswordValidator,
});
