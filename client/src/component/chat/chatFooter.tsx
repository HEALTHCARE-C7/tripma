'use client'
import axios from 'axios';
import {useAppSelector,useAppDispatch} from '../../store'
import '../../CSS/footer.css'
import React, {  useState,useEffect } from 'react';
// import ChatBody from './ChatBody';
interface PropsChatBar{
  roomId:number
  socket:any
  scrollToBottom:()=>void
 
}
const ChatFooter = (props:PropsChatBar) => {
  const user=useAppSelector(state=>state.user.userInfo)
// console.log('user id footer', user);

const [messageInput, setMessageInput]=useState('')

const sendMessage = (e:any) => {
  e.preventDefault();
  const newMessage = {
    content: messageInput,
userId:user?.id,
roomId:props.roomId,
createdAt:new Date(),
users:{
  id:user?.id,
  firstName:user?.firstName
}

    
  };

 
  axios.post('http://localhost:3000/api/chat', newMessage)
  .then(response => {
    console.log('Message saved successfully:', response.data);
    setMessageInput('');
    
  
  })
  .catch(error => {
    console.error('Error saving message:', error);
  });
  if (props.socket) {
    props.socket.emit('send_message', newMessage);
  }
  props.scrollToBottom()
  setMessageInput('');

};
// useEffect(()=>{
// sendMessage()
// },[refrech])

  return (
    <div className="chat__footer">
      <form className="form" onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
     
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button className="sendBtn">SEND</button>
      </form>
      <div>
     
      </div>
    </div>
  );
};

export default ChatFooter;