import React from 'react'

type NavTabPropsType = {
    lists?: any;
}

const NavTab = ({lists} : NavTabPropsType) => {
    return (
        <ul className="nav-tab-wrapper">
            {lists.map((item:any, id:any) => (
                <li key={id} className={`nav-tab-item ${item.navTabStatus == id ? "active" : ""}`}>
                    <div className="nav-tab-item-link" onClick={() => item.navTabHandleclick(item)}>
                        {item.text}
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default NavTab