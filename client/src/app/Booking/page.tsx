import React from 'react'
import '../../CSS/Booking.css'
import Image from 'next/image'


export default function page() {
  return (
    <>
    <div className="container-fluid">
      <div className="row padding-class">
        <div className="col-8">
          <div className="row padding-class">
            <h3>Passenger information</h3>
            <p>Enter the required information for each traveler and be sure that it exactly matches <br/> the government-issued ID presented at the airport.</p>

          </div>
          
       
        <div className="row padding-class">
        <div className="col-3">
            
            <input type="email"  placeholder="Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="col-3">
            
            <input type="email"  placeholder="Middle Name"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="col-3">
            
            <input type="email"  placeholder="Last Name"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
        </div>
        <div className="row padding-class">
        <div className="col-3">
            
            <input type="email"  placeholder="Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="col-4">
            
            <input type="email"  placeholder="MM/DD/YY"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
         
        </div>
          
        <div className="row padding-class">
        <div className="col-5">
            
            <input type="email"  placeholder="Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="col-5">
            
            <input type="email"  placeholder="MM/DD/YY"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          
         
        </div>
        <div className="row padding-class">
        <div className="col-5">
            
            <input type="email"  placeholder="Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="col-5">
            
            <input type="email"  placeholder="MM/DD/YY"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>

       <div className="row padding-class">
       <div className="col-3 "> <br/>

        <p>Emergency contact information</p><br/>
            
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="">Check me out</label>
          </div>
       </div>


     
         
        </div>
        <div className="row padding-class">
        <div className="col-5">
            
            <input type="email"  placeholder="Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="col-5">
            
            <input type="email"  placeholder="MM/DD/YY"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          
         
        </div>
        <div className="row padding-class">
        <div className="col-5">
            
            <input type="email"  placeholder="Name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div className="col-5">
            
            <input type="email"  placeholder="MM/DD/YY"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          
         
        </div>
        <div className="row padding-class">
            <h3>Bag information</h3>
            <p>Each passenger is allowed one free carry-on bag and one personal item. First checked bag for each passenger is also free. Second bag check fees are waived for loyalty program members. See the full bag policy.</p>

          </div>

          <div className="row padding-class">
        <div className="col-5">
            
            <p>Passenger 1</p>
          </div>
          <div className="col-5">
          <p>Checked bags </p>
            
          </div>
          
         
        </div>

        <div className="row padding-class">
        <div className="col-5">
            
            <p>Name</p>
          </div>
          <div className="col-1">
          <div data-mdb-input-init className="form-outline">
            <input type="number" id="typeNumber" className="form-control" />
        </div>
            
          </div>
          
         
        </div>

        <div className="row padding-class">
        <div className="col-2">
            
            <button className='btn'>Save and close</button>
          </div>
          <div className="col-2">
        <button className='btn btn-blue'>Select seats</button>
            
          </div>
          
         
        </div>
        
       


        </div>





        <div className="col-4 padding-class" style={{paddingTop:"7rem"}}> 
          <div  style={{border:"1px black solid"}}>
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
                          <p></p>
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
                          <p></p>
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
          <div className="row padding-class" style={{display:"flex"}}>
            <div className="col-8" style={{width:"50%",justifyContent:"end",display:"flex"}}>
              <div>
                <p>Subtotal</p>
                <p>62</p>

              </div>




            </div>
          </div>
        </div>
      </div>
    </div>

      
    </>
  )
}
