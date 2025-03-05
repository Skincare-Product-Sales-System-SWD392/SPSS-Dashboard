import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts, addProduct, updateProduct, deleteProduct } from "./thunk";

interface ProductState {
  loading: boolean;
  error: string | null;
  products: {
    results: any[];
    currentPage: number;
    pageCount: number;
    pageSize: number;
    rowCount: number;
    firstRowOnPage: number;
    lastRowOnPage: number;
  };
}

export const initialState: ProductState = {
  loading: false,
  error: null,
  products: {
    results: [],
    currentPage: 1,
    pageCount: 1,
    pageSize: 10,
    rowCount: 0,
    firstRowOnPage: 0,
    lastRowOnPage: 0,
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Products
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload.data;
      state.error = null;
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Add Product
    builder.addCase(addProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products.results.unshift(action.payload.data);
      state.error = null;
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Update Product
    builder.addCase(updateProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products.results = state.products.results.map(product =>
        product.id === action.payload.data.id ? action.payload.data : product
      );
      state.error = null;
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Delete Product
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products.results = state.products.results.filter(
        product => product.id !== action.payload.data
      );
      state.error = null;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export default productSlice.reducer; 