import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'


export const getOneName =  createAsyncThunk  (
    "auth/destination",
async (Name) =>{
    try {
        const response = await axios.get(`http://localhost:3000/api/destination${Name}`);
        return response.data;
     
    } catch (error) {
        console.error(error);
    }
   
})