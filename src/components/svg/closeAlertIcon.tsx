import React from "react";

type CloseAlertIconPropsType = { height: number; width: number };

const CloseAlertIcon = ({ width, height }: CloseAlertIconPropsType) => {
    return (
        <svg
            width={width}
            height={height} 
            viewBox="0 0 12 13" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M12 1.70857L10.7914 0.5L6 5.29143L1.20857 0.5L0 1.70857L4.79143 6.5L0 11.2914L1.20857 12.5L6 7.70857L10.7914 12.5L12 11.2914L7.20857 6.5L12 1.70857Z" 
                fill="currentColor"
            />
        </svg>
    );
};

export default CloseAlertIcon;

CloseAlertIcon.defaultProps = {
    width: "12",
    height: "13",
};
