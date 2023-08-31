import React from "react";

type ButtonPropsType = {
  className?: string;
  white?: boolean;
  info?: boolean;
  danger?: boolean;
  gray?: boolean;
  active?: boolean;
  small?: boolean;
  outline?: boolean;
  link?: boolean;
  linkWhite?: boolean;
  linkDanger?: boolean;
  linkInfo?: boolean;
  type?: "submit" | "reset" | "button";
  onClick?: any;
  disabled?: boolean;
  name?: string;
  style?: any;
  isSubmitting?: boolean;
  text: any;
  icon?: any;
  iconLeft?: any;
};

const Button = ({
  className,
  white,
  info,
  danger,
  gray,
  active,
  small,
  outline,
  link,
  linkWhite,
  linkDanger,
  linkInfo,
  type,
  onClick,
  disabled,
  name,
  style,
  isSubmitting,
  text,
  icon,
  iconLeft,
}: ButtonPropsType) => {
  return (
    <button
      className={`btn ${className ? className : ""} ${
        small ? "btn-small" : ""
      } ${outline ? "btn-outline" : ""} ${active ? "active" : ""} ${
        linkDanger
          ? "btn-link-danger"
          : linkInfo
          ? "btn-link-info"
          : linkWhite
          ? "btn-link-white"
          : link
          ? "btn-link"
          : info
          ? "btn-info"
          : danger
          ? "btn-danger"
          : gray
          ? "btn-gray"
          : white
          ? "btn-white"
          : "btn-primary"
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      name={name}
      style={style}
    >
      {isSubmitting && <span className="loading">loading</span>}
      {iconLeft && <span className="btn-icon-left">{iconLeft}</span>}
      {text}
      {icon && <span className="btn-icon-right">{icon}</span>}
    </button>
  );
};

export default Button;
