import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getUserList as getUserListApi,
    addUserList as addUserListApi,
    updateUserList as updateUserListApi,
    deleteUserList as deleteUserListApi,
    getUserGrid as getUserGridApi,
    addUserGrid as addUserGridApi,
    updateUserGrid as updateUserGridApi,
    deleteUserGrid as deleteUserGridApi,
} from "../../helpers/fakebackend_helper";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const getUserList = createAsyncThunk("users/getUserList", async () => {
    try {
        const response = getUserListApi();
        return response;
    } catch (error) {
        return error;
    }
});
export const addUserList = createAsyncThunk("users/addUserList", async (event: any) => {
    try {
        const response = addUserListApi(event);
        const data = await response;
        toast.success("User Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("User Added Failed", { autoClose: 2000 });
        return error;
    }
});
export const updateUserList = createAsyncThunk("users/updateUserList", async (event: any) => {
    try {
        const response = updateUserListApi(event);
        const data = await response;
        toast.success("User updated Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("User updated Failed", { autoClose: 2000 });
        return error;
    }
});
export const deleteUserList = createAsyncThunk("users/deleteUserList", async (event: any) => {
    try {
        const response = deleteUserListApi(event);
        toast.success("User deleted Successfully", { autoClose: 2000 });
        return response;
    } catch (error) {
        toast.error("User deleted Failed", { autoClose: 2000 });
        return error;
    }
});

export const getUserGrid = createAsyncThunk("users/getUserGrid", async () => {
    try {
        const response = getUserGridApi();
        return response;
    } catch (error) {
        return error;
    }
});
export const addUserGrid = createAsyncThunk("users/addUserGrid", async (event: any) => {
    try {
        const response = addUserGridApi(event);
        const data = await response;
        toast.success("User Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("User Added Failed", { autoClose: 2000 });
        return error;
    }
});
export const updateUserGrid = createAsyncThunk("users/updateUserGrid", async (event: any) => {
    try {
        const response = updateUserGridApi(event);
        const data = await response;
        toast.success("User updated Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("User updated Failed", { autoClose: 2000 });
        return error;
    }
});
export const deleteUserGrid = createAsyncThunk("users/deleteUserGrid", async (event: any) => {
    try {
        const response = deleteUserGridApi(event);
        toast.success("User deleted Successfully", { autoClose: 2000 });
        return response;
    } catch (error) {
        toast.error("User deleted Failed", { autoClose: 2000 });
        return error;
    }
});
