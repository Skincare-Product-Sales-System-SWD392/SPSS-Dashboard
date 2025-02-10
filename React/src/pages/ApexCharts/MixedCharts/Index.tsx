import BreadCrumb from 'Common/BreadCrumb'
import React from 'react'
import LineColumn from './LineColumn'
import MultipleYaxis from './MultipleYaxis'
import LineArea from './LineArea'
import LineColumnArea from './LineColumnArea'
import LineScatter from './LineScatter'

const MixedChart = () => {
    return (
        <>
            <BreadCrumb title='Mixed Charts' pageTitle='Apexcharts' />
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Line Column</h6>
                        <LineColumn chartId="lineColumnChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Multiple Y-Axis</h6>
                        <MultipleYaxis chartId="multipleYaxisChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Line & Area</h6>
                        <LineArea chartId="lineAreaChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Line Column Area</h6>
                        <LineColumnArea chartId="lineColumnAreaChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Line Scatter</h6>
                        <LineScatter chartId="lineScatterChart" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MixedChart