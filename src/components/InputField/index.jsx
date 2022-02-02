import React, { FC } from "react";
import { Field, ErrorMessage } from "formik";
import { Input } from "antd";
import Error from "../Error";
import "./inputField.scss";

const InputField = (props) => {
  const {
    name,
    type,
    title,
    mt,
    rounded,
    classes,
    addonBefore,
    readOnly,
    onChange,
    value,
    disabled,
    prefix,
    rows = 6,
    showError = true,
  } = props;

  return (
    <div
      className={classes ? classes : `input-field-wrapper`}
      style={{ marginTop: `${mt}rem` }}
    >
      <div style={{ position: "relative" }}>
        {title && <p className="input-field__title">{title}</p>}
        <Field
          className={`input-field`}
          as={type === "textarea" ? Input.TextArea : Input}
          {...props}
        />
      </div>
      {showError && (
        <ErrorMessage name={name}>
          {(message) => (
            <Error className={`${name}__error`} message={message} />
          )}
        </ErrorMessage>
      )}
    </div>
  );
};

export default InputField;
