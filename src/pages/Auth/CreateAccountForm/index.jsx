import React, { useState } from "react";
import "./createAccountForm.scss";
import { loginFormValidation } from "../Login/loginFormValidation";
import { Form, Formik } from "formik";
import { Col, Row } from "antd";
import {
  Button,
  ButtonGroup,
  InputField,
  MobileNumberField,
} from "../../../components";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../routes";
import { createAccountFormValidation } from "./createAccountFormValidation";
import { SignUpType } from "../../../constants";

function CreateAccountForm() {
  const [formLoading, setFormLoading] = useState(false);

  const handleSubmit = () => {};

  return (
    <div className="create-account-form">
      <h4>Let's create your account</h4>
      <Formik
        enableReinitialize
        initialValues={{
          signUpType: SignUpType.EMAIL,
        }}
        onSubmit={handleSubmit}
        validationSchema={createAccountFormValidation}
      >
        {({ values, errors, isValid, dirty, setFieldValue }) => {
          return (
            <Form>
              <Row>
                <Col span={24} className="mb-5 text-center">
                  <ButtonGroup
                    activeValue={values?.signUpType}
                    options={[
                      { label: "Use Email", value: SignUpType.EMAIL },
                      { label: "Use Mobile", value: SignUpType.MOBILE },
                    ]}
                    onChange={(value) => setFieldValue("signUpType", value)}
                  />
                </Col>
                <Col span={24}>
                  {values?.signUpType === SignUpType.EMAIL ? (
                    <InputField
                      title="Email Address"
                      type="email"
                      name="email"
                      placeholder="Enter email"
                    />
                  ) : (
                    <MobileNumberField
                      title="Mobile number"
                      values={values}
                      setFieldValue={setFieldValue}
                    />
                  )}
                </Col>
                <Col span={24}>
                  <InputField
                    title="Password"
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    required
                  />
                  {values?.password?.length > 10 && (
                    <div className="create-account-form__password-note">
                      {values?.password?.length < 13
                        ? "Password is okay"
                        : "Password is strong"}
                    </div>
                  )}
                </Col>
                <Col span={24}>
                  <InputField
                    title="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    placeholder="Enter Password"
                    required
                  />
                </Col>
                <Col
                  span={24}
                  className="text-center create-account-form__submit-wrapper"
                >
                  <Button
                    fullWidth
                    primary
                    raised
                    htmlType="submit"
                    disabled={!isValid || !dirty || formLoading}
                    loading={formLoading}
                  >
                    Create account
                  </Button>
                </Col>
                <div className="create-account-form__login-wrapper">
                  Already have an account?{" "}
                  <Link to={AppRoutes.LOGIN}>
                    <Button type="link" primary>
                      Login
                    </Button>
                  </Link>
                </div>
              </Row>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default CreateAccountForm;
