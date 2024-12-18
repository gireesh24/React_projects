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
movieRoute.get("/get-all-movie", getAllMovies)
// upadate a movie
movieRoute.post("/update-movie", updateMovie)
// deleate a movie
movieRoute.delete("/delete-movie/:movie_id", deleteMovie)

module.exports=movieRoute;