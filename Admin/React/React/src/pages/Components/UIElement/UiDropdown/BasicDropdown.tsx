import React from "react";
import { Dropdown } from "Common/Components/Dropdown";
import { ChevronDown } from "lucide-react";

const BasicDropdown = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-gray-800 text-15 dark:text-white">Basic Dropdown</h6>
                    <div className="flex flex-wrap items-center gap-2">
                        <Dropdown className="relative">
                            <Dropdown.Trigger type="button" className="text-white dropdown-toggle btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                Dropdown Button <ChevronDown className="inline-block size-4 ltr:ml-1 rtl:mr-1"></ChevronDown>
                            </Dropdown.Trigger>

                            <Dropdown.Content placement="right-end" as="ul" className="absolute z-50 py-2 mt-1 list-none bg-white rounded-md shadow-md ltr:text-left rtl:text-right dropdown-menu min-w-max dark:bg-zink-600" aria-labelledby="dropdownMenuButton">
                                <li>
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="#!">Action</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="#!">Another action</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="#!">Something else here</a>
                                </li>
                                <li className="pt-2 mt-2 border-t border-slate-200 dark:border-zink-500">
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="#!">Your Link</a>
                                </li>
                            </Dropdown.Content>
                        </Dropdown>

                        <Dropdown className="relative">
                            <Dropdown.Trigger type="a" href="#!" className="bg-white border-white dropdown-toggle text-custom-500 btn hover:text-custom-700 focus:text-custom-700 active:text-custom-700 dark:bg-zink-700 dark:border-zink-700" id="dropdownMenuLink" data-bs-toggle="dropdown">
                                Link Dropdown <ChevronDown className="inline-block size-4 ltr:ml-1 rtl:mr-1"></ChevronDown>
                            </Dropdown.Trigger>

                            <Dropdown.Content placement="right-end" as="ul" className="absolute z-50 py-2 mt-1 list-none bg-white rounded-md shadow-md ltr:text-left rtl:text-right dropdown-menu min-w-max dark:bg-zink-600" aria-labelledby="dropdownMenuLink">
                                <li>
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="#!">Action</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="#!">Another action</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="#!">Something else here</a>
                                </li>
                                <li className="pt-2 mt-2 border-t border-slate-200 dark:border-zink-500">
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="#!">Your Link</a>
                                </li>
                            </Dropdown.Content>
                        </Dropdown>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BasicDropdown;