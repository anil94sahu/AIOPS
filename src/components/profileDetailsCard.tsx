'use client'

import React from 'react'
import Image, { StaticImageData } from 'next/image'
import Text from './text';
import Link from 'next/link';

type ProfileDetailsCardPropsType = {
    src: string | StaticImageData;
    name: string;
    ticketId: string;
}

const ProfileDetailsCard = ({src, name, ticketId} : ProfileDetailsCardPropsType) => {
    return (
        <div className="profile-details-wrapper">
            <div className="pddp-row">
                <div className="pddp-db">
                    {/* <div className="pddp-img">
                        <Image src={src} alt={name} width={44} height={44} />
                    </div> */}
                    <Link href="#" className="pddp-name">{name}</Link>
                </div>
                <div className="pddp-ticket">
                    <Text type="SPAN" className="pddp-ticket-text" text="Ticket Id - " />
                    <Link href="#" className="pddp-ticket-link">{ticketId}</Link>
                </div>
            </div>
        </div>
    )
}

export default ProfileDetailsCard