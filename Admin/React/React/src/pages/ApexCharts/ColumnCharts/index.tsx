import BreadCrumb from 'Common/BreadCrumb';
import React from 'react';
import { BasicColumnChart } from './BasicColumnChart';
import { DataLabels } from './DataLabels';
import { StackedColumns } from './StackedColumns';
import { StackedColumns100 } from './StackedColumns100';
import { GroupedStacked } from './GroupedStacked';
import { DumbbellChart } from './DumbbellChart';
import { ColumnMarkers } from './ColumnMarkers';
import { ColumnGroupLabel } from './ColumnGroupLabel';
import { RotatedLabels } from './RotatedLabels';
import { NegativeValues } from './NegativeValues';
import { DistributedColumns } from './DistributedColumns';

const ColumnCharts = () => {
    return (
        <>
            <BreadCrumb title='Column Charts' pageTitle='Apexcharts' />
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Basic</h6>
                        <BasicColumnChart chartId="basicColumnChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Column with Data Labels</h6>
                        <DataLabels chartId="columnWithDatalabelChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Stacked Columns</h6>
                        <StackedColumns chartId="stackedColumnChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Stacked Columns 100</h6>
                        <StackedColumns100 chartId="stackedColumn100Chart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Grouped Stacked Columns</h6>
                        <GroupedStacked chartId="groupedStackedColumnChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Dumbbell Chart</h6>
                        <DumbbellChart chartId="dumbbellChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Column with Markers</h6>
                        <ColumnMarkers chartId="columnMarkersChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Column with Group Label</h6>
                        <ColumnGroupLabel chartId="columnGroupLabelChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Column with Rotated Labels</h6>
                        <RotatedLabels chartId="columnRotatedLabelChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Column with Negative Values</h6>
                        <NegativeValues chartId="columnNegativeValueChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Distributed Columns</h6>
                        <DistributedColumns chartId="columnDistributedChart" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ColumnCharts;
