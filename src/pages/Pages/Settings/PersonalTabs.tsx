import React from "react";
import Select from 'react-select';
import Flatpickr from "react-flatpickr";

interface Option { label: string; value: string; isDisabled?: boolean };

const DefaultOptions: Option[] = [
    { label: "Choice 1", value: "Choice 1" },
    { label: "Choice 2", value: "Choice 2" },
    { label: "Choice 3", value: "Choice 3" },
    { label: "Choice 2", value: "Choice 2" },
    { label: "Choice 3", value: "Choice 3" },
    { label: "Choice 4", value: "Choice 4" },
];

const cityOptions: Option[] = [
    { value: 'Madrid', label: 'Madrid' },
    { value: 'Toronto', label: 'Toronto' },
    { value: 'Vancouver', label: 'Vancouver' },
    { value: 'London', label: 'London' },
    { value: 'Manchester', label: 'Manchester' },
    { value: 'Liverpool', label: 'Liverpool' },
    { value: 'Paris', label: 'Paris' },
    { value: 'Malaga', label: 'Malaga' },
    { value: 'Washington', label: 'Washington', isDisabled: true },
    { value: 'Lyon', label: 'Lyon' },
    { value: 'Marseille', label: 'Marseille' },
    { value: 'Hamburg', label: 'Hamburg' },
    { value: 'Munich', label: 'Munich' },
    { value: 'Barcelona', label: 'Barcelona' },
    { value: 'Berlin', label: 'Berlin' },
    { value: 'Montreal', label: 'Montreal' },
    { value: 'New York', label: 'New York' },
    { value: 'Michigan', label: 'Michigan' },
];

const countryOptions: Option[] = [
    { value: 'USA', label: 'USA' },
    { value: 'Toronto', label: 'Toronto' },
    { value: 'Vancouver', label: 'Vancouver' },
    { value: 'London', label: 'London' },
    { value: 'Manchester', label: 'Manchester' },
    { value: 'Liverpool', label: 'Liverpool' },
    { value: 'Paris', label: 'Paris' },
    { value: 'Malaga', label: 'Malaga' },
    { value: 'Washington', label: 'Washington', isDisabled: true },
    { value: 'Lyon', label: 'Lyon' },
    { value: 'Marseille', label: 'Marseille' },
    { value: 'Hamburg', label: 'Hamburg' },
    { value: 'Munich', label: 'Munich' },
    { value: 'Barcelona', label: 'Barcelona' },
    { value: 'Berlin', label: 'Berlin' },
    { value: 'Montreal', label: 'Montreal' },
    { value: 'New York', label: 'New York' },
    { value: 'Michigan', label: 'Michigan' },
];

const zipOptions: Option[] = [
    { value: '00012', label: '00012' },
    { value: '00014', label: '00014' },
    { value: '00016', label: '00016' },
    { value: '88800', label: '88800' },
    { value: '00100', label: '00100' },
    { value: '00001', label: '00001' },
];

