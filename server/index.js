const express = require("express")
let app = express()
const cors=require('cors')
require("./database/index.js")
const userRouter=require("./routes/User.routes.js")
const voyageRouter=require('./routes/Voyage.router.js')
const destination = require ('./routes/destination.js')



// app.use(express.static(__dirname + "/../client/dist"))
app.use(express.json())
app.use(cors())

app.use('/api/user',userRouter);
app.use('/api/voyage',voyageRouter)
app.use('/api/destination',destination)
app.use(express.json());



let port = 3000


app.listen(port, function () {
  console.log(`listening on port ${port}`)
})
