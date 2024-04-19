

const express = require('express');
const app = express();
http = require('http');
const cors = require('cors');
const { Server } = require('socket.io'); 

app.use(cors()); 

const server = http.createServer(app); 


const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST'],
  },
});


io.on('connection', (socket) => {
  console.log(`User connected ${socket.id}`);



  socket.on('message', (message) => {
      console.log('Received message:', message);
      
     
      io.emit('message', message);
  });


  socket.on('disconnect', () => {
      console.log('A user disconnected');
  });
 
});

server.listen(4000, () => 'Server is running on port 4000');