const express= require("express")
const app=express();
const users=require("../models/userModel");

const userRouter=express.Router();
userRouter.post("/register", async (req,res)=>{
    try{
        const userExits= await users.findone({email:req.body.email})
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
            message:"registartion sucessfull please login and continue"
         })
    }
    catch(err){
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
        const userExits= await users.findone({email:req.body.email})
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
res.send({
    success:true,
    message:"login sucessfully"
})

    }
    catch(err){
return res.status(500).send(err)
    }
})
module.exports=userRouter