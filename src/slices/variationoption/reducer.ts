import { createSlice } from "@reduxjs/toolkit";
import { getAllVariationOptions, addVariationOption, updateVariationOption, deleteVariationOption } from "./thunk";

interface VariationOptionState {
  loading: boolean;
  error: string | null;
  variationOptions: {
    data: {
      items: any[];
      totalCount: number;
      pageNumber: number;
      pageSize: number;
      totalPages: number;
    };
  };
}

export const initialState: VariationOptionState = {
  loading: false,
  error: null,
  variationOptions: {
    data: {
      items: [],
      totalCount: 0,
      pageNumber: 1,
      pageSize: 10,
      totalPages: 1
    }
  }
};

const variationOptionSlice = createSlice({
  name: "VariationOption",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Variation Options
    builder.addCase(getAllVariationOptions.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllVariationOptions.fulfilled, (state, action) => {
      state.loading = false;
      state.variationOptions = action.payload;
    });
    builder.addCase(getAllVariationOptions.rejected, (state, action) => {
      state.loading = false;
      state.error = typeof action.payload === 'string' ? action.payload : action.error.message || null;
    });

    // Add Variation Option
    builder.addCase(addVariationOption.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addVariationOption.fulfilled, (state, action) => {
      state.loading = false;
      state.variationOptions.data.items.unshift(action.payload.data);
      state.error = null;
    });
    builder.addCase(addVariationOption.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Update Variation Option
    builder.addCase(updateVariationOption.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateVariationOption.fulfilled, (state, action) => {
      state.loading = false;
      state.variationOptions.data.items = state.variationOptions.data.items.map(option =>
        option.id === action.payload.data.id ? action.payload.data : option
      );
      state.error = null;
    });
    builder.addCase(updateVariationOption.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Delete Variation Option
    builder.addCase(deleteVariationOption.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteVariationOption.fulfilled, (state, action) => {
      state.loading = false;
      state.variationOptions.data.items = state.variationOptions.data.items.filter(
        option => option.id !== action.payload.data
      );
      state.error = null;
    });
    builder.addCase(deleteVariationOption.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export default variationOptionSlice.reducer; 