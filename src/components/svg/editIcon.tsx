import React from "react";

type EditIconPropsType = { height: number; width: number };

const EditIcon = ({ width, height }: EditIconPropsType) => {
    return (
        <svg
            width={width}
            height={height} 
            viewBox="0 0 32 30" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M23.1317 10.8316L20.163 7.86294L21.1371 6.88886C21.4 6.62602 21.7285 6.49846 22.1228 6.50619C22.5171 6.51392 22.8456 6.64921 23.1085 6.91206L24.1057 7.90933C24.3686 8.17218 24.5 8.49687 24.5 8.88341C24.5 9.26995 24.3686 9.59464 24.1057 9.85749L23.1317 10.8316ZM8.19577 23.4946C7.99477 23.4946 7.82856 23.4289 7.69714 23.2975C7.56571 23.166 7.5 22.9998 7.5 22.7988V20.8043C7.5 20.7115 7.51546 20.6265 7.54638 20.5492C7.57731 20.4719 7.63142 20.3945 7.70873 20.3172L19.1889 8.83702L22.1576 11.8056L10.6774 23.2859C10.6 23.3632 10.5227 23.4173 10.4454 23.4482C10.3681 23.4791 10.2831 23.4946 10.1903 23.4946H8.19577Z" 
                fill="currentColor"
            />
        </svg>
    );
};

export default EditIcon;

EditIcon.defaultProps = {
    width: "32",
    height: "30",
};
