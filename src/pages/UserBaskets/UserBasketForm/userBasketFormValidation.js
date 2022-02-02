import * as Yup from "yup";

export const userBasketFormValidation = Yup.object().shape({
  name: Yup.string().nullable().required("Name is required"),
  coins: Yup.array()
    .of(
      Yup.object().shape({
        productId: Yup.string().nullable().required("Please select a coin"),
        percentage: Yup.number()
          .nullable()
          .required("Please select a number between 1-100")
          .min(1, "Value should be atleast 1")
          .max(100, "Value should not be above 100"),
      })
    )
    .min(1, "Atleast one coin should be selected"),
});
