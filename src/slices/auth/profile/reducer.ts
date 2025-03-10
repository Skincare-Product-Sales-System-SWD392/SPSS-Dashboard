import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
    user: string;
    error: string;
    success: boolean;
}

const initialState: ProfileState = {
    user: "",
    error: "",
    success: false
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        profileSuccess(state: ProfileState, action: PayloadAction<string>) {
            state.user = action.payload;
            state.success = true;
        },
        profileFailed(state: ProfileState, action: PayloadAction<string | any>) {
            state.error = action.payload;
            state.success = false;
        }
    }
})

export const { profileSuccess, profileFailed } = profileSlice.actions;
export default profileSlice.reducer;