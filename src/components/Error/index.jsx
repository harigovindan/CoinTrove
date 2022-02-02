import React, { FC } from "react";
import "./error.scss";
import PropTypes from "prop-types";
import Slider from "../Slider";

ErrorMessage.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
};

function ErrorMessage({ message, className }) {
  return <div className={`input__error ${className}`}>{message}</div>;
}

export default ErrorMessage;
