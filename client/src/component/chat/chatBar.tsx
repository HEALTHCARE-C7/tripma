'use client'
import React,{ useEffect } from "react";
import {U_ser,R__oom} from '../../types/Types';
interface ChatBarProps {
  getRoomByUserId: (id: number) => void;
}
interface PropsChatBar{
  id: number | null,
  rooms:R__oom[]
  changeView:(id:number)=>void;
}

const ChatBar = (props:PropsChatBar) => {


 


  return (
    <div className="chat__sidebar">
      <h2>Open Chat</h2>
      {props.rooms.map((e:R__oom) => {
        console.log(e)
      
       return  <div key={"fdf"}>
          <h4 className="chat__header">ACTIVE USERS</h4>
          <div className="chat__users">
          {e.rooms.join.map((u:U_ser) => {
           
              return  props.id!== u.users.id&&<p onClick={()=>props.changeView(e.id)} key={u.users.id}>{u.users.firstName}</p>
              })}
          </div>
        </div>
        
      })}
    </div>
  );
};

export default ChatBar;