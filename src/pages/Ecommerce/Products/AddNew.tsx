import React, { useState } from "react";
import { Link } from "react-router-dom";
import Flatpickr from 'react-flatpickr';
import BreadCrumb from "Common/BreadCrumb";
import Select from 'react-select';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// Icon
import { Pencil, UploadCloud } from 'lucide-react';

// Image
import productImg03 from "assets/images/product/img-03.png";
import Dropzone from "react-dropzone";

// Add this interface at the top of the file
interface ProductImage {
    file: File;
    preview: string;
    formattedSize: string;
}

// Add this interface near your ProductImage interface
interface Thumbnail {
    file: File;
    preview: string;
    formattedSize: string;
}

const AddNew = () => {
    const [selectfiles, setSelectfiles] = useState([]);
    const [thumbnail, setThumbnail] = useState<Thumbnail | null>(null);
    const [productImages, setProductImages] = useState<ProductImage[]>([]);

    const handleAcceptfiles = (files: any) => {
        files?.map((file: any) => {
            return Object.assign(file, {
                priview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size),
            });
        });
        setSelectfiles(files);
    };

    const formatBytes = (bytes: any, decimals = 2) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    };

    const handleThumbnailUpload = (files : any) => {
        if (files && files[0]) {
            const file = files[0];
            setThumbnail({
                file,
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size)
            });
        }
    };

    const handleProductImagesUpload = (files: any) => {
        const newImages = files.map((file: File) => ({
            file,
            preview: URL.createObjectURL(file),
            formattedSize: formatBytes(file.size)
        }));
        setProductImages([...productImages, ...newImages].slice(0, 3)); // Limit to 3 images
    };

    const removeProductImage = (index: number) => {
        setProductImages(productImages.filter((_, i) => i !== index));
    };

    const options = [
        { value: '', label: 'Select Category' },
        { value: 'Mobiles, Computers', label: 'Mobiles, Computers' },
        { value: 'TV, Appliances, Electronics', label: 'TV, Appliances, Electronics' },
        { value: "Men's Fashion", label: "Men's Fashion" },
        { value: "Women's Fashion", label: "Women's Fashion" },
        { value: 'Home, Kitchen, Pets', label: 'Home, Kitchen, Pets' },
        { value: 'Beauty, Health, Grocery', label: 'Beauty, Health, Grocery' },
        { value: 'Books', label: 'Books' },
    ];

    const productTypeSelect = [
        { value: '', label: 'Select Type' },
        { value: 'Single', label: 'Single' },
        { value: 'Unit', label: 'Unit' },
        { value: 'Boxed', label: 'Boxed' },
    ];

    const genderSelect = [
        { value: '', label: 'Select Gender' },
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Unisex', label: 'Unisex' },
    ];

    const brandOptions = [
        { value: '3fa85f64-5717-4562-b3fc-2c963f66afa6', label: 'Brand 1' },
        { value: '4fa85f64-5717-4562-b3fc-2c963f66afa7', label: 'Brand 2' },
        // Add more brands as needed
    ];

    const categoryOptions = [
        { value: '3fa85f64-5717-4562-b3fc-2c963f66afa6', label: 'Category 1' },
        { value: '4fa85f64-5717-4562-b3fc-2c963f66afa7', label: 'Category 2' },
        // Add more categories as needed
    ];

    const skinTypeOptions = [
        { value: '3fa85f64-5717-4562-b3fc-2c963f66afa6', label: 'Normal' },
        { value: '4fa85f64-5717-4562-b3fc-2c963f66afa7', label: 'Dry' },
        { value: '5fa85f64-5717-4562-b3fc-2c963f66afa8', label: 'Oily' },
        // Add more skin types as needed
    ];

    return (
        <React.Fragment>
            <BreadCrumb title='Add New Product' pageTitle='Products' />
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
                <div className="xl:col-span-12">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Create Product</h6>

                            <form action="#!">
                                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-12 mb-5">
                                    <div className="xl:col-span-6">
                                        <label className="inline-block mb-2 text-base font-medium">Product Thumbnail</label>
                                        <Dropzone
                                            onDrop={acceptedFiles => handleThumbnailUpload(acceptedFiles)}
                                            maxFiles={1}
                                            accept={{
                                                'image/*': ['.png', '.jpg', '.jpeg']
                                            }}
                                        >
                                            {({ getRootProps, getInputProps }) => (
                                                <div className="border-2 border-dashed rounded-lg border-slate-200 dark:border-zink-500" {...getRootProps()}>
                                                    <input {...getInputProps()} />
                                                    <div className="p-4 text-center">
                                                        <UploadCloud className="size-6 mx-auto mb-3" />
                                                        <h5 className="mb-1">Drop thumbnail here or click to upload.</h5>
                                                        <p className="text-slate-500 dark:text-zink-200">Maximum size: 2MB</p>
                                                    </div>
                                                </div>
                                            )}
                                        </Dropzone>
                                        {thumbnail && (
                                            <div className="mt-3">
                                                <img 
                                                    src={thumbnail.preview} 
                                                    alt="Thumbnail" 
                                                    className="h-20 rounded object-cover"
                                                />
                                                <p className="mt-1 text-sm text-slate-500">
                                                    {thumbnail.formattedSize}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="xl:col-span-6">
                                        <label className="inline-block mb-2 text-base font-medium">Product Images (Max 3)</label>
                                        <Dropzone
                                            onDrop={acceptedFiles => handleProductImagesUpload(acceptedFiles)}
                                            accept={{
                                                'image/*': ['.png', '.jpg', '.jpeg']
                                            }}
                                            maxFiles={3}
                                        >
                                            {({ getRootProps, getInputProps }) => (
                                                <div className="border-2 border-dashed rounded-lg border-slate-200 dark:border-zink-500" {...getRootProps()}>
                                                    <input {...getInputProps()} />
                                                    <div className="p-4 text-center">
                                                        <UploadCloud className="size-6 mx-auto mb-3" />
                                                        <h5 className="mb-1">Drop images here or click to upload.</h5>
                                                        <p className="text-slate-500 dark:text-zink-200">Maximum size: 2MB per image</p>
                                                    </div>
                                                </div>
                                            )}
                                        </Dropzone>
                                        {productImages.length > 0 && (
                                            <div className="flex gap-3 mt-3">
                                                {productImages.map((image, index) => (
                                                    <div key={index} className="relative">
                                                        <img 
                                                            src={image.preview} 
                                                            alt={`Product ${index + 1}`} 
                                                            className="h-20 rounded object-cover"
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => removeProductImage(index)}
                                                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 size-5 flex items-center justify-center"
                                                        >
                                                            ×
                                                        </button>
                                                        <p className="mt-1 text-sm text-slate-500">
                                                            {image.formattedSize}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-12">
                                    <div className="xl:col-span-6">
                                        <label htmlFor="productNameInput" className="inline-block mb-2 text-base font-medium">Product Name</label>
                                        <input type="text" id="productNameInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter product name" required />
                                    </div>
                                    <div className="xl:col-span-6">
                                        <label htmlFor="englishNameInput" className="inline-block mb-2 text-base font-medium">English Name</label>
                                        <input type="text" id="englishNameInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter English name" />
                                    </div>
                                    <div className="xl:col-span-4">
                                        <label htmlFor="qualityInput" className="inline-block mb-2 text-base font-medium">Quantity</label>
                                        <input type="number" id="qualityInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Quantity" required />
                                    </div>
                                    <div className="xl:col-span-4">
                                        <label htmlFor="skuInput" className="inline-block mb-2 text-base font-medium">SKU</label>
                                        <input type="text" id="skuInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="TWT-LP-ALU-08" required />
                                    </div>
                                    <div className="xl:col-span-4">
                                        <label htmlFor="brandSelect" className="inline-block mb-2 text-base font-medium">Brand</label>
                                        <Select
                                            className="react-select"
                                            options={brandOptions}
                                            isSearchable={true}
                                            name="brandSelect"
                                            id="brandSelect"
                                            placeholder="Select Brand"
                                        />
                                    </div>
                                    <div className="xl:col-span-4">
                                        <label htmlFor="categorySelect" className="inline-block mb-2 text-base font-medium">Category</label>
                                        <Select
                                            className="react-select"
                                            options={categoryOptions}
                                            isSearchable={true}
                                            name="categorySelect"
                                            id="categorySelect"
                                            placeholder="Select Category"
                                        />
                                    </div>
                                    <div className="xl:col-span-4">
                                        <label htmlFor="productTypeSelect" className="inline-block mb-2 text-base font-medium">Product Type</label>
                                        <Select
                                            className="border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                            options={productTypeSelect}
                                            isSearchable={false} // To disable search
                                            name="productTypeSelect"
                                            id="productTypeSelect"
                                        />
                                    </div>
                                    <div className="xl:col-span-4">
                                        <label htmlFor="genderSelect" className="inline-block mb-2 text-base font-medium">Gender</label>
                                        <Select
                                            className="border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                            options={genderSelect}
                                            isSearchable={false} // To disable search
                                            name="genderSelect"
                                            id="genderSelect"
                                        />
                                    </div>
                                    <div className="xl:col-span-6">
                                        <label htmlFor="qualityInput" className="inline-block mb-2 text-base font-medium">Colors Variant</label>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <div>
                                                <input id="selectColor1" className="inline-block size-5 align-middle border rounded-sm appearance-none cursor-pointer bg-sky-500 border-sky-500 checked:bg-sky-500 checked:border-sky-500 disabled:opacity-75 disabled:cursor-default" type="checkbox" value="color1" name="selectColor" />
                                            </div>
                                            <div>
                                                <input id="selectColor2" className="inline-block size-5 align-middle bg-orange-500 border border-orange-500 rounded-sm appearance-none cursor-pointer checked:bg-orange-500 checked:border-orange-500 disabled:opacity-75 disabled:cursor-default" type="checkbox" value="color2" name="selectColor" defaultChecked />
                                            </div>
                                            <div>
                                                <input id="selectColor3" className="inline-block size-5 align-middle bg-green-500 border border-green-500 rounded-sm appearance-none cursor-pointer checked:bg-green-500 checked:border-green-500 disabled:opacity-75 disabled:cursor-default" type="checkbox" value="color3" name="selectColor" />
                                            </div>
                                            <div>
                                                <input id="selectColor4" className="inline-block size-5 align-middle bg-purple-500 border border-purple-500 rounded-sm appearance-none cursor-pointer checked:bg-purple-500 checked:border-purple-500 disabled:opacity-75 disabled:cursor-default" type="checkbox" value="color4" name="selectColor" />
                                            </div>
                                            <div>
                                                <input id="selectColor5" className="inline-block size-5 align-middle bg-yellow-500 border border-yellow-500 rounded-sm appearance-none cursor-pointer checked:bg-yellow-500 checked:border-yellow-500 disabled:opacity-75 disabled:cursor-default" type="checkbox" value="color5" name="selectColor" />
                                            </div>
                                            <div>
                                                <input id="selectColor6" className="inline-block size-5 align-middle bg-red-500 border border-red-500 rounded-sm appearance-none cursor-pointer checked:bg-red-500 checked:border-red-500 disabled:opacity-75 disabled:cursor-default" type="checkbox" value="color6" name="selectColor" />
                                            </div>
                                            <div>
                                                <input id="selectColor7" className="inline-block size-5 align-middle border rounded-sm appearance-none cursor-pointer bg-slate-500 border-slate-500 checked:bg-slate-500 checked:border-slate-500 disabled:opacity-75 disabled:cursor-default" type="checkbox" value="color7" name="selectColor" />
                                            </div>
                                            <div>
                                                <input id="selectColor8" className="inline-block size-5 align-middle border rounded-sm appearance-none cursor-pointer bg-slate-900 border-slate-900 checked:bg-slate-900 checked:border-slate-900 disabled:opacity-75 disabled:cursor-default" type="checkbox" value="color7" name="selectColor" />
                                            </div>
                                            <div>
                                                <input id="selectColor9" className="inline-block size-5 align-middle border rounded-sm appearance-none cursor-pointer bg-slate-200 border-slate-200 checked:bg-slate-200 checked:border-slate-200 disabled:opacity-75 disabled:cursor-default" type="checkbox" value="color7" name="selectColor" />
                                            </div>
                                            <div>
                                                <Link to="#!" className="flex items-center justify-center size-5 border rounded-sm border-slate-200 dark:border-zink-500">
                                                    <Pencil className="size-3" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6">
                                        <div className="inline-block mb-2 text-base font-medium">Size</div>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <div>
                                                <input id="selectSizeXS" className="hidden peer" type="checkbox" value="XS" name="selectSize" />
                                                <label htmlFor="selectSizeXS" className="flex items-center justify-center size-10 text-xs border rounded-md cursor-pointer border-slate-200 dark:border-zink-500 peer-checked:bg-custom-50 dark:peer-checked:bg-custom-500/20 peer-checked:border-custom-300 dark:peer-checked:border-custom-700 peer-disabled:bg-slate-50 dark:peer-disabled:bg-slate-500/15 peer-disabled:border-slate-100 dark:peer-disabled:border-slate-800 peer-disabled:cursor-default peer-disabled:text-slate-500 dark:peer-disabled:text-zink-200">XS</label>
                                            </div>
                                            <div>
                                                <input id="selectSizeS" className="hidden peer" type="checkbox" value="S" name="selectSize" defaultChecked />
                                                <label htmlFor="selectSizeS" className="flex items-center justify-center size-10 text-xs border rounded-md cursor-pointer border-slate-200 dark:border-zink-500 peer-checked:bg-custom-50 dark:peer-checked:bg-custom-500/20 peer-checked:border-custom-300 dark:peer-checked:border-custom-700 peer-disabled:bg-slate-50 dark:peer-disabled:bg-slate-500/15 peer-disabled:border-slate-100 dark:peer-disabled:border-slate-800 peer-disabled:cursor-default peer-disabled:text-slate-500 dark:peer-disabled:text-zink-200">S</label>
                                            </div>
                                            <div>
                                                <input id="selectSizeM" className="hidden peer" type="checkbox" value="M" name="selectSize" />
                                                <label htmlFor="selectSizeM" className="flex items-center justify-center size-10 text-xs border rounded-md cursor-pointer border-slate-200 dark:border-zink-500 peer-checked:bg-custom-50 dark:peer-checked:bg-custom-500/20 peer-checked:border-custom-300 dark:peer-checked:border-custom-700 peer-disabled:bg-slate-50 dark:peer-disabled:bg-slate-500/15 peer-disabled:border-slate-100 dark:peer-disabled:border-slate-800 peer-disabled:cursor-default peer-disabled:text-slate-500 dark:peer-disabled:text-zink-200">M</label>
                                            </div>
                                            <div>
                                                <input id="selectSizeL" className="hidden peer" type="checkbox" value="L" name="selectSize" />
                                                <label htmlFor="selectSizeL" className="flex items-center justify-center size-10 text-xs border rounded-md cursor-pointer border-slate-200 dark:border-zink-500 peer-checked:bg-custom-50 dark:peer-checked:bg-custom-500/20 peer-checked:border-custom-300 dark:peer-checked:border-custom-700 peer-disabled:bg-slate-50 dark:peer-disabled:bg-slate-500/15 peer-disabled:border-slate-100 dark:peer-disabled:border-slate-800 peer-disabled:cursor-default peer-disabled:text-slate-500 dark:peer-disabled:text-zink-200">L</label>
                                            </div>
                                            <div>
                                                <input id="selectSizeXL" className="hidden peer" type="checkbox" value="XL" name="selectSize" />
                                                <label htmlFor="selectSizeXL" className="flex items-center justify-center size-10 text-xs border rounded-md cursor-pointer border-slate-200 dark:border-zink-500 peer-checked:bg-custom-50 dark:peer-checked:bg-custom-500/20 peer-checked:border-custom-300 dark:peer-checked:border-custom-700 peer-disabled:bg-slate-50 dark:peer-disabled:bg-slate-500/15 peer-disabled:border-slate-100 dark:peer-disabled:border-slate-800 peer-disabled:cursor-default peer-disabled:text-slate-500 dark:peer-disabled:text-zink-200">XL</label>
                                            </div>
                                            <div>
                                                <input id="selectSize2XL" className="hidden peer" type="checkbox" value="2XL" name="selectSize" />
                                                <label htmlFor="selectSize2XL" className="flex items-center justify-center size-10 text-xs border rounded-md cursor-pointer border-slate-200 dark:border-zink-500 peer-checked:bg-custom-50 dark:peer-checked:bg-custom-500/20 peer-checked:border-custom-300 dark:peer-checked:border-custom-700 peer-disabled:bg-slate-50 dark:peer-disabled:bg-slate-500/15 peer-disabled:border-slate-100 dark:peer-disabled:border-slate-800 peer-disabled:cursor-default peer-disabled:text-slate-500 dark:peer-disabled:text-zink-200">2XL</label>
                                            </div>
                                            <div>
                                                <input id="selectSize3XL" className="hidden peer" type="checkbox" value="3XL" name="selectSize" />
                                                <label htmlFor="selectSize3XL" className="flex items-center justify-center size-10 text-xs border rounded-md cursor-pointer border-slate-200 dark:border-zink-500 peer-checked:bg-custom-50 dark:peer-checked:bg-custom-500/20 peer-checked:border-custom-300 dark:peer-checked:border-custom-700 peer-disabled:bg-slate-50 dark:peer-disabled:bg-slate-500/15 peer-disabled:border-slate-100 dark:peer-disabled:border-slate-800 peer-disabled:cursor-default peer-disabled:text-slate-500 dark:peer-disabled:text-zink-200">3XL</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-12">
                                        <label htmlFor="description" className="inline-block mb-2 text-base font-medium">Description</label>
                                        <div className="ckeditor-classic">
                                            <CKEditor
                                                editor={ClassicEditor as any}
                                                data=""
                                            />
                                        </div>
                                    </div>
                                    <div className="xl:col-span-6">
                                        <label htmlFor="price" className="inline-block mb-2 text-base font-medium">Price</label>
                                        <input type="number" step="0.01" id="price" className="form-input" placeholder="0.00" />
                                    </div>
                                    <div className="xl:col-span-6">
                                        <label htmlFor="marketPrice" className="inline-block mb-2 text-base font-medium">Market Price</label>
                                        <input type="number" step="0.01" id="marketPrice" className="form-input" placeholder="0.00" />
                                    </div>
                                    <div className="xl:col-span-6">
                                        <label htmlFor="skinType" className="inline-block mb-2 text-base font-medium">Skin Type</label>
                                        <Select
                                            className="react-select"
                                            options={skinTypeOptions}
                                            isSearchable={true}
                                            isMulti={true}
                                            name="skinType"
                                            id="skinType"
                                        />
                                    </div>
                                    <div className="xl:col-span-6">
                                        <label htmlFor="productDiscounts" className="inline-block mb-2 text-base font-medium">Discounts</label>
                                        <input type="number" id="productDiscounts" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="0%" required />
                                    </div>
                                    <div className="xl:col-span-4">
                                        <label htmlFor="taxApplicable" className="inline-block mb-2 text-base font-medium">TAX Applicable</label>
                                        <select className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" data-choices data-choices-search-false name="taxApplicable" id="taxApplicable">
                                            <option value="">Select TAX Applicable</option>
                                            <option value="none">none</option>
                                            <option value="Exclusive">Exclusive</option>
                                            <option value="Professional">Professional</option>
                                            <option value="Entertainment">Entertainment</option>
                                        </select>
                                    </div>
                                    <div className="xl:col-span-4">
                                        <label htmlFor="publishDateTime" className="inline-block mb-2 text-base font-medium">Publish Date & Time</label>
                                        <Flatpickr
                                            id="publishDateTime"
                                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                            options={{
                                                dateFormat: "d M, Y",
                                                enableTime: true,
                                            }}
                                            placeholder='Select date & time'
                                        />
                                    </div>
                                    <div className="xl:col-span-4">
                                        <label htmlFor="productStatus" className="inline-block mb-2 text-base font-medium">Status</label>
                                        <select className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" data-choices data-choices-search-false name="productStatus" id="productStatus">
                                            <option value="Draft">Draft</option>
                                            <option value="Published">Published</option>
                                            <option value="Scheduled">Scheduled</option>
                                            <option value="Entertainment">Entertainment</option>
                                        </select>
                                    </div>
                                    <div className="xl:col-span-4">
                                        <label htmlFor="productVisibility" className="inline-block mb-2 text-base font-medium">Visibility</label>
                                        <select className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" data-choices data-choices-search-false name="productVisibility" id="productVisibility">
                                            <option value="Public">Public</option>
                                            <option value="Hidden">Hidden</option>
                                        </select>
                                    </div>
                                    <div className="lg:col-span-2 xl:col-span-12">
                                        <label htmlFor="productTag" className="inline-block mb-2 text-base font-medium">Product Tag</label>
                                        <input className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="productTag" data-choices data-choices-text-unique-true type="text" value="Fashion, Clothes, Headphones" />
                                    </div>
                                </div>
                                <div className="flex justify-end gap-2 mt-4">
                                    <button type="reset" className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-700 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10">Reset</button>
                                    <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Create Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AddNew;

