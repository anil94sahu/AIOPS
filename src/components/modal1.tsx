import React from "react";
import Button from "./button";
import CloseIcon from "./svg/closeIcon";

type ModalPropsType = {
  children: React.ReactNode;
  header?: any;
  footer?: any;
  onClose?: any;
  small?: boolean;
};

const Modal1 = ({
  children,
  header,
  onClose,
  footer,
  small,
}: ModalPropsType) => {
  return (
    <div
      className={`modal-terms modal-wrapper ${footer ? "modal-secondary" : ""} ${
        small ? "modal-small" : ""
      }`}
    >
      <div className="modal-main-wrapper">
        <div className="modal-content-wrapper">
          {onClose && (
            <Button
              link
              onClick={onClose}
              className="modal-close"
              text={<CloseIcon />}
            />
          )}
          {header && <div className="modal-header">{header}</div>}
          <div className="modal-body">{children}</div>
          {footer && <div className="modal-footer">{footer}</div>}
        </div>
      </div>
    </div>
  );
};

export default Modal1;
