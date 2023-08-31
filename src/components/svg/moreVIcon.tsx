import React from "react";

type MoreVIconPropsType = { height: number; width: number };

const MoreVIcon = ({ width, height }: MoreVIconPropsType) => {
    return (
        <svg
            width={width}
            height={height} 
            viewBox="0 0 4 14" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M1.75 2.25C2.16421 2.25 2.5 1.91421 2.5 1.5C2.5 1.08579 2.16421 0.75 1.75 0.75C1.33579 0.75 1 1.08579 1 1.5C1 1.91421 1.33579 2.25 1.75 2.25Z" 
                stroke="#1E6AFF" 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            />
            <path 
                d="M1.75 7.75C2.16421 7.75 2.5 7.41421 2.5 7C2.5 6.58579 2.16421 6.25 1.75 6.25C1.33579 6.25 1 6.58579 1 7C1 7.41421 1.33579 7.75 1.75 7.75Z" 
                stroke="#1E6AFF" 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            />
            <path 
                d="M1.75 13.25C2.16421 13.25 2.5 12.9142 2.5 12.5C2.5 12.0858 2.16421 11.75 1.75 11.75C1.33579 11.75 1 12.0858 1 12.5C1 12.9142 1.33579 13.25 1.75 13.25Z" 
                stroke="#1E6AFF" 
                stroke-width="1.5" 
                stroke-linecap="round" 
                stroke-linejoin="round"
            />
        </svg>
    );
};

export default MoreVIcon;

MoreVIcon.defaultProps = {
    width: "4",
    height: "14",
};
