import React from "react";
import "./FormGroup.css";

const FormGroup = ({ label, type, value }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type={type} value={value}   />
    </div>
  );
};

export default FormGroup;
