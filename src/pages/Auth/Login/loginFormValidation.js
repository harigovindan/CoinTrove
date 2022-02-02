import * as Yup from "yup";
import {emailValidator, passwordValidator} from "../../../helpers";

export const loginFormValidation = Yup.object().shape({
  email: emailValidator,
  password: passwordValidator,
});

