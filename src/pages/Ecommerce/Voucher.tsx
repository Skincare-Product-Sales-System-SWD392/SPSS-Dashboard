import React, { useCallback, useEffect, useMemo, useState } from "react";
import BreadCrumb from "Common/BreadCrumb";
import { Link } from "react-router-dom";
import { Dropdown } from "Common/Components/Dropdown";
import Modal from "Common/Components/Modal";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";

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
import {
  getAllVouchers,
  addVoucher,
  updateVoucher,
  deleteVoucher,
} from "slices/voucher/thunk";
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
  }, [voucherState]);

  const voucherSelector = createSelector(
    (state: any) => state.Voucher,
    (Voucher) => {
      return {
        vouchers: Voucher?.vouchers?.data?.items || [],
        totalPages: Voucher?.vouchers?.data?.totalPages || 1,
        currentPage: Voucher?.vouchers?.data?.pageNumber || 1,
        pageSize: Voucher?.vouchers?.data?.pageSize || 5,
        totalCount: Voucher?.vouchers?.data?.totalCount || 0,
        loading: Voucher?.loading || false,
        error: Voucher?.error || null,
      };
    }
  );

  const { vouchers, totalPages, loading, error } = useSelector(voucherSelector);
  const [data, setData] = useState<any>([]);
  const [eventData, setEventData] = useState<any>();

  // Fix pagination issue
  useEffect(() => {
    dispatch(getAllVouchers({ page: currentPage, pageSize }));
  }, [dispatch, currentPage, pageSize, refreshFlag]);

  // Separate effect to handle empty pages
  useEffect(() => {
    if (vouchers && Array.isArray(vouchers)) {
      if (vouchers.length === 0 && currentPage > 1 && !loading) {
        setCurrentPage((prev) => prev - 1);
      } else {
        setData(vouchers);
      }
    }
  }, [vouchers, currentPage, loading]);

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
    const keysToSearch = [
      "code",
      "description",
      "status",
      "discountRate",
      "usageLimit",
      "minimumOrderValue",
      "startDate",
      "endDate",
    ];
    const filteredData = vouchers.filter((item: any) => {
      return keysToSearch.some((key) => {
        const value = item[key]?.toString().toLowerCase() || "";
        return value.includes(search.toLowerCase());
      });
    });
    setData(filteredData);
  };

  // Delete handler: Processes the deletion of a voucher
  const handleDelete = () => {
    if (eventData && eventData.id) {
      dispatch(deleteVoucher(eventData.id))
        .then(() => {
          setDeleteModal(false);
          setRefreshFlag((prev) => !prev); // Trigger data refresh after deletion
          toast.success("Xóa mã giảm giá thành công!");
        })
        .catch((error: any) => {
          const errorMessage = error.message || "Xóa mã giảm giá thất bại";
          toast.error(errorMessage);
        });
    }
  };

  // Add handleUsageLimitChange function
  const handleUsageLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\s+/g, '');
    const numericValue = rawValue ? Number(rawValue) : '';
    validation.setFieldValue('usageLimit', numericValue);
  };

  // Form validation schema using Yup
  // Defines validation rules for all skin type fields
  const validation: any = useFormik({
    enableReinitialize: true,
    initialValues: {
      code: (eventData && eventData.code) || "",
      description: (eventData && eventData.description) || "",
      status: (eventData && eventData.status) || "Active",
      discountRate:
        eventData && eventData.discountRate !== undefined
          ? Number(eventData.discountRate)
          : 0,
      usageLimit: (eventData && eventData.usageLimit) || "",
      minimumOrderValue:
        eventData && eventData.minimumOrderValue !== undefined
          ? Number(eventData.minimumOrderValue)
          : 0,
      startDate:
        eventData && eventData.startDate
          ? new Date(eventData.startDate).toISOString().slice(0, 16)
          : "",
      endDate:
        eventData && eventData.endDate
          ? new Date(eventData.endDate).toISOString().slice(0, 16)
          : "",
    },
    validationSchema: Yup.object({
      code: Yup.string()
        .required("Mã giảm giá không được để trống"),
      description: Yup.string(),
      status: Yup.string()
        .required("Trạng thái không được để trống")
        .oneOf(["Active", "Inactive", "Expired"], "Trạng thái không hợp lệ"),
      discountRate: Yup.number()
        .required("Tỷ lệ giảm giá không được để trống")
        .min(0, "Tỷ lệ giảm giá phải lớn hơn hoặc bằng 0")
        .max(100, "Tỷ lệ giảm giá không được vượt quá 100%")
        .typeError("Tỷ lệ giảm giá phải là số"),
      usageLimit: Yup.number()
        .required("Giới hạn sử dụng không được để trống")
        .min(0, "Giới hạn sử dụng phải lớn hơn hoặc bằng 0")
        .typeError("Giới hạn sử dụng phải là số"),
      minimumOrderValue: Yup.number()
        .required("Giá trị đơn tối thiểu không được để trống")
        .min(0, "Giá trị đơn tối thiểu phải lớn hơn hoặc bằng 0")
        .typeError("Giá trị đơn tối thiểu phải là số"),
      startDate: Yup.date()
        .required("Ngày bắt đầu không được để trống")
        .typeError("Ngày bắt đầu không hợp lệ"),
      endDate: Yup.date()
        .required("Ngày kết thúc không được để trống")
        .min(Yup.ref("startDate"), "Ngày kết thúc phải sau ngày bắt đầu")
        .typeError("Ngày kết thúc không hợp lệ"),
    }),
    onSubmit: async (values) => {
      if (isEdit) {
        if (!eventData.id) {
          console.error("Thiếu ID mã giảm giá khi chỉnh sửa");
          return;
        }

        const updateData = {
          id: eventData.id,
          data: {
            code: values.code,
            description: values.description,
            status: values.status,
            discountRate: Number(values.discountRate),
            usageLimit: values.usageLimit,
            minimumOrderValue: Number(values.minimumOrderValue.toString().replace(/\s+/g, '')),
            startDate: new Date(values.startDate).toISOString(),
            endDate: new Date(values.endDate).toISOString(),
          },
        };
        
        dispatch(updateVoucher(updateData))
          .then((response: any) => {
            if (!response.success) {
              // Handle API error response
              toast.error(response.message || "Cập nhật mã giảm giá thất bại");
              return;
            }
            toggle();
            setRefreshFlag((prev) => !prev);
            toast.success("Cập nhật mã giảm giá thành công!");
          })
          .catch((error: any) => {
            const errorMessage = error.response?.data?.message || "Cập nhật mã giảm giá thất bại";
            toast.error(errorMessage);
          });
      } else {
        const newData = {
          code: values.code,
          description: values.description,
          status: values.status,
          discountRate: Number(values.discountRate),
          usageLimit: values.usageLimit,
          minimumOrderValue: Number(values.minimumOrderValue.toString().replace(/\s+/g, '')),
          startDate: new Date(values.startDate).toISOString(),
          endDate: new Date(values.endDate).toISOString(),
        };
        
        dispatch(addVoucher(newData))
          .then((response: any) => {
            if (!response.success) {
              // Handle API error response
              toast.error(response.message || "Thêm mã giảm giá thất bại");
              return;
            }
            toggle();
            setRefreshFlag((prev) => !prev);
            toast.success("Thêm mã giảm giá thành công!");
          })
          .catch((error: any) => {
            const errorMessage = error.response?.data?.message || "Thêm mã giảm giá thất bại";
            toast.error(errorMessage);
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

  // Improve the formatNumber function to ensure proper formatting
  const formatNumber = (num: number | string) => {
    if (!num) return '';
    // Convert to string, remove existing spaces, then format
    return num.toString().replace(/\s+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  // Update the handleMinimumOrderValueChange function with a simpler approach
  const handleMinimumOrderValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Get the raw input value without spaces
    const rawValue = e.target.value.replace(/\s+/g, '');
    
    // Only keep digits
    const numericValue = rawValue.replace(/\D/g, '');
    
    // Update formik with the numeric value (without spaces)
    validation.setFieldValue('minimumOrderValue', numericValue);
    
    // Force the input to show the formatted value
    e.target.value = formatNumber(numericValue);
  };

  const columns = useMemo(
    () => [
      {
        header: "Mã Voucher",
        accessorKey: "code",
        enableColumnFilter: false,
        enableSorting: true,
        size: 120,
      },
      {
        header: "Mô Tả",
        accessorKey: "description",
        enableColumnFilter: false,
        enableSorting: true,
        size: 200,
      },
      {
        header: "Trạng Thái",
        accessorKey: "status",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
          <span
            className={`px-2.5 py-0.5 text-xs inline-block font-medium rounded border ${
              cell.getValue() === "Active"
                ? "text-green-500 bg-green-100 border-green-200 dark:text-green-400 dark:bg-green-500/20 dark:border-green-500/20"
                : cell.getValue() === "Inactive"
                ? "text-yellow-500 bg-yellow-100 border-yellow-200 dark:text-yellow-400 dark:bg-yellow-500/20 dark:border-yellow-500/20"
                : "text-red-500 bg-red-100 border-red-200 dark:text-red-400 dark:bg-red-500/20 dark:border-red-500/20"
            }`}
          >
            {cell.getValue() === "Active" ? "Hoạt Động" : 
             cell.getValue() === "Inactive" ? "Không Hoạt Động" : "Hết Hạn"}
          </span>
        ),
        size: 100,
      },
      {
        header: "Tỷ Lệ Giảm Giá",
        accessorKey: "discountRate",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => <span>{cell.getValue()}%</span>,
        size: 120,
      },
      {
        header: "Giá Trị Đơn Tối Thiểu",
        accessorKey: "minimumOrderValue",
        enableColumnFilter: false,
        enableSorting: true,
        size: 150,
        cell: (cell: any) => <span>{formatNumber(cell.getValue())}</span>,
      },
      {
        header: "Ngày Bắt Đầu",
        accessorKey: "startDate",
        enableColumnFilter: false,
        enableSorting: true,
        size: 120,
        cell: (cell: any) => {
          const startDate = cell.getValue()
            ? new Date(cell.getValue()).toLocaleString()
            : "N/A";
          return <span>{startDate}</span>;
        },
      },
      {
        header: "Ngày Kết Thúc",
        accessorKey: "endDate",
        enableColumnFilter: false,
        enableSorting: true,
        size: 120,
        cell: (cell: any) => {
          const endDate = cell.getValue()
            ? new Date(cell.getValue()).toLocaleString()
            : "N/A";
          return <span>{endDate}</span>;
        },
      },
      {
        header: "Hành Động",
        enableColumnFilter: false,
        enableSorting: true,
        size: 100,
        cell: (cell: any) => (
          <Dropdown className="relative ltr:ml-2 rtl:mr-2">
            <Dropdown.Trigger
              id="orderAction1"
              data-bs-toggle="dropdown"
              className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
            >
              <MoreHorizontal className="size-3" />
            </Dropdown.Trigger>
            <Dropdown.Content
              placement={cell.row.index ? "top-end" : "right-end"}
              className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md min-w-[10rem] dark:bg-zink-600"
              aria-labelledby="orderAction1"
            >
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
                  <span className="align-middle">Xem Chi Tiết</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#!"
                  data-modal-target="addOrderModal"
                  className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                  onClick={() => {
                    const data = cell.row.original;
                    handleUpdateDataClick(data);
                  }}
                >
                  <FileEdit className="inline-block size-3 ltr:mr-1 rtl:ml-1" />{" "}
                  <span className="align-middle">Chỉnh Sửa</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#!"
                  className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                  onClick={() => {
                    const data = cell.row.original;
                    onClickDelete(data);
                  }}
                >
                  <Trash2 className="inline-block size-3 ltr:mr-1 rtl:ml-1" />{" "}
                  <span className="align-middle">Xóa</span>
                </Link>
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
      <BreadCrumb title="Mã Giảm Giá" pageTitle="Mã Giảm Giá" />
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
                  placeholder="Tìm kiếm mã giảm giá..."
                  autoComplete="off"
                  onChange={(e) => filterSearchData(e)}
                />
                <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
              </div>
            </div>
            <div className="lg:col-span-2 ltr:lg:text-right rtl:lg:text-left xl:col-span-3 xl:col-start-10">
              <Link
                to="#!"
                data-modal-target="addVoucherModal"
                type="button"
                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 whitespace-nowrap"
                onClick={toggle}
              >
                <Plus className="inline-block size-4" />{" "}
                <span className="align-middle">Thêm Mã Giảm Giá</span>
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
              pageCount={totalPages}
              currentPage={currentPage}
              onPageChange={(page: number) => {
                setCurrentPage(page);
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
                <h5 className="mt-2 mb-1">Xin lỗi! Không Tìm Thấy Kết Quả</h5>
                <p className="mb-0 text-slate-500 dark:text-zink-200">
                  Chúng tôi đã tìm kiếm hơn 199+ mã giảm giá. Chúng tôi không tìm thấy
                  mã giảm giá nào cho tìm kiếm của bạn.
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
            {isOverview
              ? "Chi Tiết Mã Giảm Giá"
              : isEdit
              ? "Chỉnh Sửa Mã Giảm Giá"
              : "Thêm Mã Giảm Giá"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
          <form
            action="#!"
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
              return false;
            }}
          >
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
              {isOverview && (
                <div className="xl:col-span-6">
                  <label
                    htmlFor="codeInput"
                    className="inline-block mb-2 text-base font-medium"
                  >
                    Mã Giảm Giá
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

              <div className="xl:col-span-6">
                <label
                  htmlFor="codeInput"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Mã Giảm Giá <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="codeInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Nhập mã giảm giá"
                  name="code"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.code || ""}
                  disabled={isOverview}
                />
                {validation.touched.code && validation.errors.code && (
                  <p className="text-red-400">{validation.errors.code}</p>
                )}
              </div>

              <div className="xl:col-span-12">
                <label
                  htmlFor="descriptionInput"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Mô Tả
                </label>
                <textarea
                  id="descriptionInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Nhập mô tả"
                  name="description"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.description || ""}
                  rows={3}
                  disabled={isOverview}
                />
              </div>

              <div className="xl:col-span-6">
                <label
                  htmlFor="statusInput"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Trạng Thái <span className="text-red-500 ml-1">*</span>
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
                  <option value="Active">Hoạt Động</option>
                  <option value="Inactive">Không Hoạt Động</option>
                  <option value="Expired">Hết Hạn</option>
                </select>
                {validation.touched.status && validation.errors.status && (
                  <p className="text-red-400">{validation.errors.status}</p>
                )}
              </div>

              <div className="xl:col-span-6">
                <label
                  htmlFor="discountRateInput"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Tỷ Lệ Giảm Giá (%) <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="number"
                  id="discountRateInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Nhập tỷ lệ giảm giá"
                  name="discountRate"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.discountRate}
                  disabled={isOverview}
                  step="any"
                />
                {validation.touched.discountRate &&
                  validation.errors.discountRate && (
                    <p className="text-red-400">
                      {validation.errors.discountRate}
                    </p>
                  )}
              </div>

              <div className="xl:col-span-6">
                <label
                  htmlFor="usageLimitInput"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Giới Hạn Sử Dụng <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="usageLimitInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Nhập giới hạn sử dụng"
                  name="usageLimit"
                  onChange={handleUsageLimitChange}
                  onBlur={validation.handleBlur}
                  value={formatNumber(validation.values.usageLimit)}
                  disabled={isOverview}
                />
                {validation.touched.usageLimit && validation.errors.usageLimit && (
                  <p className="text-red-400">{validation.errors.usageLimit}</p>
                )}
              </div>

              {isOverview && validation.values.usageLimit && (
                <div className="xl:col-span-6">
                  <label
                    htmlFor="formattedUsageLimit"
                    className="inline-block mb-2 text-base font-medium"
                  >
                    Giới Hạn Sử Dụng (Định Dạng)
                  </label>
                  <input
                    type="text"
                    id="formattedUsageLimit"
                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                    value={formatNumber(Number(validation.values.usageLimit))}
                    disabled={true}
                  />
                </div>
              )}

              <div className="xl:col-span-6">
                <label
                  htmlFor="minimumOrderValueInput"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Giá Trị Đơn Tối Thiểu <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="minimumOrderValueInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Nhập giá trị đơn tối thiểu"
                  name="minimumOrderValue"
                  onChange={handleMinimumOrderValueChange}
                  onBlur={validation.handleBlur}
                  value={formatNumber(validation.values.minimumOrderValue)}
                  disabled={isOverview}
                />
                {validation.touched.minimumOrderValue &&
                  validation.errors.minimumOrderValue && (
                    <p className="text-red-400">
                      {validation.errors.minimumOrderValue}
                    </p>
                  )}
              </div>
              
              {isOverview && validation.values.minimumOrderValue && (
                <div className="xl:col-span-6">
                  <label
                    htmlFor="formattedMinimumOrderValue"
                    className="inline-block mb-2 text-base font-medium"
                  >
                    Giá Trị Đơn Tối Thiểu (Định Dạng)
                  </label>
                  <input
                    type="text"
                    id="formattedMinimumOrderValue"
                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                    value={formatNumber(Number(validation.values.minimumOrderValue))}
                    disabled={true}
                  />
                </div>
              )}

              <div className="xl:col-span-6">
                <label
                  htmlFor="startDateInput"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Ngày Bắt Đầu <span className="text-red-500 ml-1">*</span>
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
                {validation.touched.startDate &&
                  validation.errors.startDate && (
                    <p className="text-red-400">
                      {validation.errors.startDate}
                    </p>
                  )}
              </div>

              <div className="xl:col-span-6">
                <label
                  htmlFor="endDateInput"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Ngày Kết Thúc <span className="text-red-500 ml-1">*</span>
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
                {isOverview ? "Đóng" : "Hủy"}
              </button>
              {!isOverview && (
                <button
                  type="submit"
                  className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                >
                  {!!isEdit ? "Cập Nhật" : "Thêm Mã Giảm Giá"}
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
