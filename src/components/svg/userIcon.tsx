import React from "react";

type UserIconPropsType = { height: number; width: number };

const UserIcon = ({ width, height }: UserIconPropsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 6.28019C5.60625 6.28019 4.875 5.98712 4.30625 5.40097C3.7375 4.81482 3.45312 4.06119 3.45312 3.1401C3.45312 2.219 3.7375 1.46538 4.30625 0.879227C4.875 0.293076 5.60625 0 6.5 0C7.39375 0 8.125 0.293076 8.69375 0.879227C9.2625 1.46538 9.54688 2.219 9.54688 3.1401C9.54688 4.06119 9.2625 4.81482 8.69375 5.40097C8.125 5.98712 7.39375 6.28019 6.5 6.28019ZM1.21875 13C0.880208 13 0.592448 12.8779 0.355469 12.6337C0.11849 12.3894 0 12.0929 0 11.744V11.0322C0 10.5019 0.128646 10.0483 0.385937 9.6715C0.643229 9.29469 0.975 9.00859 1.38125 8.8132C2.28854 8.39453 3.15859 8.08052 3.99141 7.87118C4.82422 7.66184 5.66042 7.55717 6.5 7.55717C7.33958 7.55717 8.1724 7.66533 8.99844 7.88164C9.82448 8.09796 10.6911 8.40848 11.5984 8.8132C12.0182 9.00859 12.3568 9.29469 12.6141 9.6715C12.8714 10.0483 13 10.5019 13 11.0322V11.744C13 12.0929 12.8815 12.3894 12.6445 12.6337C12.4076 12.8779 12.1198 13 11.7812 13H1.21875Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default UserIcon;

UserIcon.defaultProps = {
  width: "13",
  height: "13",
};