import React, { useCallback, useEffect, useMemo, useState } from "react";
import BreadCrumb from "Common/BreadCrumb";
import Flatpickr from "react-flatpickr";
import { Link } from "react-router-dom";
import { Dropdown } from "Common/Components/Dropdown";
import Modal from "Common/Components/Modal";
import { useFormik } from "formik";
import moment from "moment";

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
import { getPromotions, addPromotion, updatePromotion, deletePromotion } from "slices/promotion/thunk";
import { ToastContainer } from "react-toastify";
import filterDataBySearch from "Common/filterDataBySearch";

// Hàm dùng để format ngày tháng, hiển thị lên UI cho đẹp
const formatDateTime = (dateTimeOffset: string) => {
  if (!dateTimeOffset) return "";
  const date = new Date(dateTimeOffset);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")} ${String(
    date.getHours()
  ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
};

const Promotion = () => {
  const dispatch = useDispatch<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;
  const [show, setShow] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const promotionSelector = createSelector(
    (state: any) => state.Promotion,
    (promotion) => ({
      promotions: promotion.promotions.results,
      pageCount: Math.ceil(promotion.promotions.rowCount / pageSize),
      firstRowOnPage: promotion.promotions.firstRowOnPage,
      rowCount: promotion.promotions.rowCount,
      loading: promotion.loading,
      error: promotion.error,
    })
  );

  const { promotions, pageCount, firstRowOnPage, rowCount, loading, error } =
    useSelector(promotionSelector);

  const [data, setData] = useState<any>([]);
  const [eventData, setEventData] = useState<any>();

  // Get Data
  useEffect(() => {
    // Don't fetch if current page is greater than page count
    if (pageCount && currentPage > pageCount) {
      setCurrentPage(1); // Reset to first page
      return;
    }
    dispatch(getPromotions({ page: currentPage, pageSize }));
  }, [dispatch, currentPage, refreshFlag, pageCount]);

  useEffect(() => {
    if (promotions) {
      if (promotions.length === 0 && currentPage > 1) {
        // If no data and not on first page, go back one page
        setCurrentPage(prev => prev - 1);
      } else {
        setData(promotions);
      }
    }
  }, [promotions, currentPage]);

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

  // Search Data
  const filterSearchData = (e: any) => {
    const search = e.target.value;
    const keysToSearch = ['name', 'type', 'description', 'discountRate'];
    const filteredData = promotions.filter((item: any) => {
      return keysToSearch.some((key) => {
        const value = item[key]?.toString().toLowerCase() || '';
        return value.includes(search.toLowerCase());
      });
    });
    setData(filteredData);
  };

  // Add new function for date filtering
  const handleDateFilter = (dates: any, dateType: 'start' | 'end') => {
    if (!dates || dates.length === 0) {
      setData(promotions); // Reset to all data if date is cleared
      return;
    }

    const selectedDate = new Date(dates[0]);
    let filteredData = [...promotions];

    if (dateType === 'start') {
      const endDatePicker = document.querySelector('#endDateFilter') as any;
      const endDate = endDatePicker?.value ? new Date(endDatePicker.value) : null;

      if (endDate) {
        // Filter for date range
        filteredData = promotions.filter((item: any) => {
          const promoStartDate = new Date(item.startDate);
          const promoEndDate = new Date(item.endDate);
          return promoStartDate >= selectedDate && promoEndDate <= endDate;
        });
      } else {
        // Filter for start date only
        filteredData = promotions.filter((item: any) => {
          const promoStartDate = new Date(item.startDate);
          return promoStartDate >= selectedDate;
        });
      }
    } else {
      const startDatePicker = document.querySelector('#startDateFilter') as any;
      const startDate = startDatePicker?.value ? new Date(startDatePicker.value) : null;

      if (startDate) {
        // Filter for date range
        filteredData = promotions.filter((item: any) => {
          const promoStartDate = new Date(item.startDate);
          const promoEndDate = new Date(item.endDate);
          return promoStartDate >= startDate && promoEndDate <= selectedDate;
        });
      } else {
        // Filter for end date only
        filteredData = promotions.filter((item: any) => {
          const promoEndDate = new Date(item.endDate);
          return promoEndDate <= selectedDate;
        });
      }
    }

    setData(filteredData);
  };

  const Status = ({ item }: any) => {
    switch (item) {
      case "Publish":
        return (
          <span className="status px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">
            {item}
          </span>
        );
      case "Scheduled":
        return (
          <span className="status px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-orange-100 border-transparent text-orange-500 dark:bg-orange-500/20 dark:border-transparent">
            {item}
          </span>
        );
      case "Inactive":
        return (
          <span className="status px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent">
            {item}
          </span>
        );
      default:
        return (
          <span className="status px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">
            {item}
          </span>
        );
    }
  };

  const validation: any = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: (eventData && eventData.name) || '',
      type: (eventData && eventData.type) || '',
      description: (eventData && eventData.description) || '',
      startDate: (eventData && eventData.startDate) || '',
      endDate: (eventData && eventData.endDate) || '',
      discountRate: (eventData && eventData.discountRate) || ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      type: Yup.string().required("Type is required"),
      description: Yup.string(),
      startDate: Yup.date().required("Start Date is required"),
      endDate: Yup.date().required("End Date is required")
        .min(Yup.ref('startDate'), "End date must be after start date"),
      discountRate: Yup.number()
        .required("Discount rate is required")
        .min(0, "Discount rate cannot be negative")
        .max(100, "Discount rate cannot exceed 100%")
    }),
    onSubmit: (values) => {
      if (isEdit) {
        const updateData = {
          id: eventData.id,
          data: {
            name: values.name,
            type: values.type,
            description: values.description,
            startDate: values.startDate,
            endDate: values.endDate,
            discountRate: values.discountRate
          }
        };
        dispatch(updatePromotion(updateData))
          .then(() => {
            toggle();
            setRefreshFlag(prev => !prev);
          });
      } else {
        const newData = {
          name: values.name,
          type: values.type,
          description: values.description,
          startDate: values.startDate,
          endDate: values.endDate,
          discountRate: values.discountRate
        };
        dispatch(addPromotion(newData))
          .then(() => {
            toggle();
            setRefreshFlag(prev => !prev);
          });
      }
    },
  });

  // Update Data
  const handleUpdateDataClick = (ele: any) => {
    setEventData({ ...ele });
    setIsEdit(true);
    setShow(true);
  };

  const toggle = useCallback(() => {
    if (show) {
      setShow(false);
      setEventData("");
      setIsEdit(false);
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
            to="/apps-ecommerce-product-overview"
            className="flex items-center gap-2"
          >
            {cell.getValue()}
          </Link>
        ),
      },
      {
        header: "Type",
        accessorKey: "type",
        enableColumnFilter: false,
        cell: (cell: any) => (
          <Link
            to="/apps-ecommerce-product-overview"
            className="flex items-center gap-2"
          >
            {cell.getValue()}
          </Link>
        ),
      },
      {
        header: "Description",
        accessorKey: "description",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "Discount Rate",
        accessorKey: "discountRate",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => `${cell.getValue()}%`,
      },
      {
        header: "Start Date",
        accessorKey: "startDate",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => formatDateTime(cell.getValue()),
      },
      {
        header: "End Date",
        accessorKey: "endDate",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => formatDateTime(cell.getValue()),
      },
      {
        header: "Action",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
            <Dropdown className="relative ltr:ml-2 rtl:mr-2">
                <Dropdown.Trigger id="orderAction1" data-bs-toggle="dropdown" className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"><MoreHorizontal className="size-3" /></Dropdown.Trigger>
                <Dropdown.Content placement={cell.row.index ? "top-end" : "right-end"} className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md min-w-[10rem] dark:bg-zink-600" aria-labelledby="orderAction1">
                    <li>
                        <Link to="/apps-ecommerce-order-overview" className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"><Eye className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Overview</span></Link>
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

  const handleDelete = () => {
    if (eventData) {
      dispatch(deletePromotion(eventData.id))
        .then(() => {
          setDeleteModal(false);
          setRefreshFlag(prev => !prev);
        });
    }
  };

  return (
    <React.Fragment>
      <BreadCrumb title="Promotion" pageTitle="Promotion" />
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
            <div className="xl:col-span-4 flex gap-4">
              <div className="flex-1">
                <Flatpickr
                  id="startDateFilter"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  options={{
                    dateFormat: "Y-m-d",
                    onChange: (dates) => handleDateFilter(dates, 'start')
                  }}
                  placeholder="Start date"
                />
              </div>
              <div className="flex-1">
                <Flatpickr
                  id="endDateFilter"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  options={{
                    dateFormat: "Y-m-d",
                    onChange: (dates) => handleDateFilter(dates, 'end')
                  }}
                  placeholder="End date"
                />
              </div>
            </div>
            <div className="lg:col-span-2 ltr:lg:text-right rtl:lg:text-left xl:col-span-2 xl:col-start-11">
              <Link
                to="#!"
                data-modal-target="addPromotionModal"
                type="button"
                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                onClick={toggle}
              >
                <Plus className="inline-block size-4" />{" "}
                <span className="align-middle">Add Promotion</span>
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
                dispatch(getPromotions({ page, pageSize }));
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
                  We've searched more than 199+ promotion We did not find any
                  product for you search.
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
            {!!isEdit ? "Edit Promotion" : "Add Promotion"}
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
                    placeholder="Enter promotion name"
                    name="name"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.name || ""}
                />
                {validation.touched.name && validation.errors.name && (
                    <p className="text-red-400">{validation.errors.name}</p>
                )}
              </div>

              <div className="xl:col-span-12">
                <label htmlFor="typeInput" className="inline-block mb-2 text-base font-medium">
                    Type <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                    type="text"
                    id="typeInput"
                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                    placeholder="Enter promotion type"
                    name="type"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.type || ""}
                />
                {validation.touched.type && validation.errors.type && (
                    <p className="text-red-400">{validation.errors.type}</p>
                )}
              </div>

              <div className="xl:col-span-12">
                <label htmlFor="discountRateInput" className="inline-block mb-2 text-base font-medium">
                    Discount Rate <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                    type="number"
                    id="discountRateInput"
                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                    placeholder="Enter discount rate"
                    name="discountRate"
                    min="0"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.discountRate || ""}
                />
                {validation.touched.discountRate && validation.errors.discountRate && (
                    <p className="text-red-400">{validation.errors.discountRate}</p>
                )}
              </div>

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
                />
              </div>

              <div className="xl:col-span-6">
                <label htmlFor="startDateInput" className="inline-block mb-2 text-base font-medium">
                    Start Date <span className="text-red-500 ml-1">*</span>
                </label>
                <Flatpickr
                    id="startDateInput"
                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                    options={{
                        enableTime: true,
                        dateFormat: "Y-m-d H:i"
                    }}
                    placeholder="Select start date"
                    name="startDate"
                    onChange={(date: any) => validation.setFieldValue("startDate", date[0])}
                    value={validation.values.startDate || ''}
                />
                {validation.touched.startDate && validation.errors.startDate && (
                    <p className="text-red-400">{validation.errors.startDate}</p>
                )}
              </div>

              <div className="xl:col-span-6">
                <label htmlFor="endDateInput" className="inline-block mb-2 text-base font-medium">
                    End Date <span className="text-red-500 ml-1">*</span>
                </label>
                <Flatpickr
                    id="endDateInput"
                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                    options={{
                        enableTime: true,
                        dateFormat: "Y-m-d H:i"
                    }}
                    placeholder="Select end date"
                    name="endDate"
                    onChange={(date: any) => validation.setFieldValue("endDate", date[0])}
                    value={validation.values.endDate || ''}
                />
                {validation.touched.endDate && validation.errors.endDate && (
                    <p className="text-red-400">{validation.errors.endDate}</p>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button type="reset" className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10" onClick={toggle}>Cancel</button>
              <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                {!!isEdit ? "Update" : "Add Promotion"}
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Promotion;
