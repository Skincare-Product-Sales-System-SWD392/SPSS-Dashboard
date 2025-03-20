import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'slices/store';
import { NewProductsPriceRangeChart, NewProductsDiscountChart } from './Charts';
import { fetchNewProducts } from 'slices/dashboard/reducer';

const NewProductsAnalysis = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { newProducts, loading, error } = useSelector((state: RootState) => state.dashboard);
    
    useEffect(() => {
        // Fetch new products directly in this component to ensure data is loaded
        dispatch(fetchNewProducts({ pageNumber: 1, pageSize: 10 }))
            .unwrap()
            .then(data => console.log('New products loaded:', data))
            .catch(err => console.error('Error loading new products:', err));
    }, [dispatch]);
    
    console.log('New Products state:', { newProducts, loading, error }); // Debug log
    
    return (
        <React.Fragment>
            <div className="col-span-12">
                <h5 className="mb-4 text-16">New Products Analysis</h5>
            </div>
            <div className="col-span-12 card lg:col-span-6">
                <div className="card-body">
                    <div className="flex items-center mb-3">
                        <h6 className="grow text-15">New Products by Price Range</h6>
                    </div>
                    
                    {loading ? (
                        <div className="flex justify-center py-10">
                            <div className="animate-spin size-6 border-2 border-slate-200 dark:border-zink-500 rounded-full border-t-custom-500 dark:border-t-custom-500"></div>
                        </div>
                    ) : error ? (
                        <div className="text-center py-4 text-red-500">
                            <p>Error loading products: {error}</p>
                            <button 
                                className="mt-2 px-4 py-2 bg-primary-500 text-white rounded"
                                onClick={() => dispatch(fetchNewProducts({ pageNumber: 1, pageSize: 10 }))}
                            >
                                Retry
                            </button>
                        </div>
                    ) : newProducts && newProducts.length > 0 ? (
                        <NewProductsPriceRangeChart chartId="newProductsPriceRangeChart" products={newProducts} />
                    ) : (
                        <div className="text-center py-4">
                            <p>No new product data available</p>
                        </div>
                    )}
                </div>
            </div>
            
            <div className="col-span-12 card lg:col-span-6">
                <div className="card-body">
                    <div className="flex items-center mb-3">
                        <h6 className="grow text-15">Top Discounted New Products</h6>
                    </div>
                    
                    {loading ? (
                        <div className="flex justify-center py-10">
                            <div className="animate-spin size-6 border-2 border-slate-200 dark:border-zink-500 rounded-full border-t-custom-500 dark:border-t-custom-500"></div>
                        </div>
                    ) : error ? (
                        <div className="text-center py-4 text-red-500">
                            <p>Error loading products: {error}</p>
                            <button 
                                className="mt-2 px-4 py-2 bg-primary-500 text-white rounded"
                                onClick={() => dispatch(fetchNewProducts({ pageNumber: 1, pageSize: 10 }))}
                            >
                                Retry
                            </button>
                        </div>
                    ) : newProducts && newProducts.length > 0 ? (
                        <NewProductsDiscountChart chartId="newProductsDiscountChart" products={newProducts} />
                    ) : (
                        <div className="text-center py-4">
                            <p>No new product data available</p>
                        </div>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default NewProductsAnalysis; 