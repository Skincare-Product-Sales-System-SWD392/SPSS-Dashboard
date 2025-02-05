import BreadCrumb from 'Common/BreadCrumb'
import React from 'react'
import { RadarMultipleSeries, RadarWithPolygonfill, SimpleRadar } from './RadarChart'

const RadarChart = () => {
    return (
        <React.Fragment>
            <BreadCrumb title='Radar Charts' pageTitle='Apexcharts' />

            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Basic</h6>
                        <SimpleRadar chartId="basicRadar" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Radar – Multiple Series</h6>
                        <RadarMultipleSeries chartId="radarMultipleSeries" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Radar with Polygon-fill</h6>
                        <RadarWithPolygonfill chartId="radarWithPolygonfill" />
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default RadarChart