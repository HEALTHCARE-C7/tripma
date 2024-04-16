
// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import { createAsyncThunk } from '@reduxjs/toolkit'
// import { Dispatch } from 'redux';

// import axios from 'axios'
// import { ReservationState,Message } from '@/types/Types';
// import {addVoyage} from '../Action/flightaction'


// const initialState :ReservationState ={
    
//     loading: false,
//     flight:null ,
//     error: "",
//     success: false,
   
    
//     }

//      const authSlice = createSlice({
//         name: 'auth',
//         initialState,
     
//      reducers:  {},
//      extraReducers: (builder) => {
//         builder.addCase(addVoyage.pending, (state,action) => {
//           state.loading = true;
         
//         });
//         builder.addCase(addVoyage.fulfilled, (state, action) => {
//           state.loading = false;
//           state.flight = action.payload | null;
//           state.success=true
//         });
//         builder.addCase(addVoyage.rejected, (state, action) => {
//           state.loading = false;
//           state.error = action.error.message || 'An error occurred.';
//         });
//       },
//     })
//     export default authSlice.reducer