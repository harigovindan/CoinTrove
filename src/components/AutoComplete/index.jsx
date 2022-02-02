import React from "react";
import { AutoComplete as AntAutoComplete, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./autoComplete.scss";

function AutoComplete({ options, onSearch, placeholder }) {
  return (
    <div className="app-auto-complete">
      <AntAutoComplete
        options={options}
        onSearch={onSearch}
        children={
          <Input placeholder={placeholder} prefix={<SearchOutlined />} />
        }
      />
    </div>
  );
}

export default AutoComplete;
