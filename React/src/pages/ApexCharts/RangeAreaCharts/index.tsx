import BreadCrumb from 'Common/BreadCrumb'
import React from 'react'
import { BasicRange, ComboRange } from './RangeCharts'

const RangeAreaChart = () => {
    return (
        <React.Fragment>
            <BreadCrumb title='Range Area Charts' pageTitle='Apexcharts' />

            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Basic Range Area</h6>
                        <BasicRange chartId="basicRangeArea" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Combo Range Area</h6>
                        <ComboRange chartId="comboRangeAreaChart" />
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default RangeAreaChart