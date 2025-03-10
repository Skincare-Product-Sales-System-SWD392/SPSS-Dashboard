import React from "react";
import { column } from "./index";
import TableContainer from "Common/TableContainer";
import { reactTableData } from "Common/data";

const RowBorders = () => {

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
                    <h6 className="mb-4 text-15">Row Borders</h6>
                    <TableContainer
                        isPagination={true}
                        isSelect={true}
                        isGlobalFilter={true}
                        columns={(columns || [])}
                        data={(reactTableData || [])}
                        customPageSize={10}
                        divclassName="my-2 col-span-12 overflow-x-auto lg:col-span-12"
                        tableclassName="dataTable w-full text-sm align-middle whitespace-nowrap no-footer"
                        theadclassName="border-b border-slate-200 dark:border-zink-500"
                        tbodyclassName="divide-y divide-slate-200 dark:divide-zink-500"
                        thclassName="p-3 group-[.bordered]:border group-[.bordered]:border-slate-200 group-[.bordered]:dark:border-zink-500 sorting px-3 py-4 text-slate-900 bg-slate-200/50 font-semibold text-left dark:text-zink-50 dark:bg-zink-600 dark:group-[.bordered]:border-zink-500 sorting_asc"
                        tdclassName="p-3 group-[.bordered]:border group-[.bordered]:border-slate-200 group-[.bordered]:dark:border-zink-500"
                        PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default RowBorders;