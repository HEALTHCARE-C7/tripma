import React from 'react'
import '../CSS/NaveBarre.css';
import Link from 'next/link';
export default function NaveBarre() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light nav-barre-style ">
        <div className="container-fluid">
            <a className="navbar-brand brand-name" href="#"  >Tripma</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" style={{justifyContent:"end"}} id="navbarNavAltMarkup">
            <div className="navbar-nav" >
                <a className="nav-link active" aria-current="page" href="#"style={{color:"#605DEC"}}>Flights</a>
                <a className="nav-link active" aria-current="page" style={{color:"#7C8DB0"}} href="#">Hotels</a>
                <a className="nav-link" href="#" style={{color:"#7C8DB0"}}>Packages</a>
                <Link className="nav-link" href="/Login"style={{color:"#7C8DB0"}} >Sign in</Link>
                <button className='btn-blue'> <Link className="nav-link"  style={{color:"white"}} href="signup"  aria-disabled="true">Sign up </Link></button>
            </div>
            </div>
        </div>
    </nav>
    
      
    </div>
  )
}
