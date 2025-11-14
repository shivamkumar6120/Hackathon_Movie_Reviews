
const express = require('express')
const userRouter = require('./routes/user')
const movieRouter = require('./routes/movies')
const auth = require('./utils/auth')

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(auth)
app.use("/user",userRouter)
app.use("/movie", movieRouter)

app.listen(4000, "localhost", () => {
    console.log("Server started at port number 4000")
})



