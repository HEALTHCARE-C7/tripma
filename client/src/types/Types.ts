export interface Message {
    type: string,
    message: string
  }
  
  export interface authState {
      loading: boolean,
       userInfo: User | null
      userToken: string
      error: string ;
      success: boolean
     
  }
  export interface chatState{
    room: R__oom []
    message: Message []
    getMessage:string 
    error: string 
    success: boolean
    loading: boolean
    userInfo: User|null,


  }
  export interface Message {
    content:String,
    fromId:Number,
    roomId:Number
  }
  export interface Room {
    userId:Number
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
     id:number
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
export interface R__oom{
  id:number
rooms:R_oom
}
export interface R_oom{
  id:number
  join:U_ser[],
  messages:M_esages[]
}
export interface M_esages{
  id:number
  userId: number
  roomId: number
  content: string,
  createdAt:Date
  users:R_users
}
export interface U_ser{
users:R_users
}
export interface R_users{
  id:number
  firstName: string;

}

