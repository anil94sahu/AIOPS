import React from 'react'
import Text from './text'
import AWSImage from '@/assets/images/aws-icon.svg';
import AzureImage from '@/assets/images/azure-icon.svg';
import SecurityImage from '@/assets/images/security-icon.svg';
import TypeImage from './typeImage';
import Tooltip from './tooltip';
import ArrowUpIcon from './svg/arrowUpIcon';

type InvoiceCardPropsType = {
    text: string;
    icon?: any;
    number: string;
    numberAws?: string;
    numberAzure?: string;
    numberSecurity?: string;
    tooltipText?: string;
}

const InvoiceCard = ({text, icon, number, numberAws, numberAzure, numberSecurity, tooltipText} : InvoiceCardPropsType) => {
    return (
        <div className="invoice-card">
            <div className="invoice-heading">
                <div className="invoice-heading-icon">
                    {icon}
                </div>
                <Text type="H4" className="invoice-heading-text" text={text} />
            </div>
            <div className="invoice-content">
                <div className="invoice-content-left">
                    <Text type="H2" className="icl-number" text={number} />
                    {tooltipText && (
                        <Tooltip text={tooltipText}>
                            <div className="tooltip-icon"><ArrowUpIcon /></div>
                        </Tooltip>
                    )}
                    <Text type="SPAN" className="icl-label" text="Invoices" />
                </div>
                <div className="invoice-content-right">
                    {numberAws && (
                        <div className="icr-type-item">
                            <TypeImage text="AWS" src={AWSImage} />
                            <Text type="H3" className="icr-type-item-text" text={numberAws} />
                        </div>
                    )}
                    {numberAzure && (
                        <div className="icr-type-item">
                            <TypeImage text="AWS" src={AzureImage} />
                            <Text type="H3" className="icr-type-item-text" text={numberAzure} />
                        </div>
                    )}
                    {numberSecurity && (
                        <div className="icr-type-item">
                            <TypeImage text="AWS" src={SecurityImage} />
                            <Text type="H3" className="icr-type-item-text" text={numberSecurity} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default InvoiceCard