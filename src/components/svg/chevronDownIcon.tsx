import React from "react";

type ChevronDownIconPropsType = { height: number; width: number, left?: boolean, right?: boolean, up?: boolean, };

const ChevronDownIcon = ({ width, height, left, right, up }: ChevronDownIconPropsType) => {
    return (
        <svg
            style={{transform: left ? 'rotate(90deg)' : right ? 'rotate(-90deg)' : up ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform ease-in 0.2s'}}
            width={width}
            height={height} 
            viewBox="0 0 18 18" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M14.6228 5.99159L9.00006 11.4726L3.37731 5.99159C3.27685 5.89346 3.14199 5.83853 3.00156 5.83853C2.86112 5.83853 2.72627 5.89346 2.62581 5.99159C2.57716 6.03925 2.53852 6.09613 2.51214 6.15891C2.48576 6.2217 2.47217 6.28911 2.47217 6.35721C2.47217 6.42531 2.48576 6.49273 2.51214 6.55551C2.53852 6.61829 2.57716 6.67518 2.62581 6.72284L8.60743 12.5548C8.71248 12.6572 8.85336 12.7145 9.00006 12.7145C9.14675 12.7145 9.28763 12.6572 9.39268 12.5548L15.3743 6.72396C15.4233 6.67627 15.4622 6.61924 15.4888 6.55625C15.5154 6.49326 15.5291 6.42558 15.5291 6.35721C15.5291 6.28884 15.5154 6.22116 15.4888 6.15817C15.4622 6.09518 15.4233 6.03816 15.3743 5.99046C15.2738 5.89234 15.139 5.8374 14.9986 5.8374C14.8581 5.8374 14.7233 5.89234 14.6228 5.99046V5.99159Z" 
                fill="currentColor"
            />
        </svg>
    );
};

export default ChevronDownIcon;

ChevronDownIcon.defaultProps = {
    width: "18",
    height: "18",
};