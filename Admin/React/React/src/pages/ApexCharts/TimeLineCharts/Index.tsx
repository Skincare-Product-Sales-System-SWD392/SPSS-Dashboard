import BreadCrumb from 'Common/BreadCrumb'
import React from 'react'
import { BasicTimeline, DiffColor } from './BasicDiffColor'
import { Advancedranges, MultiSeries } from './MultiAdvanced'
import { Dumbbell, Grouprow } from './GrouprowDumbell'

const TimeLinechart = () => {
    return (
        <React.Fragment>
            <BreadCrumb title='Timeline Charts' pageTitle='Apexcharts' />
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Basic</h6>
                        <BasicTimeline chartId="basicTimeline" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Different Color For Each Bar</h6>
                        <DiffColor chartId="colorTimeline" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Multi Series</h6>
                        <MultiSeries chartId="multiSeriesChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Advanced (Multiple Ranges)</h6>
                        <Advancedranges chartId="advancedMultipleRanges" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Multiple Series – Group Rows</h6>
                        <Grouprow chartId="multipleSeriesGroupRows" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Dumbbell Chart (Horizontal)</h6>
                        <Dumbbell chartId="dumbbellChart" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TimeLinechart