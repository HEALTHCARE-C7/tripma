// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { Dispatch } from 'redux';

// interface loginState {
//   selectedMethod: string | null;
//   loginLink: string | null;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: loginState = {
//   selectedMethod: null,
//   loginLink: null,
//   loading: false,
//   error: null,
// };

// const LoginSlice = createSlice({
//   name: 'payment',
//   initialState,
//   reducers: {
//     selectLoginMethod(state, action: PayloadAction<string>) {
//       state.selectedMethod = action.payload;
//     },
//     makeLoginRequest(state) {
//       state.loading = true;
//       state.error = null;
//     },
//     makeLoginSuccess(state, action: PayloadAction<string>) {
//       state.loading = false;
//       state.loginLink = action.payload;
//     },
//     makeLoginFailure(state, action: PayloadAction<string>) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { selectLoginMethod, makeLoginRequest, makeLoginSuccess, makeLoginFailure } = LoginSlice.actions;

// type AuthAction = ReturnType<typeof makeLoginRequest | typeof makeLoginSuccess | typeof makeLoginFailure>;

// export const Login = (amount: number) => async (dispatch: Dispatch<AuthAction>) => {
//   try {
//     dispatch(makeLoginRequest());
//     const res = await axios.post<{ result: { link: string } }>("http://localhost:3000/api/user/login", { amount });
//     const { link } = res.data.result;
//     dispatch(makeLoginSuccess(link));
//     window.location.href = link;
//   } catch (error) {
//     dispatch(makeLoginFailure('error occurred'));
//     console.error(error);
//   }
// };

// export default LoginSlice.reducer;










import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
// import {  PayloadAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

import axios from 'axios'
import { authState,Message } from '@/types/Types';
import { Login } from '@/component/authentication/authAction'

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