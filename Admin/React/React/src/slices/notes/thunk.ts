import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getNotes as getNotesApi,
    addNotes as addNotesApi,
    updateNotes as updateNotesApi,
    deleteNotes as deleteNotesApi
} from "../../helpers/fakebackend_helper";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const getNotes = createAsyncThunk("notes/getNotes", async () => {
    try {
        const response = getNotesApi();
        return response;
    } catch (error) {
        return error;
    }
});
export const addNotes = createAsyncThunk("notes/addNotes", async (event: any) => {
    try {
        const response = addNotesApi(event);
        const data = await response;
        toast.success("Notes Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Notes Added Failed", { autoClose: 2000 });
        return error;
    }
});
export const updateNotes = createAsyncThunk("notes/updateNotes", async (event: any) => {
    try {
        const response = updateNotesApi(event);
        const data = await response;
        toast.success("Notes updated Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Notes updated Failed", { autoClose: 2000 });
        return error;
    }
});
export const deleteNotes = createAsyncThunk("notes/deleteNotes", async (event: any) => {
    try {
        const response = deleteNotesApi(event);
        toast.success("Notes deleted Successfully", { autoClose: 2000 });
        return response;
    } catch (error) {
        toast.error("Notes deleted Failed", { autoClose: 2000 });
        return error;
    }
});