const express=require('express')
const user=require('../models/usermodel');
const userRouter= express.Router();

userRouter.post('/login', async (req,res)=>{
try{
// const body=req.body;
const userExists=await user.findOne({email:req.body.email});
if(!userExists){
return res.status(400).json({
    success:false,
    message:"user not registered"
})
}
if(req.body.password!==userExists.password){
    return res.status(400).json({
        success:false,
        message:"please enter correct password"
    })
}
res.status(200).json({
    success:true,
    message:"user authinticated"
})
}catch(err){
    console.log("login route failed")
    res.status(400).send(err)
}
})

// userRouter.post('/register', async (req,res)=>{
//     try{
//     // const body=req.body;
//     const userExists=await user.findOne({email:req.body.email});
//     if(userExists){
//     return res.status(400).json({
//         success:false,
//         message:"user alredy exisit"
//     })
//     }
//     const newuser= new user(req.body);
//     await newuser.save();

//     res.status(200).json({
//         success:true,
//         message:"user created successfully"
//     })
//     }catch(err){
//         console.log("login route failed")
//         res.status(400).send(err)
//     }
//     })
    
userRouter.post("/register", async (req, res) => {
    try {
      const userExists = await user.findOne({ email: req.body.email });
      if (userExists) {
        return res.send({
          success: false,
          message: "User already exists",
        });
      }
      const newUser = new user(req.body);
      await newUser.save();
      res.send({
        success: true,
        message: "Registration Successfull. Please login to continue",
      });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  });

    userRouter.get("/allusers", async (req,res)=>{
        try{
            const dbusers= await user.find();
            res.status(200).send(dbusers)
        }catch(err){
            console.log("get all user api failed in server")
            res.send(400).send(err)
        }
    })
    module.exports=userRouter