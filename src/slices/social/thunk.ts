import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getSocialEvent as getSocialEventApi,
    addSocialEvent as addSocialEventApi,
    updateSocialEvent as updateSocialEventApi,
    deleteSocialEvent as deleteSocialEventApi,
    getSocialFriends as getSocialFriendsApi,
} from "../../helpers/fakebackend_helper";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const getSocialEvent = createAsyncThunk("social/getSocialEvent", async () => {
    try {
        const response = getSocialEventApi();
        return response;
    } catch (error) {
        return error;
    }
});
export const addSocialEvent = createAsyncThunk("social/addSocialEvent", async (event: any) => {
    try {
        const response = addSocialEventApi(event);
        const data = await response;
        toast.success("Event Added Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Event Added Failed", { autoClose: 2000 });
        return error;
    }
});
export const updateSocialEvent = createAsyncThunk("social/updateSocialEvent", async (event: any) => {
    try {
        const response = updateSocialEventApi(event);
        const data = await response;
        toast.success("Event updated Successfully", { autoClose: 2000 });
        return data;
    } catch (error) {
        toast.error("Event updated Failed", { autoClose: 2000 });
        return error;
    }
});
export const deleteSocialEvent = createAsyncThunk("social/deleteSocialEvent", async (event: any) => {
    try {
        const response = deleteSocialEventApi(event);
        toast.success("Event deleted Successfully", { autoClose: 2000 });
        return response;
    } catch (error) {
        toast.error("Event deleted Failed", { autoClose: 2000 });
        return error;
    }
});

export const getSocialFriends = createAsyncThunk("social/getSocialFriends", async () => {
    try {
        const response = getSocialFriendsApi();
        return response;
    } catch (error) {
        return error;
    }
});