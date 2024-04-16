import React from 'react'
import Image from 'next/image'

export default function PlacesToStay() {
  return (
    <div className="container" style={{paddingTop:"5rem"}}>
    <div className="row" style={{paddingBottom:"1rem"}}>
      <div className='col-9'><p>Explore unique places to stay</p></div>
      <div className='col-3' style={{display:"flex",justifyContent:"end"}}> All</div>
    </div>
      <div className="row" style={{paddingBottom:"1rem"}}>
          <div className="col-4">
              <div className="card" >
                <img   alt="" style={{}}/>
                <Image src="/place1.jpeg" 
                className='image-flight'
                  width={300}
                  height={100}
                  alt=""
                 />
               
                  <div className="card-body">
                       <h4 className="card-title">The Bund, Shanghai</h4>
                      <p className="card-text">China’s most international city</p>
                  </div>
              </div>
          </div>
          <div className="col-4">
              <div className="card" >
                <img   alt="" style={{}}/>
                <Image src="/place2.jpeg" 
                className='image-flight'
                  width={300}
                  height={100}
                  alt=""
                 />
               
                  <div className="card-body">
                       <h4 className="card-title">The Bund, Shanghai</h4>
                      <p className="card-text">China’s most international city</p>
                  </div>
              </div>
          </div>
          <div className="col-4">
              <div className="card" >
                <img   alt="" style={{}}/>
                <Image src="/place3.jpeg" 
                className='image-flight'
                  width={300}
                  height={100}
                  alt=""
                 />
               
                  <div className="card-body">
                       <h4 className="card-title">The Bund, Shanghai</h4>
                      <p className="card-text">China’s most international city</p>
                  </div>
              </div>
          </div>
          
      </div>
 
      <div className="row" style={{paddingTop:"3rem"}}>
        <div style={{display:"flex", justifyContent:"center"}}>
            <button className='btn btn-blue'>Explore more stays</button>
        </div>
      </div>
      
      
    </div>
  )
}
