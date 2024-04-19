export interface Message {
    type: string,
    message: string
  }
  
  export interface authState {
      loading: boolean,
    userInfo: User|null,
      userToken: string
      error: string ;
      success: boolean
      

      
  }
  export interface ReservationState {
    loading: boolean,
    error: string |null ;
    success: boolean
    flight : Reservation []
    flightSearch:Params[]

    
}
export interface Params{
  departureplace:string;
  destination:string;

}
export interface Reservation {
  companyName  :  String
  imgUrl :String
  description :  String  
  price :Number 
  departure : Date
  departureplace : String
  destination :String
  arrival : Date
  seats   : Number 
  
}
export interface destinationState {
  loading: boolean,
  error: string |null ;
  success: boolean
  destination : Destin []
  
  
}
export interface Destin {
  Name   : String
  imgUrl :String
  description :   String 
  
}


  export interface Error {
    message: string;  //
    
}
export interface User  {
    firstName: string;  
    lastName:string;
    email:string;
    password:string;
    location:string;
    phoneNumber:number;
    gender:string;
    role:string;
    age:number;
    
    
}

export interface Review {
  firstName  : String
  country    : String
  date       : String
  ratings    : Number 
  comments   : String  
  
}

