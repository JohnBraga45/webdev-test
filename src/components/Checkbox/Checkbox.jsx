import React from "react";
import "./Checkbox.css";

const Checkbox = ({ label, checked = false }) => {
  return (
    <label className="checkbox-label">
      <input type="checkbox" defaultChecked={checked} />
      {label}
    </label>
  );
};

export default Checkbox;
