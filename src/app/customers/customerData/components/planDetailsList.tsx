"use client"
import React, { useMemo, useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import Flex from '@/components/flex';
import Button from '@/components/button';
import EditIcon from '@/components/svg/editIcon';
import Text from '@/components/text';
import Modal from '@/components/modal';
import PlanDetailsAwsForm from './planDetailsAwsForm';

const PlanDetailsList = () => {
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
        {savingsPlan: '100%', riPlan: '30%', spp: '120%'},
    ];
    const columnDefs = [
        { headerName: 'Savings Plan', field: 'savingsPlan', flex:1},
        { headerName: 'RI Plan', field: 'riPlan', flex:1},
        { headerName: 'SPP', field: 'spp', flex:1},
        { headerName: 'Action', field: 'action', cellRenderer: ActionRenderer},
    ];
    const planDetailsLiveUsageHypexDataData:any = [
        {savingsUse: '100%', savingsScope: '$3/hr', savingsUtilization: '10%', riUtilization: '$230', savingsPlanList: 'dhgyyegfyef'},
    ];
    const liveUsageHypexColumnDefs = [
        { headerName: 'Savings Use', field: 'savingsUse',  flex:1},
        { headerName: 'Savings Scope', field: 'savingsScope',  flex:1},
        { headerName: 'Savings Utilization', field: 'savingsUtilization', flex:1},
        { headerName: 'RI Utilization', field: 'riUtilization', flex:1},
        { headerName: 'Savings Plan List', field: 'savingsPlanList'},
    ];
    function ActionRenderer(params:any) {
        return(
            <>
                <Flex justifyContent="center" flexColumn className="editbutton h-100">
                    <Button
                        type="button" 
                        linkInfo 
                        onClick={onOpenEdit}
                        text={<EditIcon />}
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
            {isEdit && (
                <Modal
                    secondary
                    onClose={onCloseEdit}
                    header={
                        <Text type="H4" text="Edit Customer Plan" className="modal-heading-title" />
                    }
                >
                    <PlanDetailsAwsForm onCloseModal={onCloseEdit} />
                </Modal>
            )}
        </>
    )
}

export default PlanDetailsList