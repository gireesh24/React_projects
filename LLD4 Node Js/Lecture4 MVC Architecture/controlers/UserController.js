const UserModel=require("../models/user");

const getAllUser= async (req,res)=>{
    try{
        const data= await UserModel.find();
        return res.status(200).send(data)
    }
    catch(err){
        return res.status(500).send(err)
    }
}

// create a user route
const createUser= async(req,res)=>{
    try{
        const body=new UserModel(req.body);

        const savedUser= await body.save();
        return res.status(201).send(savedUser)
    }
    catch(err){
        console.log(req.method)
        return res.status(500).send(err)
    }
}

module.exports={
    getAllUser,
    createUser
}