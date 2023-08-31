import React from "react";
import Text from "../text";
import Flex from "../flex";

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
    autoFocus?: boolean;
    maxlength?: number;
    icon?: any;
    rows?: number;
    cols?: number;
};

const Textarea = (
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
        autoFocus,
        maxlength,
        icon,
        rows,
        cols,
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
                <textarea
                    className={`form-control ${value ? "form-control-value" : ""} ${
                        formControlClassName ? formControlClassName : ""
                        } ${errormessage ? "error" : ""}`}
                    name={name}
                    
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
                    readOnly={readonly}
                    disabled={disabled}
                    required={required}
                    autoFocus={autoFocus}
                    maxLength={maxlength}
                    rows={rows}
                    cols={cols}
                >
                    {value}
                </textarea>
                {maxlength && (
                    <Flex justifyContent="end">
                        <Text type="SPAN" className="characters-left-text" text={`${value.length}/${maxlength} characters left`} />
                    </Flex>
                )}
            </div>
            {errormessage && (
                <div className="message-error">
                    <small>{errormessage}</small>
                </div>
            )}
        </div>
    );
};

export default Textarea;
