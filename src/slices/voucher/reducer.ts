import { createSlice } from "@reduxjs/toolkit";
import { getAllVouchers, addVoucher, updateVoucher, deleteVoucher } from "./thunk";

interface VoucherState {
  loading: boolean;
  error: string | null;
  vouchers: {
    data: {
      items: any[];
      totalCount: number;
      pageNumber: number;
      pageSize: number;
      totalPages: number;
    };
  };
}

export const initialState: VoucherState = {
  loading: false,
  error: null,
  vouchers: {
    data: {
      items: [],
      totalCount: 0,
      pageNumber: 1,
      pageSize: 5,
      totalPages: 1
    }
  }
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
      state.vouchers = action.payload;
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
      state.vouchers.data.items.unshift(action.payload.data);
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
      state.vouchers.data.items = state.vouchers.data.items.map(voucher =>
        voucher.id === action.payload.data.id ? action.payload.data : voucher
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
      state.vouchers.data.items = state.vouchers.data.items.filter(
        voucher => voucher.id !== action.payload.data
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