import React, { useState } from "react";
import { Select } from "antd";
import "./dropdownField.scss";
import { Field, ErrorMessage } from "formik";
import Error from "../Error";
import { disableAutocomplete } from "../../helpers";

const { Option } = Select;

function DropdownField({
  name,
  title,
  setFieldValue,
  optionLabelProp,
  options,
  placeHolder,
  onChange,
  value,
  showSearch,
  onSearch,
  onSelect,
  disabled,
  showArrow = true,
  mode,
  loading = false,
  defaultValue,
  className,
  suffixIcon,
  disableForm,
}) {
  const handleChange = (value) => {
    if (setFieldValue) setFieldValue(name, value);
  };

  const handleFilter = (input, option) =>
    option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0;

  return !disableForm ? (
    <Field name={name}>
      {({ field, form: { touched, errors, setFieldTouched }, meta }) => {
        return (
          <div className={`dropdown-field ${className}`}>
            {title && <div className="dropdown-field__title">{title}</div>}
            <Select
              suffixIcon={suffixIcon}
              options={options}
              placeholder={placeHolder}
              mode={mode}
              onBlur={() => setFieldTouched(name)}
              onChange={onChange ? onChange : handleChange}
              onSearch={onSearch ? onSearch : undefined}
              onSelect={onSelect ? onSelect : undefined}
              showSearch={showSearch}
              optionLabelProp={optionLabelProp}
              filterOption={showSearch ? handleFilter : undefined}
              disabled={disabled}
              showArrow={showArrow}
              autoComplete="none"
              onFocus={disableAutocomplete}
              dropdownMatchSelectWidth={false}
              value={value}
              loading={loading}
              defaultValue={defaultValue}
            />
            <ErrorMessage name={name}>
              {(message) => (
                <Error className={`${name}__error`} message={message} />
              )}
            </ErrorMessage>
          </div>
        );
      }}
    </Field>
  ) : (
    <div className={`dropdown-field ${className}`}>
      {title && <div className="dropdown-field__title">{title}</div>}
      <Select
        suffixIcon={suffixIcon}
        options={options}
        placeholder={placeHolder}
        mode={mode}
        onChange={onChange ? onChange : handleChange}
        onSearch={onSearch ? onSearch : undefined}
        onSelect={onSelect ? onSelect : undefined}
        showSearch={showSearch}
        optionLabelProp={optionLabelProp}
        filterOption={showSearch ? handleFilter : undefined}
        disabled={disabled}
        showArrow={showArrow}
        dropdownMatchSelectWidth={false}
        value={value}
        loading={loading}
        defaultValue={defaultValue}
      />
    </div>
  );
}

export default DropdownField;
