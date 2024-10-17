const Movie= require("../models/movieModel")
const addMovie =  async (req,res)=>{
    try{
        const newMovie= new Movie(req.body);
        newMovie.save();
        res.send({
            success: true,
            message:"movie created succesfully",
            data:newMovie
        })
    }
    catch(err){
        res.status(400).send({
            success:false,
            message: "add movie failed"})
    }
}
// get movies
const getAllMovies= async(req,res)=>{
    try{
        const allMovies= await Movie.find();
        res.send({
            success: true,
            message:"all movies fecthed",
            data:allMovies
        })
    }catch(err){
        res.status(400).send({
            success:false,
            message:"not able to fecth all movies", 
            message:err.message
        })
    }
}

//update movie
const updateMovie= async(req,res)=>{
    try{
        const isExists= await Movie.findById(req.body.movieId);
        // if(!isExists){
        //     return res.send({
        //         success:false,
        //         message:"movie not exists"
        //     })
        // }
        const updatedMovie=await Movie.findByIdAndUpdate(req.body.movieId, req.body,{new:true});
        if(!updateMovie){
            return res.send({
                success:false,
                message:"movie not exists"
            })
        }else{
            return res.status(200).send({
                success:true,
                message:"update movies succesfully",
                data:updatedMovie
            })
        }
        // res.status(200).send({
        //     success:true,
        //     message:"update movies succesfully",
        //     data:updatedMovie
        // })
    }catch(err){
        res.send(400).send({
            success:false,
            message:err.message,
            message:"failed to update movie",
        })
    }
}

// delete movie
const deleteMovie= async(req,res)=>{
    try{
        const isExists= await Movie.findById(req.body.movieId);
        if(!isExists){
            return res.send({
                success:false,
                message:"movie not exists"
            })
        }
        const movieList=await Movie.findByIdAndDelete(req.body.movieId)
        console.log(req.body.movieId);
        res.status(200).send({
            success:true,
            message:"movie deleted successfully",
            data:movieList
        })
    }catch(err){
        res.status(400).send({
            success:false,
            message:err.message,
            message:"failed to delete movie"
        })
    }
}

module.exports={
    addMovie,
    getAllMovies,
    updateMovie,
    deleteMovie
}