import React from 'react'
import Text from './text'

type IconTextNumberCardPropsType = {
    text: string;
    number: string;
    icon?: any;
}

const IconTextNumberCard = ({
    text,
    number,
    icon,
} : IconTextNumberCardPropsType) => {
    return (
        <div className="icont-text-number-card">
            <div className="itn-main">
                <div className="itn-icon">
                    {icon}
                </div>
                <div className="itn-content">
                    <Text type="SPAN" className="itn-content-text" text={text} />
                    <Text type="H3" className="itn-content-number" text={number} />
                </div>
            </div>
        </div>
    )
}

export default IconTextNumberCard