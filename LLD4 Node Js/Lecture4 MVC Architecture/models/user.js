const mongooes=require("mongoose")
const userSchema= new mongooes.Schema({
name: {
    type: String,
    minLength:3,
    required:true
},
age:{
    type:Number,
    max:40,
    required:true
},
email:{
    type:String,
    required:false
},
},{timestamps:true});

userSchema.pre("save",function(){
    if(this.age<18){
        console.log("age shoulg be in 18 to 50")
        throw new Error("age between 18 to 50");
        
    }
    else{
        // next();
    }
})

const UserModel=mongooes.model("UserDb",userSchema) // UserDb collection create in mangooes

module.exports=UserModel;