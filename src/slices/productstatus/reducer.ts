import { createSlice } from "@reduxjs/toolkit";
import { getAllProductStatuses, addProductStatus, updateProductStatus, deleteProductStatus } from "./thunk";

interface ProductStatusState {
  loading: boolean;
  error: string | null;
  productStatuses: {
    data: {
      items: any[];
      totalCount: number;
      pageNumber: number;
      pageSize: number;
      totalPages: number;
    }
  };
}

export const initialState: ProductStatusState = {
  loading: false,
  error: null,
  productStatuses: {
    data: {
      items: [],
      totalCount: 0,
      pageNumber: 1,
      pageSize: 5,
      totalPages: 1
    }
  },
};

const productStatusSlice = createSlice({
  name: "productStatus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Product Statuses
    builder.addCase(getAllProductStatuses.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllProductStatuses.fulfilled, (state, action) => {
      state.loading = false;
      state.productStatuses = {
        data: action.payload.data
      };
      state.error = null;
    });
    builder.addCase(getAllProductStatuses.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Add Product Status
    builder.addCase(addProductStatus.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addProductStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.productStatuses.data.items.unshift(action.payload.data);
      state.error = null;
    });
    builder.addCase(addProductStatus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Update Product Status
    builder.addCase(updateProductStatus.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateProductStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.productStatuses.data.items = state.productStatuses.data.items.map(productStatus =>
        productStatus.id === action.payload.data.id ? action.payload.data : productStatus
      );
      state.error = null;
    });
    builder.addCase(updateProductStatus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Delete Product Status
    builder.addCase(deleteProductStatus.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteProductStatus.fulfilled, (state, action) => {
      state.loading = false;
      state.productStatuses.data.items = state.productStatuses.data.items.filter(
        productStatus => productStatus.id !== action.payload.data
      );
      state.error = null;
    });
    builder.addCase(deleteProductStatus.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export default productStatusSlice.reducer; 