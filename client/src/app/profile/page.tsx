'use client'
import React,{useState,useCallback,useRef} from 'react'
import '../../CSS/profile.css'
import '../../CSS/login.css'
import  Link  from "next/link";

import { TbBrandGmail } from "react-icons/tb";
import PhoneInput from 'react-phone-number-input'
import { FaCirclePlus } from "react-icons/fa6";
// import Map from "./page2"
export default function test() {
    const [value, setValue] = useState(0)
    const [country, setCountry] = useState(0)


    const handleClick = () => {
      alert('Success!');
    
    }
    
   

    return (

   <>
        <div className="container-fluid" style={{width:"1000px%",  height: '10rem',border:"2px solid #ccc"}}>
        <div className="row" style={{paddingBottom:"1rem"}}>
        <div className='col-12 hello'><p>tripma.com</p></div>
          <div className='col-9 iheb'  ><p>hello , iheb!</p></div>
         
          <nav className='navbareProfile'>
  
  <a href="/Hotels">Hotels</a>
  <Link href="/Booking" className="nav-link"  style={{color:"#7C8DB0"}} >Booking</Link>
  <Link href="/login" className="nav-link"  style={{color:"#7C8DB0"}} >login</Link>
  <Link href="/signup" className="nav-link"  style={{color:"#7C8DB0"}} >signup</Link>
</nav>

        </div>
        </div>
                <div className="container">
                    <div className="row">
                        <div style={{display:"flex", justifyContent:"center", marginTop:'100px'}} className="col-12">
                       <TbBrandGmail />
                       <br />
                            <h1 >ihabghdifi@gmail.com</h1>
                           
                        </div>
                    </div>
                </div>
              
                <div className="collapse navbar-collapse" style={{justifyContent:"end"}} id="navbarNavAltMarkup">
           
            </div>

        <div className="container">
        <div className="modal-content70  padding-class">
            
        <div className="login-page" >
          <h1>Personal data</h1>
          <div style={{width: "100px", height: "10px", borderRadius: "50%",justifyContent:"left",marginTop:"10px"}} className="col-6" >
          <input  type="radio" id="M" name="title" value="M"
          />
          <label >M</label>
          
          <input style={{marginLeft:"20px"}}  type="radio" id="Mme" name="title" value="Mme"
 />
  <label >Mme</label>

          </div>
         
          <form >
           
            <div className="form-group-login">
              <label className="password" htmlFor="password"></label>
             <div className="password-input-container">
              <input
                className="form-input-login"
              
                placeholder="Name"
                               
              />
              <div className="form-group-login"></div>
               <input
                className="form-input-login"
              
                placeholder="Last Name"
                               
              />
                <div className="form-group-login"></div>
               <input
                className="form-input-login"
              
                placeholder="Birthday"
                               
              />
            

             <div className="form-group-login"></div>
             <div className="container">
                    <div className="row">
                        <div style={{display:"flex", justifyContent:"left", marginTop:'10px'}} className="col-3">
                       
                            <h1 >adresse</h1>
                        </div>
                    </div>
                </div>
               <input
                className="form-input-login"
              
                placeholder="Adresse"
                               
              />
                <div className="container">
          <div className="row">
            <div className="col-12">
              <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6381.735480424553!2d10.18571026406821!3d36.89351216886016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb7254b0ee4f%3A0x7e87e33674451f9e!2sEl%20Ghazala!5e0!3m2!1sfr!2stn!4v1713772362053!5m2!1sfr!2stn" 
             style ={{border: "1px solid #ccc", width:"1200", height:"600", marginLeft:"250px",marginTop:"10px"}} ></iframe>
            </div>
          </div>
        </div>
                     <div className="row padding-class">
        <div className="col-5">
            
            <input  style={{fontSize:"22px",borderRadius:"5px"}}  type="email"  placeholder="Number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="col-5">
            
            <input  style={{fontSize:"22px",borderRadius:"5px", marginLeft:"120px"}} type="email"  placeholder="code postale"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          
         
        </div>
        <div className="row padding-class">
        <div className="col-5">
            
            <input style={{fontSize:"22px",borderRadius:"5px"}} type="email"  placeholder="city" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="col-5">
            
            <input  style={{fontSize:"22px",borderRadius:"5px",marginLeft:"120px"}} type="email"  placeholder="country"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          
         
        </div>
             </div>
             
            </div>
            <div className="form-group-login"></div>
             <div className="container">
                    <div className="row">
                        <div style={{display:"flex", justifyContent:"left", marginTop:'10px'}} className="col-3">
                       
                            <h1 >phone number</h1>
                          
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div  className="col-3">
                        <PhoneInput
                       
                       className="form-input-country"
                        placeholder="Enter phone number"
                        value={value}
                        onChange={setValue}/> 
            
                        </div>
                        <input
                className="form-input-number"
              
                placeholder="Number..."
                               
              />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div  className="col-3">
                     
                        <PhoneInput
                       
                     className="form-input-country"
                      placeholder  ="Enter phone number"
                      value={country}
                     onChange={setCountry}/> 
                </div>
                        <input
                className="form-input-number"
              
                placeholder="Seconde Number..."
                               
              />
                    </div>
                </div>
                 <h1 className='save'>---------------------------------------------------------------------------------------------------------</h1>
        
           
          </form>
          <button  onClick={handleClick }  type="button"  className="button-save"  >Save</button>
        </div>
      </div>
     
   
      <div>   <h1 style={{justifyContent:"center",  marginLeft:"12rem", marginTop:"5rem",fontSize:"35px", fontWeight:"bold"}}>
Related emails</h1>
<h2 style={{marginLeft:"12rem", fontSize:"25px",fontWeight:"lighter"}}>In the “Reservations” section, you will only see reservations associated with the email addresses listed below.
</h2></div>

      <div className="container" style={{width:"900px",  height: '10rem',border:"2px solid #ccc", marginTop:"10rem"}}>
        <div className="row" style={{paddingBottom:"1rem"}}>
          
        <div  className='col-12 email '><p>ihabghdifi@gmail.com</p></div>
          <div  style={{color:"green"}} className='col-9 email'  ><p>E-mail principal</p></div>
          </div>
          </div>
          <div className="container" style={{width:"900px",  height: '10rem',border:"2px solid #ccc"}}>
        <div className="row" style={{paddingBottom:"1rem"}}>
        <div style={{fontSize:"20px"}} className='col-12 email'><p>Associate a new email</p></div>
          <div className='col-9 email'  ><p>If you used a new email address during checkout, please add it here.
         </p></div>
         <FaCirclePlus style={{marginLeft:"350px", marginBottom:"1000px"}} />
          </div>
          </div>
         
         
          
          

   </div> 
   </>
     
        
    
          
      )
}