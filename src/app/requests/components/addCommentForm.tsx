import React, { useState } from 'react'
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import Flex from '@/components/flex';
import Input from '@/components/input';
import Button from '@/components/button';
import PlusCircleIcon from '@/components/svg/plusCircleIcon';
import IconContentCard from '@/components/iconContentCard';
import TickCircleIcon from '@/components/svg/tickCircleIcon';
import Text from '@/components/text';
import Select from '@/components/input/select';
import Textarea from '@/components/input/textarea';
import CommentsCard from '@/components/commentsCard';
import ProfileDetailsCard from '@/components/profileDetailsCard';
import DP from '@/assets/images/pd-db.png';
import LabelTextItem from '@/components/labelTextItem';
import Link from 'next/link';
import StatusCard from '@/components/statusCard';

const selectStatusOption = [
    { value: "SomethingOne", label: "Something One" },
    { value: "SomethingTwo", label: "Something Two" },
    { value: "Something Three", label: "Something Three" },
]

type AddCommentFormPropsType = {
    onCloseModal?: any;
}

type Values = {
    selectStatus: string,
    addCommentField: string,
}

const ValidationSchema = Yup.object().shape({
    selectStatus: Yup.string().required("Please enter a valid select status"),
    addCommentField: Yup.string().required("Please enter a valid add comment"),
});

const AddCommentForm = ({onCloseModal} : AddCommentFormPropsType) => {
    const [isAddCommentSuccess, setIsAddCommentSuccess] = useState(false);
    const onOpenAddUserSuccess = () => {
        setIsAddCommentSuccess(true);
    }
    const onCloseAddCommentSuccess = () => {
        setIsAddCommentSuccess(false);
        onCloseModal();
    }
    return (
        <>
            {isAddCommentSuccess ? (
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
                            <Button type="button" gray text="Close" onClick={onCloseAddCommentSuccess} />
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
                                text="NA"
                            />
                        </div>
                        <div className="col">
                            <LabelTextItem
                                label="Status"
                                action={
                                    <StatusCard inprogress text="Inprogress" />
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
                    <Formik
                        initialValues={{
                            selectStatus: "",
                            addCommentField: "",
                        }}
                        validationSchema={ValidationSchema}
                        onSubmit={()=>{}}
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
                                <div className="col-12 col-md-12">
                                    <div className="formBox">
                                        <Textarea
                                            label="Add Comment"
                                            placeholder="Add your comment"
                                            name="addCommentField"
                                            autoFocus={true}
                                            value={values.addCommentField}
                                            onChange={handleChange}
                                            rows={3}
                                            errormessage={
                                                touched.addCommentField && errors.addCommentField ? errors.addCommentField : null
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-12">
                                    <Flex justifyContent="end" className="action-buttons mt-2">
                                        <Button type="submit" text="Add Comment" iconLeft={<PlusCircleIcon />} />
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

export default AddCommentForm