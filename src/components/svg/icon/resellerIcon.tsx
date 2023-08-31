import React from "react";

type ResellerIconPropsType = { height: number; width: number };

const ResellerIcon = ({ width, height }: ResellerIconPropsType) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 18 18" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M2.26245 17.0603C1.90422 17.0603 1.59077 16.926 1.32209 16.6573C1.05342 16.3886 0.919084 16.0752 0.919084 15.7169V8.12693C0.501149 7.7687 0.225013 7.32838 0.090677 6.80596C-0.0436593 6.28354 -0.028733 5.76112 0.135456 5.2387L1.0982 2.21614C1.21761 1.81313 1.42658 1.49968 1.7251 1.27578C2.02363 1.05189 2.36693 0.939941 2.75501 0.939941H15.1363C15.5543 0.939941 15.92 1.05562 16.2334 1.28698C16.5469 1.51833 16.7633 1.82805 16.8827 2.21614L17.8678 5.2387C18.032 5.76112 18.0432 6.28354 17.9014 6.80596C17.7596 7.32838 17.4798 7.7687 17.0618 8.12693V15.7169C17.0618 16.0752 16.9275 16.3886 16.6588 16.6573C16.3901 16.926 16.0767 17.0603 15.7185 17.0603H2.26245ZM11.0167 7.43286C11.4496 7.43286 11.8153 7.29106 12.1138 7.00746C12.4123 6.72387 12.5317 6.38056 12.472 5.97755L11.9123 2.2833H9.67333V5.97755C9.67333 6.36563 9.80021 6.70521 10.054 6.99627C10.3077 7.28733 10.6286 7.43286 11.0167 7.43286ZM6.82988 7.43286C7.24782 7.43286 7.60231 7.29106 7.89338 7.00746C8.18444 6.72387 8.32997 6.38056 8.32997 5.97755V2.2833H6.09103L5.5313 5.97755C5.47159 6.36563 5.57608 6.70521 5.84475 6.99627C6.11342 7.28733 6.4418 7.43286 6.82988 7.43286ZM2.75501 7.43286C3.11324 7.43286 3.42296 7.30972 3.68417 7.06344C3.94538 6.81715 4.09838 6.5149 4.14316 6.15667L4.72528 2.2833H2.48634L1.45643 5.55215C1.30717 6.01487 1.36687 6.444 1.63554 6.83954C1.90422 7.23509 2.27737 7.43286 2.75501 7.43286ZM15.2259 7.43286C15.7035 7.43286 16.0804 7.23882 16.3566 6.85074C16.6327 6.46266 16.6961 6.02979 16.5469 5.55215L15.517 2.2833H13.278L13.8601 6.15667C13.9049 6.5149 14.0579 6.81715 14.3191 7.06344C14.5803 7.30972 14.8826 7.43286 15.2259 7.43286Z" 
                fill="currentColor"
            />
        </svg>
    );
};

export default ResellerIcon;

ResellerIcon.defaultProps = {
    width: "18",
    height: "18",
};