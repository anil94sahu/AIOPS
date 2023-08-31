import React from 'react'
import Select from 'react-select'

type SeletctStylePropsType = {
    className?: string;
    label?: string;
    labelInfo?: string;
    nolabel?: boolean;
    mandatory?: boolean;
    errormessage?: any;
    name: string;
    id?: any;
    placeholder?: string;
    onChange: any;
    readonly?: boolean;
    icon?: any;
}

const SeletctStyle = ({
    className,
    label,
    labelInfo,
    nolabel,
    mandatory,
    errormessage,
    readonly,
    icon,
} : SeletctStylePropsType) => {
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
                <Select
                    className="select-style-container"
                    classNamePrefix="select-style"
                    components={{
                        IndicatorSeparator: () => null
                    }}
                    // {...props}
                />
            </div>
            {errormessage && (
                <div className="message-error">
                    <small>{errormessage}</small>
                </div>
            )}
        </div>
    )
}

export default SeletctStyle