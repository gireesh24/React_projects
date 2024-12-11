const express=require('express');
// const app=express();

const login= async(req,res)=>{
    
}



const {login, register, getCurrentUser}=require('../routes/userRoutes');
const userRouter=express.Router();
userRouter.post('/login',login);
userRouter.post('/register',register);
userRouter.get('/get-current-user',getCurrentUser);

module.exports=userRouter;