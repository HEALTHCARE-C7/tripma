import { Register } from "@/Action/authAction";
import {authState} from '../types/Types';
import { createSlice } from '@reduxjs/toolkit'

const initialState :authState={
    
    loading: false,
    userInfo: null, 
    userToken:"",  
    error: "",
    success: false,
    
    }

     const authSlice = createSlice({
        name: 'auth',
        initialState,
     
     reducers:  {},
     extraReducers: (builder) => {
        builder.addCase(Register.pending, (state) => {
          state.loading = true;
         
        });
        builder.addCase(Register.fulfilled, (state, action) => {
          state.loading = false;
          state.userInfo = action.payload|| null;
          state.success=true
        });
        builder.addCase(Register.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'An error occurred.';
        });
      },
    })
    export default authSlice.reducer