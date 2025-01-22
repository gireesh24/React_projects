const mongooes=require('mongoose')
const DB_URL=process.env.Db_url;

const connectToDb= async()=>{
    try{
        await mongooes.connect(DB_URL);
        console.log("connected Db successfully")
    }catch(err){
        console.log("failed to connect DB",err)
        
    }
}

module.exports=connectToDb