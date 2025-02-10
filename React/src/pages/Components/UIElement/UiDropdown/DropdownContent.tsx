import React from "react";
import { Dropdown } from "Common/Components/Dropdown";
import { ChevronDown, MoveRight } from "lucide-react";

const DropdownContent = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-gray-800 text-15 dark:text-white">Dropdown Content</h6>
                    <div className="flex flex-wrap items-center gap-2">
                        <Dropdown className="relative">
                            <Dropdown.Trigger type="button" className="text-white dropdown-toggle btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20" id="dropdownMenuheading" data-bs-toggle="dropdown">
                                Heading Content <ChevronDown className="inline-block size-4 ltr:ml-1 rlt:mr-1"></ChevronDown>
                            </Dropdown.Trigger>

                            <Dropdown.Content placement="right-end" as="ul" className="absolute z-50 py-2 mt-1 list-none bg-white rounded-md shadow-md ltr:text-left rtl:text-right dropdown-menu min-w-max dark:bg-zink-600" aria-labelledby="dropdownMenuheading">
                                <li className="px-2 py-1 text-sm truncate text-slate-500 dark:text-zink-200">
                                    Welcome to Tailwick
                                </li>
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
                            <Dropdown.Trigger type="button" className="text-white dropdown-toggle btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20" id="dropdownMenuForm" data-bs-toggle="dropdown">
                                Form Content <ChevronDown className="inline-block size-4 ltr:ml-1 rtl:mr-1"></ChevronDown>
                            </Dropdown.Trigger>

                            <Dropdown.Content placement="right-end" as="ul" className="absolute z-50 p-5 mt-1 list-none bg-white rounded-md shadow-md ltr:text-left rtl:text-right dropdown-menu min-w-max dark:bg-zink-600" aria-labelledby="dropdownMenuForm">
                                <form action="#!">
                                    <div className="mb-3">
                                        <label htmlFor="inputText1" className="inline-block mb-2 text-base font-medium">Email <span className="text-red-500">*</span></label>
                                        <input type="email" id="inputEmail" className="form-input border-slate-200 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 disabled:border-slate-300 dark:bg-zink-600 dark:border-zink-500 dark:placeholder:text-zink-300" placeholder="Enter email" required />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="inputText2" className="inline-block mb-2 text-base font-medium">Password <span className="text-red-500">*</span></label>
                                        <input type="password" id="inputPassword" className="form-input border-slate-200 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 disabled:border-slate-300 dark:bg-zink-600 dark:border-zink-500 dark:placeholder:text-zink-300" placeholder="Password" required />
                                    </div>
                                    <div className="text-right">
                                        <button type="submit" className="py-1 text-xs px-1.5 text-white btn bg-green-500 border-green-500 hover:text-white hover:bg-green-600 hover:border-green-600 focus:text-white focus:bg-green-600 focus:border-green-600 focus:ring focus:ring-green-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">
                                            Sign In <MoveRight className="inline-block size-3 ml-1"></MoveRight></button>
                                    </div>
                                </form>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default DropdownContent;