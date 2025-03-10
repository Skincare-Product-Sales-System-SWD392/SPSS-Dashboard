import { createSlice } from "@reduxjs/toolkit";
import {
    getInvoiceList
} from './thunk';

export const initialState = {
    invoicelist: [],
    errors: {}
};

const InvoiceSlice = createSlice({
    name: 'Invoices',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getInvoiceList.fulfilled, (state: any, action: any) => {
            state.invoicelist = action.payload;
        });
        builder.addCase(getInvoiceList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });
    }
});

export default InvoiceSlice.reducer;