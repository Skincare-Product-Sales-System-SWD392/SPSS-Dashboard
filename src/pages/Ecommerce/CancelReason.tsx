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
import {getAllCancelReasons, addCancelReason, updateCancelReason, deleteCancelReason} from "slices/cancelreason/thunk";
import { ToastContainer } from "react-toastify";
const CancelReason = () => {
  const dispatch = useDispatch<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;
  const [show, setShow] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [isOverview, setIsOverview] = useState<boolean>(false);

  const cancelReasonSelector = createSelector(
    (state: any) => state.cancelReason,
    (cancelReason) => ({
      cancelReasons: cancelReason?.cancelReasons?.data?.items || [],
      totalPages: cancelReason?.cancelReasons?.data?.totalPages || 1,
      currentPage: cancelReason?.cancelReasons?.data?.pageNumber || 1,
      pageSize: cancelReason?.cancelReasons?.data?.pageSize || 10,
      totalCount: cancelReason?.cancelReasons?.data?.totalCount || 0,
      loading: cancelReason?.loading || false,
      error: cancelReason?.error || null,
    })
  );

  const { cancelReasons, totalPages, currentPage: apiCurrentPage, pageSize: apiPageSize, totalCount } =
    useSelector(cancelReasonSelector);

  const [data, setData] = useState<any>([]);
  const [eventData, setEventData] = useState<any>();

  // Get Data
  useEffect(() => {
    // Don't fetch if current page is greater than total pages and total pages is not 0
    if (totalPages > 0 && currentPage > totalPages) {
      setCurrentPage(1); // Reset to first page
      return;
    }
    dispatch(getAllCancelReasons({ page: currentPage, pageSize }));
  }, [dispatch, currentPage, refreshFlag, totalPages]);

  useEffect(() => {
    if (cancelReasons) {
      if (cancelReasons.length === 0 && currentPage > 1 && totalCount === 0) {
        // If no data and not on first page, go back one page
        setCurrentPage(prev => prev - 1);
      } else {
        setData(cancelReasons);
      }
    }
  }, [cancelReasons, currentPage, totalCount]);

  // Delete Modal
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const deleteToggle = () => setDeleteModal(!deleteModal);

  // Delete Data
  const onClickDelete = (cell: any) => {
    setDeleteModal(true);
    if (cell.name) {
      setEventData(cell);
    }
  };

  // Search functionality: Filters cancel reasons based on user input
  const filterSearchData = (e: any) => {
    const search = e.target.value;
    const keysToSearch = ['id', 'description', 'refundRate'];
    
    if (!search.trim()) {
      setData(cancelReasons);
      return;
    }
    
    const filteredData = cancelReasons.filter((item: any) => {
      return keysToSearch.some((key) => {
        const value = item[key]?.toString().toLowerCase() || '';
        return value.includes(search.toLowerCase());
      });
    });
    setData(filteredData);
  };

  

  // Delete handler: Processes the deletion of a cancel reason
  const handleDelete = () => {
    if (eventData && eventData.id) {
      dispatch(deleteCancelReason(eventData.id))
        .then(() => {
          setDeleteModal(false);
          setRefreshFlag(prev => !prev); // Trigger data refresh after deletion
        })
        .catch((error : any) => {
          // Error is handled in the thunk
          setDeleteModal(false);
        });
    }
  };

  // Form validation schema using Yup
  // Defines validation rules for all cancel reason fields
  const validation: any = useFormik({
    enableReinitialize: true,
    initialValues: {
      description: (eventData && eventData.description) || '',
      refundRate: (eventData && eventData.refundRate) || 0
    },
    validationSchema: Yup.object({
      description: Yup.string().required("Mô tả là bắt buộc"),
      refundRate: Yup.number().min(0, "Tỷ lệ hoàn tiền phải ít nhất là 0").max(100, "Tỷ lệ hoàn tiền không thể vượt quá 100").required("Tỷ lệ hoàn tiền là bắt buộc")
    }),
    onSubmit: (values) => {
      if (isEdit) {
        const updateData = {
          id: eventData.id,
          data: {
            description: values.description,
            refundRate: values.refundRate
          }
        };
        dispatch(updateCancelReason(updateData))
          .then(() => {
            toggle();
            setRefreshFlag(prev => !prev);
          });
      } else {
        const newData = {
          description: values.description,
          refundRate: values.refundRate
        };
        dispatch(addCancelReason(newData))
          .then(() => {
            toggle();
            setRefreshFlag(prev => !prev);
          });
      }
      validation.resetForm();
    },
  });

  // Toggle modal visibility
  const toggle = useCallback(() => {
    if (show) {
      setShow(false);
      setEventData(null);
      setIsEdit(false);
      setIsOverview(false);
      validation.resetForm();
    } else {
      setShow(true);
      setEventData(null);
      setIsEdit(false);
      setIsOverview(false);
    }
  }, [show, validation]);

  // Edit button click handler
  const handleEditClick = useCallback((data: any) => {
    setEventData(data);
    setIsEdit(true);
    setIsOverview(false);
    setShow(true);
  }, []);

  // View button click handler
  const handleViewClick = useCallback((data: any) => {
    setEventData(data);
    setIsEdit(false);
    setIsOverview(true);
    setShow(true);
  }, []);

  // Table column definitions
  const columns = useMemo(() => [
    // {
    //   header: "ID",
    //   accessorKey: "id",
    //   enableColumnFilter: false,
    //   enableSorting: true,
    //   cell: (cell: any) => (
    //     <span className="font-medium">{cell.getValue()}</span>
    //   ),
    // },
    {
      header: "Mô Tả",
      accessorKey: "description",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cell: any) => (
        <span>{cell.getValue()}</span>
      ),
    },
    {
      header: "Tỷ Lệ Hoàn Tiền (%)",
      accessorKey: "refundRate",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cell: any) => (
        <span className="block text-right">{cell.getValue()}%</span>
      ),
    },
    {
      header: "Hành Động",
      enableColumnFilter: false,
      enableSorting: false,
      cell: (cell: any) => (
        <Dropdown className="relative">
          <Dropdown.Trigger id={cell.row.original.id} data-bs-toggle="dropdown" className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20">
            <MoreHorizontal className="size-3" />
          </Dropdown.Trigger>
          <Dropdown.Content className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md min-w-[10rem] dark:bg-zink-600" aria-labelledby={cell.row.original.id}>
            <li>
              <Link to="#!" className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" onClick={() => handleViewClick(cell.row.original)}>
                <Eye className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Xem</span>
              </Link>
            </li>
            <li>
              <Link to="#!" className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" onClick={() => handleEditClick(cell.row.original)}>
                <FileEdit className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Chỉnh Sửa</span>
              </Link>
            </li>
            <li>
              <Link to="#!" className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" onClick={() => {
                onClickDelete(cell.row.original);
                setEventData(cell.row.original);
              }}>
                <Trash2 className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Xóa</span>
              </Link>
            </li>
          </Dropdown.Content>
        </Dropdown>
      ),
    },
  ], [handleEditClick, handleViewClick]);

  return (
    <React.Fragment>
      <BreadCrumb title="Lý Do Hủy" pageTitle="Thương Mại Điện Tử" />
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
                  placeholder="Tìm kiếm ID, mô tả..."
                  autoComplete="off"
                  onChange={(e) => filterSearchData(e)}
                />
                <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
              </div>
            </div>
            <div className="lg:col-span-2 ltr:lg:text-right rtl:lg:text-left xl:col-span-2 xl:col-start-11">
              <Link
                to="#!"
                data-modal-target="addCancelReasonModal"
                type="button"
                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                onClick={toggle}
              >
                <Plus className="inline-block size-4" />{" "}
                <span className="align-middle">Thêm Lý Do Hủy</span>
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
                  Chúng tôi đã tìm kiếm hơn 199+ lý do hủy. Chúng tôi không tìm thấy
                  lý do hủy nào cho tìm kiếm của bạn.
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
            {isOverview ? "Chi Tiết Lý Do Hủy" : isEdit ? "Chỉnh Sửa Lý Do Hủy" : "Thêm Lý Do Hủy"}
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
                <label htmlFor="descriptionInput" className="inline-block mb-2 text-base font-medium">
                  Mô Tả <span className="text-red-500 ml-1">*</span>
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
                {validation.touched.description && validation.errors.description && (
                  <p className="text-red-400">{validation.errors.description}</p>
                )}
              </div>

              <div className="xl:col-span-12">
                <label htmlFor="refundRateInput" className="inline-block mb-2 text-base font-medium">
                  Tỷ Lệ Hoàn Tiền (%) <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="number"
                  id="refundRateInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Nhập tỷ lệ hoàn tiền"
                  name="refundRate"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.refundRate !== undefined ? validation.values.refundRate : ""}
                  min="0"
                  max="100"
                  disabled={isOverview}
                />
                {validation.touched.refundRate && validation.errors.refundRate && (
                  <p className="text-red-400">{validation.errors.refundRate}</p>
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
                  {!!isEdit ? "Cập Nhật" : "Thêm Lý Do Hủy"}
                </button>
              )}
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default CancelReason;
