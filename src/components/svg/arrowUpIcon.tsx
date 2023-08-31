import React from "react";

type ArrowUpIconPropsType = { height: number; width: number };

const ArrowUpIcon = ({ width, height }: ArrowUpIconPropsType) => {
    return (
        <svg
            width={width}
            height={height} 
            viewBox="0 0 9 10" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M4.42857 1.36377L7.85714 4.79234M4.42857 1.36377L1 4.79234M4.42857 1.36377V9.36377" 
                stroke="white" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArrowUpIcon;

ArrowUpIcon.defaultProps = {
    width: "9",
    height: "10",
};
