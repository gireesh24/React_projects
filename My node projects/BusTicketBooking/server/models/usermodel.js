const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{ type:String, required:true},
    email:{ type:String, required:true},
    password:{ type:String, required:true},
    isadmin:{type:Boolean, required:true, default:false},
    role:{
        type:String,
        required:true,
        default:'user',
        enum:['admin','user','partner']
    }
})

const userModel=mongoose.model("user",userSchema)
module.exports=userModel;
