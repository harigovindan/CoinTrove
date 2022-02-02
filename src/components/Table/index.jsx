import React from "react";
import { Table as AntTable } from "antd";
import "./table.scss";

function Table({ className, ...props }) {
  return (
    <AntTable
      {...props}
      className={`app-table ${className}`}
      pagination={false}
    />
  );
}

export default Table;
