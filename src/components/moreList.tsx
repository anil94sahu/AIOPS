import React from 'react'
import Text from './text'

type MoreListPropsType = {
    lists?: any;
}

const MoreList = ({lists} : MoreListPropsType) => {
    return (
        <div className="more-list-wrapper">
            {lists?.map((item: any, id: any) => (
                <div className="more-vertical-item" key={id} onClick={item.onClick}>
                    <div className="more-vertical-item-icon">
                        {item.icon}
                    </div>
                    <Text type="SPAN" className="more-vertical-item-text" text={item.text} />
                </div>
            ))}
        </div>
    )
}

export default MoreList