import React from "react";
import "../../styles/components/FormInput.css";

const FormInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  ...rest
}) => (
  <div className="form-input-group">
    {label && (
      <label htmlFor={name} className="form-input-label">
        {label}
      </label>
    )}
    {type === "textarea" ? (
      <textarea
        id={name}
        name={name}
        className={`form-input ${error ? "input-error" : ""}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    ) : (
      <input
        id={name}
        name={name}
        type={type}
        className={`form-input ${error ? "input-error" : ""}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...rest}
      />
    )}
    {error && <div className="input-error-message">{error}</div>}
  </div>
);

export default FormInput;
