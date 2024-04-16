import axios from 'axios'
// import React from "react";
import { createAsyncThunk } from '@reduxjs/toolkit'




export const Login = createAsyncThunk(
    'auth/login',
    async ({ email, password }:any, { rejectWithValue }) => {
      try {
        
        
        const { data } = await axios.post(
          `http://localhost:5000/api/user/login`,
          { email, password },
         
        )
        
        localStorage.setItem('token', data.token)
        return data.patient
      } catch (error:any) {
      
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          console.log(error);
          return rejectWithValue(error.message)
        }
      }
    }
  )