import BreadCrumb from 'Common/BreadCrumb'
import React from 'react'
import { BasicLine, DataLabelLine } from './Basic&Datalabel'
import ZoomableTimeSeries from './ZoomableTimeSeries'
import AnnotationLine from './AnnotationLine'
import { BrushLine, BrushLine2 } from './BrushLine'
import StepLine from './StepLine'
import Gradient from './Gradient'
import Missing from './Missing'
import DashedLine from './DashedLine'

const LineChart = () => {
  return (
    <>
      <BreadCrumb title='Line Chart' pageTitle='Apexcharts' />
      <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
        <div className="card">
          <div className="card-body">
            <h6 className="mb-4 text-15">Basic</h6>
            <BasicLine chartId="chartLine" />
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h6 className="mb-4 text-15">Line with Data Labels</h6>
            <DataLabelLine chartId="lineWithDataLabel" />
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h6 className="mb-4 text-15">Zoomable Timeseries</h6>
            <ZoomableTimeSeries chartId="zoomableTimeseries" />
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h6 className="mb-4 text-15">Line Chart with Annotations</h6>
            <AnnotationLine chartId="lineWithAnnotations" />
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h6 className="mb-4 text-15">Brush Chart</h6>
            <div>
              <BrushLine chartId="brushChartLine" />
              <BrushLine2 chartId="brushChartLine2" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h6 className="mb-4 text-15">Stepline</h6>
            <StepLine chartId="chartStepline" />
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h6 className="mb-4 text-15">Gradient Charts</h6>
            <Gradient chartId="gradientCharts" />
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h6 className="mb-4 text-15">Missing / Null Values</h6>
            <Missing chartId="missingCharts" />
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h6 className="mb-4 text-15">Dashed Charts</h6>
            <DashedLine chartId="dashedCharts" />
          </div>
        </div>
        {/* <div className="card">
          <div className="card-body">
            <h6 className="mb-4 text-15">Realtime Charts</h6>
            <div id="realtimeCharts" className="apex-charts" data-chart-colors='["bg-custom-500"]' dir="ltr"></div>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default LineChart
