import { createSlice } from "@reduxjs/toolkit";
import { getAllReviews, addReview, updateReview, deleteReview } from "./thunk";

interface ReviewState {
  loading: boolean;
  error: string | null;
  reviews: {
    data: {
      items: any[];
      totalCount: number;
      pageNumber: number;
      pageSize: number;
      totalPages: number;
    }
  };
  selectedReview: any | null;
}

export const initialState: ReviewState = {
  loading: false,
  error: null,
  reviews: {
    data: {
      items: [],
      totalCount: 0,
      pageNumber: 1,
      pageSize: 10,
      totalPages: 1
    }
  },
  selectedReview: null,
};

const reviewSlice = createSlice({
  name: "review",
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
    // Get Reviews
    builder.addCase(getAllReviews.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllReviews.fulfilled, (state, action) => {
      state.loading = false;
      state.reviews = {
        data: action.payload.data
      };
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
    builder.addCase(addReview.fulfilled, (state, action) => {
      state.loading = false;
      state.reviews.data.items.unshift(action.payload.data);
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
    builder.addCase(updateReview.fulfilled, (state, action) => {
      state.loading = false;
      state.reviews.data.items = state.reviews.data.items.map(review =>
        review.id === action.payload.data.id ? action.payload.data : review
      );
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
    builder.addCase(deleteReview.fulfilled, (state, action) => {
      state.loading = false;
      state.reviews.data.items = state.reviews.data.items.filter(
        review => review.id !== action.payload.data
      );
      state.error = null;
    });
    builder.addCase(deleteReview.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export const { setSelectedReview, clearSelectedReview } = reviewSlice.actions;
export default reviewSlice.reducer; 