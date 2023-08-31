"use client";
import React, { useMemo, useState, useEffect } from "react";
import Layout from "../include/layout";
import CardTable from "@/components/cardTable";
import { AgGridReact } from "ag-grid-react";
import StatusCard from "@/components/statusCard";
import Flex from "@/components/flex";
import Button from "@/components/button";
import TypeImage from "@/components/typeImage";
import TypeAWSImg from "@/assets/images/aws-icon.svg";
import TypeAzureImg from "@/assets/images/azure-icon.svg";
import TrashIcon from "@/components/svg/trashIcon";
import EditIcon from "@/components/svg/editIcon";
import Modal from "@/components/modal";
import IconContentCard from "@/components/iconContentCard";
import Text from "@/components/text";
import TrashTwoIcon from "@/components/svg/trashTwoIcon";
import TickCircleIcon from "@/components/svg/tickCircleIcon";
import PlusCircleIcon from "@/components/svg/plusCircleIcon";
import AddUserForm from "./components/addUserForm";
import AddCustomerForm from "./components/addCustomerForm";
import Link from "next/link";
import { deleteCustomer, getCustomersListService } from "./customers-service";
import { ACCOUNT_TYPE } from "../../../utils/constants";
import Dropdown from "@/components/dropdown";
import SearchIcon from "@/components/svg/searchIcon";
import Input from "@/components/input";
import { getRequestsToken } from "../auth-service";
import { ToastContainer, toast } from "react-toastify";
import AuthGuard from "../auth-guard";

