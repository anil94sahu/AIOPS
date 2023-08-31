import React, { useState } from 'react'
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import Flex from '@/components/flex';
import Button from '@/components/button';
import IconContentCard from '@/components/iconContentCard';
import TickCircleIcon from '@/components/svg/tickCircleIcon';
import Text from '@/components/text';
import Select from '@/components/input/select';
import ProfileDetailsCard from '@/components/profileDetailsCard';
import DP from '@/assets/images/pd-db.png';
import LabelTextItem from '@/components/labelTextItem';
import Link from 'next/link';
import StatusCard from '@/components/statusCard';
import { updateRequestsListService } from '../requests-service';
import { REQUEST_STATUS } from '../../../../utils/constants';
import Tooltip from '@/components/tooltip';
import InfoCircleIcon from '@/components/svg/infoCircleIcon';
import { toast } from 'react-toastify';

const selectStatusOption = [
    { value: "open", label: "Open" },
    { value: "in-progress", label: "In Progress" },
    { value: "closed", label: "Closed" },
    { value: "cancelled", label: "Cancelled" },
]

type StatusFormCompPropsType = {
    onCloseModal?: any;
    data?:any
}

const ValidationSchema = Yup.object().shape({
    selectStatus: Yup.string().required("Please enter a valid select status"),
});

const StatusFormComp = ({onCloseModal,data} : StatusFormCompPropsType) => {
    const [isStatusSuccess, setIsStatusSuccess] = useState(false);
    const [isLoading, setIsLoding] = useState(false);
    const onCloseStatusSuccess = () => {
        setIsStatusSuccess(false);
        onCloseModal();
    }

    function StatusRenderer(params: any) {
        if (params === REQUEST_STATUS.CLOSED) {
            return <Flex alignItemsCenter className="h-100"><StatusCard verified text={REQUEST_STATUS.CLOSED} /></Flex>
        } else if (params === REQUEST_STATUS.INPROGRESS) {
            return <Flex alignItemsCenter className="h-100"><StatusCard inprogress text={REQUEST_STATUS.INPROGRESS} /></Flex>
        } else if (params === REQUEST_STATUS.OPEN) {
            return <Flex alignItemsCenter className="h-100"><StatusCard unopened text={REQUEST_STATUS.OPEN} /></Flex>
        } else if (params === REQUEST_STATUS.CANCELLED) {
            return <Flex alignItemsCenter className="h-100"><StatusCard unpaid text={REQUEST_STATUS.CANCELLED} /></Flex>
        }
    }

    const updateStatus = async (value:any) => {
        setIsLoding(true);
        const payload = {
            request_status : value.selectStatus
        }
        setIsLoding(true);
            try {
                updateRequestsListService(data.ticketId,payload).then((response) => {
                    if (response.status === 200) {
                    setIsLoding(false);
                    onCloseModal();
                    }
                }).catch(error => {
                const notify = () => toast(error?.response?.data?.detail);
                notify();
                setIsLoding(false);
                });
            } catch (error) {
            setIsLoding(false);
            }
    }
    return (
        <>
            {isStatusSuccess ? (
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
                            <Button type="button" gray text="Close" onClick={onCloseStatusSuccess} />
                        </Flex>
                    </IconContentCard>
                </Flex>
            ) : (
                <Flex flexColumn>
                    <ProfileDetailsCard 
                        src={DP}
                        name={data.customerName}
                        ticketId={data.ticketId}
                    />
                    <div className="row mb-3">
                        <div className="col">
                            <LabelTextItem
                                label="Request Type"
                                action={<Link href="">{data.title}</Link>}
                            />
                        </div>
                        <div className="col">
                            <LabelTextItem
                                label="Created Date"
                                text={data.createdDate}
                            />
                        </div>
                        <div className="col">
                            <LabelTextItem
                                label="Closed Date"
                                text={data.reqStatus === 'pending'?'NA':data.closedDate}
                            />
                        </div>
                        <div className="col">
                            <LabelTextItem
                                label="Status"
                                action={
                                    StatusRenderer(data.reqStatus)
                                    // <StatusCard completed text={data.reqStatus} />
                                }
                            />
                        </div>
                    </div>
                    <Formik
                        initialValues={{
                            selectStatus: "",
                        }}
                        validationSchema={ValidationSchema}
                        onSubmit={updateStatus}
                    >
                        {({ errors, touched, values, handleChange }) => (
                        <Form className="d-flex flex-column mb-3">
                            <div className="row row-mrl-20">
                                <div className="col-12 col-md-6">
                                    <div className="formBox">
                                        <Select
                                            label="Select status"
                                            name="selectStatus"
                                            placeholder="Select status"
                                            value={values.selectStatus}
                                            onChange={handleChange}
                                            options={selectStatusOption}
                                            errormessage={touched.selectStatus && errors.selectStatus ? 
                                                (errors.selectStatus ) : null
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <Flex justifyContent="end" className="action-buttons mt-2">
                                        <Button type="submit" text="Update Status" />
                                    </Flex>
                                </div>
                            </div>
                        </Form>
                        )}
                    </Formik>
                </Flex>
            )}
        </>
    )
}

export default StatusFormComp