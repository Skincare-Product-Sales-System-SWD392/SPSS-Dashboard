import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MoveRight, MoveLeft } from "lucide-react";

const PersonalInfo = () => {

    const validation: any = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNo: "",
            position: "",
            joiningDate: "",
        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string().required("First Name is required"),
            lastName: Yup.string().required("Last Name is required."),
            email: Yup.string().email("Please enter a valid email").required("Email is required."),
            phoneNo: Yup.string().required("Phone Number is required."),
            position: Yup.string().required("Position is required."),
        }),
        onSubmit: (values: any) => {
            console.log(values);
        },
    });

    return (
        <React.Fragment>
            <h5 className="mb-3">Personal Info</h5>
            <form action="#!" onSubmit={(event: any) => {
                event.preventDefault();
                validation.handleSubmit()
            }}>
                <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
                    <div>
                        <label htmlFor="FirstNameInput" className="inline-block mb-2 text-base font-medium">First Name <span className="text-red-500">*</span></label>
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
                        <label htmlFor="lastNameInput" className="inline-block mb-2 text-base font-medium">Last Name <span className="text-red-500">*</span></label>
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
                                <div id="lastName" className="text-red-500">{validation.errors.lastName}</div>
                                : null
                        }
                        <div className="text-red-500"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
                    <div>
                        <label htmlFor="positionInput" className="inline-block mb-2 text-base font-medium">Position <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            id="position"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="Position"
                            value={validation.values.position}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                        />
                        {
                            validation.touched.position && validation.errors.position ?
                                <div id="position" className="text-red-500">{validation.errors.position}</div>
                                : null
                        }
                    </div>
                    <div>
                        <label htmlFor="joiningDateInput" className="inline-block mb-2 text-base font-medium">Joining Date <span className="text-red-500">*</span></label>
                        <input type="date" id="joiningDateInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Joining Date" required />
                        <div id="joiningDateInputError" className="text-red-500"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
                    <div>
                        <label htmlFor="birthDateInput" className="inline-block mb-2 text-base font-medium">Birth of Date <span className="text-red-500">*</span></label>
                        <input type="date" id="birthDateInput" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Select date" required />
                        <div id="birthDateInputError" className="text-red-500"></div>
                    </div>
                    <div>
                        <label htmlFor="phoneNumberPersonalInput" className="inline-block mb-2 text-base font-medium">Phone Number <span className="text-red-500">*</span></label>
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
                        <label htmlFor="emailPersonalInput" className="inline-block mb-2 text-base font-medium">Email Address <span className="text-red-500">*</span></label>
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
                </div>
                <div>
                    <label htmlFor="description" className="inline-block mb-2 text-base font-medium">Description</label>
                    <textarea className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="description" rows={5}></textarea>
                </div>
                <div className="flex justify-between gap-2 mt-5">
                    <button type="button" data-action="prev" className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"><MoveLeft className="inline-block h-4 mr-1" /> <span className="align-middle">Previous</span></button>
                    <button type="submit" data-action="next" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><span className="align-middle">Next</span> <MoveRight className="inline-block h-4 ml-1" /></button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default PersonalInfo;