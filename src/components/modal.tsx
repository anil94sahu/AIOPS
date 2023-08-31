import React from 'react'
import Button from '@/components/button';
import CloseIcon from '@/components/svg/closeIcon';

type ModalPropsType = {
    children: React.ReactNode;
    onOutside?: any;
    header?: any;
    footer?: any;
    onClose?: any; 
    small?: boolean;
    secondary?: boolean;
    widthAuto?: boolean;
};

const Modal = ({
    children,
    onOutside,
    header,
    onClose, 
    footer,
    small,
    secondary,
    widthAuto, 
} : ModalPropsType) => {
    return (
        <div className={`modal-wrapper ${secondary ? 'modal-secondary' : ''} ${widthAuto ? 'modal-widthauto' : small ? 'modal-small' : ''}`} onClick={onOutside}>
            <div className="modal-main-wrapper">
                <div className="modal-content-wrapper">
                {onClose && (
                    <Button link onClick={onClose} className="modal-close" text={<CloseIcon />} />
                )}
                    {header && (
                        <div className="modal-header">
                            {header}
                        </div>
                    )}
                    <div className="modal-body">
                        {children}
                    </div>
                    {footer && (
                        <div className="modal-footer">
                            {footer}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Modal