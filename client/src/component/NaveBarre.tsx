import React, { useState } from 'react'
import '../CSS/NaveBarre.css'; 

export default function NaveBarre() {
  const [log,setLog]=useState(false)

  const changeviews=() => {
    setLog(!log)
  }
  return (
    <div>
  {log &&    <nav className="navbar navbar-expand-lg navbar-light nav-barre-style ">
        <div className="container-fluid">
            <a className="navbar-brand brand-name" href="/"  >Tripma</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" style={{justifyContent:"end"}} id="navbarNavAltMarkup">
            <div className="navbar-nav" >
                <a className="nav-link active" aria-current="page" href="/Flights"style={{color:"#605DEC"}}>Flights</a>
                <a className="nav-link active" aria-current="page" style={{color:"#7C8DB0"}} href="#">Hotels</a>
                <a className="nav-link" href="#" style={{color:"#7C8DB0"}}>Packages</a>
                <a className="nav-link" href="#"style={{color:"#7C8DB0"}}>Sign in</a>
                <button className='btn-blue'> <a className="nav-link" style={{color:"white"}} href="#"  aria-disabled="true">Sign un </a></button>
            </div>
            </div>
        </div>
    </nav>}
    {!log &&    <nav className="navbar navbar-expand-lg navbar-light nav-barre-style ">
        <div className="container-fluid">
            <a className="navbar-brand brand-name" href="/"  >Tripma</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" style={{justifyContent:"end"}} id="navbarNavAltMarkup">
            <div className="navbar-nav" >
                <a className="nav-link active" aria-current="page" href="/Flights"style={{color:"#605DEC"}}>Flights</a>
                <a className="nav-link active" aria-current="page" style={{color:"#7C8DB0"}} href="#">Hotels</a>
                <a className="nav-link" href="#" style={{color:"#7C8DB0"}}>Packages</a>
                <a className="nav-link" href="#"style={{color:"#7C8DB0"}}>chat</a>
                <button className='btn-blue'> <a className="nav-link" style={{color:"white"}} href="#"  aria-disabled="true">Sign un </a></button>
            </div>
            </div>
        </div>
    </nav>}
    
      
    </div>
  )
}
