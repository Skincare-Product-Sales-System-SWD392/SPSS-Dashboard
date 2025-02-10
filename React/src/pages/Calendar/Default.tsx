import React, { useCallback, useEffect, useState } from "react";
import BreadCrumb from "Common/BreadCrumb";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';

// react-redux
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

// Formik
import * as Yup from "yup";
import { useFormik } from "formik";

import {
    getEvents as onGetEvents,
    addEvents as onAddEvents,
    updateEvents as onUpdateEvents,
    deleteEvents as onDeleteEvents,
    getCategory as onGetCategory,
    deleteCategory as onDeleteCategory
} from 'slices/thunk';
import Modal from "Common/Components/Modal";
import DeleteModal from "Common/DeleteModal";
import { ToastContainer } from "react-toastify";

const DefaultCalendar = () => {

    const dispatch = useDispatch<any>();

    const selectDataList = createSelector(
        (state: any) => state.Calendar,
        (state) => ({
            dataList: state.event,
            category: state.category
        })
    );

    const { dataList, category } = useSelector(selectDataList);

    const [data, setData] = useState<any>([]);
    const [eventData, setEventData] = useState<any>();

    const [show, setShow] = useState<boolean>(false);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    // Get Data
    useEffect(() => {
        dispatch(onGetEvents());
        dispatch(onGetCategory());
    }, [dispatch]);

    useEffect(() => {
        const externalEvents: any = document.getElementById("external-events");
        new Draggable(externalEvents, {
            itemSelector: ".external-event",
        });
    }, []);

    useEffect(() => {
        setData(dataList);
    }, [dataList]);

    // Delete Modal
    const [deleteModal, setDeleteModal] = useState<boolean>(false);
    const deleteToggle = () => setDeleteModal(!deleteModal);

    // Delete Data
    const onClickDelete = () => {
        setShow(false);
        setDeleteModal(true);
        if (eventData.id) {
            setEventData(eventData);
        }
    };

    const handleDelete = () => {
        if (eventData) {
            dispatch(onDeleteEvents(eventData.id));
            setDeleteModal(false);
        }
    };
    //

    // Update Data
    const handleEventClick = (ele: any) => {
        const event = ele.event;
        setEventData({
            id: event.id,
            title: event.title,
            start: event.start,
            className: event.classNames.join(" ")
        });
        setIsEdit(true);
        setShow(true);
    };

    // validation
    const validation: any = useFormik({
        // enableReinitialize : use this flag when initial values needs to be changed
        enableReinitialize: true,

        initialValues: {
            title: (eventData && eventData.title) || '',
            start: (eventData && eventData.start) || '',
            className: (eventData && eventData.className) || ''
        },
        validationSchema: Yup.object({
            title: Yup.string().required("Please Enter title"),
            className: Yup.string().required("Please Enter category")
        }),

        onSubmit: (values) => {
            if (isEdit) {
                const updateData = {
                    id: eventData ? eventData.id : 0,
                    ...values,
                };
                // update user
                dispatch(onUpdateEvents(updateData));
            } else {
                const newData = {
                    ...values,
                    id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
                    start: selectedDay ? selectedDay.date : new Date(),
                };
                // save new user
                dispatch(onAddEvents(newData));
            }
            toggle();
        },
    });

    // 
    const toggle = useCallback(() => {
        if (show) {
            setShow(false);
            setEventData("");
            setIsEdit(false);
        } else {
            setShow(true);
            setEventData("");
            validation.resetForm();
        }
    }, [show, validation]);

    const [selectedDay, setSelectedDay] = useState<any>(0);

    const handleDateClick = (arg: any) => {
        const date = arg["date"];
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        const currectDate = new Date();
        const currentHour = currectDate.getHours();
        const currentMin = currectDate.getMinutes();
        const currentSec = currectDate.getSeconds();
        const modifiedDate = new Date(year, month, day, currentHour, currentMin, currentSec);
        const modifiedData = { ...arg, date: modifiedDate };

        setSelectedDay(modifiedData);
        toggle();
    };

    // On Drop
    const onDrop = (event: any) => {
        const date = event['date'];
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();

        const currectDate = new Date();
        const currentHour = currectDate.getHours();
        const currentMin = currectDate.getMinutes();
        const currentSec = currectDate.getSeconds();
        const modifiedDate = new Date(year, month, day, currentHour, currentMin, currentSec);

        const draggedEl = event.draggedEl;
        const draggedElclass = draggedEl.className;
        const draggedElDataclass = draggedEl.getAttribute("data-class");

        if (toggledrop) {
            dispatch(onDeleteCategory(event.draggedEl.id));
        }

        if (draggedEl.classList.contains('external-event') && draggedElclass.indexOf("fc-event-draggable") === -1) {
            const modifiedData: any = {
                id: Math.floor(Math.random() * 100).toString(),
                title: draggedEl.innerText,
                start: modifiedDate,
                className: draggedElDataclass,
            };


            dispatch(onAddEvents(modifiedData));
        }
    };

    // Change Language
    const [lang, setLang] = useState<string>("en");
    const changeLanguage = (ele: any) => {
        const language = ele.target.value;
        setLang(language);
    };

    // Week Number
    const [toggleweek, setToggleweek] = useState<boolean>(false);
    const toggleWeekNumber = (ele: any) => {
        const checked = ele.target.checked;
        setToggleweek(checked);
    };

    // Business Hours
    const [togglebusinesshours, setToggleBusinessHours] = useState<boolean>(false);
    const toggleBusinessHours = (ele: any) => {
        const checked = ele.target.checked;
        setToggleBusinessHours(checked);
    };

    // Remove After Drop
    const [toggledrop, setToggleDrop] = useState<boolean>(false);
    const toggleDrop = (ele: any) => {
        const checked = ele.target.checked;
        setToggleDrop(checked);
    };

    return (
        <React.Fragment>
            <BreadCrumb title='Calendar' pageTitle='Apps' />
            <DeleteModal show={deleteModal} onHide={deleteToggle} onDelete={handleDelete} />
            <ToastContainer closeButton={false} limit={1} />
            <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
                <div className="xl:col-span-9">
                    <div className="card">
                        <div className="card-body">
                            <div cursor-pointerid='calendar-container'>
                                <div id='calendar'>
                                    <FullCalendar
                                        plugins={[
                                            dayGridPlugin,
                                            interactionPlugin,
                                            listPlugin
                                        ]}
                                        initialView="dayGridMonth"
                                        themeSystem="tailwindcss"
                                        slotDuration={"00:15:00"}
                                        handleWindowResize={true}
                                        weekends={true}
                                        editable={true}
                                        droppable={true}
                                        selectable={true}
                                        weekNumbers={toggleweek}
                                        businessHours={togglebusinesshours}
                                        locale={lang}
                                        events={data}
                                        headerToolbar={{
                                            left: 'prev,next,today',
                                            center: "title",
                                            right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
                                        }}
                                        dateClick={handleDateClick}
                                        eventClick={handleEventClick}
                                        drop={onDrop}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="mb-4 text-15">Draggable Events</h6>
                            <div id='external-events' className="flex flex-col gap-3 mb-4">
                                {(category || []).map((item: any, key: number) => (
                                    <button id={item.id} data-class={item.dataClass} className={item.className} key={key}>
                                        {item.title}
                                    </button>
                                ))}
                                <div>
                                    <label htmlFor="locale-select" className="inline-block mb-2 text-base font-medium">Locale:</label>
                                    <select id="locale-select" className="form-select border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" onChange={(e) => changeLanguage(e)}>
                                        <option value="en">English</option>
                                        <option value="es">Español</option>
                                        <option value="fr">Français</option>
                                        <option value="it">Italiana</option>
                                        <option value="ru">русский</option>
                                    </select>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input id='drop-remove' className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" onChange={(e) => toggleDrop(e)} checked={toggledrop} />
                                    <label htmlFor="drop-remove" className="align-middle cursor-pointer">
                                        Remove after drop
                                    </label>
                                </div>
                                <div className="flex items-center gap-2">
                                    <input id='businessCalendar' className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" onChange={(e) => toggleBusinessHours(e)} checked={togglebusinesshours} />
                                    <label htmlFor="businessCalendar" className="align-middle cursor-pointer">
                                        Business Hours & Week
                                    </label>
                                </div>

                                <div className="flex items-center gap-2">
                                    <input id='weekNumberCalendar' className="size-4 cursor-pointer bg-white border border-slate-200 checked:bg-none dark:bg-zink-700 dark:border-zink-500 rounded-sm appearance-none arrow-none relative after:absolute after:content-['\eb7b'] after:top-0 after:left-0 after:font-remix after:leading-none after:opacity-0 checked:after:opacity-100 after:text-custom-500 checked:border-custom-500 dark:after:text-custom-500 dark:checked:border-custom-800" type="checkbox" onChange={(e) => toggleWeekNumber(e)} checked={toggleweek} />
                                    <label htmlFor="weekNumberCalendar" className="align-middle cursor-pointer">
                                        Week Number
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Events Modal */}

            <Modal show={show} onHide={toggle} modal-center="true"
                className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
                dialogClassName="w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600">
                <Modal.Header className="flex items-center justify-between p-4 border-b dark:border-zink-500"
                    closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500">
                    <Modal.Title className="text-16">{!!isEdit ? "Edit Event" : "Add Event"}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
                    <form className="needs-validation" name="event-form" id="form-event" onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                    }}>
                        <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                            <div className="xl:col-span-12">
                                <label htmlFor="event-title" className="inline-block mb-2 text-base font-medium">Event Name</label>
                                <input type="text" id="event-title" className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" placeholder="Event name"
                                    name="title"
                                    onChange={validation.handleChange}
                                    value={validation.values.title || ""}
                                />
                                {validation.touched.title && validation.errors.title ? (
                                    <p className="text-red-400">{validation.errors.title}</p>
                                ) : null}
                            </div>
                            <div className="xl:col-span-12">
                                <label htmlFor="event-category" className="inline-block mb-2 text-base font-medium">Category</label>
                                <select required className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200" id="event-category"
                                    name="className"
                                    onChange={validation.handleChange}
                                    value={validation.values.className || ""}
                                >
                                    <option>Select Category</option>
                                    <option value="border-none rounded-md py-1.5 px-3 w-[100%] transition-all text-custom-500 !bg-custom-100 dark:!bg-custom-500/20">Primary</option>
                                    <option value="border-none rounded-md py-1.5 px-3 w-[100%] text-green-500 !bg-green-100 dark:!bg-green-500/20">Success</option>
                                    <option value="border-none rounded-md py-1.5 px-3 w-[100%] text-sky-500 !bg-sky-100 dark:!bg-sky-500/20">Info</option>
                                    <option value="border-none rounded-md py-1.5 px-3 w-[100%] text-yellow-500 !bg-yellow-100 dark:!bg-yellow-500/20">Warning</option>
                                    <option value="border-none rounded-md py-1.5 px-3 w-[100%] text-purple-500 !bg-purple-100 dark:!bg-purple-500/20">Purple</option>
                                </select>
                                {validation.touched.className && validation.errors.className ? (
                                    <p className="text-red-400">{validation.errors.className}</p>
                                ) : null}
                            </div>
                        </div>
                        <div className="flex justify-end gap-2 mt-4">
                            <button type="reset" className="text-red-500 bg-white btn hover:text-red-500 hover:bg-red-100 focus:text-red-500 focus:bg-red-100 active:text-red-500 active:bg-red-100 dark:bg-zink-600 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10 dark:active:bg-red-500/10" onClick={toggle}>Cancel</button>
                            {!!isEdit && <button type="reset" id="btn-delete-event" className="text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20" onClick={onClickDelete}>Delete</button>}
                            <button type="submit" id="btn-save-event" className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20">{!!isEdit ? "Update" : "Add Event"}</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
};

export default DefaultCalendar;