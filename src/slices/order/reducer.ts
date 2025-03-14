import { createSlice } from "@reduxjs/toolkit";
import { getAllOrders, addOrder, updateOrder, deleteOrder } from "./thunk";

interface OrderState {
  loading: boolean;
  error: string | null;
  orders: {
    data: {
      items: any[];
      totalCount: number;
      pageNumber: number;
      pageSize: number;
      totalPages: number;
    }
  };
}

export const initialState: OrderState = {
  loading: false,
  error: null,
  orders: {
    data: {
      items: [],
      totalCount: 0,
      pageNumber: 1,
      pageSize: 5,
      totalPages: 1
    }
  },
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Orders
    builder.addCase(getAllOrders.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = {
        data: action.payload.data
      };
      state.error = null;
    });
    builder.addCase(getAllOrders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Add Order
    builder.addCase(addOrder.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.orders.data.items.unshift(action.payload.data);
      state.error = null;
    });
    builder.addCase(addOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Update Order
    builder.addCase(updateOrder.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.orders.data.items = state.orders.data.items.map(order =>
        order.id === action.payload.data.id ? action.payload.data : order
      );
      state.error = null;
    });
    builder.addCase(updateOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Delete Order
    builder.addCase(deleteOrder.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.orders.data.items = state.orders.data.items.filter(
        order => order.id !== action.payload.data
      );
      state.error = null;
    });
    builder.addCase(deleteOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export default orderSlice.reducer; 