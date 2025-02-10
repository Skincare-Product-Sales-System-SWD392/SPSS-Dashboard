import React, { ChangeEvent } from "react";
import { BadgeCheck, Dribbble, Facebook, Github, Globe, ImagePlus, Instagram, Linkedin, Mail, MapPin, MoreHorizontal, UserCircle } from "lucide-react";
import { Dropdown } from "Common/Components/Dropdown";

// IMage
import avatar1 from "assets/images/users/avatar-1.png";

const AccountInfo = ({ className }: any) => {

    const [selectedImage, setSelectedImage] = React.useState<string | ArrayBuffer | null>(avatar1);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {

        const file = event.target.files?.[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    return (
        <React.Fragment>
            <div className={className}>
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 2xl:grid-cols-12">
                    <div className="lg:col-span-2 2xl:col-span-1">
                        <div className="relative inline-block size-20 rounded-full shadow-md bg-slate-100 profile-user xl:size-28">
                            <img src={selectedImage?.toString() ?? avatar1} alt="" className="object-cover border-0 rounded-full img-thumbnail user-profile-image" />
                            <div className="absolute bottom-0 flex items-center justify-center size-8 rounded-full ltr:right-0 rtl:left-0 profile-photo-edit">
                                <input id="profile-img-file-input" type="file"
                                    className="hidden profile-img-file-input"
                                    onChange={handleImageChange} />
                                <label htmlFor="profile-img-file-input" className="flex items-center justify-center size-8 bg-white rounded-full shadow-lg cursor-pointer dark:bg-zink-600 profile-photo-edit">
                                    <ImagePlus className="size-4 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-500"></ImagePlus>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-10 2xl:col-span-9">
                        <h5 className="mb-1">Paula Keenan <BadgeCheck className="inline-block size-4 text-sky-500 fill-sky-100 dark:fill-custom-500/20"></BadgeCheck></h5>
                        <div className="flex gap-3 mb-4">
                            <p className="text-slate-500 dark:text-zink-200"><UserCircle className="inline-block size-4 ltr:mr-1 rtl:ml-1 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-500"></UserCircle> CEO & Founder</p>
                            <p className="text-slate-500 dark:text-zink-200"><MapPin className="inline-block size-4 ltr:mr-1 rtl:ml-1 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-500"></MapPin> Los Angeles, California</p>
                        </div>
                        <ul className="flex flex-wrap gap-3 mt-4 text-center divide-x divide-slate-200 dark:divide-zink-500 rtl:divide-x-reverse">
                            <li className="px-5">
                                <h5>1542</h5>
                                <p className="text-slate-500 dark:text-zink-200">Following</p>
                            </li>
                            <li className="px-5">
                                <h5>10.65k</h5>
                                <p className="text-slate-500 dark:text-zink-200">Followers</p>
                            </li>
                            <li className="px-5">
                                <h5>115+</h5>
                                <p className="text-slate-500 dark:text-zink-200">Products</p>
                            </li>
                        </ul>
                        <p className="mt-4 text-slate-500 dark:text-zink-200">Strong leader and negotiator adept at driving collaboration and innovation. Highly accomplished CEO & Founder with 10+ years of experience creating, launching and leading successful business ventures. Proven ability to build relationships, drive customer loyalty and increase profitability.</p>
                        <div className="flex gap-2 mt-4">
                            <a href="#!" className="flex items-center justify-center transition-all duration-200 ease-linear rounded size-9 text-sky-500 bg-sky-100 hover:bg-sky-200 dark:bg-sky-500/20 dark:hover:bg-sky-500/30">
                                <Facebook className="size-4"></Facebook>
                            </a>
                            <a href="#!" className="flex items-center justify-center text-pink-500 transition-all duration-200 ease-linear bg-pink-100 rounded size-9 hover:bg-pink-200 dark:bg-pink-500/20 dark:hover:bg-pink-500/30">
                                <Instagram className="size-4"></Instagram>
                            </a>
                            <a href="#!" className="flex items-center justify-center text-red-500 transition-all duration-200 ease-linear bg-red-100 rounded size-9 hover:bg-red-200 dark:bg-red-500/20 dark:hover:bg-red-500/30">
                                <Globe className="size-4"></Globe>
                            </a>
                            <a href="#!" className="flex items-center justify-center transition-all duration-200 ease-linear rounded text-custom-500 bg-custom-100 size-9 hover:bg-custom-200 dark:bg-custom-500/20 dark:hover:bg-custom-500/30">
                                <Linkedin className="size-4"></Linkedin>
                            </a>
                            <a href="#!" className="flex items-center justify-center text-pink-500 transition-all duration-200 ease-linear bg-pink-100 rounded size-9 hover:bg-pink-200 dark:bg-pink-500/20 dark:hover:bg-pink-500/30">
                                <Dribbble className="size-4"></Dribbble>
                            </a>
                            <a href="#!" className="flex items-center justify-center transition-all duration-200 ease-linear rounded size-9 text-slate-500 bg-slate-100 hover:bg-slate-200 dark:bg-zink-600 dark:hover:bg-zink-500">
                                <Github className="size-4"></Github>
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-12 2xl:col-span-2">
                        <div className="flex gap-2 2xl:justify-end">
                            <a href="mailto:themesdesign@gmail.com" className="flex items-center justify-center size-[37.5px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20">
                                <Mail className="size-4"></Mail>
                            </a>
                            <button type="button" className="text-white transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">Hire Us</button>

                            <Dropdown className="relative">
                                <Dropdown.Trigger className="flex items-center justify-center size-[37.5px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20" id="accountSettings" data-bs-toggle="dropdown">
                                    <MoreHorizontal className="size-4"></MoreHorizontal>
                                </Dropdown.Trigger>
                                <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white dark:bg-zink-600 rounded-md shadow-md dropdown-menu min-w-[10rem]" aria-labelledby="accountSettings">
                                    <li className="px-3 mb-2 text-sm text-slate-500">
                                        Payments
                                    </li>
                                    <li>
                                        <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="#!">Create Invoice</a>
                                    </li>
                                    <li>
                                        <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="#!">Pending Billing</a>
                                    </li>
                                    <li>
                                        <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="#!">Genarate Bill</a>
                                    </li>
                                    <li>
                                        <a className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" href="#!">Subscription</a>
                                    </li>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}

export default AccountInfo;