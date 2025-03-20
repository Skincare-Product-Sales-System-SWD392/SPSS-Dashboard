import React, { useEffect } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import Widgets from './Widgets';
import SalesRevenue from './SalesRevenue';
import TrafficResources from './TrafficResources';
import CustomerService from './CustomerService';
import SalesMonth from './SalesMonth';
import TopSellingProducts from './TopSellingProducts';
import Audience from './Audience';
import ProductPriceAnalysis from './ProductPriceAnalysis';
import ProductCategoryAnalysis from './ProductCategoryAnalysis';
import PriceDiscountAnalysis from './PriceDiscountAnalysis';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'slices/store';
import { fetchBestSellers} from 'slices/dashboard/reducer';
import WelcomeBanner from './WelcomeBanner';
import ProductRatingsChart from './ProductRatingsChart';

const Ecommerce = () => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        // Fetch data when the dashboard loads
        dispatch(fetchBestSellers({ pageNumber: 1, pageSize: 10 }));
    }, [dispatch]);

    return (
        <React.Fragment>
            <div className="page-content">
                <BreadCrumb title="Ecommerce" pageTitle="Dashboards" />
                <WelcomeBanner />
                <div className="grid grid-cols-12 gap-x-5">
                    <ProductPriceAnalysis />
                    <ProductCategoryAnalysis />
                    <PriceDiscountAnalysis />
                    <TopSellingProducts />
                    <ProductRatingsChart /> 
                </div>
            </div>
        </React.Fragment>
    );
};

export default Ecommerce;
