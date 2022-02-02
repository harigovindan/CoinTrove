import React from "react";
import { Row, Col } from "antd";
import "./mobileNumberField.scss";
import { DropdownField, InputField } from "../index";

function MobileNumberField({ values, setFieldValue, title }) {
  return (
    <div className="mobile-number-field">
      {title && <div className="mobile-number-field__title">{title}</div>}
      <Row gutter={[10, 0]}>
        <Col span={4}>
          <DropdownField
            name="isdCode"
            value={values?.isdCode}
            className="mb-0"
            placeHolder=""
            options={[]}
            setFieldValue
          />
        </Col>
        <Col span={20}>
          <InputField
            type="number"
            name="mobileNumber"
            placeholder="Enter mobile"
          />
        </Col>
      </Row>
    </div>
  );
}

export default MobileNumberField;
