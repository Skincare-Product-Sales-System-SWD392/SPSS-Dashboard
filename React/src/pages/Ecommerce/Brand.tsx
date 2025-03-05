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
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Select from 'react-select';
import { getCountries } from "slices/country/thunk";
import { getFirebaseBackend } from "helpers/firebase_helper";


const Brand = () => {
  const dispatch = useDispatch<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const [show, setShow] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [refreshFlag, setRefreshFlag] = useState(false);
  
  // Add these new state variables
  const [isLoadingCountries, setIsLoadingCountries] = useState(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [selectedBrand, setSelectedBrand] = useState<any>(null);
  const [isViewMode, setIsViewMode] = useState<boolean>(false);
  
  // Move selectors outside component to prevent recreation
  const brandSelector = createSelector(
    (state: any) => state.Brand || { brands: { results: [], rowCount: 0 } },
    (brand) => ({
      brands: brand.brands?.results || [],
      pageCount: Math.ceil((brand.brands?.rowCount || 0) / pageSize),
      firstRowOnPage: brand.brands?.firstRowOnPage || 0,
      rowCount: brand.brands?.rowCount || 0,
      loading: brand.loading || false,
      error: brand.error || null,
    })
  );
  
  const { brands, pageCount, loading } = useSelector(brandSelector);

  const [data, setData] = useState<any[]>([]);
  const [eventData, setEventData] = useState<any>();

  // Add country selector
  const countrySelector = createSelector(
    (state: any) => state.Country,
    (country) => ({
      allCountries: country?.allCountries || [],
      loading: country?.loading || false,
    })
  );
  
  const { allCountries } = useSelector(countrySelector);

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
      })
      .catch((error: any) => {
        console.error('Failed to fetch brands:', error);
      });
  }, [dispatch, currentPage, refreshFlag, pageCount]);

  // Handle edit click
  const handleUpdateDataClick = useCallback((data: any) => {
    setEventData({
      ...data,
      CountryId: data.countryId,
      Name: data.name,
      Title: data.title,
      Description: data.description,
      ImageUrl: data.imageUrl
    });
    
    // Set the image preview if there's an existing image
    if (data.imageUrl) {
      setSelectfiles({
        priview: data.imageUrl,
        path: data.imageUrl.split('/').pop() // Extract filename from URL
      });
    }
    
    setIsEdit(true);
    setShow(true);
  }, []);

  // Function to load all countries
  const loadAllCountries = useCallback(async () => {
    setIsLoadingCountries(true);
    try {
      let page = 1;
      let hasMore = true;
      
      while (hasMore) {
        const response = await dispatch(getCountries({ page, pageSize: 100 })).unwrap();
        hasMore = page < response.data.pageCount;
        page++;
      }
    } catch (error) {
      console.error('Error loading countries:', error);
    }
    setIsLoadingCountries(false);
  }, [dispatch]);

  // Load countries when modal opens
  useEffect(() => {
    if (show && allCountries.length === 0) {
      loadAllCountries();
    }
  }, [show, allCountries.length, loadAllCountries]);

  // Convert countries to options format for react-select
  const countryOptions = useMemo(() => 
    allCountries.map((country: any) => ({
      value: country.id,
      label: country.countryName,
      countryCode: country.countryCode
    })),
    [allCountries]
  );

  // Form submission handling
  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      ImageUrl: (eventData && eventData.ImageUrl) || "",
      Name: (eventData && eventData.Name) || "",
      Title: (eventData && eventData.Title) || "",
      Description: (eventData && eventData.Description) || "",
      CountryId: (eventData && eventData.CountryId) || null,
    },
    validationSchema: Yup.object({
      ImageUrl: Yup.mixed().required("Brand logo is required"),
      Name: Yup.string().required("Brand name is required"),
      Title: Yup.string().required("Title is required"),
      Description: Yup.string().required("Description is required"),
      CountryId: Yup.mixed().required("Country is required"),
    }),
    onSubmit: async (values) => {
      try {
        let imageUrl = values.ImageUrl;
        
        // If the ImageUrl is a File object (new upload), upload it to Firebase
        if (values.ImageUrl instanceof File) {
          const firebaseBackend = getFirebaseBackend();
          imageUrl = await firebaseBackend.uploadFile(values.ImageUrl, 'SPSS/Brand-Image');
        }

        if (isEdit) {
          const updateData = {
            id: eventData.id,
            data: {
              name: values.Name,
              title: values.Title,
              description: values.Description,
              countryId: values.CountryId,
              imageUrl: imageUrl
            },
          };

          dispatch(updateBrand(updateData))
            .unwrap()
            .then(() => {
              validation.resetForm();
              toggle();
              setRefreshFlag(prev => !prev);
            })
            .catch((error: any) => {
              console.error('Failed to update brand:', error);
            });
        } else {
          const newData = {
            name: values.Name,
            title: values.Title,
            description: values.Description,
            countryId: parseInt(values.CountryId),
            imageUrl: imageUrl
          };

          console.log('Submitting new brand data:', newData);

          dispatch(addBrand(newData))
            .unwrap()
            .then((response: any) => {
              console.log('Add brand response:', response);
              validation.resetForm();
              toggle();
              setRefreshFlag(prev => !prev);
            })
            .catch((error: any) => {
              console.error('Failed to add brand:', error);
              if (error.response) {
                console.error('Error response:', error.response.data);
              }
            });
        }
      } catch (error) {
        console.error('Error processing image upload:', error);
      }
    },
  });

  // Delete modal toggle
  const deleteToggle = useCallback(() => {
    setDeleteModal(!deleteModal);
  }, [deleteModal]);

  // Handle delete click
  const onClickDelete = useCallback((brand: any) => {
    setSelectedBrand(brand);
    deleteToggle();
  }, [deleteToggle]);

  // Handle delete confirmation
  const handleDelete = useCallback(() => {
    if (selectedBrand) {
      dispatch(deleteBrand(selectedBrand.id))
        .unwrap()
        .then(() => {
          deleteToggle();
          setRefreshFlag(prev => !prev);
        })
        .catch((error: any) => {
          console.error('Failed to delete brand:', error);
        });
    }
  }, [dispatch, selectedBrand, deleteToggle]);

  // Handle overview click
  const handleOverviewClick = useCallback((data: any) => {
    setEventData({
      ...data,
      CountryId: data.countryId,
      Name: data.name,
      Title: data.title,
      Description: data.description,
      ImageUrl: data.imageUrl
    });
    setIsViewMode(true);
    setShow(true);
  }, []);

  // Modified toggle function
  const toggle = useCallback(() => {
    if (show) {
      setShow(false);
      setEventData(null);
      setSelectfiles(null);
      setIsEdit(false);
      setIsViewMode(false);
      validation.resetForm();
    } else {
      setShow(true);
      setEventData(null);
      setSelectfiles(null);
      validation.resetForm();
    }
  }, [show, validation]);

  // Modified search function
  const filterSearchData = (e: any) => {
    const search = e.target.value.toLowerCase();
    const filteredData = brands.filter((item: any) => 
      item.name?.toLowerCase().includes(search) ||
      item.country?.countryName?.toLowerCase().includes(search) ||
      item.sales?.toString().includes(search) ||
      item.products?.toString().includes(search) ||
      item.revenue?.toString().includes(search)
    );
    setData(filteredData);
  };

  // Modified country selection handling
  const handleCountryChange = (option: any) => {
    validation.setFieldValue('CountryId', option?.value);
    validation.setFieldTouched('CountryId', true, false);
  };

  // Modified pagination section
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Modified modal content
  const renderModalContent = () => (
    <Modal.Body className="max-h-[calc(theme('height.screen')_-_100px)] p-4 overflow-y-auto">
      <form
        action="#!"
        onSubmit={(e) => {
          e.preventDefault();
          if (!isViewMode) {
            validation.handleSubmit();
          }
          return false;
        }}
      >
        <div className="mb-3">
          <label
            htmlFor="companyLogo"
            className="inline-block mb-2 text-base font-medium"
          >
            Brand Logo <span className="text-red-500">*</span>
          </label>
          <Dropzone
            onDrop={(acceptfiles: any) => {
              handleAcceptfiles(acceptfiles);
              validation.setFieldValue('ImageUrl', acceptfiles[0]);
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

          {validation.touched.ImageUrl && validation.errors.ImageUrl ? (
            <p className="text-red-400">
              {validation.errors.ImageUrl as string}
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
                          validation.setFieldValue("ImageUrl", null);
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
            htmlFor="brandNameInput"
            className="inline-block mb-2 text-base font-medium"
          >
            Brand Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="brandNameInput"
            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
            placeholder="Enter brand name"
            value={validation.values.Name}
            onChange={validation.handleChange}
            name="Name"
            disabled={isViewMode}
          />
          {validation.touched.Name && validation.errors.Name ? (
            <p className="text-red-400">{validation.errors.Name as string}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <label className="inline-block mb-2 text-base font-medium">
            Country <span className="text-red-500">*</span>
          </label>
          <Select
            value={countryOptions.find((option: any) => option.value === validation.values.CountryId)}
            onChange={handleCountryChange}
            options={countryOptions}
            isLoading={isLoadingCountries}
            className="react-select"
            classNamePrefix="select"
            isDisabled={isViewMode}
            styles={{
              menu: (provided) => ({
                ...provided,
                zIndex: 9999
              })
            }}
          />
          {validation.touched.CountryId && validation.errors.CountryId ? (
            <p className="text-red-400">{validation.errors.CountryId as string}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <label className="inline-block mb-2 text-base font-medium">
            Title <span className="text-red-500">*</span>
          </label>
          <CKEditor
            editor={ClassicEditor}
            data={validation.values.Title}
            onChange={(event: any, editor: any) => {
              if (!isViewMode) {
                const data = editor.getData();
                validation.setFieldValue('Title', data);
              }
            }}
            config={{
              toolbar: isViewMode ? [] : undefined,
              removePlugins: isViewMode ? ['Toolbar'] : []
            }}
          />
          {validation.touched.Title && validation.errors.Title ? (
            <p className="text-red-400">{validation.errors.Title as string}</p>
          ) : null}
        </div>
        <div className="mb-3">
          <label className="inline-block mb-2 text-base font-medium">
            Description <span className="text-red-500">*</span>
          </label>
          <div className={`ck-editor__height ${isViewMode ? 'view-mode' : ''}`}>
            <CKEditor
              editor={ClassicEditor}
              data={validation.values.Description}
              onChange={(event: any, editor: any) => {
                if (!isViewMode) {
                  const data = editor.getData();
                  validation.setFieldValue('Description', data);
                }
              }}
              config={{
                toolbar: isViewMode ? [] : undefined,
                removePlugins: isViewMode ? ['Toolbar'] : [],
              }}
            />
          </div>
          {validation.touched.Description && validation.errors.Description ? (
            <p className="text-red-400">{validation.errors.Description as string}</p>
          ) : null}
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <button
            type="button"
            className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10"
            onClick={toggle}
          >
            {isViewMode ? "Close" : "Cancel"}
          </button>
          {!isViewMode && (
            <button
              type="submit"
              className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
            >
              {isEdit ? "Update Brand" : "Add Brand"}
            </button>
          )}
        </div>
      </form>
    </Modal.Body>
  );

  // Modified pagination rendering
  const renderPagination = () => {
    if (!pageCount || pageCount <= 1) return null;

    return (
      <div className="flex justify-end mt-4">
        <ul className="flex flex-wrap items-center gap-2">
          <li>
            <button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"
            >
              <ChevronsLeft className="size-4 rtl:rotate-180" />
            </button>
          </li>
          <li>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"
            >
              <ChevronLeft className="size-4 rtl:rotate-180" />
            </button>
          </li>
          {[...Array(pageCount)].map((_, index) => (
            <li key={index + 1}>
              <button
                onClick={() => handlePageChange(index + 1)}
                className={`inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto ${
                  currentPage === index + 1 ? 'active' : ''
                }`}
              >
                {index + 1}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === pageCount}
              className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"
            >
              <ChevronRight className="size-4 rtl:rotate-180" />
            </button>
          </li>
          <li>
            <button
              onClick={() => handlePageChange(pageCount)}
              disabled={currentPage === pageCount}
              className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto"
            >
              <ChevronsRight className="size-4 rtl:rotate-180" />
            </button>
          </li>
        </ul>
      </div>
    );
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

  // Update dropdown menu items
  const dropdownItems = (item: any) => (
    <>
      <li>
        <Link
          className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
          to="#!"
          onClick={() => handleOverviewClick(item)}
        >
          <Eye className="inline-block size-3 mr-1" />{" "}
          <span className="align-middle">Overview</span>
        </Link>
      </li>
      <li>
        <Link
          className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
          to="#!"
          onClick={() => handleUpdateDataClick(item)}
        >
          <FileEdit className="inline-block size-3 mr-1" />{" "}
          <span className="align-middle">Edit</span>
        </Link>
      </li>
      <li>
        <Link
          className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
          to="#!"
          onClick={() => onClickDelete(item)}
        >
          <Trash2 className="inline-block size-3 mr-1" />{" "}
          <span className="align-middle">Delete</span>
        </Link>
      </li>
    </>
  );

  const btnFav = (target: any) => {
    target.closest('.toggle-button').classList.toggle('active');
  };

  return (
    <React.Fragment>
      <BreadCrumb title="Brand" pageTitle="Ecommerce" />
      <DeleteModal
        show={deleteModal}
        onHide={deleteToggle}
        onDelete={handleDelete}
      />
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
                          item.isLiked && "active"
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
                        {dropdownItems(item)}
                      </Dropdown.Content>
                    </Dropdown>
                  </div>
                  <div className="flex items-center justify-center size-16 mx-auto rounded-full bg-slate-100 outline outline-slate-100 outline-offset-1 dark:bg-zink-600 dark:outline-zink-600">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name} 
                      className="h-10 rounded-full"
                      onError={(e: any) => {
                        e.target.src = "/images/brand-placeholder.png"; // Add a placeholder image
                      }} 
                    />
                  </div>

                  <div className="mt-4 mb-4 text-center">
                    <h6 className="text-16">
                      <Link to="#!">{item.name}</Link>
                    </h6>
                    <p className="mt-2 text-slate-500 dark:text-zink-200 text-13">
                      {item.country?.countryName || "N/A"}
                    </p>
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

      {renderPagination()}

      {/* Brand Modal */}

      <DeleteModal
        show={deleteModal}
        onHide={deleteToggle}
        onDelete={handleDelete}
      />

      <Modal
        show={show}
        onHide={toggle}
        modal-center="true"
        className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
        dialogClassName="w-screen md:w-[50rem] bg-white shadow rounded-md dark:bg-zink-600"
      >
        <Modal.Header
          className="flex items-center justify-between p-5 border-b dark:border-zink-500"
          closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500"
        >
          <Modal.Title className="text-16">
            {isViewMode ? "View Brand" : isEdit ? "Edit Brand" : "Add Brand"}
          </Modal.Title>
        </Modal.Header>
        {renderModalContent()}
      </Modal>

      <style>
        {`
          .ck-editor__height .ck-editor__editable_inline {
            min-height: 400px;
            resize: vertical;
            overflow: auto;
          }
          .ck-editor__editable_inline {
            resize: vertical;
            overflow: auto;
          }
          
          /* Dark mode styles */
          .dark .ck.ck-editor__main > .ck-editor__editable {
            background-color: #1f2937;
            color: #e5e7eb;
          }
          .dark .ck.ck-toolbar {
            background-color: #374151;
            border-color: #4b5563;
          }
          .dark .ck.ck-button {
            color: #e5e7eb;
          }
          .dark .ck.ck-toolbar__separator {
            background-color: #4b5563;
          }
          .dark .ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused {
            border-color: #4b5563;
          }
          .dark .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
            background-color: #1f2937;
            border-color: #4b5563;
          }
          .dark .ck.ck-editor {
            color: #e5e7eb;
          }
          .dark .ck.ck-content {
            background-color: #1f2937;
            color: #e5e7eb;
          }

          /* View mode styles for CKEditor */
          .view-mode .ck.ck-editor__main > .ck-editor__editable {
            background-color: transparent !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            cursor: default !important;
          }

          .view-mode .ck.ck-editor__main > .ck-editor__editable.ck-focused {
            border: none !important;
            box-shadow: none !important;
          }

          .view-mode .ck.ck-editor__main > .ck-editor__editable:hover {
            cursor: default !important;
          }

          /* Dark mode view mode styles */
          .dark .view-mode .ck.ck-editor__main > .ck-editor__editable {
            background-color: transparent !important;
            color: #e5e7eb !important;
          }

          .ck.ck-editor__editable_inline {
            min-height: 200px;
          }

          .view-mode .ck.ck-editor__editable_inline {
            min-height: auto !important;
          }

          /* Remove focus outline in view mode */
          .view-mode .ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused {
            border: none !important;
            box-shadow: none !important;
          }

          /* Hide scrollbar in view mode */
          .view-mode .ck.ck-editor__editable_inline {
            overflow: visible !important;
          }

          /* Completely disable interaction in view mode */
          .view-mode .ck.ck-editor__main > .ck-editor__editable {
            pointer-events: none !important;
            user-select: text !important;
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
          }

          .view-mode .ck.ck-toolbar {
            display: none !important;
          }

          .view-mode .ck.ck-editor__main > .ck-editor__editable:hover {
            cursor: default !important;
          }

          .view-mode .ck.ck-editor__main > .ck-editor__editable.ck-focused {
            border: none !important;
            box-shadow: none !important;
          }

          /* Allow text selection but prevent editing */
          .view-mode .ck.ck-editor__editable.ck-read-only {
            background-color: transparent !important;
            opacity: 1 !important;
          }

          /* Dark mode adjustments */
          .dark .view-mode .ck.ck-editor__main > .ck-editor__editable {
            color: #e5e7eb !important;
            background-color: transparent !important;
          }
        `}
      </style>
    </React.Fragment>
  );
};

export default Brand;

