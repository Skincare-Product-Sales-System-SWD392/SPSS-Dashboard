import React from "react";
import { Dropdown } from "Common/Components/Dropdown";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Eye, FileEdit, MoreHorizontal, Trash2 } from "lucide-react";

// Image
import adword from "assets/images/brand/adwords.png"
import appStore from "assets/images/brand/app-store.png"
import android from "assets/images/brand/android.png"
import figma from "assets/images/brand/figma.png"
import gmail from "assets/images/brand/gmail.png"
import meta from "assets/images/brand/meta.png"
import search from "assets/images/brand/search.png"
import twitter from "assets/images/brand/twitter.png"

interface ProjectItem { id: number; imageSrc: string; title: string; description: string; dueDate: string; budget: string; completionPercentage: number; text: string }

const projectItems: ProjectItem[] = [
    {
        id: 1,
        imageSrc: adword,
        title: "Chat App",
        description: "Allows you to communicate with your customers in web chat rooms.",
        dueDate: "16 July, 2023",
        budget: "$8,740.00",
        completionPercentage: 25,
        text: "custom"
    },
    {
        id: 2,
        imageSrc: appStore,
        title: "Business Template - UI/UX design",
        description: "UX design process is iterative and non-linear, includes a lot of research.",
        dueDate: "28 Nov, 2023",
        budget: "$10,254.00",
        completionPercentage: 61,
        text: "sky"
    },
    {
        id: 3,
        imageSrc: android,
        title: "ABC Project Customization",
        description: "The process of tailoring the overall project delivery process to meet the requirements.",
        dueDate: "20 Oct, 2023",
        budget: "$9,832.00",
        completionPercentage: 87,
        text: "green"
    },
    {
        id: 4,
        imageSrc: figma,
        title: "Tailwick Design",
        description: "Drawing created with Microsoft Expression Design, a drawing and design program for Windows.",
        dueDate: "07 Dec, 2023",
        budget: "$11,971.00",
        completionPercentage: 65,
        text: "purple"
    },
    {
        id: 5,
        imageSrc: gmail,
        title: "HR Management",
        description: "The strategic approach to nurturing and supporting employees and ensuring a positive.",
        dueDate: "02 Jan, 2024",
        budget: "$7,546.00",
        completionPercentage: 65,
        text: "purple"
    },
    {
        id: 6,
        imageSrc: meta,
        title: "Finance Apps",
        description: "A personal budget app is a technology solution that is connected.",
        dueDate: "10 Feb, 2024",
        budget: "$13,745.00",
        completionPercentage: 65,
        text: "purple"
    },
    {
        id: 7,
        imageSrc: search,
        title: "Mailbox Design",
        description: "An email template is an HTML preformatted email that you can use to create your own.",
        dueDate: "19 Feb, 2024",
        budget: "$9,120.00",
        completionPercentage: 65,
        text: "purple"
    },
    {
        id: 8,
        imageSrc: twitter,
        title: "Banking Management",
        description: "Bank management refers to the process of managing the Bank's statutory activity.",
        dueDate: "01 March, 2024",
        budget: "$24,863.00",
        completionPercentage: 65,
        text: "purple"
    },
];

const ProjectsTabs = () => {
    return (
        <React.Fragment>
            <div className="flex items-center gap-3 mb-4">
                <h5 className="underline grow">Projects</h5>
                <div className="shrink-0">
                    <button type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Add Project</button>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2 2xl:grid-cols-4">
                {(projectItems || [])?.map((project: ProjectItem) => (
                    <div key={project.id} className="card">
                        <div className="card-body">
                            <div className="flex">
                                <div className="grow">
                                    <img src={project.imageSrc} alt="" className="h-11" />
                                </div>
                                <div className="shrink-0">
                                    <Dropdown className="relative">
                                        <Dropdown.Trigger className="flex items-center justify-center size-[37.5px] dropdown-toggle p-0 text-slate-500 btn bg-slate-200 border-slate-200 hover:text-slate-600 hover:bg-slate-300 hover:border-slate-300 focus:text-slate-600 focus:bg-slate-300 focus:border-slate-300 focus:ring focus:ring-slate-100 active:text-slate-600 active:bg-slate-300 active:border-slate-300 active:ring active:ring-slate-100 dark:bg-zink-600 dark:hover:bg-zink-500 dark:border-zink-600 dark:hover:border-zink-500 dark:text-zink-200 dark:ring-zink-400/50" id={`projectDropdownmenu${project.id}`} data-bs-toggle="dropdown">
                                            <MoreHorizontal className="size-4"></MoreHorizontal>
                                        </Dropdown.Trigger>
                                        <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 text-left list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem]" aria-labelledby={`projectDropdownmenu${project.id}`}>
                                            <li>
                                                <a className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear bg-white text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500" href="#!">
                                                    <Eye className="inline-block size-3 mr-1"></Eye> Overview
                                                </a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear bg-white text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500" href="#!">
                                                    <FileEdit className="inline-block size-3 mr-1"></FileEdit> Edit
                                                </a>
                                            </li>
                                            <li>
                                                <a className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear bg-white text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500" href="#!">
                                                    <Trash2 className="inline-block size-3 mr-1"></Trash2> Delete
                                                </a>
                                            </li>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="mt-4">
                                <h6 className="mb-1 text-16"><a href="#!">{project.title}</a></h6>
                                <p className="text-slate-500 dark:text-zink-200">{project.description}</p>
                            </div>

                            <div className="flex w-full gap-3 mt-6 text-center divide-x divide-slate-200 dark:divide-zink-500 rtl:divide-x-reverse">
                                <div className="px-3 grow">
                                    <h6 className="mb-1">{project.dueDate}</h6>
                                    <p className="text-slate-500 dark:text-zink-200">Due Date</p>
                                </div>
                                <div className="px-3 grow">
                                    <h6 className="mb-1">{project.budget}</h6>
                                    <p className="text-slate-500 dark:text-zink-200">Budget</p>
                                </div>
                            </div>

                            <div className="w-full h-1.5 mt-6 rounded-full bg-slate-100 dark:bg-zink-600">
                                <div className={`h-1.5 rounded-full bg-${project.text}-500`} style={{ width: `${project.completionPercentage}%` }}></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-center gap-4 mt-2 mb-4 md:flex-row">
                <div className="grow">
                    <p className="text-slate-500 dark:text-zink-200">Showing <b>8</b> of <b>30</b> Results</p>
                </div>
                <ul className="flex flex-wrap items-center gap-2 shrink-0">
                    <li>
                        <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">
                            <ChevronsLeft className="size-4 rtl:rotate-180"></ChevronsLeft>
                        </a>
                    </li>
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
                            <ChevronRight className="size-4 rtl:rotate-180"></ChevronRight>
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="inline-flex items-center justify-center bg-white dark:bg-zink-700 size-8 transition-all duration-150 ease-linear border border-slate-200 dark:border-zink-500 rounded text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 [&.active]:text-custom-50 dark:[&.active]:text-custom-50 [&.active]:bg-custom-500 dark:[&.active]:bg-custom-500 [&.active]:border-custom-500 dark:[&.active]:border-custom-500 [&.disabled]:text-slate-400 dark:[&.disabled]:text-zink-300 [&.disabled]:cursor-auto">
                            <ChevronsRight className="size-4 rtl:rotate-180"></ChevronsRight>
                        </a>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}

export default ProjectsTabs;