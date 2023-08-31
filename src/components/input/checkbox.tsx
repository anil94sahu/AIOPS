import React from "react";
import CheckboxTickIcon from "../svg/checkboxTickIcon";

type CheckboxPropsType = {
  mb0?: boolean;
  isChecked?: any;
  readonly?: boolean;
  value: any;
  id: any;
  onChange: any;
  label: any;
  mandatory?: boolean;
  errormessage?: any;
};

const Checkbox = ({
  mb0,
  isChecked,
  readonly,
  value,
  id,
  onChange,
  label,
  mandatory,
  errormessage,
}: CheckboxPropsType) => {
  return (
    <div>
      <div
        className={`form-check ${mb0 ? "mb-0" : ""} ${
          isChecked ? "form-check-checked" : ""
        } ${readonly ? "form-check-readonly" : ""}`}
      >
        <div className="form-check-box">
          {isChecked && (
            <div className="tick-icon">
              <CheckboxTickIcon />
            </div>
          )}
          <input
            className="form-check-input"
            type="checkbox"
            value={value}
            id={id}
            onChange={onChange}
            checked={isChecked}
            readOnly={readonly}
          />
        </div>
        <label className="form-check-label" htmlFor={id}>
          {label}{" "}
          {mandatory && <span className="text-primary text-mandatory">*</span>}
        </label>
      </div>
      {errormessage && (
        <div className="message-error">
          <small>{errormessage}</small>
        </div>
      )}
    </div>
  );
};

export default Checkbox;
