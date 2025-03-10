import React from "react";
import { X } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignUpForm = () => {

    const validation: any = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNo: "",
            isAgree: false
        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string().required("First Name is required"),
            lastName: Yup.string().required("Last Name is required."),
            email: Yup.string().email("Please enter a valid email").required("Email is required."),
            phoneNo: Yup.string().required("Phone Number is required."),
            isAgree: Yup.boolean().oneOf([true], "You must agree to the terms and conditions.")
        }),
        onSubmit: (values: any) => {
            // console.log(values);
        },
    });

    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h6 className="mb-4 text-15">Sign Up Form</h6>

                    <div className="mx-auto md:max-w-lg">
                        <form action="#!" id="signUp" onSubmit={(event: any) => {
                            event.preventDefault();
                            validation.handleSubmit()
                        }}>
                            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
                                <div className="mb-4">
                                    <label htmlFor="firstNameInput" className="inline-block mb-2 text-base font-medium">First Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                        placeholder="Enter firstname"
                                        value={validation.values.firstName}
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                    />
                                    {
                                        validation.touched.firstName && validation.errors.firstName ?
                                            <p id="firstName" className="mt-1 text-sm text-red-500">{validation.errors.firstName}</p>
                                            : null
                                    }
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="lastNameInput" className="inline-block mb-2 text-base font-medium">Last Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                        placeholder="Enter lastname"
                                        value={validation.values.lastName}
                                        onChange={validation.handleChange}
                                        onBlur={validation.handleBlur}
                                    />
                                    {
                                        validation.touched.lastName && validation.errors.lastName ?
                                            <p id="lastName" className="mt-1 text-sm text-red-500">{validation.errors.lastName}</p>
                                            : null
                                    }
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="emailInput" className="inline-block mb-2 text-base font-medium">Email Address <span className="text-red-500">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="example@gmail.com"
                                    value={validation.values.email}
                                    onChange={validation.handleChange}
                                />
                                {
                                    validation.touched.email && validation.errors.email ?
                                        <p id="email" className="mt-1 text-sm text-red-500">{validation.errors.email}</p>
                                        : null
                                }
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phoneNumberInput" className="inline-block mb-2 text-base font-medium">Phone Number <span className="text-red-500">*</span></label>
                                <input
                                    type="number"
                                    id="phoneNo"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="+(254) 0123 456 789"
                                    value={validation.values.phoneNo}
                                    onChange={validation.handleChange}
                                />
                                {
                                    validation.touched.phoneNo && validation.errors.phoneNo ?
                                        <p id="phoneNo" className="mt-1 text-sm text-red-500">{validation.errors.phoneNo}</p>
                                        : null
                                }
                            </div>
                            <div className="mb-4">
                                <input
                                    id="isAgree"
                                    className="size-4 border rounded-sm appearance-none bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-custom-500 checked:border-custom-500 dark:checked:bg-custom-500 dark:checked:border-custom-500 checked:disabled:bg-custom-400 checked:disabled:border-custom-400"
                                    type="checkbox"
                                    checked={validation.values.isAgree}
                                    onChange={validation.handleChange}
                                />
                                <label htmlFor="termsCondition" className="text-sm align-top text-slate-400"> By registering you agree to the Tailwick <a href="#!" className="underline text-custom-500">Terms of Use</a></label>
                                {
                                    validation.touched.isAgree && validation.errors.isAgree ?
                                        <p id="isAgree" className="mt-1 text-sm text-red-500">{validation.errors.isAgree}</p>
                                        : null
                                }
                            </div>
                            <div className="flex justify-end gap-2 mt-5">
                                <button type="button" className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-700 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10"><X className="inline-block size-4" /> <span className="align-middle">Cancel</span></button>
                                <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
}

export default SignUpForm;