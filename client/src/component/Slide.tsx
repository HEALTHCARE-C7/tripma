import React,{useState,useEffect} from 'react'
import '../CSS/Slide.css'
import { BsAirplaneFill } from "react-icons/bs";
import { RiFlightTakeoffFill } from "react-icons/ri";
import { MdFlightLand } from "react-icons/md";
import {getAllVoyages,getByAll} from  '../Action/flightaction'
import {useAppDispatch,useAppSelector} from '../store'
import {Reservation,Params} from "../types/Types"

export default function Slide() {
  const dispatch = useAppDispatch();  
  const [departureplace, setDeparturePlace] = useState('');
  const [destination, setDestination] = useState('');
  const [seats, setseats] = useState('');

  const handleSearch = () => {
    const obj:Params ={
      departureplace:departureplace,
      destination:destination,
      
      
     }
   
     dispatch(getByAll( obj));
     console.log("search",flightSearch)
   };
   useEffect(()=>{
    dispatch(getAllVoyages());
  },[])
  const flight=useAppSelector(state=>state.flight.flight)
  const flightSearch=useAppSelector(state=>state.flight.flightSearch)

  return (
    <div >
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active carousel-slide-home">
                <div className="container">
                    <div className="row" style={{justifyContent:"center",paddingTop:"5rem",paddingBottom:"2rem"}}>
                            <div className="col-6 text-slide "> It&apos;s more than just a trip</div>
                    </div>
                    <div className="row" barre-search style={{paddingTop:"0rem",backgroundColor:"white"}}>
                        
                            <div className="col-3 col-search">
                               
                                    <RiFlightTakeoffFill />

                               
                              <input type="text" placeholder='From where?' value={departureplace} onChange={(e) => setDeparturePlace(e.target.value)} style={{backgroundColor:"transparent",border:"none"}} />
                           
                            </div>
                            <div className="col-3 col-search">
                            <MdFlightLand />

                            <input type="text" placeholder='Where To?' value={destination} onChange={(e) => setDestination(e.target.value)} style={{backgroundColor:"transparent"}} />


                            </div>
                            <div className="col-2 col-search" >
                            <input type="date" placeholder='Depart-Return' id="" style={{backgroundColor:"transparent"}} name=""/>

                            </div>
                            <div className="col-2 col-search">
                            <input type="text" placeholder='1 adult'  value={seats} onChange={(e) => setseats(e.target.value)} style={{backgroundColor:"transparent"}} />

                            </div>
                            <div className="col-1 col-search">
                                <button onClick={handleSearch}  className=' btn btn-blue'> Search</button>
                        




                        </div>
                    </div>
                </div>
           
            </div>
           
        </div>
        </div>
      
    </div> 
  )
}
