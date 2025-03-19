// src/pages/Dashboards/Ecommerce/Widgets.tsx
import React, { useEffect } from 'react';
import { Package, PackageX, Truck, Wallet2 } from 'lucide-react';
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'slices/store';
import { fetchTotalRevenue } from '../../../slices/dashboard/thunk';

const Widgets = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { loading, totalRevenue } = useSelector((state: RootState) => state.dashboard);
    
    useEffect(() => {
        dispatch(fetchTotalRevenue());
    }, [dispatch]);
    
    return (
        <React.Fragment>
            <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2">
                <div className="text-center card-body">
                    <div className="flex items-center justify-center mx-auto text-green-500 bg-green-100 rounded-full size-14 dark:bg-green-500/20">
                        <Wallet2 />
                    </div>
                    <h5 className="mt-4 mb-2">
                        {loading ? (
                            "Loading..."
                        ) : (
                            <CountUp 
                                end={totalRevenue || 0}
                                className="counter-value" 
                                prefix="₫"
                                separator="," 
                                decimals={0}
                                duration={2}
                            />
                        )}
                    </h5>
                    <p className="text-slate-500 dark:text-zink-200">Total Revenue</p>
                </div>
            </div>
            
            <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-2">
                <div className="text-center card-body">
                    <div className="flex items-center justify-center mx-auto text-purple-500 bg-purple-100 rounded-full size-14 dark:bg-purple-500/20">
                        <Package />
                    </div>
                    <h5 className="mt-4 mb-2"><CountUp end={13461} className="counter-value" /></h5>
                    <p className="text-slate-500 dark:text-zink-200">Orders</p>
                </div>
            </div>
            
            {/* Keep other widgets */}
        </React.Fragment>
    );
};

export default Widgets;