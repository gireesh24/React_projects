const express=require('express');
const app=express();
require('dotenv').config();
const connectToDb=require('./config/db');
const userRouter=require('./routes/userRouter')
connectToDb();
 app.use(express.json());

app.use("/api/users",userRouter)
app.listen(2024,()=>{
    console.log("server started sucessfully in port 2024");
})