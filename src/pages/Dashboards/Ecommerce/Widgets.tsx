import React, { useState, useEffect } from 'react';
import { Package, PackageX, Truck, Wallet2 } from 'lucide-react';
import CountUp from 'react-countup';
import axios from 'axios';

const Widgets = () => {
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch total revenue data when component mounts
        const fetchTotalRevenue = async () => {
            try {
                const response = await axios.get('http://localhost:5041/api/dashboards/total-revenue');
                console.log('API Response:', response.data); // Log the response
                // Handle raw number response
                const revenue = typeof response.data === 'number' 
                    ? response.data 
                    : parseFloat(response.data);
                setTotalRevenue(revenue);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching total revenue:', error);
                setLoading(false);
            }
        };
        fetchTotalRevenue();
    }, []);

    return (
        <React.Fragment>
            <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2">
                <div className="text-center card-body">
                    <div className="flex items-center justify-center mx-auto rounded-full size-14 bg-custom-100 text-custom-500 dark:bg-custom-500/20">
                        <Wallet2 />
                    </div>
                    <h5 className="mt-4 mb-2">$
                        {loading ? (
                            <span>Loading...</span>
                        ) : (
                            <CountUp 
                                end={totalRevenue}
                                decimals={2} 
                                className="counter-value" 
                            />
                        )}
                        k</h5>
                    <p className="text-slate-500 dark:text-zink-200">Total Revenue</p>
                </div>
            </div>
            <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2">
                <div className="text-center card-body">
                    <div className="flex items-center justify-center mx-auto text-purple-500 bg-purple-100 rounded-full size-14 dark:bg-purple-500/20">
                        <Package />
                    </div>
                    <h5 className="mt-4 mb-2"><CountUp end={13461} className="counter-value" /></h5>
                    <p className="text-slate-500 dark:text-zink-200">Total Orders</p>
                </div>
            </div>
            <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2">
                <div className="text-center card-body">
                    <div className="flex items-center justify-center mx-auto text-green-500 bg-green-100 rounded-full size-14 dark:bg-green-500/20">
                        <Truck />
                    </div>
                    <h5 className="mt-4 mb-2"><CountUp end={17150} className="counter-value" /></h5>
                    <p className="text-slate-500 dark:text-zink-200">Delivered</p>
                </div>
            </div>
            <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2">
                <div className="text-center card-body">
                    <div className="flex items-center justify-center mx-auto text-red-500 bg-red-100 rounded-full size-14 dark:bg-red-500/20">
                        <PackageX />
                    </div>
                    <h5 className="mt-4 mb-2"><CountUp end={3519} className="counter-value" /></h5>
                    <p className="text-slate-500 dark:text-zink-200">Cancelled</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Widgets;