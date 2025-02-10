import BreadCrumb from 'Common/BreadCrumb';
import React from 'react';
import { BasicHeatmap, ColorRange, MultipleColors, RoundedChart } from './Charts';

const HeatmapChart = () => {
    return (
        <>
            <BreadCrumb title='Heatmap Chart' pageTitle='Apexcharts' />
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Basic</h6>
                        <BasicHeatmap chartId="basicHeatmap" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Multiple Colors</h6>
                        <MultipleColors chartId="multipleColorsHeatmap" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Color Range</h6>
                        <ColorRange chartId="ColorsRangeHeatmap" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Rounded (Range without Shades)</h6>
                        <RoundedChart chartId="RoundedRangeHeatmap" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeatmapChart;
