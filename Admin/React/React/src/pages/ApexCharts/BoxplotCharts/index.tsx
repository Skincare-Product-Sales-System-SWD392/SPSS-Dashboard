import BreadCrumb from 'Common/BreadCrumb';
import React from 'react';
import { BasicBoxplotCharts } from './BasicBoxplotCharts';
import { BoxplotScatterChart } from './BoxplotScatterChart';
import { HorizontalBoxPlot } from './HorizontalBoxPlot';

const BoxplotCharts = () => {
    return (
        <>
            <BreadCrumb title='Boxplot Charts' pageTitle='Apexcharts' />
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Basic</h6>
                        <BasicBoxplotCharts chartId="basicBoxplot" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Boxplot-Scatter</h6>
                        <BoxplotScatterChart chartId="boxplotScatterChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Horizontal BoxPlot</h6>
                        <HorizontalBoxPlot chartId="boxplotHorizontalChart" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BoxplotCharts;
