import React from 'react'
import Flex from './flex'
import Image from 'next/image'

type TypeImagePropsType = {
    text: string;
    src: string;
}

const TypeImage = ({src, text} : TypeImagePropsType) => {
    return (
        <Flex alignItemsCenter className="h-100">
            <Image src={src} alt={text} />
        </Flex>
    )
}

export default TypeImage