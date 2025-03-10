import { CheckCircle, LogIn } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Completed = () => {

    const navigate = useNavigate()
    return (
        <React.Fragment>
            <div className="px-4 py-6 mx-auto text-center lg:w-2/3">
                <CheckCircle className="block size-10 mx-auto mb-4 text-green-500 fill-green-100 dark:fill-green-500/20 animate-icons"></CheckCircle>
                <h5 className="mb-2">Registration Successfully 🎉</h5>
                <p className="mb-5 text-slate-500 text-15">We are thrilled to inform you that your registration has been successfully processed! Welcome to our community. Thank you for choosing us, and we look forward to serving you. Stay connected and enjoy your journey with us!</p>
                <button type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                    onClick={() => navigate("/login")}
                ><span className="align-middle">Try Login</span> <LogIn className="inline-block h-4 ltr:ml-1 rtl:mr-1"></LogIn></button>
            </div>
        </React.Fragment>
    );
}

export default Completed;