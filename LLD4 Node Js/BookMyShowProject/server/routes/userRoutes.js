const express=require("express")
const user=require('../models/userModules')
const jwt=require("jsonwebtoken")
const auth=require("../middleware/authMiddleware")
const userRouter=express.Router();

userRouter.post("/", async (req,res)=>{
    try{
        const userExisit=await user.findOne({email:req.body.email})
        if(userExisit){
            return res.send({
                success:false,
                message:"user alredy exists"
            })
        }
        const newUser= new user(req.body)
        await newUser.save();
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
})

userRouter.post("/register", async (req,res)=>{
try{
const userExisit= await user.findOne({email:req.body.email})
if(userExisit){
return res.send({
    success:false,
    message:"user is alredy exists",
});
}
const newuser= new user(req.body);
await newuser.save();
res.send({
    success:true,
    message:"user created successfully",
    data:newuser
})
}catch(err){
console.log("user registaion failed",err)
}
})

// login route
userRouter.post("/login", async (req,res)=>{
    try{
const userexists= await user.findOne({email:req.body.email})
if(!userexists)
{
    return res.send({
        success:false,
        message:"user not found"
    })
}

if(req.body.password !== userexists.password){
    return res.send({
        success:false,
        message:"invalid password"
    })
 }
// jwt token creation
const token=jwt.sign({userId:userexists._id}, process.env.Jwt_Scret,{expiresIn:"1d"});
console.log("jwt token in login route", token)

 res.send({
    success:true,
    message:"user logied in successfully",
    data:token
 });

    }
    catch(err){
        res.status(400).send({
            message:err.message
        })
    }

})

userRouter.get("/", async (req,res)=>{
    const dbData= await user.find();
    if(dbData){
        return res.status(200).send(dbData)
    }
    return res.status(400).json({
        message: "there is no data in db"
    })
})
userRouter.get("/demo", (req,res)=>{
    res.status(200).send({
        success:true,
        message:"welcome to users page"
    })
})

userRouter.get("/get-current-user", auth,  async (req,res)=>{
    try
   {
    //  console.log(req.url, req.method)
    // console.log("token : ",req.headers("authorization"))
    console.log(req.body,"get current user api body")
    const userdata=await user.findById(req.body.userId)
    
    console.log("get current user in server blcok user data:", userdata)
    res.send({success:true, message:"user authenticated", data:userdata})
    }
    catch(err){
        res.status(400).send({message:"issue in getting current user"})
    }
})

module.exports= userRouter;