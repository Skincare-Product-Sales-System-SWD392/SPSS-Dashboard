import React from "react";
import { Dropdown } from "Common/Components/Dropdown";
import { ChevronDown } from "lucide-react";

const SplitDropdowns = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Split Button Dropdowns</h6>
                    <div className="flex flex-wrap items-center gap-2">
                        <Dropdown className="relative">
                            <div className="flex items-center">
                                <button type="button" className="text-white ltr:rounded-r-none rtl:rounded-l-none btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                                    Dropdown Split
                                </button>
                                <Dropdown.Trigger type="button" id="dropdownSplit1" data-bs-toggle="dropdown" className="dropdown-toggle ltr:rounded-l-none rtl:rounded-r-none flex items-center justify-center size-[37.5px] p-0 text-white btn bg-custom-600 border-custom-600 hover:text-white hover:bg-custom-700 hover:border-custom-700 focus:text-white focus:bg-custom-700 focus:border-custom-700 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-700 active:border-custom-700 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                                    <ChevronDown className="inline-block size-4"></ChevronDown>
                                </Dropdown.Trigger>
                            </div>
                            <Dropdown.Content placement="right-end" as="ul" className="absolute z-50 py-2 mt-1 list-none bg-white rounded-md shadow-md ltr:text-left rtl:text-right dropdown-menu min-w-max dark:bg-zink-600" aria-labelledby="dropdownSplit1">
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
                            <div className="flex items-center">
                                <Dropdown.Trigger type="button" id="dropdownSplit2" data-bs-toggle="dropdown" className="dropdown-toggle ltr:rounded-r-none rtl:rounded-l-none flex items-center justify-center size-[37.5px] p-0 text-white btn bg-custom-600 border-custom-600 hover:text-white hover:bg-custom-700 hover:border-custom-700 focus:text-white focus:bg-custom-700 focus:border-custom-700 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-700 active:border-custom-700 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                                    <ChevronDown className="inline-block size-4"></ChevronDown>
                                </Dropdown.Trigger>
                                <button type="button" className="text-white ltr:rounded-l-none rtl:rounded-r-none btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                                    Dropdown Split
                                </button>
                            </div>
                            <Dropdown.Content placement="right-end" as="ul" className="absolute z-50 py-2 mt-1 list-none bg-white rounded-md shadow-md ltr:text-left rtl:text-right dropdown-menu min-w-max dark:bg-zink-600" aria-labelledby="dropdownSplit2">
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

export default SplitDropdowns;