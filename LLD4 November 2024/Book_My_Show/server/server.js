const express=require("express");
const app=express();
require("dotenv").config(); // load env varibles
app.use(express.json());

const userRoutes=require("./routes/userRoutes");
const connectDB=require("./config/db");
console.log("server", process.env.DB_URL);
connectDB();

app.use("/api/users",userRoutes);
app.listen(9092,()=>{
    console.log("9092 sever started")
})