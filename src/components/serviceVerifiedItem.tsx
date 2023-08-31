import Image from 'next/image'
import React from 'react'
import Text from './text'
import VerifiedIcon from './svg/verifiedIcon';
import Tooltip from './tooltip';

type ServiceVerifiedItemPropsType = {
    src: string;
    text: string;
}

const ServiceVerifiedItem = ({src, text} : ServiceVerifiedItemPropsType) => {
    return (
        <div className="service-verify-item">
            <div className="svi-img">
                <Image src={src} alt={text} />
            </div>
            <Text type="SPAN" className="svi-text" text={text} />
            <div className="svi-verified">
                <Tooltip text="Verified">
                    <VerifiedIcon />
                </Tooltip>
            </div>
        </div>
    )
}

export default ServiceVerifiedItem