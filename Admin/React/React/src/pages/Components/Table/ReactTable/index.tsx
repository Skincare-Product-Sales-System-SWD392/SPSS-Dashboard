import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import Basic from "./Basic";
import RowBorders from "./RowBorders";
import HoverAble from "./Hoverable";
import BorderedTable from "./BorderedTable";
import HiddenColumns from "./HiddenColumns";
import AddRows from "./AddRows";

export interface column { header: string; accessorKey: string; enableColumnFilter: boolean; enableSorting: boolean };

const ReactDataTable = () => {

    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Datatable" pageTitle="Tables" />

                <Basic />
                <RowBorders />
                <HoverAble />
                <BorderedTable />
                <HiddenColumns />
                <AddRows />
            </div>
        </React.Fragment>
    );
}

export default ReactDataTable;