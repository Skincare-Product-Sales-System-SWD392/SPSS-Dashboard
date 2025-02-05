import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MoveLeft, MoveRight } from "lucide-react";

const AddressInfo = () => {

    const validation: any = useFormik({
        initialValues: {
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            phoneNo: "",
            addressLine2: "",
            addressLine: "",
            prefixAddress: "",
            vtaAddress: "",
            country: "",
            state: "",
            city: "",
            zipCode: "",
        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string().required("First Name is required"),
            middleName: Yup.string().required("Middle Name is required"),
            lastName: Yup.string().required("Last Name is required."),
            email: Yup.string().email("Please enter a valid email").required("Email is required."),
            phoneNo: Yup.number()
                .typeError("That doesn't look like a phone number")
                .positive("A phone number can't start with a minus")
                .integer("A phone number can't include a decimal point")
                .min(8)
                .required('A phone number is required'),
            addressLine2: Yup.string().required("Address is required."),
            addressLine: Yup.string().required("Address is required."),
            prefixAddress: Yup.string().required("Prefix Address is required."),
            vtaAddress: Yup.number().required("VTAu Address is required."),
            country: Yup.string().required("Country Name is required."),
            state: Yup.string().required("State Name is required."),
            city: Yup.string().required("City Name is required."),
            zipCode: Yup.string().required("ZIP code is required."),
        }),
        onSubmit: (values: any) => {
            console.log(values);
        },
    });

    return (
        <React.Fragment>
            <h5 className="mb-3">Address</h5>
            <form action="#!" onSubmit={(event: any) => {
                event.preventDefault();
                validation.handleSubmit()
            }}>
                <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
                    <div>
                        <label htmlFor="FirstNameAddressInput" className="inline-block mb-2 text-base font-medium">First Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name="firstName"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="First name"
                            value={validation.values.firstName}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                        />
                        {
                            validation.touched.firstName && validation.errors.firstName ?
                                <div className="text-red-500">{validation.errors.firstName}</div>
                                : null
                        }
                    </div>
                    <div>
                        <label htmlFor="middleNameAddressInput" className="inline-block mb-2 text-base font-medium">Middle Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            id="middleName"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="Middle name"
                            value={validation.values.middleName}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                        />
                        {
                            validation.touched.middleName && validation.errors.middleName ?
                                <div id="middleName" className="text-red-500">{validation.errors.middleName}</div>
                                : null
                        }
                    </div>
                    <div>
                        <label htmlFor="lastNameAddressInput" className="inline-block mb-2 text-base font-medium">Last Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name="lastName"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="Last name"
                            value={validation.values.lastName}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                        />
                        {
                            validation.touched.lastName && validation.errors.lastName ?
                                <div className="text-red-500">{validation.errors.lastName}</div>
                                : null
                        }
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
                    <div>
                        <label htmlFor="phoneNumberAddressInput" className="inline-block mb-2 text-base font-medium">Phone Number</label>
                        <input
                            type="number"
                            name="phoneNo"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="Phone number"
                            value={validation.values.phoneNo}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                        />
                        {
                            validation.touched.phoneNo && validation.errors.phoneNo ?
                                <div className="text-red-500">{validation.errors.phoneNo}</div>
                                : null
                        }
                    </div>
                    <div>
                        <label htmlFor="emailAddress2Input" className="inline-block mb-2 text-base font-medium">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="Email address"
                            value={validation.values.email}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                        />
                        {
                            validation.touched.email && validation.errors.email ?
                                <div className="text-red-500">{validation.errors.email}</div>
                                : null
                        }
                    </div>
                    <div>
                        <label htmlFor="addressLineInput" className="inline-block mb-2 text-base font-medium">Address Line 1</label>
                        <input
                            type="text"
                            id="addressLineInput"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="Address line 1"
                            value={validation.values.addressLine}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                        />
                        {
                            validation.touched.addressLine && validation.errors.addressLine ?
                                <div id="addressLine" className="text-red-500">{validation.errors.addressLine}</div>
                                : null
                        }
                    </div>
                    <div>
                        <label htmlFor="addressLine2" className="inline-block mb-2 text-base font-medium">Address Line 2</label>
                        <input
                            type="text"
                            id="addressLine2"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="Address line 1"
                            value={validation.values.addressLine2}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                        />
                        {
                            validation.touched.addressLine2 && validation.errors.addressLine2 ?
                                <div id="addressLine2" className="text-red-500">{validation.errors.addressLine2}</div>
                                : null
                        }
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <label htmlFor="cityAddressInput" className="inline-block mb-2 text-base font-medium">City</label>
                        <input
                            type="text"
                            id="city"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="City"
                            value={validation.values.city}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                        />
                        {
                            validation.touched.city && validation.errors.city ?
                                <div id="city" className="text-red-500">{validation.errors.city}</div>
                                : null
                        }
                    </div>
                    <div>
                        <label htmlFor="stateAddressInput" className="inline-block mb-2 text-base font-medium">State</label>
                        <input
                            type="text"
                            id="state"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="State"
                            value={validation.values.state}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                        />
                        {
                            validation.touched.state && validation.errors.state ?
                                <div id="state" className="text-red-500">{validation.errors.state}</div>
                                : null
                        }
                    </div>
                    <div>
                        <label htmlFor="countryAddressInput" className="inline-block mb-2 text-base font-medium">Country</label>
                        <input
                            type="text"
                            id="country"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="Country"
                            value={validation.values.country}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                        />
                        {
                            validation.touched.country && validation.errors.country ?
                                <div id="country" className="text-red-500">{validation.errors.country}</div>
                                : null
                        }
                    </div>
                    <div>
                        <label htmlFor="zipcodeAddressInput" className="inline-block mb-2 text-base font-medium">Zip code</label>
                        <input
                            type="number"
                            id="zipCode"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="000000"
                            value={validation.values.zipCode}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                        />
                        {
                            validation.touched.zipCode && validation.errors.zipCode ?
                                <div id="zipCode" className="text-red-500">{validation.errors.zipCode}</div>
                                : null
                        }
                    </div>
                    <div>
                        <label htmlFor="vtaAddressInput" className="inline-block mb-2 text-base font-medium">VTA Number</label>
                        <input
                            type="text"
                            id="vtaAddress"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="VTA number"
                            value={validation.values.vtaAddress}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                        />
                        {
                            validation.touched.vtaAddress && validation.errors.vtaAddress ?
                                <div id="vtaAddress" className="text-red-500">{validation.errors.vtaAddress}</div>
                                : null
                        }
                    </div>
                    <div>
                        <label htmlFor="prefixAddressInput" className="inline-block mb-2 text-base font-medium">Prefix</label>
                        <input
                            type="text"
                            id="prefixAddress"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="Prefix"
                            value={validation.values.prefixAddress}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                        />
                        {
                            validation.touched.prefixAddress && validation.errors.prefixAddress ?
                                <div id="prefixAddress" className="text-red-500">{validation.errors.prefixAddress}</div>
                                : null
                        }
                    </div>
                </div>
                <div className="flex justify-between gap-2 mt-5">
                    <button type="button" data-action="prev" className="duration-200 ease-linear mrtransition-all text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100"> <MoveLeft className="inline-block h-4 mr-1" /><span className="align-middle">Previous</span></button>
                    <button type="submit" data-action="next" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><span className="align-middle">Next</span> <MoveRight className="inline-block h-4 ml-1" /></button>
                </div>
            </form>
        </React.Fragment>

    );
}

export default AddressInfo;