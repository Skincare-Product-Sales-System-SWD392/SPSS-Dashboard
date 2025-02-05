import React from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import Flatpickr from 'react-flatpickr';

// Icons
import { Trash2, Save, Minus, Plus, Eye, RefreshCcw, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const AddNew = () => {

    return (
        <React.Fragment>
            <BreadCrumb title='Add New' pageTitle='Invoices' />
            <div className="grid items-center grid-cols-1 gap-5 mb-5 xl:grid-cols-12">
                <div className="xl:col-span-2">
                    <h5 className="text-16">New Invoice</h5>
                </div>
                <div className="xl:col-span-3 xl:col-start-10">
                    <div className="flex justify-end gap-2">
                        <button type="button" className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"><Eye className="inline-block size-4 mr-1" /> <span className="align-middle">Preview</span></button>
                        <button type="button" className="text-white bg-purple-500 border-purple-500 btn hover:text-white hover:bg-purple-600 hover:border-purple-600 focus:text-white focus:bg-purple-600 focus:border-purple-600 focus:ring focus:ring-purple-100 active:text-white active:bg-purple-600 active:border-purple-600 active:ring active:ring-purple-100 dark:ring-purple-400/10">Save Draft</button>
                        <button type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><Save className="inline-block size-4 mr-1" /> <span className="align-middle">Save & Download</span></button>
                    </div>
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <form action="#!">
                        <h6 className="mb-4 text-gray-800 underline text-16 dark:text-zink-50">Generale Info:</h6>
                        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                            <div className="xl:col-span-3">
                                <label htmlFor="invoiceID" className="inline-block mb-2 text-base font-medium">Invoice No.</label>
                                <input type="text" id="invoiceID" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter invoice no." value="#TW15090251" disabled required />
                            </div>
                            <div className="xl:col-span-3">
                                <label htmlFor="invoiceNo" className="inline-block mb-2 text-base font-medium">Invoice Date</label>
                                <Flatpickr
                                    id="dateRangeFilterInput"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    options={{
                                        dateFormat: "d M, Y"
                                    }}
                                    placeholder='Invoice date'
                                />


                            </div>
                            <div className="xl:col-span-3">
                                <label htmlFor="invoiceDue" className="inline-block mb-2 text-base font-medium">Invoice Due</label>
                                <Flatpickr
                                    id="invoiceDue"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    options={{
                                        dateFormat: "d M, Y"
                                    }}
                                    placeholder='Invoice Due'
                                />
                            </div>
                            <div className="xl:col-span-3">
                                <label htmlFor="legalRegistrationNo" className="inline-block mb-2 text-base font-medium">Legal Registration No.</label>
                                <input type="number" id="legalRegistrationNo" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Legal Registration No" required />
                            </div>
                            <div className="xl:col-span-3">
                                <label htmlFor="emailInvoiceInput" className="inline-block mb-2 text-base font-medium">Email</label>
                                <input type="email" id="emailInvoiceInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="tailwick@themesdesign.com" required />
                            </div>
                            <div className="xl:col-span-3">
                                <label htmlFor="websiteInput" className="inline-block mb-2 text-base font-medium">Website</label>
                                <input type="text" id="websiteInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="www.themesdesign.in" required />
                            </div>
                            <div className="xl:col-span-3">
                                <label htmlFor="contactInput" className="inline-block mb-2 text-base font-medium">Contact US</label>
                                <input type="number" id="contactInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="(241) 1234 567 8900" required />
                            </div>
                            <div className="xl:col-span-3">
                                <label htmlFor="paymentStatus" className="inline-block mb-2 text-base font-medium">Payment Status</label>
                                <select className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" data-choices data-choices-search-false name="paymentStatus" id="paymentStatus">
                                    <option defaultValue="">Select Status</option>
                                    <option value="Paid">Paid</option>
                                    <option value="Unpaid">Unpaid</option>
                                    <option value="Cancel">Cancel</option>
                                    <option value="Refund">Refund</option>
                                </select>
                            </div>
                        </div>

                        <h6 className="my-5 underline text-16">Shipping Info:</h6>
                        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12 changeAddress">
                            <div className="xl:col-span-3">
                                <label htmlFor="fullNameShippingInput" className="inline-block mb-2 text-base font-medium">Full Name</label>
                                <input type="text" id="fullNameShippingInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Full Name" required />
                            </div>
                            <div className="xl:col-span-3">
                                <label htmlFor="phoneNoShippingInput" className="inline-block mb-2 text-base font-medium">Phone No.</label>
                                <input type="number" id="phoneNoShippingInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="(00) 1234 567 8956" required />
                            </div>
                            <div className="xl:col-span-3">
                                <label htmlFor="alternativeNoShippingInput" className="inline-block mb-2 text-base font-medium">Alternative No.</label>
                                <input type="number" id="alternativeNoShippingInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="(00) 1234 567 8956" required />
                            </div>
                            <div className="xl:col-span-3">
                                <label htmlFor="taxShippingInput" className="inline-block mb-2 text-base font-medium">TAX No.</label>
                                <input type="number" id="taxShippingInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="12-34567974" required />
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="addressShippingInput" className="inline-block mb-2 text-base font-medium">Address</label>
                                <textarea className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Address" id="addressShippingInput" rows={3}></textarea>
                            </div>
                        </div>

                        <div className="flex items-center mt-5">
                            <div className="relative inline-block w-10 mr-2 align-middle transition duration-200 ease-in">
                                <input type="checkbox" name="customSoftSwitch" id="customSoftSwitch" className="absolute block size-5 transition duration-300 ease-linear border-2 rounded-full appearance-none cursor-pointer border-slate-200 dark:border-zink-600 bg-white/80 dark:bg-zink-400 peer/published checked:bg-custom-500 dark:checked:bg-custom-500 ltr:checked:right-0 rtl:checked:left-0 checked:border-custom-100 dark:checked:border-custom-900 arrow-none checked:bg-none" />
                                <label htmlFor="customSoftSwitch" className="block h-5 overflow-hidden duration-300 ease-linear border rounded-full cursor-pointer cursor-pointertransition border-slate-200 dark:border-zink-500 bg-slate-200 dark:bg-zink-600 peer-checked/published:bg-custom-100 dark:peer-checked/published:bg-custom-900 peer-checked/published:border-custom-100 dark:peer-checked/published:border-custom-900"></label>
                            </div>
                            <label htmlFor="customSoftSwitch" className="inline-block text-base font-medium">Will your Shipping & Billing address same?</label>
                        </div>

                        <h6 className="my-5 underline text-16">Billing Info:</h6>
                        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                            <div className="xl:col-span-3">
                                <label htmlFor="fullNameBillingInput" className="inline-block mb-2 text-base font-medium">Full Name</label>
                                <input type="text" id="fullNameBillingInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Full Name" required />
                            </div>
                            <div className="xl:col-span-3">
                                <label htmlFor="phoneNoBillingInput" className="inline-block mb-2 text-base font-medium">Phone No.</label>
                                <input type="text" id="phoneNoBillingInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="(00) 1234 567 8956" required />
                            </div>
                            <div className="xl:col-span-3">
                                <label htmlFor="alternativeNoBillingInput" className="inline-block mb-2 text-base font-medium">Alternative No.</label>
                                <input type="text" id="alternativeNoBillingInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="(00) 1234 567 8956" required />
                            </div>
                            <div className="xl:col-span-3">
                                <label htmlFor="taxBillingInput" className="inline-block mb-2 text-base font-medium">TAX No.</label>
                                <input type="text" id="taxBillingInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="12-34567974" required />
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="addressBillingInput" className="inline-block mb-2 text-base font-medium">Address</label>
                                <textarea className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Address" id="addressBillingInput" rows={3}></textarea>
                            </div>
                        </div>

                        <h6 className="my-5 underline text-16">Products Info:</h6>

                        <div className="overflow-x-auto">
                            <table className="w-full whitespace-nowrap" >
                                <thead>
                                    <tr>
                                        <th className="px-3.5 py-2.5 font-medium text-sm text-slate-500 uppercase border border-slate-200 dark:text-zink-200 dark:border-zink-500">Item Name</th>
                                        <th className="px-3.5 py-2.5 font-medium text-sm text-slate-500 uppercase border border-slate-200 dark:text-zink-200 dark:border-zink-500">Quantity</th>
                                        <th className="px-3.5 py-2.5 font-medium text-sm text-slate-500 uppercase border border-slate-200 dark:text-zink-200 dark:border-zink-500">Price</th>
                                        <th className="px-3.5 py-2.5 font-medium text-sm text-slate-500 uppercase border border-slate-200 dark:text-zink-200 dark:border-zink-500">Discount</th>
                                        <th className="px-3.5 py-2.5 font-medium text-sm text-slate-500 uppercase border border-slate-200 dark:text-zink-200 dark:border-zink-500">TAX</th>
                                        <th className="px-3.5 py-2.5 font-medium text-sm text-slate-500 uppercase border border-slate-200 dark:text-zink-200 dark:border-zink-500 w-44">Total</th>
                                    </tr>
                                </thead>
                                <tbody className="before:block before:h-3 item-list">
                                    <tr className="item">
                                        <td className="border border-slate-200 dark:border-zink-500">
                                            <input type="text" id="itemName1" className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Item Name" required />
                                        </td>
                                        <td className="w-40 border border-slate-200 dark:border-zink-500">
                                            <div className="flex justify-center text-center input-step">
                                                <button type="button" className="border size-9 leading-[15px] btn-minus bg-white dark:bg-zink-700 dark:border-zink-500 ltr:rounded-l rtl:rounded-r transition-all duration-200 ease-linear border-slate-200 text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"><Minus className="inline-block size-4" /></button>
                                                <input type="number" className="w-12 text-center ltr:pl-2 rtl:pr-2 h-9 border-y product-quantity dark:bg-zink-700 focus:shadow-none dark:border-zink-500 item-quantity" value="0" min="0" max="100" readOnly />
                                                <button type="button" className="transition-all duration-200 ease-linear bg-white border dark:bg-zink-700 dark:border-zink-500 ltr:rounded-r rtl:rounded-l size-9 border-slate-200 btn-plus text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"><Plus className="inline-block size-4" /></button>
                                            </div>
                                        </td>
                                        <td className="w-40 border border-slate-200 dark:border-zink-500">
                                            <input type="number" id="itemName1" className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 item-price" placeholder="$00.00" required />
                                        </td>
                                        <td className="w-40 border border-slate-200 dark:border-zink-500">
                                            <input type="text" id="itemName1" className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 item-discount" placeholder="0%" required />
                                        </td>
                                        <td className="w-40 border border-slate-200 dark:border-zink-500">
                                            <input type="text" id="itemName1" className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 item-text" placeholder="0%" required />
                                        </td>
                                        <td className="border border-slate-200 dark:border-zink-500" rowSpan={2}>
                                            <div className="mb-1">
                                                <input type="text" id="ItemTotal" className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 item-line-price" placeholder="$00.00" readOnly />
                                            </div>
                                            <input type="text" id="itemDiscountsInput" className="px-3.5 pb-2.5 pt-0 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 cart-discount" placeholder="-$00.00" readOnly />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-200 dark:border-zink-500">
                                            <input type="text" id="itemdescription1" className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter Description (Optional)" required />
                                        </td>
                                        <td className="border border-slate-200 px-3.5 py-1.5 text-center dark:border-zink-500">
                                            <button type="button" className="px-2 py-1.5 text-xs text-red-500 bg-red-100 btn hover:text-white hover:bg-red-600 focus:text-white focus:bg-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:ring active:ring-red-100 dark:bg-red-500/20 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white dark:focus:bg-red-500 dark:focus:text-white dark:active:bg-red-500 dark:active:text-white dark:ring-red-400/20 product-removal"><Trash2 className="inline-block size-3 mr-1 align-middle" /> <span className="align-middle">Delete</span></button>
                                        </td>
                                        <td colSpan={3} className="border border-slate-200 dark:border-zink-500"></td>
                                    </tr>
                                </tbody>
                                <tbody className="before:block before:h-3 item-list">
                                    <tr className="item">
                                        <td className="border border-slate-200 dark:border-zink-500">
                                            <input type="text" id="itemName1" className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Item Name" required />
                                        </td>
                                        <td className="w-40 border border-slate-200 dark:border-zink-500">
                                            <div className="flex justify-center text-center input-step">
                                                <button type="button" className="border size-9 leading-[15px] btn-minus bg-white dark:bg-zink-700 dark:border-zink-500 ltr:rounded-l rtl:rounded-r transition-all duration-200 ease-linear border-slate-200 text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"><Minus className="inline-block size-4" /></button>
                                                <input type="number" className="w-12 text-center ltr:pl-2 rtl:pr-2 h-9 border-y product-quantity dark:bg-zink-700 focus:shadow-none dark:border-zink-500 item-quantity" value="0" min="0" max="100" readOnly />
                                                <button type="button" className="transition-all duration-200 ease-linear bg-white border dark:bg-zink-700 dark:border-zink-500 ltr:rounded-r rtl:rounded-l size-9 border-slate-200 btn-plus text-slate-500 dark:text-zink-200 hover:bg-custom-500 dark:hover:bg-custom-500 hover:text-custom-50 dark:hover:text-custom-50 hover:border-custom-500 dark:hover:border-custom-500 focus:bg-custom-500 dark:focus:bg-custom-500 focus:border-custom-500 dark:focus:border-custom-500 focus:text-custom-50 dark:focus:text-custom-50"><Plus className="inline-block size-4" /></button>
                                            </div>
                                        </td>
                                        <td className="w-40 border border-slate-200 dark:border-zink-500">
                                            <input type="number" id="itemName1" className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 item-price" placeholder="$00.00" required />
                                        </td>
                                        <td className="w-40 border border-slate-200 dark:border-zink-500">
                                            <input type="text" id="itemName1" className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 item-discount" placeholder="0%" required />
                                        </td>
                                        <td className="w-40 border border-slate-200 dark:border-zink-500">
                                            <input type="text" id="itemName1" className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 item-text" placeholder="0%" required />
                                        </td>
                                        <td className="border border-slate-200 dark:border-zink-500" rowSpan={2}>
                                            <div className="mb-1">
                                                <input type="text" id="ItemTotal" className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 item-line-price" placeholder="$00.00" readOnly />
                                            </div>
                                            <input type="text" id="itemDiscountsInput" className="px-3.5 pb-2.5 pt-0 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 cart-discount" placeholder="-$00.00" readOnly />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-200 dark:border-zink-500">
                                            <input type="text" id="itemdescription1" className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter Description (Optional)" required />
                                        </td>
                                        <td className="border border-slate-200 px-3.5 py-1.5 text-center dark:border-zink-500">
                                            <button type="button" className="px-2 py-1.5 text-xs text-red-500 bg-red-100 btn hover:text-white hover:bg-red-600 focus:text-white focus:bg-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:ring active:ring-red-100 dark:bg-red-500/20 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white dark:focus:bg-red-500 dark:focus:text-white dark:active:bg-red-500 dark:active:text-white dark:ring-red-400/20 product-removal"><Trash2 className="inline-block size-3 mr-1 align-middle" /> <span className="align-middle">Delete</span></button>
                                        </td>
                                        <td colSpan={3} className="border border-slate-200 dark:border-zink-500"></td>
                                    </tr>
                                </tbody>

                                <tbody className="before:block before:h-4" id="invoiceTable">
                                    <tr>
                                        <td colSpan={6}>
                                            <Link to="#" id="addBtn"><button type="button" className="bg-white border-dashed text-custom-500 btn border-custom-500 hover:text-custom-500 hover:bg-custom-50 hover:border-custom-600 focus:text-custom-600 focus:bg-custom-50 focus:border-custom-600 active:text-custom-600 active:bg-custom-50 active:border-custom-600 dark:bg-zink-700 dark:ring-custom-400/20 dark:hover:bg-custom-800/20 dark:focus:bg-custom-800/20 dark:active:bg-custom-800/20"><Plus className="inline-block size-3 mr-1 align-middle" /> <span className="align-middle">Add Item</span></button></Link>                                        </td>
                                    </tr>
                                </tbody>
                                <tbody className="before:block before:h-3" id="totalAmount">
                                    <tr>
                                        <td colSpan={4}></td>
                                        <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:text-zink-200 dark:border-zink-500">
                                            Sub Total
                                        </td>
                                        <td className="font-medium border-b border-slate-200 dark:border-zink-500">
                                            <input type="text" id="subTotale" className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 cart-subtotal" placeholder="$00.00" readOnly />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4}></td>
                                        <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:text-zink-200 dark:border-zink-500">
                                            Estimated Tax (18%)
                                        </td>
                                        <td className="font-medium border-b border-slate-200 dark:border-zink-500">
                                            <input type="text" id="estimatedTax" className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 cart-tax" placeholder="$00.00" readOnly />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4}></td>
                                        <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:text-zink-200 dark:border-zink-500">
                                            Item Discounts
                                        </td>
                                        <td className="font-medium border-b border-slate-200 dark:border-zink-500 text-slate-500">
                                            <input type="text" id="itemDiscounts" className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 cart-discount" placeholder="-$00.00" readOnly />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4}></td>
                                        <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:text-zink-200 dark:border-zink-500">
                                            Shipping Charge
                                        </td>
                                        <td className="font-medium border-b border-slate-200 dark:border-zink-500">
                                            <input type="text" id="shippingCharge" className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 cart-shipping" placeholder="$00.00" readOnly />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={4}></td>
                                        <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:text-zink-200 dark:border-zink-500">
                                            Total Amount
                                        </td>
                                        <td className="font-medium border-b border-slate-200 dark:border-zink-500">
                                            <input type="text" id="totalAmount" className="px-3.5 py-2.5 border-none form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 cart-total" placeholder="$00.00" readOnly />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h6 className="my-5 underline text-16">Payments Details:</h6>
                        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                            <div className="xl:col-span-3">
                                <label htmlFor="paymentMethod" className="inline-block mb-2 text-base font-medium">Full Name</label>
                                <select className="form-input border-slate-300 focus:outline-none focus:border-custom-500" data-choices data-choices-search-false name="paymentMethod" id="paymentMethod">
                                    <option defaultValue="Select Method">Select Method</option>
                                    <option value="Credit Card">Credit Card</option>
                                    <option value="Paypal">Paypal</option>
                                    <option value="Paypal">Paypal</option>
                                    <option value="American Express">American Express</option>
                                </select>
                            </div>
                            <div className="xl:col-span-3">
                                <label htmlFor="cardHolderName" className="inline-block mb-2 text-base font-medium">Card Holder Name</label>
                                <input type="number" id="cardHolderName" inputMode="numeric" pattern="[0-9\s]{13,19}" autoComplete="cc-number" maxLength={19} className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Full Name" required />
                            </div>
                            <div className="xl:col-span-3">
                                <label htmlFor="cardNumber" className="inline-block mb-2 text-base font-medium">Card Number</label>
                                <input type="text" id="cardNumber" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="xxxx xxxx xxxx xxxx" required />
                            </div>
                            <div className="xl:col-span-3">
                                <label htmlFor="totalPayment" className="inline-block mb-2 text-base font-medium ">Total Payment</label>
                                <input type="text" id="totalPayment" className=" tform-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200otalPaymentinput" placeholder="$00.00" required />
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="taxBillingInput" className="inline-block mb-2 text-base font-medium">Notes</label>
                                <textarea className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter notes pertaining to the customer or payment" id="taxBillingInput" rows={3}></textarea>
                            </div>
                        </div>

                        <div className="flex justify-end gap-2 mt-5">
                            <button type="button" className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"><RefreshCcw className="inline-block size-4 mr-1" /> <span className="align-middle">Reset</span></button>
                            <button type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><Save className="inline-block size-4 mr-1" /> <span className="align-middle">Save</span></button>
                            <button type="button" className="text-white bg-green-500 border-green-500 btn hover:text-white hover:bg-green-600 hover:border-green-600 focus:text-white focus:bg-green-600 focus:border-green-600 focus:ring focus:ring-green-100 active:text-white active:bg-green-600 active:border-green-600 active:ring active:ring-green-100 dark:ring-green-400/10"><Download className="inline-block size-4 mr-1" /> <span className="align-middle">Download</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AddNew;
