const mongooes=require("mongoose")
const useerSchema=new mongooes.Schema({
    name:{
        type: String,
        require:true,
    },
    email:{
        type: String,
        require:true,
        unique:true
    },
    password:{
        type: String,
        require:true,
    },
     isAdmin:{
        type: String,
        require:true,
        default:false
    },
    role:{
        type:String,
        require:true,
        enum:["admin" ,"user", "partner"],
        default:"user",
    }
})

const UserModel=mongooes.model("UserModel", useerSchema);
module.exports=UserModel;