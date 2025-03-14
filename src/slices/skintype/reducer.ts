import { createSlice } from "@reduxjs/toolkit";
import { getAllSkinTypes, addSkinType, updateSkinType, deleteSkinType } from "./thunk";

interface SkinTypeState {
  loading: boolean;
  error: string | null;
  skinTypes: {
    data: {
      items: any[];
      totalCount: number;
      pageNumber: number;
      pageSize: number;
      totalPages: number;
    }
  };
}

export const initialState: SkinTypeState = {
  loading: false,
  error: null,
  skinTypes: {
    data: {
      items: [],
      totalCount: 0,
      pageNumber: 1,
      pageSize: 5,
      totalPages: 1
    }
  },
};

const skinTypeSlice = createSlice({
  name: "skintype",
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
      state.skinTypes = {
        data: action.payload.data
      };
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
      state.skinTypes.data.items.unshift(action.payload.data);
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
      state.skinTypes.data.items = state.skinTypes.data.items.map(skinType =>
        skinType.id === action.payload.data.id ? action.payload.data : skinType
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
      state.skinTypes.data.items = state.skinTypes.data.items.filter(
        skinType => skinType.id !== action.payload.data
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