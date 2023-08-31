import React from "react";

type SecurityIconPropsType = { height: number; width: number };

const SecurityIcon = ({ width, height }: SecurityIconPropsType) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 18 23" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M9 20.6719C10.9875 20.0156 12.6328 18.8109 13.9359 17.0578C15.2391 15.3047 16.0031 13.3406 16.2281 11.1656H9V1.74375L1.6875 4.47188V9.98438C1.6875 10.2094 1.69219 10.4016 1.70156 10.5609C1.71094 10.7203 1.73438 10.9219 1.77187 11.1656H9V20.6719ZM9 22.3031C8.90625 22.3031 8.81719 22.2938 8.73281 22.275C8.64844 22.2563 8.55937 22.2281 8.46562 22.1906C5.85938 21.3094 3.79688 19.7297 2.27813 17.4516C0.759375 15.1734 0 12.675 0 9.95625V4.44375C0 4.0875 0.103125 3.76406 0.309375 3.47344C0.515625 3.18281 0.778125 2.97188 1.09687 2.84063L8.40938 0.1125C8.61562 0.0375 8.8125 0 9 0C9.1875 0 9.38437 0.0375 9.59062 0.1125L16.9031 2.84063C17.2219 2.97188 17.4844 3.18281 17.6906 3.47344C17.8969 3.76406 18 4.0875 18 4.44375V9.95625C18 12.675 17.2406 15.1734 15.7219 17.4516C14.2031 19.7297 12.1406 21.3094 9.53438 22.1906C9.44063 22.2281 9.35156 22.2563 9.26719 22.275C9.18281 22.2938 9.09375 22.3031 9 22.3031Z" 
                fill="currentColor"
            />
        </svg>
    );
};

export default SecurityIcon;

SecurityIcon.defaultProps = {
    width: "18",
    height: "23",
};