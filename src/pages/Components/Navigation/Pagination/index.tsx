import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import BasicPagination from "./BasicPagination";
import BorderedPagination from "./BorderedPagination";
import SizesPagination from "./SizesPagination";

const Pagination = () => {
    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="Pagination" pageTitle="Navigation" />

                <BasicPagination />
                <BorderedPagination />
                <SizesPagination />
            </div>
        </React.Fragment>
    );
}

export default Pagination;