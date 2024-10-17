const mongooes=require("mongoose")

const movieSchema=new mongooes.Schema({
    title: {type:String, require:true},
    description: {type:String, require:true},
    duration: {type:Number, require:true},
    genre: {type:String, require:true},
    releaseDate: {type:Date, require:true},
    poster: {type:String, require:true},

});

const Movies=mongooes.model("movies",movieSchema)

module.exports=Movies;