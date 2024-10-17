const express= require("express")
const movieRouter= express.Router();
// const Movie=require("../models/movieModel");
const { addMovie, getAllMovies, updateMovie, deleteMovie } = require("../controller/movieController");


// adding movies
movieRouter.post("/add-movie",  addMovie)

// get all movies
movieRouter.get("/get-all-movies", getAllMovies);

// Update movie
movieRouter.put("/update-movie", updateMovie);

//delete a movie
movieRouter.put("/delete-movie",deleteMovie);

module.exports=movieRouter