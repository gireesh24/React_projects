const mongooes= require("mongoose")
const theaterSchema=new mongooes.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:false
    },
    email:{
        type:String,
        required:false
    },
    owner:{
        type:mongooes.Schema.Types.ObjectId,
        ref:"NovUser"
    },
    isActive:{
        type:Boolean,
        default:false,
    }
},
{timestamps:true});

const theaters= mongooes.model("novtheaters", theaterSchema)
module.exports=theaters