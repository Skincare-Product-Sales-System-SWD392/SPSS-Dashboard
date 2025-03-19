import { createSlice } from "@reduxjs/toolkit";
import { getAllReviews, addReview, updateReview, deleteReview } from "./thunk";

interface ReviewState {
  reviews: {
    data: {
      items: any[];
      totalCount: number;
      pageNumber: number;
      pageSize: number;
      totalPages: number;
    };
  };
  loading: boolean;
  error: string | null;
  selectedReview: any;
}

export const initialState: ReviewState = {
  reviews: {
    data: {
      items: [],
      totalCount: 0,
      pageNumber: 1,
      pageSize: 10,
      totalPages: 1
    }
  },
  loading: false,
  error: null,
  selectedReview: null
};

const reviewSlice = createSlice({
  name: "Review",
  initialState,
  reducers: {
    setSelectedReview: (state, action) => {
      state.selectedReview = action.payload;
    },
    clearSelectedReview: (state) => {
      state.selectedReview = null;
    }
  },
  extraReducers: (builder) => {
    // Get All Reviews
    builder.addCase(getAllReviews.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllReviews.fulfilled, (state, action) => {
      state.loading = false;
      state.reviews = action.payload;
      state.error = null;
    });
    builder.addCase(getAllReviews.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Add Review
    builder.addCase(addReview.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addReview.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(addReview.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Update Review
    builder.addCase(updateReview.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateReview.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(updateReview.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });

    // Delete Review
    builder.addCase(deleteReview.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteReview.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(deleteReview.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  }
});

export const { setSelectedReview, clearSelectedReview } = reviewSlice.actions;
export default reviewSlice.reducer; 