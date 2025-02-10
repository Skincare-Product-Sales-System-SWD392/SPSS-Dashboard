import BreadCrumb from 'Common/BreadCrumb'
import React from 'react'
import { BasicPolar, MonochromeChart } from './Polarchart'

const PolarAreaChart = () => {
    return (
        <React.Fragment>
            <BreadCrumb title='Polar Area Charts' pageTitle='Apexcharts' />
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Basic</h6>
                        <BasicPolar chartId="basicPolar" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Monochrome</h6>
                        <MonochromeChart chartId="monochromeChart" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PolarAreaChart