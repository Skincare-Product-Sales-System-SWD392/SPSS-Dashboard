import React, { useCallback, useEffect, useMemo, useState } from "react";
import BreadCrumb from "Common/BreadCrumb";
import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react";

// icons
import {
  Search,
  Plus,
  Heart,
  MoreHorizontal,
  Eye,
  FileEdit,
  Trash2,
  UploadCloud,
} from "lucide-react";
import { Dropdown } from "Common/Components/Dropdown";
import { Link } from "react-router-dom";
import DeleteModal from "Common/DeleteModal";
import Modal from "Common/Components/Modal";

// react-redux
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

// Formik
import * as Yup from "yup";
import { useFormik } from "formik";

import {
  getBrands,
  addBrand,
  updateBrand,
  deleteBrand,
} from "slices/brand/thunk";
import Dropzone from "react-dropzone";
import { ToastContainer } from "react-toastify";
import filterDataBySearch from "Common/filterDataBySearch";


const Brand = () => {
  const dispatch = useDispatch<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const [show, setShow] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [refreshFlag, setRefreshFlag] = useState(false);
  
 

  // Move selectors outside component to prevent recreation
  const brandSelector = createSelector(
    (state: any) => state.Brand,
    (brand) => {
      const brandData = brand?.brands?.data || {};
      return {
        brands: brandData.results || [],
        pageCount: brandData.pageCount || 0,
        firstRowOnPage: brandData.firstRowOnPage || 0,
        rowCount: brandData.rowCount || 0,
        loading: brand?.loading || false,
        error: brand?.error || null,
      };
    }
  );

  const { brands, pageCount, loading } = useSelector(brandSelector);
  const [data, setData] = useState<any[]>([]);
  const [eventData, setEventData] = useState<any>();


  // Get Data
  useEffect(() => {
    if (pageCount && currentPage > pageCount) {
      setCurrentPage(1);
      return;
    }
    
    dispatch(getBrands({ page: currentPage, pageSize }))
      .unwrap()
      .then((response: any) => {
        if (response.data.results.length === 0 && currentPage > 1) {
          setCurrentPage(prev => prev - 1);
        } else {
          setData(response.data.results);
        }
      });
  }, [dispatch, currentPage, refreshFlag, pageCount]);

  // Handle edit click
  const handleUpdateDataClick = useCallback((data: any) => {
    setEventData(data);
    setIsEdit(true);
    setShow(true);
  }, []);

  // Form submission handling
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      logo: (eventData && eventData.logo) || "",
      name: (eventData && eventData.name) || "",
    },
    validationSchema: Yup.object({
      logo: Yup.string().required("Please Add Logo"),
      name: Yup.string().required("Please Enter Name"),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        const updateData = {
          id: eventData.id,
          data: {
            ...values,
            logo: values.logo.priview,
          },
        };
        dispatch(updateBrand(updateData))
          .unwrap()
          .then(() => {
            toggle();
            setRefreshFlag((prev) => !prev);
          });
      } else {
        const newData = {
          ...values,
          logo: values.logo.priview,
        };
        dispatch(addBrand(newData))
          .unwrap()
          .then(() => {
            toggle();
            setRefreshFlag((prev) => !prev);
          });
      }
    },
  });

  //
  const toggle = useCallback(() => {
    if (show) {
      setShow(false);
      setEventData("");
      setSelectfiles("");
      setIsEdit(false);
    } else {
      setShow(true);
      setEventData("");
      setSelectfiles("");
      validation.resetForm();
    }
  }, [show, validation]);

  // Search Data
  const filterSearchData = (e: any) => {
    const search = e.target.value;
    const keysToSearch = ["name", "companyName"];
    filterDataBySearch(data, search, keysToSearch, setData);
  };

  // columns

  const btnFav = (ele: any) => {
    if (ele.closest("a").classList.contains("active")) {
      ele.closest("a").classList.remove("active");
    } else {
      ele.closest("a").classList.add("active");
    }
  };

  // Dropzone
  const [selectfiles, setSelectfiles] = useState<any>();

  const handleAcceptfiles = (files: any) => {
    const newImages = files?.map((file: any) => {
      return Object.assign(file, {
        priview: URL.createObjectURL(file),
      });
    });
    setSelectfiles(newImages[0]);
  };

  return (
    <React.Fragment>
      <BreadCrumb title="Brand" pageTitle="Ecommerce" />
      {/* <DeleteModal
        show={deleteModal}
        onHide={deleteToggle}
        onDelete={handleDelete}
      /> */}
      <ToastContainer closeButton={false} limit={1} />
      <form action="#!" className="mb-5">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          <div className="relative lg:col-span-3">
            <input
              type="text"
              className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
              placeholder="Search for ..."
              autoComplete="off"
              onChange={(e) => filterSearchData(e)}
            />
            <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
          </div>
          <div className="ltr:lg:text-right rtl:lg:text-left lg:col-span-3 lg:col-start-10">
            <button
              data-modal-target="addSellerModal"
              type="button"
              className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
              onClick={toggle}
            >
              <Plus className="inline-block size-4" />{" "}
              <span className="align-middle">Add Brand</span>
            </button>
          </div>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-12 gap-x-5">
        {loading ? (
          <div className="col-span-full text-center py-4">Loading...</div>
        ) : Array.isArray(data) && data.length > 0 ? (
          data.map((item: any, key: number) => (
            <div className="2xl:col-span-3" key={key}>
              <div className="card">
                <div className="card-body">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="grow">
                      <Link
                        to="#!"
                        className={`group/item toggle-button ${
                          item.isFav && "active"
                        }`}
                        onClick={(e) => btnFav(e.target)}
                      >
                        <Heart className="size-5 text-slate-500 dark:text-zink-200 fill-slate-200 dark:fill-zink-500 transition-all duration-150 ease-linear group-[.active]/item:text-yellow-500 dark:group-[.active]/item:text-yellow-500 group-[.active]/item:fill-yellow-200 dark:group-[.active]/item:fill-yellow-500/20 group-hover/item:text-yellow-500 dark:group-hover/item:text-yellow-500 group-hover/item:fill-yellow-200 dark:group-hover/item:fill-yellow-500/20" />
                      </Link>
                    </div>
                    <Dropdown className="relative dropdown shrink-0">
                      <Dropdown.Trigger
                        id="sellersAction1"
                        data-bs-toggle="dropdown"
                        className="flex items-center justify-center size-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
                      >
                        <MoreHorizontal className="size-3" />
                      </Dropdown.Trigger>
                      <Dropdown.Content
                        placement="right-end"
                        className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600"
                        aria-labelledby="sellersAction1"
                      >
                        <li>
                          <Link
                            className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                            to="#!"
                          >
                            <Eye className="inline-block size-3 mr-1" />{" "}
                            <span className="align-middle">Overview</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            data-modal-target="addSellerModal"
                            className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                            to="#!"
                            onClick={() => {
                              handleUpdateDataClick(item);
                            }}
                          >
                            <FileEdit className="inline-block size-3 mr-1" />{" "}
                            <span className="align-middle">Edit</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                            to="#!"
                            // onClick={() => onClickDelete(item)}
                          >
                            <Trash2 className="inline-block size-3 mr-1" />{" "}
                            <span className="align-middle">Delete</span>
                          </Link>
                        </li>
                      </Dropdown.Content>
                    </Dropdown>
                  </div>
                  <div className="flex items-center justify-center size-16 mx-auto rounded-full bg-slate-100 outline outline-slate-100 outline-offset-1 dark:bg-zink-600 dark:outline-zink-600">
                    <img src={item.logo} alt="" className="h-10 rounded-full" />
                  </div>

                  <div className="mt-4 mb-5 text-center">
                    <h6 className="text-16">
                      <Link to="#!">{item.name}</Link>
                    </h6>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-3 border-t border-slate-200 dark:border-zink-500">
                    <div className="text-center">
                      <h5 className="mb-1 text-16">{item.sales || "0"}</h5>
                      <p className="text-slate-500 dark:text-zink-200 text-13">Sales</p>
                    </div>
                    <div className="text-center">
                      <h5 className="mb-1 text-16">{item.products || "0"}</h5>
                      <p className="text-slate-500 dark:text-zink-200 text-13">Product</p>
                    </div>
                    <div className="text-center">
                      <h5 className="mb-1 text-16">${item.revenue || "0"}</h5>
                      <p className="text-slate-500 dark:text-zink-200 text-13">Revenue</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-4">
            No brands available
          </div>
        )}
      </div>

      {Array.isArray(data) && data.length > 0 && (
        <div className="flex justify-end mt-4">
          <ul className="flex flex-wrap items-center gap-2">
            <li>
              <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"><ChevronsLeft className="size-4 rtl:rotate-180" /></a>
            </li>
            <li>
              <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"><ChevronLeft className="size-4 rtl:rotate-180" /></a>
            </li>
            <li>
              <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">1</a>
            </li>
            <li>
              <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">2</a>
            </li>
            <li>
              <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto active">3</a>
            </li>
            <li>
              <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"><ChevronRight className="size-4 rtl:rotate-180" /></a>
            </li>
            <li>
              <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"><ChevronsRight className="size-4 rtl:rotate-180" /></a>
            </li>
          </ul>
        </div>
      )}

      {/* Brand Modal */}

      <Modal
        show={show}
        onHide={toggle}
        modal-center="true"
        className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
        dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600"
      >
        <Modal.Header
          className="flex items-center justify-between p-5 border-b dark:border-zink-500"
          closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500"
        >
          <Modal.Title className="text-16">
            {!!isEdit ? "Edit Seller" : "Add Seller"}
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
            <div className="mb-3">
              <label
                htmlFor="companyLogo"
                className="inline-block mb-2 text-base font-medium"
              >
                Company Logo
              </label>
              <Dropzone
                onDrop={(acceptfiles: any) => {
                  handleAcceptfiles(acceptfiles);
                  validation.setFieldValue("logo", acceptfiles[0]);
                }}
              >
                {({ getRootProps }: any) => (
                  <div className="flex items-center justify-center bg-white border border-dashed rounded-md cursor-pointer dropzone border-slate-200 dropzone2 dark:bg-zink-600 dark:border-zink-500">
                    <div
                      className="w-full py-5 text-lg text-center dz-message needsclick"
                      {...getRootProps()}
                    >
                      <div className="mb-3">
                        <UploadCloud className="block size-12 mx-auto text-slate-500 fill-slate-200 dark:text-zink-200 dark:fill-zink-500" />
                      </div>
                      <h5 className="mb-0 font-normal text-slate-500 dark:text-zink-200 text-15">
                        Drag and drop your logo or <Link to="#!">browse</Link>{" "}
                        your logo
                      </h5>
                    </div>
                  </div>
                )}
              </Dropzone>

              {validation.touched.logo && validation.errors.logo ? (
                <p className="text-red-400">
                  {validation.errors.logo as string}
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
                        <div className="mt-2">
                          <button
                            data-dz-remove
                            className="px-2 py-1.5 text-xs text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20"
                            onClick={() => {
                              setSelectfiles("");
                              validation.setFieldValue("logo", null);
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
            <div className="mb-3">
              <label
                htmlFor="companyNameInput"
                className="inline-block mb-2 text-base font-medium"
              >
                Company Name
              </label>
              <input
                type="text"
                id="companyNameInput"
                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                placeholder="Seller name"
                name="name"
                onChange={validation.handleChange}
                value={validation.values.name || ""}
              />
              {validation.touched.name && validation.errors.name ? (
                <p className="text-red-400">
                  {validation.errors.name as string}
                </p>
              ) : null}
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="reset"
                data-modal-close="addSellerModal"
                className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10"
                onClick={toggle}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
              >
                {!!isEdit ? "Update" : "Add Seller"}
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Brand;

