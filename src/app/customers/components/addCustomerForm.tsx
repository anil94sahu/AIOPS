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
import Textarea from '@/components/input/textarea';
import Select from '@/components/input/select';
import apiService from '../../../../services/environment-urls';
import URLS from '../../../../utils/urls';
import { registerCustomer } from '../customers-service';
import Loader from '@/components/Loader';
import { toast } from 'react-toastify';

const countryOption = [
    { value: "india", label: "India" },
    { value: "usa", label: "USA" },
]

type AddCustomerFormPropsType = {
    onCloseModal?: any;
}

type Values = {
    firstName: string,
    lastName: string,
    organizationName: string,
    emailId: string,
    password: string,
    address: string,
    country: string,
}

const getCharacterValidationError = () => {
    return `Your password must have min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit, 1 special character.`;
};

const passwordRules = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');

const ValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("Please enter a valid first name"),
    lastName: Yup.string().required("Please enter a valid last name"),
    organizationName: Yup.string().required("Please enter a valid organization name"),
    emailId: Yup.string().required("Please enter a valid email id"),
    password: Yup.string().required("Please enter a valid password")
        .matches(passwordRules, getCharacterValidationError()),
    confirmPassword: Yup.string().required("Please enter a valid confirm password").oneOf([Yup.ref('password')], 'Passwords must match'),
    address: Yup.string().required("Please enter a valid address"),
    country: Yup.string().required("Please enter a valid country"),
});

const AddCustomerForm = ({onCloseModal} : AddCustomerFormPropsType) => {
    const [isAddCustomerSuccess, setIsAddCustomerSuccess] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const onOpenAddCustomerSuccess = () => {
        setIsAddCustomerSuccess(true);
    }
    const onCloseAddCustomerSuccess = () => {
        setIsAddCustomerSuccess(false);
        onCloseModal();
    }

    const addCustomer = async (value:any) => {
        setLoading(true);
        const payload: any = {
            firstname: value.firstName,
            lastname : value.lastName,
            address: value.address,
            country : value.country,
            organization_name: value.organizationName,
            hashed_password:value.password,
            email:value.emailId
          };
        registerCustomer(payload).then((response) => {
        if (response.status === 201) {
            setLoading(false);
            onCloseModal();
            }
        } 
        )
        .catch(error => {
            const notify = () => toast(error?.response?.data?.detail);
            notify();
            setLoading(false);
        });
    }
    
    return (
        <>
            {isAddCustomerSuccess ? (
                <Flex flexColumn className="mx-auto col-12 col-md-7 mt-4">
                    <IconContentCard
                        className="p-0 mt-3"
                        icon={<TickCircleIcon />}
                    >
                        <Text 
                            type="PARAGRAPH" 
                            className="font-weight-400 text-gray-600 mb-4"
                            text={"strong"}
                        />
                        <Flex justifyContent="center" className="action-button">
                            <Button type="button" gray text="Close" onClick={onCloseAddCustomerSuccess} />
                        </Flex>
                    </IconContentCard>
                </Flex>
            ) : (
                <Flex flexColumn>
                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            organizationName: "",
                            emailId: "",
                            password: "",
                            confirmPassword: "",
                            address: "",
                            country: "",
                        }}
                        validationSchema={ValidationSchema}
                        onSubmit={addCustomer}
                    >
                        {({ errors, touched, values, handleChange }) => (
                        <Form className="d-flex flex-column mb-3">
                            <div className="row row-mrl-20">
                                <div className="col-12 col-md-6">
                                    <div className="formBox">
                                        <Input
                                            label="First name"
                                            type="text"
                                            placeholder="Enter first name"
                                            name="firstName"
                                            autoFocus={true}
                                            value={values.firstName}
                                            onChange={handleChange}
                                            errormessage={
                                                touched.firstName && errors.firstName ? errors.firstName : null
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="formBox">
                                        <Input
                                            label="Last name"
                                            type="text"
                                            placeholder="Enter last name"
                                            name="lastName"
                                            autoFocus={true}
                                            value={values.lastName}
                                            onChange={handleChange}
                                            errormessage={
                                                touched.lastName && errors.lastName ? errors.lastName : null
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="formBox">
                                        <Input
                                            label="Organization name"
                                            type="text"
                                            placeholder="Enter organization name"
                                            name="organizationName"
                                            autoFocus={true}
                                            value={values.organizationName}
                                            onChange={handleChange}
                                            errormessage={
                                                touched.organizationName && errors.organizationName ? errors.organizationName : null
                                            }
                                        />
                                    </div>                                    
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="formBox">
                                        <Input
                                            label="Email Id"
                                            type="email"
                                            placeholder="Enter email id"
                                            name="emailId"
                                            autoFocus={true}
                                            value={values.emailId}
                                            onChange={handleChange}
                                            errormessage={
                                                touched.emailId && errors.emailId ? errors.emailId : null
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="formBox">
                                        <Input
                                            label="Password"
                                            type="password"
                                            placeholder="Enter password"
                                            name="password"
                                            autoFocus={true}
                                            value={values.password}
                                            onChange={handleChange}
                                            errormessage={
                                                touched.password && errors.password ? errors.password : null
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="formBox">
                                        <Input
                                            label="Confirm password"
                                            type="password"
                                            placeholder="Enter re-enter password"
                                            name="confirmPassword"
                                            autoFocus={true}
                                            value={values.confirmPassword}
                                            onChange={handleChange}
                                            errormessage={
                                                (values.confirmPassword || touched.confirmPassword) && errors.confirmPassword ? errors.confirmPassword : null
                                            }
                                        />
                                    </div>                                    
                                </div>
                                <div className="col-12 col-md-12">
                                    <div className="formBox">
                                        <Textarea
                                            label="Address"
                                            // type="text"
                                            placeholder="Enter address"
                                            name="address"
                                            autoFocus={true}
                                            value={values.address}
                                            onChange={handleChange}
                                            rows={3}
                                            maxlength={120}
                                            errormessage={
                                                touched.address && errors.address ? errors.address : null
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="formBox">
                                        <Select
                                            label="Country"
                                            name="country"
                                            placeholder="Select country"
                                            value={values.country}
                                            onChange={handleChange}
                                            options={countryOption}
                                            errormessage={touched.country && errors.country ? 
                                                (errors.country ) : null
                                            }
                                        />
                                    </div>                                    
                                </div>
                                <div className="col-12 col-md-6">
                                    <Flex justifyContent="end" className="action-buttons mt-2">
                                       {isLoading ? <Loader /> : <Button type="submit" text="Create" />} 
                                        
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

export default AddCustomerForm