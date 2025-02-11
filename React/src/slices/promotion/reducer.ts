import { createSlice } from "@reduxjs/toolkit";
import { getPromotions } from "./thunk";

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
    });
    builder.addCase(getPromotions.fulfilled, (state, action) => {
      state.loading = false;
      state.promotions = action.payload.data;
    });
    builder.addCase(getPromotions.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Add similar cases for create, update, and delete
  },
});

export default promotionSlice.reducer; 