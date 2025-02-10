import BreadCrumb from 'Common/BreadCrumb';
import React from 'react';
import { BasicChart } from './BasicChart';
import { CandlestickSynced, ComboCandlestick } from './CandlestickSynced';
import { CategoryXaxis } from './CategoryXaxis';
import { CandlestickwithLine } from './CandlestickwithLine';

const CandlstickCharts = () => {
    return (
        <>
            <BreadCrumb title='Candlstick Charts' pageTitle='Apexcharts' />
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-gray-800 text-15 dark:text-white">Simple</h6>
                        <BasicChart chartId="basicChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-gray-800 text-15 dark:text-white">Candlestick Synced with Brush Chart (Combo)</h6>
                        <div>
                            <CandlestickSynced chartId="combo_candlestick" />
                            <ComboCandlestick chartId="combo_candlestick_chart" />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-gray-800 text-15 dark:text-white">Category x-axis</h6>
                        <CategoryXaxis chartId="categoryCandlestick" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-gray-800 text-15 dark:text-white">Candlestick with Line</h6>
                        <CandlestickwithLine chartId="candlestickWithLine" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default CandlstickCharts;
