import React from 'react'
import '../CSS/Slide.css'

export default function Slide() {
  return (
    <div >
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active carousel-slide-home">
                <div className="container">
                    <div className="row" style={{justifyContent:"center",paddingTop:"5rem"}}>
                            <div className="col-6 text-slide "> It&apos;s more than just a trip</div>
                    </div>
                    <div className="row" barre-search style={{paddingTop:"2rem"}}>
                        
                            <div className="col-3 test">
                              <input type="text" placeholder='From where?' />
                              {/* <span className="material-symbols-outlined">
                                flight_takeoff
                                </span> */}
                            </div>
                            <div className="col-3 test">
                            <input type="text" placeholder='Where To?' />


                            </div>
                            <div className="col-2 test" >
                            <input type="date" placeholder='Depart-Return' id="" name=""/>

                            </div>
                            <div className="col-2 test">
                            <input type="text" placeholder='1 adult' />

                            </div>
                            <div className="col-2 test">
                                <button className='btn-search'> Search</button>
                        




                        </div>
                    </div>
                </div>
           
            </div>
           
        </div>
        </div>
      
    </div> 
  )
}
