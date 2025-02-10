import React from "react";
import { ArrowDownToLine, ChevronLeft, ChevronRight, Eye, FileEdit, Trash2 } from "lucide-react";

interface FileItem { id: number; type: string; name: string; size: string; date: string; uploadedBy: string; status: string; text: string }

const fileItems: FileItem[] = [
    {
        id: 1,
        type: "Docs",
        name: "Tailwick Docs File",
        size: "2.5MB",
        date: "15 Feb, 2023",
        uploadedBy: "Admin",
        status: "Successful",
        text: "px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent"
    },
    {
        id: 2,
        type: "PSD",
        name: "Tailwick Design Kit.psd",
        size: "234.87 MB",
        date: "29 Jan, 2023",
        uploadedBy: "Themesdesign",
        status: "Successful",
        text: "px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent"
    },
    {
        id: 3,
        type: "SVG",
        name: "home Pattern Wave.svg",
        size: "3.87 MB",
        date: "24 Sept, 2023",
        uploadedBy: "Admin",
        status: "Error",
        text: "px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent"
    },
    {
        id: 4,
        type: "SCSS",
        name: "tailwind.scss",
        size: "0.100 KB",
        date: "03 April, 2023",
        uploadedBy: "Paula",
        status: "Successful",
        text: "px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent"
    },
    {
        id: 5,
        type: "MP4",
        name: "Tailwick Guide Video.mp4",
        size: "149.33 MB",
        date: "12 Nov, 2023",
        uploadedBy: "Themesdesign",
        status: "Pending",
        text: "px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-yellow-100 border-transparent text-yellow-500 dark:bg-yellow-500/20 dark:border-transparent"
    },
];

const Documents = () => {
    return (
        <React.Fragment>
            <div className="flex items-center gap-3 mb-4">
                <h5 className="underline grow">Documents</h5>
                <div className="shrink-0">
                    <button data-modal-target="addDocuments" type="button" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Add Document</button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full align-middle border-separate whitespace-nowrap border-spacing-y-1">
                    <thead className="text-left bg-white dark:bg-zink-700">
                        <tr>
                            <th className="px-3.5 py-2.5 font-semibold border-b border-transparent">
                                <div className="flex items-center h-full">
                                    <input id="Checkbox1" className="size-4 bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" defaultValue="" />
                                </div>
                            </th>
                            <th className="px-3.5 py-2.5 font-semibold border-b border-transparent">Documents Type</th>
                            <th className="px-3.5 py-2.5 font-semibold border-b border-transparent">Documents Name</th>
                            <th className="px-3.5 py-2.5 font-semibold border-b border-transparent">File Size</th>
                            <th className="px-3.5 py-2.5 font-semibold border-b border-transparent">Modify Date</th>
                            <th className="px-3.5 py-2.5 font-semibold border-b border-transparent">Uploaded</th>
                            <th className="px-3.5 py-2.5 font-semibold border-b border-transparent">Status</th>
                            <th className="px-3.5 py-2.5 font-semibold border-b border-transparent text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(fileItems || [])?.map((item: FileItem, index: number) => (
                            <tr key={index} className="bg-white dark:bg-zink-700">
                                <td className="px-3.5 py-2.5 border-y border-transparent">
                                    <div className="flex items-center h-full">
                                        <input
                                            id={`Checkbox${item.id}`}
                                            className="size-4 bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800"
                                            type="checkbox"
                                            value=""
                                        />
                                    </div>
                                </td>
                                <td className="px-3.5 py-2.5 border-y border-transparent">
                                    <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-slate-100 border-transparent text-slate-500 dark:bg-slate-500/20 dark:text-zink-200 dark:border-transparent">{item.type}</span>
                                </td>
                                <td className="px-3.5 py-2.5 border-y border-transparent">{item.name}</td>
                                <td className="px-3.5 py-2.5 border-y border-transparent">{item.size}</td>
                                <td className="px-3.5 py-2.5 border-y border-transparent">{item.date}</td>
                                <td className="px-3.5 py-2.5 border-y border-transparent">{item.uploadedBy}</td>
                                <td className="px-3.5 py-2.5 border-y border-transparent">
                                    <span className={item.text}>{item.status}</span>
                                </td>
                                <td className="px-3.5 py-2.5 border-y border-transparent">
                                    <div className="flex items-center justify-end gap-2">
                                        <a href="#!" className="flex items-center justify-center size-8 transition-all duration-150 ease-linear rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-zink-600 dark:hover:bg-zink-500">
                                            <Eye className="size-3"></Eye>
                                        </a>
                                        <a href="#!" className="flex items-center justify-center size-8 transition-all duration-150 ease-linear rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-zink-600 dark:hover:bg-zink-500">
                                            <FileEdit className="size-3"></FileEdit>
                                        </a>
                                        <a href="#!" className="flex items-center justify-center size-8 transition-all duration-150 ease-linear rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-zink-600 dark:hover:bg-zink-500">
                                            <ArrowDownToLine className="size-3"></ArrowDownToLine>
                                        </a>
                                        <a href="#!" className="flex items-center justify-center size-8 transition-all duration-150 ease-linear rounded-md bg-slate-100 hover:bg-slate-200 dark:bg-zink-600 dark:hover:bg-zink-500">
                                            <Trash2 className="size-3"></Trash2>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex flex-col items-center gap-4 mt-4 mb-4 md:flex-row">
                <div className="grow">
                    <p className="text-slate-500 dark:text-zink-200">Showing <b>6</b> of <b>18</b> Results</p>
                </div>
                <ul className="flex flex-wrap items-center gap-2 shrink-0">
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
                </ul>
            </div>
        </React.Fragment>
    );
}

export default Documents;