import React, { useEffect, useMemo, useState } from "react";
import BreadCrumb from "Common/BreadCrumb";
import Flatpickr from "react-flatpickr";
import { Link } from "react-router-dom";
import { Dropdown } from "Common/Components/Dropdown";

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

// react-redux
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { getPromotions } from "slices/promotion/thunk";
import { ToastContainer } from "react-toastify";
import filterDataBySearch from "Common/filterDataBySearch";

// Add this helper function at the top of your component or in a separate utils file
const formatDateTime = (dateTimeOffset: string) => {
  if (!dateTimeOffset) return "";
  const date = new Date(dateTimeOffset);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
};

const Promotion = () => {
  const dispatch = useDispatch<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const promotionSelector = createSelector(
    (state: any) => state.Promotion,
    (promotion) => ({
      promotions: promotion.promotions.results,
      pageCount: promotion.promotions.pageCount,
      loading: promotion.loading,
      error: promotion.error,
    })
  );

  const { promotions, pageCount, loading, error } = useSelector(promotionSelector);

  const [data, setData] = useState<any>([]);
  const [eventData, setEventData] = useState<any>();

  // Get Data
  useEffect(() => {
    dispatch(getPromotions({ page: currentPage, pageSize }));
  }, [dispatch, currentPage]);

  useEffect(() => {
    setData(promotions);
  }, [promotions]);

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

//   const handleDelete = () => {
//     if (eventData) {
//       dispatch(onDeleteProductList(eventData.id));
//       setDeleteModal(false);
//     }
//   };

  // Search Data
  const filterSearchData = (e: any) => {
    const search = e.target.value;
    const keysToSearch = ["productCode", "productName", "category", "status"];
    filterDataBySearch(promotions, search, keysToSearch, setData);
  };

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

  const columns = useMemo(
    () => [
      {
        header: "Promotion Name",
        accessorKey: "name",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
          <Link
            to="/apps-ecommerce-product-overview"
            className="flex items-center gap-2"
          >
            {cell.getValue()}
          </Link>
        ),
      },
      {
        header: "Type",
        accessorKey: "type",
        enableColumnFilter: false,
        cell: (cell: any) => (
            <Link
            to="/apps-ecommerce-product-overview"
            className="flex items-center gap-2"
          >
            {cell.getValue()}
          </Link>
        ),
      },
      {
        header: "Description",
        accessorKey: "description",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "Start Date",
        accessorKey: "startDate",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => formatDateTime(cell.getValue())
      },
      {
        header: "End Date",
        accessorKey: "endDate",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => formatDateTime(cell.getValue())
      },
      {
        header: "Action",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
          <Dropdown className="relative dropdown">
            <Dropdown.Trigger
              className="flex items-center justify-center size-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
              id="productAction1"
              data-bs-toggle="dropdown"
            >
              <MoreHorizontal className="size-3" />
            </Dropdown.Trigger>
            <Dropdown.Content
              placement={cell.row.index ? "top-end" : "right-end"}
              className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600"
              aria-labelledby="productAction1"
            >
              <li>
                <Link
                  className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                  to="/apps-ecommerce-product-overview"
                >
                  <Eye className="inline-block size-3 ltr:mr-1 rtl:ml-1" />{" "}
                  <span className="align-middle">Overview</span>
                </Link>
              </li>
              <li>
                <Link
                  className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                  to="/apps-ecommerce-product-create"
                >
                  <FileEdit className="inline-block size-3 ltr:mr-1 rtl:ml-1" />{" "}
                  <span className="align-middle">Edit</span>
                </Link>
              </li>
              <li>
                <Link
                  className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                  to="#!"
                  onClick={() => {
                    const data = cell.row.original;
                    onClickDelete(data);
                  }}
                >
                  <Trash2 className="inline-block size-3 ltr:mr-1 rtl:ml-1" />{" "}
                  <span className="align-middle">Delete</span>
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
      <BreadCrumb title="Promotion" pageTitle="Promotion" />
      {/* <DeleteModal
        show={deleteModal}
        onHide={deleteToggle}
        // onDelete={handleDelete}
      /> */}
      <ToastContainer closeButton={false} limit={1} />
      <div className="card" id="productListTable">
        <div className="card-body">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-12">
            <div className="xl:col-span-3">
              <div className="relative">
                <input
                  type="text"
                  className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Search for ..."
                  autoComplete="off"
                  onChange={(e) => filterSearchData(e)}
                />
                <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
              </div>
            </div>
            <div className="xl:col-span-4 flex gap-4">
              <div className="flex-1">
                <Flatpickr
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  options={{
                    dateFormat: "d M, Y",
                  }}
                  placeholder="Start date"
                />
              </div>
              <div className="flex-1">
                <Flatpickr
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  options={{
                    dateFormat: "d M, Y",
                  }}
                  placeholder="End date"
                />
              </div>
            </div>
            <div className="lg:col-span-2 ltr:lg:text-right rtl:lg:text-left xl:col-span-2 xl:col-start-11">
              <Link
                to="/apps-ecommerce-product-create"
                type="button"
                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
              >
                <Plus className="inline-block size-4" />{" "}
                <span className="align-middle">Add Promotion</span>
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
              customPageSize={7}
              divclassName="overflow-x-auto"
              tableclassName="w-full whitespace-nowrap"
              theadclassName="ltr:text-left rtl:text-right bg-slate-100 dark:bg-zink-600"
              thclassName="px-3.5 py-2.5 font-semibold border-b border-slate-200 dark:border-zink-500"
              tdclassName="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500"
              PaginationClassName="flex flex-col items-center gap-4 px-4 mt-4 md:flex-row"
            />
          ) : (
            <div className="noresult">
              <div className="py-6 text-center">
                <Search className="size-6 mx-auto mb-3 text-sky-500 fill-sky-100 dark:fill-sky-500/20" />
                <h5 className="mt-2 mb-1">Sorry! No Result Found</h5>
                <p className="mb-0 text-slate-500 dark:text-zink-200">
                  We've searched more than 199+ product We did not find any
                  product for you search.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Promotion;
