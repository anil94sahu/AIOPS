import Button from '@/components/button';
import BellIcon from '@/components/svg/bellIcon';
import React, { useState } from 'react'
import AWSImage from '../../../public/images/amazon-web-services.svg';
import AzureImage from '../../../public/images/azure.svg';
// import Dropdown from '@/components/dropdown';
import Flex from '@/components/flex';
import BarIcon from '@/components/svg/barIcon';
import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '@/assets/images/logo.svg';
import Text from '@/components/text';
import AvatarDBImg from '@/assets/images/avatar-pic.png';
import { useMediaQuery } from 'react-responsive';
import Breadcrumb from '@/components/breadcrumb';

type HeaderPropsType = {
    broken?: boolean;
    setToggled?: any;
    headerLeftAddComponent?: any;
    breadcrumbList?: string;
};

const Header = ({broken, setToggled, headerLeftAddComponent, breadcrumbList} : HeaderPropsType) => {
    const [accountType, setAccountType] = useState("");
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    return (
        <>
        <header className="header-wrapper">
            <div className="header-main-wrap">
                <div className="header-left">
                    {broken && (
                        <div className="logo">
                            <Link href="/">
                                <Image src={LogoImage} alt="AIOPS" />
                            </Link>
                        </div>
                    )}
                    {!isMobile && (
                        breadcrumbList && <Breadcrumb lists={breadcrumbList} />
                    )}
                    
                    {!isMobile && headerLeftAddComponent}
                </div>
                <div className="header-right">
                    <div className="h-notification">
                        <Button 
                            type="button"
                            link
                            text={
                                <div className="hn-bell">
                                    <span className="badge"></span>
                                    <BellIcon />
                                </div>
                            }
                        />
                    </div>
                    <div className="h-avatar">
                        {!isTabletOrMobile && <Text type="SPAN" className="h-avatar-text" text="Admin" />}
                        <div className="h-avatar-dp">
                            {/* <Image src={AvatarDBImg} alt="Hi, Sara Larson" /> */}
                        </div>
                    </div>
                    {broken && (
                        <Flex justifyContent="start">
                            <Button 
                                type="button"
                                link
                                text={<BarIcon />}
                                onClick={setToggled}
                            />
                        </Flex>
                    )}
                </div>
            </div>
        </header>
        {isMobile && (
            breadcrumbList && <Breadcrumb lists={breadcrumbList} />
        )}
        {isMobile && headerLeftAddComponent}
        </>
    )
}

export default Header