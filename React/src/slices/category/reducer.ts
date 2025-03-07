import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories, addCategory, updateCategory, deleteCategory } from "./thunk";

interface CategoryState {
  loading: boolean;
  error: string | null;
  categories: {
    results: any[];
    currentPage: number;
    pageCount: number;
    pageSize: number;
    rowCount: number;
    firstRowOnPage: number;
    lastRowOnPage: number;
  };
}

export const initialState: CategoryState = {
  loading: false,
  error: null,
  categories: {
    results: [],
    currentPage: 1,
    pageCount: 1,
    pageSize: 10,
    rowCount: 0,
    firstRowOnPage: 0,
    lastRowOnPage: 0,
  },
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Categories
    builder.addCase(getAllCategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload.data;
      state.error = null;
    });
    builder.addCase(getAllCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Add Category
    builder.addCase(addCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.categories.results.unshift(action.payload.data);
      state.error = null;
    });
    builder.addCase(addCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Update Category
    builder.addCase(updateCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.categories.results = state.categories.results.map(category =>
        category.parentCategoryId === action.payload.data.parentCategoryId ? action.payload.data : category
      );
      state.error = null;
    });
    builder.addCase(updateCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Delete Category
    builder.addCase(deleteCategory.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.categories.results = state.categories.results.filter(
        category => category.parentCategoryId !== action.payload.data
      );
      state.error = null;
    });
    builder.addCase(deleteCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export default categorySlice.reducer;
