import React from "react";
import "../../styles/components/FormSection.css";

const FormSection = ({ title, children }) => (
  <div className="form-section">
    <h3 className="form-section-title">{title}</h3>
    <div className="form-section-content">{children}</div>
  </div>
);

export default FormSection;
