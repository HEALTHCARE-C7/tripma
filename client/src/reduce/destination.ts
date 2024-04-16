import { createSlice } from '@reduxjs/toolkit';
import { destinationState, Destin } from '@/types/Types'; // Ensure correct import path
import { getOneName} from '../Action/destination';




const initialState: destinationState = {
    loading: false,
    destination: [],
    error: null,
    success: false,
  };

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getOneName.pending, (state, action) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getOneName.fulfilled, (state, action) => {
          state.loading = false;
          state.destination = action.payload;
          state.success = true;
        })
        .addCase(getOneName.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'An error occurred.';
        })
  
  
        
       
    },
  });
  
  export default authSlice.reducer;
  