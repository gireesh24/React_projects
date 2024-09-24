const express=require("express")
const productRouter=require("./routes/ProductRoutes")
const connectDB=require("./config/Db");
const { userRouter } = require("./routes/UserRoutes");
const app=express();
connectDB();
app.use(express.json());
app.use("/api/products",productRouter);
app.use("/api/users",userRouter);
// handling golbal err
app.use((err,req,res)=>{
console.log("this is global error")
return res.status(500).json({
    message:"this is gllobal error", err
})
})
app.listen(2020,()=>{
    console.log("server started")
})



// const productRouter = require("./routes/ProductRoutes");
// const connectDB = require("./config/Db");
// const exprees=require("express")
// const app=exprees();

// const port=2020;
// connectDB();
// app.use(exprees.json())

// app.use("/api/products",productRouter)

// app.listen(port,()=>{
//     console.log("server started")
// })