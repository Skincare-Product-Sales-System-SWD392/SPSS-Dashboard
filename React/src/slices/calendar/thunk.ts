import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getEvents as getEventsApi,
    addEvents as addEventsApi,
    updateEvents as updateEventsApi,
    deleteEvents as deleteEventsApi,
    getCategory as getCategoryApi,
    deleteCategory as deleteCategoryApi
} from "../../helpers/fakebackend_helper";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const getEvents = createAsyncThunk("calendar/getEvents", async () => {
    try {
        const response = getEventsApi();
        return response;
    } catch (error) {
        return error;
    }
});
export const addEvents = createAsyncThunk("calendar/addEvents", async (event: any) => {
    try {
        const response = addEventsApi(event);
        const data = await response;
        toast.success("Event Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Event Added Failed", { autoClose: 2000 });
        return error;
    }
});
export const updateEvents = createAsyncThunk("calendar/updateEvents", async (event: any) => {
    try {
        const response = updateEventsApi(event);
        const data = await response;
        toast.success("Event updated Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Event updated Failed", { autoClose: 2000 });
        return error;
    }
});
export const deleteEvents = createAsyncThunk("calendar/deleteEvents", async (event: any) => {
    try {
        const response = deleteEventsApi(event);
        toast.success("Event deleted Successfully", { autoClose: 2000 });
        return response;
    } catch (error) {
        toast.error("Event deleted Failed", { autoClose: 2000 });
        return error;
    }
});

export const getCategory = createAsyncThunk("calendar/getCategory", async () => {
    try {
        const response = getCategoryApi();
        return response;
    } catch (error) {
        return error;
    }
});

export const deleteCategory = createAsyncThunk("calendar/deleteCategory", async (event: any) => {
    try {
        const response = deleteCategoryApi(event);
        toast.success("Category deleted Successfully", { autoClose: 2000 });
        return response;
    } catch (error) {
        toast.error("Category deleted Failed", { autoClose: 2000 });
        return error;
    }
});