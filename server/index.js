const express = require("express")
require('dotenv').config()


let app = express()
const cors=require('cors')
require("./database/index.js")
const userRouter=require("./routes/User.routes.js")
const chatRouter=require("./routes/chat.routes")
const reviewRouter=require("./routes/Review.routes.js")

const voyageRouter=require('./routes/Voyage.router.js')
const destination = require ('./routes/destination.routes.js')




// app.use(express.static(__dirname + "/../client/dist"))
app.use(express.json())
app.use(cors())

app.use('/api/user',userRouter);

app.use('/api/review',reviewRouter)

app.use('/api/chat',chatRouter)
app.use('/api/voyage',voyageRouter)
app.use('/api/destination',destination)

app.use(express.json());



let port = 3000


app.listen(port, function () {
  console.log(`listening on port ${port}`)
})
