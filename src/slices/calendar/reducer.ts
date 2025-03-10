import { createSlice } from "@reduxjs/toolkit";
import {
    getEvents,
    addEvents,
    updateEvents,
    deleteEvents,
} from './thunk';

export const initialState = {
    event: [],
    category: [],
    errors: {}
};

const CalendarSlice = createSlice({
    name: 'Calendar',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getEvents.fulfilled, (state: any, action: any) => {
            state.event = action.payload;
        });
        builder.addCase(getEvents.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addEvents.fulfilled, (state: any, action: any) => {
            state.event.unshift(action.payload);
        });
        builder.addCase(addEvents.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateEvents.fulfilled, (state: any, action: any) => {
            state.event = state.event.map((event: any) =>
                event.id === action.payload.id
                    ? { ...event, ...action.payload }
                    : event
            );
        });
        builder.addCase(updateEvents.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteEvents.fulfilled, (state: any, action: any) => {
            state.event = state.event.filter(
                (event: any) => event.id.toString() !== action.payload.toString()
            );
        });
        builder.addCase(deleteEvents.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
    }
});

export default CalendarSlice.reducer;