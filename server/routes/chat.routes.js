const router = require('express').Router();
const {addMessage,getAllMessageInRoom,getAllMessages,getAllUser,createRoom}=require('../controller/chat')

router.post('/',addMessage)
router.get('/msg',getAllMessages)
router.post('/:user1/:user2',createRoom)
router.get('/user',getAllUser)
module.exports = router;