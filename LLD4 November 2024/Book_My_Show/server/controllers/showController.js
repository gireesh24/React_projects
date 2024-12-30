// const shows = require("../models/showModal");
const shows = require("../models/showModal");

const addShows= async (req,res)=>{
    try{
        const newShow= new shows(req.body);
        await newShow.save();
        res.status(200).send({
            success:true,
            message:"shows added successfully",
            data:newShow
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        })
    }
}

//delete Shows

const deleteShows=async(req,res)=>{
    try{
        await shows.findByIdAndDelete(req.body.showId);
        res.send({
            success:true,
            message:"show deleted successfully"
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        }) 
    }
}

// updateshows
const updateShows= async(req,res)=>{
    try{
const updatedShow= await shows.findByIdAndUpdate(req.body.showId, req.body, {new:true});
res.send({
    success: true,
    message:"show updated successfully",
    data:updatedShow
})
    }catch(err){
        res.send({
            success:false,
            message:err.message
        }) 
    }
}

//get all shows by theatre
const getAllShowsByTheatre=async(req,res)=>{
    try{
        const shows= await shows.find({theatre:req.body.theatreId}).populate("movie");
        res.status(200).send({
            success:true,
            message:" all thatres shows fetched successfully",
            data:shows
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        }) 
    }
}

// get all theatre By movies
const getAllShowsByMovie=async(req,res)=>{
    try{
        const {movie,date}=req.body;
        const movieShows= await shows.find({movie,date}).populate("theatre");
        let uniquetheatres=[];
        movieShows.forEach((show)=>{
            let isTheatre=uniquetheatres.find(
                (theatre)=>theatre._id===show.theatre._id
            )
      
        if(!isTheatre){
            let showOfThisTheatre=movieShows.filter(
                (showObj)=>showObj.theatre._id===show.theatre._id
            );
            uniquetheatres.push({
                ...show.theatre._doc,
                movieShows:showOfThisTheatre
            });
              }
         })
        res.status(200).send({
            success:true,
            message:"shows added successfully",
            data:uniquetheatres
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        }) 
    }
}

// get shows by id
const getShowsById=async(req,res)=>{
    try{
        const showsById= await shows.findById(req.body.showId)
        .populate("movie").populate("theatre");
        res.status(200).send({
            success:true,
            message:"shows fetched successfully by show id",
            data:showsById
        })
    }catch(err){
        res.send({
            success:false,
            message:err.message
        }) 
    }
}
module.exports={
    addShows,
    updateShows,
    deleteShows,
    getAllShowsByTheatre,
    getAllShowsByMovie,
    getShowsById
}