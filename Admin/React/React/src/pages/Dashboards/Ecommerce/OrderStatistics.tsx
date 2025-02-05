import React from 'react';
import { Link } from 'react-router-dom';
import { OrderStatisticsChart } from './Charts';
import { MoveRight } from 'lucide-react';

const OrderStatistics = () => {
    return (
        <React.Fragment>
            <div className="col-span-12 card 2xl:col-span-4 2xl:row-span-2">
                <div className="card-body">
                    <div className="flex items-center mb-3">
                        <h6 className="grow text-15">Order Statistics</h6>
                        <div className="relative">
                            <Link to="#" className="underline transition-all duration-200 ease-linear text-custom-500 hover:text-custom-600">View All 
                            <MoveRight className="inline-block size-4 align-middle ltr:ml-2 rtl:mr-2"></MoveRight></Link>
                        </div>
                    </div>
                    <OrderStatisticsChart chartId="orderStatisticsChart" />
                </div>
            </div>
        </React.Fragment>
    );
};

export default OrderStatistics;
