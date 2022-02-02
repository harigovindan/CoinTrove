import React, { useState } from "react";
import { Row, Col } from "antd";
import { Form, Formik } from "formik";
import "./login.scss";
import { Button, InputField } from "../../../components";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../routes";
import { loginFormValidation } from "./loginFormValidation";

function Login(props) {
  const [formLoading, setFormLoading] = useState(false);

  const handleSubmit = () => {};

  return (
    <div className="login">
      <h4 className="text-center">Login</h4>
      <Formik
        enableReinitialize
        initialValues={{}}
        onSubmit={handleSubmit}
        validationSchema={loginFormValidation}
      >
        {({ values, errors, isValid, dirty, setFieldValue }) => {
          return (
            <Form>
              <Row>
                <Col span={24}>
                  <InputField
                    title="Email Address"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                  />
                </Col>
                <Col span={24}>
                  <div className="login__password-wrapper">
                    <div className="login__forgot-password-link">
                      <Link to={AppRoutes.FORGOT_PASSWORD}>
                        <Button type="link" primary className="p-0">
                          Forgot Password?
                        </Button>
                      </Link>
                    </div>
                    <InputField
                      title="Password"
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                    />
                  </div>
                </Col>
                <Col span={24} className="text-center login__submit-wrapper">
                  <Button
                    fullWidth
                    primary
                    raised
                    htmlType="submit"
                    disabled={!isValid || !dirty || formLoading}
                    loading={formLoading}
                  >
                    Login
                  </Button>
                </Col>
                <div className="login__signup-wrapper">
                  Don't have an account?{" "}
                  <Link to={AppRoutes.REGISTER}>
                    <Button type="link" primary>
                      Sign up
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

export default Login;
