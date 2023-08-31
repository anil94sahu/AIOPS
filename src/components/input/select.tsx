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
    name: string;
    id?: any;
    placeholder?: string;
    onChange: any;
    readonly?: boolean;
    disabled?: boolean;
    required?: boolean;
    icon?: any;
    multiple?: any;
    options?: any;
    defaultValue?: string;
};

const Select = (
    {
        className,
        label,
        labelInfo,
        nolabel,
        mandatory,
        value,
        formControlClassName,
        errormessage,
        name,
        id,
        placeholder,
        onChange,
        readonly,
        disabled,
        required,
        icon,
        multiple,
        options,
        defaultValue,
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
            <div className={`form-text-icon ${icon ? "form-text-icon-with-icon" : ""}`}>
                {icon && <div className="form-icon">{icon}</div>}
                <select
                    className={`form-control ${value ? "form-control-value" : ""} ${formControlClassName ? formControlClassName : ""} ${errormessage ? "error" : ""}`}
                    name={name}
                    value={value}
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
                    disabled={disabled}
                    required={required}
                    multiple={multiple}
                    defaultValue={defaultValue}
                >
                    <option value="" disabled selected>{placeholder}</option>
                    {options?.map((x:any, y:any) => (
                        <option key={y} value={x.value}>
                            {x.label}
                        </option>
                    ))}
                </select>
            </div>
            {errormessage && (
                <div className="message-error">
                    <small>{errormessage}</small>
                </div>
            )}
        </div>
    );
};

export default Select;
