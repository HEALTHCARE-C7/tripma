import React from 'react'
import test from '../../app/images/slide1.png'
import Image from 'next/image'

export default function Flight() {
  return (
    <div>
        <div className="container">
          <div className="row" style={{paddingBottom:"1rem"}}>
            <div className='col-9'><p>Find your next adventure with these flight deals</p></div>
            <div className='col-3' style={{display:"flex",justifyContent:"end"}}> All</div>
          </div>
            <div className="row" style={{paddingBottom:"1rem"}}>
                <div className="col-4">
                    <div className="card" >
                      <img   alt="" style={{}}/>
                      <Image src="/flight1.jpeg" 
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
                      <Image src="/flight2.png" 
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
                      <Image src="/flight3.jpeg" 
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
            <div className="row" style={{paddingBottom:"1rem"}}>
              <div className="col-12">
              <div className="card" >
                      <img   alt="" style={{}}/>
                      <Image src="/flight4.jpeg" 
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
        </div>
      
    </div>
  )
}
