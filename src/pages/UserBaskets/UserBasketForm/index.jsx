import React, { useState } from "react";
import "./userBasketForm.scss";
import { FieldArray, Form, Formik } from "formik";
import { loginFormValidation } from "../../Auth/Login/loginFormValidation";
import { Col, Row } from "antd";
import { Button, InputField, DropdownField } from "../../../components";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../../routes";
import { userBasketFormValidation } from "./userBasketFormValidation";
import { MinusCircleOutlined } from "@ant-design/icons";

function UserBasketForm(props) {
  const [formLoading, setFormLoading] = useState(false);

  const handleSubmit = (values) => {};

  return (
    <div className="user-basket-form">
      <h4>New Basket</h4>
      <Formik
        enableReinitialize
        initialValues={{
          coins: [{}],
        }}
        onSubmit={handleSubmit}
        validationSchema={userBasketFormValidation}
      >
        {({ values, errors, isValid, dirty, setFieldValue }) => {
          return (
            <Form>
              <Row>
                <Col span={24}>
                  <InputField
                    title="Basket name"
                    type="text"
                    name="name"
                    placeholder="Enter Basket name"
                  />
                </Col>
                <Col span={24}>
                  <h5 className="mb-4 text-bd">Add your coins</h5>
                  <FieldArray
                    name="coins"
                    render={(arrayHelpers) => (
                      <React.Fragment>
                        {values?.coins?.map((coin, fieldIndex) => (
                          <Row
                            key={fieldIndex}
                            gutter={[20, 20]}
                            align="top"
                            className="mb-3 user-basket-form__coin"
                          >
                            <Col span={4} style={{ marginTop: "45px" }}>
                              Coin #{fieldIndex + 1}
                            </Col>
                            <Col span={9}>
                              <DropdownField
                                title="Select Coin"
                                name={`coins[${fieldIndex}].productId`}
                                value={values.coins[fieldIndex].productId}
                                className="mb-0"
                                placeHolder="Select"
                                options={[]}
                              />
                            </Col>
                            <Col span={9}>
                              <InputField
                                title="Enter percentage"
                                type="number"
                                name={`coins[${fieldIndex}].percentage`}
                                placeholder="Enter percentage"
                              />
                            </Col>
                            <Col span={2} style={{ marginTop: "45px" }}>
                              {fieldIndex > 0 && (
                                <MinusCircleOutlined
                                  onClick={() =>
                                    arrayHelpers.remove(fieldIndex)
                                  }
                                />
                              )}
                            </Col>
                          </Row>
                        ))}
                        <Row>
                          <Col span={24}>
                            <Button
                              primary
                              small
                              onClick={() =>
                                arrayHelpers.insert(values.coins.length, {})
                              }
                            >
                              Add Coin
                            </Button>
                          </Col>
                        </Row>
                      </React.Fragment>
                    )}
                  />
                </Col>
              </Row>
              <Row gutter={[20, 20]} className="mt-5 mb-5">
                <Col span={24} className="text-right">
                  <Button tertiary htmlType="button">
                    Cancel
                  </Button>
                  <Button
                    primary
                    className="ml-2"
                    htmlType="submit"
                    disabled={!isValid || formLoading}
                    loading={formLoading}
                  >
                    Save
                  </Button>
                </Col>
              </Row>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default UserBasketForm;
