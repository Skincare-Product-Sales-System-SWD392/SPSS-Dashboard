import React, { useState } from 'react';
import BreadCrumb from 'Common/BreadCrumb';

// Icons
import { Trash2, Save, MoreHorizontal, FileEdit } from 'lucide-react';

// Images
import logoSm from "assets/images/logo-sm.png";
import { Dropdown } from 'Common/Components/Dropdown';
import { Link } from 'react-router-dom';
import DeleteModal from 'Common/DeleteModal';

const Overview = () => {

    // Delete Modal
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    const deleteToggle = () => setDeleteModal(!deleteModal);

    return (
        <React.Fragment>
            <BreadCrumb title='Overview' pageTitle='Invoices' />
            <DeleteModal show={deleteModal} onHide={deleteToggle} onDelete={deleteToggle} />
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
                <div className="xl:col-span-12">
                    <div className="card print:shadow-none print:border-none">
                        <div className="card-body print:hidden">
                            <div className="flex flex-col gap-5 md:items-center md:flex-row">
                                <div className="grow">
                                    <h6 className="mb-1 text-16">#TW15090257</h6>
                                    <ul className="flex items-center gap-3">
                                        <li className="text-slate-500">Create: 10 July, 2023</li>
                                        <li className="text-slate-500">Due: 10 July, 2023</li>
                                    </ul>
                                </div>
                                <div className="flex items-center gap-2 shrink-0">
                                    <button type="button" className="text-white bg-purple-500 border-purple-500 btn hover:text-white hover:bg-purple-600 hover:border-purple-600 focus:text-white focus:bg-purple-600 focus:border-purple-600 focus:ring focus:ring-purple-100 active:text-white active:bg-purple-600 active:border-purple-600 active:ring active:ring-purple-100 dark:ring-purple-400/10">Download</button>
                                    <button onClick={() => window.print()} type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><Save className="inline-block size-4 ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Save & Print</span></button>
                                    <Dropdown className="relative">
                                        <Dropdown.Trigger className="flex items-center justify-center w-[38.39px] h-[38.39px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20" id="categoryNotes1">
                                            <MoreHorizontal className="size-4" />
                                        </Dropdown.Trigger>
                                        <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md min-w-[10rem] dark:bg-zink-600" aria-labelledby="categoryNotes1">
                                            <li>
                                                <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="/apps-invoice-add-new">
                                                    <FileEdit className="inline-block size-3 mr-1" /> <span className="align-middle">Edit</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={deleteToggle}>
                                                    <Trash2 className="inline-block size-3 mr-1" /> <span className="align-middle">Delete</span>
                                                </Link>
                                            </li>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        <div className="!pt-0 card-body">
                            <div className="p-5 border rounded-md md:p-8 border-slate-200 dark:border-zink-500 print:p-0">
                                <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                                    <div className="text-center xl:col-span-2 ltr:xl:text-left rtl:xl:text-right">
                                        <div className="flex items-center justify-center size-16 mx-auto rounded-md bg-slate-100 dark:bg-zink-600 xl:mx-0">
                                            <img src={logoSm} alt="" className="h-8" />
                                        </div>
                                        <h5 className="mt-4 mb-1">Themesdesign</h5>
                                        <p className="text-slate-500 dark:text-zink-200">IT Software Company</p>
                                    </div>
                                    <div className="ltr:xl:text-right rtl:xl:text-left xl:col-start-10 xl:col-span-3">
                                        <p className="mb-1 text-slate-500 dark:text-zink-200">Legal Registration No: <span className="font-semibold">2155420</span></p>
                                        <p className="mb-1 truncate text-slate-500 dark:text-zink-200">Email: <span className="font-semibold">tailwick@themesdesign.com</span></p>
                                        <p className="mb-1 text-slate-500 dark:text-zink-200">Website: <Link to="//themesdesign.in" target="_blank" rel="noreferrer" className="font-semibold underline text-custom-500">www.themesdesign.in</Link></p>
                                        <p className="text-slate-500 dark:text-zink-200">Contact No: <span className="font-semibold">+(01) 123 678 9654</span></p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 mt-6 text-center divide-y md:divide-y-0 md:divide-x rtl:divide-x-reverse divide-dashed md:grid-cols-4 divide-slate-200 dark:divide-zink-500">
                                    <div className="p-3">
                                        <h6 className="mb-1">#TW15090254</h6>
                                        <p className="text-slate-500 dark:text-zink-200">Invoice No</p>
                                    </div>
                                    <div className="p-3">
                                        <h6 className="mb-1">10 July, 2023</h6>
                                        <p className="text-slate-500 dark:text-zink-200">Create Date</p>
                                    </div>
                                    <div className="p-3">
                                        <h6 className="mb-1"><span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">Paid</span></h6>
                                        <p className="text-slate-500 dark:text-zink-200">Payment Status</p>
                                    </div>
                                    <div className="p-3">
                                        <h6 className="mb-1">$873.96</h6>
                                        <p className="text-slate-500 dark:text-zink-200">Total Amount</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-2">
                                    <div>
                                        <p className="mb-2 text-sm uppercase text-slate-500 dark:text-zink-200">Shipping Address</p>
                                        <h6 className="mb-1 text-15">Paula Keenan</h6>
                                        <p className="mb-1 text-slate-500 dark:text-zink-200">176 Arvid Crest Sheastad, IA</p>
                                        <p className="mb-1 text-slate-500 dark:text-zink-200">+(211) 0123 456 897</p>
                                    </div>
                                    <div>
                                        <p className="mb-2 text-sm uppercase text-slate-500 dark:text-zink-200">Billing Address</p>
                                        <h6 className="mb-1 text-15">Paula Keenan</h6>
                                        <p className="mb-1 text-slate-500 dark:text-zink-200">176 Arvid Crest Sheastad, IA</p>
                                        <p className="mb-1 text-slate-500 dark:text-zink-200">+(211) 0123 456 897</p>
                                        <p className="mb-1 text-slate-500 dark:text-zink-200">TAX No. 5415421</p>
                                    </div>
                                </div>

                                <div className="mt-6 overflow-x-auto">
                                    <table className="w-full whitespace-nowrap">
                                        <thead className="ltr:text-left rtl:text-right">
                                            <tr>
                                                <th className="px-3.5 py-2.5 font-semibold text-slate-500 border-b border-slate-200 dark:text-zink-200 dark:border-zink-500">#</th>
                                                <th className="px-3.5 py-2.5 font-semibold text-slate-500 border-b border-slate-200 dark:text-zink-200 dark:border-zink-500">Item Name</th>
                                                <th className="px-3.5 py-2.5 font-semibold text-slate-500 border-b border-slate-200 dark:text-zink-200 dark:border-zink-500">Rate</th>
                                                <th className="px-3.5 py-2.5 font-semibold text-slate-500 border-b border-slate-200 dark:text-zink-200 dark:border-zink-500">Quantity</th>
                                                <th className="px-3.5 py-2.5 font-semibold text-slate-500 border-b border-slate-200 dark:text-zink-200 dark:border-zink-500">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">1</td>
                                                <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">
                                                    <h6 className="mb-1">Nazox - Premium Admin & Dashboard</h6>
                                                    <p className="text-slate-500 dark:text-zink-200">Build with Bootstrap, React JS, Angular, Vue etc.</p>
                                                </td>
                                                <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">$24.00</td>
                                                <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">2</td>
                                                <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">$48</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">2</td>
                                                <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">
                                                    <h6 className="mb-1">Webadmin - Admin & Dashboard</h6>
                                                    <p className="text-slate-500 dark:text-zink-200">Build with Bootstrap, React JS, Angular, Vue etc.</p>
                                                </td>
                                                <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">$25.00</td>
                                                <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">4</td>
                                                <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">$100</td>
                                            </tr>
                                            <tr>
                                                <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">1</td>
                                                <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">
                                                    <h6 className="mb-1">Tocly - Admin & Dashboard</h6>
                                                    <p className="text-slate-500 dark:text-zink-200">Build with Bootstrap, React JS, Angular, Vue etc.</p>
                                                </td>
                                                <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">$16.00</td>
                                                <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">9</td>
                                                <td className="px-3.5 py-2.5 border-b border-slate-200 dark:border-zink-500">$144</td>
                                            </tr>
                                        </tbody>
                                        <tbody className="before:block before:h-3">
                                            <tr>
                                                <td colSpan={3}></td>
                                                <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                                                    Sub Total
                                                </td>
                                                <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                                                    $292
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={3}></td>
                                                <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                                                    Estimated Tax (18%)
                                                </td>
                                                <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                                                    $52.56
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={3}></td>
                                                <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                                                    Item Discounts (15%)
                                                </td>
                                                <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                                                    -$43.8
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={3}></td>
                                                <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                                                    Shipping Charge
                                                </td>
                                                <td className="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                                                    $29
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colSpan={3}></td>
                                                <td className="border-b border-slate-200 px-3.5 py-2.5 font-medium dark:border-zink-500">
                                                    Total Amount
                                                </td>
                                                <td className="border-b border-slate-200 px-3.5 py-2.5 font-medium dark:border-zink-500">
                                                    $329.76
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="my-5">
                                    <p className="mb-2 text-sm uppercase text-slate-500 dark:text-zink-200">Payments Details</p>
                                    <p className="mb-1 text-slate-500 dark:text-zink-200">Payment Method: Credit Card</p>
                                    <p className="mb-1 text-slate-500 dark:text-zink-200">Card Holder: Paula Keenan</p>
                                    <p className="mb-1 text-slate-500 dark:text-zink-200">Card Number: xxxx xxxx xxxx 1402</p>
                                    <p className="mb-0 text-slate-500 dark:text-zink-200">Total Amount: <b>$755.96</b></p>
                                </div>

                                <div className="flex gap-1 px-4 py-3 text-sm border rounded-md md:items-center border-sky-200 text-sky-500 bg-sky-50 dark:bg-sky-400/20 dark:border-sky-500/50">
                                    <p><span className="font-bold">NOTES:</span> All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Overview;
