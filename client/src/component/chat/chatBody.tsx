'use client'
import React, { useEffect, useState,useLayoutEffect
} from 'react';
import { useNavigate } from 'react-router-dom';
import {U_ser,R__oom,R_oom,M_esages} from '../../types/Types';
import ChatFooter from './chatFooter'
import { useAppSelector } from '@/store';
import  Link  from "next/link";
import '../../CSS/body.css'
import { IoArrowForwardOutline } from "react-icons/io5";
interface ClientToServerEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}
interface PropsChatBar{
  rooms:R__oom,
  socket:any
 
}

const ChatBody = (props:PropsChatBar) => {
  const User=useAppSelector((state) => state.user.userInfo);
  
  // const navigate = useNavigate();
  const [messages, setMessages] = useState(props.rooms.rooms.messages);

props.socket.on('connect', () => {
  console.log('Connected to server');
});




useEffect(() => {
if (!props.socket) return;


props.socket.on('message', (data:M_esages) => {
  setMessages((prevMessages) => [...prevMessages, data]);
  console.log('data is ready',data);
});

return () => props.socket.off('message');
}, []);

  return (
    <div  className="chat__main">
      
      <header className="chat__mainHeader">
        <h1 >{User?.firstName}</h1>
        <Link className="leaveChat__btn" href={"/"} >
        <IoArrowForwardOutline />
        </Link>
      </header>
        {/* <ChatFooter/> */}
      <div className="message__container">
        {messages.map((message) =>
          <div className="message__chats" key={message.id}>
            <h2>{message.users.firstName}</h2>
              <div className="message__recipient">
                <p>{message.content}</p>
              </div>
             </div>
        
          
          
      )}
        <div className="message__status">
          <p></p>
        </div>
      </div>
        <ChatFooter roomId={props.rooms.rooms.id} socket={props.socket} />
    </div>
  );
};

export default ChatBody