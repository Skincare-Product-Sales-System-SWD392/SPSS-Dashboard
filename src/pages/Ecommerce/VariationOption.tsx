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
import { getAllVariationOptions, addVariationOption, updateVariationOption, deleteVariationOption } from "slices/variationoption/thunk";
import { getAllVariations } from "slices/variation/thunk";
import { ToastContainer } from "react-toastify";

const VariationOption = () => {
  const dispatch = useDispatch<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [show, setShow] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [isOverview, setIsOverview] = useState<boolean>(false);
  const [variations, setVariations] = useState<any[]>([]);

  // Get variations for dropdown
  useEffect(() => {
    dispatch(getAllVariations({ page: 1, pageSize: 100 }))
      .then((res: any) => {
        if (res.payload?.data?.items) {
          setVariations(res.payload.data.items);
        }
      });
  }, [dispatch]);

  const variationOptionSelector = createSelector(
    (state: any) => state.VariationOption,
    (VariationOption) => ({
      variationOptions: VariationOption?.variationOptions?.data?.items || [],
      pageCount: VariationOption?.variationOptions?.data?.totalPages || 0,
      totalCount: VariationOption?.variationOptions?.data?.totalCount || 0,
      loading: VariationOption?.loading || false,
      error: VariationOption?.error || null,
    })
  );

  const { variationOptions, pageCount, loading } = useSelector(variationOptionSelector);

  const [data, setData] = useState<any>([]);
  const [eventData, setEventData] = useState<any>();

  // Get Data
  useEffect(() => {
    // Don't fetch if current page is greater than page count
    if (pageCount && currentPage > pageCount) {
      setCurrentPage(1); // Reset to first page
      return;
    }
    dispatch(getAllVariationOptions({ pageNumber: currentPage, pageSize }));
  }, [dispatch, currentPage, refreshFlag, pageCount]);

  useEffect(() => {
    if (variationOptions) {
      if (variationOptions.length === 0 && currentPage > 1) {
        // If no data and not on first page, go back one page
        setCurrentPage(prev => prev - 1);
      } else {
        setData(variationOptions);
      }
    }
  }, [variationOptions, currentPage]);

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

  // Search functionality
  const filterSearchData = (e: any) => {
    const search = e.target.value;
    const keysToSearch = ['value', 'variation.name', 'variation'];
    const filteredData = variationOptions.filter((item: any) => {
      return keysToSearch.some((key) => {
        const value = key.includes('.') 
          ? key.split('.').reduce((obj, k) => obj && obj[k], item)?.toString().toLowerCase() || ''
          : item[key]?.toString().toLowerCase() || '';
        return value.includes(search.toLowerCase());
      });
    });
    setData(filteredData);
  };

  // Delete handler
  const handleDelete = () => {
    if (eventData) {
      dispatch(deleteVariationOption(eventData.id))
        .then(() => {
          setDeleteModal(false);
          setRefreshFlag(prev => !prev); // Trigger data refresh after deletion
        });
    }
  };

  // Form validation schema
  const validation: any = useFormik({
    enableReinitialize: true,
    initialValues: {
      value: (eventData && eventData.value) || '',
      variationId: (eventData && eventData.variationId) || '',
    },
    validationSchema: Yup.object({
      value: Yup.string().required("Value is required"),
      variationId: Yup.string().required("Variation is required")
    }),
    onSubmit: (values) => {
      if (isEdit) {
        console.log("Updating with eventData:", eventData);
        console.log("Form values:", values);
        
        // Make sure we have a valid ID before sending the update request
        if (!eventData || !eventData.id) {
          console.error("Cannot update: Missing variation option ID");
          return;
        }
        
        const updateData = {
          id: eventData.id,
          data: {
            value: values.value,
            variationId: values.variationId
          }
        };
        
        console.log("Update data being sent:", updateData);
        
        dispatch(updateVariationOption(updateData))
          .then((response: any) => {
            console.log("Update successful:", response);
            toggle();
            setRefreshFlag(prev => !prev); // Use function form to ensure latest state
          })
          .catch((error: any) => {
            console.error("Update failed:", error);
          });
      } else {
        dispatch(addVariationOption({
          value: values.value,
          variationId: values.variationId
        }))
          .then(() => {
            toggle();
            setRefreshFlag(!refreshFlag);
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

  // Toggle modal
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

  // Function to get variation name by ID (for overview modal)
  const getVariationNameById = useCallback((variationId: string) => {
    const variation = variations.find(v => v.id === variationId);
    return variation ? variation.name : "Unknown";
  }, [variations]);

  // Define columns for the table
  const columns = useMemo(
    () => [
      {
        id: "value",
        header: () => <div className="text-left">Giá Trị</div>,
        accessorKey: "value",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
          <div className="text-left">
            <Link to="#!" className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600">
              {cell.getValue()}
            </Link>
          </div>
        ),
      },
      {
        id: "variation",
        header: () => <div className="text-center">Biến Thể</div>,
        accessorKey: "variationDto2.name",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => {
          const row = cell.row.original;
          return (
            <div className="text-center">
              {row.variationDto2?.name || "N/A"}
            </div>
          );
        },
      },
      {
        id: "action",
        header: () => <div className="text-right">Thao Tác</div>,
        enableColumnFilter: false,
        enableSorting: false,
        cell: (cell: any) => (
          <div className="flex justify-end">
            <Dropdown className="relative">
              <Dropdown.Trigger
                id="variationOptionAction1"
                data-bs-toggle="dropdown"
                className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
              >
                <MoreHorizontal className="size-3" />
              </Dropdown.Trigger>
              <Dropdown.Content
                placement={cell.row.index ? "top-end" : "right-end"}
                className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md min-w-[10rem] dark:bg-zink-600"
                aria-labelledby="variationOptionAction1"
              >
                <li>
                  <Link
                    to="#!"
                    className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                    onClick={() => {
                      const row = cell.row.original;
                      console.log("Edit clicked with row:", row);
                      
                      // Ensure we have all the necessary data
                      const editData = {
                        id: row.id,
                        value: row.value || "",
                        variationId: row.variationId || ""
                      };
                      
                      console.log("Setting eventData to:", editData);
                      
                      setEventData(editData);
                      setIsEdit(true);
                      setIsOverview(false);
                      setShow(true);
                      
                      // Make sure form values are set correctly
                      validation.setValues({
                        value: row.value || "",
                        variationId: row.variationId || "",
                      });
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
                    onClick={() => onClickDelete(cell.row.original)}
                  >
                    <Trash2 className="inline-block size-3 ltr:mr-1 rtl:ml-1" />{" "}
                    <span className="align-middle">Xóa</span>
                  </Link>
                </li>
              </Dropdown.Content>
            </Dropdown>
          </div>
        ),
        size: 80,
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <BreadCrumb title="Variation Options" pageTitle="Variation Options" />
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
                  placeholder="Tìm kiếm giá trị, biến thể..."
                  autoComplete="off"
                  onChange={(e) => filterSearchData(e)}
                />
                <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
              </div>
            </div>
            <div className="lg:col-span-2 ltr:lg:text-right rtl:lg:text-left xl:col-span-2 xl:col-start-11">
              <Link
                to="#!"
                data-modal-target="addVariationOptionModal"
                type="button"
                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                onClick={toggle}
              >
                <Plus className="inline-block size-4" />{" "}
                <span className="align-middle">Thêm Giá Trị Biến Thể</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="!pt-1 card-body">
          {loading ? (
            <div className="flex items-center justify-center py-10">
              <div className="spinner-border text-custom-500" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : data && data.length > 0 ? (
            <TableContainer
              isPagination={true}
              columns={columns || []}
              data={data || []}
              customPageSize={pageSize}
              pageCount={pageCount}
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
                  Chúng tôi đã tìm kiếm hơn 199+ giá trị biến thể. Chúng tôi không tìm thấy 
                  giá trị biến thể nào phù hợp với tìm kiếm của bạn.
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
            {isEdit ? "Chỉnh Sửa Giá Trị Biến Thể" : isOverview ? "Chi Tiết Giá Trị Biến Thể" : "Thêm Giá Trị Biến Thể"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Form submitted, isOverview:", isOverview);
              console.log("Current eventData:", eventData);
              if (!isOverview) {
                console.log("Calling validation.handleSubmit()");
                validation.handleSubmit();
                return false;
              }
              return false;
            }}
          >
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
              <div className="xl:col-span-12">
                <label htmlFor="value" className="inline-block mb-2 text-base font-medium">
                  Giá Trị <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  id="value"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Nhập giá trị biến thể"
                  name="value"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.value || ""}
                  disabled={isOverview}
                />
                {validation.touched.value && validation.errors.value && !isOverview && (
                  <p className="text-red-400">{validation.errors.value}</p>
                )}
              </div>

              <div className="xl:col-span-12">
                <label htmlFor="variationId" className="inline-block mb-2 text-base font-medium">
                  Biến Thể <span className="text-red-500 ml-1">*</span>
                </label>
                <select
                  id="variationId"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  name="variationId"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.variationId || ""}
                  disabled={isOverview}
                >
                  <option value="">Select Variation</option>
                  {variations.map((variation) => (
                    <option key={variation.id} value={variation.id}>
                      {variation.name}
                    </option>
                  ))}
                </select>
                {validation.touched.variationId && validation.errors.variationId && !isOverview && (
                  <p className="text-red-400">{validation.errors.variationId}</p>
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
                  {isEdit ? "Cập Nhật" : "Thêm"}
                </button>
              )}
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default VariationOption;