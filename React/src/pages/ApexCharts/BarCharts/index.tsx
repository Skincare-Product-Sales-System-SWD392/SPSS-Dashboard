import React from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import { BasicBarChart } from './BasicBarChart';
import { GroupedChart } from './GroupedChart';
import { StackedBarChart } from './StackedBarChart';
import { StackedBars100 } from './StackedBars100';
import { GroupedStackedBars } from './GroupedStackedBars';
import { NegativeValuesCharts } from './NegativeValuesCharts';
import { BarwithMarkers } from './BarwithMarkers';
import { ReversedBarChart } from './ReversedBarChart';
import { DataLabelsBar } from './DataLabelsBar';
import { PatternedBar } from './PatternedBar';
import { BarwithImages } from './BarwithImages';

const BarCharts = () => {
    return (
        <>
            <BreadCrumb title='Bar Charts' pageTitle='Apexcharts' />
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Basic</h6>
                        <BasicBarChart chartId="basicBar" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Grouped Chart</h6>
                        <GroupedChart chartId="GroupedChart" /> 
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Stacked Bar</h6>
                        <StackedBarChart chartId="stackedChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Stacked Bars 100</h6>
                        <StackedBars100 chartId="stackedBar100Chart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Grouped Stacked Bars</h6>
                        <GroupedStackedBars chartId="groupedStackedChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Bar with Negative Values</h6>
                        <NegativeValuesCharts chartId="negativeValuesChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Bar with Markers</h6>
                        <BarwithMarkers chartId="markersChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Reversed Bar Chart</h6>
                        <ReversedBarChart chartId="reversedChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Custom DataLabels Bar</h6>
                        <DataLabelsBar chartId="customDataLabelsChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Patterned Bar</h6>
                        <PatternedBar chartId="patternedChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Bar with Images</h6>
                        <BarwithImages chartId="barWithImagesChart" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BarCharts;
