import BreadCrumb from 'Common/BreadCrumb'
import React from 'react'
import { BasicScatter, DatetimeScatter, ImageScatter } from './Scatter'

const Scatterchart = () => {
    return (
        <React.Fragment>
            <BreadCrumb title='Scatter Charts' pageTitle='Apexcharts' />

            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Basic</h6>
                        <BasicScatter chartId="basicScatter" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Scatter – Datetime</h6>
                        <DatetimeScatter chartId="scatterDatetime" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Scatter – Images</h6>
                        <ImageScatter chartId="scatterImages" />
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Scatterchart