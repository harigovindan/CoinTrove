import React from "react";
import PropTypes from "prop-types";
import { Button as AntButton } from "antd";
import "./button.scss";

Button.propTypes = {
  success: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  small: PropTypes.bool,
  outlined: PropTypes.bool,
  disabled: PropTypes.bool,
  link: PropTypes.bool,
  light: PropTypes.bool,
  lessRounded: PropTypes.bool,
  raised: PropTypes.bool,
  animated: PropTypes.bool,
  fullWidth: PropTypes.bool,
  prefixIcon: PropTypes.element,
  suffixIcon: PropTypes.element,
  onClick: PropTypes.func,
};

function Button({
  fullWidth,
  children,
  primary,
  secondary,
  tertiary,
  success,
  small,
  outlined,
  disabled,
  link,
  light,
  raised,
  lessRounded,
  prefixIcon,
  suffixIcon,
  animated,
  onClick,
  className,
  ...props
}) {
  return (
    <AntButton
      disabled={disabled}
      onClick={onClick}
      className={`
      ${primary ? " ant-btn-primary " : ""}
      ${secondary ? " ant-btn-secondary " : ""}
      ${tertiary ? " ant-btn-tertiary " : ""}
      ${success ? " ant-btn-success " : ""}
      ${light ? " ant-btn-light " : ""}
      ${link ? " ant-btn-link " : ""}
      ${small ? " ant-btn-small " : ""}
      ${raised ? " ant-btn-raised " : ""}
       ${lessRounded ? " ant-btn-less-rounded " : ""}
      ${outlined ? " ant-btn-outlined " : ""}
      ${prefixIcon ? " ant-btn-icon-prefix " : ""}
      ${suffixIcon ? " ant-btn-icon-suffix " : ""}
      ${animated ? " ant-btn-animated " : ""}
      ${fullWidth ? " ant-btn-full-width " : ""}
      ${className}`}
      {...props}
    >
      {prefixIcon} {children} {suffixIcon}
    </AntButton>
  );
}

export default Button;
