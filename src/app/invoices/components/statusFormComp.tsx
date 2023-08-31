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
import { updateService as updateInvoicesService } from '../invoices-service';
import { INVOICES_STATUS } from '../../../../utils/constants';
import Tooltip from '@/components/tooltip';
import InfoCircleIcon from '@/components/svg/infoCircleIcon';
import { toast } from 'react-toastify';

const selectStatusOption = [
    { value: "issued", label: "issued" },
    { value: "paid", label: "paid" },
    { value: "overdue", label: "overdue" },
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

    const updateStatus = async (value:any) => {
        setIsLoding(true);
        const payload = {
            invoice_status : value.selectStatus,
            paid_date: new Date()
        }
        updateInvoicesService(data.id,payload).then((response) => {
            if (response.status === 200) {
                setIsLoding(false);
                onCloseModal();
            }
        }).catch(error => {
            const notify = () => toast(error?.response?.data?.detail);
            notify();
            setIsLoding(false);
        });
    }

    function StatusRenderer(params:any) {
        if (params === INVOICES_STATUS.ISSUED) {
            return <Flex alignItemsCenter className="h-100">
                    <StatusCard 
                        unopened
                        text={<>
                            <Text type="SPAN" className="mr-1" text={INVOICES_STATUS.ISSUED} /> 
                        </>}
                    />
                </Flex>
        } else if (params === INVOICES_STATUS.PAID) {
            return <Flex alignItemsCenter className="h-100">
                    <StatusCard 
                        paid 
                        text={<>
                            <Text type="SPAN" className="mr-1" text={INVOICES_STATUS.PAID} /> 
                        </>}
                    />
                </Flex>
        } 
        else if (params === INVOICES_STATUS.OVERDUE) {
            return <Flex alignItemsCenter className="h-100">
                    <StatusCard 
                        unpaid 
                        text={<>
                            <Text type="SPAN" className="mr-1" text={INVOICES_STATUS.OVERDUE} /> 
                        </>}
                    />
                </Flex>
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
                        ticketId={data.cInvoiceId}
                    />
                    <div className="row mb-3">
                        <div className="col">
                            <LabelTextItem
                                label="Request Type"
                                action={<Link href="">{data.status}</Link>}
                            />
                        </div>
                        <div className="col">
                            <LabelTextItem
                                label="Generated Date"
                                text={data.generatedOn}
                            />
                        </div>
                        <div className="col">
                            <LabelTextItem
                                label="Due Date"
                                text={data.dueDate}
                            />
                        </div>
                        <div className="col">
                            <LabelTextItem
                                label="Status"
                                action={
                                    StatusRenderer(data.status)
                                    // <StatusCard completed text={data.status} />
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