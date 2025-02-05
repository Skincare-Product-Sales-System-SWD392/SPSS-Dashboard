import React from 'react';
import { Link } from 'react-router-dom';

//import images
import EmailDashboard from 'assets/images/email-dashboard.png';

const ExperienceWidget = () => {
    return (
        <React.Fragment>
            <div className="col-span-12 card lg:col-span-6 2xl:col-span-3">
                <div className="flex flex-col h-full card-body">
                    <div className="mb-auto">
                        <h4 className="mb-2">Experience Our Fresh Email Composition Interface</h4>
                        <p className="mb-5 text-slate-500 dark:text-zink-200">A local-part, the symbol @, and a domain, which may be a domain name or an IP address enclosed in brackets.</p>
                        <Link to="/apps-mailbox" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Compose Email</Link>
                    </div>
                    <div>
                        <img src={EmailDashboard} alt="" className="h-48 ltr:ml-auto rtl:mr-auto -scale-x-100" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ExperienceWidget;
