import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getInvoiceList as getInvoiceListApi,
} from "../../helpers/fakebackend_helper";

export const getInvoiceList = createAsyncThunk("invoice/getInvoiceList", async () => {
    try {
        const response = getInvoiceListApi();
        return response;
    } catch (error) {
        return error;
    }
});