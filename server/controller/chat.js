const {message,user,room,joinChat}=require('../database/index')
// console.log(joinChat);
module.exports = {
addMessage:async function(req,res){
    try {
        const { userId, content,roomId } = req.body
        const messages=await message.create({data:{userId,content,roomId}})
        res.status(200).send(messages)
    } catch (error) {
        throw error
    }
},
removeMessage:async function(req,res){
    try {
        const messages=await message.delete({where:{id:Number(req.params.id)}})
        res.status(200).send(messages)
    } catch (error) {
        throw error
    }
},
getAllMessages:async function(req,res){
    try {
        const messages=await message.findMany({where:{roomId:Number(req.params.roomId)}})
        res.status(200).send(messages)
    } catch (error) {
        throw error
    }
},
getAllRoomByUserId:async function(req, res){
    try {
        const rooms=await joinChat.findMany(
            {
                where: {
                    userId:Number(req.params.userId)
                },
                select:{
                id:true,
                  rooms: {
                    select:{
                        join:{
                            select:{
                               users:{
                                select:{
                                    id: true,
                                    firstName:true   
                                }
                               } 
                            }    
                        },
                        id:true,
                        messages: {
                            select:{
                                id:true,
                                userId:true,
                                roomId:true,
                                content:true,
                                createdAt:true,
                                users:{
                                    select:{
                                        id: true,
                                        firstName:true   
                                    }
                                }
                            }
    
                    }
                  }
                }
                }

        })
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


 createRoom: async function (req, res) {
    try {
        // const rooms = await room.create({});
        const commonRooms = await joinChat.findMany({
            where: {
                AND: [
                  { userId: Number(req.params.user1) },
                  { userId: Number(req.params.user2) },
                //   { roomId: roomId },
                ],
              },
              include: {
                rooms: true
              },
          });
    //     const adduser1=await joinChat.create({data:{
    //         roomId:rooms.id,
    //          userId:Number(req.params.user1)
    //  }});
    //  const adduser2=await joinChat.create({data:{
    //     roomId:rooms.id,
    //      userId:Number(req.params.user2)
    //  }});
        res.status(200).json(commonRooms);
    } catch (error) {
       throw error;
    }
}



}