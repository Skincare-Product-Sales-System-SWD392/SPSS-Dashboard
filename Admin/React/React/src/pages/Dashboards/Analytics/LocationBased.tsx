import React from 'react';
import { LocationChart } from './Charts';
import { MoveRight } from 'lucide-react';

const LocationBased = () => {
    return (
        <React.Fragment>
            <div className="order-6 col-span-12 2xl:order-1 card 2xl:col-span-5">
                <div className="card-body">
                    <div className="flex items-center gap-2">
                        <h6 className="mb-3 text-15 grow">Location-Based Response Times</h6>
                        <div className="shrink-0">
                            <button type="button" className="px-2 py-1.5 text-xs text-custom-500 btn bg-custom-100 hover:text-white hover:bg-custom-600 focus:text-white focus:bg-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:ring active:ring-custom-100 dark:bg-custom-500/20 dark:text-custom-500 dark:hover:bg-custom-500 dark:hover:text-white dark:focus:bg-custom-500 dark:focus:text-white dark:active:bg-custom-500 dark:active:text-white dark:ring-custom-400/20">
                                View More <MoveRight className="inline-block size-4 ltr:ml-1 rlt:mr-1 rtl:-rotate-180"></MoveRight>
                            </button>
                        </div>
                    </div>

                    <LocationChart chartId="responseTimes" data-chart-colors='["bg-red-500"]' />
                </div>
            </div>
        </React.Fragment>
    );
};

export default LocationBased;
