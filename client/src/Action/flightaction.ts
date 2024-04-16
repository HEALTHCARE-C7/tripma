import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'




export const getAllVoyages =  createAsyncThunk  (
    "auth/flight",
async () =>{
    try {
        const response = await axios.get('http://localhost:3000/api/voyage');
        return response.data;
     
    } catch (error) {
        console.error(error);
    }
   
})

export const addVoyage =  createAsyncThunk  (
    "auth/flight",
async () =>{
    try {
        const response = await axios.post('http://localhost:3000/api/voyage');
        return response.data;
    } catch (error) {
        console.error(error);
    }
})


// export const update = createAsyncThunk(
//     "auth/flight/update",
//     async (id) => {
//       try {
//         const response = await axios.put(`http://localhost:3000/api/voyage/${id}`);
//         return response.data;
//       } catch (error) {
//         console.error(error);
//         throw error;
//       }
//     }
//   );
//   export const deleteVoyage = createAsyncThunk(
//     "auth/flight/deleteVoyage",
//     async (id) => {
//       try {
//         await axios.delete(`http://localhost:3000/api/voyage/${id}`);
//         return id;
//       } catch (error) {
//         console.error(error);
//         throw error;
//       }
//     }
//   );
// Define other actions for getting, updating, and deleting voyages...
