import React from "react";
import PropTypes from "prop-types";
import { Slider as AntSlider } from "antd";
import "./slider.scss";

Slider.propTypes = {
  range: PropTypes.bool,
};

function Slider({ range, defaultValue, value, onChange, ...props }) {
  return (
    <AntSlider
      defaultValue={defaultValue}
      range={range}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}

export default Slider;
