import React from "react";

type FinopsIconPropsType = { height: number; width: number };

const FinopsIcon = ({ width, height }: FinopsIconPropsType) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 18 18" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M12.5834 10.5138C12.9777 10.5138 13.3285 10.36 13.636 10.0525C13.9435 9.74505 14.0972 9.38631 14.0972 8.97632C14.0972 8.5821 13.9435 8.23519 13.636 7.93559C13.3285 7.63598 12.9777 7.48618 12.5834 7.48618C12.1892 7.48618 11.8384 7.63598 11.5309 7.93559C11.2234 8.23519 11.0696 8.5821 11.0696 8.97632C11.0696 9.38631 11.2234 9.74505 11.5309 10.0525C11.8384 10.36 12.1892 10.5138 12.5834 10.5138ZM9.88699 13.4231C9.35085 13.4231 8.9251 13.2654 8.60972 12.95C8.29435 12.6347 8.13666 12.2168 8.13666 11.6964V6.32718C8.13666 5.79104 8.29435 5.36923 8.60972 5.06174C8.9251 4.75425 9.35085 4.6005 9.88699 4.6005H16.2497C16.7858 4.6005 17.2116 4.75425 17.5269 5.06174C17.8423 5.36923 18 5.79104 18 6.32718V11.6964C18 12.2168 17.8423 12.6347 17.5269 12.95C17.2116 13.2654 16.7858 13.4231 16.2497 13.4231H9.88699ZM1.41919 17.5151C1.0565 17.5151 0.729304 17.3732 0.437582 17.0893C0.145861 16.8055 0 16.4744 0 16.0959V1.90405C0 1.54137 0.145861 1.21417 0.437582 0.922445C0.729304 0.630724 1.0565 0.484863 1.41919 0.484863H15.611C15.9895 0.484863 16.3206 0.630724 16.6045 0.922445C16.8883 1.21417 17.0302 1.54137 17.0302 1.90405V3.18132H9.88699C8.9724 3.18132 8.21551 3.48092 7.61629 4.08013C7.01708 4.67934 6.71748 5.42836 6.71748 6.32718V11.6964C6.71748 12.5952 7.01708 13.3443 7.61629 13.9435C8.21551 14.5427 8.9724 14.8423 9.88699 14.8423H17.0302V16.0959C17.0302 16.4744 16.8883 16.8055 16.6045 17.0893C16.3206 17.3732 15.9895 17.5151 15.611 17.5151H1.41919Z" 
                fill="currentColor"
            />
        </svg>
    );
};

export default FinopsIcon;

FinopsIcon.defaultProps = {
    width: "18",
    height: "18",
};