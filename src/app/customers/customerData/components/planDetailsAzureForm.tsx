import React, { useState } from 'react'
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import Flex from '@/components/flex';
import Input from '@/components/input';
import Button from '@/components/button';
import IconContentCard from '@/components/iconContentCard';
import TickCircleIcon from '@/components/svg/tickCircleIcon';
import Text from '@/components/text';
import AvatarDP from '@/assets/images/pd-db.png'
import Image from 'next/image';

type PlanDetailsAzureFormPropsType = {
    onCloseModal?: any;
}

type Values = {
    savingsPlanDiscount: string,
    rIPlanDiscount: string,
    sPPPlanDiscount: string,
}

const ValidationSchema = Yup.object().shape({
    savingsPlanDiscount: Yup.string().required("Please enter a valid savings plan discount"),
    rIPlanDiscount: Yup.string().required("Please enter a valid RI plan discount discount"),
    sPPPlanDiscount: Yup.string().required("Please enter a valid sPP plan discount"),
});

const PlanDetailsAzureForm = ({onCloseModal} : PlanDetailsAzureFormPropsType) => {
    const [isPlanAwsSuccess, setIsPlanAwsSuccess] = useState(false);
    const onOpenPlanAwsSuccess = () => {
        setIsPlanAwsSuccess(true);
    }
    const onClosePlanAwsSuccess = () => {
        setIsPlanAwsSuccess(false);
        onCloseModal();
    }
    return (
        <>
            {isPlanAwsSuccess ? (
                <Flex flexColumn className="mx-auto col-12 col-md-7 mt-4">
                    <IconContentCard
                        className="p-0 mt-3"
                        icon={<TickCircleIcon />}
                    >
                        <Text 
                            type="PARAGRAPH" 
                            className="font-weight-500 text-primary mb-4"
                            text="Plan Updated successfully"
                        />
                        <Flex justifyContent="center" className="action-button">
                            <Button type="button" gray text="Close" onClick={onClosePlanAwsSuccess} />
                        </Flex>
                    </IconContentCard>
                </Flex>
            ) : (
                <Flex flexColumn>
                    <div className="profile-avatar-wrp">
                        <div className="pa-img">
                            <Image src={AvatarDP} alt="Dinesh Subramani" />
                        </div>
                        <Text type="H5" className="pa-text" text="Dinesh Subramani" />
                    </div>
                    <Formik
                        initialValues={{
                            savingsPlanDiscount: "45",
                            rIPlanDiscount: "45",
                            sPPPlanDiscount: "45",
                        }}
                        validationSchema={ValidationSchema}
                        onSubmit={()=>{}}
                        // (
                        //     values: Values,
                        //     { setSubmitting }: FormikHelpers<Values>
                        //     ) => {
                        //     setTimeout(() => {
                        //         console.log(values);
                        //         setSubmitting(false);
                        //         onOpenPlanAwsSuccess();
                        //     }, 500);
                        // }
                    >
                        {({ errors, touched, values, handleChange }) => (
                        <Form className="d-flex flex-column mb-3">
                            <div className="row row-mrl-20">
                                <div className="col-12 col-md-6">
                                    <div className="formBox">
                                        <Input
                                            label="Savings Plan Discount"
                                            type="text"
                                            placeholder="percent"
                                            name="savingsPlanDiscount"
                                            autoFocus={true}
                                            value={values.savingsPlanDiscount}
                                            onChange={handleChange}
                                            errormessage={
                                                touched.savingsPlanDiscount && errors.savingsPlanDiscount ? errors.savingsPlanDiscount : null
                                            }
                                            iconRIght
                                            icon="%"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="formBox">
                                        <Input
                                            label="RI Plan Discount"
                                            type="text"
                                            placeholder="percent"
                                            name="rIPlanDiscount"
                                            autoFocus={true}
                                            value={values.rIPlanDiscount}
                                            onChange={handleChange}
                                            errormessage={
                                                touched.rIPlanDiscount && errors.rIPlanDiscount ? errors.rIPlanDiscount : null
                                            }
                                            iconRIght
                                            icon="%"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="formBox">
                                        <Input
                                            label="SPP Plan Discount"
                                            type="text"
                                            placeholder="percent"
                                            name="sPPPlanDiscount"
                                            autoFocus={true}
                                            value={values.sPPPlanDiscount}
                                            onChange={handleChange}
                                            errormessage={
                                                touched.sPPPlanDiscount && errors.sPPPlanDiscount ? errors.sPPPlanDiscount : null
                                            }
                                            iconRIght
                                            icon="%"
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <Flex justifyContent="end" className="action-buttons mt-2">
                                        <Button type="submit" text="Upgrade Plan" />
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

export default PlanDetailsAzureForm