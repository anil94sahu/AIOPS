import React, { useState } from 'react'
import Flex from '@/components/flex';
import Button from '@/components/button';
import IconContentCard from '@/components/iconContentCard';
import TickCircleIcon from '@/components/svg/tickCircleIcon';
import Text from '@/components/text';
import CommentsCard from '@/components/commentsCard';
import ProfileDetailsCard from '@/components/profileDetailsCard';
import DP from '@/assets/images/pd-db.png';
import LabelTextItem from '@/components/labelTextItem';
import Link from 'next/link';
import StatusCard from '@/components/statusCard';

type ReopenCompPropsType = {
    onCloseModal?: any;
}

const ReopenComp = ({onCloseModal} : ReopenCompPropsType) => {
    const [isReopenSuccess, setIsReopenSuccess] = useState(false);
    const onOpenReopenSuccess = () => {
        setIsReopenSuccess(true);
    }
    const onCloseReopenSuccess = () => {
        setIsReopenSuccess(false);
        onCloseModal();
    }
    return (
        <>
            {isReopenSuccess ? (
                <Flex flexColumn className="mx-auto col-12 col-md-7 mt-4">
                    <IconContentCard
                        className="p-0 mt-3"
                        icon={<TickCircleIcon />}
                    >
                        <Text 
                            type="PARAGRAPH" 
                            className="font-weight-500 text-primary mb-4"
                            text="Comment updated successfully"
                        />
                        <Flex justifyContent="center" className="action-button">
                            <Button type="button" gray text="Close" onClick={onCloseReopenSuccess} />
                        </Flex>
                    </IconContentCard>
                </Flex>
            ) : (
                <Flex flexColumn>
                    <ProfileDetailsCard 
                        src={DP}
                        name="Dinesh Subramani"
                        ticketId="#545645655"
                    />
                    <div className="row mb-3">
                        <div className="col">
                            <LabelTextItem
                                label="Request Type"
                                action={<Link href="">Apply Savings Plan</Link>}
                            />
                        </div>
                        <div className="col">
                            <LabelTextItem
                                label="Created Date"
                                text="xxxyyynamely"
                            />
                        </div>
                        <div className="col">
                            <LabelTextItem
                                label="Closed Date"
                                text="12-07-2023"
                            />
                        </div>
                        <div className="col">
                            <LabelTextItem
                                label="Status"
                                action={
                                    <StatusCard completed text="Completed" />
                                }
                            />
                        </div>
                    </div>
                    <CommentsCard
                        lists={[
                            {
                                by: "Lakshman",
                                byURL: "#",
                                message: "The Status is pending from the AWS server we are trying to close that fast",
                                timeago: "5 mins ago",
                            },
                            {
                                by: "Lakshman",
                                byURL: "#",
                                message: "The Status is pending from the AWS server we are trying to close that fast",
                                timeago: "5 mins ago",
                            },
                        ]} 
                    />
                    <Flex justifyContent="end">
                        <Button type="submit" text="Reopen Ticket" onClick={onOpenReopenSuccess} />
                    </Flex>
                </Flex>
            )}
        </>
    )
}

export default ReopenComp