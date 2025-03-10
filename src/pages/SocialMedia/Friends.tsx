import React, { useCallback, useEffect, useMemo, useState } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import { Link } from 'react-router-dom';
import { Dropdown } from 'Common/Components/Dropdown';
import TableContainer from 'Common/TableContainer';

// Icons
import { Plus, UserRoundX, BadgeCheck, Home, UserRound, CalendarDays, Clapperboard, ShoppingCart, Settings, ChevronDown, Search } from 'lucide-react';

// Images
import avatar1 from "assets/images/users/avatar-1.png";
import avatar2 from "assets/images/users/avatar-2.png";
import avatar3 from "assets/images/users/avatar-3.png";
import avatar4 from "assets/images/users/avatar-4.png";
import avatar5 from "assets/images/users/avatar-5.png";
import avatar6 from "assets/images/users/avatar-6.png";
import avatar7 from "assets/images/users/avatar-7.png";
import avatar8 from "assets/images/users/avatar-8.png";
import avatar9 from "assets/images/users/avatar-9.png";
import avatar10 from "assets/images/users/avatar-10.png";

import adwords from "assets/images/brand/adwords.png";
import twitter from "assets/images/brand/twitter.png";
import meta from "assets/images/brand/meta.png";
import figma from "assets/images/brand/figma.png";

// react-redux
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import {
    getSocialFriends as onGetSocialFriends
} from 'slices/thunk';

