import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Define the thunk
export const fetchReviews = createAsyncThunk(
  'reviews/fetchReviews',
  async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/reviews');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
// Define the thunk to get a review by ID
export const getReviewById = createAsyncThunk(
    'reviews/getReviewById',
    async (id, { rejectWithValue }) => {
      try {
        const response = await axios.get(`http://localhost:5000/api/reviews/${id}`);
        return response.data;
      } catch (error) {
        throw error;
      }
    }
  );
  
  // Define the thunk to create a new review
  export const createReview = createAsyncThunk(
    'reviews/createReview',
    async (reviewData, { rejectWithValue }) => {
      try {
        const response = await axios.post('http://localhost:5000/api/reviews', reviewData);
        return response.data;
      } catch (error) {
        throw error;
      }
    }
  );
  
  // Define the thunk to delete a review by ID
  export const deleteReview = createAsyncThunk(
    'reviews/deleteReview',
    async (id, { rejectWithValue }) => {
      try {
        const response = await axios.delete(`http://localhost:5000/api/reviews/${id}`);
        return response.data;
      } catch (error) {
        throw error;
      }
    }
  );

