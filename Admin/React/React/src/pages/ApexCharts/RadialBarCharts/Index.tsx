import BreadCrumb from 'Common/BreadCrumb'
import React from 'react'
import { MultipleRadial, SimpleRadial } from './SimpleMultiple'
import { CustomRadial, GradientChart } from './CustomGradient'
import { ImageRadial, SemiRadial, StrokedChart } from './ImageStrokedSemi'

const RadialbarChart = () => {
    return (
        <React.Fragment>
            <BreadCrumb title='Radialbar Charts' pageTitle='Apexcharts' />

            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Simple Radialbar Chart</h6>
                        <SimpleRadial chartId="simpleRadialbarChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Multiple Radialbar</h6>
                        <MultipleRadial chartId="multipleRadialbarChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Custom Angle Circle</h6>
                        <CustomRadial chartId="customAngleCircleChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Gradient</h6>
                        <GradientChart chartId="gradientChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Radialbar with Image</h6>
                        <ImageRadial chartId="radialbarsWithImageChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Stroked Gauge</h6>
                        <StrokedChart chartId="strokedGauge" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Semi Circle Gauge</h6>
                        <SemiRadial chartId="semiCircleGauge" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default RadialbarChart