
const mongooes=require("mongoose")
const DbUrl=`mongodb+srv://gireeshvysyaraju:dBYDYNrt4stNUKPn@cluster0.g58qy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const connectDB= async ()=>{
    try{
        await mongooes.connect(DbUrl)
        console.log("Data base connect established successfully")
    }catch(err){
        console.log(err)
    }
}

module.exports=connectDB;