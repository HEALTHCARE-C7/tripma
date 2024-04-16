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


  export interface Error {
    message: string;  //
    
}
export interface User {
    FirstName: string;  
    
    
}