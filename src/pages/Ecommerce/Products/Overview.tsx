import React, { useEffect, useState } from "react";
import BreadCrumb from "Common/BreadCrumb";
import { Link, useLocation } from "react-router-dom";
import DeleteModal from "Common/DeleteModal";

import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { getProductById } from 'slices/product/thunk';

const Overview = () => {
    const dispatch = useDispatch<any>();
    const location = useLocation();
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    const deleteToggle = () => setDeleteModal(!deleteModal);
    const [selectedVariation, setSelectedVariation] = useState<any>(null);
    const [currentPrice, setCurrentPrice] = useState<number | undefined>(undefined);
    const [currentStock, setCurrentStock] = useState<number | undefined>(undefined);

    // Get product ID from URL query parameter
    const productId = new URLSearchParams(location.search).get('id');
    
    // Create selector for product data
    const productSelector = createSelector(
        (state: any) => state.product,
        (product) => ({
            productData: product?.selectedProduct || null,
            loading: product?.loading || false,
            error: product?.error || null,
        })
    );
    
    const { productData, loading } = useSelector(productSelector);
    
    // Fetch product data when component mounts
    useEffect(() => {
        if (productId) {
            dispatch(getProductById(productId));
        }
    }, [dispatch, productId]);
    
    // Set default variation when product data loads
    useEffect(() => {
        if (productData && productData.productItems && productData.productItems.length > 0) {
            const defaultVariation = productData.productItems[0];
            setSelectedVariation(defaultVariation);
            setCurrentPrice(defaultVariation.price);
            setCurrentStock(defaultVariation.quantityInStock);
        } else {
            setCurrentPrice(productData?.price);
        }
    }, [productData]);

    // Handle variation selection
    const handleVariationSelect = (item: any) => {
        setSelectedVariation(item);
        setCurrentPrice(item.price);
        setCurrentStock(item.quantityInStock);
    };
    
    // Handle delete
    const handleDelete = () => {
        // Implement delete functionality
        console.log("Delete product:", productId);
        setDeleteModal(false);
    };

    // Format price with VND
    const formatPrice = (price: number | undefined): string => {
        if (price === undefined || price === null) return "0 VND";
        return price.toLocaleString() + " VND";
    };

    // Calculate discount percentage
    const calculateDiscount = (price: number, marketPrice: number): number => {
        if (!price || !marketPrice || marketPrice <= price) return 0;
        return Math.round((1 - price / marketPrice) * 100);
    };

    return (
        <React.Fragment>
            <BreadCrumb title='Overview' pageTitle='Products' />
            <DeleteModal show={deleteModal} onHide={deleteToggle} onDelete={handleDelete} />

            {loading ? (
                <div className="flex items-center justify-center h-60">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
            ) : productData ? (
                <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
                    <div className="xl:col-span-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
                                    {/* Main product image - use first product item image if available */}
                                    <div className="rounded-md md:col-span-12 md:row-span-2 bg-slate-100 dark:bg-zink-600">
                                        <img 
                                            src={
                                                selectedVariation?.imageUrl || 
                                                (productData.productItems && productData.productItems.length > 0 && productData.productItems[0].imageUrl) || 
                                                productData.thumbnail || 
                                                "https://placehold.co/600x400/gray/white?text=No+Image"
                                            } 
                                            alt={productData.name} 
                                            className="w-full h-full object-contain p-4" 
                                        />
                                    </div>
                                    
                                    {/* Additional product item images */}
                                    {productData.productItems && productData.productItems.map((item: any, index: number) => (
                                        item.imageUrl && (
                                            <div key={index} className="rounded-md md:col-span-6 bg-slate-100 dark:bg-zink-600 cursor-pointer"
                                                onClick={() => handleVariationSelect(item)}>
                                                <img 
                                                    src={item.imageUrl} 
                                                    alt={`${productData.name} ${index + 1}`} 
                                                    className="w-full h-full object-contain p-2" 
                                                />
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="xl:col-span-8">
                        <div className="card">
                            <div className="card-body">
                                <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-sky-100 border-sky-100 text-sky-500 dark:bg-sky-400/20 dark:border-transparent">New Arrivals</span>
                                <h5 className="mt-3 mb-1">
                                    {productData.name}
                                    {productData.specifications?.englishName && (
                                        <span className="block text-sm text-slate-500 font-normal mt-1">
                                            {productData.specifications.englishName}
                                        </span>
                                    )}
                                </h5>
                                
                                {productData.category && (
                                    <div className="mb-3">
                                        <span className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-violet-100 border-violet-100 text-violet-500 dark:bg-violet-400/20 dark:border-transparent">
                                            {productData.category.categoryName}
                                        </span>
                                    </div>
                                )}

                                <ul className="flex flex-wrap items-center gap-4 mb-5 text-slate-500 dark:text-zink-200">
                                    {productData.brand && (
                                        <li>Brand: <Link to="#!" className="font-medium">{productData.brand.name}</Link></li>
                                    )}
                                    <li>Sold: <span className="font-medium">{productData.soldCount || 0}</span></li>
                                </ul>

                                <div className="flex flex-wrap items-center gap-3 mb-4">
                                    {productData.rating && (
                                        <div className="flex items-center gap-2 text-yellow-500">
                                            {[...Array(Math.floor(productData.rating))].map((_, index) => (
                                                <i key={index} className="ri-star-fill"></i>
                                            ))}
                                            {productData.rating % 1 !== 0 && (
                                                <i className="ri-star-half-line"></i>
                                            )}
                                            <div className="text-slate-800 dark:text-zink-50 shrink-0">
                                                <h6>({productData.rating})</h6>
                                            </div>
                                        </div>
                                    )}
                                    
                                    {currentStock !== undefined && (
                                        <div className="shrink-0">
                                            <h6>In Stock: {currentStock}</h6>
                                        </div>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <p className="mb-1 text-green-500">Special Price</p>
                                    <h4>
                                        {formatPrice(currentPrice !== undefined ? currentPrice : productData.price)}
                                        
                                        {productData.price !== undefined && 
                                        productData.marketPrice !== undefined && 
                                        productData.marketPrice > productData.price && (
                                            <>
                                                <small className="font-normal line-through align-middle text-slate-500 dark:text-zink-200 ml-2">
                                                    {formatPrice(productData.marketPrice)}
                                                </small>
                                                <small className="text-green-500 align-middle ml-2">
                                                    {calculateDiscount(currentPrice !== undefined ? currentPrice : productData.price, productData.marketPrice)}% Off
                                                </small>
                                            </>
                                        )}
                                    </h4>
                                </div>

                                {/* Product Variations */}
                                {productData.productItems && productData.productItems.length > 0 && (
                                    <div className="mb-4">
                                        <h6 className="mb-3 text-15">
                                            {productData.productItems[0]?.configurations?.[0]?.variationName || "Select Variation"}
                                        </h6>
                                        <div className="flex flex-wrap items-center gap-2">
                                            {productData.productItems.map((item: any) => {
                                                const config = item.configurations && item.configurations[0];
                                                return config ? (
                                                    <div key={item.id} className="relative inline-block">
                                                        <input 
                                                            id={`variation-${item.id}`} 
                                                            name="variation" 
                                                            type="radio" 
                                                            className="hidden peer" 
                                                            checked={selectedVariation?.id === item.id}
                                                            onChange={() => handleVariationSelect(item)}
                                                        />
                                                        <label 
                                                            htmlFor={`variation-${item.id}`} 
                                                            className="flex items-center justify-center px-3 py-2 text-xs font-medium transition-all duration-200 ease-linear border rounded-md cursor-pointer border-slate-200 text-slate-500 peer-checked:border-custom-500 peer-checked:text-custom-500 peer-checked:bg-custom-50 dark:border-zink-500 dark:text-zink-200 dark:peer-checked:text-custom-500 dark:peer-checked:border-custom-800/20 dark:peer-checked:bg-custom-800/20"
                                                            onClick={() => handleVariationSelect(item)}
                                                        >
                                                            {config.optionName}
                                                        </label>
                                                    </div>
                                                ) : null;
                                            })}
                                        </div>
                                    </div>
                                )}

                                {/* Skin Types */}
                                {productData.skinTypes && productData.skinTypes.length > 0 && (
                                    <div className="mb-4">
                                        <h6 className="mb-3 text-15">Skin Types</h6>
                                        <div className="flex flex-wrap items-center gap-2">
                                            {productData.skinTypes.map((skinType: any) => (
                                                <span key={skinType.id} className="px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-100 text-green-500 dark:bg-green-400/20 dark:border-transparent">
                                                    {skinType.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="mt-5">
                                    <h6 className="mb-3 text-15">Product Description:</h6>
                                    <p className="text-slate-500 dark:text-zink-200">{productData.description}</p>
                                </div>

                                <div className="mt-5">
                                    <h6 className="mb-3 text-15">Specifications:</h6>
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <tbody>
                                                {productData.specifications && Object.entries(productData.specifications).map(([key, value]) => {
                                                    // Format the key for display
                                                    const formattedKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                                                    
                                                    return (
                                                        <tr key={key} className="border-b border-slate-200 dark:border-zink-500">
                                                            <th className="px-3.5 py-2.5 font-semibold w-64 ltr:text-left rtl:text-right text-slate-500 dark:text-zink-200">
                                                                {formattedKey}
                                                            </th>
                                                            <td className="px-3.5 py-2.5">
                                                                {value !== null && value !== undefined && value !== "" ? String(value) : "—"}
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                                {!productData.specifications && (
                                                    <tr>
                                                        <td colSpan={2} className="px-3.5 py-2.5 text-center text-slate-500">No specifications available</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="card">
                    <div className="card-body">
                        <div className="text-center py-6">
                            <p className="text-slate-500">Product not found or failed to load.</p>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};

export default Overview;