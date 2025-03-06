import { createSlice } from "@reduxjs/toolkit";
import { getAllSkinTypes, addSkinType, updateSkinType, deleteSkinType } from "./thunk";

interface SkinTypeState {
  loading: boolean;
  error: string | null;
  skinTypes: {
    results: any[];
    currentPage: number;
    pageCount: number;
    pageSize: number;
    rowCount: number;
    firstRowOnPage: number;
    lastRowOnPage: number;
  };
}

export const initialState: SkinTypeState = {
  loading: false,
  error: null,
  skinTypes: {
    results: [],
    currentPage: 1,
    pageCount: 1,
    pageSize: 10,
    rowCount: 0,
    firstRowOnPage: 0,
    lastRowOnPage: 0,
  },
};

const skinTypeSlice = createSlice({
  name: "skinType",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Skin Types
    builder.addCase(getAllSkinTypes.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllSkinTypes.fulfilled, (state, action) => {
      state.loading = false;
      state.skinTypes = action.payload.data;
      state.error = null;
    });
    builder.addCase(getAllSkinTypes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Add Skin Type
    builder.addCase(addSkinType.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addSkinType.fulfilled, (state, action) => {
      state.loading = false;
      state.skinTypes.results.unshift(action.payload.data);
      state.error = null;
    });
    builder.addCase(addSkinType.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Update Skin Type
    builder.addCase(updateSkinType.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateSkinType.fulfilled, (state, action) => {
      state.loading = false;
      state.skinTypes.results = state.skinTypes.results.map(skinType =>
        skinType.name === action.payload.data.name ? action.payload.data : skinType
      );
      state.error = null;
    });
    builder.addCase(updateSkinType.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Delete Skin Type
    builder.addCase(deleteSkinType.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteSkinType.fulfilled, (state, action) => {
      state.loading = false;
      state.skinTypes.results = state.skinTypes.results.filter(
        skinType => skinType.name !== action.payload.data
      );
      state.error = null;
    });
    builder.addCase(deleteSkinType.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export default skinTypeSlice.reducer; 