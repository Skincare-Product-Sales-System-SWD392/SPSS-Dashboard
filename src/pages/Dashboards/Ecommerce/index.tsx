import React, { useEffect } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import WelcomeWidget from './WelcomeWidget';
import OrderStatistics from './OrderStatistics';
import Widgets from './Widgets';
import SalesRevenue from './SalesRevenue';
import TrafficResources from './TrafficResources';
import ProductsOrders from './ProductsOrders';
import CustomerService from './CustomerService';
import SalesMonth from './SalesMonth';
import TopSellingProducts from './TopSellingProducts';
import Audience from './Audience';
import { useNavigate } from 'react-router-dom';

const Ecommerce = () => {

    const navigate = useNavigate();
    useEffect(() => navigate("/dashboard"), [navigate]);

    return (
        <React.Fragment>
            <BreadCrumb title='Ecommerce' pageTitle='Dashboards' />
            <div className="grid grid-cols-12 gap-x-5">
                <WelcomeWidget />
                <OrderStatistics />
                <Widgets />
                <SalesRevenue />
                <TrafficResources />
                <ProductsOrders />
                <CustomerService />
                <SalesMonth />
                <TopSellingProducts />
                <Audience />
            </div>
        </React.Fragment>
    );
};

export default Ecommerce;
