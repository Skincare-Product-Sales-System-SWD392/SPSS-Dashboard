import React from "react";
import { MoveLeft, MoveRight, Gem, Smartphone, Globe } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";

const AccountInfo = () => {

    const validation: any = useFormik({
        initialValues: {
            firstName: "",
            userName: "",
            email: "",
            phoneNo: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object().shape({
            firstName: Yup.string().required("First Name is required"),
            userName: Yup.string().required("User Name is required."),
            email: Yup.string().email("Please enter a valid email").required("Email is required."),
            phoneNo: Yup.string().required("Phone Number is required."),
            isAgree: Yup.boolean().oneOf([true], "You must agree to the terms and conditions."),
            password: Yup.string()
                .required("This field is required")
                .min(8, "Pasword must be 8 or more characters")
                .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password ahould contain at least one uppercase and lowercase character")
                .matches(/\d/, "Password should contain at least one number")
                .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character"),
            confirmPassword: Yup.string().when("password", (password: any, field: any) => {
                if (password) {
                    return field.required("The passwords do not match").oneOf([Yup.ref("password")], "The passwords do not match");
                }
            }),
        }),
        onSubmit: (values: any) => {
            console.log(values);
        },
    });

    return (
        <React.Fragment>
            <h5 className="mb-3">Account Info</h5>
            <form action="#!" onSubmit={(event: any) => {
                event.preventDefault();
                validation.handleSubmit()
            }}>
                <label htmlFor="" className="inline-block mb-3 text-base font-medium">Select Business Type <span className="text-red-500">*</span></label>
                <div className="grid grid-cols-1 gap-3 mb-4 md:grid-cols-3 lg:grid-cols-4">
                    <div>
                        <input id="brandingRadio" name="businessType" className="hidden size-4 border rounded-full appearance-none peer/business bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-custom-500 dark:checked:bg-custom-500 checked:border-custom-500 dark:checked:border-custom-500" type="radio" value="" defaultChecked />
                        <label htmlFor="brandingRadio" className="block px-3 text-center border rounded-md cursor-pointer border-slate-200 py-7 text-slate-500 dark:border-zink-500 dark:text-zink-200 peer-checked/business:border-custom-500 dark:peer-checked/business:border-custom-500 peer-checked/business:text-custom-500 dark:peer-checked/business:text-custom-500">
                            <Gem className="block size-8 mx-auto mb-3 stroke-1 fill-slate-100 dark:fill-zink-600" />
                            <span className="block font-medium text-15">Branding</span>
                        </label>
                    </div>

                    <div>
                        <input id="mobileDesignRadio" name="businessType" className="hidden size-4 border rounded-full appearance-none peer/business bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-custom-500 dark:checked:bg-custom-500 checked:border-custom-500 dark:checked:border-custom-500" type="radio" value="" />
                        <label htmlFor="mobileDesignRadio" className="block px-3 text-center border rounded-md cursor-pointer border-slate-200 py-7 text-slate-500 dark:border-zink-500 dark:text-zink-200 peer-checked/business:border-custom-500 dark:peer-checked/business:border-custom-500 peer-checked/business:text-custom-500 dark:peer-checked/business:text-custom-500">
                            <Smartphone className="block size-8 mx-auto mb-3 stroke-1 fill-slate-100 dark:fill-zink-600" />
                            <span className="block font-medium text-15">Mobile Design</span>
                        </label>
                    </div>

                    <div>
                        <input id="webDesignRadio" name="businessType" className="hidden size-4 border rounded-full appearance-none peer/business bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-custom-500 dark:checked:bg-custom-500 checked:border-custom-500 dark:checked:border-custom-500" type="radio" value="" />
                        <label htmlFor="webDesignRadio" className="block px-3 text-center border rounded-md cursor-pointer border-slate-200 py-7 text-slate-500 dark:border-zink-500 dark:text-zink-200 peer-checked/business:border-custom-500 dark:peer-checked/business:border-custom-500 peer-checked/business:text-custom-500 dark:peer-checked/business:text-custom-500">
                            <Globe className="block size-8 mx-auto mb-3 stroke-1 fill-slate-100 dark:fill-zink-600" />
                            <span className="block font-medium text-15">Web Design</span>
                        </label>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <label htmlFor="nameInput" className="inline-block mb-2 text-base font-medium">Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            name="firstName"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="Enter your name"
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
                        <label htmlFor="usernameInput" className="inline-block mb-2 text-base font-medium">Username <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            id="userName"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="Enter username"
                            value={validation.values.userName}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                        />
                        {
                            validation.touched.userName && validation.errors.userName ?
                                <div id="userName" className="text-red-500">{validation.errors.userName}</div>
                                : null
                        }
                    </div>
                    <div>
                        <label htmlFor="phoneNumberInput" className="inline-block mb-2 text-base font-medium">Phone Number <span className="text-red-500">*</span></label>
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
                        <label htmlFor="emailAddressInput" className="inline-block mb-2 text-base font-medium">Email Address</label>
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
                        <label htmlFor="passwordInput" className="inline-block mb-2 text-base font-medium">Password <span className="text-red-500">*</span></label>
                        <input
                            type="password"
                            id="password"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="Password"
                            value={validation.values.password}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                        />
                        {
                            validation.touched.password && validation.errors.password ?
                                <div id="password" className="text-red-500">{validation.errors.password}</div>
                                : null
                        }
                    </div>
                    <div>
                        <label htmlFor="passwordConfirmInput" className="inline-block mb-2 text-base font-medium">Password Confirm <span className="text-red-500">*</span></label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            placeholder="Password confirm"
                            value={validation.values.confirmPassword}
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                        />
                        {
                            validation.touched.confirmPassword && validation.errors.confirmPassword ?
                                <div id="confirmPassword" className="text-red-500">{validation.errors.confirmPassword}</div>
                                : null
                        }
                    </div>
                </div>
                <div className="flex justify-between gap-2 mt-5">
                    <button type="button" data-action="prev" className="text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50"><MoveLeft className="inline-block h-4 mr-1 rtl:rotate-180" /> <span className="align-middle">Previous</span></button>
                    <button type="submit" data-action="next" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"><span className="align-middle">Next</span> <MoveRight className="inline-block h-4 ml-1 rtl:rotate-180" /></button>
                </div>
            </form>
        </React.Fragment>
    );
}

export default AccountInfo;