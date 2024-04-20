const router = require('express').Router();
const {addMessage,getAllMessageInRoom,getAllMessages,getAllUser,createRoom,getAllRoomByUserId}=require('../controller/chat')

router.post('/',addMessage)
router.get('/:roomId',getAllMessages)
router.post('/:user1/:user2',createRoom)
router.get('/user',getAllUser)
router.get('/room/:userId',getAllRoomByUserId)
module.exports = router;