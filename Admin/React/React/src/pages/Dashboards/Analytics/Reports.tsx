import React from 'react';
import { ReportChart } from './Charts';

const Reports = () => {
    return (
        <React.Fragment>
            <div className="order-12 col-span-12 lg:col-span-6 2xl:order-1 card 2xl:col-span-3">
                <div className="card-body">
                    <h6 className="mb-3 text-15">Analytics Reports</h6>
                    <ReportChart chartId="lineWithDataLabel" data-chart-colors='["bg-custom-500", "bg-green-500"]' />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Reports;
