import React from 'react'

type IconContentCardPropsType = {
    children: React.ReactNode;
    iconBg?: boolean;
    icon?: any;
    className?: string;
};

const IconContentCard = ({icon, children, className, iconBg} : IconContentCardPropsType) => {
    return (
        <div className={`icon-text-card ${className ? className : ''}`}>
            <div className={`itc-icon ${iconBg ? 'icon-bg' : ''}`}>
                {icon}
            </div>
            <div className="itc-content">{children}</div>
        </div>
    )
}

export default IconContentCard