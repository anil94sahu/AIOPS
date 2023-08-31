import React from 'react'
import Button from './button';
import CloseAlertIcon from './svg/closeAlertIcon';

type AlertMessagePropsType = {
    type?: string;
    message: string; 
    icon?: any;
    isShow?: boolean; 
    handleClose?: any;
}

const AlertMessage = ({message, icon, type, isShow, handleClose} : AlertMessagePropsType) => {
    return (
        <>
            {isShow && (
                <div className={`alert-wrapper ${type === "success" ? 'alert-success' : type === "error" ? 'alert-error' : 'alert-primary'}`}>
                    <div className="container">
                        <div className="alert-main">
                            {icon && <div className="alert-icon">{icon}</div> }
                            {message}
                            <Button
                                link
                                onClick={handleClose}
                                className="alert-close" 
                                text={
                                    <CloseAlertIcon />
                                }
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default AlertMessage