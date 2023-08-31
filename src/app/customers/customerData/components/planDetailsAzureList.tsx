"use client"
import React, { useMemo, useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import Flex from '@/components/flex';
import Button from '@/components/button';
import EditIcon from '@/components/svg/editIcon';
import Text from '@/components/text';
import Modal from '@/components/modal';
import PlanDetailsAzureForm from './planDetailsAzureForm';

const PlanDetailsAzureList = () => {
    const [isEdit, setIsEdit] = useState(false);
    const onOpenEdit = () => {
        setIsEdit(true);
    }
    const onCloseEdit = () => {
        setIsEdit(false);
    }
    const [rowData, setRowData] = useState();
    const [liveUsageHypexRowData, setLiveUsageHypexRowData] = useState();
    const planDetailsData:any = [
        {savingsPlan: '100%'},
    ];
    const columnDefs = [
        { headerName: 'Savings Plan', field: 'savingsPlan',},
        { headerName: 'Action', field: 'action', cellRenderer: ActionRenderer,},
    ];
    const planDetailsLiveUsageHypexDataData:any = [
        {savingsUse: '100%', savingsScope: '$3/hr', savingsUtilization: '10%', riUtilization: '$230', savingsPlanList: 'dhgyyegfyef'},
    ];
    const liveUsageHypexColumnDefs = [
        { headerName: 'Savings Use', field: 'savingsUse',},
        { headerName: 'Savings Scope', field: 'savingsScope',},
        { headerName: 'Savings Utilization', field: 'savingsUtilization',},
    ];
    function ActionRenderer(params:any) {
        return(
            <>
                <Flex justifyContent="center" flexColumn className="h-100">
                    <Button
                        type="button" 
                        linkInfo 
                        text={<EditIcon />}
                        onClick={onOpenEdit}
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
    useEffect(()=>{
        setRowData(planDetailsData);
        setLiveUsageHypexRowData(planDetailsLiveUsageHypexDataData);
    },[])
    return (
        <>
            <Flex flexColumn>
                <div className="row">
                    <div className="col-4 col-md-4">
                        <Text type="LEGEND" className="tdouble-heading mb-2 font-weight-500" text="" />
                        <div className="tdouble-card">
                            <div className="ag-theme-alpine t-auto-height">
                                <AgGridReact
                                    defaultColDef={defaultColDef}
                                    domLayout='autoHeight'
                                    rowData={rowData}
                                    columnDefs={columnDefs}
                                    overlayNoRowsTemplate={
                                        '<span class="no-row-data-list-wrap">No found</span>'
                                    }
                                >
                                </AgGridReact>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <Text type="LEGEND" className="tdouble-heading mb-2 font-weight-500" text="Live Usage - Hypex" />
                        <div className="tdouble-card">
                            <div className="ag-theme-alpine t-auto-height">
                                <AgGridReact
                                    defaultColDef={defaultColDef}
                                    domLayout='autoHeight'
                                    rowData={liveUsageHypexRowData}
                                    columnDefs={liveUsageHypexColumnDefs}
                                    overlayNoRowsTemplate={
                                        '<span class="no-row-data-list-wrap">No found</span>'
                                    }
                                >
                                </AgGridReact>
                            </div>
                        </div>
                    </div>
                </div>
            </Flex>
            {isEdit && (
                <Modal
                    secondary
                    onClose={onCloseEdit}
                    header={
                        <Text type="H4" text="Edit Customer Plan" className="modal-heading-title" />
                    }
                >
                    <PlanDetailsAzureForm onCloseModal={onCloseEdit} />
                </Modal>
            )}
        </>
    )
}

export default PlanDetailsAzureList