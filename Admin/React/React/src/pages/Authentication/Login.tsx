import React from "react";
import { Facebook, Github, Mail, Twitter } from "lucide-react";

// Formik validation
import * as Yup from "yup";
import { useFormik as useFormic } from "formik";

// Image
import logoLight from "assets/images/logo-light.png";
import logoDark from "assets/images/logo-dark.png";
import { loginUser, socialLogin } from "slices/thunk";
import { useDispatch, useSelector } from "react-redux";
import withRouter from "Common/withRouter";
import { createSelector } from 'reselect';
import AuthIcon from "pages/AuthenticationInner/AuthIcon";
import { Link } from "react-router-dom";

const Login = (props: any) => {

    document.title = "Login | Tailwick - React Admin & Dashboard Template";

    const dispatch = useDispatch<any>();

    const selectLogin = createSelector(
        (state: any) => state.Register,
        (state: any) => state.Login,
        (register, login) => ({
            user: register.user,
            success: login.success,
            error: login.error
        })
    )

    const { user, success, error } = useSelector(selectLogin)

    const validation: any = useFormic({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            email: user.email || "admin@themesbrand.com" || '',
            password: user.password || "123456" || '',
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Please Enter Your email"),
            password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: (values: any) => {
            dispatch(loginUser(values, props.router.navigate));
        }
    });

    const signIn = (type: any) => {
        dispatch(socialLogin(type, props.router.navigate))
    }

    const socialResponse = (type: any) => {
        signIn(type)
    }

    React.useEffect(() => {
        const bodyElement = document.body;

        bodyElement.classList.add('flex', 'items-center', 'justify-center', 'min-h-screen', 'py-16', 'lg:py-10', 'bg-slate-50', 'dark:bg-zink-800', 'dark:text-zink-100', 'font-public');

        return () => {
            bodyElement.classList.remove('flex', 'items-center', 'justify-center', 'min-h-screen', 'py-16', 'lg:py-10', 'bg-slate-50', 'dark:bg-zink-800', 'dark:text-zink-100', 'font-public');
        }
    }, []);

    return (
        <React.Fragment>
            <div className="relative">
                <AuthIcon />

                <div className="mb-0 w-screen lg:mx-auto lg:w-[500px] card shadow-lg border-none shadow-slate-100 relative">
                    <div className="!px-10 !py-12 card-body">
                        <Link to="/">
                            <img src={logoLight} alt="" className="hidden h-6 mx-auto dark:block" />
                            <img src={logoDark} alt="" className="block h-6 mx-auto dark:hidden" />
                        </Link>

                        <div className="mt-8 text-center">
                            <h4 className="mb-1 text-custom-500 dark:text-custom-500">Welcome Back !</h4>
                            <p className="text-slate-500 dark:text-zink-200">Sign in to continue to Tailwick.</p>
                        </div>

                        <form className="mt-10" id="signInForm"
                            onSubmit={(event: any) => {
                                event.preventDefault();
                                validation.handleSubmit();
                                return false;
                            }}>
                            {success && <div className="px-4 py-3 mb-3 text-sm text-green-500 border border-green-200 rounded-md bg-green-50 dark:bg-green-400/20 dark:border-green-500/50" id="successAlert">
                                You have <b>successfully</b> signed in.
                            </div>}
                            {error && <div className="px-4 py-3 mb-3 text-sm text-red-500 border border-red-200 rounded-md bg-red-50 dark:bg-red-400/20 dark:border-red-500/50" id="successAlert">
                                You have <b>failed</b> signed in.
                            </div>}
                            <div className="mb-3">
                                <label htmlFor="email" className="inline-block mb-2 text-base font-medium">UserName/ Email ID</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter username or email"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.email || ""}
                                />
                                {validation.touched.email && validation.errors.email ? (
                                    <div id="email-error" className="mt-1 text-sm text-red-500">{validation.errors.email}</div>
                                ) : null}

                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="inline-block mb-2 text-base font-medium">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                                    placeholder="Enter password"
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.password || ""}
                                />
                                {validation.touched.password && validation.errors.password ? (
                                    <div id="password-error" className="mt-1 text-sm text-red-500">{validation.errors.password}</div>
                                ) : null}
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <input id="checkboxDefault1" className="size-4 border rounded-sm appearance-none bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-custom-500 checked:border-custom-500 dark:checked:bg-custom-500 dark:checked:border-custom-500 checked:disabled:bg-custom-400 checked:disabled:border-custom-400" type="checkbox" value="" />
                                    <label htmlFor="checkboxDefault1" className="inline-block text-base font-medium align-middle cursor-pointer">Remember me</label>
                                </div>
                                {/* <div id="remember-error" className="hidden mt-1 text-sm text-red-500">Please check the "Remember me" before submitting the form.</div> */}
                            </div>
                            <div className="mt-10">
                                <button type="submit" className="w-full text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Sign In</button>
                            </div>

                            <div className="relative text-center my-9 before:absolute before:top-3 before:left-0 before:right-0 before:border-t before:border-t-slate-200 dark:before:border-t-zink-500">
                                <h5 className="inline-block px-2 py-0.5 text-sm bg-white text-slate-500 dark:bg-zink-600 dark:text-zink-200 rounded relative">Sign In with</h5>
                            </div>

                            <div className="flex flex-wrap justify-center gap-2">
                                <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 active:text-white active:bg-custom-600 active:border-custom-600"
                                    onClick={(e: any) => {
                                        e.preventDefault();
                                        socialResponse("facebook")
                                    }}
                                >
                                    <Facebook className="size-4"></Facebook>
                                </button>
                                <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-orange-500 border-orange-500 hover:text-white hover:bg-orange-600 hover:border-orange-600 focus:text-white focus:bg-orange-600 focus:border-orange-600 active:text-white active:bg-orange-600 active:border-orange-600"
                                    onClick={(e: any) => {
                                        e.preventDefault();
                                        socialResponse("google")
                                    }}>
                                    <Mail className="size-4"></Mail>
                                </button>
                                <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-sky-500 border-sky-500 hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600 active:text-white active:bg-sky-600 active:border-sky-600">
                                    <Twitter className="size-4"></Twitter>
                                </button>
                                <button type="button" className="flex items-center justify-center size-[37.5px] transition-all duration-200 ease-linear p-0 text-white btn bg-slate-500 border-slate-500 hover:text-white hover:bg-slate-600 hover:border-slate-600 focus:text-white focus:bg-slate-600 focus:border-slate-600 active:text-white active:bg-slate-600 active:border-slate-600">
                                    <Github className="size-4"></Github>
                                </button>
                            </div>

                            <div className="mt-10 text-center">
                                <p className="mb-0 text-slate-500 dark:text-zink-200">Don't have an account ? <Link to="/register" className="font-semibold underline transition-all duration-150 ease-linear text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500"> SignUp</Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default withRouter(Login);