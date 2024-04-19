'use client'
import { useForm } from 'react-hook-form'

import { useRouter } from 'next/navigation'

import { useDispatch,useSelector } from 'react-redux'
import  {Login}  from '../../Action/authAction'
import { useState ,useEffect} from 'react'
import { FaEye,FaEyeSlash  } from "react-icons/fa";
import '../../CSS/login.css'
import {useAppDispatch,useAppSelector} from "../../store"
const LoginScreen = () => {

 const user=useAppSelector(state=>state.login.userInfo)
 console.log(user);
 
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm()
  const router = useRouter()

  const success= useAppSelector(state=>
    state.login.success
  )
  console.log('succes',success);
  
  
  const submitForm = (data:any) => {
    dispatch(Login(data)) 
    console.log("succc",success); 
    console.log(register);

}
useEffect(()=>{
  if(success){
    router.push('/') 
  }
},[success])
const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    return (
     
   <div className="container">
        <div className="modal-content padding-class">
        <div className="login-page" >
          <h1>Log In</h1>
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
      </div>
   </div>
   
    
    )
  }
  export default LoginScreen
 