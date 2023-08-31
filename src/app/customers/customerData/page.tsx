"use client"
import React, { useState } from 'react'
import Layout from '../../include/layout'
import Image from 'next/image'
import AvatarDP from '@/assets/images/pd-db.png';
import Text from '@/components/text';
import Button from '@/components/button';
import TrashIcon from '@/components/svg/trashIcon';
import EditIcon from '@/components/svg/editIcon';
import ServiceVerifiedItem from '@/components/serviceVerifiedItem';
import AzureImg from '@/assets/images/azure-icon.svg';
import LabelTextItem from '@/components/labelTextItem';
import Link from 'next/link';
import CardTable from '@/components/cardTable';
import Flex from '@/components/flex';
import NavTab from '@/components/navTab';
import RequestsList from './components/requestsList';
import PlanDetailsList from './components/planDetailsList';
import InvoicesList from './components/invoicesList';
import AccountTypeRadio from '@/components/accountTypeRadio';
import AWSImage from '@/assets/images/aws-icon.svg';
import AzureImage from '@/assets/images/azure-logo-text.svg';
import PlanDetailsAzureList from './components/planDetailsAzureList';

const CustomerData = () => {
    const [accountType, setAccountType] = useState("AWS");
    const [navTabStatus, setNavTabStatus] = useState({
        navTabItemType: 0
    });
    const navTabHandleclick = (item:any) => {
        console.log(({navTabItemType: item.id}))
        setNavTabStatus({
            navTabItemType: item.id,
        });
    };
    return (
        <Layout
            breadcrumbList={[
                {
                    text: "Customer",
                    url: "/"
                },
                {
                    text: "Customer Data",
                }
            ]}
        >
            <div className="cinfo-wrapper">
                <div className="cinfo-left">
                    <div className="cinfo-profileinfo">
                        <div className="cinfo-profileinfo-dp">
                            <div className="cinfo-profileinfo-dp-img">
                                <Image src={AvatarDP} alt="Dinesh Subramani" />
                            </div>
                            <Text type="H5" className="cinfo-profileinfo-dp-text" text="Dinesh Subramani" />
                        </div>
                        <div className="cinfo-profileinfo-action">
                            <Button link text={<TrashIcon />} />
                            <Button link text={<EditIcon />} />
                        </div>
                    </div>
                    <Text type="LEGEND" text="Service data information" />
                    <div className="row">
                        <div className="col">
                            <ServiceVerifiedItem
                                src={AzureImg}
                                text="123445566454353"
                            />
                        </div>
                        <div className="col">
                            <ServiceVerifiedItem
                                src={AzureImg}
                                text="123445566454353"
                            />
                        </div>
                    </div>
                </div>
                <div className="cinfo-right">
                    <Text type="LEGEND" text="Customer information" />
                    <div className="row">
                        <div className="col">
                            <LabelTextItem
                                label="Email Id"
                                action={<Link href="#">dixxxx@gmail.com</Link>}
                            />
                        </div>
                        <div className="col">
                            <LabelTextItem
                                label="Organization Name"
                                text="xxxyyynamely"
                            />
                        </div>
                        <div className="col">
                            <LabelTextItem
                                label="Country"
                                text="India"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <LabelTextItem
                                label="Address"
                                text="G-5, Laxmi Mill Compound, E Moses Road, Mahalaxmi, Mumbai - 604453"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <CardTable>
                <Flex flexColumn className="mx-minus-3 mb-3">
                    <NavTab
                        lists={[
                            {
                                id: 0, 
                                navTabStatus:navTabStatus.navTabItemType,
                                text: "Plan details",
                                navTabHandleclick: navTabHandleclick
                            },
                            {
                                id: 1,
                                navTabStatus:navTabStatus.navTabItemType,
                                text: "Invoices",
                                navTabHandleclick: navTabHandleclick
                            },
                            {
                                id: 2,
                                navTabStatus:navTabStatus.navTabItemType,
                                text: "Requests",
                                navTabHandleclick: navTabHandleclick
                            },
                        ]} 
                    />
                </Flex>
                {navTabStatus.navTabItemType == 0 && (
                    <>
                        <Flex justifyContent="start">
                            <div className="account-type-group-radio">
                                <AccountTypeRadio
                                    value="AWS"
                                    name="accountType"
                                    onChange={(e:any) => setAccountType("AWS")}
                                    isChecked={accountType == "AWS"}
                                    icon={AWSImage}
                                    inActive={accountType == "Azure"}
                                />
                                <AccountTypeRadio
                                    value="Azure"
                                    name="accountType"
                                    onChange={(e:any) => setAccountType("Azure")}
                                    isChecked={accountType == "Azure"}
                                    icon={AzureImage}
                                    inActive={accountType == "AWS"}
                                />
                            </div>
                        </Flex>
                        {accountType == "AWS" && (
                            <PlanDetailsList />
                        )}
                        {accountType == "Azure" && (
                            <PlanDetailsAzureList />
                        )}
                    </>
                )}
                {navTabStatus.navTabItemType == 1 && (
                    <>
                        <Flex justifyContent="start">
                            <div className="account-type-group-radio">
                                <AccountTypeRadio
                                    value="AWS"
                                    name="accountType"
                                    onChange={(e:any) => setAccountType("AWS")}
                                    isChecked={accountType == "AWS"}
                                    icon={AWSImage}
                                    inActive={accountType == "Azure"}
                                />
                                <AccountTypeRadio
                                    value="Azure"
                                    name="accountType"
                                    onChange={(e:any) => setAccountType("Azure")}
                                    isChecked={accountType == "Azure"}
                                    icon={AzureImage}
                                    inActive={accountType == "AWS"}
                                />
                            </div>
                        </Flex>                        
                        {accountType == "AWS" && (
                            <InvoicesList />
                        )}
                        {accountType == "Azure" && (
                            <InvoicesList />
                        )}
                    </>
                )}
                {navTabStatus.navTabItemType == 2 && (
                    <RequestsList />
                )}
            </CardTable>
        </Layout>
    )
}

export default CustomerData