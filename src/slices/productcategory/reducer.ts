import { createSlice } from "@reduxjs/toolkit";
import { getAllProductCategories, addProductCategory, updateProductCategory, deleteProductCategory } from "./thunk";

interface ProductCategoryState {
  loading: boolean;
  error: string | null;
  productCategories: {
    data: {
      items: any[];
      totalCount: number;
      pageNumber: number;
      pageSize: number;
      totalPages: number;
    };
  };
}

export const initialState: ProductCategoryState = {
  loading: false,
  error: null,
  productCategories: {
    data: {
      items: [],
      totalCount: 0,
      pageNumber: 1,
      pageSize: 10,
      totalPages: 1
    }
  }
};

const productCategorySlice = createSlice({
  name: "ProductCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Product Categories
    builder.addCase(getAllProductCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllProductCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.productCategories = action.payload;
    });
    builder.addCase(getAllProductCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = typeof action.payload === 'string' ? action.payload : action.error.message || null;
    });

    // Add Product Category
    builder.addCase(addProductCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addProductCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.productCategories.data.items.unshift(action.payload.data);
      state.error = null;
    });
    builder.addCase(addProductCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Update Product Category
    builder.addCase(updateProductCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateProductCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.productCategories.data.items = state.productCategories.data.items.map(category =>
        category.id === action.payload.data.id ? action.payload.data : category
      );
      state.error = null;
    });
    builder.addCase(updateProductCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Delete Product Category
    builder.addCase(deleteProductCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteProductCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.productCategories.data.items = state.productCategories.data.items.filter(
        category => category.id !== action.payload.data
      );
      state.error = null;
    });
    builder.addCase(deleteProductCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export default productCategorySlice.reducer; 