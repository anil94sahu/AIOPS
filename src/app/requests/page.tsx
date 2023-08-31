"use client";
import React, { useMemo, useState, useEffect } from "react";
import Layout from "../include/layout";
import Input from "@/components/input";
import SearchIcon from "@/components/svg/searchIcon";
import Flex from "@/components/flex";
import Dropdown from "@/components/dropdown";
import Button from "@/components/button";
import Text from "@/components/text";
import CardTable from "@/components/cardTable";
import { AgGridReact } from "ag-grid-react";
import StatusCard from "@/components/statusCard";
import MoreVIcon from "@/components/svg/moreVIcon";
import Modal from "@/components/modal";
import CommentPlusIcon from "@/components/svg/commentPlusIcon";
import MoreList from "@/components/moreList";
import ReopenIcon from "@/components/svg/reopenIcon";
import Avatartooltip from "@/components/avatartooltip";
import AvatarDP from "@/assets/images/avatar-db-t.png";
import IconTextNumberCard from "@/components/iconTextNumberCard";
import SupportCircleIcon from "@/components/svg/supportCircleIcon";
import AddCommentForm from "./components/addCommentForm";
import ReopenComp from "./components/reopenComp";
import StatusFormComp from "./components/statusFormComp";
import Link from "next/link";
import Tooltip from "@/components/tooltip";
import Image from "next/image";
import { getRequestsListService } from "./requests-service";
import { REQUEST_STATUS } from "../../../utils/constants";
import { format } from "date-fns";
import { getRequestsToken } from "../auth-service";
import { toast } from "react-toastify";

interface requestProps {
  total_requests: number;
  open_requests: number;
  closed_requests: number;
  inProgress_requests: number;
}
const initialRequestsValues = {
  total_requests: 0,
  open_requests: 0,
  closed_requests: 0,
  inProgress_requests: 0,
};

