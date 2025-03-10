import React from "react";
import TableContainer from "Common/TableContainer";
import { basic } from "Common/data";
import { column } from "./index";

const Basic = () => {

    const columns: column[] = React.useMemo(
        () => [
            {
                header: 'Name',
                accessorKey: 'name',
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: 'Position',
                accessorKey: 'position',
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: 'Office',
                accessorKey: 'office',
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: 'Age',
                accessorKey: 'age',
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: 'Start date',
                accessorKey: 'startDate',
                enableColumnFilter: false,
                enableSorting: true,
            },
            {
                header: 'Salary',
                accessorKey: 'salary',
                enableColumnFilter: false,
                enableSorting: true,
            },
        ],
        []
    );

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Basic</h6>
                    <TableContainer
                        isPagination={true}
                        isTfoot={true}
                        isSelect={true}
                        isGlobalFilter={true}
                        columns={(columns || [])}
                        data={(basic || [])}
                        customPageSize={10}
                        divclassName="my-2 col-span-12 overflow-x-auto lg:col-span-12"
                        tableclassName="display stripe group dataTable w-full text-sm align-middle whitespace-nowrap"
                        theadclassName="border-b border-slate-200 dark:border-zink-500"
                        thclassName="ltr:!text-left rtl:!text-right p-3 group-[.bordered]:border group-[.bordered]:border-slate-200 group-[.bordered]:dark:border-zink-500 sorting px-3 py-4 text-slate-900 bg-slate-200/50 font-semibold text-left dark:text-zink-50 dark:bg-zink-600 dark:group-[.bordered]:border-zink-500 sorting_asc"
                        tdclassName="p-3 group-[.bordered]:border group-[.bordered]:border-slate-200 group-[.bordered]:dark:border-zink-500"
                        PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Basic;