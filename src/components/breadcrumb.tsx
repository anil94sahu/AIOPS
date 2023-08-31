import Link from 'next/link';
import React from 'react'

type BreadcrumbPropsType = {
    lists?: any;
}

const Breadcrumb = ({lists} : BreadcrumbPropsType) => {
    return (
        <div className="breadcrumb-wrapper">
            <ul className="breadcrumb-list">
                {lists?.map((item: any, id: any) => (
                    <li className="breadcrumb-list-item" key={id}>
                        {item.url ? <Link href={item.url}>{item.text}</Link> : item.text}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Breadcrumb