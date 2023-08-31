import React from "react";

type MailIconPropsType = { height: number; width: number };

const MailIcon = ({ width, height }: MailIconPropsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.625 12.5C1.325 12.5 1.0625 12.3875 0.8375 12.1625C0.6125 11.9375 0.5 11.675 0.5 11.375V1.625C0.5 1.325 0.6125 1.0625 0.8375 0.8375C1.0625 0.6125 1.325 0.5 1.625 0.5H14.375C14.675 0.5 14.9375 0.6125 15.1625 0.8375C15.3875 1.0625 15.5 1.325 15.5 1.625V11.375C15.5 11.675 15.3875 11.9375 15.1625 12.1625C14.9375 12.3875 14.675 12.5 14.375 12.5H1.625ZM8 6.8375L14.375 2.65625V1.625L8 5.7125L1.625 1.625V2.65625L8 6.8375Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MailIcon;

MailIcon.defaultProps = {
  width: "16",
  height: "13",
};
