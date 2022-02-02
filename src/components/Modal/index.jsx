import React from "react";
import PropTypes from "prop-types";
import { Modal as AntModal } from "antd";
import "./modal.scss";

Modal.propTypes = {
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
  width: PropTypes.string,
};

function Modal({
  className,
  visible,
  children,
  onCancel,
  info,
  width,
  ...props
}) {
  return info ? (
    AntModal.info({
      ...props,
    })
  ) : (
    <AntModal
      width={width}
      destroyOnClose
      className={`ch-modal ${className}`}
      visible={visible}
      onCancel={onCancel}
      maskClosable={false}
      keyboard={false}
      footer={null}
      {...props}
    >
      {children}
    </AntModal>
  );
}

export default Modal;
