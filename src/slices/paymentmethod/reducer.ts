import { createSlice } from "@reduxjs/toolkit";
import { getAllPaymentMethods, addPaymentMethod, updatePaymentMethod, deletePaymentMethod } from "./thunk";

interface PaymentMethodState {
  loading: boolean;
  error: string | null;
  paymentMethods: {
    results: any[];
    currentPage: number;
    pageCount: number;
    pageSize: number;
    rowCount: number;
    firstRowOnPage: number;
    lastRowOnPage: number;
  };
}

export const initialState: PaymentMethodState = {
  loading: false,
  error: null,
  paymentMethods: {
    results: [],
    currentPage: 1,
    pageCount: 1,
    pageSize: 10,
    rowCount: 0,
    firstRowOnPage: 0,
    lastRowOnPage: 0,
  },
};

const paymentMethodSlice = createSlice({
  name: "paymentMethod",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Payment Methods
    builder.addCase(getAllPaymentMethods.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllPaymentMethods.fulfilled, (state, action) => {
      state.loading = false;
      state.paymentMethods = action.payload.data;
      state.error = null;
    });
    builder.addCase(getAllPaymentMethods.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Add Payment Method
    builder.addCase(addPaymentMethod.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addPaymentMethod.fulfilled, (state, action) => {
      state.loading = false;
      state.paymentMethods.results.unshift(action.payload.data);
      state.error = null;
    });
    builder.addCase(addPaymentMethod.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Update Payment Method
    builder.addCase(updatePaymentMethod.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updatePaymentMethod.fulfilled, (state, action) => {
      state.loading = false;
      state.paymentMethods.results = state.paymentMethods.results.map(
        paymentMethod => 
          paymentMethod.id === action.payload.data.id
            ? { ...paymentMethod, ...action.payload.data }
            : paymentMethod
      );
      state.error = null;
    });
    builder.addCase(updatePaymentMethod.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Delete Payment Method
    builder.addCase(deletePaymentMethod.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deletePaymentMethod.fulfilled, (state, action) => {
      state.loading = false;
      state.paymentMethods.results = state.paymentMethods.results.filter(
        paymentMethod => paymentMethod.id !== action.payload.data
      );
      state.error = null;
    });
    builder.addCase(deletePaymentMethod.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export default paymentMethodSlice.reducer; 