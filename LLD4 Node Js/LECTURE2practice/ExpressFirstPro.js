// import express module
const express=require("express");
const app=express();
const port=4000;


app.use(express.json()) // this will use when we recive any data from request this middle where change to json and make it avalable

const longgerMiddleware=((req,res,next)=>{
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}` )
    next();
})
app.use(longgerMiddleware)

// calling midleware for specific routes only
const spcialMiddleware=((req,res,next)=>{
    console.log("special midleware called");
    next()
})
app.get("/special",spcialMiddleware,(req,res)=>{
    res.status(200).json({message:"this is special route to call special middleware"})
})
app.get("/",(req,res)=>{
    res.send("hello express")
});

app.get("/home",(req,res)=>{
    res.send("wolcome to home page")
})
app.post("/data",(req,res)=>{
    res.send("your post method called succesfully")
    // res.send(req.body)
    console.log(req.body)
})
const users=[
    {id:1,name:"raju"},
    {id:2,name:"user 2"}
];



// create a end point for recive user details
app.post("/user",(req,res)=>{
    const newUser=req.body;
    const userId=users.length+1
    newUser.id=userId;
    users.push(newUser);
    res.status(201).json({message:"user created successfully", user:users});
})
// calling user in get methods
app.get("/users",(req,res)=>{
    res.status(201).json({data:users})
})

// route parametrs  /users/1

app.delete("/user/:id",(req,res)=>{
    const userId=req.params.id;
    const userIndex=users.findIndex((user)=>user.id==userId)
    if(userIndex==-1){
        return res.status(404).json({message:"user not found"})
    }
    //removing user from array
    users.splice(userIndex,1);
    res.json({message:"user deleted successfully",user:users})
    console.log("userId:", userId);
    res.json({message:"user delted successfully"})
    
})
 
const host="localhost"
app.listen(port, host, ()=>{
    console.log("express server started")
});
