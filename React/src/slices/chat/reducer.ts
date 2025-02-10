import { createSlice } from "@reduxjs/toolkit";
import {
    getChat,
    addChat,
    deleteChat,
    bookmarkChat
} from './thunk';

export const initialState = {
    chats: [],
    errors: {}
};

const ChatSlice = createSlice({
    name: 'Chat',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getChat.fulfilled, (state: any, action: any) => {
            state.chats = action.payload;
        });
        builder.addCase(getChat.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addChat.fulfilled, (state: any, action: any) => {
            state.chats.map((item: any) => item.usermessages.push(action.payload));
        });
        builder.addCase(addChat.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteChat.fulfilled, (state: any, action: any) => {
            state.chats = (state.chats || []).map((data: any) => {
                const updatedUserMessages = data.usermessages.filter((message: any) => message.id.toString() !== action.payload.toString());
                return { ...data, usermessages: updatedUserMessages };
            });

        });
        builder.addCase(deleteChat.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(bookmarkChat.fulfilled, (state: any, action: any) => {
            state.chats = (state.chats || []).map((data: any) => {
                const updatedUserMessages = data.usermessages.map((message: any) => {
                    if (message.id.toString() === action.payload.toString()) {
                        const bookmark = message.bookmark === true ? false : true;
                        return { ...message, bookmark: bookmark };
                    }
                    return message;
                });

                return { ...data, usermessages: updatedUserMessages };
            });
        });
        builder.addCase(bookmarkChat.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
    }
});

export default ChatSlice.reducer;