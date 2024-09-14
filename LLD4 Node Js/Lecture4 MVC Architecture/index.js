const express=require("express")
const productRouter=require("./routes/ProductRoutes")
const connectDB=require("./config/Db");
const app=express();
connectDB();
app.use(express.json());
app.use("/api/products",productRouter);
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