const mongooes =require('mongoose')
const theatreSchema=new mongooes.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    owner:{ // forgin key to refer user modle
        type:mongooes.Schema.Types.ObjectId,
        ref:"users"
    },
    isActive:{
        type:Boolean,
        default:false
    },
},{timestamps:true}
);

const Theatre=mongooes.model("theatres",theatreSchema);
module.exports={
    Theatre
}