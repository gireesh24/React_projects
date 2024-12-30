const router=require("express").Router();
 const {
   addShows,
   updateShows,
   deleteShows,
   getAllShowsByTheatre,
   getAllShowsByMovie,
   getShowsById
 }=require("../controllers/showController")
// add shows
router.post("/add-shows",addShows);
//update shows
router.post("/update-shows",updateShows);
//delete shows
router.delete("/delete-shows",deleteShows);
//getallshows theatre
router.get("/get-all-shows-by-theatre",getAllShowsByTheatre);
// get shows by movie
router.get("/get-all-theatres-by-movie", getAllShowsByMovie);
// get shows by id
router.get("/get-shows-by-id", getShowsById);
module.exports=router;