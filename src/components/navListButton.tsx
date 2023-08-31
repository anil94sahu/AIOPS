import React from 'react'
import Button from './button';

type NavListButtonPropsType = {
    lists?: any;
}

const NavListButton = ({lists} : NavListButtonPropsType) => {
    return (
        <ul className="nav-list-wrapper">
            {lists?.map((item: any, id: any) => (
                <li key={id} className="nav-list-item">
                    <Button 
                        className="nav-list-item-button" 
                        text={item.text} 
                        onClick={item.onclick} 
                    />
                </li>
            ))}
        </ul>
    )
}

export default NavListButton