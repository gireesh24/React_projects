const express=require("express");
const app=express();
const port=3000;

app.use(express.static("public"));
const users=[
    {id:1,name:"raju"},
    {id:2,name:"user 2"}
];
app.get("/",(req,res)=>{
    res.status(200).json({message:"welcome to home page"})
    res.send("hello world")
})

// create a end point for recive user details
app.post("/user",(req,res)=>{
    const newUser=req.body;
    const userId=users.length+1
    newUser.id=userId;
    users.push(newUser);
    res.status(201).json({message:"user created successfully", user:users});
})

// query parameters (/search?name=raju&id=3)
app.get("/search",(req,res)=>{
    const query=req.query;
    console.log("query params:", query)
    res.send(`your query parameters: ${JSON.stringify(query)}`)
})

app.use((req,res)=>{
    res.status(404).send("page not found")
})
const host="localhost";
app.listen(port,host,(req,res)=>{
    console.log("server started successfully")
})