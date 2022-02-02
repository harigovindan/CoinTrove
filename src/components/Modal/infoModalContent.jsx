import React from "react";
import "./infoModalContent.scss";

function InfoModalContent({ title, description }) {
  return (
    <div className="info-modal-content">
      <div className="info-modal-content__icon-wrapper">
        <span className="info-modal-content__icon-bg">
          <i className="icon-success" />
        </span>
      </div>
      <div className="info-modal-content__title">{title}</div>
      <div className="info-modal-content__description">{description}</div>
    </div>
  );
}

export default InfoModalContent;
