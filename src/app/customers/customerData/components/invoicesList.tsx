"use client"
import React, { useMemo, useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import Avatartooltip from '@/components/avatartooltip';
import Flex from '@/components/flex';
import StatusCard from '@/components/statusCard';
import Link from 'next/link';
import AvatarDP from '@/assets/images/avatar-db-t.png';
import Button from '@/components/button';
import DownloadIcon from '@/components/svg/downloadIcon';
import Tooltip from '@/components/tooltip';
import InfoCircleIcon from '@/components/svg/infoCircleIcon';
import Text from '@/components/text';

const InvoicesList = () => {
    const [rowData, setRowData] = useState();
    const requestsData:any = [
        {sno: '01', customerName: 'Dinesh Subramani', cInvoiceId: 'Cust#12345', generatedOn: '12-07-2023', status: 'Paid', dueDate: '12-08-2023', inType: 'AWS', generatedOn2: '12-07-2023', status2: 'Unpaid', dueDate2: '12-07-2023', },
        {sno: '02', customerName: 'Dinesh Subramani', cInvoiceId: 'Cust#12345', generatedOn: '12-07-2023', status: 'Unpaid', dueDate: '12-08-2023', inType: 'AWS', generatedOn2: '12-07-2023', status2: 'Paid', dueDate2: '12-07-2023', },
        {sno: '03', customerName: 'Dinesh Subramani', cInvoiceId: 'Cust#12345', generatedOn: '12-07-2023', status: 'Paid', dueDate: '12-08-2023', inType: 'AWS', generatedOn2: '12-07-2023', status2: 'Unpaid', dueDate2: '12-07-2023', },
        {sno: '04', customerName: 'Dinesh Subramani', cInvoiceId: 'Cust#12345', generatedOn: '12-07-2023', status: 'Unpaid', dueDate: '12-08-2023', inType: 'AWS', generatedOn2: '12-07-2023', status2: 'Paid', dueDate2: '12-07-2023', },
    ];
    const columnDefs = [
        { headerName: 'Sl.No', field: 'sno', width: 60, flex:1 },
        { headerName: 'Customer Name', field: 'customerName', cellRenderer: CustomerNameRenderer, width: 190,flex:1.5},
        { headerName: 'C.Invoice Id', field: 'cInvoiceId', width: 110,flex:1},
        { headerName: 'Generated On', field: 'generatedOn', width: 100,flex:1},
        { headerName: 'Status', field: 'status', cellRenderer: StatusRenderer, width: 100,flex:1},
        { headerName: 'Due Date', field: 'dueDate', width: 100,flex:1},
        { headerName: 'In.Type', field: 'inType', width: 65,flex:0.8},
        { headerName: 'Generated On', field: 'generatedOn2', width: 100,flex:1},
        { headerName: 'Status', field: 'status2', cellRenderer: StatusRendererTwo, width: 100,flex:1},
        { headerName: 'Due Date', field: 'dueDate2', width: 100,flex:1},
        { headerName: 'Action', field: 'action', cellRenderer: ActionRenderer, width: 60,flex:1},
    ];
    function CustomerNameRenderer(params:any) {
        return <Link href="/customers/customerData">{params.value}</Link>
    }
    function StatusRenderer(params:any) {
        if (params.value === "Paid") {
            return <Flex alignItemsCenter className="h-100">
                    <StatusCard 
                        paid
                        text={<>
                            <Text type="SPAN" className="mr-1" text="Paid" /> 
                            <Tooltip 
                                text="Paid on 14-07-2023"
                            >
                                <InfoCircleIcon />
                            </Tooltip>
                        </>}
                    />
                </Flex>
        } else if (params.value === "Unpaid") {
            return <Flex alignItemsCenter className="h-100">
                    <StatusCard 
                        unpaid 
                        text={<>
                            <Text type="SPAN" className="mr-1" text="Unpaid" /> 
                            <Tooltip 
                                text="Unpaid on 14-07-2023"
                            >
                                <InfoCircleIcon />
                            </Tooltip>
                        </>}
                    />
                </Flex>
        } 
    }
    function StatusRendererTwo(params:any) {
        if (params.value === "Paid") {
            return <Flex alignItemsCenter className="h-100">
                    <StatusCard 
                        paid
                        text={<>
                            <Text type="SPAN" className="mr-1" text="Paid" /> 
                            <Tooltip 
                                text="Paid on 14-07-2023"
                            >
                                <InfoCircleIcon />
                            </Tooltip>
                        </>}
                    />
                </Flex>
        } else if (params.value === "Unpaid") {
            return <Flex alignItemsCenter className="h-100">
                    <StatusCard 
                        unpaid 
                        text={<>
                            <Text type="SPAN" className="mr-1" text="Unpaid" /> 
                            <Tooltip 
                                text="Unpaid on 14-07-2023"
                            >
                                <InfoCircleIcon />
                            </Tooltip>
                        </>}
                    />
                </Flex>
        } 
    }
    function ByRenderer(params:any) {
        return <Flex alignItemsCenter justifyContent="center" className="h-100"><Avatartooltip text="Mandealin" src={AvatarDP} /></Flex>
    }
    function ActionRenderer(params:any) {
        return(
            <>
                <Flex className="h-100">
                    <Button
                        type="button" 
                        linkInfo 
                        text={<DownloadIcon />}
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
    useEffect(()=>{
        setRowData(requestsData)
    },[])
    return (
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
    )
}

export default InvoicesList