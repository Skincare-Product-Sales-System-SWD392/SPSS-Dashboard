import { createSlice } from "@reduxjs/toolkit";
import { getAllPaymentMethods, addPaymentMethod, updatePaymentMethod, deletePaymentMethod } from "./thunk";

interface PaymentMethodState {
  loading: boolean;
  error: string | null;
  paymentMethods: {
    data: {
      items: any[];
      totalCount: number;
      pageNumber: number;
      pageSize: number;
      totalPages: number;
    }
  };
}

export const initialState: PaymentMethodState = {
  loading: false,
  error: null,
  paymentMethods: {
    data: {
      items: [],
      totalCount: 0,
      pageNumber: 1,
      pageSize: 5,
      totalPages: 1
    }
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
      state.paymentMethods = {
        data: action.payload.data
      };
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
      state.paymentMethods.data.items.unshift(action.payload.data);
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
      state.paymentMethods.data.items = state.paymentMethods.data.items.map(paymentMethods =>
        paymentMethods.id === action.payload.data.id ? action.payload.data : paymentMethods
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
      state.paymentMethods.data.items = state.paymentMethods.data.items.filter(
        paymentMethods => paymentMethods.id !== action.payload.data
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