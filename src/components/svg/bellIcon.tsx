import React from "react";

type BellIconPropsType = { height: number; width: number };

const BellIcon = ({ width, height }: BellIconPropsType) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 18 18" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M3 14.25V13.125H4.5V7.425C4.5 6.375 4.80938 5.43438 5.42813 4.60313C6.04688 3.77188 6.8625 3.25 7.875 3.0375V2.625C7.875 2.3125 7.98438 2.04688 8.20312 1.82812C8.42188 1.60938 8.6875 1.5 9 1.5C9.3125 1.5 9.57813 1.60938 9.79688 1.82812C10.0156 2.04688 10.125 2.3125 10.125 2.625V3.0375C11.1375 3.25 11.9531 3.77188 12.5719 4.60313C13.1906 5.43438 13.5 6.375 13.5 7.425V13.125H15V14.25H3ZM9 16.5C8.5875 16.5 8.23438 16.3531 7.94063 16.0594C7.64688 15.7656 7.5 15.4125 7.5 15H10.5C10.5 15.4125 10.3531 15.7656 10.0594 16.0594C9.76563 16.3531 9.4125 16.5 9 16.5Z" 
                fill="currentColor"
            />
        </svg>
    );
};

export default BellIcon;

BellIcon.defaultProps = {
    width: "18",
    height: "18",
};
