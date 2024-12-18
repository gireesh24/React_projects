// import { JsonWebTokenError } from "jsonwebtoken";
const jwt=require("jsonwebtoken") 
const express= require("express")
// const app=express();
const cookie=require("cookie-parser")
const users=require("../models/userModel");
// const { now } = require("mongoose");
const authMiddleware=require("../middlewares/authmiddlewares")
const userRouter=express.Router();


userRouter.post("/register", async (req,res)=>{
    try{
        const userExits= await users.findOne({email:req.body.email})
        if(userExits){
            return res.send({
                success:false,
                message:"user alredy exists"
            })
        }
         const newUser= new users(req.body);
         await newUser.save();
         res.send({
            success:true,
            message:"registartion sucessfull please login and continue",
            // data:newUser
         })
    }
    catch(err){
        console.log("server side regisration failed")
        return res.status(500).send(err)

    }
})

// userRouter.post("/register", async (req, res) => {
//     try {
//       const userExists = await users.findOne({ email: req.body.email });
//       if (userExists) {
//         return res.send({
//           success: false,
//           message: "User already exists",
//         });
//       }
//       const newUser = new users(req.body);
//       await newUser.save();
//       res.send({
//         success: true,
//         message: "Registration Successfull. Please login to continue",
//       });
//     } catch (error) {
//       return res.status(500).send(error.message);
//     }
//   });

userRouter.post("/login", async (req,res)=>{
    try{
        const userExits= await users.findOne({email:req.body.email})
if(!userExits){
    return res.send({
        success:false,
        message:"user doesnot exits"
    })
}
if(req.body.password!==userExits.password){
    return res.send({
        success:false,
        message:"password doesntmacth"
    })
}
const token =jwt.sign({userId: userExits._id},
    process.env.JST_SECRET,
    {expiresIn:"1d"})

console.log("JWT Token",token)
// res.cookie("token", token, { expires: new Date(Date.now() + 86400000), httpOnly: true });
res.send({
    success:true,
    message:"login sucessfully",
    data:token
})
    }
    catch(err){
return res.status(500).send(err)
    }
})

userRouter.get("/get-current-user", authMiddleware, async (req,res)=>{
    try{
    const user=await users.findById(req.body.user).select("-password");
    console.log("get current user route form serverside try block")
     res.send({
        success:true,
        data:user,
        message:"your are authenticated"
     })
    }catch(err){
        res.status(404).send("get current user api failed in server side")
    }

})

userRouter.get("/allusers", async (req,res)=>{
    try{
        const allusers=await users.find()
        res.status(200).
        json({
            data:allusers,
            message:"hello"
        })
    }
    catch(err){
        console.log("get all users router failes")
        res.send(500).json({
            message:"get all users route failed"
        })
    }
})
module.exports=userRouter