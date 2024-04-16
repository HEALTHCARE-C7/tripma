import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'




export const getAllVoyages =  createAsyncThunk  (
    "auth/flight",
async () =>{
    try {
        const response = await axios.get('http://localhost:3000/api/voyage');
     
    } catch (error) {
        console.error(error);
    }
})

export const addVoyage =  createAsyncThunk  (
    "auth/flight",
async () =>{
    try {
        const response = await axios.post('http://localhost:3000/api/voyage');
      
    } catch (error) {
        console.error(error);
    }
})

// Define other actions for getting, updating, and deleting voyages...
