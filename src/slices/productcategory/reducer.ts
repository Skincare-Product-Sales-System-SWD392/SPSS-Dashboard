import { createSlice } from "@reduxjs/toolkit";
import { getAllVariations, addVariation, updateVariation, deleteVariation } from "./thunk";

interface VariationState {
  loading: boolean;
  error: string | null;
  variations: {
    data: {
      items: any[];
      totalCount: number;
      pageNumber: number;
      pageSize: number;
      totalPages: number;
    };
  };
}

export const initialState: VariationState = {
  loading: false,
  error: null,
  variations: {
    data: {
      items: [],
      totalCount: 0,
      pageNumber: 1,
      pageSize: 10,
      totalPages: 1
    }
  }
};

const variationSlice = createSlice({
  name: "Variation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Variations
    builder.addCase(getAllVariations.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllVariations.fulfilled, (state, action) => {
      state.loading = false;
      state.variations = action.payload;
    });
    builder.addCase(getAllVariations.rejected, (state, action) => {
      state.loading = false;
      state.error = typeof action.payload === 'string' ? action.payload : action.error.message || null;
    });

    // Add Variation
    builder.addCase(addVariation.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addVariation.fulfilled, (state, action) => {
      state.loading = false;
      state.variations.data.items.unshift(action.payload.data);
      state.error = null;
    });
    builder.addCase(addVariation.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Update Variation
    builder.addCase(updateVariation.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateVariation.fulfilled, (state, action) => {
      state.loading = false;
      state.variations.data.items = state.variations.data.items.map(variation =>
        variation.id === action.payload.data.id ? action.payload.data : variation
      );
      state.error = null;
    });
    builder.addCase(updateVariation.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Delete Variation
    builder.addCase(deleteVariation.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteVariation.fulfilled, (state, action) => {
      state.loading = false;
      state.variations.data.items = state.variations.data.items.filter(
        variation => variation.id !== action.payload.data
      );
      state.error = null;
    });
    builder.addCase(deleteVariation.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export default variationSlice.reducer; 