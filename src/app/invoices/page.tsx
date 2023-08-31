"use client"
import React, { useMemo, useState, useEffect } from 'react'
import Layout from '../include/layout'
import Flex from '@/components/flex'
import Button from '@/components/button'
import Text from '@/components/text'
import CardTable from '@/components/cardTable'
import { AgGridReact } from 'ag-grid-react'
import Link from 'next/link'
import StatusCard from '@/components/statusCard'
import Tooltip from '@/components/tooltip'
import InfoCircleIcon from '@/components/svg/infoCircleIcon'
import AlertMessage from '@/components/alertMessage'
import TickCircleIcon from '@/components/svg/tickCircleIcon'
import InvoiceCard from '@/components/invoiceCard'
import InvoiceNoteIcon from '@/components/svg/invoiceNoteIcon'
import { getInvoicesListService } from './invoices-service'
import { ACCOUNT, INVOICES_STATUS } from '../../../utils/constants'
import MoreVIcon from '@/components/svg/moreVIcon'
import Modal from '@/components/modal'
import MoreList from '@/components/moreList'
import CommentPlusIcon from '@/components/svg/commentPlusIcon'
import StatusFormComp from './components/statusFormComp'
import { format } from "date-fns";
import { getRequestsToken } from '../auth-service'
import { toast } from 'react-toastify'

interface invoiceProps { total: number, open: number, closed: number }
const initialRequestsValues = { total: 0, open: 0, closed: 0 }

