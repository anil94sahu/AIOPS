import React from 'react'
import Text from './text';

type StatusCardPropsType = {
    text: any;
    verified?: boolean;
    unverified?: boolean;
    inprogress?: boolean;
    completed?: boolean;
    unopened?: boolean;
    paid?: boolean;
    unpaid?: boolean;
}

const StatusCard = ({text, verified, unverified, inprogress, completed, unopened, paid, unpaid} : StatusCardPropsType) => {
    return (
        <div className={`status-card ${completed ? 'status-completed' : unpaid ? 'status-unpaid' : paid ? 'status-paid' : unopened ? 'status-unopened' : inprogress ? 'status-inprogress' : verified ? 'status-verified' : unverified ? 'status-unverified' : ''}`}>
            {text}
        </div>
    )
}

export default StatusCard