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
    error: string ;
    success: boolean
    flight : Reservation|null

    
}

  export interface Error {
    message: string;  //
    
}
export interface User {
    FirstName: string;  
    
}
export interface Reservation {
  companyName  :  String
  imgUrl :String
  description :  String  
  price :Number 
  departure :String
  destination :String
  arrival : String
  
}