import React from "react";

import "./form-input.scss";

const FormInput = ({ handleChange, label, ...otherPops }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherPops} />
    {label ? (
      <label
        className={`${otherPops.value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
