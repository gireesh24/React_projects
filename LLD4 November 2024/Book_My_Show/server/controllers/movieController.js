const movies=require("../models/movies");
// add movie
const addMovie=  async (req,res)=>{
    try{
        const newmovies= new movies(req.body);
        await newmovies.save();
        res.status(200).send({
            success:true,
            message:"movie addedd successfully"
        })
    }catch(err){
        console.log("add movie routes failed in server side",err)
        res.send({
            success:false,
            message:err.message
        });
    }
}
// get movies
const getAllMovies= async(req,res)=>{
    try{
        const allmovies= await movies.find();
        res.send({
            success:false,
            message:err.message,
            data:allmovies 
        });
    }catch(err){
        console.log("get all movies routes failed in server side",err)
        res.send({
            success:false,
            message:err.message
        }); 
    }
}

// update a movies
const updateMovie=async (req,res)=>{
    try{
    const updatedMovie= await movies.findByIdAndUpdate(req.body.movie_id, req.body, {new:true});
    if(!updatedMovie){
        res.status(404).send({
            success:false,
            message:"movie not found"
        })
    }
    console.log("update movie route in server side", updatedMovie)
        res.status(200).send({
            success:true,
            message:"movie addedd successfully",
            data:updatedMovie

        })
    }
    catch(err){
        console.log("update movies routes failed in server side",err)
        res.send({
            success:false,
            message:err.message
        });  
    }
}

// delete a movie

const deleteMovie=async (req,res)=>{
    try{
    const deletedMovie= await movies.findByIdAndDelete(req.body.movie_id, req.body);
    if(!deletedMovie){
        res.status(404).send({
            success:false,
            message:"movie not found"
        })
    }
    console.log("update movie route in server side", deletedMovie)
        res.status(200).send({
            success:true,
            message:"movie addedd successfully",

        })
    }
    catch(err){
        console.log("update movies routes failed in server side",err)
        res.send({
            success:false,
            message:err.message
        });  
    }
}

module.exports={
    addMovie,
    getAllMovies,
    updateMovie,
    deleteMovie
}