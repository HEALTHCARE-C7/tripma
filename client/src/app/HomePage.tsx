import React from 'react'
import Slide from "../component/Slide";
import Flight from "../component/Flight";
import PlacesToStay from "../component/PlacesToStay";
import Reviews from "../component/Reviews";


export default function Page() {
  return (
    <div>
      <Slide/>
      <Flight/>
      <PlacesToStay />
      <Reviews />
      
    </div>
  )
}
