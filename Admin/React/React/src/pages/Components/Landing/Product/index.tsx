import React from "react";
import { ChevronUp } from "lucide-react";
import Navbar from "./Navbar";
import Home from "./Home";
import OurProduct from "./OurProduct";
import Features from "./Features";
import AboutUs from "./AboutUs";
import Feedback from "./Feedback";
import Footer from "./Footer";

const Product = () => {
    document.title = "Product Landing Page | Tailwick - React Admin & Dashboard Template";

    const windowScroll = () => {
        const backToTop = document.getElementById("back-to-top");
        if (backToTop) {
            if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                backToTop.style.opacity = "1";
            } else {
                backToTop.style.opacity = "0";
            }
        }
    };

    React.useEffect(() => {
        window.addEventListener('scroll', windowScroll);

        window.addEventListener('load', windowScroll);

        return () => {
            window.removeEventListener('scroll', windowScroll);
        };
    }, []);

    const handleScroll = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    React.useEffect(() => {
        const bodyElement = document.body;

        bodyElement.classList.add(
            "text-base",
            "bg-white",
            "text-body",
            "font-public",
            "dark:text-zink-50",
            "dark:bg-zink-800"
        );
    }, []);

    return (
        <React.Fragment>
            <div className="text-base bg-white text-body font-public dark:text-zink-50 dark:bg-zinc-900">
                <Navbar />
                <Home />
                <OurProduct />
                <Features />
                <AboutUs />
                <Feedback />
                <Footer />
                <button id="back-to-top"
                    className="fixed flex items-center justify-center size-10 text-white bg-purple-500 rounded-md bottom-10 right-10"
                    onClick={handleScroll}>
                    <ChevronUp className="animate animate-icons"></ChevronUp>
                </button>
            </div>
        </React.Fragment>
    );
}

export default Product;