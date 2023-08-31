import React from "react";

type VerifiedIconPropsType = { height: number; width: number };

const VerifiedIcon = ({ width, height }: VerifiedIconPropsType) => {
    return (
        <svg
            width={width}
            height={height} 
            viewBox="0 0 22 22" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M9.54385 1.6239C9.73129 1.41799 9.95966 1.25349 10.2143 1.14092C10.469 1.02836 10.7444 0.970215 11.0229 0.970215C11.3013 0.970215 11.5767 1.02836 11.8314 1.14092C12.086 1.25349 12.3144 1.41799 12.5019 1.6239L13.5219 2.7439C13.7199 2.96132 13.9635 3.13238 14.2352 3.24491C14.5069 3.35743 14.8001 3.40864 15.0939 3.3949L16.6069 3.3249C16.8849 3.3118 17.1626 3.35688 17.4222 3.45725C17.6818 3.55762 17.9176 3.71108 18.1145 3.9078C18.3114 4.10452 18.4651 4.34017 18.5657 4.59969C18.6663 4.8592 18.7117 5.13686 18.6989 5.4149L18.6278 6.9289C18.6141 7.22268 18.6653 7.51586 18.7778 7.78758C18.8904 8.0593 19.0614 8.30286 19.2789 8.5009L20.3988 9.5209C20.6048 9.70834 20.7693 9.93671 20.8818 10.1914C20.9944 10.4461 21.0525 10.7215 21.0525 10.9999C21.0525 11.2783 20.9944 11.5537 20.8818 11.8084C20.7693 12.0631 20.6048 12.2915 20.3988 12.4789L19.2789 13.4989C19.0614 13.6969 18.8904 13.9405 18.7778 14.2122C18.6653 14.4839 18.6141 14.7771 18.6278 15.0709L18.6978 16.5839C18.7109 16.8619 18.6659 17.1396 18.5655 17.3992C18.4651 17.6589 18.3117 17.8947 18.115 18.0916C17.9182 18.2885 17.6826 18.4422 17.4231 18.5428C17.1636 18.6434 16.8859 18.6887 16.6079 18.6759L15.0939 18.6049C14.8001 18.5912 14.5069 18.6424 14.2352 18.7549C13.9635 18.8674 13.7199 19.0385 13.5219 19.2559L12.5019 20.3759C12.3144 20.5818 12.086 20.7463 11.8314 20.8589C11.5767 20.9714 11.3013 21.0296 11.0229 21.0296C10.7444 21.0296 10.469 20.9714 10.2143 20.8589C9.95966 20.7463 9.73129 20.5818 9.54385 20.3759L8.52385 19.2559C8.32581 19.0385 8.08225 18.8674 7.81053 18.7549C7.53881 18.6424 7.24562 18.5912 6.95185 18.6049L5.43885 18.6749C5.16082 18.688 4.88312 18.6429 4.62351 18.5426C4.3639 18.4422 4.1281 18.2887 3.93119 18.092C3.73428 17.8953 3.5806 17.6596 3.47998 17.4001C3.37936 17.1406 3.33402 16.8629 3.34685 16.5849L3.41785 15.0709C3.43159 14.7771 3.38038 14.4839 3.26785 14.2122C3.15533 13.9405 2.98427 13.6969 2.76685 13.4989L1.64685 12.4789C1.44094 12.2915 1.27643 12.0631 1.16387 11.8084C1.05131 11.5537 0.993164 11.2783 0.993164 10.9999C0.993164 10.7215 1.05131 10.4461 1.16387 10.1914C1.27643 9.93671 1.44094 9.70834 1.64685 9.5209L2.76685 8.5009C2.98427 8.30286 3.15533 8.0593 3.26785 7.78758C3.38038 7.51586 3.43159 7.22268 3.41785 6.9289L3.34785 5.4159C3.33475 5.13787 3.37983 4.86017 3.4802 4.60056C3.58057 4.34095 3.73402 4.10515 3.93075 3.90824C4.12747 3.71133 4.36312 3.55765 4.62264 3.45703C4.88215 3.35641 5.15981 3.31107 5.43785 3.3239L6.95185 3.3949C7.24562 3.40864 7.53881 3.35743 7.81053 3.24491C8.08225 3.13238 8.32581 2.96132 8.52385 2.7439L9.54385 1.6239Z" 
                stroke="#44CF6B" 
                strokeWidth="1.5"
            />
            <path 
                d="M8.02246 11L10.0225 13L14.0225 9" 
                stroke="#44CF6B" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default VerifiedIcon;

VerifiedIcon.defaultProps = {
    width: "22",
    height: "22",
};