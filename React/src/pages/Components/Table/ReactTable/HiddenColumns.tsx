import React from "react";
import { column } from "./index";
import TableContainer from "Common/TableContainer";
import { basic } from "Common/data";

const HiddenColumns = () => {

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
                    <h6 className="mb-4 text-15">Hidden Columns</h6>
                    <TableContainer
                        isPagination={true}
                        isTfoot={true}
                        isSelect={true}
                        isGlobalFilter={true}
                        columns={(columns || [])}
                        data={(basic || [])}
                        customPageSize={10}
                        divclassName="my-2 col-span-12 overflow-x-auto lg:col-span-12"
                        tableclassName="display dataTable w-full text-sm align-middle whitespace-nowrap"
                        theadclassName="border-b border-slate-200 dark:border-zink-500"
                        trclassName="group-[.stripe]:even:bg-slate-50 group-[.stripe]:dark:even:bg-zink-600 transition-all duration-150 ease-linear group-[.hover]:hover:bg-slate-50 dark:group-[.hover]:hover:bg-zink-600 [&.selected]:bg-custom-500 dark:[&.selected]:bg-custom-500 [&.selected]:text-custom-50 dark:[&.selected]:text-custom-50"
                        thclassName="p-3 group-[.bordered]:border group-[.bordered]:border-slate-200 group-[.bordered]:dark:border-zink-500 sorting px-3 py-4 text-slate-900 bg-slate-200/50 font-semibold text-left dark:text-zink-50 dark:bg-zink-600 dark:group-[.bordered]:border-zink-500"
                        tdclassName="p-3 group-[.bordered]:border group-[.bordered]:border-slate-200 group-[.bordered]:dark:border-zink-500"
                        PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default HiddenColumns;