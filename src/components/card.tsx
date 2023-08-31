import React from 'react'

type CardPropsType = {
    children: React.ReactNode;

};

const Card = ({children} : CardPropsType) => {
    return (
        <div className="card-wrapper">
            <div className="card-heading">
            </div>
            <div className="card-body">
                {children}
            </div>
        </div>
    )
}

export default Card