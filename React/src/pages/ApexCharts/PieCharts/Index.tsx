import BreadCrumb from 'Common/BreadCrumb'
import React from 'react'
import { DonutUpdate, GradientDonut, ImagePie, MonochromePie, PatternDonut, SemiDonut, SimpleDonut, SimplePie } from './Charts'

const PieChart = () => {
    return (
        <React.Fragment>
            <BreadCrumb title='Pie / Donut Charts' pageTitle='Apexcharts' />
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Simple Pie</h6>
                        <SimplePie chartId="simplePie" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Simple Donut</h6>
                        <SimpleDonut chartId="simpleDonut" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Donut Update</h6>
                        <div>
                            <DonutUpdate chartId="updatingDonutChart" />

                            <div className="flex flex-wrap items-start justify-center gap-2 mt-4">
                                <button id="add" className="px-2 py-1.5 text-xs bg-white border-dashed text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20">
                                    + ADD
                                </button>

                                <button id="remove" className="px-2 py-1.5 text-xs bg-white border-dashed text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20">
                                    - REMOVE
                                </button>

                                <button id="randomize" className="px-2 py-1.5 text-xs bg-white border-dashed text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20">
                                    RANDOMIZE
                                </button>

                                <button id="reset" className="px-2 py-1.5 text-xs bg-white border-dashed text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20">
                                    RESET
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Monochrome Pie</h6>
                        <MonochromePie chartId="monochromePieChart" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Gradient Donut</h6>
                        <GradientDonut chartId="gradientDonut" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Semi Donut</h6>
                        <SemiDonut chartId="semiDonut" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Donut with Pattern</h6>
                        <PatternDonut chartId="donutWithPattern" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Pie with Image</h6>
                        <ImagePie chartId="pieWithImage" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PieChart