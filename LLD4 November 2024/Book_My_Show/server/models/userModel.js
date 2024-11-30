const mongooes=require("mongoose");
const userSchema= new mongooes.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    isAdmin:{type:Boolean, required:true, default:false}
})

const UserModel= mongooes.model("NovUsers",userSchema);
module.exports=UserModel;