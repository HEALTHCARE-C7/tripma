import { createSlice } from '@reduxjs/toolkit';
import { ReservationState, Reservation } from '@/types/Types'; // Ensure correct import path
import { getAllVoyages, addVoyage } from '../Action/flightaction';

const initialState: ReservationState = {
  loading: false,
  flight: [],
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllVoyages.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllVoyages.fulfilled, (state, action) => {
        state.loading = false;
        state.flight = action.payload;
        state.success = true;
      })
      .addCase(getAllVoyages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred.';
      })



      .addCase(addVoyage.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addVoyage.fulfilled, (state, action) => {
        state.loading = false;
        state.flight = action.payload;
        state.success = true;
      })
      .addCase(addVoyage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred.';
      })



    //   .addCase(deleteVoyage.pending, (state, action) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(deleteVoyage.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.flight = state.flight.filter(voyage => voyage.id !== action.payload);
    //     state.success = true;
    //   })
    //   .addCase(deleteVoyage.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.error.message || 'An error occurred.';
    //   });


      
  },
});

export default authSlice.reducer;