const Requests = () => {
  const [isSearch, setIsSearch] = useState("");
  const [isSearchFound, setIsSearchFound] = useState("");
  const [rowData, setRowData] = useState();
  const [isLoading, setIsLoding] = useState(false);
  const [requestCounting, setRequestCounting] = useState<requestProps>(
    initialRequestsValues
  );
  const [statusData, setStatusData] = useState();

  const columnDefs = [
    {
      headerName: "S.No",
      field: "sno",
      width: 70,
      cellRenderer: (params: any) => params.node.rowIndex + 1,
      flex: 0.7,
    },
    {
      headerName: "Organization Name",
      field: "customerName",
      width: 186,
      flex: 1,
    },
    { headerName: "Requests", field: "requests", width: 180, flex: 1 },
    { headerName: "Ticket Id", field: "ticketId", flex: 1.5 },
    {
      headerName: "Created Date",
      field: "createdDate",
      width: 110,
      cellRenderer: (params: any) => params.value,
      flex: 1.5,
    },
    {
      headerName: "Closed Date",
      field: "closedDate",
      width: 110,
      cellRenderer: (params: any) => params.value,
      flex: 1,
    },
    {
      headerName: "Status",
      field: "reqStatus",
      cellRenderer: StatusRenderer,
      width: 113,
      flex: 1,
    },
    // { headerName: 'Comments', field: 'comments', width: 160,},
    {
      headerName: "Action",
      field: "action",
      cellRenderer: ActionRenderer,
      width: 80,
      flex: 0.7,
    },
  ];
  function CustomerNameRenderer(params: any) {
    return <Link href="/customers/customerData">{params.value}</Link>;
  }
  function StatusRenderer(params: any) {
    if (params.value === REQUEST_STATUS.CLOSED) {
      return (
        <Flex alignItemsCenter className="h-100">
          <StatusCard verified text={REQUEST_STATUS.CLOSED} />
        </Flex>
      );
    } else if (params.value === REQUEST_STATUS.INPROGRESS) {
      return (
        <Flex alignItemsCenter className="h-100">
          <StatusCard inprogress text={REQUEST_STATUS.INPROGRESS} />
        </Flex>
      );
    } else if (params.value === REQUEST_STATUS.OPEN) {
      return (
        <Flex alignItemsCenter className="h-100">
          <StatusCard unopened text={REQUEST_STATUS.OPEN} />
        </Flex>
      );
    } else if (params.value === REQUEST_STATUS.CANCELLED) {
      return (
        <Flex alignItemsCenter className="h-100">
          <StatusCard unpaid text={REQUEST_STATUS.CANCELLED} />
        </Flex>
      );
    }
  }
  function ByRenderer(params: any) {
    return (
      <Flex alignItemsCenter justifyContent="center" className="h-100">
        <Tooltip text="Mandealin">
          <Image src={AvatarDP} alt="Mandealin" />
        </Tooltip>
      </Flex>
    );
  }
  const [isAddComment, setIsAddComment] = useState(false);
  const onOpenAddComment = () => {
    setIsAddComment(true);
    setIsMoreVertical(false);
  };
  const onCloseAddComment = () => {
    setIsAddComment(false);
  };
  const [isReopen, setIsReopen] = useState(false);
  const onOpenReopen = () => {
    setIsReopen(true);
    setIsMoreVertical(false);
  };
  const onCloseReopen = () => {
    setIsReopen(false);
  };
  const [isStatus, setIsStatus] = useState(false);
  const onOpenStatus = () => {
    setIsStatus(true);
    setIsMoreVertical(false);
  };
  const onCloseStatus = () => {
    setIsStatus(false);
    getRequestsList();
  };

  const [isMoreVertical, setIsMoreVertical] = useState(false);
  const onOpenMoreVertical = (idx: any, params: any) => {
    setIsMoreVertical(true);
    setStatusData(params.data);
  };
  const onCloseMoreVertical = () => {
    setIsMoreVertical(false);
  };

  const getRequestsList = async () => {
    setIsLoding(true);
    getRequestsListService()
      .then((response) => {
        if (response.status === 200) {
          const requestData: any = formatData(response.data.customer_requests);
          if (requestData) {
            setRowData(requestData);
            requestAnalytics(requestData);
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
            getRequestsList();
          });
        }
      });
  };
  const requestAnalytics = (data: any) => {
    const total_requests = data.length;
    const inProgress_requests = data.filter(
      (item: any) => item.reqStatus === REQUEST_STATUS.OPEN
    ).length;
    const open_requests = data.filter(
      (item: any) => item.reqStatus === REQUEST_STATUS.INPROGRESS
    ).length;
    const closed_requests = data.filter(
      (item: any) => item.reqStatus === REQUEST_STATUS.CLOSED
    ).length;
    setRequestCounting({
      total_requests,
      open_requests,
      inProgress_requests,
      closed_requests,
    });
  };
  const formatData = (val: any) => {
    return val.map((item: any, index: number) => {
      return {
        customerName: item.organization_name,
        requests: item.title,
        ticketId: item.request_id,
        createdDate: format(new Date(item.updated_at), "yyyy-MM-dd"),
        closedDate:
          item.request_status === REQUEST_STATUS.PENDING
            ? "-"
            : format(new Date(item.updated_at), "yyyy-MM-dd"),
        reqStatus: item.request_status,
        request_type: item.request_type,
        title: item.title,
        customer_id: item.customer_id,
      };
    });
  };

  function ActionRenderer(params: any) {
    const rowIndex = params?.node?.rowIndex;
    return (
      <>
        <Flex className="h-100">
          <Button
            type="button"
            linkInfo
            text=""
            icon={<MoreVIcon />}
            onClick={() => onOpenMoreVertical(rowIndex, params)}
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
    getRequestsList();
  }, []);
  return (
    <Layout breadcrumbList={[{ text: "Requests" }]}>
      <div className="row">
        <div className="col-12 col-md-3">
          <IconTextNumberCard
            icon={<SupportCircleIcon />}
            text="Total Requests"
            number={requestCounting?.total_requests.toString()}
          />
        </div>
        <div className="col-12 col-md-3">
          <IconTextNumberCard
            icon={<SupportCircleIcon />}
            text="Open Requests"
            number={requestCounting?.inProgress_requests.toString()}
          />
        </div>
        <div className="col-12 col-md-3">
          <IconTextNumberCard
            icon={<SupportCircleIcon />}
            text="In-Progress Requests"
            number={requestCounting?.open_requests.toString()}
          />
        </div>
        <div className="col-12 col-md-3">
          <IconTextNumberCard
            icon={<SupportCircleIcon />}
            text="Closed Requests"
            number={requestCounting?.closed_requests.toString()}
          />
        </div>
        {/* <div className="col-12 col-md-3">
                    <IconTextNumberCard
                        icon={<SupportCircleIcon />}
                        text="Reopen Requests"
                        number="04" 
                    />
                </div> */}
      </div>
      <div className="filter-list-wrapper">
        <div className="filter-list-main-wrp">
          <div className="filter-list-left"></div>
        </div>
      </div>

      <CardTable>
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
        <div onClick={onOpenAddComment}> </div>
      </CardTable>
      {isMoreVertical && (
        <Modal widthAuto onOutside={onCloseMoreVertical}>
          <MoreList
            lists={[
              {
                icon: <CommentPlusIcon />,
                text: "Status",
                onClick: onOpenStatus,
              },
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
  );
};

export default Requests;
