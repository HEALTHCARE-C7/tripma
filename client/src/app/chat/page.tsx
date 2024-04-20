'use client'
import React, { useEffect, useState,useLayoutEffect
} from 'react';
import {U_ser,R__oom} from '../../types/Types';
import {getRoomByUserId,createRoom} from '../../Action/user'

import axios from 'axios';
import ChatBar from '../../component/chat/chatBar';
import ChatBody from '../../component/chat/chatBody';
import ChatFooter from '../../component/chat/chatFooter';

import {oneUser} from '../../Action/user'
import '../../CSS/chat.css'
import {useAppSelector,useAppDispatch} from '../../store'
import  io  from "socket.io-client";
// import socketIO from 'socket.io-client';

interface ChatBarProps {
  getRoomByUserId: (userId: number) => void;
}


const socket = io('http://localhost:4000');
const ChatPage = () => {
  const rooms = useAppSelector((state) => state.user.room);
console.log(rooms)
  const cUser=useAppSelector((state) => state.user.userInfo);
  console.log("",cUser);


  const id= cUser?cUser.id:null;
  console.log(cUser,"current user");
  const [messages, setMessages] = useState();
  const [sockets, setSockets] = useState(null);
  const [messageInput,setMessageInput]=useState('');
  const [allRoom,setAllRoom]=useState([]);
  const [viewId,setViewId]=useState(0)

const dispatch=useAppDispatch()
    
useEffect(()=>{
  console.log("idddddddddddddddd",id);
  
  id?dispatch(getRoomByUserId(id)):console.log("nothing to do")

 },[id])
 useEffect(()=>{
  const  token:string=localStorage.getItem('token')|| ''
  console.log(token);
  
  if(token) {
    dispatch(oneUser(token))
  }
  
},[])

// useEffect(() => {
 const changeView=(id:number)=>{
  console.log("idddd view",id)
  setViewId(id)
 }
 

  socket.on('message', (data) => {
   
    console.log('data is ready',data);
  });

//   return () => socket.off('message');
// }, []);


 

 

////////////////////////////////

////////////////////////////////


     
      // console.log(socket);
  return (
    <div className="chat">
      <ChatBar changeView={changeView} rooms={rooms} id={id} />
      <div>
        {rooms.map((room,i) =>(
      viewId=== room.id&&  (<div  key={i}>
        <ChatBody socket={socket} rooms={room}/>
       

      </div>)
    )) }
      </div>
   
    </div>
  );
};

export default ChatPage;