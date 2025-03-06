import { createSlice } from "@reduxjs/toolkit";
import { getAllVouchers, addVoucher, updateVoucher, deleteVoucher } from "./thunk";

interface VoucherState {
  loading: boolean;
  error: string | null;
  vouchers: {
    results: any[];
    currentPage: number;
    pageCount: number;
    pageSize: number;
    rowCount: number;
    firstRowOnPage: number;
    lastRowOnPage: number;
  };
}

export const initialState: VoucherState = {
  loading: false,
  error: null,
  vouchers: {
    results: [],
    currentPage: 1,
    pageCount: 0,
    pageSize: 10,
    rowCount: 0,
    firstRowOnPage: 0,
    lastRowOnPage: 0,
  },
};

const voucherSlice = createSlice({
  name: "Voucher",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Vouchers
    builder.addCase(getAllVouchers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllVouchers.fulfilled, (state, action) => {
      state.loading = false;
      state.vouchers = action.payload.data || action.payload;
      console.log("Voucher state after update:", state.vouchers);
    });
    builder.addCase(getAllVouchers.rejected, (state, action) => {
      state.loading = false;
      state.error = typeof action.payload === 'string' ? action.payload : action.error.message || null;
    });

    // Add Voucher
    builder.addCase(addVoucher.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addVoucher.fulfilled, (state, action) => {
      state.loading = false;
      state.vouchers.results.unshift(action.payload.data);
      state.error = null;
    });
    builder.addCase(addVoucher.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Update Voucher
    builder.addCase(updateVoucher.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateVoucher.fulfilled, (state, action) => {
      state.loading = false;
      state.vouchers.results = state.vouchers.results.map(voucher =>
        voucher.name === action.payload.data.name ? action.payload.data : voucher
      );
      state.error = null;
    });
    builder.addCase(updateVoucher.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Delete Voucher
    builder.addCase(deleteVoucher.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteVoucher.fulfilled, (state, action) => {
      state.loading = false;
      state.vouchers.results = state.vouchers.results.filter(
        voucher => voucher.name !== action.payload.data
      );
      state.error = null;
    });
    builder.addCase(deleteVoucher.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export default voucherSlice.reducer; 