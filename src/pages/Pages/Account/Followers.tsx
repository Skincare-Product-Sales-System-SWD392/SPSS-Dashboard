import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Image
import avatar3 from "assets/images/users/avatar-3.png"
import avatar2 from "assets/images/users/avatar-2.png"
import avatar4 from "assets/images/users/avatar-4.png"
import avatar5 from "assets/images/users/avatar-5.png"
import avatar6 from "assets/images/users/avatar-6.png"
import avatar7 from "assets/images/users/avatar-7.png"
import avatar8 from "assets/images/users/avatar-8.png"
import avatar9 from "assets/images/users/avatar-9.png"

interface EmployeeData { id: number; position: string; doj: string; imageSrc: string; name: string; email: string; phone: string; experience: string; salary: string, text: string }

const employeeData: EmployeeData[] = [
    {
        id: 1,
        position: "Executive Operations",
        doj: "15 Jan, 2023",
        imageSrc: avatar3,
        name: "Ralaphe Flores",
        email: "floral12@tailwick.com",
        phone: "+213 617 219 6245",
        experience: "1.5 years",
        salary: "$463.42",
        text: "absolute inline-block px-5 py-1 text-xs ltr:left-0 rtl:right-0 text-custom-600 bg-custom-100 dark:bg-custom-500/20 top-5 ltr:rounded-e rtl:rounded-l"
    },
    {
        id: 2,
        position: "Project Manager",
        doj: "29 Feb, 2023",
        imageSrc: avatar2,
        name: "James Lash",
        email: "jameslash@tailwick.com",
        phone: "+210 85 383 2388",
        experience: "0.5 years",
        salary: "$701.77",
        text: 'absolute inline-block px-5 py-1 text-xs text-green-600 bg-green-100 ltr:left-0 rtl:right-0 dark:bg-green-500/20 top-5 ltr:rounded-e rtl:rounded-l'
    },
    {
        id: 3,
        position: "React Developer",
        doj: "04 March, 2023",
        imageSrc: avatar4,
        name: "Angus Garnsey",
        email: "angusgarnsey@tailwick.com",
        phone: "+210 41521 1325",
        experience: "0.7 years",
        salary: "$478.32",
        text: "absolute inline-block px-5 py-1 text-xs ltr:left-0 rtl:right-0 text-sky-600 bg-sky-100 dark:bg-sky-500/20 top-5 ltr:rounded-e rtl:rounded-l"
    },
    {
        id: 4,
        position: "Shopify Developer",
        doj: "11 March, 2023",
        imageSrc: avatar5,
        name: "Matilda Marston",
        email: "matildamarston@tailwick.com",
        phone: "+210 082 288 1065",
        experience: "1 year",
        salary: "$120.37",
        text: "absolute inline-block px-5 py-1 text-xs text-yellow-600 bg-yellow-100 ltr:left-0 rtl:right-0 dark:bg-yellow-500/20 top-5 ltr:rounded-e rtl:rounded-l"
    },
    {
        id: 5,
        position: "Angular Developer",
        doj: "22 March, 2023",
        imageSrc: avatar6,
        name: "Zachary Benjamin",
        email: "zacharybenjamin@tailwick.com",
        phone: "+120 348 9730 237",
        experience: "0 years",
        salary: "$89.99",
        text: "absolute inline-block px-5 py-1 text-xs text-red-600 bg-red-100 ltr:left-0 rtl:right-0 dark:bg-red-500/20 top-5 ltr:rounded-e rtl:rounded-l"
    },
    {
        id: 6,
        position: "Graphic Designer",
        doj: "09 June, 2023",
        imageSrc: avatar7,
        name: "Ruby Chomley",
        email: "rubychomley@tailwick.com",
        phone: "+120 1234 56789",
        experience: "0.2 years",
        salary: "$214.82",
        text: "absolute inline-block px-5 py-1 text-xs text-purple-600 bg-purple-100 ltr:left-0 rtl:right-0 dark:bg-purple-500/20 top-5 ltr:rounded-e rtl:rounded-l"
    },
    {
        id: 7,
        position: "Shopify Developer",
        doj: "27 June, 2023",
        imageSrc: avatar8,
        name: "Jesse Edouardy",
        email: "jessedouard@tailwick.com",
        phone: "+87 044 017 3869",
        experience: "1.7 years",
        salary: "$278.96",
        text: "absolute inline-block px-5 py-1 text-xs text-yellow-600 bg-yellow-100 ltr:left-0 rtl:right-0 dark:bg-yellow-500/20 top-5 ltr:rounded-e rtl:rounded-l"
    },
    {
        id: 8,
        position: "Team Leader",
        doj: "15 July, 2023",
        imageSrc: avatar9,
        name: "Xavier Bower",
        email: "xavierbower@tailwick.com",
        phone: "+159 98765 32451",
        experience: "6.7 years",
        salary: "$901.94",
        text: "absolute inline-block px-5 py-1 text-xs text-orange-600 bg-orange-100 ltr:left-0 rtl:right-0 dark:bg-orange-500/20 top-5 ltr:rounded-e rtl:rounded-l"
    },
];

const Followers = () => {
    return (
        <React.Fragment>
            <h5 className="mb-4 underline">Followers</h5>

            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-x-5">
                {(employeeData || [])?.map((employee: EmployeeData, index: number) => (
                    <div key={index} className="relative card">
                        <div className="card-body">
                            <p className={employee.text}>{employee.position}</p>
                            <div className="flex items-center justify-end">
                                <p className="text-slate-500 dark:text-zink-200">Doj : {employee.doj}</p>
                            </div>
                            <div className="mt-4 text-center">
                                <div className="flex justify-center">
                                    <div className="size-20 overflow-hidden rounded-full bg-slate-100">
                                        <img src={employee.imageSrc} alt="" className="" />
                                    </div>
                                </div>
                                <a href="#!">
                                    <h4 className="mt-4 mb-2 font-semibold text-16">{employee.name}</h4>
                                </a>
                                <div className="text-slate-500 dark:text-zink-200">
                                    <p className="mb-1">{employee.email}</p>
                                    <p>{employee.phone}</p>
                                    <p className="inline-block px-3 py-1 my-4 font-semibold rounded-md text-slate-600 bg-slate-100 dark:bg-zink-600 dark:text-zink-200">Exp. : {employee.experience}</p>
                                    <h4 className="text-15 text-custom-500">Salary : {employee.salary}
                                        <span className="text-xs font-normal text-slate-500 dark:text-zink-200">/ Month</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center gap-4 mb-4 md:flex-row">
                <div className="grow">
                    <p className="text-slate-500 dark:text-zink-200">Showing <b>8</b> of <b>18</b> Results</p>
                </div>
                <ul className="flex flex-wrap items-center gap-2">
                    <li>
                        <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">
                            <ChevronLeft className="size-4 rtl:rotate-180"></ChevronLeft>
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">1</a>
                    </li>
                    <li>
                        <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">2</a>
                    </li>
                    <li>
                        <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto active">3</a>
                    </li>
                    <li>
                        <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">4</a>
                    </li>
                    <li>
                        <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">5</a>
                    </li>
                    <li>
                        <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">6</a>
                    </li>
                    <li>
                        <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">
                            <ChevronRight className="size-4 rtl:rotate-180" />
                        </a>
                    </li>
                </ul>
            </div>
        </React.Fragment >
    );
}

export default Followers;