import { createSlice } from "@reduxjs/toolkit";
import { getAllCancelReasons, addCancelReason, updateCancelReason, deleteCancelReason } from "./thunk";

interface CancelReasonState {
  loading: boolean;
  error: string | null;
  cancelReasons: {
    results: any[];
    currentPage: number;
    pageCount: number;
    pageSize: number;
    rowCount: number;
    firstRowOnPage: number;
    lastRowOnPage: number;
  };
}

export const initialState: CancelReasonState = {
  loading: false,
  error: null,
  cancelReasons: {
    results: [],
    currentPage: 1,
    pageCount: 1,
    pageSize: 10,
    rowCount: 0,
    firstRowOnPage: 0,
    lastRowOnPage: 0,
  },
};

const cancelReasonSlice = createSlice({
  name: "cancelReason",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Cancel Reasons
    builder.addCase(getAllCancelReasons.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllCancelReasons.fulfilled, (state, action) => {
      state.loading = false;
      state.cancelReasons = action.payload.data;
      state.error = null;
    });
    builder.addCase(getAllCancelReasons.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Add Cancel Reason
    builder.addCase(addCancelReason.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addCancelReason.fulfilled, (state, action) => {
      state.loading = false;
      state.cancelReasons.results.unshift(action.payload.data);
      state.error = null;
    });
    builder.addCase(addCancelReason.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Update Cancel Reason
    builder.addCase(updateCancelReason.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateCancelReason.fulfilled, (state, action) => {
      state.loading = false;
      state.cancelReasons.results = state.cancelReasons.results.map(cancelReason =>
        cancelReason.description === action.payload.data.description ? action.payload.data : cancelReason
      );
      state.error = null;
    });
    builder.addCase(updateCancelReason.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Delete Cancel Reason
    builder.addCase(deleteCancelReason.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteCancelReason.fulfilled, (state, action) => {
      state.loading = false;
      state.cancelReasons.results = state.cancelReasons.results.filter(
        cancelReason => cancelReason.description !== action.payload.data
      );
      state.error = null;
    });
    builder.addCase(deleteCancelReason.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export default cancelReasonSlice.reducer; 