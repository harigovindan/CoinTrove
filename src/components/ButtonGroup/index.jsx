import React from "react";
import "./buttonGroup.scss";
import { Button } from "antd";

function ButtonGroup({ options = [], onChange, activeValue }) {
  return (
    <div className="ch-button-group">
      {options.map(({ label, value }, i) => (
        <Button
          key={i}
          value={value}
          onClick={(e) => onChange(value)}
          className={activeValue === value ? "active" : ""}
        >
          {label}
        </Button>
      ))}
    </div>
  );
}

export default ButtonGroup;
