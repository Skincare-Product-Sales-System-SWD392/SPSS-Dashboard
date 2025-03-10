import { createSlice } from "@reduxjs/toolkit";
import {
    getSocialEvent,
    addSocialEvent,
    updateSocialEvent,
    deleteSocialEvent,
    getSocialFriends
} from './thunk';

export const initialState = {
    event: [],
    friendslist: [],
    errors: {}
};

const SocialSlice = createSlice({
    name: 'Social',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSocialEvent.fulfilled, (state: any, action: any) => {
            state.event = action.payload;
        });
        builder.addCase(getSocialEvent.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addSocialEvent.fulfilled, (state: any, action: any) => {
            state.event.unshift(action.payload);
        });
        builder.addCase(addSocialEvent.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateSocialEvent.fulfilled, (state: any, action: any) => {
            state.event = state.event.map((event: any) =>
                event.id === action.payload.id
                    ? { ...event, ...action.payload }
                    : event
            );
        });
        builder.addCase(updateSocialEvent.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteSocialEvent.fulfilled, (state: any, action: any) => {
            state.event = state.event.filter(
                (event: any) => event.id.toString() !== action.payload.toString()
            );
        });
        builder.addCase(deleteSocialEvent.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(getSocialFriends.fulfilled, (state: any, action: any) => {
            state.friendslist = action.payload;
        });
        builder.addCase(getSocialFriends.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
    }
});

export default SocialSlice.reducer;