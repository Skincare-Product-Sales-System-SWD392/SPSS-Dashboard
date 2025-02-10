import React from "react";
import { Dropdown } from "Common/Components/Dropdown";
import { ChevronDown } from "lucide-react";

const VariantDropdown = () => {
    return (
        <React.Fragment>
            <div className="card xl:col-span-2">
                <div className="card-body">
                    <h6 className="mb-4 text-gray-800 text-15 dark:text-white">Basic Dropdown</h6>
                    <div className="flex flex-wrap items-center gap-2">
                        <Dropdown className="relative">
                            <Dropdown.Trigger type="button" className="text-white dropdown-toggle btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20" id="dropdownColor1" data-bs-toggle="dropdown">
                                Custom Dropdown <ChevronDown className="inline-block size-4 ltr:ml-1 rtl:mr-1"></ChevronDown>
                            </Dropdown.Trigger>

                            <Dropdown.Content placement="right-end" as='ul' className="absolute z-50 py-2 mt-1 list-none bg-white rounded-md shadow-md ltr:text-left rtl:text-right dropdown-menu min-w-max dark:bg-zink-600" aria-labelledby="dropdownColor1">
                                <li>
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-custom-500 dropdown-item hover:bg-custom-50 hover:text-custom-600 focus:bg-custom-50 focus:text-custom-600 dark:text-custom-500 dark:hover:bg-custom-500/20 dark:hover:text-custom-500 dark:focus:bg-custom-500/20 dark:focus:text-custom-500" href="#!">Action</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-custom-500 dropdown-item hover:bg-custom-50 hover:text-custom-600 focus:bg-custom-50 focus:text-custom-600 dark:text-custom-500 dark:hover:bg-custom-500/20 dark:hover:text-custom-500 dark:focus:bg-custom-500/20 dark:focus:text-custom-500" href="#!">Another action</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-custom-500 dropdown-item hover:bg-custom-50 hover:text-custom-600 focus:bg-custom-50 focus:text-custom-600 dark:text-custom-500 dark:hover:bg-custom-500/20 dark:hover:text-custom-500 dark:focus:bg-custom-500/20 dark:focus:text-custom-500" href="#!">Something else here</a>
                                </li>
                                <li className="pt-2 mt-2 border-t border-slate-200 dark:border-zink-500">
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-custom-500 dropdown-item hover:bg-custom-50 hover:text-custom-600 focus:bg-custom-50 focus:text-custom-600 dark:text-custom-500 dark:hover:bg-custom-500/20 dark:hover:text-custom-500 dark:focus:bg-custom-500/20 dark:focus:text-custom-500" href="#!">Your Link</a>
                                </li>
                            </Dropdown.Content>
                        </Dropdown>

                        <Dropdown className="relative">
                            <Dropdown.Trigger type="button" className="text-white bg-green-500 border-green-500 dropdown-toggle btn hover:text-white hover:bg-green-600 hover:border-green-600 focus:text-white focus:bg-green-600 focus:border-green-600 focus:ring focus:ring-green-100 active:text-white active:bg-green-600 active:border-green-600 active:ring active:ring-green-100 dark:ring-green-400/20" id="dropdownColor2" data-bs-toggle="dropdown">
                                Green Dropdown <ChevronDown className="inline-block size-4 ltr:ml-1 rtl:mr-1"></ChevronDown>
                            </Dropdown.Trigger>

                            <Dropdown.Content placement="right-end" as='ul' className="absolute z-50 py-2 mt-1 list-none bg-white rounded-md shadow-md ltr:text-left rtl:text-right dropdown-menu min-w-max dark:bg-zink-600" aria-labelledby="dropdownColor2">
                                <li>
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-green-500 dropdown-item hover:bg-green-50 hover:text-green-600 focus:bg-green-50 focus:text-green-600 dark:text-green-500 dark:hover:bg-green-500/20 dark:hover:text-green-500 dark:focus:bg-green-500/20 dark:focus:text-green-500" href="#!">Action</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-green-500 dropdown-item hover:bg-green-50 hover:text-green-600 focus:bg-green-50 focus:text-green-600 dark:text-green-500 dark:hover:bg-green-500/20 dark:hover:text-green-500 dark:focus:bg-green-500/20 dark:focus:text-green-500" href="#!">Another action</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-green-500 dropdown-item hover:bg-green-50 hover:text-green-600 focus:bg-green-50 focus:text-green-600 dark:text-green-500 dark:hover:bg-green-500/20 dark:hover:text-green-500 dark:focus:bg-green-500/20 dark:focus:text-green-500" href="#!">Something else here</a>
                                </li>
                                <li className="pt-2 mt-2 border-t border-slate-200 dark:border-zink-500">
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-green-500 dropdown-item hover:bg-green-50 hover:text-green-600 focus:bg-green-50 focus:text-green-600 dark:text-green-500 dark:hover:bg-green-500/20 dark:hover:text-green-500 dark:focus:bg-green-500/20 dark:focus:text-green-500" href="#!">Your Link</a>
                                </li>
                            </Dropdown.Content>
                        </Dropdown>

                        <Dropdown className="relative">
                            <Dropdown.Trigger type="button" className="text-white bg-orange-500 border-orange-500 dropdown-toggle btn hover:text-white hover:bg-orange-600 hover:border-orange-600 focus:text-white focus:bg-orange-600 focus:border-orange-600 focus:ring focus:ring-orange-100 active:text-white active:bg-orange-600 active:border-orange-600 active:ring active:ring-orange-100 dark:ring-orange-400/20" id="dropdownColor3" data-bs-toggle="dropdown">
                                Orange Dropdown <ChevronDown className="inline-block size-4 ltr:ml-1 rtl:mr-1"></ChevronDown>
                            </Dropdown.Trigger>

                            <Dropdown.Content placement="right-end" as='ul' className="absolute z-50 py-2 mt-1 list-none bg-white rounded-md shadow-md ltr:text-left rtl:text-right dropdown-menu min-w-max dark:bg-zink-600" aria-labelledby="dropdownColor3">
                                <li>
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-orange-500 dropdown-item hover:bg-orange-50 hover:text-orange-600 focus:bg-orange-50 focus:text-orange-600 dark:text-orange-500 dark:hover:bg-orange-500/20 dark:hover:text-orange-500 dark:focus:bg-orange-500/20 dark:focus:text-orange-500" href="#!">Action</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-orange-500 dropdown-item hover:bg-orange-50 hover:text-orange-600 focus:bg-orange-50 focus:text-orange-600 dark:text-orange-500 dark:hover:bg-orange-500/20 dark:hover:text-orange-500 dark:focus:bg-orange-500/20 dark:focus:text-orange-500" href="#!">Another action</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-orange-500 dropdown-item hover:bg-orange-50 hover:text-orange-600 focus:bg-orange-50 focus:text-orange-600 dark:text-orange-500 dark:hover:bg-orange-500/20 dark:hover:text-orange-500 dark:focus:bg-orange-500/20 dark:focus:text-orange-500" href="#!">Something else here</a>
                                </li>
                                <li className="pt-2 mt-2 border-t border-slate-200 dark:border-zink-500">
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-orange-500 dropdown-item hover:bg-orange-50 hover:text-orange-600 focus:bg-orange-50 focus:text-orange-600 dark:text-orange-500 dark:hover:bg-orange-500/20 dark:hover:text-orange-500 dark:focus:bg-orange-500/20 dark:focus:text-orange-500" href="#!">Your Link</a>
                                </li>
                            </Dropdown.Content>
                        </Dropdown>

                        <Dropdown className="relative">
                            <Dropdown.Trigger type="button" className="text-white bg-yellow-500 border-yellow-500 dropdown-toggle btn hover:text-white hover:bg-yellow-600 hover:border-yellow-600 focus:text-white focus:bg-yellow-600 focus:border-yellow-600 focus:ring focus:ring-yellow-100 active:text-white active:bg-yellow-600 active:border-yellow-600 active:ring active:ring-yellow-100 dark:ring-yellow-400/20" id="dropdownColor4" data-bs-toggle="dropdown">
                                Yellow Dropdown <ChevronDown className="inline-block size-4 ltr:ml-1 rtl:mr-1"></ChevronDown>
                            </Dropdown.Trigger>

                            <Dropdown.Content placement="right-end" as='ul' className="absolute z-50 py-2 mt-1 list-none bg-white rounded-md shadow-md ltr:text-left rtl:text-right dropdown-menu min-w-max dark:bg-zink-600" aria-labelledby="dropdownColor4">
                                <li>
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-yellow-500 dropdown-item hover:bg-yellow-50 hover:text-yellow-600 focus:bg-yellow-50 focus:text-yellow-600 dark:text-yellow-500 dark:hover:bg-yellow-500/20 dark:hover:text-yellow-500 dark:focus:bg-yellow-500/20 dark:focus:text-yellow-500" href="#!">Action</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-yellow-500 dropdown-item hover:bg-yellow-50 hover:text-yellow-600 focus:bg-yellow-50 focus:text-yellow-600 dark:text-yellow-500 dark:hover:bg-yellow-500/20 dark:hover:text-yellow-500 dark:focus:bg-yellow-500/20 dark:focus:text-yellow-500" href="#!">Another action</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-yellow-500 dropdown-item hover:bg-yellow-50 hover:text-yellow-600 focus:bg-yellow-50 focus:text-yellow-600 dark:text-yellow-500 dark:hover:bg-yellow-500/20 dark:hover:text-yellow-500 dark:focus:bg-yellow-500/20 dark:focus:text-yellow-500" href="#!">Something else here</a>
                                </li>
                                <li className="pt-2 mt-2 border-t border-slate-200 dark:border-zink-500">
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-yellow-500 dropdown-item hover:bg-yellow-50 hover:text-yellow-600 focus:bg-yellow-50 focus:text-yellow-600 dark:text-yellow-500 dark:hover:bg-yellow-500/20 dark:hover:text-yellow-500 dark:focus:bg-yellow-500/20 dark:focus:text-yellow-500" href="#!">Your Link</a>
                                </li>
                            </Dropdown.Content>
                        </Dropdown>

                        <Dropdown className="relative">
                            <Dropdown.Trigger type="button" className="text-white bg-red-500 border-red-500 dropdown-toggle btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-red-400/20" id="dropdownColor5" data-bs-toggle="dropdown">
                                Red Dropdown <ChevronDown className="inline-block size-4 ltr:ml-1 rtl:mr-1"></ChevronDown>
                            </Dropdown.Trigger>

                            <Dropdown.Content placement="right-end" as='ul' className="absolute z-50 py-2 mt-1 list-none bg-white rounded-md shadow-md ltr:text-left rtl:text-right dropdown-menu min-w-max dark:bg-zink-600" aria-labelledby="dropdownColor5">
                                <li>
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-red-500 dropdown-item hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600 dark:text-red-500 dark:hover:bg-red-500/20 dark:hover:text-red-500 dark:focus:bg-red-500/20 dark:focus:text-red-500" href="#!">Action</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-red-500 dropdown-item hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600 dark:text-red-500 dark:hover:bg-red-500/20 dark:hover:text-red-500 dark:focus:bg-red-500/20 dark:focus:text-red-500" href="#!">Another action</a>
                                </li>
                                <li>
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-red-500 dropdown-item hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600 dark:text-red-500 dark:hover:bg-red-500/20 dark:hover:text-red-500 dark:focus:bg-red-500/20 dark:focus:text-red-500" href="#!">Something else here</a>
                                </li>
                                <li className="pt-2 mt-2 border-t border-slate-200 dark:border-zink-500">
                                    <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-red-500 dropdown-item hover:bg-red-50 hover:text-red-600 focus:bg-red-50 focus:text-red-600 dark:text-red-500 dark:hover:bg-red-500/20 dark:hover:text-red-500 dark:focus:bg-red-500/20 dark:focus:text-red-500" href="#!">Your Link</a>
                                </li>
                            </Dropdown.Content>
                        </Dropdown>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default VariantDropdown;