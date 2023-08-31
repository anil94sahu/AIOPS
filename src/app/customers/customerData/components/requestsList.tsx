"use client";
import React, { useMemo, useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import Avatartooltip from "@/components/avatartooltip";
import Flex from "@/components/flex";
import StatusCard from "@/components/statusCard";
import Link from "next/link";
import AvatarDP from "@/assets/images/avatar-db-t.png";
import Button from "@/components/button";
import MoreVIcon from "@/components/svg/moreVIcon";
import Image from "next/image";
import Tooltip from "@/components/tooltip";

const RequestsList = () => {
  const [rowData, setRowData] = useState();
  const requestsData: any = [
    {
      sno: "01",
      customerName: "Dinesh Subramani",
      requests: "Apply my savings plan",
      ticketId: "#ID65565",
      createdDate: "12-07-2023",
      closedDate: "12-07-2023",
      reqStatus: "Completed",
      comments: "Team working on it",
    },
    {
      sno: "02",
      customerName: "Dinesh Subramani",
      requests: "Apply my savings plan",
      ticketId: "#ID65565",
      createdDate: "12-07-2023",
      closedDate: "NA",
      reqStatus: "Inprogress",
      comments: "Team working on it",
    },
    {
      sno: "03",
      customerName: "Dinesh Subramani",
      requests: "Apply my savings plan",
      ticketId: "#ID65565",
      createdDate: "12-07-2023",
      closedDate: "NA",
      reqStatus: "Unopened",
      comments: "Team working on it",
    },
    {
      sno: "04",
      customerName: "Dinesh Subramani",
      requests: "Apply my savings plan",
      ticketId: "#ID65565",
      createdDate: "12-07-2023",
      closedDate: "12-07-2023",
      reqStatus: "Completed",
      comments: "Team working on it",
    },
  ];
  const columnDefs = [
    { headerName: "Sl.No", field: "sno", width: 65, flex: 0.5 },
    {
      headerName: "Customer Name",
      field: "customerName",
      cellRenderer: CustomerNameRenderer,
      width: 186,
      flex: 1.5,
    },
    { headerName: "Requests", field: "requests", width: 180, flex: 1.5 },
    { headerName: "Ticket Id", field: "ticketId", width: 100, flex: 1 },
    { headerName: "Created Date", field: "createdDate", width: 110, flex: 1 },
    { headerName: "Closed Date", field: "closedDate", width: 110, flex: 1 },
    {
      headerName: "Req Status",
      field: "reqStatus",
      cellRenderer: StatusRenderer,
      width: 113,
      flex: 1,
    },
    { headerName: "Comments", field: "comments", width: 160, flex: 1.5 },
    {
      headerName: "By",
      field: "by",
      cellRenderer: ByRenderer,
      width: 120,
      flex: 0.9,
    },
    {
      headerName: "Action",
      field: "action",
      cellRenderer: ActionRenderer,
      flex:1,
      width: 80,
    },
  ];
  function CustomerNameRenderer(params: any) {
    return <Link href="/customers/customerData">{params.value}</Link>;
  }
  function StatusRenderer(params: any) {
    if (params.value === "Completed") {
      return (
        <Flex alignItemsCenter className="h-100">
          <StatusCard completed text="Completed" />
        </Flex>
      );
    } else if (params.value === "Inprogress") {
      return (
        <Flex alignItemsCenter className="h-100">
          <StatusCard inprogress text="Inprogress" />
        </Flex>
      );
    } else if (params.value === "Unopened") {
      return (
        <Flex alignItemsCenter className="h-100">
          <StatusCard unopened text="Unopened" />
        </Flex>
      );
    }
  }
  function ByRenderer(params: any) {
    return (
      <Flex className="h-100">
        <Tooltip text="Mandealin">
          <Image src={AvatarDP} alt="Mandealin" />
        </Tooltip>
      </Flex>
    );
  }
  function ActionRenderer(params: any) {
    return (
      <>
        <Flex className="h-100">
          <Button
            type="button"
            linkInfo
            text=""
            icon={<MoreVIcon />}
            // onClick={onOpenMoreVertical}
          />
        </Flex>
      </>
    );
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
  useEffect(() => {
    setRowData(requestsData);
  }, []);
  return (
    <div className="ag-theme-alpine">
      <AgGridReact
        defaultColDef={defaultColDef}
        domLayout="autoHeight"
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
        paginationPageSize={paginationPageSize}
        overlayNoRowsTemplate={
          '<span class="no-row-data-list-wrap">No requets found</span>'
        }
      ></AgGridReact>
    </div>
  );
};

export default RequestsList;
