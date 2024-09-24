const express=require("express")
const {
    getAllUser,
    createUser
}=require("../controlers/UserController")

const userRouter= express.Router();

userRouter.get("/",getAllUser);
userRouter.post("/",createUser)

module.exports={
    userRouter
}
