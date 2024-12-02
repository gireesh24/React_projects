// import { JsonWebTokenError } from "jsonwebtoken";
const jwt=require("jsonwebtoken") 
const express= require("express")
// const app=express();
const cookies=require("cookie-parser")
const users=require("../models/userModel");
const { now } = require("mongoose");

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
const token =jwt.sign({userId: users._id},
    process.env.JST_SECRET,
    {expiresIn:"1d"})

console.log("JWT Token",token)
// res.cookies('token', token,{expires: new Date(Date.now()+960000)} )
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

// userRouter.get("/allusers", async (req,res)=>{
//     try{
//         const allusers=await users.find()
//         res.send(200).send(allusers)
//         // json({
//         //     data:allusers
//         // })
//     }
//     catch(err){
//         console.log("get all users router failes")
//         res.send(500).json({
//             message:"get all users route failed"
//         })
//     }
// })
module.exports=userRouter