const Customers = () => {
  const [isSearch, setIsSearch] = useState("");
  const [isSearchFound, setIsSearchFound] = useState("");
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [isLoading, setIsLoding] = useState(false);
  const [deleteDataId, setDeleteDataId] = useState(0);

  const onOpenDeleteModal = (idx: any, params: any) => {
    setIsDeleteModal(true);
    setDeleteDataId(params.data.customerId);
  };
  const onCloseDeleteModal = () => {
    setIsDeleteModal(false);
  };
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(false);
  const onOpenDeleteSuccess = (id: any) => {
    deleteCustomerInList(deleteDataId);
    setIsDeleteSuccess(true);
  };
  const onCloseDeleteSuccess = () => {
    setIsDeleteSuccess(false);
    setIsDeleteModal(false);
    getCustomersList();
  };
  const [isAddUser, setIsAddUser] = useState(false);
  const onOpenAddUser = () => {
    setIsAddUser(true);
  };
  const onCloseAddUser = () => {
    setIsAddUser(false);
    getCustomersList();
  };
  const [isAddCustomer, setIsAddCustomer] = useState(false);
  const onOpenAddCustomer = () => {
    setIsAddCustomer(true);
  };
  const onCloseAddCustomer = () => {
    setIsAddCustomer(false);
    getCustomersList();
  };
  const [rowData, setRowData] = useState();
  const columnDefs = [
    {
      headerName: "S.No",
      field: "sno",
      width: 70,
      cellRenderer: (params: any) => params.node.rowIndex + 1,
      flex: 0.5,
    },
    {
      headerName: "Organization Name",
      field: "customerName",
      width: 320,
      flex: 0.9,
    },
    {
      headerName: "Accounts",
      field: "accounts",
      width: 240,
      cellRenderer: (params: any) => params.value,
      flex: 0.9,
    },
    {
      headerName: "Service",
      field: "serviceType",
      cellRenderer: ServiceRenderer,
      width: 200,
      flex: 0.9,
    },
    {
      headerName: "Status",
      field: "status",
      cellRenderer: StatusRenderer,
      width: 168,
      flex: 1,
    },
    {
      headerName: "Action",
      field: "action",
      cellRenderer: ActionRenderer,
      width: 110,
      flex: 0.5,
    },
  ];
  function CustomerNameRenderer(params: any) {
    return <Link href="/customers/customerData">{params.value}</Link>;
  }
  function ServiceRenderer(params: any) {
    if (params.value === "AWS") {
      return <TypeImage src={TypeAWSImg} text="AWS" />;
    } else if (params.value === "AZURE") {
      return <TypeImage src={TypeAzureImg} text="AZURE" />;
    } else if (params.value === "ALL") {
      return (
        <Flex alignItemsCenter className="h-100">
          <TypeImage src={TypeAWSImg} text="AWS" />{" "}
          <TypeImage src={TypeAzureImg} text="AZURE" />
        </Flex>
      );
    } else if (params.value === "NA") {
      return "--";
    }
  }
  function StatusRenderer(params: any) {
    if (params.value === "Verified") {
      return (
        <Flex alignItemsCenter className="h-100">
          <StatusCard verified text="Verified" />
        </Flex>
      );
    } else if (params.value === "Unverified") {
      return (
        <Flex alignItemsCenter className="h-100">
          <StatusCard unopened text="Unverified" />
        </Flex>
      );
    }
  }
  function ActionRenderer(params: any) {
    const rowIndex = params?.node?.rowIndex;
    return (
      <>
        <Flex
          alignItemsCenter
          justifyContent="center"
          className="downloadbutton h-100"
        >
          <Button
            type="button"
            linkDanger
            text={<TrashIcon />}
            onClick={() => onOpenDeleteModal(rowIndex, params)}
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

  const getCustomersList = async () => {
    setIsLoding(true);
    getCustomersListService()
      .then((response) => {
        if (response.status === 200) {
          const customerData: any = responseToCustomersData(
            response.data?.data
          );
          if (customerData) setRowData(customerData);
          setIsLoding(false);
        }
      })
      .catch((error) => {
        const notify = () => toast(error?.response?.data?.detail);
        notify();
        setIsLoding(false);
        if (error?.response?.status === 401) {
          getRequestsToken().then(() => {
            getCustomersList();
          });
        }
      });
  };

  const deleteCustomerInList = async (id: number) => {
    setIsLoding(true);
    deleteCustomer(id)
      .then((response) => {
        setIsLoding(false);
      })
      .catch((error) => {
        const notify = () => toast(error?.response?.data?.detail);
        notify();
        setIsLoding(false);
        if (error?.response?.status === 401) {
          getRequestsToken().then(() => {
            deleteCustomerInList(id);
          });
        }
      });
  };

  const responseToCustomersData = (val: any) => {
    return val.map((item: any, index: number) => {
      let obj: any = {
        customerName: item.organization_name,
        customerId: item.customer_id,
      };
      if (item.cloud_accounts.length > 0) {
        item.cloud_accounts.map((cloud: any) => {
          if (cloud.account_type === ACCOUNT_TYPE.management_account) {
            obj = {
              ...obj,
              serviceType: cloud.cloud_provider.toUpperCase(),
              accounts: cloud.account_number,
              account_type: cloud.account_type,
              status: "Verified",
            };
          }
          return obj;
        });
      } else {
        obj = {
          ...obj,
          serviceType: "NA",
          accounts: "--",
          account_type: "NA",
          status: "Unverified",
        };
        return obj;
      }
      return obj;
    });
    // .filter((e:any)=>e.account_type===ACCOUNT_TYPE.management_account);
  };

  const paginationPageSize = 10;
  useEffect(() => {
    getCustomersList();
  }, []);

  return (
    <AuthGuard>
      <Layout breadcrumbList={[{ text: "Customers" }]}>
        <ToastContainer autoClose={false}/>
        <div className="filter-list-wrapper">
          <div className="filter-list-main-wrp">
            <div className="filter-list-left">
              <div className="filter-search-wrapper">
                <div className="search-field">
                  <Input
                    icon={<SearchIcon />}
                    nolabel
                    type="text"
                    placeholder="Add Customer"
                    name="firstName"
                    autoFocus={true}
                    value={isSearch}
                    onChange={(e: any) => setIsSearch(e.target.isSearch)}
                  />
                </div>
                <Flex>
                  <Dropdown
                    text="Services"
                    list={[
                      {
                        text: "AWS",
                      },
                      {
                        text: "Azure",
                      },
                      {
                        text: "Securities",
                      },
                    ]}
                  />
                </Flex>
                <Flex>
                  <Dropdown
                    text="Status"
                    list={[
                      {
                        text: "Verified",
                      },
                      {
                        text: "Unverified",
                      },
                    ]}
                  />
                </Flex>
              </div>
              <Flex className="filter-search-action">
                <Button
                  type="button"
                  className="btn-search"
                  text="Search"
                  iconLeft={<SearchIcon />}
                />
              </Flex>
            </div>
            <div className="filter-list-right">
              <Button
                type="button"
                disabled
                iconLeft={<PlusCircleIcon />}
                text="Add User"
                onClick={onOpenAddUser}
              />
              <Button
                type="button"
                iconLeft={<PlusCircleIcon />}
                outline
                text="Add Customer"
                onClick={onOpenAddCustomer}
              />
            </div>
          </div>
          {/* {!isSearchFound && <Text type="SPAN" className="search-found-text" text="54 Customers found" />} */}
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
                '<span class="no-row-data-list-wrap">No customers found</span>'
              }
            ></AgGridReact>
          </div>
          {isDeleteModal && (
            <Modal onClose={onCloseDeleteModal} small>
              {isDeleteSuccess ? (
                <IconContentCard
                  className="py-3 mx-auto col-12 col-md-8"
                  icon={<TickCircleIcon />}
                >
                  <Text
                    type="PARAGRAPH"
                    className="font-weight-500 text-black-700 mb-4"
                    text="Customer data deleted successfully"
                  />
                  <Flex justifyContent="center" className="action-button">
                    <Button
                      type="button"
                      gray
                      text="Close"
                      onClick={onCloseDeleteSuccess}
                    />
                  </Flex>
                </IconContentCard>
              ) : (
                <IconContentCard
                  iconBg
                  className="py-0 px-4"
                  icon={<TrashTwoIcon />}
                >
                  <Text
                    type="PARAGRAPH"
                    className="font-weight-500 text-black-700 mb-4"
                    text="Are you sure want to delete the customer data?"
                  />
                  <Flex justifyContent="center" className="action-button">
                    <Button
                      type="button"
                      text="Yes, Delete"
                      onClick={onOpenDeleteSuccess}
                    />
                    <Button
                      type="button"
                      gray
                      text="No"
                      onClick={onCloseDeleteModal}
                    />
                  </Flex>
                </IconContentCard>
              )}
            </Modal>
          )}
          {isAddUser && (
            <Modal
              secondary
              onClose={onCloseAddUser}
              header={
                <Text type="H4" text="Add User" className="modal-heading-title" />
              }
            >
              <AddUserForm onCloseModal={onCloseAddUser} />
            </Modal>
          )}
          {isAddCustomer && (
            <Modal
              secondary
              onClose={onCloseAddCustomer}
              header={
                <Text
                  type="H4"
                  text="Add Customer"
                  className="modal-heading-title"
                />
              }
            >
              <AddCustomerForm onCloseModal={onCloseAddCustomer} />
            </Modal>
          )}
        </CardTable>
      </Layout>
    </AuthGuard>
  );
};

export default Customers;
