import React from 'react'

type FlexPropsType = {
    children: React.ReactNode;
    alignItemsEnd?: boolean;
    alignItemsCenter?: boolean;
    flexColumn?: boolean;
    className?: string;
    justifyContent?: string;
};
const Flex = ({
        children,
        alignItemsEnd,
        alignItemsCenter,
        flexColumn,
        className,
        justifyContent,
    }: FlexPropsType): any => {
    return (
        <div className={`flex-class d-flex ${alignItemsEnd ? "align-items-end" : alignItemsCenter ? "align-items-center" : ""} ${flexColumn ? "flex-column" : ""} ${className ? className : ""} ${justifyContent === "start" ? "justify-content-start" : ""} ${justifyContent === "end" ? "justify-content-end" : ""} ${justifyContent === "center" ? "justify-content-center" : ""} ${justifyContent === "between" ? "justify-content-between" : ""} ${justifyContent === "around" ? "justify-content-around" : ""} ${justifyContent === "evenly" ? "justify-content-evenly" : ""}`}>
            {children}
        </div>
    )
}

export default Flex