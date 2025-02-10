import BreadCrumb from 'Common/BreadCrumb';
import React from 'react';
import { SimpleChart } from './SimpleChart';
import { Bubble3DChart } from './3DBubble';

const BubbleCharts = () => {
    return (
        <>
            <BreadCrumb title='Bubble Charts' pageTitle='Apexcharts' />
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Simple</h6>
                        <SimpleChart chartId="simpleChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">3D Bubble</h6>
                        <Bubble3DChart chartId="bubble_chart" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BubbleCharts;
