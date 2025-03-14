import { createSlice } from "@reduxjs/toolkit";
import { getAllCancelReasons, addCancelReason, updateCancelReason, deleteCancelReason } from "./thunk";

interface CancelReasonState {
  loading: boolean;
  error: string | null;
  cancelReasons: {
    data: {
      items: any[];
      totalCount: number;
      pageNumber: number;
      pageSize: number;
      totalPages: number;
    }
  };
}

export const initialState: CancelReasonState = {
  loading: false,
  error: null,
  cancelReasons: {
    data: {
      items: [],
      totalCount: 0,
      pageNumber: 1,
      pageSize: 5,
      totalPages: 1
    }
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
      state.cancelReasons = {
        data: action.payload.data
      };
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
      state.cancelReasons.data.items.unshift(action.payload.data);
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
      state.cancelReasons.data.items = state.cancelReasons.data.items.map(cancelReason =>
        cancelReason.id === action.payload.data.id ? action.payload.data : cancelReason
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
      state.cancelReasons.data.items = state.cancelReasons.data.items.filter(
        cancelReason => cancelReason.id !== action.payload.data
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