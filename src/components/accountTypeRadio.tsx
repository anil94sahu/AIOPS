import React from 'react'
import Image from 'next/image';

type AccountTypeRadioPropsType = {
    value: string; 
    name: string;
    isChecked: boolean;
    onChange: any;
    icon: string;
    inActive?: boolean;
    disabled?: boolean;
};

const AccountTypeRadio = ({
    value, 
    name, 
    isChecked, 
    onChange, 
    icon,
    inActive,
    disabled
    }: AccountTypeRadioPropsType) => {
    return (
        <div className={`account-type-radio-card ${inActive ? "inactive" : ""} ${isChecked ? "active" : ""} ${disabled ? "disabled" : ""}`}>
            <div className="atr-icon">
                <Image src={icon} alt={value} />
            </div>
            <input
                className="account-type-radio-field"
                type="radio"
                value={value}
                id={name}
                name={name}
                checked={isChecked}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    )
}

export default AccountTypeRadio