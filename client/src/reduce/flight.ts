import { createSlice } from '@reduxjs/toolkit';
import { ReservationState, Reservation } from '@/types/Types'; // Ensure correct import path
import { getAllVoyages,getOnebycompanyName,getOnebydeparture,getOnebydestination, addVoyage,deleteVoyage,getByAll ,decrementSeat,getOnebydepartureplace, update} from '../Action/flightaction';

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


      .addCase(getOnebydepartureplace.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOnebydepartureplace.fulfilled, (state, action) => {
        state.loading = false;
        state.flight = action.payload;
        state.success = true;
      })
      .addCase(getOnebydepartureplace .rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred.';
      })

      .addCase(getByAll.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getByAll.fulfilled, (state, action) => {
        state.loading = false;
        state.flight = action.payload;
        state.success = true;
      })
      .addCase(getByAll .rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred.';
      })


      // .addCase(addVoyage.pending, (state, action) => {
      //   state.loading = true;
      //   state.error = null;
      // })
      // .addCase(addVoyage.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.flight = action.payload;
      //   state.success = true;
      // })
      // .addCase(addVoyage.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message || 'An error occurred.';
      // })



      .addCase(decrementSeat.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(decrementSeat.fulfilled, (state, action) => {
        state.loading = false;
        state.flight = action.payload;
        state.success = true;
      })
      .addCase(decrementSeat.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred.';
      })


      .addCase(getOnebydeparture.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOnebydeparture.fulfilled, (state, action) => {
        state.loading = false;
        state.flight = action.payload;
        state.success = true;
      })
      .addCase(getOnebydeparture.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred.';
      })


      .addCase(getOnebydestination.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOnebydestination.fulfilled, (state, action) => {
        state.loading = false;
        state.flight = action.payload;
        state.success = true;
      })
      .addCase(getOnebydestination.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred.';
      })



      .addCase(getOnebycompanyName.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOnebycompanyName.fulfilled, (state, action) => {
        state.loading = false;
        state.flight = action.payload;
        state.success = true;
      })
      .addCase(getOnebycompanyName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred.';
      })



      .addCase(deleteVoyage.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteVoyage.fulfilled, (state, action) => {
        state.loading = false;
        state.flight = state.flight;
        state.success = true;
      })
      .addCase(deleteVoyage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred.';
      })


      .addCase(update.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.loading = false;
        state.flight = state.flight;
        state.success = true;
      })
      .addCase(update.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred.';
      });

      
  },
});

export default authSlice.reducer;
