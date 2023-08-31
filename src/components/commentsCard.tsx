import Link from 'next/link';
import React from 'react'
import Text from './text';

type CommentsCardPropsType = {
    lists?: any;
}

const CommentsCard = ({lists} : CommentsCardPropsType) => {
    return (
        <div className="comment-wrapper">
            <Text type="LEGEND" className="legend-title" text="Comments" />
            {lists?.map((item: any, id: any) => (
                <div className="comment-item" key={id}>
                    <div className="comment-item-by">
                        <Text type="SPAN" text="By" />
                        <Link href={item.byURL} className="comment-item-link">{item.by}</Link>
                    </div>
                    <div className="comment-item-content">
                        <div className="comment-item-desc">
                            {item.message}
                        </div>
                        <div className="comment-item-ago">
                            {item.timeago}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CommentsCard