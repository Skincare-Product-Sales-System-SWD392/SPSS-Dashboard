import { createSlice } from "@reduxjs/toolkit";
import { getAllOrders, addOrder, updateOrder, deleteOrder, getOrderById, changeOrderStatus } from "./thunk";

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
  currentOrder: any;
}

export const initialState: OrderState = {
  loading: false,
  error: null,
  orders: {
    data: {
      items: [],
      totalCount: 0,
      pageNumber: 1,
      pageSize: 10,
      totalPages: 1
    }
  },
  currentOrder: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get All Orders
    builder.addCase(getAllOrders.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
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
    builder.addCase(addOrder.fulfilled, (state) => {
      state.loading = false;
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
    builder.addCase(updateOrder.fulfilled, (state) => {
      state.loading = false;
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
    builder.addCase(deleteOrder.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(deleteOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Get Order By Id
    builder.addCase(getOrderById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getOrderById.fulfilled, (state, action) => {
      state.loading = false;
      state.currentOrder = action.payload.data;
      state.error = null;
    });
    builder.addCase(getOrderById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Change Order Status
    builder.addCase(changeOrderStatus.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(changeOrderStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      // Update the current order status if it matches the changed order
      if (state.currentOrder && state.currentOrder.id === action.payload.id) {
        state.currentOrder.status = action.payload.status;
      }
    });
    builder.addCase(changeOrderStatus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
    
  },

});

export default orderSlice.reducer; 