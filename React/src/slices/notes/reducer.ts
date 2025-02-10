import { createSlice } from "@reduxjs/toolkit";
import {
    getNotes,
    addNotes,
    updateNotes,
    deleteNotes,
} from './thunk';

export const initialState = {
    notes: [],
    errors: {}
};

const NotesSlice = createSlice({
    name: 'Notes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getNotes.fulfilled, (state: any, action: any) => {
            state.notes = action.payload;
        });
        builder.addCase(getNotes.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addNotes.fulfilled, (state: any, action: any) => {
            state.notes.unshift(action.payload);
        });
        builder.addCase(addNotes.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateNotes.fulfilled, (state: any, action: any) => {
            state.notes = state.notes.map((notes: any) =>
                notes.id === action.payload.id
                    ? { ...notes, ...action.payload }
                    : notes
            );
        });
        builder.addCase(updateNotes.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteNotes.fulfilled, (state: any, action: any) => {
            state.notes = state.notes.filter(
                (notes: any) => notes.id.toString() !== action.payload.toString()
            );
        });
        builder.addCase(deleteNotes.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
    }
});

export default NotesSlice.reducer;