import React, {useState} from 'react'
import AvatarDP from '@/assets/images/avatar-db-t.png';
import Image, { StaticImageData } from 'next/image';

type AvatartooltipPropsType = {
    text: string;
    src: string | StaticImageData;
}

const Avatartooltip = ({text, src} : AvatartooltipPropsType) => {
    const [isTooltip, setIsTooltip] = useState(false);
    const handleclick = () => {
        setIsTooltip(state => !state);
    }
    return (
        <div className="avatar-tooltip-item">
            {isTooltip && (
                <div className="avatar-tooltip-item-text">
                    {text}
                </div>
            )}
            <div className="avatar-tooltip-item-dp" onClick={handleclick}>
                <Image src={src} alt={text} width={24} height={24} />
            </div>
        </div>
    )
}

export default Avatartooltip