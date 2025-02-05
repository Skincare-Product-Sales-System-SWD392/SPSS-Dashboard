import { createSlice } from "@reduxjs/toolkit";
import {
    getUserList,
    addUserList,
    updateUserList,
    deleteUserList,
    getUserGrid,
    addUserGrid,
    updateUserGrid,
    deleteUserGrid,
} from './thunk';

export const initialState = {
    userList: [],
    userGrid: [],
    errors: {}
};

const UsersSlice = createSlice({
    name: 'Users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // List
        builder.addCase(getUserList.fulfilled, (state: any, action: any) => {
            state.userList = action.payload;
        });
        builder.addCase(getUserList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addUserList.fulfilled, (state: any, action: any) => {
            state.userList.unshift(action.payload);
        });
        builder.addCase(addUserList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateUserList.fulfilled, (state: any, action: any) => {
            state.userList = state.userList.map((list: any) =>
                list.id === action.payload.id
                    ? { ...list, ...action.payload }
                    : list
            );
        });
        builder.addCase(updateUserList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteUserList.fulfilled, (state: any, action: any) => {
            state.userList = state.userList.filter(
                (userList: any) => userList.id.toString() !== action.payload.toString()
            );
        });
        builder.addCase(deleteUserList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        // Grid
        builder.addCase(getUserGrid.fulfilled, (state: any, action: any) => {
            state.userGrid = action.payload;
        });
        builder.addCase(getUserGrid.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(addUserGrid.fulfilled, (state: any, action: any) => {
            state.userGrid.unshift(action.payload);
        });
        builder.addCase(addUserGrid.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(updateUserGrid.fulfilled, (state: any, action: any) => {
            state.userGrid = state.userGrid.map((grid: any) =>
                grid.id === action.payload.id
                    ? { ...grid, ...action.payload }
                    : grid
            );
        });
        builder.addCase(updateUserGrid.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
        builder.addCase(deleteUserGrid.fulfilled, (state: any, action: any) => {
            state.userGrid = state.userGrid.filter(
                (userGrid: any) => userGrid.id.toString() !== action.payload.toString()
            );
        });
        builder.addCase(deleteUserGrid.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
    }
});

export default UsersSlice.reducer;