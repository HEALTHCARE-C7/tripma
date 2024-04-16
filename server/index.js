const express = require("express")
let app = express()
const cors=require('cors')
require("./database/index.js")
const userRouter=require("./routes/User.routes.js")
const reviewRouter=require("./routes/Review.routes.js")



// app.use(express.static(__dirname + "/../client/dist"))
app.use(express.json())
app.use(cors())

app.use('/api/user',userRouter);
app.use('/api/review',reviewRouter)

app.use(express.json());



let port = 3000


app.listen(port, function () {
  console.log(`listening on port ${port}`)
})
