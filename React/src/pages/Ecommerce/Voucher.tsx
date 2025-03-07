import React, { useCallback, useEffect, useMemo, useState } from "react";
import BreadCrumb from "Common/BreadCrumb";
import { Link } from "react-router-dom";
import { Dropdown } from "Common/Components/Dropdown";
import Modal from "Common/Components/Modal";
import { useFormik } from "formik";

// Icon
import {
  MoreHorizontal,
  Eye,
  FileEdit,
  Trash2,
  Search,
  Plus,
} from "lucide-react";

import TableContainer from "Common/TableContainer";
import DeleteModal from "Common/DeleteModal";

// Formik
import * as Yup from "yup";

// react-redux
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { getAllVouchers, addVoucher, updateVoucher, deleteVoucher } from "slices/voucher/thunk";
import { ToastContainer } from "react-toastify";  
const Voucher = () => {
  const dispatch = useDispatch<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const [show, setShow] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [isOverview, setIsOverview] = useState<boolean>(false);

  const voucherState = useSelector((state: any) => state.Voucher);
  useEffect(() => {
    console.log("Full Voucher Redux state:", voucherState);
  }, [voucherState]);

  const voucherSelector = createSelector(
    (state: any) => state.Voucher,
    (Voucher) => {
      console.log("Selector received state:", Voucher);
      return {
        vouchers: Voucher?.vouchers?.results || [],
        pageCount: Math.ceil((Voucher?.vouchers?.rowCount || 0) / pageSize),
        firstRowOnPage: Voucher?.vouchers?.firstRowOnPage || 0,
        rowCount: Voucher?.vouchers?.rowCount || 0,
        loading: Voucher?.loading || false,
        error: Voucher?.error || null,
      };
    }
  );

  const { vouchers, pageCount, loading, error } =
    useSelector(voucherSelector);

  // Add this for debugging
  useEffect(() => {
    console.log("Voucher state:", vouchers);
    console.log("Loading state:", loading);
    console.log("Error state:", error);
  }, [vouchers, loading, error]);

  const [data, setData] = useState<any>([]);
  const [eventData, setEventData] = useState<any>();

  // Get Data
  useEffect(() => {
    // Don't fetch if current page is greater than page count
    if (pageCount && currentPage > pageCount) {
      setCurrentPage(1); // Reset to first page
      return;
    }
    
    console.log("Fetching vouchers with page:", currentPage, "pageSize:", pageSize);
    
    dispatch(getAllVouchers({ page: currentPage, pageSize }))
      .then((response: any) => {
        console.log("Voucher API response:", response);
        // Check if the response has the expected structure
        if (response && response.payload && response.payload.results) {
          console.log("Voucher results:", response.payload.results);
        }
      })
      .catch((error: any) => {
        console.error("Error fetching vouchers:", error);
      });
  }, [dispatch, currentPage, refreshFlag, pageCount]);

  useEffect(() => {
    console.log("Vouchers from state:", vouchers);
    if (vouchers && Array.isArray(vouchers)) {
      if (vouchers.length === 0 && currentPage > 1) {
        // If no data and not on first page, go back one page
        setCurrentPage(prev => prev - 1);
      } else {
        console.log("Setting data from vouchers:", vouchers);
        setData(vouchers);
      }
    } else {
      console.error("Vouchers is not an array:", vouchers);
    }
  }, [vouchers, currentPage]);

  // Delete Modal
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const deleteToggle = () => setDeleteModal(!deleteModal);

  // Delete Data
  const onClickDelete = (cell: any) => {
    setDeleteModal(true);
    if (cell.id) {
      setEventData(cell);
    }
  };

  // Search functionality: Filters skin types based on user input
  const filterSearchData = (e: any) => {
    const search = e.target.value;
    const keysToSearch = ['name', 'code', 'description', 'status', 'discountRate', 'usageLimit', 'minimumOrderValue', 'startDate', 'endDate'];
    const filteredData = vouchers.filter((item: any) => {
      return keysToSearch.some((key) => {
        const value = item[key]?.toString().toLowerCase() || '';
        return value.includes(search.toLowerCase());
      });
    });
    setData(filteredData);
  };

  

  // Delete handler: Processes the deletion of a skin type
  // Called when user confirms deletion in the modal
  const handleDelete = () => {
    if (eventData && eventData.id) {
      console.log("Attempting to delete voucher with ID:", eventData.id);
      
      dispatch(deleteVoucher(eventData.id))
        .then(() => {
          setDeleteModal(false);
          setRefreshFlag(prev => !prev); // Trigger data refresh after deletion
        })
        .catch((error: any) => {
          console.error("Delete error:", error);
        });
    } else {
      console.error("Cannot delete: No valid ID found in eventData", eventData);
    }
  };

  // Form validation schema using Yup
  // Defines validation rules for all skin type fields
  const validation: any = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: (eventData && eventData.name) || '',
      code: (eventData && eventData.code) || '',
      description: (eventData && eventData.description) || '',
      status: (eventData && eventData.status) || 'Active',
      discountRate: (eventData && eventData.discountRate) || 0,
      usageLimit: (eventData && eventData.usageLimit) || '',
      minimumOrderValue: (eventData && eventData.minimumOrderValue) || 0,
      startDate: (eventData && eventData.startDate) ? new Date(eventData.startDate).toISOString().slice(0, 16) : '',
      endDate: (eventData && eventData.endDate) ? new Date(eventData.endDate).toISOString().slice(0, 16) : ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      description: Yup.string(),
      status: Yup.string().required("Status is required"),
      discountRate: Yup.number().required("Discount rate is required").min(0, "Must be at least 0"),
      usageLimit: Yup.string(),
      minimumOrderValue: Yup.number().required("Minimum order value is required").min(0, "Must be at least 0"),
      startDate: Yup.date().required("Start date is required"),
      endDate: Yup.date().required("End date is required")
        .min(Yup.ref('startDate'), "End date must be after start date")
    }),
    onSubmit: (values) => {
      if (isEdit) {
        if (!eventData.id) {
          console.error("Cannot update: No valid ID found in eventData", eventData);
          return;
        }
        
        const updateData = {
          id: eventData.id,
          data: {
            name: values.name,
            code: eventData.code,
            description: values.description,
            status: values.status,
            discountRate: values.discountRate,
            usageLimit: values.usageLimit,
            minimumOrderValue: values.minimumOrderValue,
            startDate: new Date(values.startDate).toISOString(),
            endDate: new Date(values.endDate).toISOString()
          }
        };
        
        console.log("Updating voucher with ID:", eventData.id, updateData);
        
        dispatch(updateVoucher(updateData))
          .then((response: any) => {
            console.log("Update response:", response);
            toggle();
            console.log("Triggering refresh after update");
            setRefreshFlag(prev => !prev);
          })
          .catch((error: any) => {
            console.error("Update error:", error);
          });
         
      } else {
        const newData = {
          name: values.name,
          description: values.description,
          status: values.status,
          discountRate: values.discountRate,
          usageLimit: values.usageLimit,
          minimumOrderValue: values.minimumOrderValue,
          startDate: new Date(values.startDate).toISOString(),
          endDate: new Date(values.endDate).toISOString()
        };
        dispatch(addVoucher(newData))
          .then(() => {
            toggle();
            setRefreshFlag(prev => !prev);
          });
      }
    },
  });

  // Update Data
  const handleUpdateDataClick = (ele: any) => {
    console.log("Update clicked, data before setting:", ele);
    setEventData({ ...ele });
    setIsEdit(true);
    setShow(true);
  };

  // Add handler for overview click
  const handleOverviewClick = (ele: any) => {
    setEventData({ ...ele });
    setIsOverview(true);
    setShow(true);
  };

  // Modify toggle to reset overview mode
  const toggle = useCallback(() => {
    if (show) {
      setShow(false);
      setEventData("");
      setIsEdit(false);
      setIsOverview(false); // Reset overview mode
    } else {
      setShow(true);
      setEventData("");
      validation.resetForm();
    }
  }, [show, validation]);

  const columns = useMemo(
    () => [
      {
        header: "Name",
        accessorKey: "name",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
          <Link
            to="#"
            className="flex items-center gap-2"
            onClick={() => handleOverviewClick(cell.row.original)}
          >
            {cell.getValue()}
          </Link>
        ),
        size: 150,
      },
      {
        header: "Code",
        accessorKey: "code",
        enableColumnFilter: false,
        enableSorting: true,
        size: 120,
      },
      {
        header: "Description",
        accessorKey: "description",
        enableColumnFilter: false,
        enableSorting: true,
        size: 200,
      },
      {
        header: "Status",
        accessorKey: "status",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
          <span className={`px-2.5 py-0.5 text-xs inline-block font-medium rounded border ${
            cell.getValue() === 'Active' 
              ? 'text-green-500 bg-green-100 border-green-200 dark:text-green-400 dark:bg-green-500/20 dark:border-green-500/20' 
              : 'text-yellow-500 bg-yellow-100 border-yellow-200 dark:text-yellow-400 dark:bg-yellow-500/20 dark:border-yellow-500/20'
          }`}>
            {cell.getValue()}
          </span>
        ),
        size: 100,
      },
      {
        header: "Discount Rate",
        accessorKey: "discountRate",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
          <span>{cell.getValue()}%</span>
        ),
        size: 120,
      },
      {
        header: "Min. Order Value",
        accessorKey: "minimumOrderValue",
        enableColumnFilter: false,
        enableSorting: true,
        size: 150,
      },
      {
        header: "Start Date",
        accessorKey: "startDate",
        enableColumnFilter: false,
        enableSorting: true,
        size: 120,
        cell: (cell: any) => {
          const startDate = cell.getValue() ? new Date(cell.getValue()).toLocaleString() : "N/A";
          return <span>{startDate}</span>;
        },
      },
      {
        header: "End Date",
        accessorKey: "endDate",
        enableColumnFilter: false,
        enableSorting: true,
        size: 120,
        cell: (cell: any) => {
          const endDate = cell.getValue() ? new Date(cell.getValue()).toLocaleString() : "N/A";
          return <span>{endDate}</span>;
        },
      },
      {
        header: "Action",
        enableColumnFilter: false,
        enableSorting: true,
        size: 100,
        cell: (cell: any) => (
            <Dropdown className="relative ltr:ml-2 rtl:mr-2">
                <Dropdown.Trigger id="orderAction1" data-bs-toggle="dropdown" className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"><MoreHorizontal className="size-3" /></Dropdown.Trigger>
                <Dropdown.Content placement={cell.row.index ? "top-end" : "right-end"} className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md min-w-[10rem] dark:bg-zink-600" aria-labelledby="orderAction1">
                    <li>
                        <Link
                          to="#!"
                          className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                          onClick={() => {
                            const data = cell.row.original;
                            handleOverviewClick(data);
                          }}
                        >
                          <Eye className="inline-block size-3 ltr:mr-1 rtl:ml-1" />{" "}
                          <span className="align-middle">Overview</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#!" data-modal-target="addOrderModal" className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" onClick={() => {
                            const data = cell.row.original;
                            handleUpdateDataClick(data);
                        }}>
                            <FileEdit className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Edit</span></Link>
                    </li>
                    <li>
                        <Link to="#!" className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" onClick={() => {
                            const data = cell.row.original;
                            onClickDelete(data);
                        }}><Trash2 className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Delete</span></Link>
                    </li>
                </Dropdown.Content>
            </Dropdown>
        ),
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <BreadCrumb title="Vouchers" pageTitle="Vouchers" />
      <DeleteModal 
        show={deleteModal} 
        onHide={deleteToggle}
        onDelete={handleDelete}
      />
      <ToastContainer closeButton={false} limit={1} />
      <div className="card" id="productListTable">
        <div className="card-body">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-12">
            <div className="xl:col-span-3">
              <div className="relative">
                <input
                  type="text"
                  className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Search for name, type, description..."
                  autoComplete="off"
                  onChange={(e) => filterSearchData(e)}
                />
                <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
              </div>
            </div>
            <div className="lg:col-span-2 ltr:lg:text-right rtl:lg:text-left xl:col-span-2 xl:col-start-11">
              <Link
                to="#!"
                data-modal-target="addVoucherModal"
                type="button"
                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                onClick={toggle}
              >
                <Plus className="inline-block size-4" />{" "}
                <span className="align-middle">Add Voucher</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="!pt-1 card-body">
          {data && data.length > 0 ? (
            <TableContainer
              isPagination={true}
              columns={columns || []}
              data={data || []}
              customPageSize={pageSize}
              pageCount={pageCount}
              currentPage={currentPage}
              onPageChange={(page: number) => {
                setCurrentPage(page);
                dispatch(getAllVouchers({ page, pageSize }));
              }}
              divclassName="overflow-x-auto"
              tableclassName="w-full whitespace-nowrap"
              theadclassName="ltr:text-left rtl:text-right bg-slate-100 dark:bg-zink-600"
              thclassName="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500"
              tdclassName="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"
              PaginationClassName="flex flex-col items-center gap-4 px-4 mt-4 md:flex-row"
              showPagination={true}
            />
          ) : (
            <div className="noresult">
              <div className="py-6 text-center">
                <Search className="size-6 mx-auto mb-3 text-sky-500 fill-sky-100 dark:fill-sky-500/20" />
                <h5 className="mt-2 mb-1">Sorry! No Result Found</h5>
                <p className="mb-0 text-slate-500 dark:text-zink-200">
                  We've searched more than 199+ vouchers. We did not find any
                  voucher for your search.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

    
      <Modal
        show={show}
        onHide={toggle}
        modal-center="true"
        className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
        dialogClassName="w-screen md:w-[30rem] lg:w-[40rem] bg-white shadow rounded-md dark:bg-zink-600"
      >
        <Modal.Header
          className="flex items-center justify-between p-4 border-b dark:border-zink-500"
          closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500"
        >
          <Modal.Title className="text-16">
            {isOverview ? "Voucher Details" : isEdit ? "Edit Voucher" : "Add Voucher"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
          <form action="#!" onSubmit={(e) => {
            e.preventDefault();
            validation.handleSubmit();
            return false;
          }}>
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
              <div className="xl:col-span-12">
                <label htmlFor="nameInput" className="inline-block mb-2 text-base font-medium">
                    Name <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                    type="text"
                    id="nameInput"
                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                    placeholder="Enter voucher name"
                    name="name"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.name || ""}
                    disabled={isOverview}
                />
                {validation.touched.name && validation.errors.name && (
                    <p className="text-red-400">{validation.errors.name}</p>
                )}
              </div>

              {isOverview && (
                <div className="xl:col-span-6">
                  <label htmlFor="codeInput" className="inline-block mb-2 text-base font-medium">
                      Code
                  </label>
                  <input
                      type="text"
                      id="codeInput"
                      className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                      value={eventData?.code || ""}
                      disabled={true}
                  />
                </div>
              )}

              <div className="xl:col-span-12">
                <label htmlFor="descriptionInput" className="inline-block mb-2 text-base font-medium">Description</label>
                <textarea
                  id="descriptionInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Enter description"
                  name="description"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.description || ""}
                  rows={3}
                  disabled={isOverview}
                />
              </div>

              <div className="xl:col-span-6">
                <label htmlFor="statusInput" className="inline-block mb-2 text-base font-medium">
                  Status <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  id="statusInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  name="status"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.status || ""}
                  disabled={isOverview}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
                {validation.touched.status && validation.errors.status && (
                  <p className="text-red-400">{validation.errors.status}</p>
                )}
              </div>

              <div className="xl:col-span-6">
                <label htmlFor="discountRateInput" className="inline-block mb-2 text-base font-medium">
                  Discount Rate (%) <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="number"
                  id="discountRateInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Enter discount rate"
                  name="discountRate"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.discountRate || ""}
                  disabled={isOverview}
                />
                {validation.touched.discountRate && validation.errors.discountRate && (
                  <p className="text-red-400">{validation.errors.discountRate}</p>
                )}
              </div>

              <div className="xl:col-span-6">
                <label htmlFor="usageLimitInput" className="inline-block mb-2 text-base font-medium">
                  Usage Limit
                </label>
                <input
                  type="text"
                  id="usageLimitInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Enter usage limit"
                  name="usageLimit"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.usageLimit || ""}
                  disabled={isOverview}
                />
              </div>

              <div className="xl:col-span-6">
                <label htmlFor="minimumOrderValueInput" className="inline-block mb-2 text-base font-medium">
                  Minimum Order Value <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="number"
                  id="minimumOrderValueInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Enter minimum order value"
                  name="minimumOrderValue"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.minimumOrderValue || ""}
                  disabled={isOverview}
                />
                {validation.touched.minimumOrderValue && validation.errors.minimumOrderValue && (
                  <p className="text-red-400">{validation.errors.minimumOrderValue}</p>
                )}
              </div>

              <div className="xl:col-span-6">
                <label htmlFor="startDateInput" className="inline-block mb-2 text-base font-medium">
                  Start Date & Time <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="datetime-local"
                  id="startDateInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  name="startDate"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.startDate || ""}
                  disabled={isOverview}
                />
                {validation.touched.startDate && validation.errors.startDate && (
                  <p className="text-red-400">{validation.errors.startDate}</p>
                )}
              </div>

              <div className="xl:col-span-6">
                <label htmlFor="endDateInput" className="inline-block mb-2 text-base font-medium">
                  End Date & Time <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="datetime-local"
                  id="endDateInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  name="endDate"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.endDate || ""}
                  disabled={isOverview}
                />
                {validation.touched.endDate && validation.errors.endDate && (
                  <p className="text-red-400">{validation.errors.endDate}</p>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button 
                type="button" 
                className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10" 
                onClick={toggle}
              >
                {isOverview ? "Close" : "Cancel"}
              </button>
              {!isOverview && (
                <button 
                  type="submit" 
                  className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                >
                  {!!isEdit ? "Update" : "Add Voucher"}
                </button>
              )}
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Voucher;
