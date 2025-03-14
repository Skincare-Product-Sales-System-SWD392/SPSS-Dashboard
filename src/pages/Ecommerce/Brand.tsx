import React, { useCallback, useEffect, useMemo, useState } from "react";
import BreadCrumb from "Common/BreadCrumb";
import { Link } from "react-router-dom";
import { Dropdown } from "Common/Components/Dropdown";
import Modal from "Common/Components/Modal";
import { useFormik } from "formik";
import Flatpickr from 'react-flatpickr';

// Icons
import { 
  Search, 
  Plus, 
  MoreHorizontal, 
  Eye, 
  FileEdit, 
  Trash2, 
  UploadCloud 
} from "lucide-react";

import TableContainer from "Common/TableContainer";
import DeleteModal from "Common/DeleteModal";

// Formik
import * as Yup from "yup";

// react-redux
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

import {
  getAllBrands,
  addBrand,
  updateBrand,
  deleteBrand,
} from "slices/brand/thunk";
import { ToastContainer } from "react-toastify";
import filterDataBySearch from "Common/filterDataBySearch";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Select from 'react-select';
import { getCountries } from "slices/country/thunk";
import { getFirebaseBackend } from "helpers/firebase_helper";
import Dropzone from "react-dropzone";

const Brand = () => {
  const dispatch = useDispatch<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [show, setShow] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [isViewMode, setIsViewMode] = useState<boolean>(false);
  
  // State for handling file uploads
  const [selectfiles, setSelectfiles] = useState<any>("");
  
  // State for countries
  const [isLoadingCountries, setIsLoadingCountries] = useState(false);
  
  // Delete modal state
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [selectedBrand, setSelectedBrand] = useState<any>(null);
  const [data, setData] = useState<any[]>([]);
  const [eventData, setEventData] = useState<any>();

  // Direct access to Redux state for debugging
  const brandState = useSelector((state: any) => state.Brand);
  console.log("BRAND STATE:", brandState);

  // Get brands directly from state without selector
  const brands = brandState?.brands?.data?.items || [];
  const loading = brandState?.loading || false;
  const error = brandState?.error || null;
  const pageCount = brandState?.brands?.data?.totalPages || 1;

  console.log("BRANDS ARRAY:", brands);

  // Fetch brands on component mount and when currentPage changes
  useEffect(() => {
    dispatch(getAllBrands({ page: currentPage, pageSize }));
  }, [dispatch, currentPage, refreshFlag]);

  // Update local state when brands change
  useEffect(() => {
    if (brands && brands.length > 0) {
      console.log("Setting data with brands:", brands);
      setData(brands);
    } else {
      console.log("No brands found, setting empty data array");
      setData([]);
    }
  }, [brands]);

  // Country selector
  const countrySelector = createSelector(
    (state: any) => state.Country,
    (country) => ({
      allCountries: country?.allCountries || [],
      loading: country?.loading || false,
    })
  );
  
  const { allCountries } = useSelector(countrySelector);

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

  // Country selector - make sure this is called early in the component
  useEffect(() => {
    // Load countries when component mounts
    dispatch(getCountries({ page: 1, pageSize: 100 }));
  }, [dispatch]);

  // Form validation
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
        
        // If a new file was uploaded, upload it to storage
        if (selectfiles && typeof selectfiles !== 'string') {
          const firebase = getFirebaseBackend();
          imageUrl = await firebase.uploadImage(selectfiles);
        }
        
        const brandData = {
          name: values.Name,
          title: values.Title,
          description: values.Description,
          countryId: values.CountryId?.value, // Add optional chaining
          imageUrl: imageUrl // Store the image URL
        };
        
        if (isEdit) {
          await dispatch(updateBrand({ id: eventData.id, data: brandData }));
        } else {
          await dispatch(addBrand(brandData));
        }
        
        setRefreshFlag(!refreshFlag);
        toggle();
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
  });

  // Handle file uploads
  const handleAcceptfiles = (files: any) => {
    const newImages = files?.map((file: any) => {
      return Object.assign(file, {
        priview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
        path: file.name
      });
    });
    setSelectfiles(newImages[0]);
    validation.setFieldValue('ImageUrl', files[0]);
  };

  // Format bytes
  const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };

  // Handle country selection
  const handleCountryChange = (option: any) => {
    validation.setFieldValue('CountryId', option);
    validation.setFieldTouched('CountryId', true, false);
  };

  // Toggle modal
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

  // Handle edit click
  const handleUpdateDataClick = useCallback((data: any) => {
    console.log("Edit data:", data);
    
    // Find country in options
    // const countryOption = countryOptions.find(option => option.value === data.countryId) || null;
    const countryOption = "just test"
    setEventData({
      id: data.id,
      Name: data.name,
      Title: data.title,
      Description: data.description,
      ImageUrl: data.imageUrl,
      CountryId: countryOption
    });
    
    // Set form values directly
    validation.setValues({
      Name: data.name,
      Title: data.title,
      Description: data.description,
      ImageUrl: data.imageUrl,
      CountryId: countryOption
    });
    
    setIsEdit(true);
    setIsViewMode(false);
    toggle();
  }, [countryOptions, toggle, validation]);

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

  // Search Data
  const filterSearchData = (e: any) => {
    const search = e.target.value;
    const keysToSearch = ['name', 'title', 'description', 'country.countryName'];
    filterDataBySearch(brands, search, keysToSearch, setData);
  };

  // Date filtering function
  const handleDateFilter = (dates: any) => {
    if (!dates || dates.length === 0) {
      setData(brands); // Reset to all data if date is cleared
      return;
    }

    // Filter brands by date range
    const startDate = new Date(dates[0]);
    const endDate = dates[1] ? new Date(dates[1]) : null;

    const filteredData = brands.filter((item: any) => {
      const brandDate = new Date(item.createdAt || item.updatedAt);
      if (endDate) {
        return brandDate >= startDate && brandDate <= endDate;
      } else {
        return brandDate >= startDate;
      }
    });

    setData(filteredData);
  };

  // Table columns
  const columns = useMemo(() => [
    {
      header: "Name",
      accessorKey: "name",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cell: any) => (
        <div className="flex items-center gap-2">
          {cell.row.original.imageUrl ? (
            <img 
              src={cell.row.original.imageUrl} 
              alt={cell.getValue()} 
              className="h-8 w-8 rounded-full object-cover"
              onError={(e: any) => {
                e.target.src = `https://placehold.co/40x40/gray/white?text=${cell.getValue().charAt(0).toUpperCase()}`; 
              }}
            />
          ) : (
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-200 text-slate-600 font-medium">
              {cell.getValue().charAt(0).toUpperCase()}
            </div>
          )}
          <h6 className="font-medium text-slate-800 dark:text-white">{cell.getValue()}</h6>
        </div>
      ),
    },
    {
      header: "Country",
      accessorKey: "countryName",
      enableColumnFilter: false,
      cell: (cell: any) => {
        // Get country name from countryId if available
        const countryId = cell.row.original.countryId;
        const countryName = allCountries.find((c: any) => c.id === countryId)?.countryName || "N/A";
        
        return (
          <span className="category px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-slate-100 border-slate-200 text-slate-500 dark:bg-slate-500/20 dark:border-slate-500/20 dark:text-zink-200">
            {countryName}
          </span>
        );
      },
    },
    {
      header: "Title",
      accessorKey: "title",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cell: any) => (
        <span>{cell.getValue() || "0"}</span>
      ),
    },
    {
      header: "Description",
      accessorKey: "description",
      enableColumnFilter: false,
      enableSorting: true,
      cell: (cell: any) => (
        <span>{cell.getValue() ? (cell.getValue().length > 50 ? cell.getValue().substring(0, 50) + "..." : cell.getValue()) : "0"}</span>
      ),
    },
    {
      header: "Action",
      accessorKey: "action",
      enableColumnFilter: false,
      cell: (cell: any) => (
        <Dropdown className="relative">
          <Dropdown.Trigger id="brandAction1" data-bs-toggle="dropdown" className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-zink-700 dark:text-zink-200 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20">
            <MoreHorizontal className="size-3" />
          </Dropdown.Trigger>
          <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md min-w-[10rem] dark:bg-zink-600" aria-labelledby="brandAction1">
            <li>
              <Link 
                to="#!" 
                className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                onClick={() => {
                  const data = cell.row.original;
                  handleOverviewClick(data);
                }}
              >
                <Eye className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Overview</span>
              </Link>
            </li>
            <li>
              <Link 
                to="#!" 
                className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                onClick={() => {
                  const data = cell.row.original;
                  handleUpdateDataClick(data);
                }}
              >
                <FileEdit className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Edit</span>
              </Link>
            </li>
            <li>
              <Link 
                to="#!" 
                className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                onClick={() => {
                  const data = cell.row.original;
                  onClickDelete(data);
                }}
              >
                <Trash2 className="inline-block size-3 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Delete</span>
              </Link>
            </li>
          </Dropdown.Content>
        </Dropdown>
      ),
    }
  ], [allCountries, handleOverviewClick, handleUpdateDataClick, onClickDelete]);

  // Make sure countryOptions is properly populated
  useEffect(() => {
    if (allCountries && allCountries.length > 0 && !validation.values.CountryId) {
      // Only set default value if CountryId is not already set
      const options = allCountries.map((country: any) => ({
        value: country.id,
        label: country.countryName,
        countryCode: country.countryCode
      }));
      // Don't automatically set a default country
    }
  }, [allCountries, validation.values.CountryId]);

  // Render modal content
  const renderModalContent = () => (
    <Modal.Body className="p-4">
      <form onSubmit={validation.handleSubmit}>
        {/* Image upload section */}
        <div className="mb-3">
          <label htmlFor="brandLogo" className="inline-block mb-2 text-base font-medium">
            Brand Logo
          </label>
          <Dropzone
            onDrop={(acceptedFiles) => {
              setSelectfiles(acceptedFiles[0]);
              validation.setFieldValue("ImageUrl", acceptedFiles[0]);
            }}
            disabled={isViewMode}
          >
            {({getRootProps, getInputProps}) => (
              <div className="flex items-center justify-center border border-dashed rounded-md cursor-pointer dropzone border-slate-300 dark:border-zink-500" {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="py-5 text-center">
                  <UploadCloud className="size-10 mx-auto mb-2 text-slate-500 fill-slate-200 dark:text-zink-200 dark:fill-zink-500" />
                  <h5 className="mb-1 text-16">Drop files here or click to upload.</h5>
                  <p className="mb-0 text-slate-500 dark:text-zink-200">
                    </p>
                </div>
              </div>
            )}
          </Dropzone>
          {validation.touched.ImageUrl && validation.errors.ImageUrl ? (
            <p className="text-red-400">{validation.errors.ImageUrl as string}</p>
          ) : null}
          
          {/* Preview image if available */}
          {(eventData?.ImageUrl || selectfiles) && (
            <div className="mt-2">
              <h5 className="mb-1 text-14">Preview:</h5>
              <div className="flex items-center gap-2">
                <img 
                  src={typeof selectfiles === 'string' ? selectfiles : (selectfiles ? URL.createObjectURL(selectfiles) : eventData?.ImageUrl)} 
                  alt="Brand Logo" 
                  className="h-16 w-16 rounded-md object-cover"
                  onError={(e: any) => {
                    e.target.src = `https://placehold.co/64x64/gray/white?text=${validation.values.Name?.charAt(0).toUpperCase() || "B"}`;
                  }}
                />
              </div>
            </div>
          )}
        </div>
        
        {/* Other form fields */}
        <div className="mb-3">
          <label htmlFor="brandName" className="inline-block mb-2 text-base font-medium">
            Brand Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="brandName"
            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
            placeholder="Enter brand name"
            name="Name"
            onChange={validation.handleChange}
            value={validation.values.Name}
            disabled={isViewMode}
          />
          {validation.touched.Name && validation.errors.Name ? (
            <p className="text-red-400">{validation.errors.Name as string}</p>
          ) : null}
        </div>
        
        <div className="mb-3">
          <label htmlFor="brandTitle" className="inline-block mb-2 text-base font-medium">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="brandTitle"
            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
            placeholder="Enter brand title"
            name="Title"
            onChange={validation.handleChange}
            value={validation.values.Title}
            disabled={isViewMode}
          />
          {validation.touched.Title && validation.errors.Title ? (
            <p className="text-red-400">{validation.errors.Title as string}</p>
          ) : null}
        </div>
        
        <div className="mb-3">
          <label htmlFor="country" className="inline-block mb-2 text-base font-medium">
            Country <span className="text-red-500">*</span>
          </label>
          <Select
            className="basic-single"
            classNamePrefix="select"
            isDisabled={isViewMode}
            isLoading={isLoadingCountries}
            isClearable={true}
            isSearchable={true}
            name="CountryId"
            options={countryOptions}
            value={validation.values.CountryId}
            onChange={(selectedOption) => {
              validation.setFieldValue('CountryId', selectedOption);
            }}
            placeholder="Select country"
            styles={{
              control: (provided) => ({
                ...provided,
                borderColor: '#e2e8f0',
                '&:hover': {
                  borderColor: '#cbd5e1'
                }
              }),
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
          <label htmlFor="description" className="inline-block mb-2 text-base font-medium">
            Description <span className="text-red-500">*</span>
          </label>
          <div className="ck-editor-container">
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
                toolbar: isViewMode ? [] : ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
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

  return (
    <React.Fragment>
      <BreadCrumb title='Brands' pageTitle='Ecommerce' />
      <DeleteModal show={deleteModal} onHide={deleteToggle} onDelete={handleDelete} />
      <ToastContainer closeButton={false} limit={1} />
      <div className="card" id="brandListTable">
        <div className="card-body">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-12">
            <div className="xl:col-span-3">
              <div className="relative">
                <input type="text" className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for brand..." autoComplete="off" onChange={(e) => filterSearchData(e)} />
                <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
              </div>
            </div>
            <div className="lg:col-span-2 ltr:lg:text-right rtl:lg:text-left xl:col-span-2 xl:col-start-11">
              <button
                type="button"
                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                onClick={toggle}
              >
                <Plus className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" />
                <span className="align-middle">Add Brand</span>
              </button>
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
              columns={columns}
              data={data}
              customPageSize={pageSize}
              divclassName="overflow-x-auto"
              tableclassName="w-full whitespace-nowrap"
              theadclassName="ltr:text-left rtl:text-right bg-slate-100 dark:bg-zink-600"
              thclassName="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500"
              tdclassName="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"
              PaginationClassName="flex flex-col items-center gap-4 px-4 mt-4 md:flex-row"
              currentPage={currentPage}
              pageCount={pageCount}
              onPageChange={(page: number) => {
                setCurrentPage(page);
              }}
            />
          ) : (
            <div className="noresult">
              <div className="py-6 text-center">
                <Search className="size-6 mx-auto mb-3 text-sky-500 fill-sky-100 dark:fill-sky-500/20" />
                <h5 className="mt-2 mb-1">Sorry! No Result Found</h5>
                <p className="mb-0 text-slate-500 dark:text-zink-200">We've searched more than 199+ brands. We did not find any brands for you search.</p>
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
        dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600"
      >
        <Modal.Header
          className="flex items-center justify-between p-4 border-b dark:border-zink-500"
          closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500"
        >
          <Modal.Title className="text-16">
            {isViewMode ? "Brand Details" : isEdit ? "Edit Brand" : "Add Brand"}
          </Modal.Title>
        </Modal.Header>
        {renderModalContent()}
      </Modal>

      <style>{`
        .ck-editor-container .ck.ck-editor {
          width: 100%;
        }
        
        .ck-editor-container .ck-editor__editable {
          min-height: 100px;
          padding: 10px;
          border: 1px solid #e2e8f0 !important;
          border-radius: 0.375rem !important;
        }
        
        .ck-editor-container .ck.ck-toolbar {
          border: 1px solid #e2e8f0 !important;
          border-bottom: none !important;
          border-radius: 0.375rem 0.375rem 0 0 !important;
        }
        
        .dark .ck-editor-container .ck-editor__editable {
          background-color: #1e293b;
          color: #f8fafc;
          border-color: #334155 !important;
        }
        
        .dark .ck-editor-container .ck.ck-toolbar {
          background-color: #1e293b;
          border-color: #334155 !important;
        }
        
        .dark .ck-editor-container .ck.ck-button {
          color: #f8fafc;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Brand;