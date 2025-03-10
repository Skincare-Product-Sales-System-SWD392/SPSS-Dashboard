import { createSlice } from "@reduxjs/toolkit";
import { getPromotions, addPromotion, updatePromotion, deletePromotion } from "./thunk";

interface PromotionState {
  loading: boolean;
  error: string | null;
  promotions: {
    results: any[];
    currentPage: number;
    pageCount: number;
    pageSize: number;
    rowCount: number;
    firstRowOnPage: number;
    lastRowOnPage: number;
  };
}

export const initialState: PromotionState = {
  loading: false,
  error: null,
  promotions: {
    results: [],
    currentPage: 1,
    pageCount: 1,
    pageSize: 10,
    rowCount: 0,
    firstRowOnPage: 0,
    lastRowOnPage: 0,
  },
};

const promotionSlice = createSlice({
  name: "promotion",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Get Promotions
    builder.addCase(getPromotions.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getPromotions.fulfilled, (state, action) => {
      state.loading = false;
      state.promotions = action.payload.data;
      state.error = null;
    });
    builder.addCase(getPromotions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Add Promotion
    builder.addCase(addPromotion.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addPromotion.fulfilled, (state, action) => {
      state.loading = false;
      state.promotions.results.unshift(action.payload.data);
      state.error = null;
    });
    builder.addCase(addPromotion.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Update Promotion
    builder.addCase(updatePromotion.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updatePromotion.fulfilled, (state, action) => {
      state.loading = false;
      state.promotions.results = state.promotions.results.map(promotion =>
        promotion.id === action.payload.data.id ? action.payload.data : promotion
      );
      state.error = null;
    });
    builder.addCase(updatePromotion.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Delete Promotion
    builder.addCase(deletePromotion.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deletePromotion.fulfilled, (state, action) => {
      state.loading = false;
      state.promotions.results = state.promotions.results.filter(
        promotion => promotion.id !== action.payload.data
      );
      state.error = null;
    });
    builder.addCase(deletePromotion.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export default promotionSlice.reducer; 