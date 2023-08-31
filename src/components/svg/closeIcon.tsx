import React from "react";

type CloseIconIconPropsType = { height: number; width: number };

const CloseIconIcon = ({ width, height }: CloseIconIconPropsType) => {
    return (
        <svg
            width={width}
            height={height} 
            viewBox="0 0 18 18" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M5.25 5.25L12.75 12.75M5.25 12.75L12.75 5.25" 
                stroke="currentColor" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            />
        </svg>
    );
};

export default CloseIconIcon;

CloseIconIcon.defaultProps = {
    width: "18",
    height: "18",
};
