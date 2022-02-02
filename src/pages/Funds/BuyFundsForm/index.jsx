import React, { useState } from "react";
import "./buyFundsForm.scss";
import { Row, Col } from "antd";
import { Form, Formik } from "formik";
import { buyFundsFormValidation } from "./buyFundsFormValidation";
import { Button, InputField } from "../../../components";
import ButtonGroup from "../../../components/ButtonGroup";

function BuyFundsForm(props) {
  const [amountAvailable, setAmountAvailable] = useState(100);

  const [selectedPercentage, setSelectedPercentage] = useState();

  const [formLoading, setFormLoading] = useState(false);

  const handleSubmit = ({ amount }) => {
    debugger;
  };

  return (
    <div className="buy-funds-form">
      <h4>Buy Funds</h4>
      <Row className="buy-funds-form__details">
        <Col span={12}>
          <h6 className="mb-0">Available to allocate</h6>
          <h5>${amountAvailable}</h5>
        </Col>
        <Col span={12}>
          <h6 className="mb-0">Allocated in Funds</h6>
          <h5>$1000</h5>
        </Col>
      </Row>
      <Formik
        enableReinitialize
        initialValues={{}}
        onSubmit={handleSubmit}
        validationSchema={buyFundsFormValidation}
      >
        {({ values, errors, isValid, dirty, setFieldValue }) => {
          return (
            <Form className="buy-funds-form__form">
              <h6>Enter amount</h6>
              <InputField
                type="number"
                name="amount"
                placeholder="Enter amount"
                showError={false}
              />
              <div className="buy-funds-form__percentage">
                <ButtonGroup
                  onChange={(value) => {
                    setSelectedPercentage(value);
                    setFieldValue("amount", amountAvailable * (value / 100));
                  }}
                  activeValue={selectedPercentage}
                  options={[
                    { label: "10%", value: 10 },
                    { label: "25%", value: 25 },
                    { label: "50%", value: 50 },
                    { label: "100%", value: 100 },
                  ]}
                />
              </div>
              <div className="mt-5">
                <Button
                  primary
                  disabled={!isValid || !dirty || formLoading}
                  htmlType="submit"
                >
                  Buy funds
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default BuyFundsForm;
