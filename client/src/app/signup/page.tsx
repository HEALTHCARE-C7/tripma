'use client'
import React, { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import {useAppDispatch,useAppSelector} from "../../store"
import { useForm,Resolver  } from 'react-hook-form'
import { Register ,} from '@/Action/authAction';
import  Link  from "next/link";

import '../../CSS/signup.css'
import {User} from '../../types/Types';
const resolver: Resolver<User> = async (values) => {
  return {
    values: values.firstName ? values : {},
    errors: !values.firstName
      ? {
          firstName: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  }
}

const RegisterForm: React.FC = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { register, handleSubmit } =useForm<User>({ resolver })
  const [view,setView]=useState(false)
  const success= useAppSelector(state=>
    state.register.success
  )
  const err= useAppSelector(state=>
    state.register.error
  )
 console.log("success", success);
  
 const submitForm = (f:User) => {
   console.log(f)
   dispatch(Register(f))
  }




  useEffect(()=>{
    if(success){
      router.push('/') 
    }
  },[success])



  return (
    <div className="modal-content">
      <div className="signup-page">
        <h1>Sign Up </h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="form-group">
            <label className="firstName">First Name</label><br />
            <input type="text" className="form-input-signup" {...register('firstName')} required placeholder='Your First Name'/>
          </div>
          <div className="form-group">
            <label className="lastName">Last Name</label><br/>
            <input type="text" className="form-input-signup" {...register('lastName')} required placeholder='Your Last Name'/>
          </div>
          <div className="form-group">
            <label className="email">Email</label><br/>
            <input type="email" className="form-input-signup" {...register('email')} required placeholder='Your Email'/>
          </div>
          <div className="form-group">
            <label className="password">Password</label><br/>
            <input type="password" className="form-input-signup" {...register('password')} required placeholder='Your Password'/>
          </div>
          <div className="form-group">
            <label className="location">Location</label><br/>
            <input type="text" className="form-input-signup" {...register('location')} required placeholder='Your Location'/>
          </div>
          <div className="form-group">
            <label className="gender">Gender</label><br/>
            <select className='allOption-signup' defaultValue="male" {...register("gender")} required>
        <option className='option-signup' value="male">Male</option>
        <option className='option-signup' value="female">Female</option>
      </select>
          </div>
          <div className="form-group">
            <label className="age">Age</label><br/>
            <input type="number" className="form-input-signup" {...register('age')} required placeholder='Your Age'/>
            
          </div>
          <div className="form-group">
            <label className="phoneNumber">Phone Number</label><br/>
            <input type="number" className="form-input-signup" {...register('phoneNumber')} required placeholder='Your Phone Number'/>
          </div>
          <div className="form-group">
          <label className="role">Role</label><br/>
          <select className='allOption-signup' defaultValue="user" {...register("role")} required>
        <option className='option-signup' value="user">User</option>
        <option className='option-signup' value="airlineCompanies">Airline Companies</option>
      </select>
          </div>
          <button type="submit" className="button-signup"  >Sign Up</button>
        </form>
      </div>
     
    </div>
  );
};

export default RegisterForm;
