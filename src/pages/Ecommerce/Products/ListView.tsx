import React, { useCallback, useEffect, useMemo, useState } from "react";
import BreadCrumb from "Common/BreadCrumb";
import { Link } from "react-router-dom";
import { Dropdown } from "Common/Components/Dropdown";
import Modal from "Common/Components/Modal";
import { useFormik } from "formik";

// Icon
import { MoreHorizontal, Eye, FileEdit, Trash2, Search, Plus } from 'lucide-react';

import TableContainer from "Common/TableContainer";
import DeleteModal from "Common/DeleteModal";

// Formik
import * as Yup from "yup";

// react-redux
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import {
    getAllProducts,
    deleteProduct
} from 'slices/product/thunk';
import { ToastContainer } from "react-toastify";
import filterDataBySearch from "Common/filterDataBySearch";

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
        dispatch(getAllProducts({ page: currentPage, pageSize }));
    }, [dispatch, currentPage, refreshFlag, pageCount]);

    // Update local data when products change
    useEffect(() => {
        if (products && products.length > 0) {
            setData(products);
        } else if (currentPage > 1 && products.length === 0) {
            // If no data and not on first page, go back one page
            setCurrentPage(prev => prev - 1);
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
            dispatch(deleteProduct(eventData.id))
                .then(() => {
                    setDeleteModal(false);
                    setRefreshFlag(prev => !prev); // Trigger data refresh after deletion
                });
        }
    };

    // Search Data
    const filterSearchData = (e: any) => {
        const searchTerm = e.target.value.toLowerCase();
        const keysToSearch = ['name', 'description', 'price', 'marketPrice'];
        
        if (!searchTerm) {
            setData(products);
            return;
        }

        const filteredData = products.filter((item: any) => {
            return keysToSearch.some(key => {
                const value = item[key];
                
                // Handle different types of values
                if (typeof value === 'string') {
                    return value.toLowerCase().includes(searchTerm);
                } else if (typeof value === 'number') {
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
                return (<span className="status px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">{item}</span>);
            case "Scheduled":
                return (<span className="status px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-orange-100 border-transparent text-orange-500 dark:bg-orange-500/20 dark:border-transparent">{item}</span>);
            case "Inactive":
                return (<span className="status px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent">{item}</span>);
            default:
                return (<span className="status px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">{item}</span>);
        }
    };

    // Update Data
    const handleUpdateDataClick = (ele: any) => {
        setEventData({ ...ele });
        setIsEdit(true);
        setShow(true);
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

    const columns = useMemo(() => [
        {
            header: "Product Name",
            accessorKey: "name",
            enableColumnFilter: false,
            enableSorting: true,
            cell: (cell: any) => (
                <Link to="#" className="flex items-center gap-2" onClick={() => {
                    const data = cell.row.original;
                    handleOverviewClick(data);
                }}>
                    <img src={cell.row.original.thumbnail || "https://placehold.co/200x200/gray/white?text=No+Image"} alt="Product images" className="h-10 w-10 object-cover" />
                    <h6 className="product_name line-clamp-1 max-w-[200px]">{cell.getValue()}</h6>
                </Link>
            ),
        },
        {
            header: "Description",
            accessorKey: "description",
            enableColumnFilter: false,
            cell: (cell: any) => (
                <span className="description line-clamp-1 max-w-[250px]">{cell.getValue()}</span>
            ),
        },
        {
            header: "Price",
            accessorKey: "price",
            enableColumnFilter: false,
            enableSorting: true,
            cell: (cell: any) => (
                <span className="whitespace-nowrap">{cell.getValue().toLocaleString()} VND</span>
            ),
        },
        {
            header: "Market Price",
            accessorKey: "marketPrice",
            enableColumnFilter: false,
            enableSorting: true,
            cell: (cell: any) => (
                <span className="whitespace-nowrap">{cell.getValue().toLocaleString()} VND</span>
            ),
        },
        {
            header: "Action",
            accessorKey: "action",
            enableColumnFilter: false,
            cell: (cell: any) => (
                <Dropdown className="relative">
                    <Dropdown.Trigger id="orderAction1" data-bs-toggle="dropdown" className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-zink-700 dark:text-zink-200 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20">
                        <MoreHorizontal className="size-3" />
                    </Dropdown.Trigger>
                    <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md min-w-[10rem] dark:bg-zink-600" aria-labelledby="orderAction1">
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
    ], []);

    return (
        <React.Fragment>
            <BreadCrumb title='Products' pageTitle='Products' />
            <DeleteModal show={deleteModal} onHide={deleteToggle} onDelete={handleDelete} />
            <ToastContainer closeButton={false} limit={1} />
            <div className="card" id="productListTable">
                <div className="card-body">
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-12">
                        <div className="xl:col-span-3">
                            <div className="relative">
                                <input type="text" className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Search for product..." autoComplete="off" onChange={(e) => filterSearchData(e)} />
                                <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                            </div>
                        </div>
                        <div className="lg:col-span-2 ltr:lg:text-right rtl:lg:text-left xl:col-span-2 xl:col-start-11">
                            <Link to="/apps-ecommerce-product-create" type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><Plus className="inline-block size-4" /> <span className="align-middle">Add Product</span></Link>
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
                            columns={(columns || [])}
                            data={(data || [])}
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
                                <p className="mb-0 text-slate-500 dark:text-zink-200">We've searched more than 199+ product We did not find any product for you search.</p>
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
                        {isOverview ? "Product Details" : isEdit ? "Edit Product" : "Add Product"}
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                    {isOverview ? (
                        <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                            <div className="xl:col-span-12">
                                <div className="flex items-center mb-4">
                                    <img src={eventData?.thumbnail || "https://placehold.co/200x200/gray/white?text=No+Image"} alt="Product" className="h-16 w-16 object-cover mr-4" />
                                    <div>
                                        <h5 className="text-lg font-semibold">{eventData?.name}</h5>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-2">
                                        <p className="text-sm text-slate-500">Description</p>
                                        <p>{eventData?.description}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Price</p>
                                        <p>{eventData?.price?.toLocaleString()} VND</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">Market Price</p>
                                        <p>{eventData?.marketPrice?.toLocaleString()} VND</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>
                            {/* Form would go here - similar to the Promotion form */}
                            <p className="text-center text-slate-500">Product form would be implemented here</p>
                        </div>
                    )}
                </Modal.Body>

                <Modal.Footer className="flex items-center justify-end p-4 border-t dark:border-zink-500">
                    <button 
                        type="button" 
                        className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10" 
                        onClick={toggle}
                    >
                        {isOverview ? "Close" : "Cancel"}
                    </button>
                    {!isOverview && (
                        <button 
                            type="button" 
                            className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                        >
                            {!!isEdit ? "Update" : "Add Product"}
                        </button>
                    )}
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    );
};

export default ListView;