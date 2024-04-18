import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {User} from '../types/Types'
export const Register = createAsyncThunk(
  'auth/register',
  async (obj:User, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
     const data= await axios.post(
        `http://localhost:3000/api/user/register`,
        obj,
        config
      )
      console.log(data);
   
    } catch (error:any) {
    
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        console.log("ffffff,",error);
        return rejectWithValue(error.message)
      }
    }
  }
)


export const Login = createAsyncThunk(
    'auth/login',
    async ({ email, password}:any, { rejectWithValue }) => {
      try {
        
        
        const {data} = await axios.post(
          `http://localhost:3000/api/user/login`,
          { email, password},
         
        )
        
        localStorage.setItem('token', data.token)
        return data
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