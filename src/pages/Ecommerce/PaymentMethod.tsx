import React, { useCallback, useEffect, useMemo, useState } from "react";
import BreadCrumb from "Common/BreadCrumb";
import { Link } from "react-router-dom";
import { Dropdown } from "Common/Components/Dropdown";
import Modal from "Common/Components/Modal";
import { useFormik } from "formik";
import Dropzone from "react-dropzone";

// Icon
import {
  MoreHorizontal,
  Eye,
  FileEdit,
  Trash2,
  Search,
  Plus,
  UploadCloud,
} from "lucide-react";

import TableContainer from "Common/TableContainer";
import DeleteModal from "Common/DeleteModal";

// Formik
import * as Yup from "yup";

// react-redux
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { getAllPaymentMethods, addPaymentMethod, updatePaymentMethod, deletePaymentMethod } from "slices/paymentmethod/thunk";
import { ToastContainer } from "react-toastify";

// Import the Firebase helper instead of direct Firebase imports
import { getFirebaseBackend } from "helpers/firebase_helper";

const PaymentMethod = () => {
  const dispatch = useDispatch<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;
  const [show, setShow] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [isOverview, setIsOverview] = useState<boolean>(false);
  const [selectfiles, setSelectfiles] = useState<any>(null);

  const paymentMethodSelector = createSelector(
    (state: any) => state.paymentMethod,
    (paymentMethod) => {
      return {
        paymentMethods: paymentMethod?.paymentMethods?.data?.items || [],
        totalPages: paymentMethod?.paymentMethods?.data?.totalPages || 1,
        currentPage: paymentMethod?.paymentMethods?.data?.pageNumber || 1,
        pageSize: paymentMethod?.paymentMethods?.data?.pageSize || 5,
        totalCount: paymentMethod?.paymentMethods?.data?.totalCount || 0,
        loading: paymentMethod?.loading || false,
        error: paymentMethod?.error || null,
      };
    }
  );
  

  const { paymentMethods, totalPages, loading, error } = useSelector(paymentMethodSelector);

  const [data, setData] = useState<any>([]);
  const [eventData, setEventData] = useState<any>();

  // Get Data
  useEffect(() => {
    dispatch(getAllPaymentMethods({ page: currentPage, pageSize }));
  }, [dispatch, currentPage, pageSize, refreshFlag]);

  useEffect(() => {
    if (paymentMethods) {
      if (paymentMethods.length === 0 && currentPage > 1) {
        // If no data and not on first page, go back one page
        setCurrentPage(prev => prev - 1);
      } else {
        setData(paymentMethods);
      }
    }
  }, [paymentMethods, currentPage]);

  // Delete Modal
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const deleteToggle = () => setDeleteModal(!deleteModal);

  // Delete Data
  const onClickDelete = (cell: any) => {
    setDeleteModal(true);
    setEventData(cell);
  };

  // Search functionality
  const filterSearchData = (e: any) => {
    const search = e.target.value;
    const keysToSearch = ['paymentType', 'id'];
    
    // If search is empty, restore original data
    if (!search.trim()) {
      setData(paymentMethods);
      return;
    }

    const filteredData = paymentMethods.filter((item: any) => {
      return keysToSearch.some((key) => {
        const value = item[key]?.toString().toLowerCase() || '';
        return value.includes(search.toLowerCase());
      });
    });
    setData(filteredData);
  };

  // Handle file acceptance for image upload
  const handleAcceptfiles = (files: any) => {
    files.map((file: any) =>
      Object.assign(file, {
        priview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setSelectfiles(files[0]);
  };

  // Format bytes for file size display
  const formatBytes = (bytes: any, decimals = 2) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };

  // Delete handler
  const handleDelete = () => {
    if (eventData) {
      dispatch(deletePaymentMethod(eventData.id))
        .then(() => {
          setDeleteModal(false);
          setRefreshFlag(prev => !prev);
        })
        .catch((error: any) => {
          setDeleteModal(false);
        });
    }
  };

  // Form validation schema
  const validation: any = useFormik({
    enableReinitialize: true,
    initialValues: {
      paymentType: (eventData && eventData.paymentType) || '',
      imageUrl: (eventData && eventData.imageUrl) || '',
    },
    validationSchema: Yup.object({
      paymentType: Yup.string().required("Payment type is required"),
      imageUrl: Yup.mixed().required("Image is required"),
    }),
    onSubmit: async (values) => {
      try {
        let imageUrl = values.imageUrl;
        
        // If there's a new file to upload
        if (selectfiles && selectfiles instanceof File) {
          // Use the Firebase helper to upload the payment method image
          const firebaseBackend = getFirebaseBackend();
          imageUrl = await firebaseBackend.uploadPaymentMethodImage(selectfiles);
        } else if (selectfiles && selectfiles.priview) {
          // If it's already an uploaded file with preview, use the existing URL
          imageUrl = selectfiles.priview;
        }

        if (isEdit) {
          const updateData = {
            id: eventData.id,
            data: {
              paymentType: values.paymentType,
              imageUrl: imageUrl
            }
          };
          dispatch(updatePaymentMethod(updateData))
            .then(() => {
              toggle();
              setRefreshFlag(prev => !prev);
            });
        } else {
          const newData = {
            paymentType: values.paymentType,
            imageUrl: imageUrl
          };
          dispatch(addPaymentMethod(newData))
            .then(() => {
              toggle();
              setRefreshFlag(prev => !prev);
            });
        }
      } catch (error) {
        console.error("Error processing payment method:", error);
      }
    },
  });

  // Update Data
  const handleUpdateDataClick = (ele: any) => {
    setEventData({ ...ele });
    
    // Set the image preview if there's an existing image
    if (ele.imageUrl) {
      setSelectfiles({
        priview: ele.imageUrl,
        path: ele.imageUrl.split('/').pop() // Extract filename from URL
      });
    }
    
    setIsEdit(true);
    setShow(true);
  };

  // Overview click handler
  const handleOverviewClick = (data: any) => {
    setEventData({ ...data });
    
    // Set the image preview if there's an existing image
    if (data.imageUrl) {
      setSelectfiles({
        priview: data.imageUrl,
        path: data.imageUrl.split('/').pop() // Extract filename from URL
      });
    }
    
    setIsOverview(true);
    setShow(true);
  };

  // Toggle modal
  const toggle = useCallback(() => {
    if (show) {
      setShow(false);
      setEventData(null);
      setSelectfiles(null);
      setIsEdit(false);
      setIsOverview(false);
      validation.resetForm();
    } else {
      setShow(true);
      setEventData(null);
      setSelectfiles(null);
      validation.resetForm();
    }
  }, [show, validation]);

  // Define pageCount variable from the selector
  const pageCount = totalPages;

  // Define columns here, after handleOverviewClick is declared
  const columns = [
    {
      header: "Payment Type",
      accessorKey: "paymentType",
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
      size: 200,
    },
    {
      header: () => <div className="text-center">Image</div>,
      accessorKey: "imageUrl",
      enableColumnFilter: false,
      enableSorting: false,
      cell: (cell: any) => (
        <div className="flex items-center justify-center px-4">
          {cell.getValue() ? (
            <img 
              src={cell.getValue()} 
              alt={cell.row.original.paymentType} 
              className="h-10 w-auto object-contain"
            />
          ) : (
            <span className="text-slate-500">No image</span>
          )}
        </div>
      ),
      size: 150,
    },
    {
      header: () => <div className="text-right pr-16">Action</div>,
      accessorKey: "action",
      enableColumnFilter: false,
      enableSorting: false,
      cell: (cell: any) => (
        <div className="flex justify-end items-center gap-2 pr-4">
          <button
            type="button"
            className="flex items-center justify-center size-8 p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20 rounded-full"
            onClick={() => handleOverviewClick(cell.row.original)}
          >
            <Eye className="size-4" />
          </button>
          <button
            type="button"
            className="flex items-center justify-center size-8 p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20 rounded-full"
            onClick={() => handleUpdateDataClick(cell.row.original)}
          >
            <FileEdit className="size-4" />
          </button>
          <button
            type="button"
            className="flex items-center justify-center size-8 p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20 rounded-full"
            onClick={() => onClickDelete(cell.row.original)}
          >
            <Trash2 className="size-4" />
          </button>
        </div>
      ),
      size: 150,
    },
  ];

  return (
    <React.Fragment>
      <BreadCrumb title="Payment Methods" pageTitle="Payment Methods" />
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
                  placeholder="Search for payment type..."
                  autoComplete="off"
                  onChange={(e) => filterSearchData(e)}
                />
                <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
              </div>
            </div>
            <div className="lg:col-span-2 ltr:lg:text-right rtl:lg:text-left xl:col-span-2 xl:col-start-11">
              <Link
                to="#!"
                data-modal-target="addPaymentMethodModal"
                type="button"
                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                onClick={toggle}
              >
                <Plus className="inline-block size-4" />{" "}
                <span className="align-middle">Add Payment Method</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="!pt-1 card-body">
          {loading ? (
            <div className="flex items-center justify-center py-10">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
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
                <h5 className="mt-2 mb-1">Sorry! No Result Found</h5>
                <p className="mb-0 text-slate-500 dark:text-zink-200">
                  We've searched more than 199+ payment methods. We did not find any
                  payment method for your search.
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
            {isOverview ? "Payment Method Details" : isEdit ? "Edit Payment Method" : "Add Payment Method"}
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
                <label htmlFor="paymentTypeInput" className="inline-block mb-2 text-base font-medium">
                  Payment Type <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="paymentTypeInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Enter payment type"
                  name="paymentType"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.paymentType || ""}
                  disabled={isOverview}
                />
                {validation.touched.paymentType && validation.errors.paymentType && (
                  <p className="text-red-400">{validation.errors.paymentType}</p>
                )}
              </div>

              <div className="xl:col-span-12">
                <label
                  htmlFor="paymentMethodLogo"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Payment Method Logo <span className="text-red-500">*</span>
                </label>
                <Dropzone
                  onDrop={(acceptfiles: any) => {
                    handleAcceptfiles(acceptfiles);
                    validation.setFieldValue('imageUrl', acceptfiles[0]);
                  }}
                  disabled={isOverview}
                >
                  {({ getRootProps, getInputProps }: any) => (
                    <div className="flex items-center justify-center bg-white border border-dashed rounded-md cursor-pointer dropzone border-slate-200 dropzone2 dark:bg-zink-600 dark:border-zink-500">
                      <div
                        className="w-full py-5 text-lg text-center dz-message needsclick"
                        {...getRootProps()}
                      >
                        <input {...getInputProps()} />
                        <div className="mb-3">
                          <UploadCloud className="block size-12 mx-auto text-slate-500 fill-slate-200 dark:text-zink-200 dark:fill-zink-500" />
                        </div>
                        <h5 className="mb-0 font-normal text-slate-500 dark:text-zink-200 text-15">
                          Drag and drop your logo or <span className="text-custom-500">browse</span>{" "}
                          your logo
                        </h5>
                      </div>
                    </div>
                  )}
                </Dropzone>

                {validation.touched.imageUrl && validation.errors.imageUrl ? (
                  <p className="text-red-400">
                    {validation.errors.imageUrl as string}
                  </p>
                ) : null}

                <ul
                  className="flex flex-wrap mb-0 gap-x-5"
                  id="dropzone-preview2"
                >
                  {selectfiles && (
                    <li className="mt-5" id="dropzone-preview-list2">
                      <div className="border rounded border-slate-200 dark:border-zink-500">
                        <div className="p-2 text-center">
                          <div>
                            <div className="p-2 mx-auto rounded-md size-14 bg-slate-100 dark:bg-zink-600">
                              <img
                                className="block w-full h-full rounded-md"
                                src={selectfiles.priview}
                                alt={selectfiles.name}
                              />
                            </div>
                          </div>
                          <div className="pt-3">
                            <h5 className="mb-1 text-15" data-dz-name>
                              {selectfiles.path}
                            </h5>
                            <p
                              className="mb-0 text-slate-500 dark:text-zink-200"
                              data-dz-size
                            >
                              {selectfiles.formattedSize}
                            </p>
                            <strong
                              className="error text-danger"
                              data-dz-errormessage
                            ></strong>
                          </div>
                          {!isOverview && (
                            <div className="mt-2">
                              <button
                                data-dz-remove
                                className="px-2 py-1.5 text-xs text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20"
                                onClick={() => {
                                  setSelectfiles("");
                                  validation.setFieldValue("imageUrl", null);
                                }}
                                type="button"
                              >
                                Delete
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </li>
                  )}
                </ul>
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
                  {!!isEdit ? "Update" : "Add Payment Method"}
                </button>
              )}
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default PaymentMethod;
