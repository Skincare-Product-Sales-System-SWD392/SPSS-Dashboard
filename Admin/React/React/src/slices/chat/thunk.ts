import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getChat as getChatApi,
    addChat as addChatApi,
    deleteChat as deleteChatApi,
    bookmarkChat as bookmarkChatApi
} from "../../helpers/fakebackend_helper";

export const getChat = createAsyncThunk("chat/getChat", async (roomId: any) => {
    try {
        const response = getChatApi(roomId);
        return response;
    } catch (error) {
        return error;
    }
});

export const addChat = createAsyncThunk("chat/addChat", async (event: any) => {
    try {
        const response = addChatApi(event);
        const data = await response;
        return data;
    } catch (error) {
        return error;
    }
});

export const deleteChat = createAsyncThunk("Chat/deleteChat", async (event: any) => {
    try {
        const response = deleteChatApi(event);
        return response;
    } catch (error) {
        return error;
    }
});

export const bookmarkChat = createAsyncThunk("Chat/bookmarkChat", async (event: any) => {
    try {
        const response = bookmarkChatApi(event);
        return response;
    } catch (error) {
        return error;
    }
});