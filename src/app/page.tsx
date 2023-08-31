"use client";
import SignLayout from "@/components/signLayout";
import Image from "next/image";
import Imagesdk from "../../public/images/start-your-journey-with-us.svg";
import LogoImage from "../../public/logo.svg";
import Flex from "@/components/flex";
import Text from "@/components/text";
import Link from "next/link";
import { Formik, Form, FormikHelpers } from "formik";
import * as Yup from "yup";
import Input from "@/components/input";
import { useRouter } from "next/navigation";
import MailIcon from "@/components/svg/mailIcon";
import Button from "@/components/button";
import Checkbox from "@/components/input/checkbox";
import LockIcon from "@/components/svg/lockIcon";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useStorage } from "../../utils/usestorage";
import { setCookie } from "cookies-next";
import TurnstileInput from "turnstile-next";
import { FUTURE_SCOPE, TEST_SITE_KEY } from "../../utils/constants";
import { useEffect, useState } from "react";
import Script from "next/script";
import URLS from "../../utils/urls";
import apiService from "../../services/environment-urls";
import Loader from "@/components/Loader";
import Modal1 from "@/components/modal1";
import EyeIcon from "@/components/svg/EyeIcon";
import { ToastContainer, toast } from "react-toastify";

const ValidationSchema = Yup.object().shape({
  emailAddress: Yup.string()
    .required("Please enter a valid email address")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Invalid email address"
    ),
  password: Yup.string().required("Please enter a valid password"),
});
interface AuthResponse {
  status: number;
  data: any;
}
export default function Home() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [checked, SetIsChecked] = useState(false);
  const dispatch = useAppDispatch();
  const { setItem } = useStorage();
  const [errormessage, setErrorMessage] = useState("");
  const [showCheckMessage, setShowCheckMessage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [enableButton, setEnabledButton] = useState(false);
  const [termsandConditionModal, settermsandConditionModal] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const ShowPasswordClick = () => {
    setShowPassword((state) => !state);
  };

  const hangelTermsandCondition = () => {
    settermsandConditionModal(true);
  };

  const closeTermsandConditionpopup = () => {
    settermsandConditionModal(false);
  };

  const onVerify = (token: string) => {
    if (token) {
      setToken(token);
      setEnabledButton(true);
    }
  };

  const onErr = (err: string) => console.log(err);

  const customreLoginValuesSubmit = (values: any) => {
    if (checked && token) {
      setLoading(true);
      SubmitDetails(values);
    } else if (!checked) {
      setShowCheckMessage(true);
    }
  };
  const SubmitDetails = async (data: any) => {
    const loginRequest: any = {
      email: data.emailAddress,
      hashed_password: data.password,
    };
    try {
      const response: AuthResponse = await apiService.post(
        URLS.FINOPS.LOGIN_URL,
        loginRequest
      );
      if (response.status === 200) {
        setItem("jwtToken", response?.data?.access_token, "session");
        setCookie("jwtToken", response?.data?.access_token);
        router.push('customers')
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      if (error?.response?.status) {
        setErrorMessage(error?.response?.data?.detail);
        const notify = () => toast(error?.response?.data?.detail);
        notify();
      }
    }
  };

  return (
    <SignLayout
      text="Begin your Journey with us"
      subtitle="Boost cloud savings and enhance security."
      src={Imagesdk}
    >
       <ToastContainer autoClose={false}/>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      ></Script>
      <Flex flexColumn className="sign-main-content">
        <Flex className="mb-3">
          <Image src={LogoImage} alt="AIOPS" />
        </Flex>
        <Text
          type="H3"
          className="text-black-100"
          text="Log in to your Account"
        />
        {/* <Button type="submit" onClick={userRefreshTokenRequest} text="Refresh Token" /> */}
        {termsandConditionModal && (
          <Modal1
            header={
              <>
                <Text
                  type="H4"
                  className="modal-title"
                  text="Terms and Conditions"
                />
              </>
            }
            footer={
              <>
                <Button
                  white
                  type="button"
                  text="Close"
                  onClick={closeTermsandConditionpopup}
                />
              </>
            }
          >
            <Flex flexColumn>
              <Flex flexColumn className="font-size-13">
                <Text
                  type="PARAGRAPH"
                  text='These AIOps Terms of Service (“Terms of Service”) govern the use of the Axiom Services provided by Axiom IO IT Services Pvt Ltd, a company duly incorporated under the Companies Act 2013, having its registered office at 3rd Floor Ganga Plaza, above IDBI bank, Petbasheerabad RR Dist Hyderabad, Telangana, India- 500055 (hereinafter referred to as “Axiom”, which expression shall mean and include its successors and permitted assigns), and the users and subscribers of the Axiom Services the (hereinafter referred to as “Customer", which expression shall mean and include its successors and permitted assigns).'
                />
                <Text
                  type="PARAGRAPH"
                  text="The Customer’s use of the Axiom Services is subject to the terms and conditions set out in the Agreement (defined below). By accepting the Agreement or by using the Axiom Services, the Customer acknowledges that they have read, understood, and agree to be bound by the terms of the Agreement, which may be updated or modified by Axiom from time to time. The Customer further certifies that they possess all necessary rights to comply with the terms of the Agreement."
                />
                <Text
                  type="PARAGRAPH"
                  text="If you are accepting on behalf of another Person, you represent and warrant that: (i) you have the full legal authority to bind that Person to the Agreement; (ii) you have read and understood the Agreement; and (iii) you agree to the Agreement on behalf of the Person you represent. If you lack the legal authority to bind the Person on whose behalf you are accepting the Agreement, please refrain from accepting the Agreement or using/ accessing the Axiom Services."
                />
              </Flex>
            </Flex>
          </Modal1>
        )}
        <Text type="H5" text="Welcome Back!" className="mb-4" />
        <Flex flexColumn className="form-area-wrapper">
          <Formik
            initialValues={{
              emailAddress: "",
              password: "",
            }}
            validationSchema={ValidationSchema}
            onSubmit={customreLoginValuesSubmit}
          >
            {({ errors, touched, values, handleChange }) => (
              <Form className="d-flex flex-column w-100 mb-3">
                <div className="formBox">
                  <Input
                    nolabel
                    type="text"
                    name="emailAddress"
                    placeholder="Email Address"
                    autoFocus={true}
                    value={values.emailAddress}
                    onChange={handleChange}
                    mandatory
                    errormessage={
                      touched.emailAddress && errors.emailAddress
                        ? errors.emailAddress
                        : null
                    }
                    icon={<MailIcon />}
                  />
                </div>
                <div className="formBox">
                  <Input
                    nolabel
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    autoFocus={true}
                    value={values.password}
                    onChange={handleChange}
                    mandatory
                    errormessage={
                      touched.password && errors.password
                        ? errors.password
                        : null
                    }
                    icon={<LockIcon />}
                    icon1={
                      <span
                        className="password-visible-icon"
                        onClick={ShowPasswordClick}
                        data-testid="login-password-eye-icon"
                      >
                        <EyeIcon visible={showPassword} />
                      </span>
                    }
                  />
                  {errormessage ? (
                    <>
                      <Flex justifyContent="center">
                        <div className="font-size-14 font-weight-500 text-danger">
                          {errormessage}
                        </div>
                      </Flex>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="mb-3">
                  <TurnstileInput
                    onVerify={onVerify}
                    onError={onErr}
                    siteKey={process.env.TEST_SITE_KEY || TEST_SITE_KEY}
                  />
                </div>
                <Flex justifyContent="between" className="mb-4">
                  <Checkbox
                    mb0
                    value={checked}
                    label={
                      <>
                        By signing up you agree to our{" "}
                        <Link
                          href="/"
                          className="font-weight-500 hyperlink"
                          onClick={hangelTermsandCondition}
                        >
                          Terms & Conditions
                        </Link>
                      </>
                    }
                    id="isAgree"
                    isChecked={checked}
                    onChange={(e: any) => {
                      if (checked) {
                        SetIsChecked(false);
                      } else {
                        SetIsChecked(true);
                      }
                    }}
                  />
                </Flex>
                <Flex justifyContent="between" className="mb-4 pading-left-12">
                  {showCheckMessage ? (
                    <Flex justifyContent="center" alignItemsCenter>
                      <div className="font-size-14 font-weight-500 text-danger">
                        {"Please Accept terms and conditions"}
                      </div>
                    </Flex>
                  ) : (
                    <></>
                  )}
                </Flex>

                {loading ? (
                  <Loader />
                ) : (
                  <>
                    {enableButton ? (
                      <Button type="submit" className="signin-btn" text="Sign In" />
                    ) : (
                      <Button type="submit" className="signin-btn" text="Sign In" disabled />
                    )}
                  </>
                )}
              </Form>
            )}
          </Formik>

          <Flex
            justifyContent="center"
            className="font-size-14 font-weight-500 text-grey-100-opacity-70"
          >
            Forgot Password({FUTURE_SCOPE})
          </Flex>
        </Flex>
      </Flex>
    </SignLayout>
  );
}
