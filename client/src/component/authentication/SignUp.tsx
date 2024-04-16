'use client'
import React, { useState, FormEvent } from 'react';
import {useAppDispatch,useAppSelector} from "../../store"
import { useForm } from 'react-hook-form'
import { Register } from '@/Action/authAction';

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
  gender: string;
  location: string;
  phoneNumber: number;
  role: string;

}

const RegisterForm: React.FC = () => {
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm()
  const success= useAppSelector(state=>
    state.register.success
  )
 
  const submitForm = () => {
    dispatch(Register()) 
    console.log("succc",success); 
    if(success){
      // navigate('/Profile/doc')
      // changeView('login')
    }else{
  
      console.log('error');
  }
  }


  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <input
        type="text"
        placeholder="firstName"
       
        {...register('firstName')}
        required
      />
       <input
        type="text"
        placeholder="lastName"
        
        {...register('lastName')}
        required
      />
      <input
        type="email"
        placeholder="Email"
        {...register('Email')}
        required
      />
      <input
        type="password"
        placeholder="Password"
        {...register('Password')}
        required
      />
        <input
        type="number"
        placeholder="age"
        {...register('age')}
        required
      />
        <input
        type="text"
        placeholder="location"
        {...register('location')}
        required
      />
        <input
        type="number"
        placeholder="phoneNumber"
        {...register('phoneNumber')}
        required
      />
        <input
        type="text"
        placeholder="role"
        {...register('role')}
        required
      />
      <button type="submit">SignUp</button>
    </form>
  );
};

export default RegisterForm;
