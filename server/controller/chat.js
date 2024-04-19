const {message,user,room,joinChat}=require('../database/index')
// console.log(joinChat);
module.exports = {
addMessage:async function(req,res){
    try {
        const { fromId, content } = req.body
        const messages=await message.create({data:{fromId,content}})
        res.status(200).send(messages)
    } catch (error) {
        throw error
    }
},
getAllMessages:async function(req,res){
    try {
        const messages=await message.findMany({})
        res.status(200).send(messages)
    } catch (error) {
        throw error
    }
},
getAllRoomByUserId:async function(req, res){
    try {
        const rooms=await room.findMany({where: {userId:req.params.userId}})
        res.status(200).send(rooms)
    } catch (error) {
        throw error
    }
},
getAllUser:async function(req, res){
    try {
        const users=await user.findMany({})
        res.status(200).send(users)
    } catch (error) {
        throw error
    }
},
createMessage:async function(req,res){
    try {
        const { fromId, roomId, content } = req.body
        const messages=await message.create({data:{fromId,roomId,content}})
        res.status(200).send(messages)
    } catch (error) {
        throw error
    }
},
getAllMessageInRoom:async function(req,res){
    try {
        const messages=await message.findMany({where:{roomId:req.params.roomId}})
        res.status(200).send(messages)
    } catch (error) {
        throw error
    }
},
 createRoom: async function (req, res) {
    try {
        const rooms = await room.create({});
        const adduser1=await joinChat.create({data:{
            roomId:rooms.id,
             userId:Number(req.params.user1)
     }});
     const adduser2=await joinChat.create({data:{
        roomId:rooms.id,
         userId:Number(req.params.user2)
     }});
        res.status(200).json(rooms);
    } catch (error) {
       throw error;
    }
}



}