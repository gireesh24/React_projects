const movieRoute= require("express").Router();
// const movies=require("../models/movies");
const {addMovie,
    deleteMovie,
    updateMovie,
    getAllMovies
} =require("../controllers/movieController");

// add movies
movieRoute.post("/add-movie", addMovie)
// get all movies
movieRoute.post("/get-all-movie", getAllMovies)
// upadate a movie
movieRoute.post("/update-movie", updateMovie)
// deleate a movie
movieRoute.post("/delete-movie", deleteMovie)

module.exports=movieRoute;