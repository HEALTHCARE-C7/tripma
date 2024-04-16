'use client'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import {Button} from "@nextui-org/button";

// import  '../CSS/Auth.css'
import { useDispatch,useSelector } from 'react-redux'
import  {Login}  from '../../Action/authAction'
import { useState } from 'react'
import { FaEye,FaEyeSlash  } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
import {useAppDispatch,useAppSelector} from "../../store"
const LoginScreen = () => {
  const router = useRouter()
//   const navigate = useNavigate();
 const user=useAppSelector(state=>state.login.userInfo)
 console.log('hello',user);
 
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm()
  const success= useAppSelector(state=>
    state.login.success
  )
  console.log('succes',success);
 
  
 const submitForm = (data:any) => {
  dispatch(Login(data)) 
  console.log("succc",success); 
  if(success){
    router.push('/profileDoc', { scroll: false })
    // navigate('/Profile/doc')
    // changeView('login')
  }else{

    console.log('error');
}
}

const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    return (
      // <div id="loginModal" className="modal">
      // <div className="modal">
      <div className="modal-content">
        <div className="login-page">
          <h1>Log In Doctor</h1>
          <form onSubmit={handleSubmit(submitForm)}>
            <div className="form-group-login">
              <label className="email" htmlFor="email">Email</label>
              <input
                type="email"
                className="form-input-login"
                {...register('email')}
                required
                placeholder="Email"
              />
            </div>
            <div className="form-group-login">
              <label className="password" htmlFor="password">Password</label>
             <div className="password-input-container">
              <input
                className="form-input-login"
                {...register('password')}
                required
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                
              />
              <button className="password-toggle" onClick={togglePasswordVisibility}>
             {showPassword ? <FaEyeSlash /> :  <FaEye />}
             </button>
             </div>
             
            </div>
            <button type="submit" className="button-login"  >Log In</button>
          </form>
        </div>
        <Button>Press me</Button>
      </div>
    // </div>
    // </div>
    
    )
  }
  export default LoginScreen
  // import React, { useEffect } from 'react'
  // import { useRouter } from 'next/router'
  // import { setMessage } from "../../../reduce/authReduceLogin"
  // import { useAppSelector, useAppDispatch } from  "../../../store"
  
  // const Login: React.FC = () => {
  
  //     const router = useRouter()
  //     const dispatch = useAppDispatch()
  //     // const [messageApi, contextHolder] = message.useMessage() 
  //     const isAuthenticated = useAppSelector(state => state?.auth?.isAuthenticated ?? false)
  //     const isAuthenticating = useAppSelector(state => state?.auth?.isAuthenticating ?? true)
  //     const actionMessage = useAppSelector(state => state?.auth?.message ?? {type: null, message: null}) 
  
  // return(
  //     <form >
  //       <input type="email" name="email" placeholder="Email" required />
  //       <input type="password" name="password" placeholder="Password" required />
  //       <button type="submit">Login</button>
  //     </form>
    
  // )
  // }