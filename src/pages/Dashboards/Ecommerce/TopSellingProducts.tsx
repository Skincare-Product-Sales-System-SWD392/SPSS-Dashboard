import React, { useEffect } from 'react';
import { MoreVertical } from 'lucide-react';
import { Dropdown } from 'Common/Components/Dropdown';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'slices/store';
import { fetchBestSellers, fetchTotalRevenue } from 'slices/dashboard/reducer';

const TopSellingProducts = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { bestSellers, loading, error, totalRevenue = 0 } = useSelector((state: RootState) => {
        console.log('Current dashboard state:', state.dashboard); // Debug log
        return state.dashboard;
    });

    useEffect(() => {
        dispatch(fetchBestSellers({ pageNumber: 1, pageSize: 6 }))
            .unwrap()
            .then(response => console.log('Fetch success:', response))
            .catch(error => console.error('Fetch error:', error));
            
        dispatch(fetchTotalRevenue({ pageNumber: 1, pageSize: 10 }));
    }, [dispatch]);

    // Safely access items with fallback to empty array
    const products = bestSellers?.items ?? [];
    
    console.log('Render state:', { bestSellers, products, loading, error }); // Debug log

    return (
        <React.Fragment>
            <div className="col-span-12 card lg:col-span-6 2xl:col-span-3">
                <div className="card-body">
                    <div className="flex items-center mb-3">
                        <div className="grow">
                            <h6 className="text-15">Top Selling Products</h6>
                        </div>
                        <Dropdown className="relative shrink-0">
                            <Dropdown.Trigger type="button" className="flex items-center justify-center size-[30px] p-0 bg-white text-slate-500 btn hover:text-slate-500 hover:bg-slate-100 focus:text-slate-500 focus:bg-slate-100 active:text-slate-500 active:bg-slate-100 dark:bg-zink-700 dark:hover:bg-slate-500/10 dark:focus:bg-slate-500/10 dark:active:bg-slate-500/10 dropdown-toggle" id="sellingProductDropdown" data-bs-toggle="dropdown">
                                <MoreVertical className="inline-block size-4"></MoreVertical>
                            </Dropdown.Trigger>

                            <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600" aria-labelledby="sellingProductDropdown">
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">1 Weekly</Link>
                                </li>
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">1 Monthly</Link>
                                </li>
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">3 Monthly</Link>
                                </li>
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">6 Monthly</Link>
                                </li>
                                <li>
                                    <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!">This Yearly</Link>
                                </li>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                    {loading ? (
                        <div className="flex justify-center items-center h-40">
                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary-500"></div>
                        </div>
                    ) : error ? (
                        <div className="text-center py-4 text-red-500">
                            <p>Error loading products: {error}</p>
                            <button 
                                className="mt-2 px-4 py-2 bg-primary-500 text-white rounded"
                                onClick={() => dispatch(fetchBestSellers({ pageNumber: 1, pageSize: 6 }))}
                            >
                                Retry
                            </button>
                        </div>
                    ) : (
                        <ul className="flex flex-col gap-5">
                            {products.length > 0 ? (
                                products.map((product) => (
                                    <li key={product.id} className="flex items-center gap-3">
                                        <div className="flex items-center justify-center size-10 rounded-md bg-slate-100 dark:bg-zink-600">
                                            <img src={product.thumbnail} alt={product.name} className="h-6" />
                                        </div>
                                        <div className="overflow-hidden grow">
                                            <h6 className="truncate">{product.name}</h6>
                                            <div className="text-yellow-500">
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-half-fill"></i>
                                            </div>
                                        </div>
                                        <h6 className="shrink-0">
                                            ₫{(product.marketPrice || 0).toLocaleString('vi-VN')}
                                        </h6>
                                    </li>
                                ))
                            ) : (
                                <li className="text-center py-4">
                                    No products found
                                </li>
                            )}
                        </ul>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default TopSellingProducts;
