import React from "react";

type InputPropsType = {
    className?: string;
    label?: string;
    labelInfo?: string;
    nolabel?: boolean;
    mandatory?: boolean;
    value: any;
    formControlClassName?: string;
    errormessage?: any;
    type: React.HTMLInputTypeAttribute;
    name: string;
    id?: any;
    placeholder?: string;
    onChange: any;
    readonly?: boolean;
    disabled?: boolean;
    required?: boolean;
    autoFocus?: boolean;
    maxlength?: number;
    icon?: any;
    icon1?: any;
    iconRIght?: boolean;
};

const Input = (
    {
        className,
        label,
        labelInfo,
        nolabel,
        mandatory,
        value,
        formControlClassName,
        errormessage,
        type,
        name,
        id,
        placeholder,
        onChange,
        readonly,
        disabled,
        required,
        autoFocus,
        maxlength,
        icon,
        iconRIght,
        icon1
    }: InputPropsType) => {
    return (
        <div className={`form-field ${className ? className : ""} ${readonly ? "form-field-readonly" : ""}`}>
            {!nolabel && (
                <label className={`form-label`}>
                    {label}{" "}
                    {labelInfo && <span className="form-label-info">{labelInfo}</span>}{" "}
                    {mandatory && <span className="text-primary text-mandatory">*</span>}
                </label>
            )}
            <div className={`form-text-icon ${iconRIght ? 'form-icon-right' : ''} ${icon ? "form-text-icon-with-icon" : ""}`}>
                {icon && <div className="form-icon">{icon}</div>}
                {icon1 && <div className="form-icon1">{icon1}</div>}
                <input
                    className={`form-control ${value ? "form-control-value" : ""} ${
                    formControlClassName ? formControlClassName : ""
                    } ${errormessage ? "error" : ""}`}
                    type={type}
                    name={name}
                    value={value}
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
                    readOnly={readonly}
                    disabled={disabled}
                    required={required}
                    autoFocus={autoFocus}
                    maxLength={maxlength}
                />
            </div>
            {errormessage && type != "checkbox" && (
                <div className="message-error">
                    <small>{errormessage}</small>
                </div>
            )}
        </div>
    );
};

export default Input;
