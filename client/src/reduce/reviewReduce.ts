import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchReviews, getReviewById, createReview, deleteReview } from '../Action/reviewAction';

// Define the initial state
interface ReviewState {
  reviews: any[]; // Update with your review type
  loading: boolean;
  error: string | null;
}

const initialState: ReviewState = {
  reviews: [],
  loading: false,
  error: null,
};

// Create a slice for managing reviews
const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action: PayloadAction<any[]>) => {
        state.loading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'An error occurred while fetching reviews.';
      })
      .addCase(getReviewById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getReviewById.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        // Update the state with the fetched review
      })
      .addCase(getReviewById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'An error occurred while fetching the review.';
      })
      .addCase(createReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createReview.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        // Update the state with the newly created review
      })
      .addCase(createReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'An error occurred while creating the review.';
      })
      .addCase(deleteReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteReview.fulfilled, (state, action: PayloadAction<any>) => {
        state.loading = false;
        // Update the state by removing the deleted review
      })
      .addCase(deleteReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'An error occurred while deleting the review.';
      });
  },
});

// Export actions and reducer
export const reviewActions = { ...reviewSlice.actions, fetchReviews };
export default reviewSlice.reducer;
