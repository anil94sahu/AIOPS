import React from "react";

type GrowthIconPropsType = { height: number; width: number };

const GrowthIcon = ({ width, height }: GrowthIconPropsType) => {
    return (
        <svg
            width={width}
            height={height} 
            viewBox="0 0 20 12" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M14 0L16.29 2.29L11.41 7.17L7.41 3.17L0 10.59L1.41 12L7.41 6L11.41 10L17.71 3.71L20 6V0H14Z" 
                fill="currentColor"
            />
        </svg>
    );
};

export default GrowthIcon;

GrowthIcon.defaultProps = {
    width: "20",
    height: "12",
};
