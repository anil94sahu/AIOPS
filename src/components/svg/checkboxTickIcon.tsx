import React from "react";

type CheckboxTickIconPropsType = { height: number; width: number };

const CheckboxTickIcon = ({ width, height }: CheckboxTickIconPropsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};

export default CheckboxTickIcon;

CheckboxTickIcon.defaultProps = {
  width: "14",
  height: "14",
};
