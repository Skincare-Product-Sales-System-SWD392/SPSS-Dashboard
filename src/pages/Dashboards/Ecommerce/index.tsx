import React from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import ProductPriceAnalysis from './ProductPriceAnalysis';
import PriceDiscountAnalysis from './PriceDiscountAnalysis';
import WelcomeBanner from './WelcomeBanner';
import TopSellingProducts from './TopSellingProducts';
import NewProductsAnalysis from './NewProductsAnalysis';

const Ecommerce = () => {
    return (
        <React.Fragment>
            <div className="page-content">
                <BreadCrumb title="Ecommerce" pageTitle="Dashboards" />
                <WelcomeBanner />
                <div className="grid grid-cols-12 gap-x-5">
                    <ProductPriceAnalysis />
                    <PriceDiscountAnalysis />
                    <NewProductsAnalysis />
                    <TopSellingProducts />
                </div>
           </div>
        </React.Fragment>
    );
};

export default Ecommerce;
