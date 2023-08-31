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
import SeletctStyle from '@/components/input/seletctStyle';
import Select from '@/components/input/select';
import apiService from '../../../../services/environment-urls';
import URLS from '../../../../utils/urls';
import { ROLE } from '../../../../utils/constants';

const userNameOption = [
    { value: "SomethingOne", label: "Something One" },
    { value: "SomethingTwo", label: "Something Two" },
    { value: "Something Three", label: "Something Three" },
]
const roleOption = [
    { value: "SomethingOne", label: "Something One" },
    { value: "SomethingTwo", label: "Something Two" },
    { value: "Something Three", label: "Something Three" },
]

type AddUserFormPropsType = {
    onCloseModal?: any;
}

type Values = {
    firstName: string,
    lastName: string,
    emailId: string,
    userName: string,
    password: string,
    role: string,
}

const getCharacterValidationError = (str: string) => {
    return `Your password must have at least 1 ${str} character`;
};

const ValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("Please enter a valid first name"),
    lastName: Yup.string().required("Please enter a valid last name"),
    emailId: Yup.string().required("Please enter a valid email id"),
    userName: Yup.string().required("Please enter a valid user name"),
    password: Yup.string().required("Please enter a valid password").min(8, "Password must have at least 8 characters")
        .matches(/[0-9]/, getCharacterValidationError("digit"))
        .matches(/[a-z]/, getCharacterValidationError("lowercase"))
        .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
    confirmPassword: Yup.string().required("Please enter a valid confirm password").oneOf([Yup.ref('password')], 'Passwords must match'),
    role: Yup.string().required("Please enter a valid new account name"),
});

const AddUserForm = ({onCloseModal} : AddUserFormPropsType) => {
    const [isAddUserSuccess, setIsAddUserSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const onOpenAddUserSuccess = () => {
        setIsAddUserSuccess(true);
    }
    const onCloseAddUserSuccess = () => {
        setIsAddUserSuccess(false);
        onCloseModal();
    }

    const addUser = async (value:any) => {
        setLoading(true);
        const {firstname,lastname,email} = value
        const payload: any = {
            firstname,
            lastname,
            role: ROLE.USER,
            hashed_password:value.password,
            email:value.emailId
          };
        try {
          const response: AuthResponse = await apiService.post(
            URLS.FINOPS.USER_REGISTER,
            payload
          );
          if (response.status === 201) {
            if (response.data?.account.length > 0) {
              setLoading(false);
            }
          }
        } catch (error) {
          setLoading(false);
        }
    };

    return (
        <>
            {isAddUserSuccess ? (
                <Flex flexColumn className="mx-auto col-12 col-md-7 mt-4">
                    <IconContentCard
                        className="p-0 mt-3"
                        icon={<TickCircleIcon />}
                    >
                        <Text 
                            type="PARAGRAPH" 
                            className="font-weight-400 text-gray-600 mb-4"
                            text={<>
                                <strong className="text-black font-weight-500">Username</strong> account created successfully and the login credentials are sent to the entered <strong className="text-black font-weight-500">email id</strong> 
                            </>}
                        />
                        <Flex justifyContent="center" className="action-button">
                            <Button type="button" gray text="Close" onClick={onCloseAddUserSuccess} />
                        </Flex>
                    </IconContentCard>
                </Flex>
            ) : (
                <Flex flexColumn>
                    <Formik
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            emailId: "",
                            userName: "",
                            password: "",
                            confirmPassword: "",
                            role: "",
                        }}
                        // validationSchema={ValidationSchema}
                        onSubmit={addUser}
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
                                        <Select
                                            label="User name"
                                            name="userName"
                                            placeholder="Select user name"
                                            value={values.userName}
                                            onChange={handleChange}
                                            options={userNameOption}
                                            errormessage={touched.userName && errors.userName ? 
                                                (errors.userName ) : null
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
                                                touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : null
                                            }
                                        />
                                    </div>                                    
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="formBox">
                                        <Select
                                            label="Role"
                                            name="role"
                                            placeholder="Select profile role"
                                            value={values.role}
                                            onChange={handleChange}
                                            options={roleOption}
                                            errormessage={touched.role && errors.role ? 
                                                (errors.role ) : null
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <Flex justifyContent="end" className="action-buttons mt-2">
                                        <Button type="submit" text="Add User" iconLeft={<PlusCircleIcon />} />
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

export default AddUserForm