const route=require("express").Router();
const { Router } = require("express");
const Theatre= require("../models/theatreModel")

route.post("/add-theatre", async (req,res)=>{
    try{
const newTheatre= new Theatre(req.body);
await newTheatre.save();
res.send({
    success:true,
    message:"new theater created successfully"
})
    }
    catch(err){
        res.status(500).send({
            success:false,
            message:err.message
        });
    }
})

route.put("/update-theatre", async (req,res)=>{
    try{
        const theatre=await Theatre.findByIdAndUpdate(req.body.theatreId, req.body, {new:true});
        if(!theatre){
            return res.status(404).send({
                success:false,
                message:"theatre not found"
            })
        }
        else{
            res.send({success:true, message:"theatre updated successfully"})
        }
    }
    catch(err){
            res.status(500).send({
            success:false,
            message:err.message
        });
    }
});

route.delete("/delete-theatre", async (req,res)=>{
    try{
console.log("deleting theatre", req.params.theatreId)
const theatre=await Theatre.findByIdAndDelete(req.params.theatreId)
if(!theatre){
    return res.status(404).send({
        success:false,
        message:"theatre not found"
    })
}
else{
    res.send({success:true, message:"theatre deleted successfully"})
}
    }catch(err){
        res.status(500).send({
            success:false,
            message:err.message
        }); 
    }
})
// get all theatres from admin
route.get("/get-all-theatres", async (req,res)=>{
    try{
        // it like sub querry to find all theatres for owneres
        const allTheatres= Theatre.find().populate("owner"); // owner user details will popuplate by finding user detials in usermodel
        res.send({
            success:true,
            message:"all theatres fecthed",
            data:allTheatres
        })
    }catch(err){
            res.status(500).send({
                success:false,
                message:err.message
            }); 
    }
});

// to get theatres for specific owner
route.get("/get-all-theatres-by-owner/:ownerId", async (req,res)=>{
    try{
const allTheatres= Theatre.find({owner:req.params.ownerId});
res.send({
    success:true,
    message:"all theatres fecthed",
    data:allTheatres
})
    }catch(err){
        res.status(500).send({
            success:false,
            message:err.message
        }); 
    }
})

module.exports=route;