const PersonalTabs = () => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-1 text-15">Personal Information</h6>
                    <p className="mb-4 text-slate-500 dark:text-zink-200">Update your photo and personal details here easily.</p>
                    <form action="#!">
                        <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">
                            <div className="xl:col-span-6">
                                <label htmlFor="inputValue" className="inline-block mb-2 text-base font-medium">First Name</label>
                                <input type="text" id="inputValueFirst" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter your value" defaultValue="Paula" />
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="inputValue" className="inline-block mb-2 text-base font-medium">Last Name</label>
                                <input type="text" id="inputValueLast" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter your value" defaultValue="Keenan" />
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="inputValue" className="inline-block mb-2 text-base font-medium">Phone Number</label>
                                <input type="text" id="inputValuePhone" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="+214 8456 8459 23" defaultValue="+214 8456 8459 23" />
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="inputValue" className="inline-block mb-2 text-base font-medium">Email Address</label>
                                <input type="email" id="inputValueEmail" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter your email address" defaultValue="richardmarshall@tailwick.com" />
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="joiningDateInput" className="inline-block mb-2 text-base font-medium">Birth of Date</label>
                                <Flatpickr
                                    options={{
                                        dateFormat: "d M, Y",
                                        defaultDate: "24 Oct, 2023"
                                    }}
                                    placeholder="Select Date"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                />
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="joiningDateInput" className="inline-block mb-2 text-base font-medium">Joining Date</label>
                                <Flatpickr
                                    options={{
                                        dateFormat: "d M, Y",
                                        defaultDate: "30 Nov, 2023"
                                    }}
                                    placeholder="Select Date"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                />
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="inputValue" className="inline-block mb-2 text-base font-medium">Skill</label>
                                <Select
                                    className="border-slate-300 focus:outline-none focus:border-custom-500"
                                    id="choices-multiple-default"
                                    data-choices name="choices-multiple-default"
                                    isMulti
                                    options={DefaultOptions}
                                    defaultValue={[DefaultOptions[0]]}
                                />
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="inputValue" className="inline-block mb-2 text-base font-medium">Designation</label>
                                <input type="text" id="inputValueDesignation" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter your value" defaultValue="CEO & Founder" />
                            </div>
                            <div className="xl:col-span-6">
                                <label htmlFor="inputValue" className="inline-block mb-2 text-base font-medium">Website</label>
                                <input type="text" id="inputValueWebsite" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter your value" defaultValue="www.themesdesign.in" />
                            </div>
                            <div className="xl:col-span-4">
                                <label htmlFor="inputValue" className="inline-block mb-2 text-base font-medium">City</label>
                                <Select
                                    className="border-slate-300 focus:outline-none focus:border-custom-500"
                                    id="choices-single-no-sorting"
                                    name="choices-single-no-sorting"
                                    data-choices data-choices-sorting-false
                                    options={cityOptions}
                                    isSearchable={true} />
                            </div>
                            <div className="xl:col-span-4">
                                <label htmlFor="inputValue" className="inline-block mb-2 text-base font-medium">Country</label>
                                <Select
                                    id="choices-single-no-sorting"
                                    name="choices-single-no-sorting"
                                    data-choices data-choices-sorting-false
                                    options={countryOptions}
                                    isSearchable={true} />
                            </div>
                            <div className="xl:col-span-4">
                                <label htmlFor="inputValue" className="inline-block mb-2 text-base font-medium">Zip Code</label>
                                <Select
                                    id="choices-single-no-sorting"
                                    name="choices-single-no-sorting"
                                    data-choices data-choices-sorting-false
                                    options={zipOptions}
                                    isSearchable={true}
                                />
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="inputValue" className="block mb-2 text-base font-medium">Description</label>
                                <textarea className="w-full form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="exampleFormControlTextarea" placeholder="Enter your description" rows={5}
                                    defaultValue="
                                A Web Developer creates and designs different websites for clients. They are responsible for their aesthetic as well as their function. Professionals in this field may also need to be able to ensure sites are compatible with multiple types of media. Web Developers need to have a firm understanding of programming and graphical design. Having a strong resume that emphasizes these attributes makes it significantly easier to get hired as a Web Developer. As a web designer, my objective is to make a positive impact on clients, co-workers, and the Internet using my skills and experience to design compelling and attractive websites. Solving code problems. Editing &amp; Design with designing team in the company to build perfect web designs.">
                                </textarea>
                            </div>
                        </div>
                        <div className="flex justify-end mt-6 gap-x-4">
                            <button type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Updates</button>
                            <button type="button" className="text-red-500 bg-red-100 btn hover:text-white hover:bg-red-600 focus:text-white focus:bg-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:ring active:ring-red-100 dark:bg-red-500/20 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white dark:focus:bg-red-500 dark:focus:text-white dark:active:bg-red-500 dark:active:text-white dark:ring-red-400/20">Cancel</button>
                        </div>
                    </form>
                </div>
            </div >
        </React.Fragment >
    );
}

export default PersonalTabs;