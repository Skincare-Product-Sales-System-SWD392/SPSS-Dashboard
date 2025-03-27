import React, { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Editor } from "@tinymce/tinymce-react";
import { getFirebaseBackend } from "../../helpers/firebase_helper";
import axios from "axios";

// Import your action creators
import { getAllBrands, addBrand, updateBrand, deleteBrand } from "../../slices/brand/thunk";

// Import UI components
import BreadCrumb from "Common/BreadCrumb";
import TableContainer from "Common/TableContainer";
import DeleteModal from "Common/DeleteModal";
import Modal from "Common/Components/Modal";
// Import icons
import { Plus, Search, Eye, FileEdit, Trash2, MoreHorizontal } from "lucide-react";
import { Dropdown } from "Common/Components/Dropdown";

const TINYMCE_API_KEY = process.env.REACT_APP_TINYMCE_API_KEY || "8wmapg650a8xkqj2cwz4qgka67mscn8xm3uaijvcyoh70b1g";

const Brand = () => {
  const dispatch = useDispatch<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const [show, setShow] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [isOverview, setIsOverview] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editorRef = useRef<any>(null);
  const [countries, setCountries] = useState<any[]>([]);

  const brandState = useSelector((state: any) => state.Brand);
  useEffect(() => {
  }, [brandState]);

  const brandSelector = createSelector(
    (state: any) => state.Brand,
    (Brand) => {
      return {
        brands: Brand?.brands?.data?.items || [],
        totalPages: Brand?.brands?.data?.totalPages || 1,
        currentPage: Brand?.brands?.data?.pageNumber || 1,
        pageSize: Brand?.brands?.data?.pageSize || 5,
        totalCount: Brand?.brands?.data?.totalCount || 0,
        loading: Brand?.loading || false,
        error: Brand?.error || null,
      };
    }
  );

  const { brands, totalPages, loading, error } = useSelector(brandSelector);
  const [data, setData] = useState<any>([]);
  const [eventData, setEventData] = useState<any>();

  // Fetch countries from API - clean implementation
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("http://localhost:5041/api/countries");
        console.log("Countries API response:", response.data);
        
        // Check if response.data is an array directly
        if (Array.isArray(response.data)) {
          setCountries(response.data);
          console.log("Countries set to state:", response.data);
        } 
        // Check if it's in the expected format with success and data properties
        else if (response.data && response.data.success && Array.isArray(response.data.data)) {
          setCountries(response.data.data);
          console.log("Countries set to state:", response.data.data);
        } 
        else {
          console.warn("Invalid API response format");
          setCountries([]);
        }
      } catch (error) {
        console.error("Error fetching countries:", error);
        setCountries([]);
      }
    };

    fetchCountries();
  }, []);

  // Debug log to check if countries are loaded
  useEffect(() => {
    console.log("Countries state:", countries);
  }, [countries]);

  // Fix pagination issue
  useEffect(() => {
    dispatch(getAllBrands({ page: currentPage, pageSize }));
  }, [dispatch, currentPage, pageSize, refreshFlag]);

  // Separate effect to handle empty pages
  useEffect(() => {
    if (brands && Array.isArray(brands)) {
      if (brands.length === 0 && currentPage > 1 && !loading) {
        setCurrentPage((prev) => prev - 1);
      } else {
        setData(brands);
      }
    }
  }, [brands, currentPage, loading]);

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
    const keysToSearch = [
      "name",
      "description",
      "status",
    ];
    const filteredData = brands.filter((item: any) => {
      return keysToSearch.some((key) => {
        const value = item[key]?.toString().toLowerCase() || "";
        return value.includes(search.toLowerCase());
      });
    });
    setData(filteredData);
  };

  // Delete handler
  const handleDelete = () => {
    if (eventData && eventData.id) {
      dispatch(deleteBrand(eventData.id))
        .then(() => {
          setDeleteModal(false);
          setRefreshFlag((prev) => !prev);
          toast.success("Xóa thương hiệu thành công!");
        })
        .catch((error: any) => {
          const errorMessage = error.message || "Xóa thương hiệu thất bại";
          toast.error(errorMessage);
        });
    }
  };

  // Image upload handler
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        // Get Firebase backend
        const firebaseBackend = getFirebaseBackend();
        
        // Check if the method exists and use a fallback if not
        let imageUrl;
        if (firebaseBackend && typeof firebaseBackend.uploadBrandImage === 'function') {
          imageUrl = await firebaseBackend.uploadBrandImage(file);
        } else if (firebaseBackend && typeof firebaseBackend.uploadFileWithDirectory === 'function') {
          // Fallback to the generic upload method
          imageUrl = await firebaseBackend.uploadFileWithDirectory(file, "SPSS/Brand-Image");
        } else {
          throw new Error("Firebase upload methods not available");
        }
        
        // Set the image URL from Firebase to form
        setImagePreview(imageUrl);
        validation.setFieldValue('imageUrl', imageUrl);
        
        // Success message
        toast.success("Tải ảnh lên thành công!");
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Tải ảnh lên thất bại. Vui lòng thử lại!");
      }
    }
  };

  // Form validation schema using Yup
  const validation: any = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: (eventData && eventData.name) || "",
      title: (eventData && eventData.title) || "",
      description: (eventData && eventData.description) || "",
      imageUrl: (eventData && eventData.imageUrl) || "",
      countryId: (eventData && eventData.countryId) || 0,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Tên thương hiệu không được để trống")
        .matches(
          /^[a-zA-Z0-9\s\u00C0-\u1EF9]+$/,
          "Tên thương hiệu không được chứa ký tự đặc biệt"
        ),
      title: Yup.string()
        .required("Tiêu đề thương hiệu không được để trống"),
      description: Yup.string(),
      imageUrl: Yup.string()
        .required("Hình ảnh thương hiệu không được để trống"),
      countryId: Yup.number(),
    }),
    onSubmit: async (values) => {
      if (isEdit) {
        if (!eventData.id) {
          console.error("Thiếu ID thương hiệu khi chỉnh sửa");
          return;
        }

        const updateData = {
          id: eventData.id,
          data: {
            name: values.name,
            title: values.title,
            description: values.description,
            imageUrl: values.imageUrl,
            countryId: values.countryId || 0,
          },
        };
        
        try {
          const result = await dispatch(updateBrand(updateData)).unwrap();
          if (result.error) {
            toast.error(result.error.message || "Cập nhật thương hiệu thất bại");
            return;
          }
          toggle();
          setRefreshFlag(prev => !prev);
          toast.success("Cập nhật thương hiệu thành công!");
        } catch (error: any) {
          const errorMessage = error.response?.data?.message || "Cập nhật thương hiệu thất bại";
          toast.error(errorMessage);
        }
      } else {
        const newData = {
          name: values.name,
          title: values.title,
          description: values.description,
          imageUrl: values.imageUrl,
          countryId: values.countryId || 0,
        };
        
        try {
          const result = await dispatch(addBrand(newData)).unwrap();
          if (result.error) {
            toast.error(result.error.message || "Thêm thương hiệu thất bại");
            return;
          }
          toggle();
          setRefreshFlag(prev => !prev);
          toast.success("Thêm thương hiệu thành công!");
        } catch (error: any) {
          const errorMessage = error.response?.data?.message || "Thêm thương hiệu thất bại";
          toast.error(errorMessage);
        }
      }
    },
  });

  // Update Data
  const handleUpdateDataClick = (ele: any) => {
    setEventData({ ...ele });
    setIsEdit(true);
    setShow(true);
    setImagePreview(ele.image);
  };

  // Add handler for overview click
  const handleOverviewClick = (ele: any) => {
    setEventData({ ...ele });
    setIsOverview(true);
    setShow(true);
    setImagePreview(ele.image);
  };

  // Modify toggle to reset overview mode
  const toggle = useCallback(() => {
    if (show) {
      setShow(false);
      setEventData("");
      setIsEdit(false);
      setIsOverview(false);
      setImagePreview(null);
    } else {
      setShow(true);
      setEventData("");
      validation.resetForm();
      setImagePreview(null);
    }
  }, [show, validation]);

  const columns = useMemo(
    () => [
      {
        header: "Thương Hiệu",
        accessorKey: "name",
        enableColumnFilter: false,
        enableSorting: true,
        size: 200,
        cell: (cell: any) => (
          <div className="flex items-center gap-2">
            <div className="size-10 rounded-full overflow-hidden">
              <img 
                src={cell.row.original.imageUrl || "/path/to/default-image.jpg"} 
                alt={cell.getValue()} 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-medium">{cell.getValue()}</span>
          </div>
        ),
      },
      {
        header: "Tiêu Đề",
        accessorKey: "title",
        enableColumnFilter: false,
        enableSorting: true,
        size: 200,
      },
      {
        header: "Mô Tả",
        accessorKey: "description",
        enableColumnFilter: false,
        enableSorting: true,
        size: 300,
        cell: (cell: any) => {
          const description = cell.getValue();
          if (!description) return <span>-</span>;
          
          // Create a temporary div to decode HTML entities
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = description;
          
          // Get the decoded text content
          const decodedText = tempDiv.textContent || tempDiv.innerText || '';
          
          // Truncate the text
          const truncated = decodedText.length > 100 ? decodedText.substring(0, 100) + '...' : decodedText;
          
          return <span>{truncated}</span>;
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
              className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:border-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
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

  // Debugging the countries state
  console.log("Rendering with countries:", countries);

  return (
    <React.Fragment>
      <BreadCrumb title="Thương Hiệu" pageTitle="Thương Hiệu" />
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
                  placeholder="Tìm kiếm thương hiệu..."
                  autoComplete="off"
                  onChange={(e) => filterSearchData(e)}
                />
                <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
              </div>
            </div>
            <div className="lg:col-span-2 ltr:lg:text-right rtl:lg:text-left xl:col-span-3 xl:col-start-10">
              <Link
                to="#!"
                data-modal-target="addBrandModal"
                type="button"
                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 whitespace-nowrap"
                onClick={toggle}
              >
                <Plus className="inline-block size-4" />{" "}
                <span className="align-middle">Thêm Thương Hiệu</span>
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
                  Chúng tôi đã tìm kiếm hơn 199+ thương hiệu. Chúng tôi không tìm thấy
                  thương hiệu nào cho tìm kiếm của bạn.
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
        dialogClassName="w-screen md:w-[30rem] lg:w-[50rem] bg-white shadow rounded-md dark:bg-zink-600"
      >
        <Modal.Header
          className="flex items-center justify-between p-4 border-b dark:border-zink-500"
          closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500"
        >
          <Modal.Title className="text-16">
            {isOverview
              ? "Chi Tiết Thương Hiệu"
              : isEdit
              ? "Chỉnh Sửa Thương Hiệu"
              : "Thêm Thương Hiệu"}
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
              <div className="xl:col-span-12">
                <div className="mb-3 text-center">
                  <div className="relative mx-auto mb-4 size-24 rounded-full overflow-hidden border-2 border-slate-200 dark:border-zink-500">
                    {imagePreview ? (
                      <img 
                        src={imagePreview} 
                        alt="Brand Logo" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full bg-slate-100 dark:bg-zink-600 text-slate-500 dark:text-zink-200">
                        <span className="text-2xl">Logo</span>
                      </div>
                    )}
                  </div>
                  {!isOverview && (
                    <div>
                      <input
                        type="file"
                        id="brandImage"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageUpload}
                        ref={fileInputRef}
                      />
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="py-1 px-3 text-xs font-medium text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100"
                      >
                        {imagePreview ? "Thay Đổi Ảnh" : "Tải Lên Ảnh"}
                      </button>
                      {validation.touched.imageUrl && validation.errors.imageUrl && (
                        <p className="mt-1 text-red-400">{validation.errors.imageUrl}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="xl:col-span-12">
                <label
                  htmlFor="nameInput"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Tên Thương Hiệu <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="nameInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Nhập tên thương hiệu"
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

              <div className="xl:col-span-12">
                <label
                  htmlFor="titleInput"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Tiêu Đề Thương Hiệu <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  id="titleInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Nhập tiêu đề thương hiệu"
                  name="title"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.title || ""}
                  disabled={isOverview}
                />
                {validation.touched.title && validation.errors.title && (
                  <p className="text-red-400">{validation.errors.title}</p>
                )}
              </div>

              <div className="xl:col-span-12">
                <label
                  htmlFor="countryInput"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Quốc Gia
                </label>
                <select
                  id="countryInput"
                  className="form-input w-full border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  name="countryId"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.countryId || "0"}
                  disabled={isOverview}
                >
                  <option value="0">-- Chọn Quốc Gia --</option>
                  {countries && countries.length > 0 ? (
                    countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.countryName}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>Đang tải quốc gia...</option>
                  )}
                </select>
                {validation.touched.countryId && validation.errors.countryId && (
                  <p className="text-red-400">{validation.errors.countryId}</p>
                )}
              </div>

              <div className="xl:col-span-12">
                <label
                  htmlFor="descriptionInput"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Mô Tả
                </label>
                {isOverview ? (
                  <div 
                    className="p-3 border rounded-md border-slate-200 dark:border-zink-500 bg-slate-50 dark:bg-zink-600"
                    dangerouslySetInnerHTML={{ __html: validation.values.description || "" }}
                  />
                ) : (
                  <Editor
                    id="descriptionEditor"
                    apiKey={TINYMCE_API_KEY}
                    value={validation.values.description || ""}
                    init={{
                      height: 300,
                      width: '100%',
                      menubar: true,
                      plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'help', 'wordcount'
                      ],
                      toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat',
                      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                      setup: (editor: any) => {
                        editor.on('change', function() {
                          validation.setFieldValue('description', editor.getContent());
                        });
                      }
                    }}
                    onEditorChange={(content : any) => {
                      validation.setFieldValue('description', content);
                    }}
                  />
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
                  {!!isEdit ? "Cập Nhật" : "Thêm Thương Hiệu"}
                </button>
              )}
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default Brand; 