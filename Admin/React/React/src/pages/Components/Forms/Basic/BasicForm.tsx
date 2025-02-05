import { Mail } from "lucide-react";
import React from "react";

const BasicForm = () => {
    return (
        <React.Fragment>
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-3">
                <div className="card">
                    <div className="card-body">
                        <form action="/" onSubmit={(event: any) => event.preventDefault()}>
                            <div className="mb-3">
                                <label htmlFor="inputLabel" className="inline-block mb-2 text-base font-medium">Text <span className="text-red-500">*</span></label>
                                <input type="text" id="inputTitle" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                            </div>
                            <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <form action="/" onSubmit={(event: any) => event.preventDefault()}>
                            <div className="mb-3">
                                <label htmlFor="inputPassword" className="inline-block mb-2 text-base font-medium">Password <span className="text-red-500">*</span></label>
                                <input type="password" id="inputPassword" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                            </div>
                            <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <form action="/" onSubmit={(event: any) => event.preventDefault()}>
                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="inline-block mb-2 text-base font-medium">Email Address <span className="text-red-500">*</span></label>
                                <input type="email" id="inputEmail" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" required />
                            </div>
                            <button type="submit" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div>
                            <label htmlFor="inputPlaceholder" className="inline-block mb-2 text-base font-medium">Input with Placeholder</label>
                            <input type="text" id="inputPlaceholder" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Placeholder" />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div>
                            <label htmlFor="inputValue" className="inline-block mb-2 text-base font-medium">Input with Value</label>
                            <input type="text" id="inputValue" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter your value" defaultValue="Input Value" />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div>
                            <label htmlFor="inputPlainReadOnly" className="inline-block mb-2 text-base font-medium">Readonly Plain Text Input</label>
                            <input type="text" id="inputPlainReadOnly" className="border-transparent form-input dark:border-transparent focus:outline-none focus:border-transparent disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-transparent dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-transparent placeholder:text-slate-400 dark:placeholder:text-zink-200" defaultValue="Readonly input" readOnly />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div>
                            <label htmlFor="inputPlainReadOnly1" className="inline-block mb-2 text-base font-medium">Readonly Input</label>
                            <input type="text" id="inputPlainReadOnly1" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" value="Readonly input" readOnly />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div>
                            <label htmlFor="inputPlainReadOnly2" className="inline-block mb-2 text-base font-medium">Disabled Input</label>
                            <input type="text" id="inputPlainReadOnly2" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" value="Disabled input" disabled />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div>
                            <label htmlFor="inputWithIcon" className="inline-block mb-2 text-base font-medium">Input with Icon</label>
                            <div className="relative">
                                <Mail className="absolute size-4 ltr:left-3 rtl:right-3 top-3 text-slate-500 dark:text-zink-200" />
                                <input type="email" id="inputWithIcon" className="ltr:pl-10 rtl:pr-10 form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter your email" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-body">
                        <div>
                            <label htmlFor="inputIconRight" className="inline-block mb-2 text-base font-medium">Input with Icon Right</label>
                            <div className="relative">
                                <Mail className="absolute size-4 ltr:right-3 rtl:left-3 top-3 text-slate-500 dark:text-zink-200" />
                                <input type="email" id="inputIconRight" className="ltr:pr-10 rtl:pl-10 form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter your email" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div>
                            <label htmlFor="inputBorderStyle" className="inline-block mb-2 text-base font-medium">Input Border Style</label>
                            <input type="text" id="inputBorderStyle" className="border-dashed form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter your text" />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div>
                            <label htmlFor="inputRoundedInput" className="inline-block mb-2 text-base font-medium">Rounded Input</label>
                            <input type="text" id="inputRoundedInput" className="rounded-full form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter your name" />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div>
                            <label htmlFor="textArea" className="inline-block mb-2 text-base font-medium">Example Textarea</label>
                            <textarea className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="textArea" rows={3}></textarea>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div>
                            <label htmlFor="inputFormText" className="inline-block mb-2 text-base font-medium">Form Text</label>
                            <input type="password" id="inputFormText" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter password" />
                            <div className="mt-1 text-xs text-slate-500 dark:text-zink-200">
                                Must be 8-20 characters long.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div>
                            <label htmlFor="inputValid" className="inline-block mb-2 text-base font-medium">Valid Text</label>
                            <input type="email" id="inputValid" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 valid:border-green-500 invalid:border-red-500 dark:valid:border-green-800 dark:invalid:border-red-800" placeholder="Enter email" defaultValue="example@gmail.com" />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div>
                            <label htmlFor="inputInvalid" className="inline-block mb-2 text-base font-medium">Invalid Text</label>
                            <input type="email" id="inputInvalid" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 valid:border-green-500 invalid:border-red-500 dark:valid:border-green-800 dark:invalid:border-red-800" placeholder="Enter email" defaultValue="example@gmail.com" />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BasicForm;