import React from 'react'

type CardTablePropsType = {
    children: React.ReactNode;
}

const CardTable = ({children}: CardTablePropsType) => {
    return (
        <div className="card-table-wrapper">
            {children}
        </div>
    )
}

export default CardTable