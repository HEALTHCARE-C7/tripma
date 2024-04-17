
import { createSlice } from '@reduxjs/toolkit'
import { authState } from '@/types/Types';
import { Login} from '@/Action/authAction'

// 

const initialState :authState ={
    
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
        builder.addCase(Login.pending, (state,action) => {
          state.loading = true;
         
        });
        builder.addCase(Login.fulfilled, (state, action) => {
          state.loading = false;
          state.userInfo = action.payload;
          state.success=true
        });
        builder.addCase(Login.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'An error occurred.';
        });
      },
    })
    export default authSlice.reducer