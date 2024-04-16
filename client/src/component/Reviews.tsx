import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import Image from 'next/image'
export default function Reviews() {
  return (
    <div>

        <div className="container"  style={{paddingTop:"5rem"}}>
            <div className="row">
                <div  style={{display:"flex", justifyContent:"center"}}>
                    <h3>What Tripma users are saying</h3>
                </div>

            </div>
            <div className="row" style={{paddingTop:"5rem"}} >
               
                    <div className="card mb-4" style={{maxWidth:"440px",border:"none"}}>
                        <div className="row g-0">
                            <div className="col-md-2">
                            
              
                                <Image src="/review1.jpeg" 
                                className='image-review'
                                    width={100}
                                    height={100}
                                    alt=""
                                    style={{borderRadius:"100%" ,height:"30%"}}
                                />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Yifei Chen</h5>
                                <small className="card-subtitle mb-2 text-muted">Seoul, South Korea | April 2019</small>
                                <div className="card-text"><small style={{display:"flex"}}className="text-muted"><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></small></div>
                                <p className="card-text">What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me read more...</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4" style={{maxWidth:"440px",border:"none"}}>
                        <div className="row g-0">
                            <div className="col-md-2">
                            
              
                                <Image src="/review1.jpeg" 
                                className='image-review'
                                    width={100}
                                    height={100}
                                    alt=""
                                    style={{borderRadius:"100%" ,height:"30%"}}
                                />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Yifei Chen</h5>
                                <small className="card-subtitle mb-2 text-muted">Seoul, South Korea | April 2019</small>
                                <div className="card-text"><small style={{display:"flex"}}className="text-muted"><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></small></div>
                                <p className="card-text">What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me read more...</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4" style={{maxWidth:"440px",border:"none"}}>
                        <div className="row g-0">
                            <div className="col-md-2">
                            
              
                                <Image src="/review1.jpeg" 
                                className='image-review'
                                    width={100}
                                    height={100}
                                    alt=""
                                    style={{borderRadius:"100%" ,height:"30%"}}
                                />
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Yifei Chen</h5>
                                <small className="card-subtitle mb-2 text-muted">Seoul, South Korea | April 2019</small>
                                <div className="card-text"><small style={{display:"flex"}}className="text-muted"><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></small></div>
                                <p className="card-text">What a great experience using Tripma! I booked all of my flights for my gap year through Tripma and never had any issues. When I had to cancel a flight because of an emergency, Tripma support helped me read more...</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    

                

            </div>
        </div>
      
    </div>
  )
}
