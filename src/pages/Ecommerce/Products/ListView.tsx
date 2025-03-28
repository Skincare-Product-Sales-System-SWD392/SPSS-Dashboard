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
  Download,
  Upload,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import TableContainer from "Common/TableContainer";
import DeleteModal from "Common/DeleteModal";

// Formik
import * as Yup from "yup";

// react-redux
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

import { getAllProducts, deleteProduct } from "slices/product/thunk";
import { ToastContainer } from "react-toastify";
import filterDataBySearch from "Common/filterDataBySearch";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import Pagination from "Common/Pagination";

const ListView = () => {
  const dispatch = useDispatch<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;
  const [show, setShow] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [isOverview, setIsOverview] = useState<boolean>(false);

  // Updated selector with better error handling
  const productSelector = createSelector(
    (state: any) => state.product,
    (product) => ({
      products: product?.products?.data?.items || [],
      pageCount: product?.products?.data?.totalPages || 0,
      totalCount: product?.products?.data?.totalCount || 0,
      pageNumber: product?.products?.data?.pageNumber || 1,
      loading: product?.loading || false,
      error: product?.error || null,
    })
  );

  const { products, pageCount, loading } = useSelector(productSelector);

  const [data, setData] = useState<any>([]);
  const [eventData, setEventData] = useState<any>();

  // Get Data with pagination
  useEffect(() => {
    // Don't fetch if current page is greater than page count and pageCount exists
    if (pageCount && currentPage > pageCount) {
      setCurrentPage(1); // Reset to first page
      return;
    }
    dispatch(getAllProducts({ pageNumber: currentPage, pageSize }));
  }, [dispatch, currentPage, refreshFlag, pageCount]);

  // Update local data when products change
  useEffect(() => {
    if (products && products.length > 0) {
      setData(products);
    } else if (currentPage > 1 && products.length === 0) {
      // If no data and not on first page, go back one page
      setCurrentPage((prev) => prev - 1);
    }
  }, [products, currentPage]);

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

  // Handle Delete
  const handleDelete = () => {
    if (eventData) {
      dispatch(deleteProduct(eventData.id)).then(() => {
        setDeleteModal(false);
        setRefreshFlag((prev) => !prev); // Trigger data refresh after deletion
      });
    }
  };

  // Search Data
  const filterSearchData = (e: any) => {
    const searchTerm = e.target.value.toLowerCase();
    const keysToSearch = ["name", "description", "price", "marketPrice"];

    if (!searchTerm) {
      setData(products);
      return;
    }

    const filteredData = products.filter((item: any) => {
      return keysToSearch.some((key) => {
        const value = item[key];

        // Handle different types of values
        if (typeof value === "string") {
          return value.toLowerCase().includes(searchTerm);
        } else if (typeof value === "number") {
          // Convert number to string for searching
          return value.toString().toLowerCase().includes(searchTerm);
        }
        return false;
      });
    });

    setData(filteredData);
  };

  // Status component for rendering status badges
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

  // Update Data
  const handleUpdateDataClick = (ele: any) => {
    // Navigate to the edit product page with the product ID as a query parameter
    window.location.href = `/apps-ecommerce-product-edit?id=${ele.id}`;
  };

  // Update handleOverviewClick to pass the ID in the URL
  const handleOverviewClick = (data: any) => {
    // Navigate to the overview page with the product ID as a query parameter
    window.location.href = `/apps-ecommerce-product-overview?id=${data.id}`;
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
    }
  }, [show]);

  // Add state for import modal
  const [importModal, setImportModal] = useState<boolean>(false);
  const importToggle = () => setImportModal(!importModal);

  // Add state for file upload
  const [importFile, setImportFile] = useState<File | null>(null);
  const [importError, setImportError] = useState<string | null>(null);

  // Function to download Excel template
  const downloadExcelTemplate = () => {
    // Define the template structure with sample data
    const templateData = [
      {
        name: "Sample Product",
        description: "This is a sample product description",
        price: 100000,
        marketPrice: 120000,
        sku: "PROD-001",
        brand: "3fa85f64-5717-4562-b3fc-2c963f66afa6", // Brand ID
        category: "3fa85f64-5717-4562-b3fc-2c963f66afa6", // Category ID
        productType: "Single",
        gender: "Unisex",
        skinTypes:
          "3fa85f64-5717-4562-b3fc-2c963f66afa6,4fa85f64-5717-4562-b3fc-2c963f66afa7", // Comma-separated IDs
        specifications: JSON.stringify({
          weight: "100g",
          dimensions: "10x5x2 cm",
          color: "White",
        }),
        thumbnailUrl: "https://example.com/image.jpg", // Optional
        imageUrls:
          "https://example.com/image1.jpg,https://example.com/image2.jpg", // Comma-separated URLs
      },
    ];

    // Create worksheet
    const ws = XLSX.utils.json_to_sheet(templateData);

    // Add column descriptions as comments
    const comments = {
      A1: { t: "s", v: "Product name (required)" },
      B1: { t: "s", v: "Product description (required)" },
      C1: { t: "s", v: "Price in VND (required)" },
      D1: { t: "s", v: "Market price in VND (optional)" },
      E1: { t: "s", v: "SKU (required)" },
      F1: { t: "s", v: "Brand ID (required)" },
      G1: { t: "s", v: "Category ID (required)" },
      H1: { t: "s", v: "Product type: Single, Unit, or Boxed (required)" },
      I1: { t: "s", v: "Gender: Male, Female, or Unisex (optional)" },
      J1: { t: "s", v: "Skin type IDs, comma-separated (optional)" },
      K1: { t: "s", v: "Specifications as JSON (optional)" },
      L1: { t: "s", v: "Thumbnail URL (optional)" },
      M1: { t: "s", v: "Image URLs, comma-separated (optional)" },
    };

    // Add comments to worksheet
    ws.A1.c = [comments.A1];
    ws.B1.c = [comments.B1];
    ws.C1.c = [comments.C1];
    ws.D1.c = [comments.D1];
    ws.E1.c = [comments.E1];
    ws.F1.c = [comments.F1];
    ws.G1.c = [comments.G1];
    ws.H1.c = [comments.H1];
    ws.I1.c = [comments.I1];
    ws.J1.c = [comments.J1];
    ws.K1.c = [comments.K1];
    ws.L1.c = [comments.L1];
    ws.M1.c = [comments.M1];

    // Create workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Products");

    // Generate Excel file
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Save file
    saveAs(blob, "product_import_template.xlsx");
  };

  // Function to handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImportError(null);
    const file = e.target.files?.[0];

    if (file) {
      // Check file type
      if (!file.name.endsWith(".xlsx") && !file.name.endsWith(".xls")) {
        setImportError("Please upload an Excel file (.xlsx or .xls)");
        return;
      }

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setImportError("File size exceeds 5MB limit");
        return;
      }

      setImportFile(file);
    }
  };

  // Function to handle file import
  const handleImportProducts = async () => {
    if (!importFile) {
      setImportError("Please select a file to import");
      return;
    }

    try {
      // Read the Excel file
      const reader = new FileReader();
      reader.onload = async (e) => {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: "array" });

        // Get the first worksheet
        const worksheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[worksheetName];

        // Convert to JSON
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        // Validate data (basic validation)
        if (jsonData.length === 0) {
          setImportError("No data found in the Excel file");
          return;
        }

        // Process and send data to API
        // This would be replaced with your actual API call
        console.log("Importing products:", jsonData);

        // Mock success - in real implementation, you'd call your API
        // dispatch(importProducts(jsonData))
        //   .then(() => {
        //     setImportModal(false);
        //     setImportFile(null);
        //     setRefreshFlag(prev => !prev); // Refresh the product list
        //   })
        //   .catch(error => {
        //     setImportError(error.message || "Failed to import products");
        //   });

        // For demo purposes:
        setTimeout(() => {
          setImportModal(false);
          setImportFile(null);
          // Show success toast
          // toast.success("Products imported successfully!");
          setRefreshFlag((prev) => !prev); // Refresh the product list
        }, 1000);
      };

      reader.readAsArrayBuffer(importFile);
    } catch (error) {
      console.error("Import error:", error);
      setImportError("Failed to process the Excel file");
    }
  };

  const columns = useMemo(
    () => [
      {
        header: "Tên Sản Phẩm",
        accessorKey: "name",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
          <Link
            to="#"
            className="flex items-center gap-2"
            onClick={() => {
              const data = cell.row.original;
              handleOverviewClick(data);
            }}
          >
            <img
              src={
                cell.row.original.thumbnail ||
                "https://placehold.co/200x200/gray/white?text=No+Image"
              }
              alt="Product images"
              className="h-10 w-10 object-cover"
            />
            <h6 className="product_name line-clamp-1 max-w-[200px]">
              {cell.getValue()}
            </h6>
          </Link>
        ),
      },
      {
        header: "Mô Tả",
        accessorKey: "description",
        enableColumnFilter: false,
        cell: (cell: any) => (
          <span 
            className="description line-clamp-1 max-w-[250px]"
            dangerouslySetInnerHTML={{ 
              __html: cell.getValue() ? 
                // Strip out potentially dangerous tags and limit to plain text
                cell.getValue().replace(/<(?!br\s*\/?)[^>]+>/g, '') : 
                ''
            }}
          />
        ),
      },
      {
        header: "Giá",
        accessorKey: "price",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
          <span className="whitespace-nowrap">
            {cell.getValue().toLocaleString()} VND
          </span>
        ),
      },
      {
        header: "Giá Thị Trường",
        accessorKey: "marketPrice",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
          <span className="whitespace-nowrap">
            {cell.getValue().toLocaleString()} VND
          </span>
        ),
      },
      {
        header: "Thao Tác",
        accessorKey: "action",
        enableColumnFilter: false,
        cell: (cell: any) => (
          <Dropdown className="relative">
            <Dropdown.Trigger
              id="orderAction1"
              data-bs-toggle="dropdown"
              className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-zink-700 dark:text-zink-200 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
            >
              <MoreHorizontal className="size-3" />
            </Dropdown.Trigger>
            <Dropdown.Content
              placement="right-end"
              className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md min-w-[10rem] dark:bg-zink-600"
              aria-labelledby="orderAction1"
            >
              <li>
                <Link
                  to="#!"
                  className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                  onClick={() => {
                    const data = cell.row.original;
                    handleOverviewClick(data);
                  }}
                >
                  <Eye className="inline-block size-3 ltr:mr-1 rtl:ml-1" />{" "}
                  <span className="align-middle">Xem chi tiết</span>
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
                  <FileEdit className="inline-block size-3 ltr:mr-1 rtl:ml-1" />{" "}
                  <span className="align-middle">Chỉnh sửa</span>
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
      <BreadCrumb title="Sản phẩm" pageTitle="Sản phẩm" />
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
                  placeholder="Tìm kiếm sản phẩm"
                  autoComplete="off"
                  onChange={filterSearchData}
                />
                <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
              </div>
            </div>
            <div className="xl:col-span-9">
              <div className="flex flex-wrap items-center gap-2 justify-end">
                {/* Download Template Button */}
                <button
                  type="button"
                  className="text-white btn bg-green-500 border-green-500 hover:text-white hover:bg-green-600 hover:border-green-600 focus:text-white focus:bg-green-600 focus:border-green-600 focus:ring focus:ring-green-100 active:text-white active:bg-green-600 active:border-green-600 active:ring active:ring-green-100 dark:ring-green-400/20"
                  onClick={downloadExcelTemplate}
                >
                  <Download className="inline-block size-4 ltr:mr-1 rtl:ml-1" />
                  <span className="align-middle">Tải Template</span>
                </button>

                {/* Import Products Button */}
                <button
                  type="button"
                  className="text-white btn bg-purple-500 border-purple-500 hover:text-white hover:bg-purple-600 hover:border-purple-600 focus:text-white focus:bg-purple-600 focus:border-purple-600 focus:ring focus:ring-purple-100 active:text-white active:bg-purple-600 active:border-purple-600 active:ring active:ring-purple-100 dark:ring-purple-400/20"
                  onClick={importToggle}
                >
                  <Upload className="inline-block size-4 ltr:mr-1 rtl:ml-1" />
                  <span className="align-middle">Nhập Sản Phẩm</span>
                </button>

                {/* Add Product Button */}
                <Link
                  to="/apps-ecommerce-product-create"
                  className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                >
                  <Plus className="inline-block size-4 ltr:mr-1 rtl:ml-1" />
                  <span className="align-middle">Thêm Sản Phẩm</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="!pt-1 card-body">
          {loading ? (
            <div className="flex items-center justify-center py-10">
              <div className="spinner-border text-custom-500" role="status">
                <span className="sr-only">Đang tải...</span>
              </div>
            </div>
          ) : data && data.length > 0 ? (
            <>
              <div className="overflow-x-auto">
                <table className="w-full whitespace-nowrap">
                  <thead className="ltr:text-left rtl:text-right bg-white dark:bg-zink-700">
                    <tr>
                      {columns.map((column: any, index: number) => (
                        <th
                          key={index}
                          className="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500"
                        >
                          {column.header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item: any, index: number) => (
                      <tr key={index}>
                        {columns.map((column: any, cellIndex: number) => (
                          <td
                            key={cellIndex}
                            className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"
                          >
                            {column.cell
                              ? column.cell({
                                  row: { original: item },
                                  getValue: () => item[column.accessorKey],
                                })
                              : item[column.accessorKey]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8">
                <div className="flex flex-col items-center mb-5 md:flex-row">
                  <div className="mb-4 grow md:mb-0"></div>
                  <ul className="flex flex-wrap items-center gap-2 shrink-0">
                    <li className={currentPage <= 1 ? "disabled" : ""}>
                      <button
                        className="inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 disabled:text-slate-400 dark:disabled:text-zink-300 disabled:cursor-auto disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-200 dark:disabled:border-zink-500"
                        onClick={() =>
                          setCurrentPage((prev) => Math.max(prev - 1, 1))
                        }
                        disabled={currentPage <= 1}
                      >
                        <ChevronLeft className="size-4 mr-1 rtl:rotate-180" />{" "}
                        Prev
                      </button>
                    </li>

                    {/* Page numbers */}
                    {Array.from(
                      { length: pageCount || 1 },
                      (_, i) => i + 1
                    ).map((page) => (
                      <li key={page}>
                        <button
                          className={`inline-flex items-center justify-center h-8 w-8 transition-all duration-150 ease-linear border rounded font-medium ${
                            currentPage === page
                              ? "text-white bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 dark:text-white dark:bg-custom-500 dark:border-custom-500 dark:hover:bg-custom-600 dark:hover:border-custom-600"
                              : "bg-white dark:bg-zink-700 border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500"
                          }`}
                          onClick={() => setCurrentPage(page)}
                        >
                          {page}
                        </button>
                      </li>
                    ))}

                    <li className={currentPage >= pageCount ? "disabled" : ""}>
                      <button
                        className="inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 disabled:text-slate-400 dark:disabled:text-zink-300 disabled:cursor-auto disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-200 dark:disabled:border-zink-500"
                        onClick={() =>
                          setCurrentPage((prev) =>
                            Math.min(prev + 1, pageCount || 1)
                          )
                        }
                        disabled={currentPage >= pageCount}
                      >
                        Next{" "}
                        <ChevronRight className="size-4 ml-1 rtl:rotate-180" />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <div className="noresult">
              <div className="py-6 text-center">
                <Search className="size-6 mx-auto mb-3 text-sky-500 fill-sky-100 dark:fill-sky-500/20" />
                <h5 className="mt-2 mb-1">Không tìm thấy kết quả</h5>
                <p className="mb-0 text-slate-500 dark:text-zink-200">
                  Chúng tôi đã tìm kiếm hơn 199+ sản phẩm, nhưng không tìm thấy kết quả phù hợp với tìm kiếm của bạn.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Modal - For Overview/Edit */}
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
              ? "Chi Tiết Sản Phẩm"
              : isEdit
              ? "Chỉnh Sửa Sản Phẩm"
              : "Thêm Sản Phẩm"}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
          {isOverview ? (
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
              <div className="xl:col-span-12">
                <div className="flex items-center mb-4">
                  <img
                    src={
                      eventData?.thumbnail ||
                      "https://placehold.co/200x200/gray/white?text=No+Image"
                    }
                    alt="Product"
                    className="h-16 w-16 object-cover mr-4"
                  />
                  <div>
                    <h5 className="text-lg font-semibold">{eventData?.name}</h5>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <p className="text-sm text-slate-500">Mô Tả</p>
                    <div 
                      dangerouslySetInnerHTML={{ 
                        __html: eventData?.description || '' 
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Giá</p>
                    <p>{eventData?.price?.toLocaleString()} VND</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Giá Thị Trường</p>
                    <p>{eventData?.marketPrice?.toLocaleString()} VND</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {/* Form would go here - similar to the Promotion form */}
              <p className="text-center text-slate-500">
                Form sản phẩm sẽ được thực hiện ở đây
              </p>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer className="flex items-center justify-end p-4 border-t dark:border-zink-500">
          <button
            type="button"
            className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10"
            onClick={toggle}
          >
            {isOverview ? "Đóng" : "Hủy"}
          </button>
          {!isOverview && (
            <button
              type="button"
              className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
            >
              {!!isEdit ? "Cập Nhật" : "Thêm Sản Phẩm"}
            </button>
          )}
        </Modal.Footer>
      </Modal>

      {/* Import Products Modal */}
      <Modal
        show={importModal}
        onHide={importToggle}
        modal-center="true"
        className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
        dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600"
      >
        <Modal.Header
          className="flex items-center justify-between p-4 border-b dark:border-zink-500"
          closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500"
        >
          <Modal.Title className="text-16">Nhập Sản Phẩm</Modal.Title>
        </Modal.Header>

        <Modal.Body className="p-4">
          <div className="text-center mb-4">
            <Upload className="size-12 mx-auto text-purple-500" />
            <h5 className="mt-2 mb-1">Tải Lên File Excel</h5>
            <p className="text-slate-500 dark:text-zink-200">
              Tải lên tệp Excel với dữ liệu sản phẩm của bạn
            </p>
          </div>

          <div className="mt-4">
            <label className="inline-block mb-2 text-base font-medium">
              Chọn File
            </label>
            <input
              type="file"
              className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
              accept=".xlsx,.xls"
              onChange={handleFileChange}
            />
            <p className="mt-1 text-xs text-slate-500">
              Định dạng chấp nhận: .xlsx, .xls (Max 5MB)
            </p>

            {importFile && (
              <div className="mt-2 p-2 bg-slate-100 dark:bg-zink-600 rounded">
                <p className="text-sm font-medium">{importFile.name}</p>
                <p className="text-xs text-slate-500">
                  {(importFile.size / 1024).toFixed(2)} KB
                </p>
              </div>
            )}

            {importError && (
              <div className="mt-2 p-2 bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400 rounded">
                <p className="text-sm">{importError}</p>
              </div>
            )}
          </div>

          <div className="mt-4">
            <p className="text-sm text-slate-500 dark:text-zink-200">
              <span className="font-medium">Lưu ý:</span> Đảm bảo tệp Excel của bạn tuân theo định dạng mẫu.
              <button
                type="button"
                className="text-custom-500 underline ml-1"
                onClick={downloadExcelTemplate}
              >
                Tải Template
              </button>
            </p>
          </div>
        </Modal.Body>

        <Modal.Footer className="flex items-center justify-end p-4 border-t dark:border-zink-500">
          <button
            type="button"
            className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10"
            onClick={importToggle}
          >
            Hủy
          </button>
          <button
            type="button"
            className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
            onClick={handleImportProducts}
            disabled={!importFile}
          >
            Nhập Sản Phẩm
          </button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default ListView;
