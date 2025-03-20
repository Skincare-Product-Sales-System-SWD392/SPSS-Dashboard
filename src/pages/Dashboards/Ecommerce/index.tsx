import React, { useEffect } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import ProductPriceAnalysis from './ProductPriceAnalysis';
import PriceDiscountAnalysis from './PriceDiscountAnalysis';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'slices/store';
import { fetchBestSellers} from 'slices/dashboard/reducer';
import WelcomeBanner from './WelcomeBanner';
import TopSellingProducts from './TopSellingProducts';

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
                    <PriceDiscountAnalysis />
                    <TopSellingProducts />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Ecommerce;
