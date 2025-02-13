import { createSlice } from "@reduxjs/toolkit";
import { getBrands, addBrand, updateBrand, deleteBrand } from "./thunk";

interface BrandState {
    loading: boolean;
    error: string | null;
    brands: {
      results: any[];
      currentPage: number;
      pageCount: number;
      pageSize: number;
      rowCount: number;
      firstRowOnPage: number;
      lastRowOnPage: number;
    };
  }

  export const initialState: BrandState = {
    loading: false,
    error: null,
    brands: {
      results: [],
      currentPage: 1,
      pageCount: 1,
      pageSize: 10,
      rowCount: 0,
      firstRowOnPage: 0,
      lastRowOnPage: 0,
    },
  };

const brandSlice = createSlice({
    name: "brand",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      // Get Brands
      builder.addCase(getBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(getBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload.data;
        state.error = null;
      });
      builder.addCase(getBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  
      // Add Brand
      builder.addCase(addBrand.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(addBrand.fulfilled, (state, action) => {
        state.loading = false;
        state.brands.results.unshift(action.payload.data);
        state.error = null;
      });
      builder.addCase(addBrand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  
      // Update Brand
      builder.addCase(updateBrand.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(updateBrand.fulfilled, (state, action) => {
        state.loading = false;
        state.brands.results = state.brands.results.map(brand =>
          brand.id === action.payload.data.id ? action.payload.data : brand
        );
        state.error = null;
      });
      builder.addCase(updateBrand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
  
      // Delete Brand
      builder.addCase(deleteBrand.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(deleteBrand.fulfilled, (state, action) => {
        state.loading = false;
        state.brands.results = state.brands.results.filter(
          brand => brand.id !== action.payload.data
        );
        state.error = null;
      });
      builder.addCase(deleteBrand.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || null;
      });
    },
  });

  export default brandSlice.reducer; 


  
  