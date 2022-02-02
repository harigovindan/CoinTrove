import * as Yup from "yup";

export const buyFundsFormValidation = Yup.object().shape({
  amount: Yup.number()
    .nullable()
    .typeError("Value is invalid")
    .required("Amount is required"),
});
