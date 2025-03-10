import React from "react";

// Image
import logoLight from "assets/images/logo-light.png"
import logoDark from "assets/images/logo-dark.png"
import { Link } from "react-router-dom";

const ComingSoon = () => {

    document.title = "Coming Soon | Tailwick - React Admin & Dashboard Template";

    React.useEffect(() => {
        const bodyElement = document.body;

        bodyElement.classList.add('flex', 'items-center', 'justify-center', 'min-h-screen', 'py-16', 'bg-cover', 'bg-auth-pattern', 'dark:bg-auth-pattern-dark', 'font-public');

        return () => {
            bodyElement.classList.remove('flex', 'items-center', 'justify-center', 'min-h-screen', 'py-16', 'bg-cover', 'bg-auth-pattern', 'dark:bg-auth-pattern-dark', 'font-public');
        }
    }, []);

    const [countDownBlock, setCountDownBlock] = React.useState(null);

    React.useEffect(() => {
        const countdownVal = new Date().getTime() + 15000;
        const countDownDate = new Date(countdownVal).getTime();

        const countDown = setInterval(() => {
            const currentTime = new Date().getTime();
            const distance = countDownDate - currentTime;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            const countDownBlock: any = (

                <div id="countDownText">
                    <Link to="/">
                        <img src={logoLight} alt="" className="hidden h-6 mx-auto dark:block" />
                        <img src={logoDark} alt="" className="block h-6 mx-auto dark:hidden" />
                    </Link>

                    <div className="mt-8 text-center">
                        <h4 className="mb-2 text-purple-500 dark:text-purple-500">Coming Soon ...</h4>
                        <p className="text-slate-500 dark:text-zink-200">We'll be here in a brief moment.</p>
                    </div>

                    <div>
                        <div className="mt-8">
                            <div className="flex items-center justify-between mt-14">
                                <div data-countdown="Oct 30, 2025" className="flex flex-wrap gap-3 countdownlist">
                                    <div className="flex flex-col items-center justify-center size-24 p-2 text-center bg-white rounded dark:bg-zink-600/50 countdownlist-item">
                                        <div className="count-title text-slate-500 dark:text-zink-200">Days</div>
                                        <div className="mt-2 text-2xl font-semibold count-num dark:text-zink-50">{days}</div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center size-24 p-2 text-center bg-white rounded dark:bg-zink-600/50 countdownlist-item">
                                        <div className="count-title text-slate-500 dark:text-zink-200">Hours</div>
                                        <div className="mt-2 text-2xl font-semibold count-num dark:text-zink-50">{hours}</div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center size-24 p-2 text-center bg-white rounded dark:bg-zink-600/50 countdownlist-item">
                                        <div className="count-title text-slate-500 dark:text-zink-200">Minutes</div>
                                        <div className="mt-2 text-2xl font-semibold count-num dark:text-zink-50">{minutes}</div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center size-24 p-2 text-center bg-white rounded dark:bg-zink-600/50 countdownlist-item">
                                        <div className="count-title text-slate-500 dark:text-zink-200">Seconds</div>
                                        <div className="mt-2 text-2xl font-semibold count-num dark:text-zink-50">{seconds}</div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="mt-10 text-center">
                            <h5 className="mb-2">Be alerted when our launch happens.</h5>
                            <p className="mb-5 text-slate-500 dark:text-zink-200">Don't worry, we won't inundate your inbox 😊</p>
                            <form action="#!" className="relative">
                                <input type="email" id="inputEmail" className="py-2.5 form-input dark:bg-zink-600/50 border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Enter your email" required />
                                <button type="submit" className="px-2.5 py-1.5 text-sm text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 absolute top-[5px] ltr:right-1 rtl:left-1">Send</button>
                            </form>
                        </div>

                    </div>
                </div>


            );
            if (distance < 0) {
                clearInterval(countDown);
                const successBlock: any = (


                    <div id="countDownText">
                        <div className="text-center">
                            <i className="text-4xl text-green-500 ri-verified-badge-line"></i>
                            <div className="mt-5 mb-4">
                                <h4 className="mb-2">We've Launched our new website</h4>
                                <p className="text-slate-500 dark:text-zink-200">Click the below button to visit our website.</p>
                            </div>
                            <Link to="/" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Back to Home</Link>
                        </div>
                    </div>

                );
                setCountDownBlock(successBlock);
            } else {
                setCountDownBlock(countDownBlock);
            }
        }, 1000);

        return () => clearInterval(countDown);
    }, []);

    return (
        <React.Fragment>
            <div className="mb-0 border-none shadow-none lg:w-[500px] card bg-white/70 dark:bg-zink-500/70">
                <div className="!px-10 !py-12 card-body">
                    {countDownBlock}
                </div>
            </div>
        </React.Fragment>
    );
}

export default ComingSoon;