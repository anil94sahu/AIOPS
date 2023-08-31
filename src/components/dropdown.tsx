import React, { useState } from 'react'
import Button from './button';
import ChevronDownIcon from './svg/chevronDownIcon';
import NavListButton from './navListButton';

type DropdownPropsType = {
    text: string;
    list?: any;
    secondary?: boolean;
}

const Dropdown = ({text, list, secondary} : DropdownPropsType) => {
    const [isOpenDropdown, setIsOpenDropdown] = useState(false);
    const handleClick = () => {
        setIsOpenDropdown(state=>!state);
    }
    return (
        <div className={`dropdown-wrap`}
            onMouseEnter={() => setIsOpenDropdown(true)}
            onMouseLeave={() => setIsOpenDropdown(false)}
        >
            <Button
                type="button"
                className="dropdown-toggle"
                text={text}
                icon={<ChevronDownIcon up={isOpenDropdown} />}
                onClick={handleClick}
            />
            {isOpenDropdown && 
                <div className="dropdown-menu">
                    <div className="dropdown-main">
                        <NavListButton
                            lists={list}
                        />
                    </div>
                </div>
            }
        </div>
    )
}

export default Dropdown