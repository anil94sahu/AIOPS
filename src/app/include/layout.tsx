'use client'
import React, { useState } from 'react'
import Flex from '@/components/flex';
import Link from 'next/link';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import LogoImage from '@/assets/images/logo.svg';
import Image from 'next/image';
import Text from '@/components/text';
import { usePathname, useRouter } from 'next/navigation'
import HomeIcon from '@/components/svg/icon/homeIcon';
import Header from './header'
import ChevronDownIcon from '@/components/svg/chevronDownIcon';
import { useMediaQuery } from 'react-responsive';
import CustomersIcon from '@/components/svg/icon/customersIcon';
import FinopsIcon from '@/components/svg/icon/finopsIcon';
import SecurityIcon from '@/components/svg/icon/securityIcon';
import ResellerIcon from '@/components/svg/icon/resellerIcon';
import InvoiceIcon from '@/components/svg/icon/invoiceIcon';
import RequestsIcon from '@/components/svg/icon/requestsIcon';
import EventsIcon from '@/components/svg/icon/eventsIcon';
import LogoutIcon from '@/components/svg/icon/logoutIcon';
import { useStorage } from '../../../utils/usestorage';
import { deleteCookie } from 'cookies-next';

interface LayoutPropsType  {
    children: React.ReactNode;
    headerLeftAddComponent?: any;
    breadcrumbList?: any;
};

const Layout = ({children, headerLeftAddComponent, breadcrumbList} : any) => {
    const pathname = usePathname();
    const router = useRouter();
    const [toggled, setToggled] = useState(false);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const [broken, setBroken] = useState(isTabletOrMobile);
    const {removeItem } = useStorage();

    const navigateAndReload = (path: any) => {
        router.push(path);
        setTimeout(() => {
          window.location.reload();
        }, 500);
    }

    const logoutHandler = async () => {
        removeItem("jwtToken", "session");
        deleteCookie('jwtToken');
        navigateAndReload("/");
      };

    return (
        <div className="layout-wrapper">
            <Sidebar
                toggled={toggled}
                onBreakPoint={setBroken}
                // customBreakPoint="1024px"
                backgroundColor="none"
                transitionDuration={500}
                rootStyles={{
                    borderRight: '0px',
                    height: '100vh',
                    position: 'fixed',
                    top: '0',
                    bottom: '0',
                    zIndex: '99',
                    left: '0',
                    color: '#000',
                }}
            >
                <Menu
                    menuItemStyles={{
                        button: ({ level, active, disabled }) => {
                            if (level === 0) {
                                return {
                                    backgroundColor: active ? '#F3F3FB' : '',
                                };
                            }
                        },
                    }}
                    renderExpandIcon={({ open }) => <ChevronDownIcon right={!open} width={18} height={18} />}
                >
                    <div className="sidebar-main">
                        <div className="sidebar-main-top">
                            <div className="logo">
                                    <Image src={LogoImage} alt="AIOPS" />
                                <Link href="/" className="logo-link">
                                </Link>
                            </div>
                            <Text type="LEGEND" className="legend-title" text="Menu" />
                            <MenuItem 
                                disabled = {true}
                                active={pathname === "/"} 
                                icon={<HomeIcon />} 
                                onClick={() => router.push('/')}
                            >
                                Home
                            </MenuItem>
                            <MenuItem
                                active={pathname === "/customers"} 
                                icon={<CustomersIcon />} 
                                onClick={() => router.push('/customers')}
                            >
                                Customers
                            </MenuItem>
                            <MenuItem
                                disabled = {true}
                                // active={pathname === "/finops"} 
                                icon={<FinopsIcon />} 
                                // onClick={() => router.push('/finops')}
                            >
                                Finops
                            </MenuItem>
                            <MenuItem
                                disabled = {true}
                                active={pathname === "/security"} 
                                icon={<SecurityIcon />} 
                                // onClick={() => router.push('/security')}
                            >
                                Security
                            </MenuItem>
                            <MenuItem
                                disabled = {true}
                                active={pathname === "/reseller"} 
                                icon={<ResellerIcon />} 
                                // onClick={() => router.push('/reseller')}
                            >
                                Reseller
                            </MenuItem>
                            <MenuItem
                                active={pathname === "/invoices"} 
                                icon={<InvoiceIcon />} 
                                onClick={() => router.push('/invoices')}
                            >
                                Invoices
                            </MenuItem>
                            <MenuItem
                                active={pathname === "/requests"} 
                                icon={<RequestsIcon />} 
                                onClick={() => router.push('/requests')}
                            >
                                Requests
                            </MenuItem>
                            <MenuItem
                                disabled = {true}
                                active={pathname === "/events"} 
                                icon={<EventsIcon />} 
                                // onClick={() => router.push('/events')}
                            >
                                Events
                            </MenuItem>
                        </div>
                        <div className="sidebar-main-bottom">
                        Need help ?
                            <Link href="/" className="link"></Link>
                            <MenuItem 
                                className="logout-menu-item"
                                icon={<LogoutIcon />}
                                onClick={logoutHandler}
                            >
                                Logout
                            </MenuItem>
                            <Flex className="version-text">
                                <Text type="PARAGRAPH" className="mr-2" text="V2.2" />
                                <Text type="PARAGRAPH" className="ml-1" text="Powered by AxiomIO" />
                            </Flex>
                        </div>
                    </div>
                </Menu>
            </Sidebar>
            <div className="layout-main-wrapper">
                <Header
                    broken={broken}
                    setToggled={() => setToggled(!toggled)} 
                    headerLeftAddComponent={headerLeftAddComponent}
                    breadcrumbList={breadcrumbList}
                />
                <div className="layout-content-wrapper">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Layout