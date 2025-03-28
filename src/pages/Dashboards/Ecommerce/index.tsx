import React, { useEffect } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import ProductPriceAnalysis from './ProductPriceAnalysis';
import PriceDiscountAnalysis from './PriceDiscountAnalysis';
import WelcomeBanner from './WelcomeBanner';
import TopSellingProducts from './TopSellingProducts';
import NewProductsAnalysis from './NewProductsAnalysis';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'slices/store';
import { fetchBestSellers, fetchNewProducts, fetchPendingOrders, fetchCanceledOrders } from 'slices/dashboard/reducer';
import PendingOrders from './PendingOrders';
import CanceledOrders from './CanceledOrders';

const Ecommerce = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        // Fetch data for dashboard components
        dispatch(fetchBestSellers({ pageNumber: 1, pageSize: 10 }));
        dispatch(fetchNewProducts({ pageNumber: 1, pageSize: 10 }));
        
        // Explicitly fetch pending orders with the correct parameters
        dispatch(fetchPendingOrders({ topCount: 10 }))
            .unwrap()
            .then(data => console.log('Pending orders loaded successfully:', data))
            .catch(err => console.error('Error loading pending orders:', err));
            
        // Fetch canceled orders
        dispatch(fetchCanceledOrders({ pageNumber: 1, pageSize: 10 }));
    }, [dispatch]);

    return (
        <React.Fragment>
            <div className="page-content">
                <BreadCrumb title="Ecommerce" pageTitle="Dashboards" />
                <WelcomeBanner />
                <div className="grid grid-cols-12 gap-x-5">
                    <ProductPriceAnalysis />
                    <PriceDiscountAnalysis />
                    <NewProductsAnalysis />
                </div>
                
                {/* Separate row for Top Selling Products and Pending Orders */}
                <div className="grid grid-cols-12 gap-x-5 mt-5">
                    <div className="col-span-12 lg:col-span-6 2xl:col-span-4">
                        <TopSellingProducts />
                    </div>
                    <PendingOrders />
                </div>
                
                {/* Add a new row for Canceled Orders - now full width */}
                <div className="grid grid-cols-12 gap-x-5 mt-5">
                    <div className="col-span-12">
                        <CanceledOrders />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Ecommerce;