const Friends = () => {

    const dispatch = useDispatch<any>();

    const selectDataList = createSelector(
        (state: any) => state.Social,
        (state) => ({
            dataList: state.friendslist
        })
    );

    const { dataList } = useSelector(selectDataList);

    const [data, setData] = useState<any>([]);

    // Get Data
    useEffect(() => {
        dispatch(onGetSocialFriends());
    }, [dispatch]);

    useEffect(() => {
        setData(dataList);
    }, [dataList]);

    const [type, setType] = useState<string>("Following");

    const btnFollow = useCallback((index: any) => {
        setData((prevDataArray: any) => {
            const updatedArray = [...prevDataArray];
            updatedArray[index] = {
                ...updatedArray[index],
                isFollow: !updatedArray[index].isFollow
            };
            return updatedArray;
        });
    }, []);

    const columns = useMemo(() => [
        {
            header: "Friend Name",
            accessorKey: "name",
            enableColumnFilter: false
        },
        {
            header: "Username",
            accessorKey: "username",
            enableColumnFilter: false,
            cell: (cell: any) => {
                return (
                    <Link to="#!" className="text-custom-500 username">{cell.getValue()}</Link>);
            }
        },
        {
            header: "Joining Date",
            accessorKey: "joiningDate",
            enableColumnFilter: false,
        },
        {
            header: "Status",
            accessorKey: "isFollow",
            enableColumnFilter: false,
            cell: (cell: any) => {
                return (
                    <button type="button" className={`bg-white border-dashed group/item toggle-button status text-sky-500 btn border-sky-500 hover:text-sky-500 hover:bg-sky-50 hover:border-sky-600 focus:text-sky-600 focus:bg-sky-50 focus:border-sky-600 active:text-sky-600 active:bg-sky-50 active:border-sky-600 dark:bg-zink-700 dark:ring-sky-400/20 dark:hover:bg-sky-800/20 dark:focus:bg-sky-800/20 dark:active:bg-sky-800/20 px-2 py-1.5 text-xs ${cell.getValue() && "active"}`} onClick={() => btnFollow(cell.row.index)}>
                        <span className="group-[.active]/item:hidden block"><Plus className="inline-block size-3 mr-1" /> Follow</span>
                        <span className="group-[.active]/item:block hidden"><UserRoundX className="inline-block size-3 mr-1" /> Unfollow</span>
                    </button>);
            }
        }
    ], [btnFollow]
    );

    return (
        <React.Fragment>
            <BreadCrumb title='Friends' pageTitle='Social Media' />
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-5">
                <div className="xl:col-span-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="rounded-full bg-slate-100 shrink-0 dark:bg-zink-600">
                                    <img src={avatar1} alt="" className="rounded-full h-14" />
                                </div>
                                <div className="grow">
                                    <h6 className="mb-1 text-15">Paula Keenan <BadgeCheck className="inline-block size-4 text-sky-500 fill-sky-100 dark:fill-sky-500/20" /></h6>
                                    <p className="text-slate-500 dark:text-zink-200">@paulak145</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 text-center divide-y sm:divide-y-0 sm:divide-x sm:grid-cols-3 divide-slate-200 dark:divide-zink-500 divide-dashed rtl:divide-x-reverse">
                                <div className="py-3 sm:py-0 sm:px-3">
                                    <h6>489</h6>
                                    <p className="text-slate-500 dark:text-zink-200">Posts</p>
                                </div>
                                <div className="py-3 sm:py-0 sm:px-3">
                                    <h6>4.6k</h6>
                                    <p className="text-slate-500 dark:text-zink-200">Follower</p>
                                </div>
                                <div className="py-3 sm:py-0 sm:px-3">
                                    <h6>159</h6>
                                    <p className="text-slate-500 dark:text-zink-200">Following</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <ul className="flex flex-col w-full gap-2 mb-4 text-sm font-medium shrink-0 nav-tabs">
                                <li className="group grow">
                                    <Link to="/dashboards-social" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><Home className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Feed</span></Link>
                                </li>
                                <li className="group grow active">
                                    <Link to="/apps-social-friends" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><UserRound className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Friends</span></Link>
                                </li>
                                <li className="group grow">
                                    <Link to="/apps-social-event" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><CalendarDays className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Event</span></Link>
                                </li>
                                <li className="group grow">
                                    <Link to="/apps-social-video" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><Clapperboard className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Watch Video</span></Link>
                                </li>
                                <li className="group grow">
                                    <Link to="/apps-social-marketplace" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><ShoppingCart className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Marketplace</span></Link>
                                </li>
                                <li className="group grow">
                                    <Link to="/pages-account-settings" className="inline-block px-4 w-full py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 dark:group-[.active]:bg-custom-500 group-[.active]:text-white dark:group-[.active]:text-white hover:text-custom-500 dark:hover:text-custom-500 active:text-custom-500 dark:active:text-custom-500 -mb-[1px]"><Settings className="inline-block size-4 align-middle ltr:mr-1 rtl:ml-1" /> <span className="align-middle">Settings</span></Link>
                                </li>
                            </ul>
                            <p className="mb-4 text-slate-500 dark:text-zink-200">Suggestion Pages</p>
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <Link to="#!" className="flex gap-3">
                                        <img src={adwords} alt="" className="h-5" />
                                        <h6>Harmonious Team</h6>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#!" className="flex gap-3">
                                        <img src={twitter} alt="" className="h-5" />
                                        <h6>Twitter</h6>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#!" className="flex gap-3">
                                        <img src={meta} alt="" className="h-5" />
                                        <h6>Design Stack</h6>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#!" className="flex gap-3">
                                        <img src={figma} alt="" className="h-5" />
                                        <h6>UI / UX Community</h6>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Active Friends</h6>
                            <div className="flex flex-wrap items-center gap-3">
                                <Link to="#!" className="relative">
                                    <img src={avatar2} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar3} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar4} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar5} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar6} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar7} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar8} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar9} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative">
                                    <img src={avatar10} alt="" className="h-10 border rounded-full border-slate-200 dark:border-zink-500" />
                                    <span className="top-0 ltr:right-0 rtl:left-0 absolute  size-2.5 bg-green-400 border-2 border-white dark:border-zink-700 rounded-full"></span>
                                </Link>
                                <Link to="#!" className="relative flex items-center justify-center size-10 rounded-full bg-custom-100 text-custom-500 dark:bg-custom-500/20">
                                    5+
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-9" id="friendList">
                    <div className="flex items-center gap-3">
                        <h6 className="text-15 grow">Followers (254)</h6>
                        <div className="shrink-0">
                            <Dropdown className="relative sortble-dropdown">
                                <Dropdown.Trigger href="#!" className="inline-block py-3" id="dropdownMenuLink">
                                    <span className="dropdown-title">{type}</span> <ChevronDown className="inline-block size-4 ml-1" />
                                </Dropdown.Trigger>
                                <Dropdown.Content placement="right-end" className="absolute z-50 py-2 mt-1 text-left list-none bg-white rounded-md shadow-md min-w-[9rem] dark:bg-zink-600" aria-labelledby="dropdownMenuButton">
                                    <li>
                                        <Link className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => setType("Name")}>Name</Link>
                                    </li>
                                    <li>
                                        <Link className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => setType("Username")}>Username</Link>
                                    </li>
                                    <li>
                                        <Link className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => setType("Date")}>Date</Link>
                                    </li>
                                    <li>
                                        <Link className="block px-4 py-1.5 text-base font-medium transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200" to="#!" onClick={() => setType("Status")}>Status</Link>
                                    </li>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                    {data && data.length > 0 ?
                        <TableContainer
                            isPagination={true}
                            columns={(columns || [])}
                            data={(data || [])}
                            customPageSize={10}
                            divclassName="overflow-x-auto"
                            tableclassName="w-full border-separate table-custom border-spacing-y-2 whitespace-nowrap"
                            theadclassName="ltr:text-left rtl:text-right relative bg-white rounded-md dark:bg-zink-700"
                            thclassName="px-3.5 py-2.5 font-semibold sort"
                            tdclassName="px-3.5 py-2.5 "
                            trclassName="relative bg-white rounded-md dark:bg-zink-700"
                            PaginationClassName="flex flex-col items-center mt-4 mb-5 md:flex-row"
                        />
                        :
                        (<div className="noresult">
                            <div className="py-6 text-center">
                                <Search className="size-6 mx-auto text-sky-500 fill-sky-100 dark:sky-500/20" />
                                <h5 className="mt-2 mb-1">Sorry! No Result Found</h5>
                                <p className="mb-0 text-slate-500 dark:text-zink-200">We've searched more than 299+ Friends We did not find any Friends for you search.</p>
                            </div>
                        </div>)}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Friends;
