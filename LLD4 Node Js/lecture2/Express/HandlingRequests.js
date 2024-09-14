const http=require("express")

const app=express();
const port=2000
app.listen(port,(req,res)=>{
    console.log("server started")
})

app.get("/",(req,res)=>{
    res.send ('<h1> hello world </hl>')
})