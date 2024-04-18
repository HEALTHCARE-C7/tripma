import React from 'react'
import { MdFlightLand } from "react-icons/md";
import { RiFlightTakeoffFill } from "react-icons/ri";
import '../../CSS/Slide.css'
import '../../CSS/Flights.css'
import Image from 'next/image'
import PlacesToStay from "../../component/PlacesToStay";
import Reviews from "../../component/Reviews";




export default function page() {
  return (
    <>
    <div className="container-fluid" style={{padding:"4rem"}}>
      <div className="row">
      <div className="col-8" >
        <div className="row" barre-search style={{paddingTop:"0rem",backgroundColor:"white"}}>
                        
                        <div className="col-3 col-search">
                           
                                <RiFlightTakeoffFill />

                           
                          <input type="text" placeholder='From where?' style={{backgroundColor:"transparent",border:"none"}} />
                       
                        </div>
                        <div className="col-3 col-search">
                        <MdFlightLand />

                        <input type="text" placeholder='Where To?' style={{backgroundColor:"transparent"}} />


                        </div>
                        <div className="col-2 col-search" >
                        <input type="date" placeholder='Depart-Return' id="" style={{backgroundColor:"transparent"}} name=""/>

                        </div>
                        <div className="col-2 col-search">
                        <input type="text" placeholder='1 adult' style={{backgroundColor:"transparent"}} />

                        </div>
                        <div className="col-1 col-search">
                            <button className=' btn btn-blue'> Search</button>
                    




                    </div>
                </div>
                <div className="row" style={{paddingTop:'2rem'}}>
                    <div className="col-1">
                        <button className='btn btn-filtre'> MaxPrice</button>
                    </div>
                    <div className="col-1">
                        <button className='btn btn-filtre'> Shop</button>
                    </div>
                    <div className="col-1">
                         <select className="form-select " aria-label="Default select example">
                                <option selected>Time</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </select>
                        
                    </div>
                    <div className="col-1">
                       
                        <select className="form-select " aria-label="Default select example">
                                <option selected>Airline</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </select>
                    </div>
                    <div className="col-1">
                        
                        <select className="form-select " aria-label="Default select example">
                                <option selected> Seat class</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                </select>
                    </div>
                    <div className="col-1">
                        <button className='btn btn-filtre'> More</button>
                    </div>
                </div>
                <div className="row" style={{paddingTop:"5rem",paddingBottom:"1rem"}}>
            <div className='col-9'><p>Find your next adventure with these flight deals</p></div>
            <div className='col-3' style={{display:"flex",justifyContent:"center"}}> All</div>
          </div>




          <div className="row " style={{paddingTop:"1rem",border:"1px #acacac solid",width:"94%"}} >
            <div className="table-wrapper">
              <div className="table-scroll">
              <table className="table" >
              <tbody>
                <tr>
                  <th scope="row" style={{display:"flex",gap:"1rem",position:"relative"}}>
                  <div>
                  <Image src="/airline1.png" 
                            className='image-airline'
                              width={100}
                              height={100}
                              alt=""
                    />
                  </div>
                    <div>
                        <p>16h 45m</p>
                        <p>Hawaiian Airlines</p>
                    </div>


                  </th>
                  <td>7:00-4:15PM</td>
                  <td>  
                        <div>
                            <p>1 step</p>
                            <p>2h 45m in HNL</p>
                        </div>
                  </td>
                  <td>    <div>
                            <p>$624</p>
                            <p>round trip</p>
                        </div>
                    </td>
                </tr>               
                <tr>
                  <th scope="row" style={{display:"flex",gap:"1rem"}}>
                  <div>
                  <Image src="/airline1.png" 
                            className='image-airline'
                              width={100}
                              height={100}
                              alt=""
                    />
                  </div>
                    <div>
                        <p>16h 45m</p>
                        <p>Hawaiian Airlines</p>
                    </div>


                  </th>
                  <td>7:00-4:15PM</td>
                  <td>  
                        <div>
                            <p>1 step</p>
                            <p>2h 45m in HNL</p>
                        </div>
                  </td>
                  <td>    <div>
                            <p>$624</p>
                            <p>round trip</p>
                        </div>
                    </td>
                </tr>
                <tr>
                  <th scope="row" style={{display:"flex",gap:"1rem"}}>
                  <div>
                  <Image src="/airline1.png" 
                            className='image-airline'
                              width={100}
                              height={100}
                              alt=""
                    />
                  </div>
                    <div>
                        <p>16h 45m</p>
                        <p>Hawaiian Airlines</p>
                    </div>


                  </th>
                  <td>7:00-4:15PM</td>
                  <td>  
                        <div>
                            <p>1 step</p>
                            <p>2h 45m in HNL</p>
                        </div>
                  </td>
                  <td>    <div>
                            <p>$624</p>
                            <p>round trip</p>
                        </div>
                    </td>
                </tr>
                <tr>
                  <th scope="row" style={{display:"flex",gap:"1rem"}}>
                  <div>
                  <Image src="/airline1.png" 
                            className='image-airline'
                              width={100}
                              height={100}
                              alt=""
                    />
                  </div>
                    <div>
                        <p>16h 45m</p>
                        <p>Hawaiian Airlines</p>
                    </div>


                  </th>
                  <td>7:00-4:15PM</td>
                  <td>  
                        <div>
                            <p>1 step</p>
                            <p>2h 45m in HNL</p>
                        </div>
                  </td>
                  <td>    <div>
                            <p>$624</p>
                            <p>round trip</p>
                        </div>
                    </td>
                </tr>
                <tr>
                  <th scope="row" style={{display:"flex",gap:"1rem"}}>
                  <div>
                  <Image src="/airline1.png" 
                            className='image-airline'
                              width={100}
                              height={100}
                              alt=""
                    />
                  </div>
                    <div>
                        <p>16h 45m</p>
                        <p>Hawaiian Airlines</p>
                    </div>


                  </th>
                  <td>7:00-4:15PM</td>
                  <td>  
                        <div>
                            <p>1 step</p>
                            <p>2h 45m in HNL</p>
                        </div>
                  </td>
                  <td>    <div>
                            <p>$624</p>
                            <p>round trip</p>
                        </div>
                    </td>
                </tr>
                <tr>
                  <th scope="row" style={{display:"flex",gap:"1rem"}}>
                  <div>
                  <Image src="/airline1.png" 
                            className='image-airline'
                              width={100}
                              height={100}
                              alt=""
                    />
                  </div>
                    <div>
                        <p>16h 45m</p>
                        <p>Hawaiian Airlines</p>
                    </div>


                  </th>
                  <td>7:00-4:15PM</td>
                  <td>  
                        <div>
                            <p>1 step</p>
                            <p>2h 45m in HNL</p>
                        </div>
                  </td>
                  <td>    <div>
                            <p>$624</p>
                            <p>round trip</p>
                        </div>
                    </td>
                </tr>
                <tr>
                  <th scope="row" style={{display:"flex",gap:"1rem"}}>
                  <div>
                  <Image src="/airline1.png" 
                            className='image-airline'
                              width={100}
                              height={100}
                              alt=""
                    />
                  </div>
                    <div>
                        <p>16h 45m</p>
                        <p>Hawaiian Airlines</p>
                    </div>


                  </th>
                  <td>7:00-4:15PM</td>
                  <td>  
                        <div>
                            <p>1 step</p>
                            <p>2h 45m in HNL</p>
                        </div>
                  </td>
                  <td>    <div>
                            <p>$624</p>
                            <p>round trip</p>
                        </div>
                    </td>
                </tr>
                <tr>
                  <th scope="row" style={{display:"flex",gap:"1rem"}}>
                  <div>
                  <Image src="/airline1.png" 
                            className='image-airline'
                              width={100}
                              height={100}
                              alt=""
                    />
                  </div>
                    <div>
                        <p>16h 45m</p>
                        <p>Hawaiian Airlines</p>
                    </div>


                  </th>
                  <td>7:00-4:15PM</td>
                  <td>  
                        <div>
                            <p>1 step</p>
                            <p>2h 45m in HNL</p>
                        </div>
                  </td>
                  <td>    <div>
                            <p>$624</p>
                            <p>round trip</p>
                        </div>
                    </td>
                </tr>
                <tr>
                  <th scope="row" style={{display:"flex",gap:"1rem"}}>
                  <div>
                  <Image src="/airline1.png" 
                            className='image-airline'
                              width={100}
                              height={100}
                              alt=""
                    />
                  </div>
                    <div>
                        <p>16h 45m</p>
                        <p>Hawaiian Airlines</p>
                    </div>


                  </th>
                  <td>7:00-4:15PM</td>
                  <td>  
                        <div>
                            <p>1 step</p>
                            <p>2h 45m in HNL</p>
                        </div>
                  </td>
                  <td>    <div>
                            <p>$624</p>
                            <p>round trip</p>
                        </div>
                    </td>
                </tr>
                <tr>
                  <th scope="row" style={{display:"flex",gap:"1rem"}}>
                  <div>
                  <Image src="/airline1.png" 
                            className='image-airline'
                              width={100}
                              height={100}
                              alt=""
                    />
                  </div>
                    <div>
                        <p>16h 45m</p>
                        <p>Hawaiian Airlines</p>
                    </div>


                  </th>
                  <td>7:00-4:15PM</td>
                  <td>  
                        <div>
                            <p>1 step</p>
                            <p>2h 45m in HNL</p>
                        </div>
                  </td>
                  <td>    <div>
                            <p>$624</p>
                            <p>round trip</p>
                        </div>
                    </td>
                </tr>
                <tr>
                  <th scope="row" style={{display:"flex",gap:"1rem"}}>
                  <div>
                  <Image src="/airline1.png" 
                            className='image-airline'
                              width={100}
                              height={100}
                              alt=""
                    />
                  </div>
                    <div>
                        <p>16h 45m</p>
                        <p>Hawaiian Airlines</p>
                    </div>


                  </th>
                  <td>7:00-4:15PM</td>
                  <td>  
                        <div>
                            <p>1 step</p>
                            <p>2h 45m in HNL</p>
                        </div>
                  </td>
                  <td>    <div>
                            <p>$624</p>
                            <p>round trip</p>
                        </div>
                    </td>
                </tr>
                <tr>
                  <th scope="row" style={{display:"flex",gap:"1rem"}}>
                  <div>
                  <Image src="/airline1.png" 
                            className='image-airline'
                              width={100}
                              height={100}
                              alt=""
                    />
                  </div>
                    <div>
                        <p>16h 45m</p>
                        <p>Hawaiian Airlines</p>
                    </div>


                  </th>
                  <td>7:00-4:15PM</td>
                  <td>  
                        <div>
                            <p>1 step</p>
                            <p>2h 45m in HNL</p>
                        </div>
                  </td>
                  <td>    <div>
                            <p>$624</p>
                            <p>round trip</p>
                        </div>
                    </td>
                </tr>
                <tr>
                  <th scope="row" style={{display:"flex",gap:"1rem"}}>
                  <div>
                  <Image src="/airline1.png" 
                            className='image-airline'
                              width={100}
                              height={100}
                              alt=""
                    />
                  </div>
                    <div>
                        <p>16h 45m</p>
                        <p>Hawaiian Airlines</p>
                    </div>


                  </th>
                  <td>7:00-4:15PM</td>
                  <td>  
                        <div>
                            <p>1 step</p>
                            <p>2h 45m in HNL</p>
                        </div>
                  </td>
                  <td>    <div>
                            <p>$624</p>
                            <p>round trip</p>
                        </div>
                    </td>
                </tr>
                <tr>
                  <th scope="row" style={{display:"flex",gap:"1rem"}}>
                  <div>
                  <Image src="/airline1.png" 
                            className='image-airline'
                              width={100}
                              height={100}
                              alt=""
                    />
                  </div>
                    <div>
                        <p>16h 45m</p>
                        <p>Hawaiian Airlines</p>
                    </div>


                  </th>
                  <td>7:00-4:15PM</td>
                  <td>  
                        <div>
                            <p>1 step</p>
                            <p>2h 45m in HNL</p>
                        </div>
                  </td>
                  <td>    <div>
                            <p>$624</p>
                            <p>round trip</p>
                        </div>
                    </td>
                </tr>
                <tr>
                  <th scope="row" style={{display:"flex",gap:"1rem"}}>
                  <div>
                  <Image src="/airline1.png" 
                            className='image-airline'
                              width={100}
                              height={100}
                              alt=""
                    />
                  </div>
                    <div>
                        <p>16h 45m</p>
                        <p>Hawaiian Airlines</p>
                    </div>


                  </th>
                  <td>7:00-4:15PM</td>
                  <td>  
                        <div>
                            <p>1 step</p>
                            <p>2h 45m in HNL</p>
                        </div>
                  </td>
                  <td>    <div>
                            <p>$624</p>
                            <p>round trip</p>
                        </div>
                    </td>
                </tr>
              
              </tbody>
           </table>
              </div>
            </div>
  
          </div>
          <div className="row" style={{paddingTop:"3rem"}}>
        <div style={{display:"flex", justifyContent:"end",paddingRight:"6rem"}}>
            <button className='btn ' style={{border:"1px #605dec solid" }}>Explore more stays</button>
        </div>
      </div>

      <div className="row image-map">
      <Image src="/map1.PNG" 
                            className=''
                              width={700}
                              height={700}
                              alt=""
                    />
                 

      </div>

        </div>
        <div className="col-4" style={{paddingTop:"11rem"}}>
         <div className="row" style={{paddingBottom:"5rem"}}>
         <table className="table caption-top" >
    <caption>Price grid (flexible dates)</caption>
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">2/12</th>
        <th scope="col">2/13</th>
        <th scope="col">2/15</th>
        <th scope="col">2/16</th>

      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">3/7</th>
        <td>$837</td>
        <td>$592</td>
        <td>$837</td>
        <td>$1308</td>

      </tr>
      <tr>
        <th scope="row">3/8</th>
        <td>$837</td>
        <td>$592</td>
        <td>$837</td>
        <td>$1308</td>
      </tr>
      <tr>
        <th scope="row">3/9</th>
        <td>$837</td>
        <td>$592</td>
        <td>$837</td>
        <td>$1308</td>
      </tr>
      <tr>
        <th scope="row">3/10</th>
        <td>$837</td>
        <td>$592</td>
        <td>$837</td>
        <td>$1308</td>
      </tr>
      <tr>
        <th scope="row">3/11</th>
        <td>$837</td>
        <td>$592</td>
        <td>$837</td>
        <td>$1308</td>
      </tr>
    </tbody>
          </table>
         </div>
          <div className="card">
              <div className="card-body">
                <h6 className="card-title">Price rating <button className='btn btn-success'>Buy soon</button></h6>
                <p className="card-text">We recommend booking soon. The average cost of this flight is $750, but could rise 18% to $885 in two weeks.</p>
               
              </div>
            </div>
        </div>
      </div>
    </div>
     
    <div className="container">
    <PlacesToStay />
    <Reviews />
    </div>
    </>
  )
}
