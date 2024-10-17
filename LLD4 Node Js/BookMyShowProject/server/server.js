const express=require("express")
const app=express();
require('dotenv').config(); // load env varibles into process.env
/*
    to read from env file we user package called
    dotenv
    means it reads the .env file and populates the process.env object
*/

const connectDB=require('./config/Db')
const userRouter=require("./routes/userRoutes")
const movieRouter=require("./routes/movieRoutes")
const theatreRouter=require("./routes/theatreRoutes")
app.use(express.json());
app.use("/api/users/", userRouter)
app.use("/api/movies",movieRouter)
app.use("/app/theatres",theatreRouter)


connectDB();
app.listen(8082,()=>{
    console.log("server started")
})

