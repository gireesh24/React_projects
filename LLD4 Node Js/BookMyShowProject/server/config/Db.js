const mongooes=require('mongoose')
const dbUrl=process.env.DbString;
console.log("db url is",dbUrl)
const connectDB= async ()=>{
    try{
        await mongooes.connect(dbUrl);
console.log("connected to DB")
    }catch(err){
        console.log("Error to connect DB ",err);
        }
}

module.exports=connectDB;