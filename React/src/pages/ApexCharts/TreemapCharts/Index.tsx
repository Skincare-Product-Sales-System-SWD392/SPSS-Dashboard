import BreadCrumb from 'Common/BreadCrumb'
import React from 'react'
import { BasicTime, MultipleSeries } from './BasicMultiple'
import { ColorRange, DistributedChart } from './ColorDistributed'

const Treemapchart = () => {
    return (
        <React.Fragment>
            <BreadCrumb title='Treemap Charts' pageTitle='Apexcharts' />
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Basic</h6>
                        <BasicTime chartId="basicTreemap" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Treemap Multiple Series</h6>
                        <MultipleSeries chartId="treemapMultipleSeries" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Color Range</h6>
                        <ColorRange chartId="colorRange" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Distributed Chart</h6>
                        <DistributedChart chartId="distributedChart" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Treemapchart