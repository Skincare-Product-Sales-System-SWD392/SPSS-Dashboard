import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'slices/store';
import { ProductPriceComparisonChart } from './Charts';
import { MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductPriceAnalysis = () => {
    const { bestSellers, loading } = useSelector((state: RootState) => state.dashboard);
    const products = bestSellers?.items || [];
    
    return (
        <React.Fragment>
            <div className="col-span-12 card 2xl:col-span-8">
                <div className="card-body">
                    <div className="flex items-center mb-3">
                        <h6 className="grow text-15">Top Products Price Analysis</h6>
                        <div className="relative">
                            <Link to="/ecommerce/products" className="transition-all duration-300 ease-linear text-custom-500 hover:text-custom-700">View All
                                <MoveRight className="inline-block size-4 align-middle ltr:ml-2 rtl:mr-2"></MoveRight>
                            </Link>
                        </div>
                    </div>
                    
                    {loading ? (
                        <div className="flex justify-center py-10">
                            <div className="animate-spin size-6 border-2 border-slate-200 dark:border-zink-500 rounded-full border-t-custom-500 dark:border-t-custom-500"></div>
                        </div>
                    ) : products.length > 0 ? (
                        <ProductPriceComparisonChart chartId="productPriceComparisonChart" products={products} />
                    ) : (
                        <div className="text-center py-4">
                            <p>No product data available</p>
                        </div>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default ProductPriceAnalysis; 