import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegisterState {
    user: string;
    error: string;
    success: boolean;
}

const initialState: RegisterState = {
    user: "",
    success: false,
    error: ""
};

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        registerSuccess(state: RegisterState, action: PayloadAction<string>) {
            state.user = action.payload;
            state.success = true;
        },
        registerFailed(state: RegisterState, action: PayloadAction<string | any>) {
            state.error = action.payload;
            state.success = false;
        },
        resetRegister(state: RegisterState, action: PayloadAction<boolean>) {
            state.success = action.payload;
        }
    },
});

export const { registerSuccess, registerFailed, resetRegister } = registerSlice.actions;
export default registerSlice.reducer;