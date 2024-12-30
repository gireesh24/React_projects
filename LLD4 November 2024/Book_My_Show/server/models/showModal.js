const mongooes=require("mongoose");
const showSchema= new mongooes.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    movie:{
        type:mongooes.Schema.Types.ObjectId,
        ref:"NovMovies",
        required:true
    },
    ticketPrice:{
        type:Number,
        required:true
    },
    totalSeats:{
        type:Number,
        required:true
    },
    bookedSeats:{
        type:Number,
        required:true
    },
    theatre:{
        type:mongooes.Schema.Types.ObjectId,
        ref:"novtheaters",
        required:true
    },
},{timestamps:true})

const shows= mongooes.model("novShows", showSchema);

module.exports=shows