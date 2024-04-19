import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {Reservation,Params} from '../types/Types'


export const getAllVoyages =  createAsyncThunk  (
    "auth/flight",
async () =>{
    try {
        const response = await axios.get('http://localhost:3000/api/voyage');
        // console.log("from the back",response.data);
        return response.data;
     
    } catch (error) {
        console.error(error);
    }
   
})
export const decrementSeat =  createAsyncThunk  (
    "auth/flight/decrementSeat",
async (id) =>{
    try {
        const response = await axios.patch(`http://localhost:3000/api/voyage/decrementSeat/${id}`);
        return response.data;
     
    } catch (error) {
        console.error(error);
    }
   
})

export const getOnebydepartureplace =  createAsyncThunk  (
    "auth/flight/getOnebydepartureplace",
async (departureplace) =>{
    try {
        const response = await axios.patch(`http://localhost:3000/api/voyage/getOnebydepartureplace/${departureplace}`);
        return response.data;
     
    } catch (error) {
        console.error(error);
    }
   
})

export const getByAll =  createAsyncThunk  ("auth/flight/getByAll",
async ( obj:Params) =>{
    try {
        const response = await axios.get(`http://localhost:3000/api/voyage/getByAll/${obj.departureplace}/${obj.destination}`);
        console.log("from back search",response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
   
})

export const getOnebycompanyName =  createAsyncThunk  (
    "auth/flight/companyName",
async (companyName) =>{
    try {
        const response = await axios.get(`http://localhost:3000/api/voyage/${companyName}`);
        return response.data;
     
    } catch (error) { 
        console.error(error);
    }
   
})

export const getOnebydestination =  createAsyncThunk  (
    "auth/flight/destination",
async (destination) =>{
    try {
        const response = await axios.get(`http://localhost:3000/api/voyage/${destination}`);
        return response.data;
     
    } catch (error) {
        console.error(error);
    }
   
})

export const getOnebydeparture =  createAsyncThunk  (
    "auth/flight/departure",
async (departure) =>{
    try {
        const response = await axios.get(`http://localhost:3000/api/voyage/${departure}`);
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


export const update = createAsyncThunk(
    "auth/flight/update",
    async (id) => {
      try {
        const response = await axios.put(`http://localhost:3000/api/voyage/${id}`);
        return response.data;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  );
  export const deleteVoyage = createAsyncThunk(
    "auth/flight/deleteVoyage",
    async (id) => {
      try {
        await axios.delete(`http://localhost:3000/api/voyage/${id}`);
        return id;
      } catch (error) {
        console.error(error);
        throw error;
      }
    }
  );