const Invoices = () => {
    const [isDownload, setIsDownload] = useState(false);
    const [isLoading, setIsLoding] = useState(false);
    const [statusData, setStatusData] = useState();
    const [isStatus, setIsStatus] = useState(false);
    const [requestCounting, setRequestCounting] = useState<invoiceProps>(initialRequestsValues);
    const [isMoreVertical, setIsMoreVertical] = useState(false);
    const onCloseDownload = () => {
        setIsDownload(false);
    }
    const onOpenStatus = () => {
        setIsStatus(true);
        setIsMoreVertical(false);
    }
    const onCloseStatus = () => {
        setIsStatus(false);
        getInvoiceList();
    }
    const [rowData, setRowData] = useState();
    const onOpenMoreVertical = (idx: any, params: any) => {
        setIsMoreVertical(true);
        setStatusData(params.data);
    }
    const onCloseMoreVertical = () => {
        setIsMoreVertical(false);
    }
    const columnDefs = [
        { headerName: 'S.No', field: 'sno', flex: 0.5, cellRenderer: (params: any) => params.node.rowIndex + 1},
        { headerName: 'Organization Name', field: 'customerName', flex: 1},
        { headerName: 'Invoice Id', field: 'cInvoiceId', },
        { headerName: 'Generated On', field: 'generatedOn', flex: 1},
        { headerName: 'Status', field: 'status', cellRenderer: StatusRenderer, flex: 1},
        { headerName: 'Due Date', field: 'dueDate', flex: 1},
        { headerName: 'Service', field: 'inType', flex: 1},
        { headerName: 'Due Amount', field: 'dueAmount', flex: 1},
        { headerName: 'Paid on', field: 'paidOn', flex: 1, cellRenderer:(params: any) => params.value},
        { headerName: 'Action', field: 'action', cellRenderer: ActionRenderer, flex: 1},
    ];
    
    function CustomerNameRenderer(params:any) {
        return <Link href="/customers/customerData">{params.value}</Link>
    }
    function StatusRenderer(params:any) {
        if (params.value === INVOICES_STATUS.ISSUED) {
            return <Flex alignItemsCenter className="h-100">
                    <StatusCard 
                        unopened
                        text={<>
                            <Text type="SPAN" className="mr-1" text={INVOICES_STATUS.ISSUED} /> 
                        </>}
                    />
                </Flex>
        } else if (params.value === INVOICES_STATUS.PAID) {
            return <Flex alignItemsCenter className="h-100">
                    <StatusCard 
                        paid 
                        text={<>
                            <Text type="SPAN" className="mr-1" text={INVOICES_STATUS.PAID} /> 
                        </>}
                    />
                </Flex>
        } 
        else if (params.value === INVOICES_STATUS.OVERDUE) {
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
    function ActionRenderer(params:any) {
        const rowIndex = params?.node?.rowIndex;
        return(
            <>
                <Flex alignItemsCenter className="invoiceactions h-100">
                    <Button
                        type="button"
                        linkInfo
                        onClick={() => onOpenMoreVertical(rowIndex, params)}
                        text={<MoreVIcon />}
                    />
                </Flex>
            </>
        )
    }
    const defaultColDef = useMemo(() => {
        return {
            sortable: true,
            resizable: true,
            initialWidth: 200,
            wrapHeaderText: true,
            autoHeaderHeight: true,            
        };
    }, []);

    const paginationPageSize = 10;

    const getInvoiceList = async () => {
        setIsLoding(true);
        getInvoicesListService().then((response) => {
            if (response.status === 200) {
                const invoicesData: any = formatData(response.data.customer_invoices);
                if (invoicesData) {
                    setRowData(invoicesData);
                    analytics(invoicesData);
                }
                setIsLoding(false);
            }
        })
            .catch((error) => {
                const notify = () => toast(error?.response?.data?.detail);
                notify();
                setIsLoding(false);
                if (error?.response?.status === 401) {
                    getRequestsToken().then(() => {
                        getInvoiceList();
                    });
                  }
            })
    }

    const analytics = (data: any) => {
        const total = data.filter((item: any) => item.status === INVOICES_STATUS.ISSUED).length;
        const open = data.filter((item: any) => item.status === INVOICES_STATUS.OVERDUE).length;
        const closed = data.filter((item: any) => item.status === INVOICES_STATUS.PAID).length
        setRequestCounting({ total: total, open: open, closed: closed });
    }

    const formatData = (val: any) => {
        return val.map((item: any, index: number) => {
            return { customerName: item.organization_name, cInvoiceId: item.remote_invoice_id, generatedOn: item.generated_date, 
                status: item.invoice_status, dueDate: item.due_date, id:item.id ,
                inType: ACCOUNT.aws.toUpperCase(), 
                paidOn: item.invoice_status === INVOICES_STATUS.PAID?format(new Date(item.paid_date), 'yyyy-MM-dd'):'NA', 
                dueAmount: `$${Math.ceil(item.due_amount)}`,
                customer_id:item.customer_id,
            };
        })
    }

    useEffect(()=>{
        getInvoiceList();
    },[])

    return (
        <Layout
            breadcrumbList={[{text: "Invoices"}]}
        >
            <div className="row">
                <div className="col-12 col-md-4">
                    <InvoiceCard
                        icon={<InvoiceNoteIcon />}
                        text="Issued Invoices"
                        number={requestCounting?.total.toString()}
                        tooltipText="54% higher than last month"
                    />
                </div>
                <div className="col-12 col-md-4">
                    <InvoiceCard
                        icon={<InvoiceNoteIcon />}
                        text="Paid Invoice"
                        number={requestCounting?.closed.toString()}
                        numberAws={requestCounting?.closed.toString()}
                        // numberAzure="16"
                        // numberSecurity="16" 
                    />
                </div>
                <div className="col-12 col-md-4">
                    <InvoiceCard
                        icon={<InvoiceNoteIcon />}
                        text="Overdue Invoice"
                        number={requestCounting?.open.toString()}
                        numberAws={requestCounting?.open.toString()}
                        // numberAzure="16"
                        // numberSecurity="16" 
                    />
                </div>
            </div>
            <CardTable>
                <div className="ag-theme-alpine">
                    <AgGridReact
                        defaultColDef={defaultColDef}
                        domLayout='autoHeight'
                        rowData={rowData}
                        columnDefs={columnDefs}
                        pagination={true}
                        paginationPageSize={paginationPageSize}
                        overlayNoRowsTemplate={
                            '<span class="no-row-data-list-wrap">No invoice found</span>'
                        }
                    >
                    </AgGridReact>
                </div>
            </CardTable>            
            {isDownload &&
                <AlertMessage
                    isShow={isDownload}
                    handleClose={onCloseDownload}
                    type="success"
                    icon={<TickCircleIcon width={20} height={20} fill="currentColor" />}
                    message="Invoice downloaded succesfully"
                />
            }
            {isMoreVertical && (
                <Modal widthAuto onOutside={onCloseMoreVertical}>
                    <MoreList
                        lists={[
                            {
                                icon: <CommentPlusIcon />,
                                text: "Status",
                                onClick: onOpenStatus,
                            }
                        ]}
                    />
                </Modal>
            )}
            {isStatus && (
                <Modal
                    secondary
                    onClose={onCloseStatus}
                    header={
                        <Text type="H4" text="Status" className="modal-heading-title" />
                    }
                >
                    <StatusFormComp onCloseModal={onCloseStatus} data={statusData} />
                </Modal>
            )}
        </Layout>
    )
}

export default Invoices