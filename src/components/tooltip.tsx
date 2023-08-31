'use client'

import React, { useState } from 'react'

type TooltipPropsType = {
    text: any;
    children: React.ReactNode;
}

const Tooltip = ({text, children} : TooltipPropsType) => {
    const [show, setShow] = useState(false);
    return (
        <div className="tooltip-wrapper">
            {show && (
                <div className="tooltip-box">
                    {text}
                </div>
            )}
            <div
                className="tooltip-link"
                onClick={() => setShow(state => !state)}
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
            >
                {children}
            </div>
        </div>
    )
}

export default Tooltip